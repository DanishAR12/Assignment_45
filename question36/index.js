//Question:36
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
const make_shirt = (size, message) => {
    console.log(`Size: ${size}\nMessage: ${message}`);
};
// directly function call
make_shirt("medium", "very nice T-shirt");
// call the function with the size and message variable.
let size = "large";
let message = "that's a good T-shirt";
make_shirt(size, message);
export {};
