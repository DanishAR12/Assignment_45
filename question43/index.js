//Question:43
/*
Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
//Array of magician's names.
const magician_name = [
    "Herry porter",
    "David copperfield",
    "Harmione granger",
    "Professor albus",
    "Ron waesley",
];
//create a function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map((magician) => `the great ${magician}`);
    return greatMagicians;
}
//modify the array to add "the great"to each magicians name
const greatMagiciansName = make_great(magician_name);
//call the function to show orignal magicians names
console.log("Orignal magicians names");
show_magicians(magician_name);
//call the function to show the great magicians names
console.log("\nGreat Magicians");
show_magicians(greatMagiciansName);
export {};
