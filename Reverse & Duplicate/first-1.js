


// for(let i = 1; i<=10; i++){
// console.log(`5 * ${i} = ${5*i}  `);
// }





// for(let i = 1; i<=5; i++){
// let row ="";
//     for(let j = 1; j <= 5; j++){
//        row+=i 
//     }
//     console.log(row);
// }






// for(let i = 1; i<=5; i++){
// let row = "";

// for(let j = 1; j<=5; j++){
//     row += " * "
// }
// console.log(row);

// }


// for(let i = 1; i<=5; i++){
// let row = "";
//     for(let j =1; j<=i; j++){
//         row +=" *"
//     }
//     console.log(row);
    
// }

// *
// **
// ***
// ****
// *****




// for(let i = 1; i<=5; i++){
//     let row = "";
//   for(let j = 5; j >= i; j--){
//     row +="*"
//   }  
// console.log(row);

// }

// *****
// ****
// ***
// **
// *




// for(let i = 1; i <= 5; i++){
//     let row ="";

// for(let s = 5; s >= i; s--) 
// row += " "

// for(let j = 1; j <=i; j++){
//     row +="*"
//    } 
//    console.log(row);
   
// }


//     *
//    **
//   ***
//  ****
// *****


// first line leaves 4 spaces , so when i is 1 , s should leave 4 right ?
    // s needs to print till  lines, 





let num = 1;
for(let i = 1; i <= 5; i++){

let row ="";

for(let j = 1; j <=5; j++){
row += num;
num++;
}
// console.log(row);

}
// 12345
// 678910
// 1112131415
// 1617181920
// 2122232425




// for (let i = 1; i <= 5; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += (i + j) % 2;
//   }

//   console.log(row);
// }

// 0
// 10
// 010
// 1010
// 01010




// function toBinary(num) {
// let binary = "";

// while( num != 0){

//     let rem = num % 2;
//     binary = rem + binary;
// num = Math.floor(num / 2)

// }

// return binary

// }

// let res = toBinary(13);
// console.log(res);  // Output: 1101





// function revBinary(num) {
    
// let ans = 0;
// while(num != 0){

//     let rem = num % 2;
//     ans = ( 10 * ans) + rem
// num = Math.floor(num / 2)
// }
// return ans
// }


// let res = revBinary(13);
// console.log(res);  // Output: 1011


// function binaryToDecimal(num) {
//   let decimal = 0;
//   let binaryStr = num.toString();  // Convert the number to a string
  
//   for (let i = 0; i < binaryStr.length; i++) {
//     decimal = decimal * 2 + Number(binaryStr[i]);  // Multiply and add the corresponding bit
//   }
  
//   return decimal;
// }

// console.log(binaryToDecimal(1101));  // Output: 13



//  Factorial NO.

// function fact(n){
// let sum = 1;

// for(let i = 1; i<=n; i++){
//     sum *= i 
// }

// return sum

// }

// console.log(fact(10)); ----> 3628800




//FIBONACCI

// function fibonacci(n) {

//   if (n === 0) return 0;
//   if (n === 1) return 1;

//   // Variables to store the previous two Fibonacci numbers
//   let a = 0, b = 1;

//   // Loop to calculate the Fibonacci numbers up to n
//   for (let i = 2; i <= n; i++) {
//     let temp = a + b;  // Calculate the next Fibonacci number
//     a = b;             // Update a to the previous Fibonacci number
//     b = temp;          // Update b to the current Fibonacci number
//   }

//   return b;  // Return the nth Fibonacci number
// }

// console.log(fibonacci(5));  // Output: 5 (Fibonacci number at position 5)




// function fibo(n) {

//     if(n === 0) return 0
//     if(n === 1) return 1

// let a = 0; let b = 1;

//   for(let i = 2; i<=n; i++){

//     let temp = a + b;
//     a = b
//     b = temp;


//   }  
// return b 

// }

// console.log(fibo(6));






// function arms(num) {

    
// let digits = num.toString().split('');
// let n = digits.length;
//   let sum = 0;

//   // Loop through each digit, raise it to the power of 'n' and add it to sum
//   for (let i = 0; i < n; i++) {
//     sum += Math.pow(parseInt(digits[i]), n);
//   }

//   // Check if the sum is equal to the original number
//   return sum === num;
// }

// console.log(isArmstrong(153));  // Output: true
// console.log(isArmstrong(370));  // Output: true
// console.log(isArmstrong(9474)); // Output: true
// console.log(isArmstrong(123));  // Output: false








let marks = [ 10,20,30,40,50,60,70,80,90,100] 

let sum = 0;
for(let i = 0; i < marks.length; i++){

    sum += marks[i]
}

let average = sum / marks.length
// console.log(average);






function fin(x,arr) {
    let found = 0;
for(let i = 0; i<arr.length; i++){
    if(x === arr[i]){
        found = arr[i]
    } 
}
return found
}

let res = fin(20, [20,30,40,50,60,70,82,90,100])

// console.log(res);


