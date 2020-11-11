/*
Return all the prime numbers in an array 
*/

let numarr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let primes=numarr.filter((item)=>{
    if(item===1)
    {
        return false;
    }
    else
    {
        for(let i=2;i<=Math.sqrt(item);i++)
        {
            if(item%i===0)
            {
                return false;
            }
        }
    }
    return true;
});
console.log(primes);

((numarr)=>{
    let primes=[];

    for(let i in numarr)
    {
        if(numarr[i]==1)
        continue;
        else
        {
            let notprimeflag=false;
            for(let j=2;j<=Math.sqrt(numarr[i]);j++)
            {
                if(numarr[i]%j===0)
                {
                    notprimeflag=true;
                    break;
                }
            }
            if(!notprimeflag)
            {
                primes.push(numarr[i]);
            }
        }
    }
    console.log(primes);
})(numarr);