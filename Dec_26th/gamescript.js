let samplediv=document.createElement('div');
let br=document.createElement('br');
let rowdiv=document.createElement('div');
rowdiv.className='row';
let coldiv=document.createElement('div');
coldiv.className='col';

let h3=document.createElement('h3');

//Container div
let containerdiv=document.getElementsByClassName('container')[0];
containerdiv.className='container';
document.body.append(containerdiv);

let questionsobj={quesno:0,quesarray:[]};

document.body.onload=displayQuestion();


let answersobj={score:0};


function nextquestion()
{
    if(questionsobj.quesno>9)
    {
        alert('Quiz Completed');
        let score=parseInt(document.getElementById('scorecount').innerText);
        sessionStorage.setItem('User'+(sessionStorage.Uid-1),score);
        window.location.replace('end.html');
    }
    else
    {        
        let questhdr=document.getElementById('questionhdr');
        questhdr.innerText='Question '+(questionsobj.quesno+1)+'/10';

        let progressval=document.getElementById('progressval');
        progressval.style.width=(questionsobj.quesno+1)+'0%'

        let question=document.getElementById('question');
        question.innerText=window.atob(questionsobj.quesarray[questionsobj.quesno].question);
        let randomanswer=Math.floor(Math.random() * 4) + 1;
        let correctans=window.atob(questionsobj.quesarray[questionsobj.quesno].correct_answer);
        let wrongansarray=questionsobj.quesarray[questionsobj.quesno].incorrect_answers;
        wrongansarray=wrongansarray.map(ans=>window.atob(ans));

        let btn1=document.getElementById('opt1');
        let btn2=document.getElementById('opt2');
        let btn3=document.getElementById('opt3');
        let btn4=document.getElementById('opt4');
        switch(randomanswer)
        {
        case 1: btn1.innerText=correctans;
                answersobj[questionsobj.quesno+1]={expectedans:1,actualans:0};
                btn2.innerText=wrongansarray[0];
                btn3.innerText=wrongansarray[1];
                btn4.innerText=wrongansarray[2];
                questionsobj.quesno++;
                break;

        case 2: btn1.innerText=wrongansarray[0];
                answersobj[questionsobj.quesno+1]={expectedans:2,actualans:0};
                btn2.innerText=correctans
                btn3.innerText=wrongansarray[1];
                btn4.innerText=wrongansarray[2];
                questionsobj.quesno++;
                break; 

        case 3: btn1.innerText=wrongansarray[0];
                answersobj[questionsobj.quesno+1]={expectedans:3,actualans:0};
                btn2.innerText=wrongansarray[1];
                btn3.innerText=correctans;
                btn4.innerText=wrongansarray[2];
                questionsobj.quesno++;
                break;

        case 4: btn1.innerText=wrongansarray[0];
                answersobj[questionsobj.quesno+1]={expectedans:4,actualans:0};
                btn2.innerText=wrongansarray[1];
                btn3.innerText=wrongansarray[2];
                btn4.innerText=correctans;
                questionsobj.quesno++;
                break;

        default : alert('Invalid option');
                    break;  
        }
    }
    
    // console.log(answersobj);
    // console.log(wrongansarray);
    
}

function captureAns(btn)
{
    answersobj[questionsobj.quesno].actualans=btn.value;
    if(parseInt(answersobj[questionsobj.quesno].actualans)===parseInt(answersobj[questionsobj.quesno].expectedans))
    {
        answersobj.score+=10;
        document.getElementById('scorecount').innerText=answersobj.score;
    }
    else
    {
        alert('Wrong Answer\n'+'Correct Answer is :\nOption '+answersobj[questionsobj.quesno].expectedans+' : '+window.atob(questionsobj.quesarray[questionsobj.quesno-1].correct_answer));
    }
    nextquestion();
}

