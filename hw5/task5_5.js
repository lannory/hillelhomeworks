const number = +prompt('Enter number');
let start = 3;

let message = '';

for(let i = start, k = 1; i <= number; i *= start, k++){
	if(i === number){
		message += `Number = ${start}^${k}`;
	}
}

if(!message){
	message += 'Number is not equal 3 in pow ';
}

console.log(message);