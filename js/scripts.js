/*

[UI/UX]:Design the application so that a user is able to enter a new number and see new results over and over again.
Return a list of values from 0 to the user's inputter number. 
[HTML]:Printing each element in the list to the webpage. 

*/

function neighborhoodMessage(num){
  const indexedArray = [];
  if(num==="" || num===undefined || num===null || num===Symbol){ 
    return 0;
  }
  // Getting the string as a parameter
  // and typecasting it into an integer
  for (let i = 0; i <= num; i++) {
    let myFunc = num => Number(num); 
    const intArr = Array.from(String(i), myFunc);  // eachIndexOfArray
    // Print the result array
    // console.log(intArr);
    if(intArr.includes(3)){
    indexedArray.push("Won't you be my neighbor?");
  } else if(intArr.includes(2)){
    indexedArray.push("Boop!");
  } else if(intArr.includes(1)){
    indexedArray.push("Beep!");
  }  else indexedArray.push(i);
  }
  console.log("IndexArr: ", indexedArray);
  return indexedArray; 
}

function handleFormSubmit(e){
  e.preventDefault();

  const input = document.querySelector("input#input-id").value;
  console.log("Input: ", input);
  console.log("I am an positive event.");
  
  const output = neighborhoodMessage(input)
  document.querySelector("span#output").innerText = output;
}

window.addEventListener("load", ()=>{
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
});