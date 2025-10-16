import { readFileSync } from 'fs';
import { test, expect } from '@playwright/test';
import { queryObjects } from 'v8'; 
 
// Reads the JSON file and saves it  
let Objects = readFileSync('./tests/TestData/WebOrder_Login.json')
const users = JSON.parse(Objects.toString());

for (const record of users) {
  test(`WebOrder Login: ${record.test_case}`, async ({ page }) => {
    //console.log(record.name, record.password, record.exp_result);
    await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
    await page.getByLabel('Username:').fill(record.name);
    await page.getByLabel('Password:').fill(record.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx');
    await expect(page.locator('h2')).toContainText(record.exp_result);  
    await page.getByRole('link', { name: 'Logout' }).click();
    const login = page.locator('#ctl00_MainContent_login_button');
    await expect(login).toBeVisible();

});
}


//Argument of type 'NonSharedBuffer' is not assignable to parameter of type 'string'.