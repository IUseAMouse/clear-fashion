// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable
console.log('CHEAPEST T-SHIRT : ')
const cheapest = 'https://adresse.paris/t-shirts-et-polos/4238-t-shirt-ranelagh-1300000262026.html'
console.log(cheapest)



/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
var numberOfProducts = marketplace.length
// 2. Log the variable
console.log('Number of products : ', numberOfProducts)

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
var brandNames = []
marketplace.forEach(obj => brandNames.push(obj.brand))

//
// 2. Log the variable
console.log('All brand names : ')
console.log(brandNames)
// 3. Log how many brands we have
const uniqueBrandNames = new Set(brandNames)
console.log('All unique brand names : ')
console.log(uniqueBrandNames.size)

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
var priceComparator = (a,b) => {return parseInt(a.price) - parseInt(b.price)}
// 2. Create a variable and assign it the list of products by price from lowest to highest
var rankedByPrice = marketplace.sort(priceComparator);
// 3. Log the variable
console.log('Marketplace ranked by price : ')
console.log(rankedByPrice)


// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
var dateComparator = (a,b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
}
// 2. Create a variable and assign it the list of products by date from recent to old
var rankedByDate = marketplace.sort(dateComparator)
// 3. Log the variable
console.log('Marketplace ranked by release date : ')
console.log(rankedByDate)

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
var between50And100 = marketplace.filter(function(elem){
    return elem.price > 50 && elem.price < 100
})
// 2. Log the list
console.log('Products of price between 50$ and 100$ excluded : ')
console.log(between50And100)

// 🎯 TODO: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average

var averagePrice = 0
marketplace.forEach(entry => {
  averagePrice += entry.price
})

averagePrice = averagePrice/marketplace.length
console.log('Average price : ', averagePrice)


/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
var brands = {}
uniqueBrandNames.forEach(name => brands[name] = [])
marketplace.forEach(entry => brands[entry.brand].push(entry))
// 2. Log the variable
console.log('Products per brand and lengths : ')
console.log(brands)
// 3. Log the number of products by brands
uniqueBrandNames.forEach(name => {
  console.log(brands[name].length)
})


// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
uniqueBrandNames.forEach(name =>{
  brands[name].sort(priceComparator)
})
// 2. Log the sort
console.log('Price sort per brand : ')
console.log(brands)


// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
uniqueBrandNames.forEach(name =>{
  brands[name].sort(dateComparator)
})
// 2. Log the sort
console.log('Release date sort per brand : ')
console.log(brands)

/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products
var p90 = rankedByPrice[parseInt(0.9 * rankedByPrice.length)].price
console.log('P90 value : ', p90)

/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
const twoWeeksInSecs = 1209600
var newProducts = COTELE_PARIS.filter(product =>{
    var today = new Date() 
    today = new Date(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()).getTime();

    return today - new Date(product.released).getTime() < twoWeeksInSecs
})
// // A new product is a product `released` less than 2 weeks.
if(newProducts == COTELE_PARIS){
    console.log('New products only !', true)
}
else{
    console.log('No log because some products are too old', false)
}


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
var reasonable_shop = true
COTELE_PARIS.forEach(product => {
    if(product.price > 100) reasonable_shop = false
})

console.log('Is Cotele Paris a reasonable shop ? ', reasonable_shop)

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
var specific_uuid_product = COTELE_PARIS.filter(product => {
    return product.uuid == `b56c6d88-749a-5b4c-b571-e5b5c6483131`
})

console.log('Product searched is : ', specific_uuid_product)


// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

COTELE_PARIS.forEach(product => {
  if (product.uuid == `b56c6d88-749a-5b4c-b571-e5b5c6483131`){
    COTELE_PARIS.pop(product)
  }
})

console.log('Update on COTELE PARIS : ', COTELE_PARIS)

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
console.log(blueJacket, jacket)
// 2. What do you notice?
console.log("Changing jacket properties also affected blueJacket")
blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties
jacket['favorite'] = false;
console.log(blueJacket, jacket)

/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
