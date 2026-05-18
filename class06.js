// Q1 : left rotation by one element ( [1,2,3,4,5] -> [2,3,4,5,1] )
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let copy = arr[0]; // 11
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy; // 11
// console.log(arr); // [22, 33, 44, 55, 66, 77, 88, 99, 11]

// Q2 : right rotation by one element ( [1,2,3,4,5] -> [5,1,2,3,4] )
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let copy = arr[arr.length - 1]; // 99
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy; // 99
// console.log(arr); // [99, 11, 22, 33, 44, 55, 66, 77, 88]

// Q3 : left rotation by k element ( [1,2,3,4,5] --2--> [3,4,5,1,2] )
// let prompt = Number(prompt("Enter a number which do you want to rotation : "));
// let k = Number(prompt("Enter k value : "));
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//   let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr); // [33, 44, 55, 66, 77, 88, 99, 11, 22]
// -------- OR --------
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter k value : "));
// k = k % arr.length;
// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp); // [33, 44, 55, 66, 77, 88, 99, 11, 22]
// -------- OR --------
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let k = Number(prompt("Enter k value : "));
// k = k % arr.length;
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// reverse(0, arr.length - 1);
// console.log(arr); // [33, 44, 55, 66, 77, 88, 99, 11, 22]
// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// Q4 : right rotation by k element ( [11, 22, 33, 44, 55, 66, 77, 88, 99] --4--> [66, 77, 88, 99, 11, 22, 33, 44, 55] )
// let k = Number(prompt("Enter k value : "));
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// k = k % arr.length;
// for (let j = 0; j < k; j++) {
//   let copy = arr[arr.length - 1];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = copy;
// }
// console.log(arr); // [66, 77, 88, 99, 11, 22, 33, 44, 55]
// -------- OR --------
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter k value : "));
// k = k % arr.length;
// for (let i = 0; i < arr.length; i++) {
//   temp[(i + k) % arr.length] = arr[i];
// }
// console.log(temp);
// -------- OR --------
// let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// let k = Number(prompt("Enter k value : "));
// k = k % arr.length;
// reverse(0, arr.length - 1);
// reverse(0, k - 1);
// reverse(k, arr.length - 1);
// console.log(arr);
// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// Q5 : remove duplicates from the sorted array ( [11, 22, 22, 33, 33, 44, 44, 44, 55, 55, 66, 77, 88, 88, 99] -> [11, 22, 33, 44, 55, 66, 77, 88, 99])
// let arr = [11, 22, 22, 33, 33, 44, 44, 44, 55, 55, 66, 77, 88, 88, 99];
// let i = 0,
//   j = 1;
// while (j < arr.length) {
//   if (arr[i] === arr[j]) {
//     j++;
//   } else {
//     i++;
//     arr[i] = arr[j];
//     j++;
//   }
// }
// console.log(arr); //
// var removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] != nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j;
// };

// Q6 : merge sorted array ( [2, 5, 6] + [1, 3, 4, 8] ---> [1, 2, 3, 4, 5, 6, 8] )
// let arr1 = [2, 5, 6];
// let arr2 = [1, 3, 4, 8];
// let temp = new Array(arr1.length + arr2.length);
// let i = j = k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     temp[k++] = arr1[i++];
//     // temp[k] = arr1[i];
//     // i++;
//     // k++;
//   } else {
//     temp[k++] = arr2[j++];
//     // temp[k] = arr2[j];
//     // j++;
//     // k++;
//   }
// }
// while (i < arr1.length) {
//   temp[k++] = arr1[i++];
// }
// while (j < arr2.length) {
//   temp[k++] = arr2[j++];
// }
// console.log(temp); // [1, 2, 3, 4, 5, 6, 8]

// Q7 : best time to buy and sell stocks (LeetCode Problem No. 121)
// let prices = [7, 1, 5, 3, 6, 4];
// let maxProfit = 0;
// let min = prices[0];
// let buyDay = 0,
//   sellDay = 0;
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < min) {
//     min = prices[i];
//     buyDay = i + 1;
//   }
//   if (prices[i] - min > maxProfit) {
//     maxProfit = prices[i] - min;
//     sellDay = i + 1;
//   }
// }
// console.log(`minimum value is : ${min}`);
// console.log(`maximum profit is : ${maxProfit}`);
// console.log(`buy at the ${min} rupees and profit is ${maxProfit}`);
// console.log(`buy on : ${buyDay}th day and sell on : ${sellDay}th day`);
// ----------- OR -----------
// let prices = [7, 1, 5, 3, 6, 4];
// let maxProfit = 0;
// let min = prices[0];
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] < min) min = prices[i];
//   let profit = prices[i] - min;
//   maxProfit = Math.max(maxProfit, profit);
// }
// console.log(`minimum value is : ${min}`);
// console.log(`maximum profit is : ${maxProfit}`);

// Q8 : best time to buy and sell stocks II (isme hum chahe jitni baar bhi khareed bech sakte hai but do baar lagatar khareed ya bech nahi sakte) (LeetCode Problem No. 122)
// let prices = [7, 1, 5, 3, 6, 4];
// let profit = 0;
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] > prices[i - 1]) {
//     profit += prices[i] - prices[i - 1];
//   }
// }
// console.log(`the net profit is : ${profit}`);

// Q9 : sort the color (LeetCode Problem No. 75)
// let color = [1, 0, 2, 0, 1, 0, 0, 2, 1, 2, 1, 0, 1, 2];
// let low = 0;
// let mid = 0;
// let high = color.length - 1;
// while (mid <= high) {
//   if (color[mid] === 0) {
//     [color[low], color[mid]] = [color[mid], color[low]];
//     low++;
//     mid++;
//   } else if (color[mid] === 1) {
//     mid++;
//   } else {
//     [color[mid], color[high]] = [color[high], color[mid]];
//     high--;
//   }
// }
// console.log(color);

// Q10 : maximum subarray / kadane's algorithm (LeetCode Problem No. 53)
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let sum = 0;
// let maxSum = -Infinity;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
//   if (sum > maxSum) {
//     maxSum = sum;
//   }
//   if (sum < 0) {
//     sum = 0;
//   }
// }
// console.log(maxSum);

// Q11 : maximum product subarray / kadane's algorithm (LeetCode Problem No. 152)

// Q12 : majority element / moore's voting algorithm (LeetCode Problem No. 169)
let nums = [2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 2, 2];
let ans = nums[0];
let count = 1;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] === ans) {
    count++;
  } else {
    count--;
  }
  if (count === 0) {
    ans = nums[i];
    count = 1;
  }
}
console.log(ans);

// 
