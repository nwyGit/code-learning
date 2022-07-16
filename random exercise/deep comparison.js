//https://eloquentjavascript.net/04_data.html
/** The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.*/

// Your code here.

function deepEqual(value1, value2) {
	const ok = Object.keys,
		tx = typeof value1,
		ty = typeof value2;
	return value1 && value2 && tx === "object" && tx === ty // show they are objects, if not, compare the two values
		? ok(value1).length === ok(value2).length &&
				ok(value1).every((key) => deepEqual(value1[key], value2[key])) // pass each key in value1 by calling the function itself again
		: value1 === value2;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
