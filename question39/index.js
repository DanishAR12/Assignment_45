//Question:39
/*
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.
*/
// Arrow function
const city_country = (city, country) => {
    return `${city}, ${country}`;
};
//test the function with three city-country pairs.
console.log(city_country("lahore", "pakistan"));
console.log("new york", "USA");
console.log("tokyo", "japan");
export {};
