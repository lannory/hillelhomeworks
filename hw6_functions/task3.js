const array = [1, 3, 4, 6, 2, 5, 7, 4];

function removeElement(array, item){
	let newArr = [];
	array.forEach(i => {
		if(i !== item){
			newArr.push(i);
		}
	})
	return newArr;
}

const newArr = removeElement(array, 4);

console.log(newArr);