import { test } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage }from '../../src/pages/CartPage';
import { unitPriceFormatStr, totalPriceFormatStr, priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Espresso correctly added to the Cart', async ({ page }) => {
  const menuPage = new MenuPage(page);
  const cartPage = new CartPage(page);
      
  await menuPage.open();
  await menuPage.clickEspressoCup();
  
  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(unitPriceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE, 1));
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(COFFEE_PRICES.ESPRESSO_PRICE));
});