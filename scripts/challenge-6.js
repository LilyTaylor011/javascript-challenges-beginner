/*
	Challenge 6: Sort an array from lowest to highest

			You could create a function for this solution as well, but be sure to try
			your program with varying lengths and types of arrays. Try one with all
			integers, another with negative numbers, and another with decimals.

 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line

let a = [11, 2, 3, -22, 41];
function bigSmallSorter(arr) {
	// Sort a copy of the passed in array from least to most.
	let sortedArr = [...arr.sort((n, k) => n - k)];
	let newArr = [];
	let flip = true;

	for (let i of arr) {
		let temp = flip
			? // Take first element of the sorted array
			  sortedArr.shift()
			: // Take the last element of the sorted array
			  sortedArr.pop();

		// Add the newest value to the value that is ultimately returned
		newArr.push(temp);

		// Flip this so the next iteration takes from the other
		// end of the array
		flip = !flip;
	}

	// Profit
	return newArr;
}

console.log(bigSmallSorter(a));

//>[ -22, 41, 2, 11, 3 ]
