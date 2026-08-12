import { MenuPage } from "../../src/pages/MenuPage";
import {CartPage} from "../../src/pages/CartPage";
import {test as base} from "@playwright/test";
import { expect} from "@playwright/test";


type TestCoffeeFixtures = {
    menuPage: MenuPage;
    cartPage: CartPage;
};

export const test = base.extend<TestCoffeeFixtures> ({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },
  
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  }
});