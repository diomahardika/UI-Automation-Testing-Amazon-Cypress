import { amazonLocators } from "../locators/amazonLocators";

const homePage = {
  searchProduct(productName) {
    cy.xpath(amazonLocators.search).should("be.visible").type(productName);
    cy.xpath(amazonLocators.seacrhIcon).click();
  }
}
export default homePage;