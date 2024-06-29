//Question: 21
/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */
let car1 = {
    name: "civic",
    color: "black",
    model: 2018,
    powerstring: true,
};
let carsArr = [];
carsArr.push(car1);
carsArr.push({
    name: "alto",
    color: "white",
    model: 2015,
    powerstring: false,
});
let car2 = {
    name: "premo",
    color: "silver",
    model: 2022,
    powerstring: true,
};
carsArr.push(car2);
//console.log(carsArr);
carsArr.push({
    name: "sportage",
    color: "red",
    model: 2023,
    powerstring: true,
});
function displayCars(carsArr) {
    console.log("*Display of cars List*");
    for (let i of carsArr) {
        console.log(`
          name:${i.name}
          colors:${i.color}
          model:${i.model}
          powerstring:${i.powerstring} 
          --------------\n`);
    }
}
displayCars(carsArr);
export {};
