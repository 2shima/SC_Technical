import { Page, test, expect, Locator } from '@playwright/test';
import { DemoFormInfo } from '@uiConstants/demoConstants';
import DemoConstants from '@uiConstants/demoConstants';

export default class DemoPage {
    /**
    * SafetyChain Demo Booking Page
    * @remarks
    * URL: https://safetychain.com/book-a-demo
    */

    private readonly page: Page;
    private readonly emailInput: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly companyNameInput: Locator;
    private readonly jobTitleInput: Locator;
    private readonly phoneNumberInput: Locator;
    private readonly stateDropdown: Locator;
    private readonly revenueDropdown: Locator;
    private readonly agreeCheckbox: Locator;
    private readonly submitButton: Locator;
    private readonly submitConfirmationText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByLabel(DemoConstants.EMAIL_INPUT);
        this.firstNameInput = page.getByLabel(DemoConstants.FIRST_NAME_INPUT);
        this.lastNameInput = page.getByLabel(DemoConstants.LAST_NAME_INPUT);
        this.companyNameInput = page.getByLabel(DemoConstants.COMPANY_NAME_INPUT);
        this.jobTitleInput = page.getByLabel(DemoConstants.JOB_TITLE_INPUT);
        this.phoneNumberInput = page.getByLabel(DemoConstants.PHONE_NUMBER_INPUT);
        this.stateDropdown = page.getByLabel(DemoConstants.STATE_DROPDOWN);
        this.revenueDropdown = page.getByLabel(DemoConstants.REVENUE_DROPDOWN);
        this.agreeCheckbox = page.locator(DemoConstants.AGREE_CHECKBOX);
        this.submitButton = page.getByRole('button', { name: DemoConstants.SUBMIT_BUTTON });
        this.submitConfirmationText = page.getByText(DemoConstants.FORM_SUBMISSION_CONFIRMATION_TEXT);
    }

    // This could be broken down into smaller methods for each field if desired,
    //  e.g. to verify field-specific behaviors or validations
    public async fillRequestForm(formInfo: DemoFormInfo) {
        await test.step('Fill out the demo request form', async () => {
            await expect(this.firstNameInput).toBeHidden(); // Input should not appear until email is filled
            await this.emailInput.fill(formInfo.businessEmail);
            await expect(this.firstNameInput).toBeInViewport(); // Input should appear after email is filled
            await this.firstNameInput.fill(formInfo.firstName);
            await this.lastNameInput.fill(formInfo.lastName);
            await this.companyNameInput.fill(formInfo.companyName);
            await this.jobTitleInput.fill(formInfo.jobTitle);
            await this.phoneNumberInput.fill(formInfo.phoneNumber);
            await this.stateDropdown.selectOption(formInfo.state);
            await this.revenueDropdown.selectOption(formInfo.revenue);
            await this.agreeCheckbox.check();
        });
    }

    public async submitRequestForm() {
        await test.step('Submit the demo request form', async () => {
            await expect(this.submitButton).toBeEnabled();
            // await this.submitButton.click(); // Disabled to prevent actual submission during tests
        });
    }

    public async validateFormSubmission() {
        await test.step('Validate form submission', async () => {
            // Server response validated separately in... [this is where I would put my corresponding API test name/path, if I had one]
            await expect(this.submitConfirmationText).not.toBeVisible();
        });
    }
}