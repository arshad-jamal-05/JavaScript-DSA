// For Loop :
// ----------

// Q1 : infinite loops
// for (var i = 1; i >= 1; i++) {
//   console.log(i);
// }
// for (var i = 1; i <= 10; ) {
//   console.log(i);
// }
// for (var i = 1;; ) {
//   console.log(i);
// }
// for (;;) {
//   console.log("hello...");
// }

// Q2 :
// var i;
// for (i = 1; i <= 10; i++) {
//   console.log("hello..."); // 10 times -> "hello"
// }
// console.log(i); // 11
// for (var i = 1; i <= 10; ) {
//   console.log(i);
// } // invalid statement - kuch bhi print nahi hoga

// Q3 : sum of n natural number(1,2,3,4,5,.....,n)
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null) {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     var sum = 0;
//     if (num > 0) {
//       for (let i = 1; i <= num; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }

// Q4 : factorial(5! = 5 × 4 × 3 × 2 × 1 = 120) of n number
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null && pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       var fact = 1;
//       for (let i = 1; i <= num; i++) {
//         fact = fact * i;
//       }
//       console.log(fact);
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }
// ------------ OR ------------
// let input = prompt("Enter a number:");
// if (input === null || input === "") {
//   console.log("Cancelled...");
// } else {
//   let num = +input;
//   if (num !== num || num <= 0) {
//     console.log("Please enter a positive number greater than 0.");
//   } else {
//     let fact = 1;
//     for (let i = 2; i <= num; i++) fact *= i;
//     console.log(fact);
//   }
// }

// Q5 : factors(whole numbers that divide a given number exactly, with no remainder) of n number
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       for (var i = 1; i <= num; i++) {
//         if (num % i === 0) {
//           console.log(`${i} is a factor of ${num}`);
//         }
//         // num % i === 0 ? console.log(`${i} is a factor of ${num}`) : "";
//       }
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }
// ------------ OR ------------
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       for (var i = 1; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//           console.log(`${i} is a factor of ${num}`);
//         }
//       }
//       console.log(`${num} is a factor of ${num}`);
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }

// Q6 : prime(a whole number greater than 1 that has only two factors: 1 and itself) number (2, 3, 5, 7, 11, 13, 17, and 19). rule hai -> agar number ka square root aur 2 ke beech ke kisi bhi number se divide nahi kar paa raha hai toh use square root ke baad ka bhi koi number divide nahi karega.
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       var primeHai = true;
//       for (var i = 2; i <= Math.floor(num / 2); i++) {
//         if (num % i === 0) {
//           primeHai = false;
//           break;
//         }
//       }
//       if (primeHai) {
//         console.log(`${num} is a prime number`);
//       } else {
//         console.log(`${num} is not a prime number`);
//       }
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }
// --------------- OR ---------------
// rule hai -> agar number ka square root aur 2 ke beech ke kisi bhi number se divide nahi kar paa raha hai toh use square root ke baad ka bhi koi number divide nahi karega.
// 37 = √37 (square root) = 6.08 = 2 -> 6 ---> 3, 4, 5, 6
// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
// // isPrime(37);
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       console.log(isPrime(num) ? `${num} is a prime number` : `${num} is not a prime number`);
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }

// while loop : jab yeh na pata ho ki kitne baar chalega
// var i = 1;
// while (i <= 20) {
//   console.log("Hello...");
//   i++;
// }
// var ans = prompt("kuch bhi dedo (exit for close) :");
// while (ans !== "exit") {
//   ans = prompt("kuch bhi dedo (exit for close) :");
// }

// Q7 : sum of digit (1234 -> 1 + 2 + 3 + 4 = 10)
/*
    number : 1234
    sum = 0

    remainder -> 1234 % 10 = 4
    sum = 0 -> 0 + 4 = 4
    newNumber -> 1234 / 10 = 123

    remainder -> 123 % 10 = 3
    sum = 4 -> 4 + 3 = 7
    newNumber -> 123 / 10 = 12

    remainder -> 12 % 10 = 2
    sum = 7 -> 7 + 2 = 9
    newNumber -> 12 / 10 = 1

    remainder -> 1 % 10 = 1
    sum = 9 -> 9 + 1 = 10
    newNumber -> 1 / 10 = 0
*/
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       var sum = 0;
//       while (num > 0) {
//         var remainder = num % 10;
//         sum = sum + remainder;
//         num = Math.floor(num / 10);
//       }
//       console.log(`${sum} is the sum of ${pr}`);
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }

