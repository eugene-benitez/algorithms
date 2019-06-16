//1. Push Front
var testArr = [1,1,2,3,4];

function swapIndices(idx1, idx2, arr) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	return arr;
}

function pushFront(arr,val) {
	var lastIndex = arr.length;
	arr.push(val);
	console.log(arr);
	for (var i = 0; i <= lastIndex; i++) {
		swapIndices(i, lastIndex, arr);
		console.log(arr);
	}
}

//pushFront(testArr, 0);

//2. Insert At
function insertAt(arr,at,val) {
	console.log(arr);
	var lastIndex = arr.length;
	arr.push(val);
	console.log(arr);
	for (var i = at; i <= lastIndex; i++) {
		swapIndices(i, lastIndex, arr);
		console.log(arr);
	}
}

//insertAt(testArr, 1, 3);


//3. Pop Front
function popFront(arr) {
	var lastIndex = arr.length;
	for (var i = 0; i < lastIndex - 1; i++) {
		temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	console.log(arr);
}
//
//popFront(testArr);


//4. Remove At
function removeAt(arr,index) {
	console.log(arr);
	var length = arr.length - 1;
	for (var i = 0; i < length; i++) {
		temp = arr[i];
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	console.log(arr);
}

//removeAt(testArr,2);

//5. Swap Pairs

function swapPairs(idx1, idx2, arr) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	console.log("swap is", arr)
	return arr;
}

//6. Remove Duplicates
function removeDuplicates(arr) {
	var length = arr.length-1;
	for (var i = 0; i < length; i++) {
		if (arr[i] == arr[i+1]) {
			swapIndices(i, length, arr);
			arr.pop();
		}
	}
	console.log(arr);
}

//removeDuplicates(testArr);

//7. Min to Front
function minToFront(arr) {
	console.log(arr);
	var length = arr.length-1;
	var min = arr[0];
	for (var i = 0; i < length; i++) {
		if (arr[i] < min) {
			min = i;
		}
	}
	swapIndices(0, min, arr);
	console.log(arr);
}

minToFront([2,3,1,4,5]);

//Unfinished. Numbers does not shift