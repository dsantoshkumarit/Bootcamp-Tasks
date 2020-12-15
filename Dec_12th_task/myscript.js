let outerdiv=document.getElementById('div1');



//hdr div
let spantxtdiv=document.createElement('div');
spantxtdiv.classList.add('spantxt');
spantxtdiv.innerText='BRIAN DUDEY';
let hdr2div=document.createElement('div');
hdr2div.classList.add('hdr2');
let hdr1div=document.createElement('div');
hdr1div.classList.add('hdr1');
let img=document.createElement('img');
img.classList.add('roundimg');
img.src='brian_dudey.jpg';
let hdra=document.createElement('div');
hdra.classList.add('hdra');
let br=document.createElement('br');
let hdr=document.createElement('div');
hdr.classList.add('hdr');

hdr2div.append(spantxtdiv);
hdr1div.append(hdr2div);
hdra.append(img,hdr1div);
hdr.appendChild(br.cloneNode(true));
hdr.appendChild(br.cloneNode(true));
hdr.appendChild(br.cloneNode(true));
hdr.append(hdra);
hdr.appendChild(br.cloneNode(true));
outerdiv.append(hdr);
outerdiv.appendChild(br.cloneNode(true));

let addr=document.createElement('div');
addr.classList.add('addr');
addr.innerText='N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com';
let hr=document.createElement('div');
hr.classList.add('hr');
outerdiv.append(addr,hr);
outerdiv.appendChild(br.cloneNode(true));

let contentdiv=document.createElement('div');
contentdiv.classList.add('content');
outerdiv.append(contentdiv);
let divinner1=document.createElement('div');

contentdiv.append(divinner1);

let profileimgdiv=document.createElement('div');
let profileimg=document.createElement('img');
profileimg.classList.add('roundsmallimg');
profileimg.src='profile.png'
let spansubheading=document.createElement('span');
spansubheading.classList.add('subheading');
spansubheading.innerText='Profile';

profileimgdiv.append(profileimg,spansubheading);
profileimgdiv.appendChild(br.cloneNode(true));

let paradiv=document.createElement('div');
paradiv.classList.add('paradiv','paratxt');
paradiv.innerText='Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a Web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.';

divinner1.append(profileimgdiv);
divinner1.appendChild(br.cloneNode(true));
divinner1.append(paradiv);
divinner1.appendChild(br.cloneNode(true));

let skillsimg=document.createElement('img');
skillsimg.src='skills.png';
skillsimg.className='roundsmallimg';
let skillsspan=document.createElement('span');
skillsspan.className='subheading';
skillsspan.innerText='Skills'
let skillsdiv=document.createElement('div');
skillsdiv.append(skillsimg,skillsspan);

divinner1.append(skillsdiv);
divinner1.appendChild(br.cloneNode(true));

//techskills
let subhddiv=document.createElement('div');
subhddiv.className='subheading1';
subhddiv.innerText='Technical Skills'

divinner1.append(subhddiv);
divinner1.appendChild(br.cloneNode(true));

let techskillsdiv=document.createElement('div');

divinner1.append(techskillsdiv);

let jscontentdiv=document.createElement('div');
jscontentdiv.className='content1';
let jsparadiv=document.createElement('div');
jsparadiv.className='paratxt1';
jsparadiv.style.display='inline';
jsparadiv.innerText='JavaScript';
let jslvlcontainer=document.createElement('div');
jslvlcontainer.className='container';
let jslvldiv=document.createElement('div');
jslvldiv.className='eighty';
jslvlcontainer.append(jslvldiv);
jscontentdiv.append(jsparadiv,jslvlcontainer);
techskillsdiv.append(jscontentdiv);

let csscontentdiv=document.createElement('div');
csscontentdiv.className='content1';
let cssparadiv=document.createElement('div');
cssparadiv.className='paratxt1';
cssparadiv.style.display='inline';
cssparadiv.innerText='CSS';
let csslvlcontainer=document.createElement('div');
csslvlcontainer.className='container';
let csslvldiv=document.createElement('div');
csslvldiv.className='eighty';
csslvlcontainer.append(csslvldiv);
csscontentdiv.append(cssparadiv,csslvlcontainer);
techskillsdiv.append(csscontentdiv);

