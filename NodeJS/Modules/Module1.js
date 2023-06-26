
/*
Modules can be made
var
function
JSON
Class
 */

let sname = 'Mayur';

let greet = () => {
    console.log("Hello Node");
};

let person = {
    "pname": "Minal",
    "age": 22
};

class User {
    display() {
        console.log("Hello user");
    }
}

module.exports = {
    person,
    User
};
