console.log(moment('20061219', 'YYYYMMDD').format('DD.MM.YYYY'));


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


const regexp = /^\d{2}\/\d{2}\/\d{4}$/;


const input = document.forms[0].input;
const btn = document.forms[0].btn;

btn.addEventListener('click', (e)=>{
	e.preventDefault();
	const userBirthdayDate = input.value;
	input.value = '';
	if(regexp.test(userBirthdayDate)){
		console.log(moment(userBirthdayDate, 'DD/MM/YYYY').format('YYYY-MM-DD'));
	}else{
		appendAlert('Error, data is incorrect', 'danger');
	}
});



