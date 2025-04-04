function Student (name, lastname, birthdayYear, marks){
	this.name = name;
	this.lastname = lastname;
	this.birthdayYear = birthdayYear;
	
	const attendance = new Array(25);
	this.marks = marks;

	this.getAge = function (){
		let currYear = new Date().getFullYear();
		return currYear - this.birthdayYear;
	}

	this.getAvgMark = function (){
		return marks.reduce((acc, curr) => acc += curr) / marks.length;
	}

	function checkAttendance (){
		if(attendance.length > 25){
			return false;
		}
		return true;
	}

	this.present = function (){
		if(checkAttendance()){
			for(let i = 0; i < 25; i++){
				if(attendance[i] === undefined){
					attendance[i] = true;
					break;
				}
				
			} 
		}
	}
	this.absent = function () {
		if(checkAttendance()){
			for(let i = 0; i < 25; i++){
				if(attendance[i] === undefined){
					attendance[i] = false; 
					break;
				}
				
			}
		}
	}	


	this.summary = function () {
		let avgMark = this.getAvgMark(), avgAttendance = attendance.reduce((acc, curr) => acc += (+curr)) / attendance.length;

		if(avgAttendance >= 0.9 || avgMark >= 90){
			if(avgAttendance >= 0.9 && avgMark >= 90){
				return 'Молодець!';
			}
			return 'Добре, але можна краще';

		}else{
			return 'Редиска!';
		}
		
	}
}