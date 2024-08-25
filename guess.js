//GUESS THE OUTPUT
var x = 23;
(function(){
   var x = 43;
   (function random(){
     x++;
     console.log(x)
     var x = 21;
   })()
 
})()


//GUESS
function x() {
  for (var i = 1; i < 5; i++) {
      setTimeout(function () {
          console.log(i);
  
      }, i * 1000);
  }
  console.log('Namaste JavaScript');
}

x();


// GUESS 1
function x() {
  for (var i = 1; i <= 5; i++) {
      function close(x) {
          setTimeout(function () {
              console.log(x); //
          }, x * 1000);
      } 
      close(i);
  }
}

x();


// OBECT SETPROTOTYPEOF PROPERTY 
let person = {
  name:"jack",
  age:20
}

let student = {
  id:1,
  address:'B-10 sector 59'
}

Object.setPrototypeOf(student,person)
console.log(student.name)