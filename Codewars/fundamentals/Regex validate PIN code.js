/**ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false */

function validatePIN(pin) {
	let pin6 = /[0-9][0-9][0-9][0-9][0-9][0-9]/;
	let pin4 = /[0-9][0-9][0-9][0-9]/;
	return (pin.match(pin6) && pin.length === 6) ||
		(pin.match(pin4) && pin.length === 4)
		? true
		: false;
}

//alternative
//const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)      // ^:beginning, $:end, {}:occurrences, |:or(in regex), \d: digits
