// for(let i = 0; i < products.length; i++){
// 	console.log(`Product #${i+i} | ${products[i].title} ${products[i].price}`);
// }

// let productNumber;



for(let i = 0; i < categories.length;i++ ){
	console.log(`Category ${categories[i].id} || ${categories[i].title}`);
}

let selectedCategory, products;

do{	
	selectedCategory = prompt('enter category id that you want to select');
	for(let i = 0; i < categories.length; i++){
		if(categories[i] === selectedCategory){
			products = categories[i].products;
			break;
		}
	}
}while(!products)

