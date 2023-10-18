a="hello"
b=1
c=a+b
console.log(typeof(c))
const ob={
    a: "harry",
    b: "max",
    1:"jack"
}
console.log(ob)
ob.a=1
console.log(ob)
ob.c="seb"
console.log(ob)
ob["d"]="hello"
console.log(ob)
console.log(typeof(ob.a))
// console.log(ob.1) will give an error, keys can only be strings