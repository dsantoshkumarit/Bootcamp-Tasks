let samplediv=document.createElement('div');
let br=document.createElement('br');
let rowdiv=document.createElement('div');
rowdiv.className='row';
let coldiv=document.createElement('div');
coldiv.className='col-12 text-center';

let th=document.createElement('th');
let tr=document.createElement('tr');
let td=document.createElement('td');

let h3=document.createElement('h3');

//Container div
let containerdiv=document.createElement('div');
containerdiv.className='container';
containerdiv.append(br.cloneNode('true'));
document.body.append(containerdiv);

//Score heading
let row1=rowdiv.cloneNode('true');
let r1col1=coldiv.cloneNode('true');
let h2=document.createElement('h2');
h2.className='text-center text-primary';
h2.innerText='High Scores';
r1col1.append(h2);
row1.append(r1col1);
containerdiv.append(row1);

//Table for Scores
let row2=rowdiv.cloneNode('true');
row2.id='table-row';
let r2col1=coldiv.cloneNode('true');
row2.append(r2col1);
containerdiv.append(row2);

//Table tag
let table=document.createElement('table');
table.className='table table-sm table-bordered';
table.id='scoretable';
r2col1.append(table);

//Head of table
let thead=document.createElement('thead');
let th1=document.createElement('th');
th1.innerText='#';
th1.scope='col';
th1.className='text-center text-light';
let th2=document.createElement('th');
th2.innerText='Name';
th2.scope='col';
th2.className='text-center text-light';
let th3=document.createElement('th');
th3.innerText='Score';
th3.scope='col';
th3.className='text-center text-light';
let theadtr1=document.createElement('tr');
theadtr1.className='bg-primary';
theadtr1.append(th1,th2,th3);
thead.append(theadtr1);
table.append(thead);

//body tags of table
let tbody = document.createElement('tbody');

//Remove dupes function
function removeDupes(arr) 
{
    let newarr=[];
    arr.forEach(a=>{
        if(!newarr.includes(a))
        {
            newarr.push(a);
        }
    });
    return newarr;
}

//Filling data in table
if(localStorage.length)
{
    let objkeys=Object.keys(localStorage);
    let objvalues=Object.values(localStorage);
    objvalues=objvalues.map(Number);
    objvalues.sort((a,b)=>b-a);
    objvalues=removeDupes(objvalues);
    let i=1;
    objvalues.forEach((val)=>
    {
        objkeys.forEach((key)=>
        {
            if(localStorage[key]==val)
            {                
                let tr1=tr.cloneNode('true');
                let th1=th.cloneNode('true');
                th1.scope='row';
                th1.className='text-center';
                let td2=td.cloneNode('true');
                td2.className='text-center';
                let td3=td.cloneNode('true');
                td3.className='text-center';
                th1.innerText=i++;
                td2.innerText=key;
                td3.innerText=val;
                tr1.append(th1,td2,td3);
                tbody.append(tr1);
            }
        });
    });
    table.append(tbody);       
}
else
{
    let scoretable=document.getElementById('scoretable');
    scoretable.style.display='none';
    let h1=document.createElement('h1');
    h1.className='text-warning';
    h1.innerText='No data to display';
    r2col1.append(br.cloneNode('true'),h1);
}


//Go Home Function
function goHome()
{
    window.location.replace('index.html');
}

//Go Home button
let row3=rowdiv.cloneNode('true');
let r3col1=coldiv.cloneNode('true');
row3.append(r3col1);
containerdiv.append(row3);
let goHomebtn=document.createElement('button');
goHomebtn.setAttribute('onclick','goHome()');
goHomebtn.innerText='Go Home';
goHomebtn.className='btn btn-danger';
goHomebtn.id='goHome';
r3col1.append(goHomebtn,br.cloneNode('true'),br.cloneNode('true'));