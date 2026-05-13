// Q1 : valid voter
// let age = Number(prompt("Enter your age : "));
// 1st Method :
// if (age >= 18) {
//   document.writeln("You are eligible to vote");
//   console.log("You are eligible to vote");
// } else if (age < 18 && age >= 0) {
//   document.writeln("You are not eligible to vote");
//   console.log("You are not eligible to vote");
// } else {
//   document.writeln("Invalid Input !");
//   console.log("Invalid Input !");
// }
// 2nd Method :
// if (isNaN(age)) {
//   document.writeln("Invalid Input !");
//   console.log("Invalid Input !");
// } else if (age >= 18) {
//   document.writeln("You are eligible to vote");
//   console.log("You are eligible to vote");
// } else {
//   document.writeln("You are not eligible to vote");
//   console.log("You are not eligible to vote");
// }

// Q2 : The key idea is that NaN doesn't represent one specific value; it represents the concept of an undefined numerical result.
// console.log(NaN === NaN); // false
// console.log(NaN !== NaN); // true
// console.log(NaN == NaN); // false
// console.log(NaN != NaN); // true
// console.log(isNaN(NaN)); // true
// console.log(isNaN(null)); // false

// Q3 : shop discount
// let amount = Number(prompt("Enter the amount : "));
// if (isNaN(amount)) {
//   document.writeln("Invalid Input !");
//   console.log("Invalid Input !");
// } else {
//   let discountPercent = 0;
//   if (amount > 0 && amount <= 5000) {
//     discountPercent = 2;
//   } else if (amount > 5000 && amount <= 7000) {
//     discountPercent = 5;
//   } else if (amount > 7000 && amount <= 9000) {
//     discountPercent = 10;
//   } else {
//     discountPercent = 20;
//   }
//   let discountAmount = Math.floor((amount * discountPercent) / 100);
//   let discountedAmount = amount - discountAmount;
//   document.writeln(`Amount : ${amount} <br>`);
//   document.writeln(`Discount Percent : ${discountPercent}% <br>`);
//   document.writeln(`Discount Amount : ${discountAmount} <br>`);
//   document.writeln(`Discounted Amount : ${discountedAmount} <br>`);
//   console.log(`Amount : ${amount}`);
//   console.log(`Discount Percent : ${discountPercent}%`);
//   console.log(`Discount Amount : ${discountAmount}`);
//   console.log(`Discounted Amount : ${discountedAmount}`);
// }

