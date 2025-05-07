// function generateKey(len, str){
// 	const strLen = str.length;
// 	let res = '';
// 	for(let i = 0; i < len; i++){
// 		res += str[Math.floor(Math.random() * strLen)];
// 	}
// 	return res;
// }

// const chars = 'abcdefghijklmnopqrstuvwxyz01234567890';

// const amountOfKeys = 100;

// const keys = [];

// for(let i = 0; i < amountOfKeys; i++){

// }

// const key = generateKey(16, chars);

// console.log(key);

// var addTwoNumbers = function(l1, l2) {
//     const num1 = +(l1.reverse().join('')), num2 = +(l2.reverse().join(''));

// 	let res = num1 + num2
// };

// addTwoNumbers([2,4,3], [5,6,4])

const categories = [
    {
        id: 1,
        name: "Laptops",
        products: [
            {id: 1, name: "MacBook", price: 1000},
            {id: 2, name: "Dell", price: 10100},
            {id: 3, name: "Asus", price: 100},
            {id: 4, name: "Acer", price: 900},

        ]
    },
    {
        id: 2,
        name: "phones",
        products: [
            {id: 5, name: "Samsung", price: 1900},
            {id: 6, name: "Apple", price: 10100},
            {id: 7, name: "Huawei", price: 200},
            {id: 8, name: "Honor", price: 800},

        ]
    },
    {
        id: 3,
        name: "Processors",
        products: [
            {id: 9, name: "Intel", price: 1000},
            {id: 10, name: "AMD", price: 10100},

        ]
    }
]

function showCategories(){
	const parent = document.querySelector('.categories > div');
	categories.forEach(category =>{
		const categoryEl = document.createElement('div');
		categoryEl.textContent = category.name;
		categoryEl.setAttribute('data-category-id' = category.id);
		categoryEl.classList.add('category-item');

		parent.appendChild(categoryEl);
	});
}

document.addEventListener('DOMContentLoaded', showCategories);

const showProducts = (products) =>{
	const parent = document.querySelector('.productsz > div');
	products.forEach(category =>{
		const categoryEl = document.createElement('div');
		categoryEl.textContent = products.name;
		categoryEl.setAttribute('data-products-id' = category.id);
		categoryEl.classList.add('category-item');

		parent.appendChild(categoryEl);
	});
}


document.querySelector('.categories').addEventListener('click', (e) =>{
	if(!e.target.classList.contains('category-item')){
		return;
	}else{
		console.log('You clicked on category');
	}

	const id = e.target.getAttribute('data-category-id');

	const selectedCategory = categories.find(category => category.id = +id);

	if(!selectedCategory){
		return;
	}

	showProducts(selectedCategory.products);
});