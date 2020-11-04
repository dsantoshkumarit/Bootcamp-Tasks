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
 
 var securityQuestions = [
        {
        question: "What was your first pet’s name?",
        expectedAnswer: "FlufferNutter"
        },
        {
        question: "What was the model year of your first car?",
        expectedAnswer: "1985"
        },
        {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
        }
       ];
       
       function chksecurityQuestions(securityQuestions,question,ans) 
       {
           let questansobj={};
           questansobj["question"]=question;
           questansobj["expectedAnswer"]=ans;
           let questansstr=JSON.stringify(questansobj);
           //console.log(questansstr);
           let flag=false;
           for(let i in securityQuestions)
           {
              // console.log(JSON.stringify(securityQuestions[i]))
               if(questansstr===JSON.stringify(securityQuestions[i]))
               {
                   flag=true;
               }
           }
           return flag;
       }
       
        var ques = "What was your first pet’s name?";
        var ans  =  "FlufferNutter";
        var status = chksecurityQuestions(securityQuestions, ques, ans);
        console.log(status);
        
        var ques = "What was your first pet’s name?";
        var ans  =  "DufferNutter";
        var status = chksecurityQuestions(securityQuestions, ques, ans);
        console.log(status); 
 
});