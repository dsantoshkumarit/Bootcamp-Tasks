let samplediv=document.createElement('div');
let br=document.createElement('br');
let rowdiv=document.createElement('div');
rowdiv.className='row';
let coldiv=document.createElement('div');
coldiv.className='col-12 text-center';

let h3=document.createElement('h3');

//Container div
let containerdiv=document.createElement('div');
containerdiv.className='container';
containerdiv.append(br.cloneNode('true'),br.cloneNode('true'));
document.body.append(containerdiv);

let totalScore=sessionStorage.getItem('User'+(sessionStorage.Uid-1));

//Total score
let row1=rowdiv.cloneNode('true');
let r1col1=coldiv.cloneNode('true');
let h2=document.createElement('h2');
h2.className='text-primary text-center';
h2.innerText='You Scored : '+totalScore+' points';
r1col1.append(h2);
row1.append(r1col1);
containerdiv.append(row1,br.cloneNode('true'));



//Input text field
let row2=rowdiv.cloneNode('true');
let r2col1=coldiv.cloneNode('true');
let username=document.createElement('input');
username.type='text';
username.className='form-control';
username.id='username';
username.placeholder='username';
username.setAttribute('onkeyup','setSaveBtnState(this)');
r2col1.append(username);
row2.append(r2col1);
containerdiv.append(row2,br.cloneNode('true'));



//Disable and enable save btn function
function setSaveBtnState(inptval) 
{    
    let btn=document.getElementById('saveScoreBtn');
    if(inptval.value ==='')
    {       
        btn.disabled=true;
    }
    else
    {
        btn.disabled=false;
    }
}


//Storing all the scores in local sessionStorage
function storeScore()
{
    let username=document.getElementById("username");    
    localStorage.setItem(username.value,totalScore);    
    alert('Saved Successfully');
    username.value='';
    document.getElementById("saveScoreBtn").disabled=true;
    username.disabled=true;
}


//Save button
let row3=rowdiv.cloneNode('true');
let r3col1=coldiv.cloneNode('true');
let savebtn=document.createElement('button');
savebtn.type='button';
savebtn.className='btn btn-primary';
savebtn.setAttribute('onclick','storeScore()');
savebtn.innerText='Save';
savebtn.disabled=true;
savebtn.id='saveScoreBtn'
r3col1.append(savebtn);
row3.append(r3col1);
containerdiv.append(row3,br.cloneNode('true'));


//Play Again Quiz redirect
function playAgainQuiz() 
{
    window.location.replace('game.html');
}


//Play Again button
let row4=rowdiv.cloneNode('true');
let r4col1=coldiv.cloneNode('true');
let playAgainBtn=document.createElement('button');
playAgainBtn.setAttribute('onclick','playAgainQuiz()');
playAgainBtn.innerText='Play Again';
playAgainBtn.className='btn btn-success';
playAgainBtn.id='playAgain';
r4col1.append(playAgainBtn);
row4.append(r4col1);
containerdiv.append(row4,br.cloneNode('true'));


//Go Home Function
function goHome()
{
    window.location.replace('index.html');
}

//Go Home Button
let row5=rowdiv.cloneNode('true');
let r5col1=coldiv.cloneNode('true');
let goHomebtn=document.createElement('button');
goHomebtn.setAttribute('onclick','goHome()');
goHomebtn.innerText='Go Home';
goHomebtn.className='btn btn-danger';
goHomebtn.id='goHome';
r5col1.append(goHomebtn);
row5.append(r5col1);
containerdiv.append(row5,br.cloneNode('true'));