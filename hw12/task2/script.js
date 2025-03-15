document.querySelector('.btns').addEventListener('click', (e)=>{
	if(e.target.tagName == 'BUTTON'){
		alert(`Clicked on button: ${e.target.textContent}`);
	}
});