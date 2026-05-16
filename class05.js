// let prompt = require("prompt-sync")();

// let arr = [];
// console.log(arr.length); // 0
// console.log(arr); // []
// arr.push(10);
// arr.push(20);
// arr.push(30);
// console.log(arr[0]); // 10
// console.log(arr[1]); // 20
// console.log(arr[2]); // 30
// console.log(arr); // [10, 20, 30]
// console.log(arr.length); // 3
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[7] = 80;
// console.log(arr); // [ 10, 20, 30, <4 empty items>, 80 ]
// console.log(arr.length); // 8

// let arr = Array(10)
// console.log(arr.length);  // 10
// console.log(arr);  // [ <10 empty items> ]
// arr.push(10);
// arr.push(20);
// arr.push(30);
// console.log(arr[0]); // undefined
// console.log(arr[1]); // undefined
// console.log(arr[2]); // undefined
// console.log(arr[10]); // 10
// console.log(arr[11]); // 20
// console.log(arr[12]); // 30
// console.log(arr);  // [ <10 empty items>, 10, 20, 30 ]
// console.log(arr.length);   // 13

// let arr = Array();
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr.push(40);
// arr.push(50);
// arr.push(60);
// arr.push(70, 80, 90, 100, "Arshad", true);
// console.log(arr); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "Arshad", true]
// console.log(arr.length); // 12

// let arr = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "Arshad", true);
// console.log(arr); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "Arshad", true]

// Q1 : store multiple user input in array
// let arr = [];
// // arr[0] = Number(prompt("Enter a number : "));
// let length = Number(prompt("Enter a length of array : ")); // 4
// arr.length = length; // 4
// console.log(arr.length); // 4
// console.log(length); // 4
// console.log(arr); // [ <4 empty items> ]
// for (var i = 0; i < length; i++) {
//   arr[i] = Number(prompt(`Enter a number at index ${i} : `));
//   console.log(`${arr[i]} is the value at index arr[${i}]`);
// }
// console.log(arr.length); // 4
// console.log(arr); // [ 10, 20, 30, 40 ]

// Q2 : sum of n element in array
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum); // 150

// Q3 : maximum value in array
// let arr = [78, 45, 92, 66, 34, 81, 55, 73, 90, 49];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max); // 92

// Q4 : minimum value in array
// let arr = [78, 45, 92, 66, 34, 81, 55, 73, 90, 49];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min); // 34

// Q5 : 2nd max value in array
// let arr = [78, 45, 92, 66, 34, 81, 55, 73, 90, 49];
// let max1 = arr[0];
// let max2 = arr[1];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max1 = arr[i];
//   }
//   if (arr[i] > max2 && arr[i] < max1) {
//     max2 = arr[i];
//   }
// }
// console.log(max1); // 92
// console.log(max2); // 90
// ------ OR --------
// let arr = [78, 45, 92, 66, 34, 81, 55, 73, 90, 49];
// let max1 = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] > max2) {
//     max2 = arr[i];
//   }
// }
// console.log(max1); // 92
// console.log(max2); // 90

// Q6 : 2nd max value in array with duplicates value
// let arr = [78, 92, 71, 83, 71, 65, 92, 89, 56, 74];
// let max1 = Math.max(arr[0], arr[1]);
// let max2 = Math.min(arr[0], arr[1]);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] > max2 && arr[i] != max1) {
//     max2 = arr[i];
//   }
// }
// console.log(max1); // 92
// console.log(max2); // 89

// Q7 : 2nd minimum value in array
// let arr = [78, 45, 92, 66, 34, 81, 55, 73, 90, 49];
// let min1 = arr[0];
// let min2 = arr[1];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min1) {
//     min1 = arr[i];
//   }
//   if (arr[i] < min2 && arr[i] < min1) {
//     min2 = arr[i];
//   }
// }
// console.log(min1); // 34
// console.log(min2); // 45
// ------ OR --------
// let arr = [78, 45, 92, 66, 34, 81, 55, 73, 90, 49];
// let min1 = Math.max(arr[0], arr[1]);
// let min2 = Math.min(arr[0], arr[1]);
// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] < min1) {
//     min2 = min1;
//     min1 = arr[i];
//   } else if (arr[i] < min2) {
//     min2 = arr[i];
//   }
// }
// console.log(min1); // 34
// console.log(min2); // 45

// Q8 : reverse the array
// let arr = [78, 92, 56, 83, 71, 65, 56, 89, 56, 74];
// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(temp);

