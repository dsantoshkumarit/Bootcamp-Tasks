/*
Parsing JSON objects and Compare:
Write a function to return the list of characters below 20 age
var students = [
 {
 name: “Siddharth Abhimanyu”, age: 21}, { name: “Malar”, age: 25},
 {name: “Maari”,age: 18},{name: “Bhallala Deva”,age: 17},
 {name: “Baahubali”,age: 16},{name: “AAK chandran”,age: 23},   {name:“Gabbar Singh”,age: 33},{name: “Mogambo”,age: 53},
 {name: “Munnabhai”,age: 40},{name: “Sher Khan”,age: 20},
 {name: “Chulbul Pandey”,age: 19},{name: “Anthony”,age: 28},
 {name: “Devdas”,age: 56} 
 ];
function returnMinors(arr)
{
}
console.log(returnMinors(students));
*/

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 
    var students = [
        {
        name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
        {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
        {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
        {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
        {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
        {name: "Devdas",age: 56} 
        ];
       function returnMinors(arr)
       {
           let nameList=[];
           for(let i in arr)
           {
               if(arr[i].age<20)
               {
                   nameList.push(arr[i].name);

               }
           }
           return nameList;
       }
       console.log(returnMinors(students));
});