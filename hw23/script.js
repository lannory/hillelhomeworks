


const todoContainer = document.querySelector('.js--todos-wrapper');
const addInput = document.forms[0].value, addBtn = document.querySelector('.form__btn');
let tasks = [];

fillTodo()

function fillTodo () {
	todoContainer.innerHTML = '';
	if(tasks.length === 0) 
		tasks = Array.from(JSON.parse(localStorage.getItem('todo')));
	tasks.forEach((item, i) =>{
		todoContainer.innerHTML += `<li class= "${item.isChecked ? "todo-item todo-item--checked" : "todo-item"}" data-id=${i}>
           <input type="checkbox" data-type="cross">
           <span class="todo-item__description">${item.value}</span>
           <button class="todo-item__delete" data-type="delete">Видалити</button>
       </li>`
	});
}

function fillLocalStorage (){
	localStorage.setItem('todo', JSON.stringify(tasks));
}

addBtn.addEventListener('click', (e)=>{
	e.preventDefault();
	tasks.push({value: addInput.value, isChecked: false});
	fillLocalStorage();
	fillTodo();
	
});

todoContainer.addEventListener('click', (e)=>{

	const target = e.target, targetId = target.parentNode.getAttribute('data-id');

	if(target.getAttribute('data-type') === 'cross'){
		tasks[targetId].isChecked = !tasks[targetId].isChecked;
		fillTodo();
		fillLocalStorage() 
	}

	if(target.getAttribute('data-type') === 'delete'){
		tasks = tasks.filter((item, i) => {return i != targetId});
		fillLocalStorage()
		fillTodo();
	}
});

