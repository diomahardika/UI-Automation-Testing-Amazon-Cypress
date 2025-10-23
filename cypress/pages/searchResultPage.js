import { amazonLocators } from "../locators/amazonLocators";

const searchResultPage = {
  selectProduct() {
    cy.xpath(amazonLocators.sortBy).click();
    cy.xpath(amazonLocators.priceHighToLow).click();
    cy.wait(1000);

    cy.xpath(amazonLocators.selectTitle)
      .invoke("text")
      .then((text) => {
        // SOLUSI: Bersihkan &nbsp; (sebagai \u00A0) dan spasi berlebih
        const cleanedText = text.replace(/[\s\u00A0]+/g, " ").trim();
        cy.wrap(cleanedText).as("expectProductTitle");
      });
    cy.get("@expectProductTitle").should("not.be.empty");

    // Ambil price product dan BERSIHKAN
    cy.xpath(amazonLocators.selectPrice)
      .invoke("text")
      .then((priceText) => {
        // SOLUSI:
        // 1. Ambil bagian dolar saja (sebelum titik)
        // cth: "$28,350.58" -> "$28,350"
        const dollarPart = priceText.split(".")[0];

        // 2. Hapus semua karakter non-angka kecuali koma
        // cth: "$28,350" -> "28,350"
        const cleanedPrice = dollarPart.replace(/[^0-9,]/g, "");
        cy.wrap(cleanedPrice).as("expectProductPrice");
      });
    cy.get("@expectProductPrice").should("not.be.empty");

    cy.xpath(amazonLocators.selectItem).click();
  },
};
export default searchResultPage;
