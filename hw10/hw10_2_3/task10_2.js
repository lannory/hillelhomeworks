const arr = [];

let arrSize;

do{
	arrSize = +prompt('Enter size of array');
}while(!arrSize || isNaN(arrSize))


for(let i = 1; i <= arrSize; i++){
	let arrValue = +prompt('Enter item');

	if(isNaN(arrValue) || !arrValue ){
		i--;
		continue;
	}
	arr.push(arrValue);
}

const newArr = arr.filter(item => item % 2 === 0);

console.log(newArr); 