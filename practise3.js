// SUM OF TWO ITEM EQUAL TO TARGET

const data = [1,2,3,4,5,6,7]


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