// Q9 : reverse the array without using second variable / array
// let arr = [78, 92, 56, 83, 71, 65, 56, 89, 56, 74];
// let i = 0,
//   j = arr.length - 1;
// while (i != j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);
// console.log(i);
// console.log(j);

// Q10 : moving all zero (0) into left side and all one (1) into right side ( [1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1] -> [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] )
// let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1];
// let i = 0,
//   j = 0;
// console.log(i, j);
// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr); // [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
// console.log(i, j);

// Q11 : moving all negative number into left side and positive number into right side ( [-9, 7, 1, -2, 5, -1, -4, 2, -6, 3, 9, -7, 8, -8, 4] -> [-9, -2, -1, -4, -6, -7, -8, 2, 5, 3, 9, 1, 8, 7, 4] )
// let arr = [-9, 7, 1, -2, 5, -1, -4, 2, -6, 3, 9, -7, 8, -8, 4];
// let i = 0,
//   j = 0;
// console.log(i, j, k);
// while (i < arr.length) {
//   if (arr[i] < 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr); // [-9, -2, -1, -4, -6, -7, -8, 2, 5, 3, 9, 1, 8, 7, 4]
// console.log(i, j);

// Q12 : moving all negative number into left side and positive number into right side ( [-9, 7, 1, -2, 5, -1, -4, 2, -6, 3, 9, -7, 8, -8, 4] -> [-9, -8, -7, -6, -4, -2, -1, 1, 2, 3, 4, 5, 7, 8, 9] )
// let arr = [-9, 7, 1, -2, 5, -1, -4, 2, -6, 3, 9, -7, 8, -8, 4];
// let i = 0,
//   j = 0,
//   k = 0;
// console.log(i, j, k);
// while (i < arr.length) {
//   if (arr[i] < 0) {
//     let temp1 = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp1;
//     if(arr[k] < arr[j]){
//       let temp2 = arr[j];
//       arr[j] = arr[k];
//       arr[k] = temp2;
//       k++;
//     }
//     j++;
//   }
//   i++;
// }
// console.log(arr); // [-9, -2, -1, -4, -6, -7, -8, 2, 5, 3, 9, 1, 8, 7, 4]
// console.log(i, j, k);
// ---------- OR ----------
// j (ya low): Yeh negative numbers ki boundary banayega. j se pehle sab negative honge.
// i (ya mid): Yeh array ko traverse karega aur har element ko check karega.
// k (ya high): Yeh positive numbers ki boundary banayega. k ke baad sab positive honge.
// 🧠 Logic
// Hum i pointer se array ko iterate karenge jab tak woh k se mil nahi jaata (while (i <= k)).
// Case 1: Agar arr[i] negative milta hai (< 0):
// Iska matlab yeh j ki boundary par hona chahiye.
// Hum arr[i] aur arr[j] ko swap karenge.
// Kyunki j par ab ek negative number aa gaya hai, hum j ko aage badhayenge (j++).
// Kyunki i waala element check ho chuka hai, hum i ko bhi aage badhayenge (i++).
// Case 2: Agar arr[i] positive milta hai (>= 0):
// Iska matlab yeh k ki boundary par hona chahiye.
// Hum arr[i] aur arr[k] ko swap karenge.
// Kyunki k par ab ek positive number aa gaya hai, hum k ko peeche karenge (k--).
// Important: Hum i ko aage nahi badhayenge. Kyun? Kyunki k se jo naya number i ki jagah par aaya hai, woh abhi tak check nahi hua hai (woh bhi negative ho sakta hai).
// let arr = [-9, 7, 1, -2, 5, -1, -4, 2, -6, 3, 9, -7, 8, -8, 4];
// j -> Negative numbers ki boundary
// i -> Current element (iterator)
// k -> Positive numbers ki boundary
// let j = 0;
// let i = 0;
// let k = arr.length - 1;
// console.log("Original:", arr);
// while (i <= k) {
//   if (arr[i] < 0) {
//     // Case 1: Negative number mila
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++; // 'i' ko aage badhao
//     j++; // 'j' boundary ko aage badhao
//   } else {
//     // Case 2: Positive number mila (0 ko bhi positive maan rahe hain)
//     let temp = arr[i];
//     arr[i] = arr[k];
//     arr[k] = temp;
//     k--; // 'k' boundary ko peeche karo
//     // 'i' ko YAHAN NAHI badhana hai
//   }
// }
// console.log("Partitioned:", arr);