// Q4 : bijli bill
/*
    units          |  rate(rupees per unit)
    ---------------------------------------
    up to 100      |    4.2
    101-200        |    6.1
    201-400        |     8
    more than 400  |    12.4

    example 1 :
    total units = 700 units

    700 - 400 = 300 units
    300 units cost = 300 * 12.4 = 3720 rupees
    amount = 3720 rupees
    remained units = 700 - 300 = 400 units
    
    400 - 200 = 200 units
    200 units cost = 200 * 8 = 1600 rupees
    amount = 3720 + 1600 = 5320 rupees
    remained units = 400 - 200 = 200 units

    200 - 100 = 100 units
    100 units cost = 100 * 6.1 = 610 rupees
    amount = 5320 + 610 = 5930 rupees
    remained units = 200 - 100 = 100 units

    100 - 100 = 0 units
    100 units cost = 100 * 4.2 = 420 rupees
    amount = 5930 + 420 = 6350 rupees
    remained units = 100 - 100 = 0 units

    ----------------------------------------

    example 2 :
    total units = 900 units

    900 - 400 = 500 units
    500 units cost = 500 * 12.4 = 6200 rupees
    amount = 6200 rupees
    remained units = 900 - 500 = 400 units
    
    400 - 200 = 200 units
    200 units cost = 200 * 8 = 1600 rupees
    amount = 6200 + 1600 = 7800 rupees
    remained units = 400 - 200 = 200 units

    200 - 100 = 100 units
    100 units cost = 100 * 6.1 = 610 rupees
    amount = 7800 + 610 = 8410 rupees
    remained units = 200 - 100 = 100 units

    100 - 100 = 0 units
    100 units cost = 100 * 4.2 = 420 rupees
    amount = 8410 + 420 = 8830 rupees
    remained units = 100 - 100 = 0 units

    ----------------------------------------

    example 3 :
    total units = 540 units

    540 - 400 = 140 units
    140 units cost = 140 * 12.4 = 1736 rupees
    amount = 1736 rupees
    remained units = 540 - 140 = 400 units
    
    400 - 200 = 200 units
    200 units cost = 200 * 8 = 1600 rupees
    amount = 1736 + 1600 = 3336 rupees
    remained units = 400 - 200 = 200 units

    200 - 100 = 100 units
    100 units cost = 100 * 6.1 = 610 rupees
    amount = 3336 + 610 = 3946 rupees
    remained units = 200 - 100 = 100 units

    100 - 100 = 0 units
    100 units cost = 100 * 4.2 = 420 rupees
    amount = 3946 + 420 = 4366 rupees
    remained units = 100 - 100 = 0 units
*/
// let units = Number(prompt("Enter the units : ")); // 700
// if (isNaN(units)) {
//   console.log("Invalid Input !");
// } else {
//   let rate = 0;
//   let amount = 0;
//   if (units > 400) {
//     rate = 12.4;
//     amount = ((units - 400) * rate); // units = 700 - 400 = 300 * 12.4 = 3720 , amount = 3720
//     units = 400;
//   } // remainedUnits = 700 - 300 = 400
//   if (units > 200 && units <= 400) {
//     rate = 8;
//     // amount = amount + ((units - 200) * rate); // units = 400 - 200 = 200 * 8 = 1600 , amount = 3720 + 1600 = 5320
//     amount += ((units - 200) * rate); // units = 400 - 200 = 200 * 8 = 1600 , amount = 3720 + 1600 = 5320
//     units = 200;
//   } // remainedUnits = 400 - 200 = 200
//   if (units > 100 && units <= 200) {
//     rate = 6.1;
//     // amount = amount + ((units - 100) * rate); // units = 200 - 100 = 100 * 6.1 = 610 , amount = 5320 + 610 = 5930
//     amount += ((units - 100) * rate); // units = 200 - 100 = 100 * 6.1 = 610 , amount = 5320 + 610 = 5930
//     units = 100;
//   } // remainedUnits = 200 - 100 = 100
//   if (units > 0 && units <= 100) {
//     rate = 4.2;
//     // amount = amount + (units * rate); // units = 100 * 4.2 = 420 , amount = 5930 + 420 = 6350
//     amount += (units * rate); // units = 100 * 4.2 = 420 , amount = 5930 + 420 = 6350
//   } // remainedUnits = 100 - 100 = 0
//   let totalCost = amount;
//   console.log(`Units : ${units}`);
//   console.log(`Total Cost : ${totalCost}`);
//   alert(`Units : ${units} \nTotal Cost : ${totalCost}`);
// }

// ------------- OR -------------

// let units = Number(prompt("Enter the units : ")); // 700
// let rate = 0;
// let amount = 0;
// if (units > 400) {
//   rate = 12.4;
//   amount = (units - 400) * rate; // units = 700 - 400 = 300 * 12.4 = 3720 , amount = 3720
//   units = 400;
// } // remainedUnits = 700 - 300 = 400
// if (units > 200 && units <= 400) {
//   rate = 8;
//   // amount = amount + ((units - 200) * rate); // units = 400 - 200 = 200 * 8 = 1600 , amount = 3720 + 1600 = 5320
//   amount += (units - 200) * rate; // units = 400 - 200 = 200 * 8 = 1600 , amount = 3720 + 1600 = 5320
//   units = 200;
// } // remainedUnits = 400 - 200 = 200
// if (units > 100 && units <= 200) {
//   rate = 6.1;
//   // amount = amount + ((units - 100) * rate); // units = 200 - 100 = 100 * 6.1 = 610 , amount = 5320 + 610 = 5930
//   amount += (units - 100) * rate; // units = 200 - 100 = 100 * 6.1 = 610 , amount = 5320 + 610 = 5930
//   units = 100;
// } // remainedUnits = 200 - 100 = 100
// amount += units * 4.2;
// let totalCost = amount;
// console.log(`Units : ${units}`);
// console.log(`Total Cost : ${totalCost}`);
// alert(`Units : ${units} \nTotal Cost : ${totalCost}`);

