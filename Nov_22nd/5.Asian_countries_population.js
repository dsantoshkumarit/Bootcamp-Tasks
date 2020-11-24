//Print the total population of countries in Asia continent using reduce and filter function

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

    //Filtering all the asian countries using filter function
    let asiancountries=data.filter((country)=>{
        return (country.region==='Asia');
    });

    //Obtaining total asian population using reduce function
    let total1=asiancountries.reduce((total,item)=>{
        return total+item.population;
    },0);
    console.log('Total Population of all countries in Asia : '+total1);
};