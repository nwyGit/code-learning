/**Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" */

function longest(s1, s2) {
	str = s1 + s2;
	res = "";
	str
		.split("")
		.sort()
		.map((char) => {
			if (!res.includes(char)) {
				res += char;
			}
		});
	return res;
}

//alternatives
//const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

/**function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
} */

//Set() constructor allows creating an object that contains only unique values;
