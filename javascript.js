//PROMISE CHAINING
let promise = new Promise((resolve, reject) => {
    resolve("Hello JavaScript");
    // reject('cancel')
    });
    
    
    promise.then((result)=>{
        console.log(result)
        
        return new Promise((resolve,reject)=>{
            if(!result){
                 resolve(`Awesome ${result}`) 
            }else{
                reject('reject')
            }
          
        })
    }).then((result2)=>{
        console.log(result2,'result2')
    }).catch((err)=>{
        console.log(err,'err')
    })

//second type promise chaining
    new Promise(function(resolve, reject) {

        //   setTimeout(() => resolve(1), 1000);
          reject('cancel')
        
        }).then(function(result) {
        
          console.log(result); // 1
        
          return new Promise((resolve, reject) => { // (*)
            setTimeout(() => resolve(result * 2), 1000);
          });
        
        }).then(function(result) { // (**)
        
          console.log(result); // 2
        
          return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
          });
        
        }).then(function(result) {
        
          console.log(result); // 4
        
        }).catch((err)=>{
            console.log(err,'err')
        });



//DEBOUNCING 

function debounce(fun,delay){

}

const debouncedSearchHandler = debounce(searchHandler,500);
 // Add an event listener to the search bar input
searchBar.addEventListener("input", (event) => {
    // Get the value of the input
    const query = event.target.value;
    // Call the debounced search handler with the query
    debouncedSearchHandler(query);
});
