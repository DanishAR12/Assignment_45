/* Question:16 More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.
*/
let guestsList = ["ali", "hassan", "ijaz"];
for (let guest of guestsList) {
    console.log(`Hello, ${guest} we found a bigger dinner table.`);
}
//new guest add begining of the array.
let guestBigining = "noman";
guestsList.unshift(guestBigining);
console.log(guestsList);
// new guest add middle of array.
let guestMiddle = "umer";
let middleIndex = Math.floor(guestsList.length / 2);
guestsList.splice(middleIndex, 0, guestMiddle);
console.log(guestsList);
// new guest add end of array.
let guestAtEnd = "ahmed";
guestsList.push(guestAtEnd);
console.log(guestsList);
// print a new set of invitation message.
console.log("New set of invitation message");
for (let guest of guestsList) {
    console.log(`Dear ${guest} you are invited to dinner.`);
}
;
console.log(guestsList);
export {};
