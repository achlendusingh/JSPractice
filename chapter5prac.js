//JS program to enter elements in an array
n=prompt("Enter the number of elements in the array")
let arr=[]
for(i=0;i<n;i++)
{
    val=parseInt(prompt("Enter element"+(i+1)))
    arr.push(val)
}
console.log(arr)

//keep adding elemts to an array until zero is added

let arr2=[]
let val
console.log("The value of val is "+val)
do {
     val=parseInt(prompt("Enter the value"))
     if (val==0)
     console.log("Program ended since value entered is zero")
    else
    arr2.push(val)
}while(val!=0)
console.log(arr2)

//filter for numbers divisible by 10 

arr3=[10,45,78,90,80,57,89,98]
console.log(typeof(arr3[1]))

console.log(arr3.filter((element)=>{
    if ((element%10)===0)
    return element
}))

//create an array of square of given number
arr4=[10,45,78,90,80,57,89,98]
console.log(arr3.map((val)=>{
    return val**val
}))

//using reduce to calculate the factorial of a number
let a=[1,2,3,4,5,6,7,8,9]
let n=parseint(prompt("Enter the number whose factorial u want to calculate"))
let fact=1
console.log(a.reduce((a,b)=>{
    if (a<n){
       return a*b      
    }
}))