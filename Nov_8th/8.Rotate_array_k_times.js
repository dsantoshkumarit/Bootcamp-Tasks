/*
Rotate an array by k times and return the rotated array
*/

let arr=[1,2,3,4,5,6];
let k=3;

((arr,k)=>
{
    
    for(let i=1;i<=k;i++)
    {
        let last=arr[0];
        let temparr=[];
        
        for(let j=1;j<arr.length;j++)
        {
            temparr.push(arr[j]);
        }
        temparr.push(last);
        arr=temparr;
    }
    console.log(arr);
})(arr,k);
