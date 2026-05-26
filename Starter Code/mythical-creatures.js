const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

// Use the find method to locate the first creature of the "Water" type and log its name to the console.
const waterCreature = mythicalCreatures.find(function(water){
	return water.type === "Water";
})
console.log(waterCreature);

// Use the findIndex method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
const findGriffin = mythicalCreatures.find(function(index){
	return index.name === "Griffin";
})

// Use the find method to locate the first creature last seen in "Enchanted Forest".
console.log(findGriffin);

const findLastSeen = mythicalCreatures.find(function(index){
	return index.lastSeen === "Enchanted Forest";
})
console.log(findLastSeen);