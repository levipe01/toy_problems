// Write a function that takes as its input a string and returns an array of
// arrays as shown below sorted in ascending order by frequency and character.

var characterFrequency = function(string) {
	let storage = {};
  let stringArr = string.split('');

	for (let i = 0; i < stringArr.length; i++) {
		if (storage[stringArr[i]]) {
			storage[stringArr[i]][1]++;
		} else {
			storage[stringArr[i]] = [string[i], 1];
		}
	}

	let result = []
	for (let j = 0; j < Object.keys(storage).length; j++) {
		result.push(storage[Object.keys(storage)[j]]);
	}

	result.sort(function (a, b) {
		let nameA = a[0].toUpperCase();
	  let nameB = b[0].toUpperCase();
		let letterSort = 0;

	  if (nameA < nameB) { letterSort = -1 }
	  if (nameA > nameB) { letterSort = 1 }

	  return a[1] - b[1] || letterSort;
	});

  return result;
};