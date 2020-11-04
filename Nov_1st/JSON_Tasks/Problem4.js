/*
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}
Sample Function proto:
var arr = [“GUVI”, “I”, “am”, “a geek”];
function transformFirstAndLast(arr) {
 
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
 
    var arr = ["GUVI", "I", "am", "a geek"];
    function transformFirstAndLast(arr1) 
    {
     let newObject={};
     newObject[arr1[0]]=arr1[arr1.length-1];
     return newObject;
    }
    console.log(transformFirstAndLast(arr));
});