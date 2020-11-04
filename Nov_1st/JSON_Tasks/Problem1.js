/*
Parsing an JSON object’s Values:
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:
[“RajiniKanth”, 33, false]
Sample Function proto:
var obj = {name : “RajiniKanth”, age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
}
*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
    var obj = {name : 'RajiniKanth', age : 33, hasPets : false};

    function printAllValues(obj1) 
    {
        return Object.values(obj1);
    }
    
    console.log(printAllValues(obj));   
       
});