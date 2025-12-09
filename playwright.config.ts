import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const timeInMinutes: number = 60 * 1000;
export default defineConfig({
  use: {
    headless: false,
    trace: 'on-first-retry',
  },
  testDir: './src/tests',
  timeout: Number.parseInt(process.env.TEST_TIMEOUT, 10) * timeInMinutes,
  retries: Number.parseInt(process.env.TEST_RETRIES, 10),
  reporter: [
    ['html', { open: 'never', outputFolder: 'test-report/html' }],
    ['allure-playwright',
      {
        resultsDir: 'test-report/allure-results',
      }
    ]
  ],
  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
