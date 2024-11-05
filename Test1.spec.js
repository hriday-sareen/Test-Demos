const {test, expect} = require('@playwright/test')

test('Test 1', async ({page}) => {

   await page.goto('https://google.com');
   await expect(page).toHaveTitle('Google');
})