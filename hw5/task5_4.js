const number = +prompt('Enter number');
let start = 2;

if(number === 1){
	console.log('Number is not simple')
}else{
	for(let i = start; i <= number; i++){
		if(number % i === 0 &&  i !== number){
			console.log('number is not simple');
			break;
		}
		if(i === number){
			console.log('number is simple')
		}
	}
}

