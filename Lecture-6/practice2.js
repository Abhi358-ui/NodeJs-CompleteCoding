
console.log("1. start of script")

// Microtask queue (promise)
Promise.resolve().then(()=> console.log('2. Microtask 2'))

// timer queue
setTimeout(() => {
  console.log('3. timer 1')
}, 0);

// I/O queue
const fs = require('fs');
fs.readFile('notes.md',()=> console.log("4. I/O operation 1"));

// check queue
setImmediate(()=> console.log("5. immidiate 1"))

// close queue
process.on('exit',(code)=>{
  console.log("6. exit event")
})

console.log('7. end of script')
