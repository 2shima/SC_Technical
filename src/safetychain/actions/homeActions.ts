import { Page, Locator, test, expect } from '@playwright/test';
import HomeConstants from '@uiConstants/homeConstants';
import DemoConstants from '@uiConstants/demoConstants';

export default class HomePage {
    /**
    * SafetyChain Home Page
    * @remarks
    * URL: https://safetychain.com/
    */
    private readonly page: Page;
    private readonly demoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.demoButton = page.getByText(HomeConstants.DEMO_BUTTON).first();
    }

    public async bookADemo() {
        await test.step('Click Book a Demo button', async () => {
            await this.page.waitForLoadState('domcontentloaded');
            await this.demoButton.click({ force: true }); // Force click to handle overlay issue
            await expect(this.page).toHaveURL(DemoConstants.DEMO_URL);
        });
    }
}