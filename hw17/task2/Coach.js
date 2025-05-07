class Coach {
	constructor(fullname, specialization, rating ) {
		this.fullname = fullname;
		this.specialization = specialization;
		this.rating = rating;
	}

	displayInfo(){
		console.log(`Coach: ${this.fullname}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
	}
}