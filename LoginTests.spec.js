import { test, expect } from '@playwright/test';

test.describe('Login With Invalid Usernames', () => {
test('Correct Credentials', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.getByLabel('Email*').click();
  await page.getByLabel('Email*').fill('hriday.sareen@kocharsoft.in');
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('Hri@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('ul')).toHaveClass(/nav-items/);
  await page.getByRole('img', { name: 'Hriday' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.close();
})

test('Hashtag in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.getByLabel('Email*').click();
  await page.getByLabel('Email*').fill('abc#@gmail.com');
  await page.getByLabel('Password*').click();
  await page.getByLabel('Password*').fill('Hri@1234');
  await page.getByRole('button', { name: 'Login' }).click();
  //await expect(page.locator('.css-kderer')).toHaveText(('Please sign-in to your account and start the adventure'))
  //Dont use css-kderer in above line as a locator because it is a gibrish class
  //await expect(page.locator('#email-label')).toHaveText('Email*');
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Dollar in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('abc$2@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Double Quotes in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('abc"@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Two @ in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('abc@ab@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Double Dots in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab..c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Start with Dot in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('.abc@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Space in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Single Quote in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill("ab'c@gmail.com");
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Bracket in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab(c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('BackSlash in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab\\de@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Colon in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab:c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Semi Colon in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab;c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Exclamation in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab!c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Arrow in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab>@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Comma in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab,c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('BackTick in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab`c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Or Sign in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab|c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('And Sign in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab&c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Question Mark in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab?c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Without @ in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('abcgmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Without domain in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('abc@abc');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})


test('Percentage in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('abc%c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Approximate in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab~c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})

test('Slash in Email', async ({ page }) => {
  await page.goto('https://demo-phygital.maxicus.com/app');
  await expect(page).toHaveTitle('Igzy');
  await page.locator('id=email').fill('ab/c@gmail.com');
  await page.locator('id=auth-login-password').fill('Hri@1234');
  await page.getByRole('button',{name: 'Login'}).click();
  await expect(page.locator('#email-helper-text')).toHaveText('Please Enter valid Email');
  await page.close();
})
})
