     // LEETCODE PRACTISE

const data = [5,4,1,2,3]

// SELF PRODUCT OF ARRAY
function selfProduct(nums){
    let res = [];
    let start = 1;
    
    for(let i=0;i<nums.length;i++){
        res.push(start);
        start = start*nums[i];
        // console.log(start)
    }
    console.log(res,'res')
    let start2 = 1;
    for(let i=nums.length-1 ;i>=0;i--){
        res[i] = start2*res[i]
        start2 = start2*nums[i]
    }

    return res
}
// Expected result [ 24, 30, 120, 60, 40 ]
// console.log(selfProduct(data))

// SELF SUM OF ARRAY
function selfSum (nums){
    let res = []
    let start = 0;
    
    for(let i=0;i<nums.length;i++){
        res.push(start)
        start = start+nums[i]
    }
    let start1 =0
    for(let i=nums.length-1;i>=0;i--){
        res[i] = start1+res[i]
        start1 = start1+nums[i]
    }
    // console.log(res)
    return res
}
//Expected result [ 10, 11, 14, 13, 12 ]
// console.log(selfSum(data))


// CLIMBING STEPS COUNT . THERE ARE TWO WAY TO CLIMB TO TOP 1 STEP AT TIME OR 2 STEP AT TIME
function climbCount (num){

    let dp=[]
     dp[1] = 1
     dp[2] = 2
     for(let i=3;i<num;i++){
        dp[i] = dp[i-1]+dp[i-2]
     }

     return dp[n]
}



// POWER OF TWO

function powertwo(n){
    if(n<1){
        return false
    }
     while(n>1){
         if(n%2!==0){
             return false
         }
         n = n/2
     }
        return true
    }


    // POWER OF TWO
    function powerOfTwo(n){
             
        return (n&(n-1)) === 0
    }
    console.log(powerOfTwo(16))


    // BINARY SEARCH RECURIVE
    function binaryrecursive(arr,target){
        return searchBinary(arr,target,0,arr.length-1)
    }
    
    function searchBinary(arr,target,left,rigth){
      
        if(left > rigth){
            return -1
        }
          let mid = Math.floor((left+rigth)/2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid]>target){
           return searchBinary(arr,target,left,mid-1)
        }else{
           return searchBinary(arr,target,mid+1,rigth)
        }
        console.log(mid)
    }
    console.log(binaryrecursive(arr,90))



 // ALTERNATIVE OF SPLICE METHOD TO ADD ITEM AT GIVEN INDEX

    // const data = [1,2,3,4,5,6]
function update(arr,index,val){
    
    arr.length = arr.length+1
    console.log(arr)
    for(let i= arr.length-1;i>index;i--){
        arr[i] = arr[i-1]
    }
    arr[index] = val
    return arr
}
console.log(update(data,2,10))

//SUM OF TRIPLET EQUAL TO TARGET 

function findTriplets(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    const triplets = [];

    for (let i = 0; i < nums.length - 2; i++) {
       
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicates

            let left = i + 1;
            let right = nums.length - 1;
            const target = 0 - nums[i];
     
            while (left < right) {
                const sum = nums[left] + nums[right];
         
                if (sum === target) {
                    triplets.push([nums[i], nums[left], nums[right]]);
                    // console.log(nums[left], nums[left + 1])
                    while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                    while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return triplets;
}

// Example usage:
const nums = [-1, 0, 1, 2, -1, -4];
const uniqueTriplets = findTriplets(nums);
console.log(uniqueTriplets);