/**Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string */

function fakeBin(x) {
	let res = "";
	x.split("").map((num) => {
		if (num < 5) {
			res += "0";
		} else {
			res += "1";
		}
	});
  return res;
}
