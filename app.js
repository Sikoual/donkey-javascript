// Exercice 1

const imc = (poids,tailleEnMetre) => {
	return poids/tailleEnMetre**2;
}

const bernardIMC1   = imc(78,1.69);
const bernardIMC2   = imc(95,1.88);
const marcelIMC1    = imc(92,1.95);
const marcelIMC2    = imc(85,1.76);

const bernardHigherIMC = bernardIMC1 > marcelIMC1;
console.log(bernardHigherIMC);

// Exercice 2

console.log(bernardHigherIMC ? `Bernard a un IMC plus élevé que Marcel` : `Marcel a un IMC plus élevé que Bernard`);
console.log(`Bernard a un IMC(${bernardIMC1.toFixed(2)}) plus élevé que Marcel(${marcelIMC1.toFixed(2)})`)


// Exercice 3

const resultImc = (nom, imc) => {
		if (imc < 20){
			console.log(`${nom} : insuffisance pondérale`);
		} else if (imc <= 25){
			console.log(`${nom} : poids normal`);
		} else if (imc <= 30){
			console.log(`${nom} : surpoids`);
		} else{
			console.log(`${nom} : adiposité sévères`);
		}
}

resultImc("Bernard", bernardIMC2);
resultImc("Marcel",marcelIMC2);