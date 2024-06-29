//Question:13
/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about these
items, such as “I would like to own a Honda motorcycle.”
*/
// method 1 *
let transportations = ["Hounda motorcycle", "audi car", "premo car"];
transportations.forEach((transportation) => {
    console.log(`I would like to own a ${transportation}.`);
});
//method 2 **
let transportations2 = ["Hounda motorcycle", "audi car", "premo car"];
transportations2.map((items) => console.log(`I would like to own a ${items}`));
// method 3 ***
let transportations3 = ["Hounda motorcycle", "audi car", "premo car"];
for (let trans of transportations3) {
    console.log(`I would like to own a ${trans}`);
}
export {};
