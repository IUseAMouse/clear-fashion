// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

// current products on the page
let currentProducts = [];
let currentPagination = {};

// instantiate the selectors
const selectShow = document.querySelector('#show-select');
const selectPage = document.querySelector('#page-select');
const sectionProducts = document.querySelector('#products');
const spanNbProducts = document.querySelector('#nbProducts');
const spanNbNewProducts = document.querySelector('#nbNewProducts');
const sortInfo = document.querySelector('#sort-select');
const brandNames = document.querySelector('#brand-select');
const recentProducts = document.querySelector('#recent-products');
const reasonablePrice = document.querySelector('#reasonable-price');

const database = fetchProducts(1, currentPagination.count);

/**
 * Set global value
 * @param {Array} result - products to display
 * @param {Object} meta - pagination meta info
 */
const setCurrentProducts = ({result, meta}) => {

  /* Defined here because of scope purposes */
  const brandEqualizer = (object, brandName) => {return object.brand == brandName};

  const sortTranslator = {
    'price-asc' : (a,b) => {return parseInt(a.price) - parseInt(b.price)},
    'price-desc' : (a,b) => {return parseInt(b.price) - parseInt(a.price)},
    'date-desc' : (a,b) => {return new Date(a.released).getTime() - new Date(b.released).getTime()},
    'date-asc' : (a,b) => {return new Date(b.released).getTime() - new Date(a.released).getTime()},
    'none' : (a,b) => {return true}
  };

  const filterTranslator = {
    'loom' : (a) => brandEqualizer(a,'loom'),
    'coteleparis' : (a) => brandEqualizer(a,'coteleparis'),
    '1083' : (a) => brandEqualizer(a,'1083'),
    'dedicated' : (a) => brandEqualizer(a,'dedicated'),
    'adresse' : (a) => brandEqualizer(a,'adresse'),
    'yes-reasonable' : (a) => {return a.price < 100},
    'yes-recent' : (a) => {return new Date().getTime() - a.released < 1210000000},
    'none' : (a) => {return true}
  }



  result = result.sort(sortTranslator[sortInfo.value])
  .filter(filterTranslator[brandNames.value])
  .filter(filterTranslator[recentProducts.value])
  .filter(filterTranslator[reasonablePrice.value]);

  currentProducts = result
  currentPagination = meta;
};

/**
 * Fetch products from api
 * @param  {Number}  [page=1] - current page to fetch
 * @param  {Number}  [size=12] - size of the page
 * @return {Object}
 */
async function fetchProducts(page = 1, size = 12) {
  try {
    const response = await fetch(
      `https://clear-fashion-api.vercel.app?page=${page}&size=${size}`
    );
    const body = await response.json();

    if (body.success !== true) {
      console.error(body);
      return {currentProducts, currentPagination};
    }

    return body.data;

  } catch (error) {
    console.error(error);
    return {currentProducts, currentPagination};
  }
};

/**
 * Render list of products
 * @param  {Array} products
 */
const renderProducts = products => {
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  const template = products
    .map(product => {
      return `
      <div class="product" id=${product.uuid}>
        <span>${product.brand}</span>
        <a href="${product.link}">${product.name}</a>
        <span>${product.price}</span>
      </div>
    `;
    })
    .join('');

  div.innerHTML = template;
  fragment.appendChild(div);
  sectionProducts.innerHTML = '<h2>Products</h2>';
  sectionProducts.appendChild(fragment);
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderPagination = pagination => {
  const {currentPage, pageCount} = pagination;
  const options = Array.from(
    {'length': pageCount},
    (value, index) => `<option value="${index + 1}">${index + 1}</option>`
  ).join('');

  selectPage.innerHTML = options;
  selectPage.selectedIndex = currentPage - 1;
};

/**
 * Render page selector
 * @param  {Object} pagination
 */
const renderIndicators = pagination => {
  const {count} = pagination;

  spanNbProducts.innerHTML = count;
};

const getAllProducts = async () => {
  const response = await fetch(
    `https://clear-fashion-api.vercel.app`
  );
}

const render = (products, pagination) => {
  renderProducts(products);
  renderPagination(pagination);
  renderIndicators(pagination);
};

/**
 * Declaration of all Listeners
 */

/**
 * Select the number of products to display
 */
selectShow.addEventListener('change', async (event) => {
  const products = await fetchProducts(currentPagination.currentPage, parseInt(event.target.value));

  setCurrentProducts(products);
  render(currentProducts, currentPagination);
});

selectPage.addEventListener('change', event => {
  fetchProducts(parseInt(event.target.value), currentPagination.pageCount)
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination));
})

sortInfo.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, currentPagination.pageCount)
  .then(setCurrentProducts)
  .then(() => render(currentProducts, currentPagination));
})

brandNames.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, currentPagination.pageCount)
  .then(setCurrentProducts)
  .then(() => render(currentProducts, currentPagination));
})

recentProducts.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, currentPagination.pageCount)
  .then(setCurrentProducts)
  .then(() => render(currentProducts, currentPagination));
})

reasonablePrice.addEventListener('change', event => {
  fetchProducts(currentPagination.currentPage, currentPagination.pageCount)
  .then(setCurrentProducts)
  .then(() => render(currentProducts, currentPagination));
})

document.addEventListener('DOMContentLoaded', () =>
  fetchProducts()
    .then(setCurrentProducts)
    .then(() => render(currentProducts, currentPagination))
);
