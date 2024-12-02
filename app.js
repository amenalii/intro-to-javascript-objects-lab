const pokemon = require("./data.js");
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};

// Exercise 1
console.dir(pokemon, { maxArrayLength: null });
console.log(pokemon[58].name);

//Exercise 2
console.log(game);

//Exercise 3
//Adding a property
game.difficulty = "Hard";
console.log(game);

//Exercise 4
//Adding a starter pokemon from pokemon array to party array.

//Finds a starter pokemon
const starter = pokemon.find((pokemon) => {
  return pokemon.starter === true;
});
console.log(starter);

//Adds it to party array in game
game.party.push(starter);
console.log(game.party);

//Exercise 5
// Add three more random pokemons.

// Not sure how to create a code to implent different attributes.
const pokemonOne = pokemon[5];
const pokemonTwo = pokemon[149];
const pokemonThree = pokemon[39];

game.party.push(pokemonOne, pokemonTwo, pokemonThree);
console.log(game.party);

//Exercise 6

// Set completed property to true for gyms with difficulty below 3
for (gyms of game.gyms) {
  if (gyms.difficulty < 3) {
    gyms.completed = true;
  }
}
console.log(game);

//Exercise 7
// Index = 0 to 1
//game.party[0] = pokemon[1]
//console.log(game.party)

// .splice(start, deleteCount, item1)
game.party.splice(0, 1, pokemon[1]);
console.log(game.party);

//Exercise 8
//Print name of pokemons in party.

// for (let i = 0; i < numbers.length; i++) {
//  console.log(numbers[i]); // Access element at index i
// }
//for (let i = 0; i < game.party.length; i++) {
//console.log(game.party[i].name); // i comes in party not in name
//}

// Easier version
game.party.forEach((pokemon) => {
  console.log(pokemon.name);
});

//Exercise 9
//Print all starter pokemon

// for (starter of pokemon.starter) {
//   if (pokemon.starter = true) {
//     console.log(pokemon.name);
//   }
// }

// for (let starter of pokemon) {
//   if (starter.starter === true) {
//     console.log(starter);
//   }
// }

let start = pokemon.filter((starter) => {
  return starter.starter === true;
});
console.log(start);

//Exercise 10
//Catch Pokemon

game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
};

game.catchPokemon(pokemon[111]);
console.log(game.party);

//Exercise 11 ??
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
};
//Not sure how to approach this

//Exercise 12
//Complete gyms with difficulty below 6

for (gyms of game.gyms) {
  if (gyms.difficulty >= 3 && gyms.difficulty < 6) {
    gyms.completed = true;
  }
}
console.log(game.gyms);

//Exercise 13
// Tally completed and incompleted levels

function gymStatus(game) {
  const gymTally = { completed: 0, incomplete: 0 };
  for (let i = 0; i < game.gyms.length; i++) {
    const gym = game.gyms[i];
    const tally = gym.completed;
    if (tally === true) {
      gymTally.completed += 1;
    } else if (tally === false) {
      gymTally.incomplete += 1;
    }
  }
  return gymTally;
}
console.log(gymStatus(game));

//Exercise 14
//Count pokemon in party

game.partyCount = function () {
  return game.party.length;
};
console.log(game.partyCount());

//Exercise 15
//Complete gyms with difficulty below 8

for (gyms of game.gyms) {
  if (gyms.difficulty >= 6 && gyms.difficulty < 8) {
    gyms.completed = true;
  }
}
console.log(game.gyms);

//Exercise 16
//Log entire game

console.log(game);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////// LEVEL UP ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercise 17
//Arrange Pokemon by HP using .sort 

// sort by value
//items.sort((a, b) => a.value - b.value);

game.party.sort((a, b) => a.hp - b.hp);
console.log(game.party)


//Exercise 18
