const obj = {
    "1":"A",
    1:'B',
    [1]:'C'
}

console.log(obj['1'])



let obj1 = {
    name:"jack",
    age:12
}

const arr = ['first','second','third']

const {name:userName,age} = obj1
console.log(userName)


function add(a=3,b=4){
    return a+b
}

console.log(add(3,10))
console.log(add())

// const [one,two,three] = arr
// console.log(one,two)