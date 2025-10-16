// import { test, expect } from '@playwright/test';

// test('Verify Login Page', async ({ page }) => {
//   await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
//   await page.getByText('Username: Password: Login In').click();
//   await page.getByRole('textbox', { name: 'Username:' }).click();
//   await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
//   await page.getByRole('textbox', { name: 'Password:' }).click();
//   await page.getByRole('textbox', { name: 'Password:' }).fill('test');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('heading', { name: 'List of All Orders' }).click();
//   await expect(page.locator('h2')).toContainText('List of All Orders');
//   await page.getByRole('link', { name: 'Logout' }).click();
//   await page.getByText('Username: Password: Login In').click();
//   await page.getByRole('button', { name: 'Login' }).click();

// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  await page.getByText('Username: Password: Login In').click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('Tester');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Orders' , exact:true}).click();
  await page.getByLabel('Product:*').selectOption('FamilyAlbum');
  await page.getByLabel('Product:*').selectOption('ScreenSaver');
  await page.getByLabel('Product:*').selectOption('FamilyAlbum');
  await page.getByRole('textbox', { name: 'Quantity:*' }).click();
  await page.getByRole('link', { name: 'Process' }).click();
  await page.getByText('Quantity:* Field \'Quantity\'').click();
  await page.getByText('Field \'Customer name\' cannot').click();
  await page.getByText('Field \'Street\' cannot be').click();
  await page.getByText('Field \'Zip\' cannot be empty.').click();
  await page.getByText('Field \'City\' cannot be empty.').click();
  await page.getByText('Select a card type.').click();
  await page.getByText('Field \'Card Nr\' cannot be').click();
  await page.getByText('Field \'Expire date\' cannot be').click();
  await page.getByRole('textbox', { name: 'Quantity:*' }).click();
  await page.getByRole('textbox', { name: 'Quantity:*' }).fill('78');
  await page.getByRole('textbox', { name: 'Discount:' }).click();
  await page.getByRole('textbox', { name: 'Customer name:*' }).click();
  await page.getByRole('textbox', { name: 'Customer name:*' }).fill('Test');
  await page.getByRole('textbox', { name: 'Street:*' }).click();
  await page.getByRole('textbox', { name: 'Street:*' }).fill('test');
  await page.getByRole('textbox', { name: 'City:*' }).click();
  await page.getByRole('textbox', { name: 'City:*' }).fill('tea');
  await page.getByRole('textbox', { name: 'State:' }).click();
  await page.getByRole('textbox', { name: 'State:' }).fill('tes');
  await page.getByRole('textbox', { name: 'City:*' }).click();
  await page.getByRole('textbox', { name: 'Zip:*' }).click();
  await page.getByRole('textbox', { name: 'Zip:*' }).fill('78900');
  await page.getByRole('radio', { name: 'Visa' }).check();
  await page.getByRole('textbox', { name: 'Card Nr:*' }).click();
  await page.getByRole('textbox', { name: 'Card Nr:*' }).fill('7890789067');
  await page.getByRole('textbox', { name: 'Expire date (mm/yy):*' }).click();
  await page.getByRole('textbox', { name: 'Expire date (mm/yy):*' }).fill('09/25');
  await page.getByRole('link', { name: 'Process' }).click();
  await page.getByText('Process New order has been').click();
  await page.getByRole('cell', { name: 'Product Information Product:* MyMoney Quantity:* 0 Price per unit: 100 Discount: 0 % Total: 0 Calculate Address Information Customer name:* Street:* City:* State: Zip:* Payment Information Card:* Visa MasterCard American Express Card Nr:* Expire date (mm/yy):* Process Reset New order has been successfully added.', exact: true }).click();
  await page.getByText('New order has been').click();
  await page.getByRole('button', { name: 'Reset' }).click();
});