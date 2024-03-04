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


// USEMEMO V/S MEMO

React.memo() is a higher-order component that we can use to wrap components that we do not want to re-render unless props within them change
useMemo() is a React Hook that we can use to wrap functions within a component. We can use this to ensure that the values within that function are re-computed only when one of its dependencies change