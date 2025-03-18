const messageForm = document.forms[0],
	name = messageForm.name,
	message = messageForm.message,
	phone = messageForm.phone,
	email = messageForm.email,
	btn = messageForm.send_btn;


const user = {};

name.addEventListener('input', ()=>{
	name.value = name.value.replace(/\d/, '')
});


btn.addEventListener('click', ()=>{
	phone.value.match(/\+380[0-9]{9}/) ? user.phone = phone.value : phone.value = 'Err Phone is not correct'
	email.value.match(/\@{1}.{1}/, ) ? user.email = email.value : email.value = 'Err Email is not correct';
	message.value.match(/\D{5,}/) ? user.message = message.value : message.value = 'Err Message should be longer than 5 chars';
	user.name = name.value;
	
	
	console.log(user)
});
