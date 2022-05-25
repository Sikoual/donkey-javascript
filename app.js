const aries = `♈`,
	taurus = `♉`,
	gemini = `♊`,
	cancer = `♋`,
	leo = `♌`,
	virgo = `♍`,
	libra = `♎`,
	scorpio = `♏`,
	sagittarius = `♐`,
	capricorn = `♑`,
	aquarius = `♒`,
	pisces = `♓︎`;

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [gemini, libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

fireSigns.push(sagittarius);

console.log(
	fireSigns[fireSigns.length - 1] === "♐"
		? "Good Answer ✅"
		: "Wrong Answer ❌"
);

earthSigns.pop();

console.log(
	earthSigns[earthSigns.length - 1] !== "♐"
		? "Good Answer ✅"
		: "Wrong Answer ❌"
);

const array = [];
let zodiacSigns = array.concat(fireSigns, earthSigns, waterSigns, airSigns);


console.log(
	(zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒")
		? "Good Answer ✅"
		: "Wrong Answer ❌"
);

console.log(`There is ${zodiacSigns.length} signs in the zodiac`);