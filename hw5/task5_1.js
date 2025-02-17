let start = 20, end = 30;

let str = '';

for(let i = start; i <= end; i+=0.5){
	str += i;
	if(i !== end){
		str += ' ';
	}
}

console.log(str);