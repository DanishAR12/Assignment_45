// Question:12
/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing
 each person’s name, print a message to them. The text of each message should be the same, but each
 message should be personalized with the person’s name.
*/
let names = ["ali", "hassan", "ijaz", "umer"];
let message = "do you play cricket?";
console.log(names[0] + " " + message);
console.log(names[1] + " " + message);
console.log(names[2] + " " + message);
console.log(names[3] + " " + message);
//another method for of loop
let names2 = ["ali", "hassan", "ijaz", "umer"];
for (let name of names2) {
    console.log(`${name} do you play cricket?`);
}
export {};
