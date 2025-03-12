
const textBlock = document.querySelector('#text'),
	btn = document.querySelector('#btn');

const btnColors = ['red', 'yellow', 'blue', 'purple', 'green'];

btn.addEventListener('click', (e)=>{
	const color = btnColors[Math.floor(Math.random() * btnColors.length)];
	const currClass = textBlock.getAttribute("class");

	if(currClass){
		textBlock.classList.remove(currClass);
	}
	else{
		textBlock.classList.toggle(color);
	}

});

