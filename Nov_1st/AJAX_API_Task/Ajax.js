//Create Request Variable
var request = new  XMLHttpRequest();

//Open the request - open() initializes a newly-created request,-
// or re-initializes an existing one.
request.open('GET','https://restcountries.eu/rest/v2/all',true);

//Send the request
request.send();

//Create data variable to store the response data
var data;

//Load the response
request.onload=function(){
data=JSON.parse(this.response);

for(let i in data){
    console.log(data[i].name+':'+data[i].flag);
}
//console.log(data);
// var divtag= document.getElementById('divId');
// for(let i in data)
// {
//   divtag.innerHTML+=data[i].name+":"+data[i].flag+'<br>';
// }
// divtag.innerHTML+='</table></center>'
};