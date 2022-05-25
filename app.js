const notes = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const result = [];

const calcTip = (amount) => {
	return amount > 50 && amount < 300
		? amount * 0.15
		: amount * 0.20
}

const calcAverage = (array) => {
	return array.reduce((total,acc) => total + acc, 0) / array.length;
}
for (let amount of notes) {
	tips.push(calcTip(amount))
}

for(let i = 0 ; i < notes.length ; i++){
	result.push([tips[i],notes[i]])
}

console.log(result);
console.log(calcAverage(notes)); // 232.3
console.log(calcAverage(tips)); // 42.89