const n = +prompt("Enter number");
let start = 1, end = 100;

for(let i = start; i <= end; i++){
	if(Math.pow(i, 2) >= n){
		break;
	}
	else{
		console.log(i);
	}
}