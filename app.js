// DONNE 1
const temperatures1 = [17, 21, 23];
let day = 1;

for(let temperature of temperatures1){
	if(day === 1){
		console.log(`${temperature} degrés dans ${day} jour`)
		day++
	}else{
		console.log(`${temperature} degrés dans ${day} jours`)
		day++
	}
}

// DONNE 2

const temperatures2 = [12, 5, -5, 0, 4];

for(let temperature of temperatures2){
	if(day === 1){
		console.log(`${temperature} degrés dans ${day} jour`)
		day++
	}else{
		console.log(`${temperature} degrés dans ${day} jours`)
		day++
	}
}