function findOrdersCount (arr){ // task 1
	const mapOrders = arr.reduce((calc, curr) =>{
	  const key = curr.user;
	  let purchase = 1;
	
	  calc.set(key, (calc.get(key) || 0) + purchase);
	
	  return calc;
	}, new Map());
	
	
	console.log(mapOrders);
  }
  
  
  
  function findPriceSum(arr){ // task 2
	const mapPriceSum = arr.reduce((calc, curr) => {
	  const key = curr.user;
	  let priceSum = 0;
	
	
	  curr['items'].forEach(item =>{
		priceSum += item.price;
	  })
	
	  calc.set(key, (calc.get(key) || 0) + priceSum);
	
	  return calc;
	}, new Map() );
	
	console.log(mapPriceSum);
	return mapPriceSum;
  }
  
  
  
  function findUnique(arr){ // task 3
  
	const itemsArr = [];
  
	arr.forEach(obj =>
	{
	  obj['items'].forEach(product =>{
		itemsArr.push(product.name);
	  })
	});
  
	const result = itemsArr.filter(i =>{
	  return itemsArr.indexOf(i) === itemsArr.lastIndexOf(i);
	});
  
	const uniqueItems = new Set(result)
	console.log(uniqueItems);
  
  }
  
  function findPersonWithBiggestExpenses(mapPriceSum){ // task4
	const peopleExpenses = Array.from(mapPriceSum.values()), customers = Array.from(mapPriceSum.keys());
  
	const biggestSum = Math.max(...peopleExpenses)
	
	console.log(`${customers[peopleExpenses.indexOf(biggestSum)]} spent the biggest amount $${biggestSum}`);
  }
  
  findOrdersCount(orders) // task 1
  
  findPriceSum(orders); // task 2
  
  findUnique(orders); // task 3
  
  findPersonWithBiggestExpenses(findPriceSum(orders)); // task 4