import { test, expect } from '@playwright/test';
import HomePage from "@uiActions/homeActions";
import DemoPage from "@uiActions/demoActions";
import demoInfo from "@testData/ui/demoInfo.json";


test('Request a Demo', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    const homePage = new HomePage(page);
    await homePage.bookADemo();
    const demoPage = new DemoPage(page);
    await demoPage.fillRequestForm(JSON.parse(JSON.stringify(demoInfo)));
    await demoPage.submitRequestForm();
    await demoPage.validateFormSubmission();
});