let htmlcontentdiv=document.createElement('div');
htmlcontentdiv.className='content1';
let htmlparadiv=document.createElement('div');
htmlparadiv.className='paratxt1';
htmlparadiv.style.display='inline';
htmlparadiv.innerText='HTML';
let htmllvlcontainer=document.createElement('div');
htmllvlcontainer.className='container';
let htmllvldiv=document.createElement('div');
htmllvldiv.className='fifty';
htmllvlcontainer.append(htmllvldiv);
htmlcontentdiv.append(htmlparadiv,htmllvlcontainer);
techskillsdiv.append(htmlcontentdiv);

let reactcontentdiv=document.createElement('div');
reactcontentdiv.className='content1';
let reactparadiv=document.createElement('div');
reactparadiv.className='paratxt1';
reactparadiv.style.display='inline';
reactparadiv.innerText='react';
let reactlvlcontainer=document.createElement('div');
reactlvlcontainer.className='container';
let reactlvldiv=document.createElement('div');
reactlvldiv.className='fifty';
reactlvlcontainer.append(reactlvldiv);
reactcontentdiv.append(reactparadiv,reactlvlcontainer);
techskillsdiv.append(reactcontentdiv);

let reduxcontentdiv=document.createElement('div');
reduxcontentdiv.className='content1';
let reduxparadiv=document.createElement('div');
reduxparadiv.className='paratxt1';
reduxparadiv.style.display='inline';
reduxparadiv.innerText='Redux';
let reduxlvlcontainer=document.createElement('div');
reduxlvlcontainer.className='container';
let reduxlvldiv=document.createElement('div');
reduxlvldiv.className='eighty';
reduxlvlcontainer.append(reduxlvldiv);
reduxcontentdiv.append(reduxparadiv,reduxlvlcontainer);
techskillsdiv.append(reduxcontentdiv);

let mongocontentdiv=document.createElement('div');
mongocontentdiv.className='content1';
let mongoparadiv=document.createElement('div');
mongoparadiv.className='paratxt1';
mongoparadiv.style.display='inline';
mongoparadiv.innerText='Mongo';
let mongolvlcontainer=document.createElement('div');
mongolvlcontainer.className='container';
let mongolvldiv=document.createElement('div');
mongolvldiv.className='eighty';
mongolvlcontainer.append(mongolvldiv);
mongocontentdiv.append(mongoparadiv,mongolvlcontainer);
techskillsdiv.append(mongocontentdiv);

let deplcontentdiv=document.createElement('div');
deplcontentdiv.className='content1';
let deplparadiv=document.createElement('div');
deplparadiv.className='paratxt1';
deplparadiv.style.display='inline';
deplparadiv.innerText='Deployment';
let depllvlcontainer=document.createElement('div');
depllvlcontainer.className='container';
let depllvldiv=document.createElement('div');
depllvldiv.className='hundred';
depllvlcontainer.append(depllvldiv);
deplcontentdiv.append(deplparadiv,depllvlcontainer);
techskillsdiv.append(deplcontentdiv);

//additional skills
let addsklsubhddiv=document.createElement('div');
addsklsubhddiv.className='subheading1';
addsklsubhddiv.innerText='Additional Skills'

divinner1.append(addsklsubhddiv);
divinner1.appendChild(br.cloneNode(true));

let addskillsdiv=document.createElement('div');

divinner1.append(addskillsdiv);

let prmgcontentdiv=document.createElement('div');
prmgcontentdiv.className='content1';
let prmgparadiv=document.createElement('div');
prmgparadiv.className='paratxt1';
prmgparadiv.style.display='inline';
prmgparadiv.innerText='Project Management';
let prmglvlcontainer=document.createElement('div');
prmglvlcontainer.className='container';
let prmglvldiv=document.createElement('div');
prmglvldiv.className='hundred';
prmglvlcontainer.append(prmglvldiv);
prmgcontentdiv.append(prmgparadiv,prmglvlcontainer);
addskillsdiv.append(prmgcontentdiv);

