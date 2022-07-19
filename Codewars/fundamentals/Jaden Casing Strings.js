/** Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org*/

String.prototype.toJadenCase = function () {
	let res = "";
	for (var i = 0; i < this.length; i++) {
		if (i === 0) {
			res += this[i].toLocaleUpperCase();
		} else if (this[i] === " ") {
			res += " ";
			res += this[i + 1].toLocaleUpperCase();
			i++;
		} else {
			res += this[i];
		}
	}
	return res;
};

//alternatives
/**String.prototype.toJadenCase = function () {                     
  return this.split(" ").map(function(word){                          //split to an array
    return word.charAt(0).toUpperCase() + word.slice(1);              //each element(string)'s first char is going to be uppercase
  }).join(" ");                                                       //then adding all remaining chars to that word
} */