// Q5 : INR denomination
/* 
    total 4888 nikalne hai toh 
    --------------------------
    total amount - ((size of note * quantity) = total amount of the notes)
    --------------------------
    4888 - ((500 * 9) = 4500)
    388 - ((200 * 1) = 200)
    188 - ((100 * 1) = 100)
    88 - ((50 * 1) = 50)
    38 - ((20 * 1) = 20)
    18 - ((10 * 1) = 10)
    8 - ((5 * 1) = 5)
    3 - ((2 * 1) = 2)
    1 - ((1 * 1) = 1)
    --------------------------
    total amount = 4888 , total number of notes = 17 , size of notes = [ 500, 200, 100, 50 , 20 , 10 , 5 , 2 , 1 ]
    --------------------------
*/
// let amount = Number(prompt("Enter the amount : ")); // 4823
// if (amount >= 500) {
//   console.log("500 notes : " + Math.floor(amount / 500)); // 9
//   amount = amount % 500; // 388
//   //   amount %= 500; // 388
// }
// if (amount >= 200) {
//   console.log("200 notes : " + Math.floor(amount / 200)); // 2
//   amount = amount % 200; // 188
//   //   amount %= 200; // 188
// }
// if (amount >= 100) {
//   console.log("100 notes : " + Math.floor(amount / 100)); // 1
//   amount = amount % 100; // 88
//   //   amount %= 100; // 88
// }
// if (amount >= 50) {
//   console.log("50 notes : " + Math.floor(amount / 50)); // 1
//   amount = amount % 50; // 38
//   //   amount %= 50; // 38
// }
// if (amount >= 20) {
//   console.log("20 notes : " + Math.floor(amount / 20)); // 1
//   amount = amount % 20; // 18
//   //   amount %= 20; // 18
// }
// if (amount >= 10) {
//   console.log("10 notes : " + Math.floor(amount / 10)); // 1
//   amount = amount % 10; // 8
//   //   amount %= 10; // 8
// }
// if (amount >= 5) {
//   console.log("5 notes : " + Math.floor(amount / 5)); // 1
//   amount = amount % 5; // 3
//   //   amount %= 5; // 3
// }
// if (amount >= 2) {
//   console.log("2 notes : " + Math.floor(amount / 2)); // 1
//   amount = amount % 2; // 1
//   //   amount %= 2; // 1
// }
// if (amount >= 1) {
//   console.log("1 notes : " + Math.floor(amount / 1)); // 1
//   amount = amount % 1; // 0
//   //   amount %= 1; // 0
// }

// ------------ OR ------------

// let amount = Number(prompt("Enter the amount : "));
// let originalAmount = amount;
// let totalNotes = 0;

// console.log(`Calculating notes for Rs. ${originalAmount}:`);

// if (amount >= 500) {
//   let notes = Math.floor(amount / 500);
//   console.log("500 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 500;
// }
// if (amount >= 200) {
//   let notes = Math.floor(amount / 200);
//   console.log("200 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 200;
// }
// if (amount >= 100) {
//   let notes = Math.floor(amount / 100);
//   console.log("100 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 100;
// }
// if (amount >= 50) {
//   let notes = Math.floor(amount / 50);
//   console.log("50 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 50;
// }
// if (amount >= 20) {
//   let notes = Math.floor(amount / 20);
//   console.log("20 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 20;
// }
// if (amount >= 10) {
//   let notes = Math.floor(amount / 10);
//   console.log("10 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 10;
// }
// if (amount >= 5) {
//   let notes = Math.floor(amount / 5);
//   console.log("5 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 5;
// }
// if (amount >= 2) {
//   let notes = Math.floor(amount / 2);
//   console.log("2 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 2;
// }
// if (amount >= 1) {
//   let notes = Math.floor(amount / 1);
//   console.log("1 notes : " + notes);
//   totalNotes = totalNotes + notes;
//   amount = amount % 1;
// }

// console.log("Total notes required : " + totalNotes);

// Q6 : Ternary Operator : syntax : condition ? true ka code : false ka code
// 12 > 13 ? console.log("hahahahaha...") : console.log("hehehehehe..."); // hehehehehe...
// 112 > 13 ? console.log("hahahahaha...") : console.log("hehehehehe..."); // hahahahaha...
// console.log(12 > 13 ? "hahahahaha..." : "hehehehehe..."); // hehehehehe...
// console.log(112 > 13 ? "hahahahaha..." : "hehehehehe..."); // hahahahaha...

// Q7 : nested ternary operator :
// let num = 0;
// console.log(num > 0 ? "positive" : num < 0 ? "negative" : "zero");

// Q8 : switch statement :
// let day = Number(prompt("Enter a day (1 - 7) : "));
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Enter a valid day (1 - 7)");
// }

// agar hum multiple conditions me ek hi output chahiye toh
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid");
// }

// agar hume direct condition dena hai toh is tarah se denge
// switch (true) {
//   case 19 > 6:
//     console.log("Hello...");
//     break;
//   case 10 < 9:
//     console.log("Hi...");
//     break;
//   default:
//     console.log("Namaste...");
//     break;
// }

// Q9 : precision issue : switch case can't handle float value because its precision issues
// let num = 0.1 + 0.2;
// console.log(num); // 0.30000000000000004
// switch (num) {
//   case 0.3:
//     console.log("Hello...");
//     break;
//   case 0.5:
//     console.log("Hi...");
//     break;
//   default:
//     console.log("Namaste...");
//     break;
// }