let recrcontentdiv=document.createElement('div');
recrcontentdiv.className='content1';
let recrparadiv=document.createElement('div');
recrparadiv.className='paratxt1';
recrparadiv.style.display='inline';
recrparadiv.innerText='Recruitment';
let recrlvlcontainer=document.createElement('div');
recrlvlcontainer.className='container';
let recrlvldiv=document.createElement('div');
recrlvldiv.className='eighty';
recrlvlcontainer.append(recrlvldiv);
recrcontentdiv.append(recrparadiv,recrlvlcontainer);
addskillsdiv.append(recrcontentdiv);

let bsdcontentdiv=document.createElement('div');
bsdcontentdiv.className='content1';
let bsdparadiv=document.createElement('div');
bsdparadiv.className='paratxt1';
bsdparadiv.style.display='inline';
bsdparadiv.innerText='Business Development';
let bsdlvlcontainer=document.createElement('div');
bsdlvlcontainer.className='container';
let bsdlvldiv=document.createElement('div');
bsdlvldiv.className='hundred';
bsdlvlcontainer.append(bsdlvldiv);
bsdcontentdiv.append(bsdparadiv,bsdlvlcontainer);
addskillsdiv.append(bsdcontentdiv);

let edcontentdiv=document.createElement('div');
edcontentdiv.className='content1';
let edparadiv=document.createElement('div');
edparadiv.className='paratxt1';
edparadiv.style.display='inline';
edparadiv.innerText='Editing';
let edlvlcontainer=document.createElement('div');
edlvlcontainer.className='container';
let edlvldiv=document.createElement('div');
edlvldiv.className='eighty';
edlvlcontainer.append(edlvldiv);
edcontentdiv.append(edparadiv,edlvlcontainer);
addskillsdiv.append(edcontentdiv);

let fdrcontentdiv=document.createElement('div');
fdrcontentdiv.className='content1';
let fdrparadiv=document.createElement('div');
fdrparadiv.className='paratxt1';
fdrparadiv.style.display='inline';
fdrparadiv.innerText='Fundraising';
let fdrlvlcontainer=document.createElement('div');
fdrlvlcontainer.className='container';
let fdrlvldiv=document.createElement('div');
fdrlvldiv.className='hundred';
fdrlvlcontainer.append(fdrlvldiv);
fdrcontentdiv.append(fdrparadiv,fdrlvlcontainer);
addskillsdiv.append(fdrcontentdiv);

divinner1.appendChild(br.cloneNode(true));

let wreximg=document.createElement('img');
wreximg.src='suitcasesmall.png';
wreximg.className='roundsmallimg';
let wrexspan=document.createElement('span');
wrexspan.className='subheading';
wrexspan.innerText='Work Experience'
let wrexdiv=document.createElement('div');
wrexdiv.append(wreximg,wrexspan);

divinner1.append(wrexdiv);
divinner1.appendChild(br.cloneNode(true));

let evntmgrdiv=document.createElement('div');
let evntmgrcntnt=document.createElement('div');
evntmgrcntnt.className='content1';
let evntmgrsubhd=document.createElement('div');
evntmgrsubhd.className='subheading1';
evntmgrsubhd.style.display='inline';
evntmgrsubhd.innerText='Event Manager';
let evntmgrtime=document.createElement('div');
evntmgrtime.style.display='inline';
evntmgrtime.style.fontSize='small';
evntmgrtime.innerText='03/2014 - 07/2017';
evntmgrcntnt.append(evntmgrsubhd,evntmgrtime);
evntmgrdiv.append(evntmgrcntnt);

divinner1.append(evntmgrdiv);
divinner1.appendChild(br.cloneNode(true));

let evntmgrdiv2=document.createElement('div');
let evntmgrpara=document.createElement('p');
evntmgrpara.className='paratxt1';
evntmgrpara.innerText='C3 Presents, Washington DC';
evntmgrdiv2.append(evntmgrpara);

divinner1.append(evntmgrdiv2);

let evntmgrdiv3=document.createElement('div');
let evntmgrul=document.createElement('ul');

