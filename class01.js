// Hoisting :
// ----------
// console.log(a); // undefined
// var a = 3;
// console.log(b); // ReferenceError: b is not defined
// b = 12;
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// let c = 8;

// Q1 : Sum of two number
// let a = 10;
// let b = 20;
// console.log(a + b);   // 30

// Q2 : String concatination with number
// let a = 10;
// let b = "20";
// // console.log(a + b);  // 1020
// let c = a + b;
// console.log(c);  // 1020
// typeof(c);  // string

// Q3 : sum and message - type coercion
// let a = 10;
// let b = 20;
// console.log("Sum of 10 & 20 -> " + a + b); // Sum of 10 & 20 -> 1020
// console.log("Sum of 10 & 20 -> " + (a + b)); // Sum of 10 & 20 -> 30
// console.log(a + b +" is Sum of 10 & 20"); // 30 is Sum of 10 & 20

// Q4 : type coercion
// console.log("1" + 1); // 11
// console.log("1" - 1); // 0
// console.log("1" * 1); // 1
// console.log("1" / 1); // 1

// Q5 : accept and print the answer
// let age = prompt("Enter your age : ");
// console.log(typeof(age)) // string
// let age = Number(prompt("Enter your age : "));
// let age = parseInt(prompt("Enter your age : "));
// age = Number(age);
// console.log(typeof(age)) // number

// Q6 : swap two variables via 3 methods
// let a = 10;
// let b = 20;
// method 1 : using extra variable
// let c = a; // c=10, a=10
// a = b; // a=20, b=20
// b = c; // b=10, c=10
// console.log(a, b); // a=20, b=10
// method 2 : without using extra variable
// a = a + b; // a=a+b => 10+20 => 30, a=30
// b = a - b; // b=a-b => 30-20 => 10, b=10
// a = a - b; // a=a-b => 30-10 => 20, a=20
// console.log(a, b); // a=20, b=10
// method 3 : using destructuring
// [a, b] = [b, a];
// console.log(a, b); // a=20, b=10

// Q7 : Operators & their questions ->
// let a = 12;
// let b = 22;
// Arithmatic Operators ( + , - , * , / , % )
// console.log(a + b); // 34
// console.log(a - b); // -10
// console.log(a * b); // 288
// console.log(a / b); // 0.5454545454545454
// console.log(7 / 2); // 3.5
// console.log(Math.floor(7 / 2)); // 3
// console.log(Math.ceil(7 / 2)); // 4
// console.log(Math.round(7 / 2)); // 4
// console.log(a % b); // 12
// console.log(b % a); // 10
// console.log(7 % 2); // 1
// console.log(2 % 7); // 2

// Relational Operators ( > , < , >= , <= , != , == , !== )
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a >= b); // false
// console.log(a <= b); // true
// console.log(a == b); // false
// console.log(a != b); // true
// console.log(a === b); // false
// console.log(a !== b); // true

// Logical Operators ( && , || )
// console.log(10 > 6 && 5 < 9); // true
// console.log(10 > 6 && 15 < 9); // false
// console.log(10 < 6 && 15 < 9 && 18 > 15); // false
// console.log(10 > 6 || 5 < 9); // true
// console.log(10 < 6 || 15 < 9); // false
// console.log(10 < 6 || 15 < 9 || 18 > 15); // true

// Increment & Decrement/Unary Operators ( ++ , -- )
// console.log(a++);  // 12
// console.log(a);  // 13
// console.log(++a);  // 14
// console.log(a--);  // 14
// console.log(a);  // 13
// console.log(--a);  // 12

// Q8 : 
// let i = 11;
// i = i++ + ++i;
// console.log(i); // 23
// i = i-- + --i;
// console.log(i); // 20
// let a = 11, b = 22;
// console.log(`a : ${a} and b : ${b}`); // a : 11 and b : 22
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log(`c : ${c}`); // c : 103

// Q9 : 
// let a = true;
// a++; // true + 1 => 1 + 1 => 2
// console.log(a); // 2

// Q10 :
// let a = 11++;
// console.log(a); // syntax error because constant par hum operator nahi laga sakte keval variable par laga sakte hai

// Q11 : 
// let i = 11;
// let j = --(i++);
// console.log(j); // syntax error because yeh pehle bracket ko solve karke constant me change kar dega aur constant par operator nahi laga sakte error deta hai

