function indexOfIgnoreCase(s1, s2) {
	str = s1.tolower();
	substr = s2.tolower();
	return str.indexOf(s2);
}

// Please do not change the code below

//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
