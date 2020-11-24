//Get all the countries with population of less than 2 lacs using Filter function

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

    //Storing the countries with more than 2 lacs population in a variable
    let countries=data.filter((item)=>{
        return (item.population>200000);
    });

    //Printing all the countries with more than 2 lac population
    countries.forEach((item)=>{
        console.log(item.name+' : '+item.population);
    });

};