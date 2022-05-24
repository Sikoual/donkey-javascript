const tips = (checkAmount) => {
	return checkAmount > 50 && checkAmount < 300 
		? checkAmount * 0.15 
		: checkAmount * 0.20;
}

console.log(tips(275));
console.log(tips(40));
console.log(tips(430));
