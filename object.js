const mySym= Symbol("key");

const JSUser = {
    id: 111,
    name: "abhijit",
    "full name": "Abhijit Shete",
    age: 33,
    location: "Pune",
    email: "abhijit@gmail.com",
    loggedIn: ["monday", "wednesday", "saturday"],
    [mySym]: "myKey"
}

// console.log(JSUser);
// console.log(JSUser.id);
// console.log(JSUser["name"]);
// console.log(JSUser["full name"]);
// console.log(JSUser['email']);
// console.log(JSUser[mySym]);

JSUser.work= function() {
    console.log("JS user");
}

JSUser.job= function(){
    console.log('I am student');
}

// console.log(JSUser.work);
// console.log(JSUser.work());
// console.log(JSUser.job());

// console.log("Keys =",Object.keys(JSUser));
// console.log("Values =",Object.values(JSUser));
// console.log("Entity =",Object.entries(JSUser));

console.log("Is your property = ",JSUser.hasOwnProperty('isVerify'));