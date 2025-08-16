const fs = require("fs");

console.log("1. start of scripting");

// synchronous blocking code
console.log("2. reading file synchronously");
let result = fs.readFileSync("notes.md", "utf8");
console.log("3. synchronous read complete");

// Asynchronous non blocking code

console.log("4. read file Asynchronous start");
fs.readFile("notes.md", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("5. reading file Asynchronous successfully");
});

console.log("6. end of script");
