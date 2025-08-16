console.log("Hello");

console.log("this is a testing line");

const fs = require('fs');

fs.writeFile('test.txt',"this is a testing file in js yes", (err)=>{
  if(err){
    console.log("something went wrong");
  }else{
    console.log("file created successfully");
  }
})