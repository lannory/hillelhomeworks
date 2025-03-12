const table = document.querySelector('.table');

for(let i = 1; i <= 10; i++){
	for(let j = 1; j <= 10; j++){
		table.innerHTML += `<div class="table-item">${i*j}</div>`;
	}
}