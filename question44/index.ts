//Question:44
/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function make_sandwich(...items: string[]): void {
  console.log("Sandwich Sammary:");
  if (items.length === 0) {
    console.log("  - you ordered an empty sandwich.please add some items");
  } else {
    items.forEach((item, i) => {
      console.log(` ${i + 1}. ${item}`);
    });
  }
  console.log("\n");
}
//Call the function of diffrent number of arguments
make_sandwich();
make_sandwich("Turkey", "lattuce", "Tomato", "Mynoyees");
make_sandwich("Hum", "cheaase");
make_sandwich("penut butter", "jelly", "Honey");
