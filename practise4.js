//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function search(arr,target){
    let left = 0
    let right = arr.length-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2)

        if(arr[mid] === target){
          return mid
        }else if(arr[mid]>target){
          right = mid-1
        }else{
          left = mid+1
        }
    }
     
    return left

  }

   console.log(search([1,2,3,5,6],7));