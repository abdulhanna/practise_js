// SPREAD OPERATOR VS REST OPERATOR
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
  }
  
  // Invoke myBio function while passing five arguments to its parameters:
  console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"))
  
  // The invocation above will return:
  ["CodeSweetly", "Web Developer", "Male"]


  // Define a function with three parameters:
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
  // Use spread to expand an array’s items into individual arguments:
  myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);
  
  // The invocation above will return:
//   “Oluwatobi Sofela runs CodeSweetly”