const faker = require('faker');

faker.seed(123);

let products = [];

for (let i = 0; i < 10000000; i++) {
  products.push(faker.commerce.productName())
}

console.log(products.length);

//testing Travis CI
//Testing 2 for Travis
