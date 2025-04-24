const name = document.forms.registration.name,
	lastname = document.forms.registration.lastname,
	date = document.forms.registration.date,
	gender = document.forms.registration.gender,
	address = document.forms.registration.address,
	lang = document.forms.registration.lang

console.log(name);

class House {
	constructor(flatCount, residentsCount){
		this.flatCount = flatCount;
		this.residentsCount = residentsCount;
		this.flats = new Map();
	}
}
class Flat {
	constructor(number, roomsAmount, residents) {
		this.number = number;
		this.roomsAmount = roomsAmount;
		this.residents = new Set();
	}
	static generateSet(people){
		const residentsSet = new Set();
		residents.forEach(element => residentsSet.add(resident));
	}
}
class Resident {
	constructor(name, lastname){
		this.name = name;
		this.lastname = lastname;
	}
}