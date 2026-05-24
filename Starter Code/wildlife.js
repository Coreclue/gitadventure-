/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalSightings(...animalsCount) {
	return animalsCount
}

console.table("animals sightings in the sancturary wow!" + animalSightings("Lion", "Elephant", "Giraffe"));

console.log("Task one complete!")

/* Task 2: Merge Habitat Areas */
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const forestHabitats = ["Forest A ", "Forest B"];
const savannahHabitats = [" Savannah C ", "Savannah D"];
const allHabitats = [...forestHabitats, ...savannahHabitats];

console.log("Task 2 complete");

/* Task 3: Update Conservation Status */
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};

const updatedRhinoStatus = {
	...rhinoStatus,
	population: 550,
	status: "safe"
}
console.log("original object before: " + JSON.stringify(rhinoStatus));
console.log("updated object: " + JSON.stringify(updatedRhinoStatus));
console.log("Task 3 complete")


/* Task 4: Catalog Genetic Diversity */
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};

const lionProfileCopy = { ...lionProfile };

lionProfileCopy.genetics = {
	gender: "female",
	diet: "carnivore"
}
console.log("original object before: " + JSON.stringify(lionProfile));
console.log("copied object: " + JSON.stringify(lionProfileCopy));
console.log("Task 4 complete")


/*
 * Observations:
 * TODO: Explain here.
 * spread opertor spreads a copy of the original object properties into a new object. When we add a new property to the copied object, it does not affect the original object because they are separate entities. However, if we were to modify a nested property (like genetics), it would affect both objects since they reference the same nested object in memory. In this case, since we added a new property (genetics) to the copied object, it does not affect the original lionProfile object.
 */

/* Task 5: Analyze Ecosystem Health */
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};


const foodSupplyUpdate = {
	...ecosystemHealth.foodSupply,
	omivores: "Moderate",
	herbivores: "Full"

};

console.log("original object before: " + JSON.stringify(ecosystemHealth));
console.log("updated food supply: " + JSON.stringify(foodSupplyUpdate));
console.log("Task 5 complete")

/*
 * Observations:
 * TODO: Explain here.
 * spread operator precedes objects whose properties are to be copied in to the new object. and permits modicationf of adding or changing proerties without affecting the original object.  
 */
