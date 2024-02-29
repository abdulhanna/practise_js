const data = [8,20,-2,4,-6]

function mergeSort(arr){
    // console.log(arr)
    if(arr.length <2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
     
    //  Sort()
     return merge(mergeSort(left),mergeSort(right))
}

function merge (leftArr,rightArr){
    let sorted = []
    // console.log(leftArr,rightArr)
    while(leftArr.length && rightArr.length){
       if(leftArr[0] <= rightArr[0]){
           sorted.push(leftArr.shift())
       }  else{
           sorted.push(rightArr.shift())
       } 
    }
    return [...sorted,...leftArr,...rightArr]
    
}


function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    console.log(arr,'arr')
    
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(data))

console.log(mergeSort(data))