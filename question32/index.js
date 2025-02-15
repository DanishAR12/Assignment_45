//Question:32
/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
// step 1 create array
const current_users = ["Ali", "Asad", "Asif", "Umer", "Ijaz", "Hadi"];
const new_users = ["ali", "iJaz", "haDi", "kamran", "danish"];
// step 2 function create
function checkNameUser(current_users, new_users) {
    const lowerCasedCurrent_user = current_users.map(user => user.toLowerCase());
    for (const newUser of new_users) {
        const lowerCasedNewUser = newUser.toLowerCase();
        if (lowerCasedCurrent_user.includes(lowerCasedNewUser)) {
            console.log(`username "${newUser}" is already taken please enter a new username.`);
        }
        else {
            console.log(`username "${newUser}" is available`);
        }
    }
}
;
checkNameUser(current_users, new_users);
export {};
