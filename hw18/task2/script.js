const slider = document.querySelector('.slider'),
	prev = document.querySelector('.prev-btn'),
	next = document.querySelector('.next-btn'),
	sliderItems = document.querySelectorAll('.slider-item'),
	dotControls = document.querySelector('.slider-dot-controls');

let currIndex = 0;


function hideSlides (index){
	sliderItems.forEach((item, i) =>{
		item.classList.remove('show');
		item.classList.add('hide');
		if(i === index){
			item.classList.remove('hide');
			item.classList.add('show');

		}
	});
}

function initDots(){
	for(let i = 0; i< sliderItems.length; i++){
		dotControls.innerHTML += `<img data-id="${i+1}" class="dot" src="./img/icons8-dot-48.png" alt="">`;
	}
}

initDots();

function hideControls(index){
	if(index === 0){
		prev.classList.remove('show');
		prev.classList.add('hide');
	}
	else{
		prev.classList.remove('hide');
		prev.classList.add('show');
	}

	if(index === sliderItems.length - 1){
		next.classList.remove('show');
		next.classList.add('hide');
	}else{
		next.classList.add('show');
		next.classList.remove('hide');
	}
}

function activeDot (index){
	document.querySelectorAll('.dot').forEach((item, i) =>{
		item.style.backgroundColor = '';

		if(i == index){
			item.style.backgroundColor = 'red';
		}

	})
}

hideSlides(currIndex);
hideControls(currIndex);
activeDot(currIndex);


next.addEventListener('click', ()=>{
	currIndex += 1;
	hideSlides(currIndex);
	hideControls(currIndex);
 	activeDot(currIndex);
});
prev.addEventListener('click' ,()=>{
	currIndex -= 1;
	hideSlides(currIndex);
	hideControls(currIndex);
	activeDot(currIndex);

})

dotControls.addEventListener('click', (e)=>{
	const target = e.target;
	currIndex = target.getAttribute('data-id') - 1;
	hideSlides(currIndex);
	hideControls(currIndex);
	activeDot(currIndex);

});

setInterval(()=>{
	if(currIndex != sliderItems.length - 1){
		currIndex += 1;
	}else{
		currIndex = 0;
	}
	hideSlides(currIndex);
	hideControls(currIndex);
 	activeDot(currIndex);
}, 3000);