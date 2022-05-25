// DONNEE 1

const bernard = {
	prenom: "Bernard",
	poids: 78,
	taille: 1.69,
	calcBMI() {
		return this.poids / this.taille ** 2
	}
}

const marcel = {
	prenom: "Marcel",
	poids: 92,
	taille: 1.95,
	calcBMI() {
		return this.poids / this.taille ** 2
	}
}

bernard.imc = bernard.calcBMI().toFixed(2);
marcel.imc = marcel.calcBMI().toFixed(2);

console.log(
	bernard.imc > marcel.imc
		? `L'IMC de Bernard ${bernard.imc} est plus élevé que celui de Marcel ${marcel.imc}`
		: `L'IMC de Marcel ${marcel.imc} est plus élevé que celui de Bernard ${bernard.imc}`
)

// DONNEE 2

bernard.poids = 95;
bernard.taille = 1.88;
marcel.poids = 85;
marcel.taille = 1.76;

bernard.imc = bernard.calcBMI().toFixed(2);
marcel.imc = marcel.calcBMI().toFixed(2);

console.log(
	bernard.imc > marcel.imc
		? `L'IMC de Bernard ${bernard.imc} est plus élevé que celui de Marcel ${marcel.imc}`
		: `L'IMC de Marcel ${marcel.imc} est plus élevé que celui de Bernard ${bernard.imc}`
)