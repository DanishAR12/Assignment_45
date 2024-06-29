//Question: 20
/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
let languages: string[] = ["English", "Urdu", "French", "Hindi", "Arabic"];
console.log("*List of Languages*");
for (let top of languages) {
  console.log(top);
}
// method 2
console.log("*List of Languages*");

languages.forEach((lang) => {
  console.log(lang);
});
