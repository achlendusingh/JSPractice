//STRINGS ARE IMMUTABLE IN PYTHON

let a="harry"
console.log(a.toUpperCase())
console.log(a.search('r'))
console.log(a.lastIndexOf('r'))
delete a[0]
console.log(a)
//template literals
//we need to use backtics and dollar signs

st1="how"
st2="you"
let str=`Hello, ${st1} are ${st2} ?`
console.log(str)

console.log(a.length)
//slice(2,4) 4 is not included
//substring()
//substr()
console.log(a.replace("rr","pp")) 
sen="     This is a tree. It gives us oxygen"
console.log(sen)
let an=sen.trim()  //removes whitespaces from front and end
console.log(an)
console.log(typeof(an))
for (i in a)
{
    console.log(i)
}
for (i in a)
{
    console.log(a[i])
}

let str2="I have Rs.10000 "
let amt=str2.slice("I have Rs.".length)
console.log(amt, typeof(amt))
amt=parseInt(amt)
console.log(typeof(amt))

arr3=[1,3,4,5,7,8,9,10,11]
delete(arr3[0])
console.log(arr3)
