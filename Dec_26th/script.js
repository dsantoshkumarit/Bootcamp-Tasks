//sample nodes to clone as needed in the below code
let samplediv=document.createElement('div');
let h1=document.createElement('h1');
let br=document.createElement('br');
let linkbtn=document.createElement('a');
linkbtn.style.fontSize='2vmax';

let rowdiv=document.createElement('div');
rowdiv.className='row';

let coldiv=document.createElement('div');
coldiv.className='col-12 text-center';

//Container div
let containerdiv=samplediv.cloneNode('false');
containerdiv.className='container';
containerdiv.style.width="50%";
document.body.append(containerdiv);


if(sessionStorage.Uid)
{
    sessionStorage.Uid=parseInt(sessionStorage.Uid)+1;
}
else
{
    sessionStorage.Uid=0;
}

let row1=rowdiv.cloneNode('false');
row1.id='pg-row';
let col1=coldiv.cloneNode('false');
col1.className='col-12 text-center';
col1.id='pg-col';
row1.append(col1);
containerdiv.append(br.cloneNode('false'),br.cloneNode('false'),br.cloneNode('false'),br.cloneNode('false'),br.cloneNode('false'));
containerdiv.append(row1);


//............home page................//
let brcol=coldiv.cloneNode('false');
brcol.append(br.cloneNode('false'));
let rowpg1=rowdiv.cloneNode('false');
col1.append(rowpg1);
let col1pg1=coldiv.cloneNode('false');
let col2pg1=coldiv.cloneNode('false');
let col3pg1=coldiv.cloneNode('false');
rowpg1.append(col1pg1,brcol.cloneNode('false'),col2pg1,brcol.cloneNode('false'),col3pg1);

let hdrpg1=h1.cloneNode('false');
h1.innerText='Quick Quiz';
col1pg1.append(h1);
h1.className='text-primary';

let playbtn=linkbtn.cloneNode('true');
playbtn.className='btn btn-primary btn-sm btn-block';
playbtn.type='button';
playbtn.innerText='Play';
playbtn.href='game.html';
col2pg1.append(playbtn);

let highscorebtn=linkbtn.cloneNode('true');
highscorebtn.className='btn btn-primary btn-sm btn-block';
highscorebtn.type='button';
highscorebtn.innerText='High Scores';
highscorebtn.href='highscores.html'
col3pg1.append(highscorebtn);
