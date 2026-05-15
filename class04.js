let prompt = require("prompt-sync")();

// if we print like that then it will print in different lines
// console.log("Hello");
// console.log("World");

// if we want to print on the same line then we use process.stdout.write() function and it will give output only in terminal
// process.stdout.write("Hello ");
// process.stdout.write("World");

// let a = prompt("Enter a number : ");
// process.stdout.write(a);

// Pattern Programming :

// Q1 :
/*
  * * * * *
  * * * * *
  * * * * *
  * * * * *
  * * * * *
 */
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
//   console.log();
// }

// Q2 :
/*
  *
  * *
  * * *
  * * * *
  * * * * *
 */
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
//   console.log();
// }

// Q3 :
/*
    * * * * *
    * * * *
    * * *
    * *
    *
 */
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/*
          * 
        * *
      * * *
    * * * *
  * * * * *
*/
// let n = Number(prompt("Enter a number : "));
// for (let i = 1; i <= n; i++) {
//   for (let s = 1; s <= n - i; s++) {
//     process.stdout.write("  ");
//   }
//   for(let j = 1; j <= i; j++){
//     process.stdout.write("* ");
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 2 3 4 5 
    1 2 3 4 5 
    1 2 3 4 5 
    1 2 3 4 5 
    1 2 3 4 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(j + " ");
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 1 1 1 1 
    2 2 2 2 2
    3 3 3 3 3
    4 4 4 4 4
    5 5 5 5 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(i + " ");
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 2 3 4 5 
    2 3 4 5 6
    3 4 5 6 7
    4 5 6 7 8
    5 6 7 8 9
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${i + j - 1} `);
//   }
//   process.stdout.write("\n");
// }
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     process.stdout.write(`${i + j + 1} `);
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(i + " ");
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 
    2 3
    3 4 5
    4 5 6 7
    5 6 7 8 9
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${i + j - 1} `);
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 1 1 1 1 
    0 0 0 0 0
    1 1 1 1 1
    0 0 0 0 0
    1 1 1 1 1
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${i % 2} `);
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 0 1 0 1 
    1 0 1 0 1
    1 0 1 0 1
    1 0 1 0 1
    1 0 1 0 1
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${j % 2} `);
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 0 1 0 1 
    0 1 0 1 0
    1 0 1 0 1
    0 1 0 1 0
    1 0 1 0 1
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${(i + j - 1) % 2} `);
//   }
//   process.stdout.write("\n");
// }

// Q3 :
/* 
    1 
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${j % 2} `);
//   }
//   process.stdout.write("\n");
// //   console.log();
// }

// Q3 :
/* 
    1 
    0 1
    1 0 1
    0 1 0 1
    1 0 1 0 1
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(`${(i + j - 1) % 2} `);
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/* 
        A B C D E 
        A B C D E
        A B C D E
        A B C D E
        A B C D E
*/
// for (let i = 1; i <= 5; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   process.stdout.write("\n");
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(String.fromCharCode(j + 64) + " ");
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/* 
        A A A A A 
        B B B B B
        C C C C C
        D D D D D
        E E E E E
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(String.fromCharCode(i + 64) + " ");
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/* 
        A B C D E 
        B C D E F
        C D E F G
        D E F G H
        E F G H I
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(String.fromCharCode(i+j + 63) + " ");
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/* 
        A 
        B C
        C D E
        D E F G
        E F G H I
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(i + j + 63) + " ");
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/* 
        A 
        A B
        A B C
        A B C D
        A B C D E
*/
// for (let i = 1; i <= 5; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   process.stdout.write("\n");
// }
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(j + 64) + " ");
//   }
//   process.stdout.write("\n");
// }

// Q4 :
/* 
        A 
        B B
        C C C
        D D D D
        E E E E E
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(i + 64) + " ");
//   }
//   process.stdout.write("\n");
// }

// Q5 :
/*
        1 2 3 4 5 
        * * * * *
        1 2 3 4 5 
        * * * * *
        1 2 3 4 5 
*/
// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= 5; j++){
//     process.stdout.write(`${i%2 === 0 ? "*" : j} `);
//   }
//   process.stdout.write("\n");
// }

// Q5 :
/*
        1 * 3 * 5 
        1 * 3 * 5
        1 * 3 * 5
        1 * 3 * 5
        1 * 3 * 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${j % 2 === 0 ? "*" : j} `);
//   }
//   process.stdout.write("\n");
// }

// Q5 :
/*
1 * 3 * 5 
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${j % 2 === 0 ? "*" : j} `);
//   }
//   process.stdout.write("\n");
// }

// Q5 :
/*
1 * 3 * 5 
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${j % 2 === 0 ? "*" : j} `);
//   }
//   process.stdout.write("\n");
// }

// Q5 :
/*
1 * 3 * 5 
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${j % 2 === 0 ? "*" : j} `);
//   }
//   process.stdout.write("\n");
// }

// Q5 :
/*
1 * 3 * 5 
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
1 * 3 * 5
*/
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write(`${j % 2 === 0 ? "*" : j} `);
//   }
//   process.stdout.write("\n");
// }

// Q6 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q7 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q8 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q9 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q10 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q11 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q12 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// Q13 :
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