// Q12 : 
// let a = 4267;
// console.log(a % 10); // 7
// console.log(a % 100); // 67
// console.log(a % 1000); // 267
// console.log(a % 10000); // 4267
// console.log(Math.floor(a / 10)); // 426
// console.log(Math.floor(a / 100)); // 42
// console.log(Math.floor(a / 1000)); // 4
// let b = 5430;
// console.log(b % 10); // 0
// console.log(b % 100); // 30
// console.log(b % 1000); // 430
// console.log(b % 10000); // 5430
// console.log(Math.floor(b / 10)); // 543
// console.log(Math.floor(b / 100)); // 54
// console.log(Math.floor(b / 1000)); // 5

// Q13 : Math.round() function
// console.log(Math.round(10.6)); // 11
// console.log(Math.round(10.4)); // 10
// console.log(Math.round(10.5)); // 11

// Q14 : Math.ciel() function
// console.log(Math.ceil(10.1)); // 11

// Q15 : Math.floor() function
// console.log(Math.floor(12.3)); // 12
// console.log(Math.floor(12.7)); // 12
// console.log(Math.floor(12.5)); // 12

// Q16 : Math.trunc() function : remove the decimal part
// console.log(Math.trunc(18.98)); // 18
// console.log(Math.trunc(13.08)); // 13

// Q17 : Math.pow() function
// console.log(Math.pow(2,5)); // 2^5 = 2 * 2 * 2 * 2 * 2 = 32

// Q18 : Math.sqrt() function
// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt(69)); // 8.306623862918075

// Q19 : Math.cbrt() function
// console.log(Math.cbrt(729)); // 9
// console.log(Math.cbrt(144)); // 5.241482788417793

// Q20 : Math.abs() function
// console.log(Math.abs(+9)); // 9
// console.log(Math.abs(-9)); // 9
// console.log(Math.abs(-2)); // 2

// Q21 : Math.max() function
// console.log(Math.max(78,62,44,14)); // 78
// console.log(Math.max(12,56,99,144)); // 144

// Q22 : Math.min() function
// console.log(Math.min(78,62,44,14)); // 14
// console.log(Math.min(12,56,99,144)); // 12

// Q23 : Math.random() function
// console.log(Math.random());  // 0 to 1 ke beech ki value but 1 ko chodkar // 0.8177153841692251
// console.log(Math.random() * 10);  // 0 to 10 ke beech ki value but 10 ko chodkar // 7.481964216085232
// console.log(Math.random() * 11);  // 0 to 11 ke beech ki value but 11 ko chodkar // 10.8322652967268835
// console.log((Math.random() * 100) + 100);  // 100 to 200 ke beech ki value but 100 ko chodkar // 168.69620422256156
// console.log(Math.trunc((Math.random() * 9000) + 1000));  // 1000 to 10000 ke beech ki value but 10000 ko chodkar // 4528

// Q24 : variable_name.toFixed() function
// let a = 77.3421854980;
// console.log(a.toFixed(2)); // 77.34
// console.log(a.toFixed(4)); // 77.3421
// console.log(typeof(a.toFixed(4))); // string

// Q25 : calculate area and perimeter of rectangle
// let l = 5; // l = length(lambai)
// let b = 8; // b = breadth(chaudai)
// let area = l * b;
// console.log(`Area of Rectangle : ${area}`);
// let perimeter = 2 * ( l + b );
// console.log(`Perimeter of Rectangle : ${perimeter}`);

// Q26 : Generate OTP
// console.log(Math.trunc((Math.random() * 9000) + 1000));  // 1000 to 9999 ke beech ki value but 9999 ko chodkar // 4528
// console.log(Math.floor(Math.random() * 9000) + 1000); // 1000 to 9999 ke beech ka koi bhi number return karega // 7653

// Q27 : area of triangle by heron's formula 
// heron's formula : sqrt of s * ( s - a ) * ( s - b ) * ( s - c ) where s = semiperimeter , a,b,c = sides of triangle , formula of semiperimeter = (a+b+c)/2
// let side1 = 5, side2 = 6, side3 = 7;
// let semiperimeter = (side1 + side2 + side3) / 2;
// let area = Math.sqrt(semiperimeter * ( semiperimeter - side1 ) * ( semiperimeter - side2 ) * ( semiperimeter - side3 ));
// console.log(`Side1 : ${side1} , Side2 : ${side2} , Side3 : ${side3} \n Semi-Perimeter : ${semiperimeter}`);
// console.log(`Area of triangle by heron's formula : ${area}`);

// Q28 : circumference of circle : formula = 2πr
// let r = 7;
// console.log(2 * Math.PI * r); // 43.982297150257104
// console.log((2 * Math.PI * r).toFixed(2)); // 43.98
// console.log(Number((2 * Math.PI * r).toFixed(2))); // 43.98
