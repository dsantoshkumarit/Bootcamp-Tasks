/*
Parsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]
Sample Function proto:
var arr= [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 //Your code
 
 return tranformEmployeeList;
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
 
    var arr= [
                [
                    ["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]
                ],
                [
                    ["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]
                ]
            ];
     
function transformEmployeeData(arr) 
{
 var transformEmployeeList = [];
 let temporaryObject={};
 for(let i in arr)
 {
     let temporaryObject={};
     temporaryObject[arr[i][0][0]]=arr[i][0][1];
     temporaryObject[arr[i][1][0]]=arr[i][1][0];
     temporaryObject[arr[i][2][0]]=arr[i][2][1];
     temporaryObject[arr[i][3][0]]= arr[i][3][1];
     transformEmployeeList.push(temporaryObject);
         //console.log(arr[i][0][1]);
 }
 
 return transformEmployeeList;
}
//transformEmployeeData(arr);
  console.log(transformEmployeeData(arr));
    
});