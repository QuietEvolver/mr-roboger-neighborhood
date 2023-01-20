/*Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

Write tests for your application's business logic.

For numbers that contain a 1,"Beep!" i.e. 109, 11, or 1- "Beep!"
For numbers that contain a 2, "Boop!", i.e. 2, 24, or 2099 -"Boop!"
For numbers that contain a 3, "Won't you be my neighbor?" ie. 39, 3, or 8763 = "Won't you be my neighbor?"

Additionally,:

Solve w loop && array && branching logic.

[UI/UX]:Design the application so that a user is able to enter a new number and see new results over and over again.
Return a list of values from 0 to the user's inputter number. 
[HTML]:Printing each element in the list to the webpage. 

*/

// Testing for first directive: For numbers that contain a 1,"Beep!" i.e. 109, 11, or 1- "Beep!"

//test1:
// function neighborhoodMessage(num){
//   return 1;
// }

//test2-3: 
// function neighborhoodMessage(num){
//   const indexedArray = [];
//   for (let i = 0; i <= num; i++) {
//     if (num.length === 0){
//       return 0;
//     } else indexedArray.push(i);
//   }
//   return indexedArray; 
// }

// test4:
// function neighborhoodMessage(num){
//   const indexedArray = []; 
//   for (let i = 0; i <= num; i++) {
//     if([i].includes(1)){
//       indexedArray.push("Beep!");
//     } else indexedArray.push(i);
//   }
//   console.log("IndexArr: ", indexedArray);
//   return indexedArray; 
// }

// test5: 
// function neighborhoodMessage(num){
  
//   const indexedArray = [];// Getting the string as a parameter
//   // and typecasting it into an integer
  
//   for (let i = 0; i <= num; i++) {
//     let myFunc = num => Number(num);
//     const intArr = Array.from(String(i), myFunc);  // eachIndexOfArray
//     // Print the result array
//     console.log(intArr);
//     if(intArr.includes(1)){
//       indexedArray.push("Beep!");
//     }else indexedArray.push(i);
//   }
//   console.log("IndexArr: ", indexedArray);
//   return indexedArray; 
// }

// test6:
// function neighborhoodMessage(num){
//   const indexedArray = [];// Getting the string as a parameter
//   // and typecasting it into an integer
  
//   for (let i = 0; i <= num; i++) {
//     let myFunc = num => Number(num);
//     const intArr = Array.from(String(i), myFunc);  // eachIndexOfArray
//     // Print the result array
//     console.log(intArr);
//     if(intArr.includes(1)){
//       indexedArray.push("Beep!");
//     } else if(intArr.includes(2)){
//       indexedArray.push("Boop!");
//     } else indexedArray.push(i);
//   }
//   console.log("IndexArr: ", indexedArray);
//   return indexedArray; 
// }

// test7: 
// function neighborhoodMessage(num){
//   const indexedArray = [];// Getting the string as a parameter
//   // and typecasting it into an integer
  
//   for (let i = 0; i <= num; i++) {
//     let myFunc = num => Number(num);
//     const intArr = Array.from(String(i), myFunc);  // eachIndexOfArray
//     // Print the result array
//     console.log(intArr);
//     if(intArr.includes(1)){
//       indexedArray.push("Beep!");
//     } else if(intArr.includes(2)){
//       indexedArray.push("Boop!");
//     } else if(intArr.includes(3)){
//       indexedArray.push("Won't you be my neighbor?");
//     } else indexedArray.push(i);
//   }
//   console.log("IndexArr: ", indexedArray);
//   return indexedArray; 
// }

// test8: //|| num==BigInt
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
    console.log(intArr);
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