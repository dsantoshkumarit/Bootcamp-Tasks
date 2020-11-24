//Print the following details name, capital, flag using forEach function

//Create a request variable
let request=new XMLHttpRequest();

//Initiate the request variable
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//Send the request
request.send();

//Variable to store the response
let data;

//Load the response in the data variable
request.onload=function(){
    data=JSON.parse(this.response);

    //Printing all the countries name, capital, flag
    data.forEach((item)=>{
        console.log('Name : '+item.name+'; Capital : '+item.capital+'; Flag : '+item.flag);
    });

};