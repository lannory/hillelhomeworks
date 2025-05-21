function addPrev(number = 0){
	let counter = number;
	return (addedNumber)=>{
		counter += addedNumber;
		return counter;
	} 
}

let sum = addPrev();

console.log(sum(4));

console.log(sum(6));

console.log(sum(10));

console.log(sum(7));