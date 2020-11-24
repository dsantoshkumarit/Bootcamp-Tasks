// Get all the countries from Asia continent using Filter function

//Request variable
let request=new XMLHttpRequest();

//Initialize the request with open()
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//send the request
request.send();

//variable to store the response data
let data;

//Load the response data
request.onload=function(){
    data=JSON.parse(this.response);

    //getting asian countires with filter
    let asiancountries=data.filter((item)=>{
        return (item.region==='Asia');
    });

    //printing asian country names
    asiancountries.forEach((item)=>{
        console.log(item.name);
    });
    
};