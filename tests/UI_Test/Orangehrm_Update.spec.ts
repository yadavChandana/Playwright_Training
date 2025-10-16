
  import { test, expect } from '@playwright/test';

  test('Login to OrangeHRM @Smoke', async ({ page }) => {

    // Go to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Click [placeholder="Username"]
    await page.locator('[placeholder="Username"]').click();

    // Fill [placeholder="Username"]
    await page.locator('[placeholder="Username"]').fill('Admin');

    // Click [placeholder="Password"]
    await page.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill('admin123');

    // Click button:has-text("Login")
    await page.locator('button:has-text("Login")').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // Click span:has-text("Admin")
    await page.locator('span:has-text("Admin")').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

    // Click text=Add
    await page.locator('text=Add').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');

    // Click text=User Role-- Select -- >> i
    await page.locator('text=User Role-- Select -- >> i').click();

    // Click div[role="option"]:has-text("Admin")
    await page.locator('div[role="option"]:has-text("Admin")').click();

    // Click text=Status-- Select -- >> i
    await page.locator('text=Status-- Select -- >> i').click();

    // Click div[role="option"]:has-text("Enabled")
    await page.locator('div[role="option"]:has-text("Enabled")').click();

    // Click [placeholder="Type for hints\.\.\."]
    await page.locator('[placeholder="Type for hints\\.\\.\\."]').click();

    // Fill [placeholder="Type for hints\.\.\."]
    await page.locator('[placeholder="Type for hints\\.\\.\\."]').fill('a');
    await page.waitForTimeout(1000)
    // Click text=Fiona Grace
    await page.locator('text=Ranga  Akunuri').click();

    // Click input >> nth=2
    await page.locator('input').nth(2).click();
    const ExpUserName = 'Chand'+ Math.random() * 100;
    // Fill input >> nth=2
    await page.locator('input').nth(2).fill(ExpUserName);
    //await page.waitForTimeout(1000)
    // Click text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
    await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').click();

    // Fill text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]
    await page.locator('text=PasswordFor a strong password, please use a hard to guess combination of text wi >> input[type="password"]').fill('Admin@123');
    await page.waitForTimeout(1000)
    // Click input[type="password"] >> nth=1
    await page.locator('input[type="password"]').nth(1).click();

    // Fill input[type="password"] >> nth=1
    await page.locator('input[type="password"]').nth(1).fill('Admin@123');

    // Click text=Save
    await page.locator('text=Save').click();
    await page.waitForTimeout(1000)
    //await page.waitForTimeout(9000)
    await page.check("//div[text()='"+ExpUserName+"']/parent::div/preceding-sibling::div//i");
    //Click on Edit of Added user and Update the Role to ESS from Admin and Verify that it got updated
    await page.locator("//div[text()='"+ExpUserName+"']/parent::div/following-sibling::div//button[2]/i").click();
      // Click text=User Role-- Select -- >> i
      await page.locator('text=User Role-- Select -- >> i').click();

      // Click div[role="option"]:has-text("Admin")
      await page.locator('div[role="option"]:has-text("ESS")').click();
      const ExpUserName1 = 'Chand'+ Math.random() * 100;
      await page.locator('input').nth(2).fill(ExpUserName1);
      await page.waitForTimeout(1000)
      // Click text=Save
      await page.locator('text=Save').click();
      //Forceful Wait
      //await page.waitForTimeout(1000)
      // Dynamic Time - waiting for Object to Load
      await page.waitForSelector("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']");
      await expect(page.locator("//div[text()='"+ExpUserName1+"']/parent::div/following-sibling::div/div").first()).toHaveText('ESS');
    //Click on Logout and Verify user got logged out
    await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();

    // Click text=Logout
    await page.locator('text=Logout').click();
    //await page.waitForTimeout(1000)
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  });