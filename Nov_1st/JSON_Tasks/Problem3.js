/*
Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]
Sample Function proto:
var obj = {name: “ISRO”, age: 35, role: “Scientist”};
function convertListToObject(obj) {
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
 
    var obj = {name: "ISRO", age: 35, role: "Scientist"};
    function convertObjectToList(obj1)
    {
        let retArray=[];
        for(let i in obj1)
        {
            retArray.push([i,obj1[i]])
        }
        return retArray;
    }
    
    console.log(convertObjectToList(obj));
       
});