export const amazonLocators = {
  search: '//input[@id="twotabsearchtextbox"]',
  seacrhIcon: '//input[@id="nav-search-submit-button"]',
  sortBy: '//span[@data-action="a-dropdown-button"]',
  priceHighToLow: '//a[@id="s-result-sort-select_2"]',
  selectItem: '(//div[@data-component-type="s-search-result"])[5]//a',
  selectTitle: '(//div[@data-cy="title-recipe"])[5]//child::span',
  selectPrice: '(//div[@data-cy="price-recipe"])[5]//child::span [contains(@class, "a-offscreen")]',
  detailPage : {
    productTitle: '//span[@id="productTitle"]',
    productPrice: '//span[@class="aok-offscreen"]'
  }
}