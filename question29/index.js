//Question:29
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
//  Define an array.
let favorite_fruits = ["apples", "bananas", "oranges"];
//check for specific fruits using independent if statement
if (favorite_fruits.includes("apples")) {
    console.log("I Like apples!");
}
if (favorite_fruits.includes("bananas")) {
    console.log("I enjoye bananas!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("oranges are delisious!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("grapes are tasty!");
}
if (favorite_fruits.includes("mango")) {
    console.log("mangoes are one of my favorite!");
}
export {};
