/*
	Challenge 5: Create a function that reverses an array

			This challenge is particularly helpful if you're planning to become a Data
			Scientist. Manipulating data is a significant part of the role, and
			building the foundations now will help you later down the road when you're
			working with large databases. Start small here and work your way up. Begin
			with an array of 5 numbers, and then try your program with a larger array
			to verify its success.

			Start small here and work your way up. Begin with an array of 5 numbers,
			and then try your program with a larger array to verify its success.
 */

// you can log out to the console or to the output container like this:
// output.innerText = "My output";
const output = document.getElementById("output-container");
if (!output) throw "Output container not found.";

//@ts-check
// your code starts after this line
// Java Program for Reversing an array using StringBuilder

const reverseArray = (arr) => {
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
};

const arr = ["red.", "in", "girl", "love", "I"];
console.log(reverseArray(arr));
