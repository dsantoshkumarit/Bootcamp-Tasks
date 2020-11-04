/*
Problem 0 : Part A (15 mins):
Playing with JSON object’s Values:
Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
Write a code to get the below details of Fluffyy so that
I can take him to vet.

var cat = {
 name: ‘Fluffy’,
 activities: [‘play’, ‘eat cat food’],
 catFriends: [
 {
 name: ‘bar’,
 activities: [‘be grumpy’, ‘eat bread omblet’],
 weight: 8,
 furcolor: ‘white’
 }, 
 {
 name: ‘foo’,
 activities: [‘sleep’, ‘pre-sleep naps’],
 weight: 3
 }
 ]
}
console.log(cat);
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
 
 
 
    let cat = {
        name : 'Fluffy',
        activities : ['play', 'eat cat food'],
        catFriends : [
        {
        name : 'bar',
        activities : ['be grumpy', 'eat bread omblet'],
        weight : 8,
        furcolor : 'white'
        }, 
        {
        name : 'foo',
        activities : ['sleep', 'pre-sleep naps'],
        weight : 3
        }
        ]
       };
    
       //1.Add height and weight to Fluffy
       cat['height']=3;
       cat['weight']=4;
       
       //2.Fluffy name is spelled wrongly. Update it to Fluffyy
       cat.name='Fluffyy';
       
       //3.List all the activities of Fluffyy’s catFriends.
       console.log(cat.catFriends[0].name+":"+cat.catFriends[0].activities.join(' , '));
       console.log(cat.catFriends[1].name+":"+cat.catFriends[1].activities.join(' , '));
       
       //4.Print the catFriends names.
       console.log('Fluffyy\'s Cat Friends:'+cat.catFriends[0].name+","+cat.catFriends[1].name);
       
       //5.Print the total weight of catFriends
       console.log('Cat Friends total weight:'+(cat.catFriends[0].weight+cat.catFriends[1].weight));
       
       //6.Print the total activities of all cats (op:6)
       console.log('All cats activities:'+(cat.activities.length+cat.catFriends[0].activities.length+cat.catFriends[1].activities.length));
       
       //7.Add 2 more activities to bar & foo cats
       cat.catFriends[0].activities.push('Eat canned tuna','sleep');
       cat.catFriends[1].activities.push('Play with wool ball','Hide in the box');
       
       //8.Update the fur color of bar
       cat.catFriends[0].furcolor='Grey';
       
       console.log(cat);
       
});