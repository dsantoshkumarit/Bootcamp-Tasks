//Print the total population of countries using reduce function

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

    //Obtaining total population using reduce function
    let total=data.reduce((total,item)=>{
        return total+item.population;
    },0);
    console.log('Total Population of all countries : '+total);
    

};