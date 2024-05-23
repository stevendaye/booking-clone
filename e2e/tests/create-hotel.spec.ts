import { test, expect } from "@playwright/test";
import path from "path";

const MAIN_URL = "http://localhost:5173/";
const ADD_HOTEL_URL = "http://localhost:5173/become-host";

/* Before each test, sign into an account */
test.beforeEach(async ({ page }) => {
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

test("should allow user to add a hotel", async ({ page }) => {
  await page.goto(ADD_HOTEL_URL);

  await expect(
    page.getByRole("heading", {
      name: "List your property on Booking.com and start welcoming guests in no time!",
    })
  ).toBeVisible();

  await page
    .locator("div.card:nth-child(3)")
    .getByRole("button", { name: "List your property" })
    .click();

  await expect(
    page.getByRole("heading", {
      name: "From the list below, which property category is the best fit for your place?",
    })
  ).toBeVisible();

  await page.locator("div.card:nth-child(5)").click();
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(
    page.getByRole("heading", { name: "How many Hostels are you listing?" })
  ).toBeVisible();
  await page.locator("div.property-type-count:last-child").click();
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(
    page.getByRole("heading", {
      name: "Multiple Hostels with one or multiple rooms that guests can book",
    })
  ).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();

  /* Address Form */
  await expect(
    page.getByRole("heading", {
      name: "Where is the property you are listing?",
    })
  ).toBeVisible();

  await page.selectOption("select[name='country']", "Nigeria");

  await page
    .locator("[name=addressLine1]")
    .fill("Odogu 2368P Rue 67 Spring Road");
  await page
    .getByRole("button", {
      name: "Add appartment of floor number (optional)",
    })
    .click();

  await page
    .locator("[name=addressLine2]")
    .fill("Banana Island, 550 WB House Ife");
  await page.locator("[name='zip']").fill("6213BIN");
  await page.locator("[name='city']").fill("Lagos");

  await page.getByRole("button", { name: "Continue" }).click();

  /* Description Form */
  await expect(
    page.getByRole("heading", { name: "Tell us about your Hostel" })
  ).toBeVisible();
  await page.locator("[name='name']").fill("Manathan Sheen's Hostel");
  await page
    .locator("[name='description']")
    .fill(
      "Manathan Sheen is the choice hostel for foreigners. We're not expensive yet comfortable. Feel like home."
    );

  await page.locator("[name='pricePerNight']").fill("45");
  await page.selectOption("select[name='starRating']", "4");

  await page.getByRole("button", { name: "Continue" }).click();

  /* Types Form */
  await expect(
    page.getByRole("heading", {
      name: " What kind of Hostel are you offering?",
    })
  ).toBeVisible();
  await page.getByText("Beach").click();
  await page.getByRole("button", { name: "Continue" }).click();

  /* Facilities Form */
  await expect(
    page.getByRole("heading", { name: "What can guests use at your Hostel?" })
  ).toBeVisible();
  await page.getByLabel("Garden").check();
  await page.getByLabel("Free Wifi").check();
  await page.getByLabel("Parking").check();
  await page.getByLabel("Game room").check();
  await page.getByLabel("Shared kitchen").check();
  await page.getByLabel("Fitness Center").check();
  await page.getByLabel("Board games/Puzzles").check();
  await page.getByLabel("Evening entertainment").check();
  await page.getByLabel("Movie nights").check();

  await page.getByRole("button", { name: "Continue" }).click();

  /* Property Rules Form */
  await expect(
    page.getByRole("heading", { name: "Guest & House Rules" })
  ).toBeVisible();
  await page.selectOption("select[name='checkinFrom']", "10:00");
  await page.selectOption("select[name='checkinUntill']", "15:00");
  await page.selectOption("select[name='checkoutFrom']", "12:00");
  await page.selectOption("select[name='checkoutUntill']", "16:00");

  await page.locator("p#allowChildren").locator("..").getByText("Yes").click();
  await page.locator("p#allowPets").locator("..").getByText("No").click();

  await page.locator("[name='adultCount']").fill("2");
  await page.locator("[name='childCount']").fill("2");

  await page.locator("button#back").click();

  await expect(
    page.getByRole("heading", { name: "What can guests use at your Hostel?" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("heading", { name: "Guest & House Rules" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Continue" }).click();

  /* Photos Form */
  await expect(
    page.getByRole("heading", { name: "What does your Hostel look like?" })
  ).toBeVisible();

  await page.setInputFiles("[name='imageFiles']", [
    path.join(__dirname, "files", "image1.jpg"),
    path.join(__dirname, "files", "image2.jpg"),
    path.join(__dirname, "files", "image3.jpg"),
    path.join(__dirname, "files", "image4.jpg"),
    path.join(__dirname, "files", "image5.jpg"),
  ]);

  await page.getByRole("button", { name: "Add Property" }).click();
  await expect(page.getByText("New property added successfully")).toBeVisible();
});
