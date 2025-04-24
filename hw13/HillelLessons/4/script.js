
// first task
function firstTask(){
	const firstNum = +prompt('Enter first number'),
	 	secondNum = +prompt('Enter second number');

	if(firstNum > secondNum){
		console.log("First num is bigger then second one");
	}
	else if(firstNum === secondNum){
		console.log('First num = second num');
	}
	else{
		console.log("Second num is bigger then first one");
	}
}

// firstTask()

function secondTask(){
	const kmLen = +prompt('Enter length in km'), 
		ftLen = +prompt('Enter length in ft');

	const firstlenConverted = kmLen * 1000, secondLenConverted = ftLen * 0.305;

	if(firstlenConverted > secondLenConverted){
		console.log('First length is bigger than second one');
	}else{
		console.log('Second length is bigger than first one');
	}
}

// secondTask()



function thirdTask(){
	const a = +prompt('Enter a: '),
		b = +prompt('Enter b: ');
	
	if (a >= b){
		a % b === 0 ? console.log('b divs a') : console.log('b not divs a');
	}
	else{
		b % a === 0 ? console.log('a divs b') : console.log('a not divs b');
	}
}

// thirdTask()



function fourthTask(){
	const number = +prompt('Enter number');

	const lastDigit = number % 10;
	console.log(lastDigit);

	if (lastDigit % 2 === 0){
		console.log('Number ends by even num');
	}
	else{
		console.log('Number ends by odd num');
	}
}

// fourthTask()


function fifthTask(){
	const number = +prompt('Enter number'); 

	const firstDigit = parseInt(number / 10), secondDigit = number % 10;

	if(firstDigit > secondDigit){
		console.log("First digit is bigger then second one");
	}
	else if(firstDigit === secondDigit){
		console.log('First digit = second digit');
	}
	else{
		console.log("Second digit is bigger then first one");
	}
}

// fifthTask();


function sixthTask(){
	const number = prompt('Enter number');

	const arrNumber =  number.split('');

	let digitSum = 0, digitProd = 1;

	for(let i of arrNumber){
		console.log(i);
		digitSum += i;
		digitProd *= i;
	}

	if(digitSum % 2 === 0){
		console.log('digitSum is even');
	}
	else{
		console.log('digitSum is odd');
	}
	if(digitSum % 5 === 0){
		console.log('digitSum multiple by 5');
	}

	if(digitProd > 100){
		console.log('Digit prod is bigger than 100');
	}

	const sortedArr = arrNumber.sort();
	let isSame = false;
	for(let i = 0; i < sortedArr.length; i++){
		if(sortedArr[0] === sortedArr[i]){
			isSame = true;
		}
		else{
			isSame = false;
			break;
		}
	}

	if(isSame){
		console.log('All digits are same');
	}

	main: for(let i = 0; i < sortedArr.length; i++){
		for(let j = i + 1; j < sortedArr.length; j++){
			if(sortedArr[i] = sortedArr[j]){
				console.log('it has some same digits')
				break main;
			}
		}
	}

}

sixthTask();


function seventhTask(){
	const number = prompt('Enter 6 digit number');

	number[0] === number[5] && number[1] === number[4] && number[2] == number[3]? console.log('Number is mirror') : console.log('Number isn`t mirror');
}

// seventhTask();