// Prototype of Reduce method 

Array.prototype.myReduce = function(callback, accumulator) {
    if(this.length < 1) {
        throw new Error("Array is Empty")
    }

    if(!accumulator) {
        if(typeof this[0] === "string") {
            accumulator = '';
        } else if(typeof this[0] === "number") {
            accumulator = 0;
        }
    }

    for(let index=0; index < this.length; index++) {
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}


// Prototype of Filter method

Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}


//MAP METHOD 

Array.prototype.myMap = function(callbackFn) {

    var arr = [];   
             
    for (var i = 0; i < this.length; i++) { 
  
      arr.push(callbackFn(this[i], i, this));
  
    }
  
    return arr;
  
  }
  
  
  const arrData = ["Apple", "Banana", "Coconut","Blueberry"];
  
  
  
  console.log(arrData.myMap((element,index) => {
  
      return element;
  }))


Array.prototype.toObject = function(cb){
    let obj = {}
    for(let i=0;i<this.length;i++){
        const key  = cb ? cb(this[i],i,this):i
        obj[key] = this[i]
    }
    return obj
}

function myMemoize(fn,context){
    let res = {}
    return function(...args){
         var cache = JSON.stringify(args)
         if(!res[cache]){
             console.log(args)
              res[cache] = fn.call(context|| this,...args)
         }
         return cache
    }
   
}




function PromisePolyFill(executor){
    let onResolve,onReject,isFullfilled=false,isCalled=false,value,isRejected=false;
    
    function resolve(val){
        isFullfilled = true;
        value = val;
        // console.log(typeof onResolve)
        if(typeof onResolve === 'function'){
            onResolve(val);
            isCalled = true;
        }
        // onResolve(val)
    }
     function reject(val){
         isRejected = true
         value = val;
         if(typeof onResolve === 'function'){
             onReject(val)
            isCalled = true;
        }
       
    }
    this.then = function(callback){
        onResolve = callback;
        if(isFullfilled && !isCalled){
            onResolve(value)
        }
        return this
    }
    
    this.catch = function(callback){
        onReject = callback
        if(isRejected && !isCalled){
            onReject(value)
            isCalled = true
        }
        return this
    }
    try{
    executor(resolve,reject)
    }catch(error){
        onReject(error)
    }
}

const examplePromise = new PromisePolyFill((resolve,reject)=>{
    // setTimeout(()=>{
        // resolve(2000)
        reject(20)
    // },2000)
})

examplePromise.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})
