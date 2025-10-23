import { amazonLocators } from "../locators/amazonLocators";

const detailProduct = {
  verifyProductDetail() {
    cy.xpath(amazonLocators.detailPage.productTitle)
      .should("be.visible")
      .then(function () {
        const expectedTitle = this.expectProductTitle;
        const expectedPrice = this.expectProductPrice;

        cy.xpath(amazonLocators.detailPage.productTitle).should(
          "contain.text",
          expectedTitle
        );

        cy.xpath(amazonLocators.detailPage.productPrice).should(
          "contain.text",
          expectedPrice
        );
      });
  },
};
export default detailProduct;
