// SPREAD OPERATOR VS REST OPERATOR
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"))
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]


  // Define a function with three parameters:
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
  
  // The invocation above will return:
//   “Oluwatobi Sofela runs CodeSweetly”


// USEMEMO V/S MEMO

React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change
useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change



// CALL VS BIND VS APPLY

 // bind method to allow an object to borrow a method from another object without copy of that object.this is known as borrowing of an object.
 let asset = {
  name:"desktop",
  getDetail:function(number){
      return `Asset is ${this.name} of ${number} item`
  }
}

let tv = {
  name:'TV'
}

 let newTv = asset.getDetail.bind(tv,20)
 console.log(newTv())

 // The call() method calls a function by passing this and specified values as arguments.BY using the call() method , we can use function belonging to one object to be assigned and called different object.


 let result ;
let userRole = "admin"
if(userRole === "admin"){
    result = "Welcome Administrator!"
}else if(userRole === "editor"){
    result = "Hello Editor"
}else if(userRole === "viewer"){
    result = "Greeeting viewers"
}else{
    result = "Hello Guest"
}

let roleLookUp = {
    admin :"Welcome Administrator!",
    editor:"Hello Editor",
    viewer:"Greeeting viewers"
}

let res = roleLookUp['viewer'] || "Hello Guest"
console.log(res)


//Redux is a state management tool, which is used to store the state of different variables in our react application. It makes complex react applications easier by centralizing the application state.
//Redux supports middleware, and middleware functions run between dispatching an action and the moment it reaches the reducer. Redux middlewares can be used for logging, routing, asynchronous actions, etc.