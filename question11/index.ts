// Question:11
/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/

let names: string[] = ["ali", "hassan", "ijaz", "umer"];

console.log(names[0]);

console.log(names[1]);

console.log(names[2]);

console.log(names[3]);

//another method for loop

let names2: string[] = ["ali", "hassan", "ijaz", "umer"];

for (let i = 0; i < names2.length; i++) {
  console.log(names2[i]);
}
