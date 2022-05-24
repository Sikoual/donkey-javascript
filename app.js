const calcAverage = (scores) => {
	return scores.reduce((total, acc) => total + acc, 0) / scores.length;
}

// DONNEE 1
const averageDauphins1 = calcAverage([44, 23, 71]) // 46
const averageKoalas1 = calcAverage([65, 54, 49]) // 56

// DONNEE 2

const averageDauphins2 = calcAverage([85, 54, 41]) // 60
const averageKoalas2 = calcAverage([23, 34, 27]) // 28

const checkWinner = (averageDauphins, averageKoalas) => {
	return averageDauphins > averageKoalas ? `L'équipe Dauphins gagne (${averageDauphins} vs ${averageKoalas})` : `L'équipe Koalas gagne (${averageKoalas} vs ${averageDauphins})`
}

console.log(checkWinner(averageDauphins1, averageKoalas1))
console.log(checkWinner(averageDauphins2, averageKoalas2))