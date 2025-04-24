const SUM_FOR_DISCOUNT = 10000;
const DISCOUNT = 0.05;

for (let i = 0; i < categories.length; i++) {
  console.log(`Category ${categories[i].id} | ${categories[i].title}`)
}

// for (let key in categories) {
//   console.log(`Category ${categories[key].id} | ${categories[key].title}`)
// }

let selectedCategory;
let products;
do {
  selectedCategory = prompt('Enter category ID that you want to select');
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === selectedCategory) {
      products = categories[i].products;
      break;
    }
  }
} while (!products);

// do {
//   selectedCategory = prompt('Enter category ID that you want to select');
//   products = categories[selectedCategory].products;
// } while (!products);


for (let i = 0; i < products.length;i++) {
  console.log(`Product #${i+1} | ${products[i].title} $${products[i].price}`);
}

let productNumber;
do {
  productNumber = parseInt(prompt(`Enter product number from 1 to ${products.length}`));
} while (isNaN(productNumber) || productNumber < 1 || productNumber > products.length);

let productAmount;
do {
  productAmount = parseInt(prompt('Enter product amount you wanna buy: '));
} while(isNaN(productAmount) || productAmount < 1 || productAmount > 100);


const selectedProduct = products[productNumber - 1];

let finalPrice = selectedProduct.price * productAmount;

console.log(`The price of your order: $${finalPrice}`);

if (finalPrice > SUM_FOR_DISCOUNT) {
  finalPrice = finalPrice * (1 - DISCOUNT);
  console.log(`The final price of your order: $${finalPrice}`);
}

