const arr = [];
let arrSize;
let sum = 0, avg;

do{
	arrSize = +prompt('Enter size of array');
}while(isNaN(arrSize))


for(let i = 0; i < arrSize; i++){
	let userText = prompt('Enter array item');
	if(userText === null || userText === undefined){
		i--;
		continue;
	}
	arr.push(userText);
}

arr.forEach(item =>{
	if(!isNaN(+item)){
		sum += parseInt(item);
	}
});

avg = sum / arrSize;

console.log(avg);