// Q8 : reverse of number (1234 -> 4321)
/*
    number : 1234
    reverse = 0
    remainder = 0

    remainder -> 1234 % 10 = 4
    reverse = 0
    reverse -> (reverse * 10) + remainder = (0 * 10) + 4 = 4
    newNumber -> Math.floor(number / 10) = Math.floor(1234 / 10) = 123

    remainder -> newNumber % 10 = 123 % 10 = 3
    reverse = 4
    reverse -> (reverse * 10) + remainder = (4 * 10) + 3 = 43
    newNumber -> Math.floor(newNumber / 10) = Math.floor(123 / 10) = 12
    
    remainder -> newNumber % 10 = 12 % 10 = 2
    reverse = 43
    reverse -> (reverse * 10) + remainder = (43 * 10) + 2 = 432
    newNumber -> Math.floor(newNumber / 10) = Math.floor(123 / 10) = 1
    
    remainder -> newNumber % 10 = 1 % 10 = 1
    reverse = 432
    reverse -> (reverse * 10) + remainder = (432 * 10) + 1 = 4321
    newNumber -> Math.floor(newNumber / 10) = Math.floor(1 / 10) = 0
*/
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       var reverse = 0;
//       while (num > 0) {
//         var remainder = num % 10;
//         reverse = reverse * 10 + remainder;
//         num = Math.floor(num / 10);
//       }
//       console.log(`${reverse} is a reverse number of ${pr}`);
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }

// Q9 : strong number (145 -> 1! + 4! + 5! = 1 + 24 + 120 = 145)
/* 
    number = 145
    remainder = 0 
    factorial = 1
    sum = 0

    number -> 145
    remainder -> number % 10 = 145 % 10 = 5
    factorial -> 1
    factorial -> factorial * (factorial of remainder) = 1 * 5! = 1 * (5*4*3*2*1) = 120
    sum -> 0 
    sum -> sum + factorial = 0 + 120 = 120
    number = number / 10 = 145 / 10 = 14

    number -> 14
    remainder -> number % 10 = 14 % 10 = 4
    factorial -> 1
    factorial -> factorial * (factorial of remainder) = 1 * 4! = 1 * (4*3*2*1) = 24
    sum -> 120
    sum -> sum + factorial = 120 + 24 = 144
    number = number / 10 = 14 / 10 = 1

    number -> 1
    remainder -> number % 10 = 1 % 10 = 1
    factorial -> 1
    factorial -> factorial * (factorial of remainder) = 1 * 1! = 1 * (1) = 1
    sum -> 0 
    sum -> sum + factorial = 144 + 1 = 145
    number = number / 10 = 1 / 10 = 0
*/
// var pr = prompt("Enter a number : "); // prompt ko cancel karne par variable me 'null' value store ho jaati hai
// if (pr === null || pr === "") {
//   console.log("cancelled...");
// } else {
//   var num = Number(pr);
//   if (isNaN(num)) {
//     console.log("Invalid Input !");
//   } else {
//     if (num > 0) {
//       var sum = 0;
//       while (num > 0) {
//         var remainder = num % 10;
//         var factorial = 1;
//         for (var i = 1; i <= remainder; i++) {
//           factorial = factorial * i;
//         }
//         sum = sum + factorial;
//         num = Math.floor(num / 10);
//       }
//       if (pr == sum) {
//         console.log(`${pr} is a strong number`);
//       } else {
//         console.log(`${pr} is not a strong number`);
//       }
//     } else {
//       console.log("number should be +ve and more than 0");
//     }
//   }
// }

// do-while loop : ek baar zaroor chalega
// var i = 1;
// do {
//     console.log("hello...");
// } while (i <= 10);

// Q10 : guess the number
// var computerNumber = Math.floor(Math.random() * 20 + 1);
// console.log(computerNumber);
// var userNumber = Number(prompt("Enter a number between 1 to 20 : "));
// while (userNumber !== computerNumber) {
//   userNumber = Number(prompt("Enter a number between 1 to 20 : "));
//   if (isNaN(userNumber) || userNumber < 1 || userNumber > 21) {
//     console.log("try again between 1 - 20");
//     continue;
//   }
//   if (userNumber > computerNumber) {
//     console.log("too high , try again ...");
//   } else if (userNumber < computerNumber) {
//     console.log("too low , try again ...");
//   } else {
//     console.log("Congrats 🎉 and number was ", userNumber);
//   }
// }

// Q11 : sasta calculator
// var num1 = Number(prompt("Enter first number : "));
// var num2 = Number(prompt("Enter second number : "));
// var operator = prompt("Enter Operator ( + , - , * , / ) : ");
// switch (operator) {
//   case "+":
//     alert(`the sum of ${num1} and ${num2} is ${num1 + num2}`);
//     break;
//   case "-":
//     alert(`the sum of ${num1} and ${num2} is ${num1 - num2}`);
//     break;
//   case "*":
//     alert(`the sum of ${num1} and ${num2} is ${num1 * num2}`);
//     break;
//   case "/":
//     alert(`the sum of ${num1} and ${num2} is ${num1 / num2}`);
//     break;
//   default:
//     alert("Invalid Operator");
//     break;
// }

// Q12 :

// Q13 :

// Q14 :

// Q15 :

// Q16 :

// Q17 :

// Q18 :

// Q19 :

// Q20 :

// Q21 :

// Q22 :

// Q23 :

// Q24 :

// Q25 :
