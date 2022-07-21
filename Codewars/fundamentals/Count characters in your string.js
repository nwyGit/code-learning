/** The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count(string) {
	let res = {};
	string = string.split("").sort();
	console.log(string);
	if (string.length > 0) {
		string.map(
			(char) =>
				(res[char] =
					string.lastIndexOf(char) - string.findIndex((c) => c === char) + 1)
		);
	}

	return res;
}

//alternative
/**function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;                //if count[char] exists, 
  });                                                     //count[char] += 1;, otherwise count[char] = 1(initializing)
  return count;
} */
