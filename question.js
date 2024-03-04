// GUESS THE RESULT
const promise = () => {
    return new Promise((reject) => {
      reject(2)
    })
  }
  
  promise()
    .then((res) => console.log(res, 'resolved'))
    .catch((err) => console.log(err, 'rejected'))

// MAKE COUNTER INCREMENT PASSING ARGUMENT ONE TIME
    function counter(count){
        var a 
        
        return function (){
            if(isNaN(a)){
                return a = count
            }else{
               return a  = a+1
            }
        }
    }
    const a = counter(10)
    console.log(a())
    console.log(a())
    console.log(a())

// MOVE ZEROS TO THE END OF ARRAY
    const moveZeros = function(nums){
        let left = 0;
        let right= 0;
        while(right < nums.length){
            console.log(nums[right],nums[left])
             if(nums[right] !==0){
                [nums[left],nums[right]] = [nums[right],nums[left]]
                left++;
            }
            right ++;
        }
      return  nums
    }

// console.log(moveZeros([0,1,0,3,12]))


// Is Array is monotinic array

function Ismonotonic(arr){
    let incresing = true
    let decresing = true
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            decresing = false
        }if(arr[i] < arr[i+1]){
           incresing = false
        }
        console.log(incresing,decresing,'ss')
    }
    return incresing || decresing
} 
// console.log(Ismonotonic([1,2,3,4,5,6]))  //true
// console.log(Ismonotonic([4, 0, 3, 1]))    // false

//GUESS

function x() {
    for (var i = 1; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
    
        }, i * 1000);
    }
    console.log('Namaste JavaScript');
}

x();


// GUESS 1
function x() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x); //
            }, x * 1000);
        } 
        close(i);
    }
}

x();


// REMOVE DUPLICATE FROM  ARRAY BOTH KEY SHOULD NOT MATCH
const arrObj = [  { name: 'abc', slug: 'abc' }, { name: 'xyz', slug: 'abc' }, { name: 'abc', slug: 'abc' }, { name: 'pqr', slug: 'xyz' } ];
let result = [ { name: 'abc', slug: 'abc' },{ name: 'pqr', slug: 'xyz' }]



function removeDuplicate(arr){

 let result1 = []    

 arr.filter((item,index,data)=>{

let a = result1.findIndex((item1,ind)=> {

return   item1.name === item.name || item1.slug === item.slug
} )
    // console.log(a)
    
    if(a  === -1){
        //   console.log(item,a)
          result1.push(item)
    }
  
 })
return result1
}

console.log(removeDuplicate(arrObj))


// MERGE TWO OBJECT WHOSE VALUE IS NULL OR KEY IS NOT AVAILABLE
const user1 = {
    name:"Rajan",
    age:null,
    address:{
        pincode:1234444,
        city:null,
    },
    test:null
}

const user2 = {
    name:"Piyush",
    age:null,
    address:{
        pincode:843434,
        city:"GGN",
        state:"haryana"
    },
    mobile:1234567890
}

function mergeObject(obj,obj1){
    
    const recurcively = (target,source)=>{
        
         for(const [key,sourceVal] of Object.entries(source)){
            //  console.log(key,sourceVal,typeof sourceVal)
             if(typeof sourceVal === 'object' && sourceVal !== null){
                 target[key] = recurcively(target[key],source[key])
                //  console.log(target[key],key,'s')
             }else{
                 
                 if(!target[key])
                 target[key] = sourceVal
                //  console.log(target[key],source[key],key)
             }
         }
         return target
    }
    return recurcively({...obj},obj1)
}
console.log(mergeObject(user1,user2))


// SECOND LAREGST NUMBER IN ARRAY
function secondLargest(arr){
    let first = -Infinity
    let second = -Infinity
   
     for(let num of arr){
         
         if(num > first){
             second = first
             first = num
         }else if(second < num && num!== first){
             second = num
         }
        //  console.log(num)
     }
    return second
}
console.log(secondLargest([23,100,15,76,15,86,11]))


// FIND INDEX OF SUM OF TWO ELEMENT OF ARRAY EQUAL TO TARGET
function sumtarget(arr, target) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (count.hasOwnProperty(complement)) {
            return { index1: count[complement], index2: i };
        }
        count[arr[i]] = i;
    }
    return "No two elements sum up to the target.";
}

console.log(sumtarget([1, 2, 3, 4, 5, 6], 10));