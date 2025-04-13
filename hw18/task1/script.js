const startBtn = document.querySelector('.start-btn'),
	counter = document.querySelector('#counter'),
	input = document.querySelector('.input'),
	setBtn = document.querySelector('.set-btn');

let minutesAmount, secondsAmount, intervalId;

setBtn.addEventListener('click', () =>{
	secondsAmount = (+(input.value)) % 60;
	minutesAmount = Math.floor((+(input.value)) / 60);

	fillTimer();
});



startBtn.addEventListener('click', ()=>{
	intervalId = setInterval(updateClock, 1000);
});

function fillTimer (){
	const minutes = checkValues(minutesAmount),
		seconds = checkValues(secondsAmount);

	counter.textContent = `${minutes}:${seconds}`	
}

function checkValues(value){
	if(value < 10){
		value = '0' + value;
	}
	return value;
}

function updateClock(){
	if(secondsAmount === 0){
		minutesAmount--;
		secondsAmount = 59;
	}
	else{
		secondsAmount--;
	}
	if(secondsAmount === 0 && minutesAmount === 0){
		clearInterval(intervalId);
	}
	fillTimer();
}

