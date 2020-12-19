let label=document.getElementById('timerlabel');
let timerdiv=document.getElementById('timerdiv');
let timerval=document.getElementById('timernumber');
let timerrow=document.getElementById('timerrow');

setTimeout(function(){    
    timerval.style.color='#4e8d7c';
    timerval.innerText='9';    
    setTimeout(function(){
        timerval.style.color='#fc8621';
        timerval.innerText='8';
        setTimeout(function(){
            timerval.style.color='#c24914';
            timerval.innerText='7';
            setTimeout(function(){
                timerval.style.color='#456268';
                timerval.innerText='6';
                setTimeout(function(){
                    timerval.style.color='#ff8e71';
                    timerval.innerText='5';
                    setTimeout(function(){
                        timerval.style.color='#41584b';
                        timerval.innerText='4';
                        setTimeout(function(){
                            timerval.style.color='#db6400';
                            timerval.innerText='3';
                            setTimeout(function(){
                                timerval.style.color='#61b15a';
                                timerval.innerText='2';
                                setTimeout(function(){
                                    timerval.style.color='#c05555';
                                    timerval.innerText='1';
                                    setTimeout(function(){
                                        timerval.style.color='#fd8c04';
                                        timerval.innerText='0';
                                        setTimeout(function(){
                                            timerrow.removeChild(label);
                                            timerdiv.className='col-12';
                                            timerval.className='text-center';
                                            timerval.style.color='#f05454';
                                            timerval.innerText='Happy Independence Day';
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);