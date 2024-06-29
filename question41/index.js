//Question:41
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
 */
//Array of magician's names.
const magician_name = ["Herry porter", "David copperfield", "Harmione granger", "Professor albus", "Ron waesley"];
function show_magicians(magicians) {
    for (const items of magicians) {
        console.log(items);
    }
}
//call the function
show_magicians(magician_name);
export {};
