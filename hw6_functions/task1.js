function removeChars(str, arr){
	let newStr;
	arr.forEach(i => {
		newStr = str.replaceAll(i, '');
	});
	
	console.log(newStr);
}

let userStr;
let arrSize;

do{
	userStr = prompt('Enter your text');
}while(!userStr)

do{
	arrSize = +prompt('Enter count of chars you want to delete');
}while(isNaN(arrSize))

const arr = [];

for(let i = 0; i < arrSize; i++){
	let userText = prompt('Enter char');
	if(!userText || userText.length > 1){
		i--;
		continue;
	}
	arr.push(userText);
}

removeChars(userStr, arr);

