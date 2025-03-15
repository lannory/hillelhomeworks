const todo = document.querySelector('.todo');
const input = document.querySelector(`[type="text"]`);

let todoList = ['Task 1', 'Task 2', 'Task 3'];

function fillTodo(){
	todo.innerHTML = '';
	todoList.forEach((value, i) =>{ 
		const todoEl = document.createElement('li');
		const deleteButton = document.createElement('button');
		todoEl.textContent = value;
		deleteButton.textContent = 'Delete';
		deleteButton.setAttribute('data-id', i);

		todo.appendChild(todoEl);
		todoEl.appendChild(deleteButton);
	});
}


document.addEventListener('DOMContentLoaded', fillTodo);


todo.addEventListener('click', (e)=>{
	const target = e.target;
	if(target.tagName === 'BUTTON'){
		const index = +(target.getAttribute('data-id'));
		todoList = todoList.filter((value, i)=> i !== index);
		fillTodo();
	}
});

document.querySelector(`[type="submit"]`).addEventListener('click', (e)=>{
	e.preventDefault();

	const answer = input.value;
	input.value = '';

	todoList.push(answer);
	

	fillTodo();
})