let evntmgrli1=document.createElement('li');
evntmgrli1.className='paratxt1';
let evntmgrli1div=document.createElement('div');
evntmgrli1div.className='paradiv';
evntmgrli1div.innerText='Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.';
evntmgrli1.append(evntmgrli1div);

let evntmgrli2=document.createElement('li');
evntmgrli2.className='paratxt1';
let evntmgrli2div=document.createElement('div');
evntmgrli2div.className='paradiv';
evntmgrli2div.innerText='Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women.';
evntmgrli2.append(evntmgrli2div);

let evntmgrli3=document.createElement('li');
evntmgrli3.className='paratxt1';
let evntmgrli3div=document.createElement('div');
evntmgrli3div.className='paradiv';
evntmgrli3div.innerText='Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizations levels to advance cohesive operations';
evntmgrli3.append(evntmgrli3div);

evntmgrul.append(evntmgrli1,evntmgrli2,evntmgrli3)
evntmgrdiv3.append(evntmgrul);

divinner1.append(evntmgrdiv3);

let divinner2=document.createElement('div');
divinner2.className='vr';

contentdiv.append(divinner2);

let divinner3=document.createElement('div');
contentdiv.append(divinner3);

let wreximg1=document.createElement('img');
wreximg1.src='suitcasesmall.png';
wreximg1.className='roundsmallimg';
let wrexspan1=document.createElement('span');
wrexspan1.className='subheading';
wrexspan1.innerText='Work Experience'
let wrexdiv1=document.createElement('div');
wrexdiv1.append(wreximg1,wrexspan1);

divinner3.append(wrexdiv1);
divinner3.appendChild(br.cloneNode(true));

let evntmgrdiv1=document.createElement('div');
let evntmgrcntnt1=document.createElement('div');
evntmgrcntnt1.className='content1';
let evntmgrsubhd1=document.createElement('div');
evntmgrsubhd1.className='subheading1';
evntmgrsubhd1.style.display='inline';
evntmgrsubhd1.innerText='Community Relations Manager';
let evntmgrtime1=document.createElement('div');
evntmgrtime1.style.display='inline';
evntmgrtime1.style.fontSize='small';
evntmgrtime1.innerText='06/2011 - 01/2014';
evntmgrcntnt1.append(evntmgrsubhd1,evntmgrtime1);
evntmgrdiv1.append(evntmgrcntnt1);

divinner3.append(evntmgrdiv1);
divinner3.appendChild(br.cloneNode(true));

let evntmgrdiv21=document.createElement('div');
let evntmgrpara1=document.createElement('p');
evntmgrpara1.className='paratxt1';
evntmgrpara1.innerText='Gay & Lesbian Elder Housing, Los Angeles';
evntmgrdiv21.append(evntmgrpara1);

divinner3.append(evntmgrdiv21);

let evntmgrdiv31=document.createElement('div');
let evntmgrul1=document.createElement('ul');

let evntmgrli11=document.createElement('li');
evntmgrli11.className='paratxt1';
let evntmgrli1div1=document.createElement('div');
evntmgrli1div1.className='paradiv';
evntmgrli1div1.innerText='Arranging presentation and pitch deck.';
evntmgrli11.append(evntmgrli1div1);

let evntmgrli21=document.createElement('li');
evntmgrli21.className='paratxt1';
let evntmgrli2div1=document.createElement('div');
evntmgrli2div1.className='paradiv';
evntmgrli2div1.innerText='Designing a PR plan and establishing important focus points.';
evntmgrli21.append(evntmgrli2div1);

let evntmgrli31=document.createElement('li');
evntmgrli31.className='paratxt1';
let evntmgrli3div1=document.createElement('div');
evntmgrli3div1.className='paradiv';
evntmgrli3div1.innerText='Designing, creating and managing content across multiple communication platforms.';
evntmgrli31.append(evntmgrli3div1);

let evntmgrli41=document.createElement('li');
evntmgrli41.className='paratxt1';
let evntmgrli4div1=document.createElement('div');
evntmgrli4div1.className='paradiv';
evntmgrli4div1.innerText='Building relationships with key media players.';
evntmgrli41.append(evntmgrli4div1);

