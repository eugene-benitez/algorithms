//1. Push Front
var testArr = [1,2,3,4];

function swapIndices(idx1, idx2, arr) {
	var temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
	console.log("swap is", arr)
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
	console.log(arr);
	var lastIndex = arr.length;
	console.log(lastIndex);
	for (var i = 0; i < lastIndex - 1; i++) {
		temp = arr[i];
		console.log(temp);
		arr[i] = arr[i+1];
		arr[i+1] = temp;
	}
	arr.pop();
	console.log(arr);
}

//popFront(testArr);