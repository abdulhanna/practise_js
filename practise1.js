//Find odd missing number from array

let data = [5,7,9,11,15,17]

for(let i =0; i<data.length-1;i++){
    // if((data[i]+2) === (data[i+1])) continue
    // else{
    //     console.log(data[i]+2)
    // }

    if((data[i]+2) !== (data[i+1])) {
        console.log(data[i]+2)
        break

    }
}

// Find prime number between range 

function primeRange(start,end){
let range = []
    for(let i=start;i<end;i++){
        if(isPrime(i)){
            range.push(i)
        }
    }
    return range

}

 function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false

        }
    }
    return true
    
 }

 // console.log( primeRange(2,20));

 // Longest pallindrome in a String

 function longestPallindrome(str){
  let longest =  "" ;
  
  for(let i=0;i<str.length;i++){
    let subStr = str[i]
      // console.log(subStr,'ds')
      for(let j=i+1;j<str.length;j++){
           subStr += str[j]
           
           if(isPallindrome(subStr) && longest.length < subStr.length){
               longest = subStr
           }
          //  console.log(subStr,i)
      }
  }
  // console.log(str)
  longest.length <= 0 ? longest = str[0] : longest
  return longest
}

 function isPallindrome(str){
       for (let i=0,j=str.length-1;i<j;i++,j--){
          if(str[i] !== str[j]){
            return false
          }
       }
       return true 
 }


// console.log(isPallindrome('dabad'))

//  console.log(longestPallindrome('qqqqbababddfgsgs'))


// Find same key with equal value in two Object

let obj1 = {a:12,b:23,c:34,d:65,e:100,f:21}
let obj2 = {a:12,c:23,e:122,f:21}

function findSamekey (obj1,obj2){
  
    const resultObj={};
    Object.keys(obj1).map((value)=>{
        // console.log(obj1[value] === obj2[value]);
       if(obj1[value] === obj2[value]){
        resultObj[`${value}`]= `${obj1[value]}`
       }
    //    console.log(resultObj);
    })

    return resultObj
}

// console.log(findSamekey(obj1,obj2))



// Find new array with sum of array value expect index of that iteration 

let arr1= [2,4,6,10,23,-2]
let output = [41,39,37,33,20,45]

function doSome(input){
    let result = []
    
    for(let i=0;i<input.length;i++){
        let sum = 0;
        for(j=0;j<input.length;j++){
            if(i !== j){
                sum = sum + input[j]
            }
        }
         result.push(sum)
    }
   return result
}


const data1 = [
    {
      month_act: { transkey: [], amount: 17720 },
      top_deptors: {
        debtorInfo: [
          { debtor: 2813, balance: 2600 },
          { debtor: 2813, balance: 2600 },
          { debtor: 707, balance: 2700 }
        ]
      },
      ckey: 961,
      total_ar: 67368.75,
      name: 'Angel Freight Inc',
      aging: { amt0: 49091.25, amt1: 14421.25, amt2: 150, amt3: 3800, amt4: 0 }
    },
    {
      month_act: { transkey: [], amount: 5400 },
      top_deptors: {
        debtorInfo: [
          { debtor: 2813, balance: 2600 },
          { debtor: 707, balance: 1700 },
          { debtor: 707, balance: 2700 }
        ]
      },
      ckey: 962,
      total_ar: 6610.24,
      name: 'John Doe',
      aging: { amt0: 3450, amt1: 4, amt2: 40, amt3: 60, amt4: 20 }
    },
    {
      month_act: { transkey: [], amount: 10000 },
      top_deptors: { debtorInfo: [] },
      ckey: 963,
      total_ar: 6610.24,
      name: 'Riya Oberoi',
      aging: { amt0: 2000, amt1: 71, amt2: 150, amt3: 520, amt4: 0 }
    }
  ];
  
  const combinedData = {};
  
  data1.forEach((entry) => {
    const { ckey, top_deptors } = entry;
    if (top_deptors && top_deptors.debtorInfo.length > 0) {
      top_deptors.debtorInfo.forEach((debtorInfo) => {
        const { debtor, balance } = debtorInfo;
        if (combinedData.hasOwnProperty(ckey)) {
          if (combinedData[ckey].hasOwnProperty(debtor)) {
            combinedData[ckey][debtor] += balance;
          } else {
            combinedData[ckey][debtor] = balance;
          }
        } else {
          combinedData[ckey] = { [debtor]: balance };
        }
      });
    }
  });
  
  // Convert the combinedData object to an array of objects
  const result = Object.entries(combinedData).map(([ckey, debtors]) => ({
    ckey: parseInt(ckey),
    top_deptors: {
      debtorInfo: Object.entries(debtors).map(([debtor, balance]) => ({
        debtor: parseInt(debtor),
        balance: balance
      }))
    }
  }));
  
  console.log(result);
  
// console.log(doSome(arr1))



//Find longest Prefix in string
function longestCommonPrefix(strs){
    
  if(strs.length===0){
      return ""
  }
  for(let i=0;i<strs[0].length;i++){
      for(let j=1;j<strs.length;j++){
          console.log(strs[j][i],j)
          if(strs[0][i]!=strs[j][i]){
              
              return strs[0].slice(0,i)
          }
      }
  }
    return strs[0];
}


