let size;

do{
	size = +prompt('Enter size of array');
}
while(isNaN(size))


const arr = [];

for(let i = 0; i < size; i++){
	let userItem = +prompt(`Enter item #${i+1}`);
	if(isNaN(userItem)){
		i--;
		continue;
	}
	
	arr.push(userItem);
}

document.write(`<p>${arr.join(', ')}</p>`);

arr.sort((a, b) => a - b);

arr.splice(1, 3);

document.write(`<p>${arr.join(', ')}</p>`);