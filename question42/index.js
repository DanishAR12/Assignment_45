//Question:42
/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
    const greatMagicians = magicians.map((magician) => `The great ${magician}`);
    return greatMagicians;
}
//modify the array to add "the great"to each magicians name
const greatMagiciansName = make_great(magician_name);
show_magicians(greatMagiciansName);
export {};