// Sum of 3345678 without converting into string

function sumDigits(number) {
  let sum = 0;

  while (number > 0) {
    sum += number % 10; // Add the last digit to the sum
    
    number = Math.floor(number / 10); // Remove the last digit from the number
    // console.log(number)
  }

  return sum;
}

const number = 2345653;
const result1 = sumDigits(number);


//BINARY SEARCH {work only on sorted array}

function Search(arr){
  let start = 0
  let end = arr.length -1;
   let pos = undefined
   let find = 23
  while(start<=end){
    let mid = Math.floor((start+end)/2)
    // console.log(mid)
    if(arr[mid] === find){
      pos = mid;
      return pos;
    }else if(arr[mid] > find){
      console.log(arr[mid])
      // start = mid + 1;
      end = mid - 1;
       
    }else{
      // end = mid-1;
      start = mid + 1;
    }
 
}

}


//FIND ANAGRAM 

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
      return false;  // Anagrams must be of the same length
  }

  const ana = {};

  // Count the frequency of characters in str1
  for (const ch of str1) {
      ana[ch] = (ana[ch] || 0) + 1;
  }

  // Check the frequency of characters in str2
  for (const ch of str2) {
      if (!ana[ch]) {
          // If the character is not in ana or its frequency is 0, return false
          return false;
      } else {
          // Decrease the frequency of the character
          ana[ch] = ana[ch] - 1;
      }
  }

  // Ensure all frequencies are now 0
  for (const key in ana) {
      if (ana[key] !== 0) {
          return false;
      }
  }

  // If all characters in str2 have corresponding frequencies in str1, return true
  return true;
}

// Example usage:
const result2 = anagram("listen", "silent");
console.log(result2);  // Output: true

// FIND POSITION OF TWO NUMBER OF TARGET NUMBER
function twoSum (arr,target){
    
  let indices = {}
  
  for(let i=0;i<arr.length;i++){
  let complement = target - arr[i]
  
  if(indices.hasOwnProperty(complement)){
      return {index1:indices[complement],index2:i}
  }
  // console.log(complement)
  indices[arr[i]] = i
  }
  return arr
}

console.log(twoSum([2,9,12,34,42],46))// index1:2 index2:3


// REVERSE STRING WITH RECURSION
function conversion(str,remain){
     
  //  let concat = "";
  //   console.log(str[str.length-1],remain)
  if(str.length > 0){
     remain = remain || ""
     remain += str[str.length-1] 
     
      return conversion(str.slice(0,str.length-1),remain)
  }
  return remain
}

console.log(conversion('Programiz to welcome'))


// FIND MAXM OUTCOME ITEM IN ARRAY THAT IS GREATER THAN HALF OF ARRAY LENGTH
const arr = [1, 2, 3, 2, 3, 4, 2,2,2 ,2,6, 2, 3, 5, 2];
function calculate(nums){
  let istrue= -1
  let count ={}
   let len = nums.length/2
      for(let a of nums){
          // if(count[a])
          
           count[a] = (count[a] || 0) +1
      }
      // console.log(len,'len')
      Object.entries(count).map(([key,value])=>{
          // console.log(key,value)
          if(value > len){
              istrue = key
          }
      })
      return istrue
  }
  console.log(calculate(arr))

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
//or -1 if needle is not part of haystack.

let haystack = "sadbutsad"
let needle = "adb"
function checkOut (){
    for(let i=0;i<haystack.length;i++){
                   let str= haystack[i];
       for(let j=i+1;j<haystack.length-1;j++){
           str += haystack[j]
            // console.log(str,'dd')
          if(str == needle ){
              return i
          }
       }
    }
    return -1
}

console.log(checkOut())

// Find the Longest Substring without repeating characters in JavaScript
function longestString(s){
    
  let start = 0
  let end = 0
  let maxlenght = 0
  
  const uniqueString = new Set();
  // console.log(s,'sdfg')
  
  // console.log(uniqueString.Size,'dd')
  //  console.log(s.length)
  while(end < s.length){
      console.log(uniqueString,start,end)
      // console.log(uniqueString.size)
      if(!uniqueString.has(s[end])){
          // console.log(s[end])
          uniqueString.add(s[end])
          end++
          maxlenght = Math.max(maxlenght,uniqueString.size)
      }else{
          uniqueString.delete(s[end])
          start++
      }
  }
  return maxlenght
}

console.log(longestString('abcabcbb'))



//ROMAN TO INTEGER
function romantoInt(num){
  const hash = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  let sum = 0;
  
  for(let i=0;i<num.length-1;i++){
      
      if(hash[num[i]] < hash[num[i+1]]){
           sum -= hash[num[i]]
      }else{
          sum += hash[num[i]]
      }
  }
  sum += hash[num[num.length-1]]
 
 return sum 
}

console.log(romantoInt('CXX'))


// ROTATE
let reverseNums = (nums, start, end) => {
  while (start < end) {
       [nums[start], nums[end]] = [nums[end], nums[start]];
       start++;
       end--;
  }
};

var rotate = function (nums, k) {
  k = k % nums.length;
  reverseNums(nums, 0, nums.length - 1);
  reverseNums(nums, 0, k - 1);
  reverseNums(nums, k, nums.length - 1);
};