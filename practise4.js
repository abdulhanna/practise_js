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


   //GROUP BY CATEGORY
   const items =[
    {id:1,name :"Apple",category:"Fruit"},
    {id:2,name :"Banana",category:"Fruit"},
    {id:3,name :"Carrot",category:"Vegetable"},
    {id:4,name :"Strawberry",category:"Fruit"},
    {id:5,name :"Broccoli",category:"Vegetable"},
    {id:6,name :"Tomato",category:"Vegetable"},
    {id:7,name :"Chicken",category:"Meat"},
    {id:8,name :"Beef",category:"Meat"}
                
    ]
    
    const groupBy = (items,key)=>{
        return items.reduce((result,item)=>{
            if(!result[item[key]]){
                result[item[key]] = []
            }
            
            result[item[key]].push(item)
            
            return result
        },{})
    }
    console.log(groupBy(items,'category'))