/*
Sum of all numbers in an array 
*/

let numarray=[10,20,30,40,50,60];
let sum=numarray.reduce((total,item)=>{return total+item},0)
console.log(sum);

((numarray)=>{
    let total=0;
    for(let i in numarray)
    {
        total+=numarray[i];
    }
    console.log(total);
})(numarray);