//Question:35
/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
//Define animal array common characteristic.
const animals = ["cat", "dog", "goat"];
// print the names of each animal using for of loop.
for (const animal of animals) {
    console.log(animal);
}
//print a statement about each element
console.log("\n statement about each element");
for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} is a great pet.`);
    }
    else if (animal === "cat") {
        console.log(`A ${animal} would be a good companion at home.`);
    }
    else if (animal === "goat") {
        console.log(`A ${animal} is an adrobale pet that also give us milk.`);
    }
}
// comman characteristic
console.log("what these animal have in common");
console.log("any of these animal would make a great pet!");
export {};
