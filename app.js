const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// Exercice 1

const players1 = game.players[0];
const players2 = game.players[1];
const gk = players1[0];
const fieldPlayers = players1.slice(1);
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

function printGoals(arrayOfPlayersScored) {
	let response = "";
	for (let player of arrayOfPlayersScored) {
		response += `${player} `
	}
	return `Les joueurs suivants ont marqués durant la rencontre : ${response}, il y a eu au total ${arrayOfPlayersScored.length} buts`
}

console.log(printGoals(game.scored))

console.log(
	team1 < team2
		? `Le ${game.team1} à plus de chance de gagner`
		: `Le ${game.team2} à plus de chance de gagner`
)

// Exercice 2
let number = 1;

for (let score of game.scored) {
	console.log(`But${number} : ${score}`)
	number++
}

const probability = Object.values(game.odds);
const averageProbability = probability.reduce((total, acc) => total + acc, 0) / probability.length

console.log(
	`Probabilité de victoire pour le ${game.team1} : ${game.odds.team1}`
)
console.log(
	`Probabilité d'égalité : ${game.odds.x}`
)
console.log(
	`Probabilité de victoire pour le ${game.team2} : ${game.odds.team2}`
)

const scorers = {};

for (let player of game.scored) {
	scorers[player] ? scorers[player]++ : scorers[player] = 1;
}

console.log(scorers)

// Exercice 3

const gameEvents = [
	[17, "⚽ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🟨 Yellow card"],
	[69, "🟥 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽ GOAL"],
	[80, "⚽ GOAL"],
	[92, "🟨 Yellow card"],
];

const events = [...new Set(gameEvents)];

events.splice(4, 1);

console.log(
	`Un évènement est apparu en moyenne toutes les ${90 / events.length} minutes.`
)

for (let event of gameEvents) {
	if (event[0] <= 45) {
		console.log(
			`[PREMIÈRE MOITIÉ] ${event[0]}. ${event[1]}`
		)
	} else {
		console.log(
			`[DEUXIÈME MOITIÉ] ${event[0]}. ${event[1]}`
		)
	}
}