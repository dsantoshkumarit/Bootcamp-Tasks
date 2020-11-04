/*
Problem 2(5 mins) :
Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]
Sample Function proto:
function printAllKeys(obj) {
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
 
    var obj = {name : 'RajiniKanth', age : 25, hasPets : true}

    function printAllKeys(obj1) 
    {
        return Object.keys(obj1);
    }
    
    console.log(printAllKeys(obj));   
       
});