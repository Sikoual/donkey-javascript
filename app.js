const winner = (scoreDauphins, scoreKoalas) => {
	const averageDauphins = scoreDauphins.reduce((total, acc) => total + acc, 0) / scoreDauphins.length;
	const averageKoalas = scoreKoalas.reduce((total, acc) => total + acc, 0) / scoreKoalas.length;
	
	const maxScore = Math.max(averageDauphins, averageKoalas)
	
	if (maxScore <= 100) {
		return `Aucune équipe n'a de moyenne supérieur à 100, pas de vainqueur`
	} else if (averageDauphins > averageKoalas) {
		return `L'équipe gagnante de la compétition est l'équipe Dauphin !`
	} else if (averageDauphins < averageKoalas) {
		return `L'équipe gagnante de la compétition est l'équipe Koalas ! `
	} else {
		return `Les deux équipes sont à égalités ! `
	}
}

console.log(winner([96, 108, 89], [88, 91, 110]))
console.log(winner([97, 112, 101], [109, 95, 123]))
console.log(winner([97, 112, 101], [109, 95, 106]))