/*
Print odd numbers in an array 
*/
let arr=[1,2,3,4,5,6,7,8,9,10]

console.log(arr.filter(elem=>elem%2!==0));

((arr)=>{
    let temparr=[];
    for(let i in arr)
    {
        if(arr[i]%2!==0)
        {
            temparr.push(arr[i]);
        }
    }
    console.log(temparr);
})(arr);
