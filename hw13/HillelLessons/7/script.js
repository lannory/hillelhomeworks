// const obj1 = {value : 5};

// const obj2 = {...obj1};
// const obj3 = Object.assign({}, obj1);


// const obj5 = {
// 	name: "John",
// 	skills: [
// 		{level: 5, value:"JS"}, 
// 		{level: 25, value:"HTML CSS"}, 
// 		{level: 35, value:"React"}]
// }

// const copyObj5 = {...obj5};
// copyObj5.skills.push({level: 2, value: "Math" });

// console.log(obj5);

// const user = {
// 	name: "John smitr",
// 	showName: () => {
// 		console.log(this.name);
// 	}
// }

// user.showName();

function makeCounter(initialValue = 1){
	let count = initialValue;

	return function(){
		return count;
	}
}

let counter = makeCounter(5);

console.log(counter());
console.log(counter());

let counter2 = makeCounter();

console.log(counter2());

function sum (initialValue = 0){
	let currCount = initialValue;
	
	return function(step){
		currCount += step;
		return currCount;
	}
}

let f1 = sum(0);

f1(5);
console.log(f1(10));


function multiply(a){
	return (b)=>{
		return(c)=>{
			return a * b * c;
		}
	}
}

let firstStep = multiply(5);

let secondStep = firstStep(7);

let thirdStep = secondStep(1);

console.log(thirdStep);