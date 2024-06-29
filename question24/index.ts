//Question:24
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

//Tests for equality and inequality with strings.
const str1: string = "Hello";
const str2: string = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2); //true

// Tests using the lower case function.
const test1: string = "Hello World";
const test2: string = "hello world";
console.log(test1.toLowerCase() === test2); //true

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
const num1: number = 5;
const num2: number = 10;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 < num2); // true
console.log(num1 > num2); //false
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true

//Tests using "and" and "or" operators.
const x: number = 5;
const y: number = 10;
const z: number = 15;
console.log(x < y && y < z); //true, both condition are true
console.log(x < y || y > z); //true, at least one condition true
console.log(x > y && y > z); //false, both  condition are false
console.log(x > y || y > z); //false, both condition are false

//Test whether an item is in a array.
const fruits: string[] = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("mango")); //true
console.log(fruits.includes("kiwi")); //false

// Test whether an item is not in a array.
const colors: string[] = ["red", "green", "blue", "yellow"];
console.log(!colors.includes("purple")); //true
console.log(!colors.includes("green")); //false
