
// let n = 5;

// for(let i = 1; i<=n; i++){
// let row="";
//     for(let j = 1; j <= n; j++){


// if(  i === 1 || i === n || j === 1 || j === n){
// row += "*"
// }else{
//     row += " "
// }

// }
// console.log(row);

// }
// *****
// *   *
// *   *
// *   *
// *****


// just see the square clearly, you find a pattern that only first and last row and first and last column is being printed
// so rest is space, think separately like how you can access their value





// let n = 5;
// for(let i = n; i >= 1; i--){

//     let row =""
//     for(let j = 1; j <= i; j++ )

// if( i === n || j === 1 || j === i   ) {
// row +="*"
// } else{
//     row += " "
// }
// console.log(row);


// }

// *****
// *  *
// * *
// **
// *

// ( i === n || j === 1 || j === i   )
// extradinory logic  



let n = 6;

for (let i = 1; i <= n; i++) {

    let row = "  ";
    for (let s = 1; s <= n - i; s++) {
        row += "  ";
    }
    for (let j = 1; j <= (2 * i - 1); j++) {

        row += "*";
    }

    // console.log(row);

}



// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

//     // spaces before stars
//     for (let s = 1; s <= n - i; s++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 1; j <= (2 * i - 1); j++) {
//         row += "*";
//     }

//     console.log(row);
// }



// function d2b(num) {

// let binary ="";

// while( num != 0 ){

// let rem = num % 2; 

//  binary = rem + binary;
// num = Math.floor(num / 2)

// }

// return binary

// }

// let re = d2b(12);
// console.log(re);
// // 1100


// Count zeros and 1 in the array

// function ct(arr) {

// let numZero = 0;
// let numOne = 0;

// for(let i = 0; i<arr.length; i++){

//     if(arr[i] === 0 ){
// numZero++;
// }

// if(arr[i] === 1 ){ 
//     numOne++;
// }}

// return `num 0 count is: ${numZero}, num 1 count is: ${numOne}`;

// }

// let res = ct([0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,3,8,3,87,7,0,4,7,6,6,1654,1])

// console.log(res);
// num 0 count is: 8, num 1 count is: 9





// Extreme Print in Array
// Let arr = [1,2,3,4,5,6,7,8,9,10], 
// it means we should print only extreme numbers, ans look like 
// 1 10 2 9 3 8 4 7 5 6

// function ext(arr) {
//     let n = arr.length;
//     let result = "";

//     for (let i = 0; i < Math.ceil(n / 2); i++) {
//         result += arr[i] + " ";            // from start
//         result += arr[n - 1 - i] + " ";    // from end
//     }

//     return result.trim();
// }

// let res = ext([1,2,3,4,5,6,7,8,9,10]);
// console.log(res);


// let res = ext([1,2,3,4,5,6,7,8,9,10]);
// console.log(res);



// function ext(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let result = "";

//   while (start <= end) {
//     result += arr[start] + " ";

//     if (start !== end) {
//       result += arr[end] + " ";
//     }

//     start++;
//     end--;
//   }

//   return result.trim();
// }


// let res = ext([1,2,3,4,5,6,7,8,9,10]);
// console.log(res); ---> 1 10 2 9 3 8 4 7 5 6



// [ start →        ← end ]
// Keep moving inward until they cross.








// function ext(arr) {

//     let n = arr.length - 1
//     let result = "";

//     for (let i = 0, j = n; i <= j; i++, j--) {
//         result += arr[i] + " ";

//         if (i !== j) {
//             result += arr[j] + " ";
//         }
//     }
//     return result.trim()

// }

// let res = ext([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(res); ---> 1 10 2 9 3 8 4 7 5 6




function ext(arr) {

    let i = 0
    let j = arr.length - 1;

    let result = "";

while(i <= j){

result += arr[i] + " "

if(i !== j){
    result += arr[j]+ " "
}

i++;
j--

}

return result.trim()

    
}

let res = ext([1,2,3,4,5,6,7,8,9,10]);
 console.log(res); //---> 1 10 2 9 3 8 4 7 5 6














