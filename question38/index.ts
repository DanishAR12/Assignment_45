//Question:38
/*
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/

function describe_city(
  cities: string,
  country: string = "unknown country"
): void {
  console.log(`${cities} is in ${country}`);
}
//calling the function three diferent cities
describe_city("Karachi", "Pakistan");
describe_city("new york"); // using country default value
describe_city("Berlin", "Germany");
