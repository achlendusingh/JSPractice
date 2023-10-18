let marks=[9,34,89,75]
console.log(marks)
console.log(marks[3])
console.log(marks[4])
marks[4]=90
console.log(marks[4])
console.log(typeof(marks)) //type of array is object
console.log(Object.keys(marks))
for(a in marks){
    console.log("hello")
}
for(a in marks){
    // console.log(a)
    console.log(marks[Object.keys(marks)[a]])
}
let b=marks.toString()
console.log(b)
let c=marks.join("*")
console.log(c)


//pop, push,shift,unshift, concat



delete marks[1]
console.log(marks)  


//unshift, shift
marks.unshift(95)
console.log(marks)
marks[2]=87
let marks2=[1,34,2,4354,45,534,8]
let marks3=[234,23445,324234,234,432]
let markstot=marks.concat(marks2,marks3)
console.log(markstot)
markstot=markstot.concat(marks)
console.log(markstot)

//sort
markstot.sort()
console.log(markstot) //sorts lexically

// to sort in ascending order make a compare function
function compare(a,b){
    return a-b
}
markstot.sort(compare)
console.log(markstot)

//reverse //SPLICE(marsktot gets changed) //slice(markstot doesnt get changed)

// arg1 = start index, arg2= number of elements to be deleted, arg3= elements you want to add

let deletedValues =markstot.splice(5,3,"We","are", "performing", "splice")
console.log(markstot)

let h=markstot.slice(5)
let t=markstot.slice(5,7)
console.log(h)
console.log(t)