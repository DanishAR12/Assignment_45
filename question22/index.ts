//Question: 22
/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

const seasons: string[] = ["summer", "winter", "spring", "autumn"];
//error index
console.log(seasons[4]); // error because indexing start 0
// solve error
console.log(seasons[3]); // last element index at 3 (autumn).