async function displayQuestion() 
{
    let newuserid=parseInt(sessionStorage.Uid);
    sessionStorage.setItem('User'+newuserid++,0);
    sessionStorage.Uid=newuserid;
    let questions=await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=base64');
    let resultquestions=await questions.json();
    questionsobj.quesarray=resultquestions.results;

    //1st row
    let row1=rowdiv.cloneNode('true');

    let row1col1=coldiv.cloneNode('true');
    row1col1.className='col';

    let r1c1r1=rowdiv.cloneNode('true');
    let r1c1r1c1=coldiv.cloneNode('true');
    r1c1r1c1.className='col-12';
    r1c1r1.append(r1c1r1c1);
    let questioncount=h3.cloneNode('false');
    questioncount.innerHTML='Question 1/10';
    questioncount.className='float-left';
    questioncount.id='questionhdr';
    r1c1r1c1.append(questioncount);

    let r1c1r2=rowdiv.cloneNode('true');
    let r1c1r2c1=coldiv.cloneNode('true');
    r1c1r2c1.className='col-12';
    r1c1r2.append(r1c1r2c1);

    let progresscontainer=samplediv.cloneNode('false');
    progresscontainer.className='progress';
    progresscontainer.style.height='1.8vw';
    let progressbar=samplediv.cloneNode('false');
    progressbar.className='progress-bar';
    progressbar.role='progressbar';
    progressbar.style.width='10%';
    progressbar.id='progressval';
    progresscontainer.append(progressbar);
    r1c1r2c1.append(progresscontainer);

    row1col1.append(r1c1r1,r1c1r2);

    let row1col2=coldiv.cloneNode('true');
    row1col2.className='col';
    
    let row1col3=coldiv.cloneNode('true');
    row1col3.className='col';

    let r1c3r1=rowdiv.cloneNode('true');
    let r1c3r1c1=coldiv.cloneNode('true');
    r1c3r1c1.className='col-12';
    r1c3r1.append(r1c3r1c1);
    row1col3.append(r1c3r1);

    let scoretext=h3.cloneNode('false');
    scoretext.innerHTML='Score';
    scoretext.className='float-right';
    r1c3r1c1.append(scoretext);
    
    let r1c3r2=rowdiv.cloneNode('true');
    let r1c3r2c1=coldiv.cloneNode('true');
    r1c3r2c1.className='col-4';
    r1c3r2.append(r1c3r2c1);

    let r1c3r2c2=coldiv.cloneNode('true');
    r1c3r2c2.className='col-4';
    r1c3r2.append(r1c3r2c2);

    let r1c3r2c3=coldiv.cloneNode('true');
    r1c3r2c3.className='col-4';
    r1c3r2.append(r1c3r2c3);

    row1col3.append(r1c3r2);


    let scorecount=h3.cloneNode('false');
    scorecount.innerHTML='0';
    scorecount.className='text-center text-primary';
    scorecount.id='scorecount';
    r1c3r2c3.append(scorecount);

    row1.append(row1col1,row1col2,row1col3);
    
    containerdiv.append(row1);

    //2nd row
    let row2=rowdiv.cloneNode('true');

    let row2col1=coldiv.cloneNode('true');
    row2col1.className='col';
    let question=h3.cloneNode('false');
    question.id='question';
    question.innerHTML='hello';
    row2col1.append(question);
    row2.append(row2col1);

    //3rd row
    let row3=rowdiv.cloneNode('true');
    let row3col1=coldiv.cloneNode('true');
    row3col1.className='col';
    row3.append(row3col1);
    let inptgrp1=document.createElement('div');
    inptgrp1.className='input-group';
    let inptgrpprpnd1=document.createElement('div');
    inptgrpprpnd1.className='input-group-prepend';
    let span1=document.createElement('span');
    span1.className='input-group-text bg-primary text-light';
    span1.innerText='A';
    inptgrpprpnd1.append(span1);
    let btn1=document.createElement('button');
    btn1.type="button";
    btn1.className='btn btn-outline-dark form-control';
    btn1.innerText='Button A';
    btn1.id='opt1';
    btn1.value=1;
    btn1.setAttribute('onclick', 'captureAns(this)');
    inptgrp1.append(inptgrpprpnd1,btn1);
    row3col1.append(inptgrp1);

    //4th row
    let row4=rowdiv.cloneNode('true');
    let row4col1=coldiv.cloneNode('true');
    row4col1.className='col';
    row4.append(row4col1);
    let inptgrp2=document.createElement('div');
    inptgrp2.className='input-group';
    let inptgrpprpnd2=document.createElement('div');
    inptgrpprpnd2.className='input-group-prepend';
    let span2=document.createElement('span');
    span2.className='input-group-text bg-primary text-light';
    span2.innerText='B';
    inptgrpprpnd2.append(span2);
    let btn2=document.createElement('button');
    btn2.innerText='Button B';
    btn2.type="button";
    btn2.className='btn btn-outline-dark form-control';
    btn2.id='opt2'
    btn2.value=2;
    btn2.setAttribute('onclick', 'captureAns(this)');
    inptgrp2.append(inptgrpprpnd2,btn2);
    row4col1.append(inptgrp2);

    //5th row
    let row5=rowdiv.cloneNode('true');
    let row5col1=coldiv.cloneNode('true');
    row5col1.className='col';
    row5.append(row5col1);
    let inptgrp3=document.createElement('div');
    inptgrp3.className='input-group';
    let inptgrpprpnd3=document.createElement('div');
    inptgrpprpnd3.className='input-group-prepend';
    let span3=document.createElement('span');
    span3.className='input-group-text bg-primary text-light';
    span3.innerText='C';
    inptgrpprpnd3.append(span3);
    let btn3=document.createElement('button');
    btn3.innerText='Button C';
    btn3.type="button";
    btn3.className='btn btn-outline-dark form-control';
    btn3.id='opt3'
    btn3.value=3;
    btn3.setAttribute('onclick', 'captureAns(this)');
    inptgrp3.append(inptgrpprpnd3,btn3);
    row5col1.append(inptgrp3);

    //6th row
    let row6=rowdiv.cloneNode('true');
    let row6col1=coldiv.cloneNode('true');
    row6col1.className='col';
    row6.append(row6col1);
    let inptgrp4=document.createElement('div');
    inptgrp4.className='input-group';
    let inptgrpprpnd4=document.createElement('div');
    inptgrpprpnd4.className='input-group-prepend';
    let span4=document.createElement('span');
    span4.className='input-group-text bg-primary text-light';
    span4.innerText='D';
    inptgrpprpnd4.append(span4);
    let btn4=document.createElement('button');
    btn4.innerText='Button D';
    btn4.type="button";
    btn4.className='btn btn-outline-dark form-control';
    btn4.id='opt4';
    btn4.value=4;
    btn4.setAttribute('onclick', 'captureAns(this)');
    inptgrp4.append(inptgrpprpnd4,btn4);
    row6col1.append(inptgrp4);

    containerdiv.append(br.cloneNode('true'),row2,br.cloneNode('true'),row3,br.cloneNode('true'),row4,br.cloneNode('true'),row5,br.cloneNode('true'),row6);

    nextquestion();
}