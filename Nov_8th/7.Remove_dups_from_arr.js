/*
Remove duplicates from an array
*/ 

let arr=[2,3,4,5,3,5,2,6,7,4,1];

let freqobj={};

((arr,freqobj)=>{
    let temparr=[];
    for(let i in arr)
    {
        //console.log(arr[i],freqobj);
        if(!freqobj[arr[i]])
        {
            freqobj[arr[i]]=1;
            temparr.push(arr[i]);
        }
    }
    console.log(temparr);
})(arr,freqobj);

