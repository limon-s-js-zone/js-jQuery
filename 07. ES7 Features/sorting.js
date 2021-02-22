let log = console.log;

let movies = [
  "Star Wars",
  "Star Trek",
  "Jaws",
  "Jurassic Park",
  "Gross Pointe Blank",
  "Eternal Sunshine of the Spotless Mind",
  "Memento",
  "Dog Soldiers",
  "The Host",
  "Gran Torino",
  "Close Encounters of the Third Kind",
  "Good Will Hunting",
  "Layer Cake",
  "Casino Royale",
  "Almost Famous",
];

let numbers = [40, 16, 67, 345, 22, 23, 142, 63, 59, 283];

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@bladerunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F. Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];

log(movies.sort());

function handleSort(arr, search) {
  return arr.sort((a, b) => {
    if (a[search] > b[search]) return 1;
    else if (b[search] > a[search]) return -1;
    else return 0;
  });
}

let sortPeople = handleSort(people, "email");
sortPeople = handleSort(sortPeople, "id");
log(sortPeople);

let count = 0;
let shortNum = numbers.sort((a, b) => {
  log(a, b);
  if (a > b) return 1;
  else if (b > a) return -1;
  else return 0;
});
log(shortNum);
