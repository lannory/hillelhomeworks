function Student (name, lastname, birthdayYear, marks){
	this.name = name;
	this.lastname = lastname;
	this.birthdayYear = birthdayYear;
	
	const attendance = new Array(25);
	this.marks = marks;

	this.getAge = ()=>{
		let currYear = new Date().getFullYear();
		return currYear - this.birthdayYear;
	}

	this.getAvgMark = ()=>{
		return marks.reduce((acc, curr) => acc += curr) / marks.length;
	}

	function checkAttendance (){
		if(attendance.length > 25){
			return false;
		}
		return true;
	}

	this.present = () =>{
		if(checkAttendance()){
			for(let i = 0; i < 25; i++){
				if(attendance[i] === undefined){
					attendance[i] = true;
				}
			} 
		}
	}
	this.absent = () =>{
		if(checkAttendance()){
			for(let i = 0; i < 25; i++){
				if(attendance[i] === undefined){
					attendance[i] = false;
				}
			
			}
		}
	}	


	this.summary = () => {
		let avgMark = this.getAvgMark(), avgAttendance = 0;


		for(let lesson of attendance){
			avgAttendance += +lesson;
		}
		
		avgAttendance = parseFloat(avgAttendance / attendance.length);

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


const student1 = new Student ('Alex', 'Johnson', 1972, [100, 88, 72, 27, 100, 100, 100, 76, 53, 100]);
const student2 = new Student ('John', 'Jackson', 1985, [100, 100, 100, 27, 100, 100, 100, 98, 100, 100]);
const student3 = new Student ('Jack', 'Peterson', 2002, [22, 33, 44, 53, 100, 66, 73, 76, 53, 100]);

for(let i = 0; i < 25; i++){
	Math.floor(Math.random() * 2) == 0 ? student1.absent() : student1.present();
	Math.floor(Math.random() * 2) == 0 ? student2.absent() : student1.present();
	Math.floor(Math.random() * 2) == 0 ? student3.absent() : student1.present();
}

console.log(`Student ${student1.name} ${student1.lastname} is ${student1.getAge()} years old and average mark is ${student1.getAvgMark()} ${student1.summary()}`);
console.log(`Student ${student2.name} ${student2.lastname} is ${student2.getAge()} years old and average mark is ${student2.getAvgMark()} ${student2.summary()}`);
console.log(`Student ${student3.name} ${student3.lastname} is ${student3.getAge()} years old and average mark is ${student3.getAvgMark()} ${student3.summary()}`);


