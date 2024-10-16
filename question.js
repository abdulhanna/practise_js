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

// MOVE ZEROS TO THE END OF ARRAY OR MOVES ZEROS TO RIGHT
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


//MOVE ZEROS TO LEFT 

function moveZeros1(arr){
    let left = arr.length-1,right=arr.length-1;
    
    while(right >=0){
      if(arr[right] !==0 ){
                  [arr[right],arr[left]] = [arr[left],arr[right]]
            left--
      }
      right--
    }
    
    while(left >=0){
        arr[left] = 0
        left--
    }
    return arr
}

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

// Add plus 1 if number is greater than 9 set to zero
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }

    digits.unshift(1);
    return digits;
};

console.log(plusOne([9,9]))

// INFINITE ARGUMNET
function sum(a){
    
    return function (b){
       if(b) return sum(a+b)
         return a  
    }
}


console.log(sum(2)(3)(4)(12)())



//FLATEN ARRAY 
const data = [1,[2,2],[3,4,5],[6,7,[8,9]],10]
function flat1(arr){
    let res = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let flaten = flat1(arr[i])
              for(let j=0;j<flaten.length;j++){
                  res[res.length] = flaten[j]
              }

        }else{
            res[res.length] = arr[i]
        }
    }
    return res
}
// console.log(data.flat(1))
console.log(flat1(data))


function finder(str) {
    let res = str[0]; // Start with the first character
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " " && i + 1 < str.length) {
        res += str[i + 1]; // Add the character after the space
      }
    }
    return res;
  }
  
  console.log(finder('Abdul Hannan Khan'));  // Output: "AHK"
  