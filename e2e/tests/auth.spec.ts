import { test, expect } from "@playwright/test";

const MAIN_URL = "http://localhost:5173/";

test("should allow the user to sign in", async ({ page }) => {
  await page.goto(MAIN_URL);

  await page.getByRole("link", { name: "Sign in" }).click();

  await expect(
    page.getByRole("heading", { name: "Sign into your account" })
  ).toBeVisible();

  await page.locator("[name='email']").fill("anakova@mailinator.com");

  await page.getByRole("button", { name: "Continue with email" }).click();

  await expect(
    page.getByRole("heading", { name: "Enter your password" })
  ).toBeVisible();

  await page.locator("[name='password']").fill("qwerty0");

  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByText("Signed In!")).toBeVisible();

  await expect(page.locator("#account-notification")).toBeVisible();
  await expect(page.locator("#account-dropdown")).toBeVisible();
});

test("should allow user to register", async ({ page }) => {
  const randomEmail = `test_user_${
    Math.floor(Math.random() * 90000) + 10000
  }@test.com`;

  await page.goto(MAIN_URL);

  await page.getByRole("link", { name: "Register" }).click();

  await expect(
    page.getByRole("heading", { name: "Create an account" })
  ).toBeVisible();

  await page.locator("[name='firstName']").fill("Test First Name");
  await page.locator("[name='lastName']").fill("Test Last Name");
  await page.locator("[name='email']").fill(randomEmail);

  await page.getByRole("button", { name: "Continue with email" }).click();

  await expect(
    page.getByRole("heading", { name: "Create password" })
  ).toBeVisible();

  await page.locator("[name='password']").fill("azerty123");
  await page.locator("[name='confirmPassword']").fill("azerty123");

  await page.getByRole("button", { name: "Create account" }).click();

  await expect(page.getByText("Registration Successful")).toBeVisible();

  await expect(page.locator("#account-notification")).toBeVisible();
  await expect(page.locator("#account-dropdown")).toBeVisible();
});
