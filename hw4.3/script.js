const user = {
	birthdayYear: +prompt('Enter your birthday year'),
	city: prompt('Enter your city: '),
	favoriteSport: prompt('Enter your favorite sport')
}


if(user.birthdayYear === 0){
	alert(`We're sorry you didn't want to enter your birthday year`);
}
if(user.city === null){
	alert(`We're sorry you didn't want to enter your city`);
}
if(user.favoriteSport === null){
	alert(`We're sorry you didn't want to enter your favorite sport`);
}


let message = `You are ${2025 - user.birthdayYear} years old. `;

switch(user.city){
	case 'Kyiv':
		message += 'You live in the capital of Ukraine.';
		break;
	case 'London':
		message += 'You live in the capital of Great Britain.';
		break;
	case 'Washington': 
		message += 'You live in the capital of USA.';
		break;
	case null:
		break;
	default:
		message += `You live in city ${user.city}`;
}

switch(user.sport){
	case 'basketball':
		message += 'Сool! Do you wanna become Michael Jordan?';
		break;
	case 'snowboarding':
		message += 'Сool! Do you wanna become Shaun White?';
		break;
	case 'chess': 
		message += 'Сool! Do you wanna become Magnus Carlsen?';
		break;
}

alert(message);