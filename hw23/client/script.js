


const todoContainer = document.querySelector('.js--todos-wrapper');
const addInput = document.forms[0].value, addBtn = document.querySelector('.form__btn');

let tasks = [];
getData();

function fillTodo (arr) {
	todoContainer.innerHTML = '';
	
	arr.forEach((item, i) =>{
		todoContainer.innerHTML += `<li class= "${item.isChecked ? "todo-item todo-item--checked" : "todo-item"}" data-id=${i}>
           <input type="checkbox" data-type="cross">
           <span class="todo-item__description">${item.value}</span>
           <button class="todo-item__delete" data-type="delete">Видалити</button>
       </li>`
	});
}


async function getData(){
	const result = await fetch('http://localhost:3000/todos');
	const response = await result.json();

	tasks = response;

	fillTodo(response);
}



addBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	const newTask = {value: addInput.value, isChecked: false};
	
	fetch('http://localhost:3000/todos', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(newTask)
	});

	getData();
	
});

todoContainer.addEventListener('click', (e)=>{

	const target = e.target, targetId = target.parentNode.getAttribute('data-id');

	if(target.getAttribute('data-type') === 'cross'){
		fetch(`http://localhost:3000/todos`, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({index: targetId})
		});
		getData();
		
	}

	if(target.getAttribute('data-type') === 'delete'){
		fetch(`http://localhost:3000/todos/`, {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({index: targetId})
		});
		
		getData();
	}
});

