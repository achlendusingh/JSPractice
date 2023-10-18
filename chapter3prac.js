let obj={
    "max":1,
    "seb":2,
    "tom":3,
    "jack":90
}
console.log(Object.keys(obj))   //returns an array
console.log(Object.keys(obj).length)   //returns length
for (let i=0;i<(Object.keys(obj).length);i++){
    console.log("The number of "+Object.keys(obj)[i]+" are "+obj[Object.keys(obj)[i]])  //very important
}

for(key in obj){
    console.log("The number of "+key+" is "+obj[key])
}