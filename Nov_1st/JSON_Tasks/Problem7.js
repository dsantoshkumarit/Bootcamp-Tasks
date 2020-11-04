/*
Parsing two JSON objects and Compare:
Read this : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
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
 
    var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName)
{
 // your code here
 let act=JSON.stringify(actual);
 let exp=JSON.stringify(expected);
 //console.log(act,exp,act===exp);
 if(act===exp)
 {
     console.log("PASSED");
 }
 else
 {
     console.log("FAILED [my test] Exptected"+exp+", but got "+act);
 }
} 
       assertObjectsEqual({'foo':5,'bar':6},{'foo':5,'bar':6},'detects that two objects are equal');
       assertObjectsEqual({'foo':5,'bar':6},{'foo':6,'bar':5},'detects that two objects are equal');
});