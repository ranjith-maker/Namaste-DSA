
// Square root of number in binary search

// function sqrt(n) {
  
//     let start = 0; let end = n-1;
//     let target = n;
//     let ans = -1;
    
//     while(start <= end){
// let mid = Math.floor(start + (end - start) / 2)
        
//       if( mid * mid === target ){
//             return mid;
//         }else if( mid * mid < target ){
//             ans = mid;
//             start = mid + 1;

//         }else{
//             end = mid - 1
//         }
//     }
// return ans
// }

// let res = sqrt(44)
// console.log(res);


// Binary Search in 2D Array 

// start = 0;
// n = rows; m = clos;
// end = n * m - 1
// mid = Math.floor(start + (end - start) /2 )

// rowIndex = mid / cols 
// colsIndex = mid % cols 


// The below sum works for only rows and colums are equal 

// function finidx(arr,target) {
 
//     let row = arr.length;
//     let col = arr[0].length;

// let start = 0;
// let end = row * col - 1;

// while( start <= end) {
//    let mid = Math.floor(start + (end - start) / 2 )
   
//    let rowIdx = Math.floor(mid/col)
//    let colIdx = mid % col 

//    let value = arr[rowIdx][colIdx]

//    if( value === target ){
// return [rowIdx , colIdx]
//    }else if(value < target){
// start = mid + 1;
//    }else{
//     end = mid - 1;
//    }


// }

// return -1

// }

// let res = finidx( [

// [1,2,4,5],
// [6,7,9,10],
// [11,13,14,15],
// [16,18,19,20],

// ], 18)

// console.log(res);  [3,1]



// the below sum works for jagged array , just made an 1D array by flattening , still used binary search
// function finidx(arr, target) {

//     let flat = arr.flat(); // convert to 1D first

//     let start = 0;
//     let end = flat.length - 1;

//     while (start <= end) {

//         let mid = Math.floor((start + end) / 2);

//         if (flat[mid] === target) return mid;
//         else if (flat[mid] < target) start = mid + 1;
//         else end = mid - 1;
//     }

//     return -1;
// }

// let res = finidx([
//   [1, 2, 4],
//   [6, 7],
//   [11, 13, 14, 15],
//   [16]
// ],15);
// console.log(res); 8
//------------------


//  Search in a nearly Sorted Array
// arr= [ 10,3,40,20,50,80,70] , if it is sorted hwo will it look like? 
// arr= [3,10,20,40,50,70,80 ]
// Given a sorted integer array arr[] consisting of distinct elements, where some elements of the array are moved to either of the adjacent positions, i.e. arr[i] may be present at arr[i-1] or arr[i+1].
// Given an integer target.  You have to return the index ( 0-based ) of the target in the array. If target is not present return -1.

// the target index'll be either i or i-1 or i+1 , 
//  nearly sorted as in ques =  [10,3,40,20,50,80,70]
//  0-10, 1-3, 2-40, 3-20, 4-50, 5-80, 6-70 
// if I sort it how is it gonna look like , arr= [3,10,20,40,50,70,80 ]
// 0-3, 1-10, 2-20, 3-40, 4-50, 5-70,6-80 
// the target index'll be either i, i-1 or i+1 , it means, now the 40th,3rd index is either i(3) i-1(2) or i+1(4) so 40 is at 2nd 


// function finidx(arr,target) {
// let n = arr.length;
// let start = 0; let end = n-1;

// while( start <= end ){
//     let mid = Math.floor(start+ (end - start) / 2 )

// if( arr[mid] === target) return mid
// else if(mid-1 >= 0 && arr[mid - 1] === target )return mid - 1
// else if( mid+ 1 < n && arr[mid + 1] === target) return mid + 1
// else if( arr[mid] < target){
//     start = mid + 2 //as we already checked mid+1 we go with mid + 2
// }else{
//     end = mid - 2
// }
// }

// return -1

// }
// let res = finidx([10,3,40,20,50,80,70],50)
// console.log(res); 4


// mid-1 >= 0 we don't want any negative val
// mid+1 < n = we dont wanna go out of bound by the end of array 


// 3)Divide two numers using Binary search

// Given two integers one is a dividend and the other is the divisor, we need to find the quotient when the dividend is divided by the divisor without the use of any " / " and " % " operators. 

// Examples:

// Input: dividend = 10, divisor = 2
// Output: 5
// Explanation: 10/2 = 5.

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333... which is truncated to 3.

// Input: dividend = 10, divisor = -2
// Output: -5
// Explanation: 10/-2 = -5.

