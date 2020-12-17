

//operator precedence
function precedence(inpchar) 
{
    if(inpchar==='*' || inpchar==='/' || inpchar=='%')
    {
        return 2;
    }
    else if(inpchar==='+' || inpchar==='-')
    {
        return 1;
    }
    return 0;
}

//function to return top char
function topval(arr)
{
    return arr[arr.length-1];
}

//function to check empty array
function isEmpty(arr)
{
    if(arr.length)
    return 0;
    return 1;

}

//apply operation with 2 params and 1 operator 
function performoper(val1,val2,oper)
{
    console.log('inperformoper',val1,val2,oper);
    switch(oper)
    {
        case '+': return val1+val2;
        case '-': return val1-val2;
        case '*': return val1*val2;
        case '/': return val1/val2;
        case '%': return val1%val2;
    }
}

//Onclick evalexpr button
let  eqbtn=document.getElementById('eval');
eqbtn.addEventListener('click',function evalexpr(){

    let inpstr=document.getElementById('inpt').value;
    
    let operarr=[];
    let valarr=[];
    for(i=0; i<inpstr.length;i++)
    {        
        
        if(Number.isInteger(parseInt(inpstr[i])))
        {   
            let tempval=0;            
            while(i<inpstr.length && Number.isInteger(parseInt(inpstr[i])))
            {
                tempval=tempval*10+parseInt(inpstr[i]);
                i++;
            }
            valarr.push(tempval);
            //console.log('ifvalarr:',valarr);//
            i--;
        }
        else
        {
            while(!isEmpty(operarr) && (precedence(topval(operarr))>=precedence(inpstr[i])))
            {
                let val1=valarr.pop();
                let val2=valarr.pop();
                let oper=operarr.pop();
                //console.log('elsewhile',val1,val2,oper);
                valarr.push(performoper(val2,val1,oper));
                //console.log('elsevalarr',valarr);//
            }
            operarr.push(inpstr[i]);
            //console.log('elseoperarr',operarr);//
        }                
    }    
    console.log('outfor',operarr,valarr)
    while(!isEmpty(operarr))
    {
        let val1=valarr.pop();
        let val2=valarr.pop();
        let oper=operarr.pop();
        valarr.push(performoper(val2,val1,oper));
       // console.log('outvalarr',valarr);//
    }
    console.log(topval(valarr));
    document.getElementById('inpt').value=topval(valarr);
});

//handling keyup of textarea
function checkkeypress(event) 
{
    //console.log(String.fromCharCode(event.charCode),event.keyCode);
    
    let inptval=document.getElementById('inpt');
    let inptcharcode=event.keyCode;
    //charcodes of      [0, 1, 2, 3,  4,  5,  6,  7,  8,  9,  +,  -,  *,  /, %,  .]
    let allowedchararr=[96,97,98,99,100,101,102,103,104,105,107,109,106,111,37,110,190,16];
    if(!allowedchararr.includes(inptcharcode))
    {        
        //console.log(inptval.value);
        alert('Invalid key pressed');
        inptval.value=inptval.value.slice(0,-1);  
        //console.log(inptval.value);      
    }

}


let result=0;
let opercase=0;
//onclick numbers and operatiors
function numoper(btn) 
{
    document.getElementById('inpt').value+=btn.value;
}

//on AC click
document.getElementById('allclear').addEventListener('click',function()
{
    document.getElementById('inpt').value='';    
    result=0;
    opercase=0;

});

//onclick for add button
function add()
{
    //console.log(result);
    result=parseInt(document.getElementById('inpt').value);
    opercase=1;
    document.getElementById('inpt').value='';
    //console.log(result);
}

//onclick for substract button
function minus()
{
   // console.log(result);
    result=parseInt(document.getElementById('inpt').value);
    opercase=2;
    document.getElementById('inpt').value='';
    //console.log(result);
}

//onclick for multiply button
function product()
{
    //console.log(result);
    result=parseInt(document.getElementById('inpt').value);
    opercase=3;
    document.getElementById('inpt').value='';
    //console.log(result);
    
}

//onclick for division button
function division()
{
    //console.log(result);
    result=parseInt(document.getElementById('inpt').value);
    opercase=4;
    document.getElementById('inpt').value='';
    //console.log(result);
}

//onclick for modulus button
function mod()
{
    //console.log(result);
    result=parseInt(document.getElementById('inpt').value);
    opercase=5;
    document.getElementById('inpt').value='';
    //console.log(result);
}

//onclick of equalto button
function equate()
{
    // console.log(result);
    let inpt=document.getElementById('inpt');
    let inptval=parseInt(inpt.value);

    switch(opercase)
    {
        case 1: result+=inptval;
                inpt.value=result;                
                opercase=0;  
                // console.log(result);              
                break;

        case 2: result-=inptval;
                inpt.value=result;
                opercase=0;
                // console.log(result);
                break;

        case 3: result*=inptval;
                inpt.value=result;
                opercase=0;
                // console.log(result);
                break; 
                 
        case 4: result/=inptval;
                inpt.value=result;
                opercase=0;
               // console.log(result);
                break;

        case 5: result%=inptval;
                inpt.value=result;
                opercase=0;
               // console.log(result);
                break; 

        default:    alert('Invalid Operation');             
    }
}


//initializing mem in local storage for M+, M-, MC operations
localStorage.setItem('mem',0);

//Mem Clear button click
function memclear() 
{
    localStorage.setItem('mem',0);
    document.getElementById('inpt').value='';
}

//M+ button click
function memadd() 
{
    
    let inpval=document.getElementById('inpt').value;    
    inpval=parseInt(inpval);
    if(Number.isInteger(inpval))
    {
        let currmemval=parseInt(localStorage.getItem('mem'));
        localStorage.setItem('mem',inpval+currmemval);
        document.getElementById('inpt').value='';
    }
    
}

//M- button click
function memminus()
{
    document.getElementById('inpt').value=localStorage.getItem('mem');
}

