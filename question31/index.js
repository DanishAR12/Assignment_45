//Question:31
/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// for non-empty usernames array.
let userNames = ["admin", "Ali", "Umer", "Zain", "Ahmed", "Ijaz"];
//functional case
function greetUser(userNames) {
    if (userNames.length === 0) {
        console.log("we need to find some user!");
        return;
    }
    for (const userName of userNames) {
        if (userName.toLowerCase() === "admin") {
            console.log("Hello admin would like to see a status report.");
        }
        else {
            console.log(`Hello ${userName},thank you for loggin in again.`);
        }
    }
}
console.log("for non empty usernames array:\n");
greetUser(userNames);
// to make empty array case we just assign usernames empty array
userNames = [];
console.log(`\n\n for empty usernames array\n `);
greetUser(userNames);
export {};
