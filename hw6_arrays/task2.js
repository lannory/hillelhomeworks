const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];


let positiveSum = 0, positiveCount = 0, positiveProd = 1;
let negativeCount = 0;
let countPositiveEven = 0, sumPositiveEven = 0;
let countPositiveOdd = 0, sumPositiveOdd = 0;
let maxElement = Math.max(...arr), maxElementIndex = arr.indexOf(Math.max(...arr));
let minElement = Math.min(...arr), minElementIndex = arr.indexOf(Math.min(...arr));


arr.forEach(item =>{
	if(item > 0){
		positiveCount++;
		positiveSum += item;
		positiveProd *= item;
	}
	else{
		negativeCount++;
	}

	if(item % 2 === 0 && item > 0){
		countPositiveEven++; 
		sumPositiveEven += item;
	}
	else if (item % 2 !== 0 && item > 0){
		countPositiveOdd++;
		sumPositiveOdd += item;
	}

});

for(let i = 0; i < arr.length; i++){
	
	if(arr[i] != maxElement)
	{
		arr[i] = 0;
	}
}

console.log(`Positive count ${positiveCount}`);
console.log(`Negative count ${negativeCount}`);

console.log(`Positive sum ${positiveSum}`);
console.log(`Positive prod ${positiveProd}`);

console.log(`Positive even count ${countPositiveEven}`);
console.log(`Positive odd count ${countPositiveOdd}`);

console.log(`Positive even sum ${sumPositiveEven}`);
console.log(`Positive odd sum ${sumPositiveOdd}`);

console.log(`Max element ${maxElement}`);
console.log(`Index of max element ${maxElementIndex}`);

console.log(`Min element ${minElement}`);
console.log(`Index of min element ${minElementIndex}`);

console.log(arr);