evntmgrul1.append(evntmgrli11,evntmgrli21,evntmgrli31,evntmgrli41)
evntmgrdiv31.append(evntmgrul1);

divinner3.append(evntmgrdiv31);

let eduimg1=document.createElement('img');
eduimg1.src='education1.png';
eduimg1.className='roundsmallimg';
let eduspan1=document.createElement('span');
eduspan1.className='subheading';
eduspan1.innerText='Education';
let edudiv1=document.createElement('div');
edudiv1.append(eduimg1,eduspan1);

divinner3.append(edudiv1);
divinner3.appendChild(br.cloneNode(true));

let engdiv1=document.createElement('div');
let engcntnt1=document.createElement('div');
engcntnt1.className='content1';
let engsubhd1=document.createElement('div');
engsubhd1.className='subheading1';
engsubhd1.style.display='inline';
engsubhd1.innerText='Engineering Immersion Program';
let engtime1=document.createElement('div');
engtime1.style.display='inline';
engtime1.style.fontSize='small';
engtime1.innerText='11/2018 - 06/2018';
engcntnt1.append(engsubhd1,engtime1);
engdiv1.append(engcntnt1);

divinner3.append(engdiv1);
divinner3.appendChild(br.cloneNode(true));

let edudiv21=document.createElement('div');
let edupara1=document.createElement('p');
edupara1.className='paratxt1';
edupara1.innerText='Thinkful, Chicago, IL.';
edudiv21.append(edupara1);

divinner3.append(edudiv21);
divinner3.appendChild(br.cloneNode(true));

let edutdiv21=document.createElement('div');
edutdiv21.className='paradiv';
edutdiv21.style.width='440px';
let edutpara1=document.createElement('p');
edutpara1.className='paratxt1';
edutpara1.innerText=' Project-focused intensive program with emphasis on Mongo, Express, React, and JavaScript(MERN) technical stack.';
edutdiv21.append(edutpara1);

divinner3.append(edutdiv21);

let edudiv31=document.createElement('div');
let eduul1=document.createElement('ul');

let eduli11=document.createElement('li');
eduli11.className='paratxt1';
let eduli1div1=document.createElement('div');
eduli1div1.className='paradiv';
eduli1div1.innerText="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.";
eduli11.append(eduli1div1);

let eduli21=document.createElement('li');
eduli21.className='paratxt1';
let eduli2div1=document.createElement('div');
eduli2div1.className='paradiv';
eduli2div1.innerText="Developed a language learning app, 'Foodie Phonetics', using spaced repetion and a linked list data structure. React was used to create the front end components while Node and MongoDB were used to create the backend that stores user data.";
eduli21.append(eduli2div1);

let eduli31=document.createElement('li');
eduli31.className='paratxt1';
let eduli3div1=document.createElement('div');
eduli3div1.className='paradiv';
eduli3div1.innerText="Developed a concierge app, 'Pley', for individuals looking for curated suggestions when visiting a new place. React was used to create the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.";
eduli31.append(eduli3div1);

eduul1.append(eduli11,eduli21,eduli31)
edudiv31.append(eduul1);

divinner3.append(edudiv31);

let badiv1=document.createElement('div');
let bacntnt1=document.createElement('div');
bacntnt1.className='content1';
let basubhd1=document.createElement('div');
basubhd1.className='subheading1';
basubhd1.style.display='inline';
basubhd1.innerText='BA, English';
let batime1=document.createElement('div');
batime1.style.display='inline';
batime1.style.fontSize='small';
batime1.innerText='11/2018 - 06/2018';
bacntnt1.append(basubhd1,batime1);
badiv1.append(bacntnt1);

divinner3.append(badiv1);
divinner3.appendChild(br.cloneNode(true));

let badiv21=document.createElement('div');
let bapara1=document.createElement('p');
bapara1.className='paratxt1';
bapara1.innerText='University of California, Los Angeles.';
badiv21.append(bapara1);

divinner3.append(badiv21);
divinner3.appendChild(br.cloneNode(true));