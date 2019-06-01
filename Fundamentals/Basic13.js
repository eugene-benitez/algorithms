// 1. Print 1-255 :
function print1To255(x = 255) {
	var i = 1;
	while (i <= x) {
		console.log(i);
		i++;
	}
	return;
}

//print1To255();


// 2. Print Ints and Sum 0-244 :
function printIntsAndSum0To255(x = 255) {
	var sum = 0;
	var i = 0;
	while (i <= x) {
		console.log(i);
		console.log(sum+=i);
		i++;
	}
}

//printIntsAndSum0To255();


//3. Print Max of Array :
function printMaxOfArray(arr) {
	var min = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[min]) {
			min = i;
		}
	}
	console.log("The largest value in the array is", arr[min]);
}

//printMaxOfArray([4,6,7,255,2,24]);


//4. Return Odds Array 1-255 : 

function returnOddsArray1To255(x=255) {
	let oddNumArray = [];
	for (var i = 0; i <= 255; i++) {
		if (i % 2 != 0) {
			oddNumArray.push(i);
		}
	}
	console.log(oddNumArray);
}


//returnOddsArray1To255();


//5. Return Array Count Greater than Y :
function returnArrayCountGreaterThanY(arr,y) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > y) {
			count ++;
		}
	}
	console.log("The number of values in the array that are greater than y is:",count)
}

//returnArrayCountGreaterThanY([2,3,4,5,6], 3);

//6. Print Max, Min, Avg, Array Values :
function printMaxMinAverageArrayVals(arr) {
	var max = 0;
	var min = 0;
	var average = 0;
	var sum = 0;
	
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[max]) {
			max = i;
		}
		if (arr[i] < arr[min]) {
			min = i;
		}
		sum += arr[i];
	}
	
	average = sum / arr.length;
	
	console.log("Max:", arr[max], "Min:", arr[min], "Avg:", average);
}

//printMaxMinAverageArrayVals([1,2,3,4,5,6,7,8,9,10]);

//7. Swap String for Array Negative Values : 
function swapStringForArrayNegativeVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0 ) {
			arr[i] = "Dojo";
		}
	}
	console.log(arr);
}

//swapStringForArrayNegativeVals([-2,-3,4,5,-5]);

//8. Print Odds 1-255 :
function printOdds1To255(x=255) {
	var i = 1;
	while (i <= x) {
		if (i % 2 != 0) {
			console.log(i);
		}
		i++;
	}
}

//printOdds1To255();


//9. Print Average of Array :
function printAverageOfArray(arr) {
	var sum = 0;
	var average = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	
	average = sum / arr.length;
	console.log(average);
}

//printAverageOfArray([1,2,3,4,5,6,7,8,9,10]);

//10. Print Array Values: 
function printArrayVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

//printArrayVals([1,2,3,4,5]);

// 11. Square Array Values : 
function squareArrayValues (arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = Math.pow(arr[i], 2)	
	}
	console.log(arr);
	return arr;
}

//squareArrayValues([2,4,6]);

//12. Zero Out Array Negative Numbers :
function zeroOutArrayNegativeVals(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		} 
	}
	console.log(arr);
	return arr;
}

//zeroOutArrayNegativeVals([-2,-3,-6,6,4,-2]);

//13. Shift Array Values Left:
//Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

function shiftArrayValsLeft(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (i == arr.length-1) {
			arr[i] = 0;
		}
		
		else {
			arr[i] = arr[i+1];
		}
	}
	
	console.log(arr);
	return arr;
}

//shiftArrayValsLeft([1,2,3,4,5]);

