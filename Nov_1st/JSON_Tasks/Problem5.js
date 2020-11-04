/*
Parsing a list of lists and convert into a JSON object:
Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}
Sample Function proto:
var arr = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
function fromListToObject(arr) {
 var newObject = {};
 
 return newObject;
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
 
    var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i in arr)
 {
     newObject[arr[i][0]]=arr[i][1];
 }
 return newObject;
}
console.log(fromListToObject(arr));
    
});