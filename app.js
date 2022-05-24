const calcTip = (amount) => {
	return amount > 50 && amount < 300
		? amount * 0.15
		: amount * 0.20
}


const bills = [125, 555, 44]
const tips = [];

for (let amount of bills) {
	tips.push(calcTip(amount))
}

const totals = [[...bills], [...tips]];

console.log(totals);