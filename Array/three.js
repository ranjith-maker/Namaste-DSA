
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




// function ext(arr) {

//     let i = 0
//     let j = arr.length - 1;

//     let result = "";

// while(i <= j){

// result += arr[i] + " "

// if(i !== j){
//     result += arr[j]+ " "
// }

// i++;
// j--

// }

// return result.trim()

    
// }

// let res = ext([1,2,3,4,5,6,7,8,9,10]);
//  console.log(res); //---> 1 10 2 9 3 8 4 7 5 6


//Find the unique element


// function finUniq(arr) {

//     let ans = 0;
// for(let i = 0; i < arr.length; i++){
//     ans = ans ^ arr[i]
// }
// return ans
// }

// let res = finUniq([1,1,2,2,54,3,3,3,3,1,3])
// console.log(res);


// function finUniq(arr) {
//     let xorResult = 0;
    
//     // XOR all elements to get the combined result of the two unique numbers
//     for (let i = 0; i < arr.length; i++) {
//         xorResult ^= arr[i];
//     }

//     // Find the rightmost set bit (this bit will differ between the two unique numbers)
//     let rightmostSetBit = xorResult & -xorResult; // This isolates the rightmost set bit

//     let num1 = 0, num2 = 0;

//     // Divide the elements into two groups based on the rightmost set bit
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i] & rightmostSetBit) === 0) {
//             num1 ^= arr[i]; // XOR the numbers in one group
//         } else {
//             num2 ^= arr[i]; // XOR the numbers in the other group
//         }
//     }

//     return [num1, num2]; // Return the two unique numbers
// }

// // Example with unique numbers at the left
// let res = finUniq([4, 5, 1, 1, 2, 2, 3, 3, 1, 2, 3]);
// // console.log(res); // Output should be [4, 5]



// Union of 2 Arrays
// let arr = [2,4,8,10,6]
// let brr = [1,3,9];

// let ans = [];

// for(let i = 0; i < arr.length; i++){
// ans.push(arr[i])
// }

// for(let i = 0; i<brr.length; i++){
// ans.push(brr[i])

// }
// console.log(ans); [  2, 4, 8, 10,  6, 1, 3, 9]


//Put these 2 array in a 3rd array
// let a= [2,4,8,10,6];  let b = [1,3,9];
// let c = [...a,...b]; ---> console.log(c);


// Intersection of 2 Arrays 
// you'll print the same the numbers in 3rd array
// let arr = [2, 4, 8, 10 ,6]
// let brr = [1, 2, 4, 6, 12];
// answer =  [ 2,4,6 ]

// let answer = [];

// for(let i = 0; i < arr.length; i++){

// for(let j = 0; j<brr.length; j++){
//     if(arr[i] === brr[j]){
// answer.push(arr[i])
 
// }}}

// console.log(answer);

// we checked whether all the a's elements are b's elements ? if yes, push those same elements only in the answer array


// let arr = [2, 4, 4, 8, 10, 6];
// let brr = [2, 4, 4, 6, 1, 12];

// let same = new Set(brr)

// let ans = arr.filter((x)=> same.has(x))

// console.log(ans); --->[ 2, 4, 4, 6 ]


// here in filter method, we are comparing a to b right put b in the set he only gets original inside its array, for ex - let b = new Set(brr), console teh b oyu know what am saying
// and now filter the a and ask like if same has a , that's it



// Handlded teh case  of duplicates, Merge 2 arrays and remove the duplicates 

// let arr = [2, 4, 8, 2, 10, 6];
// let brr = [1, 2, 3, 9, 9,6];


// let c = [...new Set([...arr,...brr])  ];
// console.log(c);
// [  2, 4, 8, 10, 6, 1, 3, 9]

// let arr = [2, 4, 8, 2, 10, 6];
// let brr = [1, 2, 3, 9, 9,6];

// let c = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!c.includes(arr[i])) {
//     c.push(arr[i]);
//   }
// }

// for (let j = 0; j < brr.length; j++) {
//   if (!c.includes(brr[j])) {
//     c.push(brr[j]);
//   }
// }

// console.log(c);


// Pair Sum
// Find a pair that upon addition gives value equal to the Sum

// function pairSum(arr,sum) {
 
//     let som = [];
// // let count = 0;  
// for(let i = 0; i < arr.length; i++){

// for(let j = i+1; j < arr.length; j++){

//    if( arr[i] + arr[j] === sum ){
// //    count++; 
//     som.push([arr[i], arr[j]])

// }}}   
// return som
// //  return [count, som]


// }
 
// let res = pairSum([1,3,5,7,2,4,6],9)
//  console.log(res); 
// ----> [ [ 3, 6 ], [ 5, 4 ], [ 7, 2 ] ]




// function pairSum(arr,sum) {


// }

// let res = pairSum([1,3,5,7,2,4,6],9)
//  console.log(res); 



//  let are = [1,3,5,7,2,4,6]
// for(let i = 0; i<are.length; i++){

//     // console.log("we are at loop", are[i] );
    

// for(let j = i+1; j<are.length; j++){

//     // console.log(are[i], + "  " + are[j]);   
// }}
// this is what we are gonna check whether  i and j is sum of 9 , console this 4 line you know what to write as a condition and check 

// let arr = [1,3,5,7,2,4,6];
// let sum = 9;

// let seen = new Set();

// for (let num of arr) {
//   let target = sum - num;

//   if (seen.has(target)) {
//     console.log(num, target);
//   }

//   seen.add(num);
// }


//Triplet Brute Force

// function triSum(arr,x) {
    
//     let ans = [];

//  for(let i = 0; i<arr.length; i++){
// console.log("we are at 1");


// for(let j = i+1; j <arr.length; j++){

// console.log("we are at all 2");

// for(let k = j+1; k < arr.length; k++){
// console.log("we are at all 3");

//         if( arr[i]+ arr[j]+arr[k] ===  x  ) {

//     ans.push([[arr[i], arr[j], arr[k]]])

// }}}}   

// return ans;

// }

// let res = triSum([10,20,30,40,20],60)
//  console.log(res); ---> [ [ [ 10, 20, 30 ] ], [ [ 10, 30, 20 ] ] ]



// Sort 0's and 1 
// Input = [0,1,1,0,0,1,0,1,1]
// Output = [0,0,0,0,1,1,1,1,1]

// let a = [0,1,1,0,0,1,0,1,1]

function sort01s(arr) {
   
    
let left = 0;
let right = arr.length - 1;

while(left !== right ){

if(arr[left]  === 1 && arr[right] === 0 ){
    [arr[left] , arr[right]] =  [arr[right] , arr[left] ]
}

if(arr[left] === 0) left++
if(arr[right] === 1) right--


}
return arr

}


// let res = sort01s([0,1,1,0,0,1,0,1,1]);
// console.log(res);
// answer[0, 0, 0, 0, 1, 1, 1, 1, 1]








// let a = [2, 4, 8, 10 ,6]
// let b = [1, 2, 4, 6, 12];
// let c = new Set(b); 
// let d =  a.filter((x)=>  c.has(x) )
// console.log(d);
