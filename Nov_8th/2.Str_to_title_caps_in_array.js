/*
Convert all the strings to title caps in a string array 
*/

let strArray=["In","addition","to","converting","to","title","case","the","converter","also","performs",
"small","typographic","corrections"];
//let newstrarray=strArray.map((item)=>{item=item.charAt(0).toUpperCase()+item.slice(1);return item});
let newstrarray=strArray.reduce((newarr,item)=>{
    newarr.push(item.charAt(0).toUpperCase()+item.slice(1));
    return newarr;
},[]);

//console.log(newstrarray);

((strArray)=>{
    for(let i in strArray)
    {
        strArray[i]=strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
    }
    console.log(strArray);
})(strArray);