//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
	return x.replace(/\s/g, ""); //\s = whitespace
}

// x.replace(/ /g, "")          should use it as the question requires only removing space