// dividend - 10, divisor - 2 , Quotient - 5, remainder - 0, so 
// divisor * Quotient + remainder = dividend 
// here in this sum we want quotient only so we can optimize how we arrive at divident part 
// divisor * quotient <= dividend, why less than or equal to, sometimes remainder can be 0 2 3 4 as per the case as well 

// The below answer handled positive inputs 

// function div(dvd, dvs) {

//         if (dvd === 0 || dvs === 0) return 0;

// let start = 0;   
// let end = dvd;  
// let ans = 0;

// while( start <= end ){
     
//     let mid = Math.floor(start + ( end - start ) / 2  )
     

// if ( mid * dvs === dvd) return mid
// else if( mid * dvs < dvd ){
//     ans = mid
//     start = mid + 1;
// }else{
//     end = mid - 1;
// }}    

// return ans
// }

// let res = div(22,3)
// console.log(res); 





// The below answer handled both negative and positive inputs 

// function divds(dividend, divisor) {

// if( dividend === 0 || divisor === 0 ) return 0;

// let dvd = Math.abs(dividend)
// let dvs = Math.abs(divisor)

// let start = 0;
// let end = dvd;
// let ans = 0;

// while( start <= end){

// let mid = Math.floor(start + (end - start) / 2)

//  if ( mid * dvs <= dvd){
//     ans = mid;
//     start = mid + 1;
// }else{
//     end = mid - 1
// }}

// if( (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0) ){
//     return ans
// }else{
//     return -ans
// } }


// let res = divds(20,-10)
// console.log(res);-2










// function div(dividend, divisor) {

//     if (divisor === 0) {
//         throw new Error("Division by zero");
//     }

//     if (dividend === 0) return 0;

//     // Determine sign
//     let isNegative = (dividend < 0) ^ (divisor < 0);

//     let dvd = Math.abs(dividend);
//     let dvs = Math.abs(divisor);

//     let start = 0;
//     let end = dvd;
//     let ans = 0;

//     while (start <= end) {

//         let mid = Math.floor(start + (end - start) / 2);

//         if (mid * dvs <= dvd) {
//             ans = mid;
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }

//     return isNegative ? -ans : ans;
// }

// let res = div(22, -12);
// console.log(res);







//     let isNegative = (dividend < 0) ^ (divisor < 0);  
// exlpain this line 

// Good  this is a very important interview line.

// let isNegative = (dividend < 0) ^ (divisor < 0);

// Let’s break it clearly.

// 🔹 Step 1: What does (dividend < 0) return?

// It returns a boolean:

// (dividend < 0)   // true or false
// (divisor < 0)    // true or false

// Example:

// 22 < 0      → false
// -12 < 0     → true
// 🔹 Step 2: What does ^ mean?

// ^ is the bitwise XOR operator.

// XOR means:

// A	B	A ^ B
// false	false	false
// true	true	false
// true	false	true
// false	true	true

// 👉 XOR is true only when signs are different

// 🔥 Why We Use It Here

// Division result is negative only when signs are different.

// Cases:
// Dividend	Divisor	Result
// +	+	+
// -	-	+
// +	-	-
// -	+	-

// So we check:

// (dividend < 0) ^ (divisor < 0)

// If exactly one is negative → result should be negative.

// 🧠 Example 1
// 22 / -12
// 22 < 0 → false
// -12 < 0 → true

// false ^ true → true

// So:

// isNegative = true

// Correct ✅ result should be negative.

// 🧠 Example 2
// -22 / -12
// true ^ true → false

// So result should be positive.

// Correct ✅

// ⚠ Important JavaScript Detail

// In JavaScript:

// true ^ false

// Actually becomes:

// 1 ^ 0

// Because booleans are converted to numbers in bitwise operations.

// So it works perfectly.


// 5) Number occurring odd number of times

// Given an array arr[] of positive integers. All numbers occur an even number of times except one number which occurs an odd number of times.

// Examples : 

// Input : arr[]= [1, 2, 3, 2, 3, 1, 3]
// Output : 3

// Input : arr[] = [5, 7, 2, 7, 5, 2, 5]
// Output : 5

// all the elements in the array comes twice except one elem in ODD


// function oddocc(arr) {

//     let xor = 0;
//     for(let i = 0; i < arr.length; i++){
//          xor = xor ^ arr[i]

//     }
// return xor


// }
// let res = oddocc([1, 2, 3, 2, 3, 1, 3])
// console.log(res);  3
 


