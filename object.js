let user = {
    name:"john",
    role:"developer"
}

// Object.prototype.addtitle = "hsdlksalid"
// console.log(user.addtitle)

// Pagination custom


const Lists =[
    {
        page:1,
        title:"this is page 1"
    },
    {
        page:2,
        title:"this is page 2"
    },
    {
        page:3,
        title:"this is page 3"
    },
    {
        page:4,
        title:"this is page 4"
    },
    {
        page:5,
        title:"this is page 5"
    },
    {
        page:6,
        title:"this is page 6"
    }
]


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 






const data = [2,3,4,5,7,8,31]


const b = setTimeout(()=>{
   
    let a = [100,101,102]
    data.push(a)
    // console.log(data)
    // console.log('run after 2 sec')
},2000)


function addData (){
    setTimeout(()=>{
        // console.log(data)
    //    console.log('run after 1 sec')
    },1000)


}

function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
//   processUserInput(greeting);



// Callback Function Example

const datas = [ 
    { name:"peter", role:"admin"},
    {name:"john" , role:"developer"}
]



function getDatas(){
    setTimeout(()=>{
        let output =''
        datas.forEach((ele)=>{
            output += `<li>${ele.name}</li>` 
        })
        document.body.innerHTML = output;
    },1000)
}


function createData(newData){
    setTimeout(()=>{
     datas.push(newData)
    //  callback()
    },2000)
}

// createData({name:"vinod", role:"peon"},getData)


//Async await 

async function start(){
    await createData({name:"hdfds",role:"dsjhfd"});
    getDatas();
}
start()


// PROMISE 

const orderFood = () => {

    // A buzzer will be handled to you
    return new Promise((resolve, reject) => {
   
     // Cooking time could be anything between 5 and 20 seconds
     const cookingTime = 5000 + Math.random() * 15000;
     console.log(cookingTime)
     // The food will be prepared in the given time
     setTimeout(() => {
      const foodReady = true;
   
      // If the food is ready after the cooking time,
      // pass the information on to the buzzer. Also,
      // pass on the cooking time in seconds
      if (foodReady) {
       const time = (cookingTime / 1000).toFixed();
       resolve(time);
   
       // If it is not ready for some reason, throw an exception which
       // you can later catch when calling the function
      } else {
       const reason = 'Your food could not be prepared ...';
       reject(reason);
      }
     }, cookingTime);
    });
   };
   
   
   orderFood()
   
    // The variable in the .then method is what you have passed
    // into the resolve function within the promise
    .then((time) => {
     console.log(`BZZZZZ BZZZZZ - Your food is ready.`);
     console.log(`Your waiting time was ${time} seconds`);
    })
   
    // Catch the reason for the promise rejection
    .catch((reason) => {
     console.log(reason);
    })



    const collection = ["apple", "banana",'apple','grapes','apple','grapes']
 // DUPLICATE COUNT   
function dupolicateCount (arr){

    let count ={}

    for(let i =0; i<arr.length; i++){
        count[arr[i]] = (count[arr[i]] || 0) +1
    }
    return count
}


// find common key and equal value of two object

const obj= {a:21,b:43,c:90,d:30,e:50,f:36}
const obj1 = {a:22,d:30,f:36}

function duplicate(input1,input2){
  let count  = {}  
    for(i in input1){
        if(input1[i] === input2[i]) count[i] = input1[i]
    }
    return count
}

