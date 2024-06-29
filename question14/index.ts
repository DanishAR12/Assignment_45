// Question:14
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
// method 1*
let guests: string[] = ["Ali", "Hassan", "Ijaz"];
guests.forEach((guest) => {
  console.log(`Dear ${guest},you are invited to the dinner.`);
});

// method 2**
let guests2: string[] = ["Ali", "Hassan", "Ijaz"];
guests2.map((items) =>
  console.log(`Dear ${items},you are invited to the dinner`)
);

// method 3***
let guests3: string[] = ["Ali", "Hassan", "Ijaz"];
for (let gues of guests3) {
  console.log(`Dear ${gues},yor are invited to the dinner `);
}
