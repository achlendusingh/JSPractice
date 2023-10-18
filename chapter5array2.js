console.log("FOR EACH")
let a=[1,2,3,4,5]
a.forEach(myFunc)
function myFunc(b){
    console.log( b*b)
}
a.forEach(element=>{
    console.log(element*element*element)
})
//Syntax=> array.forEach(function(currentValue, index, arr), thisValue)

//We cannot use forEach loop for HTML collection. We need to use Array.from. It is used to create an array from any other object
console.log("ARRAY FROM")
let str="harry"
let hu=Array.from(str)
console.log(hu) //u can use split as well
let ty=str.split(", ")
console.log(ty)

//for in and for of
console.log("FOR OF FOR IN")
for (i of str){   // returns elements of array
    console.log(i)
}
for (k in str)  //returns key of array element since key is an object
{
    console.log(k)
}

//map,filter,reduce
//difference between for each and map is that map creates a new array. For each just performs some function on an array

//map syntax array.map(function(currentValue, index, arr), thisValue)
console.log("MAP")
let arr=[45,89,56]
console.log(arr)
arr.map((value)=>{
    console.log(value)
})  
newarr=arr.map((value)=>{
    return value+1
})  
console.log(newarr)  

//filter
//below filter function returns all values in the array less than 72
console.log("FILTER")
let arr2=arr.filter((a)=>{
return a<72
})
console.log(arr2)


//reduce-> reduces the array to a single value
console.log("REDUCE")
let arr3=[2,3,8,34,34,45,89,78]
let arr4=arr3.reduce((a,b)=>{
    return a+b
})
console.log("The sum of the array arr3 is "+arr4)