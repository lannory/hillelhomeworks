let userName;

while(!userName){
	userName = prompt('Enter your name:');

	if(!userName){
		console.log('Error, you didn`t enter anything');
	}
}

alert(`Hello, ${userName}! How are you?`)