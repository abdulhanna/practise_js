const array = [20,3,61,43,2,8,21,10,1]

function sorting(input){
    var done = false
 while(!done){
    done = true
      for(let i=1; i<input.length ; i ++ ){

        // console.log(input)
       if(input[i-1] > input[i]){
          
           done= false
       let swap 
       swap = input[i]
       input[i] = input[i-1]
       input[i-1] = swap
   }

  }

 }
           return input 
}


function selectionSort(arr) {

    for (let i = 0; i < arr.length-1; i++){
      console.log(arr)
        // Finding the minimum element
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) minIndex = j;
                
        }
 
        // Swapping the minimum element with the first element
        let temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
        
    }

    return arr
}


    
const arr= [2,3,1,5,67]
const arr1 = [67,1,2,3,5]

function testResult(arr, arr1){
   
const b =arr.length === arr1.length &&   arr.map((element,index )=> {     

    let a =   arr1.some((item)=>{
            return element === item 
          })
          console.log(element,index, a)
          return a
    });
   
    if(b.includes(false)){
        return "not equal"
    }else{
        return "equal"
    }


    // console.log(b)

    //  arr.forEach(element,index => {
    //     //    console.log(element)
    // // let  a =   arr1.some((item)=>{
    // //     console.log(item,element,index)
    // //         return element === item 
    // //      })
    //     //  console.log(element,index)
    //     //  return a
    //     // if(a){
    //     //     return 'done'
    //     // }

    // });


    // console.log(test,'dsfjs')


    //    if(arr.length ===  arr1.length){
    //     return 'hello'
    //    }
    // return arr1.length === arr.length && 
}

// console.log(testResult(arr,arr1))


// shift 2 times left of an array 

function twoShift(arr){
    let temp = arr[0]
    let temp1 = arr[1]
   for(let i=0;i<arr.length-2;i++){
        arr[i] = arr[i+2]
       // let a = arr.splice(0,1)
       // arr.push(a[0])
   }
    arr[arr.length-1] = temp
    arr[arr.length-2] = temp1
   return arr

 //    OR
[arr[start],arr[end]] = [arr[end],arr[start]]
return arr
}
// console.log(rotate(arr))




//String prototype/polyfill

String.prototype.myLen = function(){
    return this.length+3
}

let a= 'abdul'
console.log(a.myLen())