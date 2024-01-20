// PART 1***********************************
// let str = 
// "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// let rows=str.split("\n")
// console.log(rows);
// END PART 1*******************************

//PART 2************************************
// let str =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";

// // Split the string into rows based on newline character
// let rows = str.split("\n");

// // Initialize the 2D array
// let arr = [];

// // Iterate through each row
// for (let i = 0; i < rows.length; i++) {
//   // Split each row into columns based on comma
//   let columns = rows[i].split(",");
  
//   // Push the columns into the 2D array
//   arr.push(columns);
// }
// console.log("The new array is:", arr);
// END PART 2**************************************

// PART 3******************************************
let newArr = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctors Assistant", "26"]
];

let header= newArr[0];
let rows=newArr.slice(1);
let result=[];

for (let x=0; x< rows.length; x++){
  let row=rows[x];
  let obj ={};
  for(let y=0; y<header.length; y++){
     obj[header[y]]=row[y];
  }
   result.push(obj);
  }
console.log("The new object is;",result);
// END PART 3**************************************