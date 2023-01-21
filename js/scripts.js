function neighborhoodMessage(num, messageA){
  const indexedArray = [];
  if(num==="" || num===undefined || num===null || num===Symbol){ 
    return 0;
  }
  // Getting the string as a parameter
  // and typecasting it into an integer
  for (let i = 0; i <= num; i++) {
    let myFunc = num => Number(num); 
    const intArr = Array.from(String(i), myFunc); 
    // Print the result array
    if(intArr.includes(3)){
    indexedArray.push(messageA);
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
  const messageA = "Won't you be my neighbor?";
  const messageB = "Boop!";
  neighborhoodMessage(input, messageA);
  const output = neighborhoodMessage(input, messageA);

  document.querySelector("span#output").innerText = output;

  // clear previous answers display
  setTimeout(() => {
    document.getElementById("output").innerText = null;
  }, 3750);
}

window.addEventListener("load", ()=>{
  const form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
});