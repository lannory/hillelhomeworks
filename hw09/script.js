const company = {
	sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
	development: {
		web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
		internals: [{name: 'Jack', salary: 1300}]
	}
};

function getSalarySum(obj){
	let salarySum = 0;
	const allKeys = Object.keys(obj);

	if(Array.isArray(obj)){
		for(item of obj){
			salarySum += item.salary;
		}
	}
	else{
		for(let i = 0; i < allKeys.length; i++){
			const key = allKeys[i];
			salarySum += getSalarySum(obj[key]);
		}
	}
	return salarySum;
}


console.log(`Sum of company's employee salaries = ${getSalarySum(company)}`);