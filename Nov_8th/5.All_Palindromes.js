/*
Return all the palindromes in an array
*/
let numarr=[1,45,343,445,123321,44,56];

((numarr)=>{
    let temppalindromes=[];
    for(let i in numarr)
    {
        let entry=numarr[i];
        let quo=entry;
        let rem=quo%10;
        let tempsum=0;
        while(quo)
        {
            tempsum=tempsum*10+rem;
            quo=parseInt(quo/10);
            rem=quo%10;
        }
        if(tempsum===entry)
        temppalindromes.push(entry);
    }
   console.log(temppalindromes);
})(numarr);