// Lower Bound in BS
// It means we need to find the arr[i] >= x
// find the mid which is higher than or equal to the x 
// for ex - [3,5,8,15,19] , if x = 8 ,  it is 8 , why bcoz only 8 is greter than or equal to 8 
// if x = 16, ans is 19 , why only 19 is greater than or equal to 16.


// An Algo for lower bound is the mid should be higher than or equal to the target

// function lobo(arr,target) {

// let n = arr.length;    
// let start = 0; let end = n-1

// let ans = n
// while( start <= end ){

//     let mid = Math.floor(start + (end - start) / 2)
// if( arr[mid] >= target){
//     ans = mid
//     end = mid - 1
// } else  {
// start = mid + 1;

// }}
// return ans
// }

// // let res = lobo( [3,5,8,15,11,11,11,11,11,19,20],11 ) //---> 4
// let res = lobo( [3,5,8,10,11,11,11,11,11,19,20],2) //---> 9 

// console.log(res); 


// An Algo for Upper bound is , it has to be higher than the target


// function higbo(arr,target) {
    
//     let n = arr.length;
//     let start = 0; let end = n-1
// let ans = n;
// while( start <= end ){
//      let mid = Math.floor(start + (end - start) / 2 )
      
// if(arr[mid] > target){
//    ans = mid;
//    end = mid - 1
// }else{
// start = mid + 1
// }}
// return ans
// }
//  let res = higbo( [3,5,8,15,11,11,11,11,11,19,20],11 ) 9
// let res = higbo( [1,2,3,5,8,10,11,11,13,14,15,19,20],11 )  8
// console.log(res);

// So lower bound's logic is the mid should always be greater than or equal to the target
// whereas highere bound's logic is the mid shoould br higher than the target


//Search a place INserrt

// function serins(arr,target) {
  
// let n = arr.length
// let start = 0; let end = n-1;
// let ans = n;
// while( start <= end ){
//      let mid = Math.floor(start+ (end - start) / 2)
// if ( arr[mid]  >= target ){
//     ans = mid
//     end = mid - 1
// }else{
//     start = mid + 1 
// }}
// return ans
// }


// let res = serins( [3,5,8,10,11,11,11,11,11,19,20],4) //---> 1

// console.log(res); 


// // Just Assume left and right is sorted  and also think that both are independent, it'll be amazing
// function searchrot(arr,target) {

//     let n = arr.length;
//     let start = 0; let end = n -1

// while(start <= end){

// let mid = Math.floor(start + (end - start) / 2) 

// if ( arr[mid]  === target ) return mid

// if( arr[start] < arr[mid] )
// if( arr[start] < target && target < arr[mid]){
//     end = mid - 1;
// }else{
//     start = mid + 1
// }
// else {
// if( arr[mid] < target && target < arr[end]){
//     start = mid + 1;
// }else{
//     end = mid - 1 
// }


// }}
// return -1
// }
// let res = searchrot([40,50,60,70,80,10,20,30],10) 
// console.log(res);
// // ----> 5 as the index of target(10) is at 5





// This is the version where we can easily understand every line 

// function rotfinmin(arr) {

//     let  n = arr.length;
//     let start = 0; let end = n-1;

//     while( start <= end ){
    
//          let mid = Math.floor(start + (end - start) / 2 )

//     if( arr[start] <= arr[end] )return start  

//     let prev = (mid - 1 + n) % n
//     let next = (mid + 1 ) % n 
    
//     if(arr[prev] > arr[mid] && arr[mid] < arr[next]  ){
//         return mid
//     }else if ( arr[mid] >= arr[start] ){
//         start = mid + 1
//     }else{
//         end = mid + 1
//     }}}

// let res = rotfinmin([4,5,6,7,1,2,3])
// console.log(res); 4





// function rotfinmin(arr) {
//     let n = arr.length;

//     let start = 0;
//     let end = n - 1;

//     while (start <= end) {

//         // If already sorted
//         if (arr[start] <= arr[end]) {
//             return arr[start];
//         }

//         let mid = Math.floor(start + (end - start) / 2);

//         let prev = (mid - 1 + n) % n;
//         let next = (mid + 1) % n;

//         // Check if mid is minimum
//         if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
//             return arr[mid];
//         }
//         // Left half sorted → go right
//         else if (arr[mid] >= arr[start]) {
//             start = mid + 1;
//         }
//         // Right half sorted → go left
//         else {
//             end = mid - 1;
//         }
//     }
// }

// let res = rotfinmin([7,6,5,4,1,2,3]);
// console.log(res); 1

