

const data = [1,2,3,4,5,6,7]

// SUM OF TWO ITEM EQUAL TO TARGET
function filter(arr,target){
    let res = []
    let pair = {}
    
    for(const num of arr){
        const complement =  target - num
        if(pair[complement] && pair[complement] > 0){
              res.push([num,complement])
              pair[complement]--
        }
        // console.log(num)
        pair[num] = (pair[num] || 0) +1
    }
    
    return res
}

console.log(filter(data,5))


//PATTERN OF STAR

function pattern(arr){
    let maxNum = Math.max(...arr)
    
    for(let i=maxNum;i>0;i--){
        let pat = "";
        for(let j=0;j<arr.length;j++){
        //   console.log(arr[j],i,arr[j]<i) 
           if(arr[j]<i){
               pat += " ";
           }else{
               pat += "*"
           }
        }
        console.log(pat)
    }
    return arr,maxNum
}
*
*
* *
** *
** *
****
*****
console.log(pattern(data))



//MERGE TWO SORTED ARRAY LEETCODE

function addUp(arr,arr1,n,m){
    let i =0, j =0,k = 0
    let res = Array(n+m).fill(0)
     
    while(i<n && j<m){
      if(arr[i]<arr1[j]){
        res[k++] = arr[i++]
      }else{
        res[k++] = arr1[j++]
      }
    }

    while(i<n){
      res[k++] = arr[i++]
    }
    while(j<m){
      res[k++] = arr1[j++]
    }
    console.log(i,j,k,'check')
      return res
  }

  console.log(addUp(data,data1,data.length,data1.length))


  // MAXIMUM SUBARRAY
  let nums = [-2,1,-3,4,-1,2,1,-5,4]
  function MaximumSubArrray(arr){
   let cur = arr[0]
   let sumArr = arr[0]

   for(let i=1;i<arr.length;i++){
       //i=1 cur=-2,sum = -2
       //i=2 cur = -1 , sum = -1
          cur = max(arr[i],cur+arr[i])
       
          sumArr = max(sumArr,cur)
        
          console.log(cur,sumArr,arr[i],'second')
   }

   function max(a,b){
       if(a>b){
        return a
       }else{
        return b
       }
   }
    return sumArr
  }

  console.log(MaximumSubArrray(nums))