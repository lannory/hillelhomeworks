let url = '';
const links = {
	planets: 'https://swapi.tech/api/planets',
	people: 'https://swapi.tech/api/people',
	vehicles: 'https://swapi.tech/api/vehicles'
}

function doRequest(key) {
	fetch(links[key])
		.then(response => response.json())
		.then(response => {
			console.log(response.results);
			fillBlock(`.${key}-block`, response.results);
			links[key] = response.next;
		});
  }

document.addEventListener('DOMContentLoaded', async ()=>{
	doRequest('people');
	doRequest('vehicles');
	doRequest('planets');
	switchTabs();

	const nav = document.querySelector('.header-nav');
	let currBlock = 'people', block = document.querySelector(`.${currBlock}-block`);

	nav.addEventListener('click', (e) => {
		target = e.target.getAttribute('data-type');
		currBlock = target;
		block = document.querySelector(`.${currBlock}-block`);
		doAction(block, currBlock);
		if(target){
			switchTabs(target);
		}
		
	});

	
	doAction(block, currBlock);
})

function doAction (block, currBlock){
	block.addEventListener('click', (e)=>{
		const id = e.target.getAttribute('data-id');
		doItemRequest(id, currBlock);
	})
}


document.querySelector('.btn').addEventListener('click', async (e)=>{
	doRequest(e.target.getAttribute('data-name'));
})

function fillBlock(selector, arr){
	const block = document.querySelector(selector);

	for(let i = 0; i < arr.length; i++){
		const item = document.createElement('p');
		item.textContent = arr[i].name;
		item.classList.add('block-item');
		item.setAttribute('data-id', arr[i].uid);
		block.appendChild(item);
	}
	
	

}

function doItemRequest (id, key){
	fetch(`https://www.swapi.tech/api/${key}/${id}`)
		.then(response => response.json())
		.then(response => {
			console.log(response.result.properties)
			showModal(response.result.properties)
		});
}

function showModal(obj){
	const myModal = new bootstrap.Modal('#staticBackdrop');
	myModal.show();

	const modalTitle = document.querySelector('.modal-title');
	modalTitle.textContent = obj.name;

	const keys = Object.keys(obj)

	const modalBody = document.querySelector('.modal-body');
	modalBody.innerHTML = '';
	keys.forEach((item)=>{
		const modalText = document.createElement('p');
		if(item != 'name' && item != 'url' && obj[item].split('/')[0] != 'https:'){
			modalText.textContent = `${item}: ${obj[item]}`;
			modalBody.appendChild(modalText);
		}
	})

}


function switchTabs (type = 'people'){
	
	const items = document.querySelectorAll('.wrapper');
	let index = Array.from(items).findIndex(item => item.getAttribute('data-name') == type);;

	items.forEach(item =>{
		item.classList.add('hide');
	})


	items[index].classList.remove('hide');
}