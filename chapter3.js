//loops
//for loop
for (let i=1;i<=50;i++) //prints all natural numbers till 50
{
    console.log(i)
}
//for in loop, also works with arrays
const obj={
    "Gopal":97,
    "Hari":95,
    "Krishna":96,
    1:"hello"
}
console.log(obj)
for (let a in obj)  
{
    console.log("The marks of "+a+" are "+obj[a])
    console.log("The type of key is "+typeof(a))
}

//for of loop, the values need to beb iterable. the above object is not iterable. This works better with string and arrays

let str="Namaste"
for (a of str){
    console.log(a)
}

//functions
function add(j,k){
    return j+k
}
let sum=add(5,4)
console.log(sum)

//arrow function

const mul=(p,q)=>{
    return p*q
}
let prod=mul(8,9)
console.log(prod)