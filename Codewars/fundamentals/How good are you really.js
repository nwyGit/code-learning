/** There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!*/

function betterThanAverage(classPoints, yourPoints) {
	let sum = yourPoints;
	classPoints.forEach((num) => (sum += num));
	return yourPoints > sum / (classPoints.length + 1) ? true : false;
}

//alternative
/**function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
} */

//0 = initial value; then a = 0, b = current value[index0]; a+b
//a = a+b, b = current value[index1]; a+b
//finally return a value
