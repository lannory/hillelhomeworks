
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




const appendAlert = (message, type) => {
  createPlaceHolder();

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type}  alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
}


let isOpened;

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
	if(!isOpened){
		appendAlert('Nice, you triggered this alert message!', 'success');
		isOpened = true;
	}else{
		const alert = bootstrap.Alert.getOrCreateInstance('#liveAlertPlaceholder');
		isOpened = false;
		alert.close();
	}
  })
}

function createPlaceHolder(){
	const wrapper = document.querySelector('.alert-wrapper');
	
	wrapper.innerHTML = '<div id="liveAlertPlaceholder"></div>';
}
