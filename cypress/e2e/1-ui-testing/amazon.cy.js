import homePage from "../../pages/homePage";
import searchResultPage from "../../pages/searchResultPage";
import detailProduct from "../../pages/detailProduct";

let productData;
before(() => {
  cy.fixture("product.json").then((data) => {
    productData = data;
    expect(productData).to.have.all.keys("productName");
  });
});

describe("E2E search product in amazon.com", () => {
  beforeEach(() => {
    // Kunjungi URL sebelum SETIAP tes untuk memastikan kondisi awal yang bersih.
    cy.visit(Cypress.env("baseUrl"));
  });

  it("should success pick a product", () => {
    homePage.searchProduct(productData.productName);
    searchResultPage.selectProduct();
    detailProduct.verifyProductDetail();
  });
});
