//Question;3
/*
 Name Cases: Store a person’s name in a variable, and
 then print that person’s name in lowercase, uppercase, and titlecase.
*/
let personName = "Danish";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.charAt(0).toLocaleUpperCase() +
    personName.slice(1).toLocaleLowerCase());
export {};
