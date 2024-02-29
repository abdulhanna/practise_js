function pallindrom(str){
    let flag = false
    for(let i=0,j=str.length-1; i<j;i++,j--){
        
        if(str[i] ==str[j]){
            flag = true
        }else{
          return  flag = false
        }
    }
    return flag
}

pallindrom('nitin')

// divide string by space after 4 letter
function divideStr(str,n){
    let word = "" 
       for(let i=0;i<str.length;i++){
           if( i>0 && i%4 ==0){
               word += " ";
               console.log(word)
           }
           word += str[i]
          
       }
       return word
   }

   divideStr('aqwertghbvsvbefv',4)


// Find prime number between range
   function primeRange(start,end){
    let range = []
    for(let i=start;i<=end;i++){
       
        if(isPrime(i)){
            range.push(i)
        }
    }
    return range
}

function isPrime(n){
    for(let i=2; i<= Math.sqrt(n); i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

primeRange(1,20)


//FABINACI SERIES 


function Fabi (n){
    if(n <= 0){
        return []
    }else if(n===1){
      return [0,1]
    }
    else{
        let ac = [0,1]
        let prev
        for(let i=2;i<= n;i++){
            
            console.log(i,ac[i-1])
            let sum = ac[i-1] + ac[i-2]
            ac.push(sum)
        //  let sum =   ac[i-1] + ac[i] 
        //  console.log(sum)
        }
        
        return ac
    }
    
}

function fibonacci(n) { 
    if (n <= 1) { 
        return n; 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 

console.log(Fabi(8))