/*
 Return median of two sorted arrays of same size
*/

let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8,9];
let arrsize=5;

((arr1,arr2,arrsize)=>{
    let totalarray=[];
    let i=0;
    let j=0;
    for(let k=0;k<2*arrsize;k++)
    {
        if(i===arrsize)
        {
            totalarray.push(...arr2.slice(j));
            break;
        }
        else if(j===arrsize)
        {
                totalarray.push(...arr1.slice(i));
                break;
        }
        if(arr1[i]<arr2[j])
        {
            totalarray.push(arr1[i]);
            i++;
        }
        else if(arr1[i]>arr2[j])
        {
            totalarray.push(arr2[j]);
            j++;
        }
        else
        {
            totalarray.push(arr1[i],arr2[j]);
            i++;
            j++;
        }
    }
    console.log((totalarray[arrsize-1]+totalarray[arrsize])/2);
    
})(arr1,arr2,arrsize);


