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

    try
    {
        console.log(data[250].name);
    }
    catch(e)
    {
        console.log(e.name);
        alert(e.name);
        console.log(e.message);
        alert(e.message);
    }



};