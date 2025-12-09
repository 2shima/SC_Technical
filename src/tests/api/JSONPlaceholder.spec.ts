import { test, expect } from '@playwright/test';
import DemoAPI from "@apiActions/demoActions";
import placeholderPost from "@testData/api/placeholderPost.json";

test('Fetch a post ', async () => {
    const demoAPI = new DemoAPI();
    const response: Response = await demoAPI.fetchPost(1);
    expect(response.status).toBe(200);
    const responseBody = await response.json();
    expect(JSON.stringify(responseBody)).toBe(JSON.stringify(placeholderPost));
});