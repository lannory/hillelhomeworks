
function printNumber(){
	for (let i = 0; i < 10; i++){
		let str = prompt('Enter number');
		if(str < 100){
			continue;
		}
		if(str > 100 || i === 9 || isNaN(+str)){
			console.log(str);
			return;
		}
	}
}

printNumber();