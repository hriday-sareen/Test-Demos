import { test, expect } from '@playwright/test';

async function login(page, username, password) {
    await page.goto('https://demo-phygital.maxicus.com/app');
    await expect(page).toHaveTitle('Igzy');
    await page.getByLabel('Email*').fill(username);
    await page.getByLabel('Password*').fill(password);
    await page.click('button[type="submit"]');
    //await expect(page.locator('#email-label')).toHaveText('Email*');
    await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
   
}

test('Invalid Credentials', async ({ page }) => {
    const credentials = [
      {username: 'abc"@gmail.com', password: 'abc'},
      // {username: 'abc$@gmail.com', password: 'Hri@1234'},
      {username: 'abc@ab@gmail.com', password: 'abc'},
      {username: 'abc..@gmail.com', password: 'abcd'},
      {username: '.abc@gmail.com', password: 'abcde'},
      {username: 'ab c@gmail.com', password: 'abcdef'},
      // {username: 'abc#@gmail.com', password: 'abcdefg'},
      // {username: "ab'c@gmail.com", password: 'abcdef'},
      {username: 'ab)c@gmail.com', password: 'abcdef'},
      {username: 'ab:c@gmail.com', password: 'abcdef'},
      {username: 'ab;c@gmail.com', password: 'abcdef'},
      //{username: 'ab\c@gmail.com', password: 'abcdef'},
      //{username: 'ab!c@gmail.com', password: 'abcdef'},
      {username: 'ab>c@gmail.com', password: 'abcdef'},
      {username: 'ab,c@gmail.com', password: 'abcdef'},
      //{username: 'ab`c@gmail.com', password: 'abcdef'},
      //{username: 'ab|c@gmail.com', password: 'abcdef'},
      //{username: 'ab&c@gmail.com', password: 'abcdef'},
      //{username: 'ab?c@gmail.com', password: 'abcdef'},
      {username: 'abcgmail.com', password: 'abcdef'},
      {username: 'abc@ab', password: 'abcdef'},
      //{username: 'ab%c@gmail.com', password: 'abcdef'},
      //{username: 'ab~c@gmail.com', password: 'abcdef'},
      //{username: 'ab/c@gmail.com', password: 'abcdef'},
    ];

    for (const { username, password } of credentials) {
        await login(page, username, password);
        await page.waitForTimeout(1500);
    }
})