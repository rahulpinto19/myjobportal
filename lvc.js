const pi = 3.14;
console.log(pi); // 3.14

pi = 3.15; // Error: Assignment to constant variable

// ---
const person = { name: "John" };
person.name = "Jane"; // This is allowed
console.log(person.name); // "Jane"

person = {}; // Error: Assignment to constant variable

// -----------------------------------------------------

let count = 10;
console.log(count); // 10

count = 20;
console.log(count); // 20

// ----
// let age = 25;
// let age = 30; // Error: Identifier 'age' has already been declared


// -------------------------
var name = "Alice";
console.log(name); // Alice

name = "Bob";
console.log(name); // Bob


// --
var message = "Hello";
var message = "Hi"; // No error, unlike `let` or `const`
console.log(message); // "Hi"

