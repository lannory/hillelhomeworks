const btns = document.querySelector('.btns');
let userLink;
btns.addEventListener('click', (e)=>{
	const target = e.target;

	if(target.getAttribute('data-type') === 'enter'){
		userLink = prompt('Enter link you want to redirect'); 
	}
	if(target.getAttribute('data-type') === 'redirect'){
		window.location = `https://${userLink}`;
	}
	
});