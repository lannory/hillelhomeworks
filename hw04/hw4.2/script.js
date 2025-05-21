let number;

while(!number){
	number = prompt('Enter 3 digit number');

	if(!number){
		console.log('Error, you didn`t enter anything');
	}
}


const arr = number.split('');

let isSame = false;

for(let i = 0; i < arr.length; i++){
	if(arr[0] === arr[i]){
		isSame = true;
		continue;
	}
	else{
		isSame = false;
		break;
	}
}

	if(isSame){
		console.log('All digits are same');
	}
	else{
		main: for(let i = 0; i < arr.length; i++){
			for(let j = i + 1; j < arr.length; j++){
				if(arr[i] === arr[j]){
					console.log('Number has some same digits');
					break main;
				}
				else{
					if(j === arr.length - 1){
						console.log(`Number doesn't has some same digits`);
						break main;
					}
					continue;
				}
			}
		}
	}
	
