function task1(){
	let start = 10, end = 20;

	for(let i = start; i <= end; i++){
		document.write(i + ', ');
	}
	console.write('<br>');
}

function task2(){
	let start = 10, end = 20;

	for(let i = start; i <= end; i++){
		document.write(Math.pow(i, 2) + ', ');
	}
	console.write('<br>');
}

function task3(){
	const number = 7;
	for(let i = 1; i <= 10; i++){
		document.write(`${i}*${number}=${number*i}, <br>`);
	}
}

function task4(){
	let start = 1, end = 15;
	let sum = 0;

	for(let i = start; i <= end; i++){
		sum += i;
	}

	document.write(`<p>sum = ${sum}</p>`);
}

function task5(){
	let start = 15, end = 35;
	let prod = 1;

	for(let i = start; i <= end; i++){
		prod *= i;
	}

	document.write(`<p>prod = ${prod}</p>`);
}

function task6(){
	let start = 1, end = 500;

	let sum = 0, avg;

	for(let i = start; i <= end; i++){
		sum += i;
	}

	avg = sum / end;

	document.write(`<p>ave = ${avg}</p>`);
}

function task7(){
	let start = 30, end = 80;

	let sumEven = 0;

	for(let i = start; i <= end; i++){
		if(i % 2 === 0){
			sumEven += i;
		}
	}
	document.write(`<p>Sum of even numbers = ${sumEven}</p>`);
}

function task8(){
	let start = 100, end = 200;

	for(let i = start; i <= end; i++){
		if(i % 3 === 0){
			document.write(`${i}, `);
		}
	}
	console.write('<br>');
}

function task9(){
	const number = +prompt('Enter number > 0');

	let count = 0;
	let sum = 0;

	for(let i = 1; i <= number; i++){
		if(number % i === 0){
			if(i % 2 === 0){
				count++;
				sum += i;
			}
			document.write(i + ', ')
		}
	}

	document.write(`<p>Sum = ${sum}, Count = ${count}</p>`)
}


function task10(){
	let start = 1, end = 10;

	for(let i = start; i <= end; i++){
		for(let j = start; j <= end; j++){
			document.write(`${j} * ${i} = ${i * j} `); 
		}
		document.write('<br>');
	}
}


// task1();
// task2();
// task3();
// task4();
// task5();
// task6();
// task7();
// task8();
task9();

// task10();