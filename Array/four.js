

//Sorting by Rohit - Strike DSA
// Input = [10,1,3,9,5]
// Output = [1,3,5,9,10]
//Filter in Amazon products

//Sort by Ascending Order 

// what ma struggling is that I selected the first comparingn value but I couldn't select all the rest of the values in teh array
// Thinking is 
// in the whole array , look what is smaller put him in the 0th index, 

// we put it just like the statememtn
// let small = 0;

// for(let i = 1; i < n; i++){

//     if(arr[i] < arr[small] ){
//         small = i
//     }
//what if 1 is less than 10 ?10 says then you take me place  , here small = i means index
//move the needle i , check again , put him in his index,





// function sor(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n; i++) {

//        // assume current position is smallest
//  let small = i;  

//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[small]) {
//                 small = j;
//             }
//         }

//         // swap
//         // [arr[i], arr[small]] = [arr[small], arr[i]];
//     }

//     return arr[small];
// }

// // let res = sor([10,1,3,9,5]);
// // console.log(res);

function sor(arr) {
    
 
let n = arr.length;

for(let i = 0 ; i < n; i++){

let small = i

for(let j = i + 1; j < n; j++){

if(arr[small] > arr[j]){

    small = j
}}

[arr[i], arr[small]] = [arr[small], arr[i]]

}

return arr
}

// let res = sor([10,1,3,9,5]);
// console.log(res);
// [ 1, 3, 5, 9, 10 ]






// Bubble Sort Order
// Arrange it in Ascending Order
Input = [10,5,18,4,2]
Output = [2,4,5,10,18]




function bubsort(arr) {
    
let n = arr.length;
for(let i = 0; i < n; i++){

for(let j = 0; j < n-1-i; j++){
if( arr[j] > arr[ j+1 ] ){
[arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
}}
}
return arr

}
let res = bubsort([10,5,18,4,2])
console.log(res); 
[ 2, 4, 5, 10, 18 ]


// // Comparing 0th index and 1st index

// // if 0th index is higher than 1st index , then swap, 0th goes to 1st ,1st comes to 0th index





//Sort all negatives in the left 

// function sornegs(arr) {

// let j = 0;

// let n = arr.length;
// for(let i = 0; i < n; i++){

// if(arr[i] < 0   ){

//     [arr[i] , arr[j]] = [arr[j] , arr[i]]
// j++ 
// }}
// return arr
// }
// let res = sornegs([22,-7,-9,-10,40,0,7] )
// console.log(res);  

// ---->[ -7, -9, -10, 22, 40 ]




// I can select nega as less than 0 but struggling how to put it in left side
// as I was struggling to put the -no.s in the starting index, now am able to do it,
// as I created j = 0 and that became arr[j] so now arrays 0th index , woowwww



// Sort Arrays with 0s 1s 2s


// function sordnf(arr) {
    
// let  count0 = 0 ; 
// let count1 = 0
// let count2 = 0;

// for( let i = 0; i < arr.length; i++){

// if(arr[i] === 0){
// count0++;
// } else if (arr[i] === 1){
// count1++;
// } else {
// count2++;
// }
// }

// let idx = 0;
// for(let i = 0; i < count0; i++){
//     arr[idx++] = 0;
// }
// for(let i = 0; i  < count1; i++){
//     arr[idx++] = 1;
// }
// for(let i = 0; i < count2; i++){
//     arr[idx++] = 2
// }




// return [count0, count1, count2]

// }



// let res = sordnf([2,0,2,1,1,0,1,2,0,0] )
// console.log(res);
// [  0, 0, 0, 0, 1,  1, 1, 2, 2, 2 ]


// DNF Logic
// Gonna follow 2 point approach
// since , my leftend side I need 0s  rightendside 2s, in th middle element gets what is left which is 1s
// SO I take variable as left = 0 , right = n-1 = 2, index =0 as normal way to add like i++




// function sordnf(arr) {
   
// let n = arr.length;

// let left = 0;
// let right = n-1;
// let index = 0;

// while( index <= right){

// if( arr[index] ===  0 ){
//  [arr[index], arr[left]] = [arr[left] , arr[index]]
// index++;
// left++;
// }

// if( arr[index] === 1 ){
//     index++;
// }

// if(arr[index] === 2){
//     [arr[index] , arr[right]] = [arr[right], arr[index]]
//     right--
// }

// }
// return arr;
 
// }
// let res = sordnf([2,0,2,1,1,0,1,2,0,0] )
// console.log(res);

// [  0, 0, 0, 0, 1,  1, 1, 2, 2, 2 ]


//Rotate an Array by K times 2  times
// this is a new way of K times

// Input = [10,20,30,40,50,60]
// Output = [50,60,10,20,30,40]


// function rotK(arr,k) {
    
// let n = arr.length;

//     for(let i = 0; i< n; i++){
//         let newIndex = (i + k) % n 
//     arr[i] = arr[newIndex]

//     }

// return arr


// }

// let res = rotK([10,20,30,40,50,60],2)
// console.log(res);



// how to think this is , look at the answer array and question array and give an index for both 

// i+k % n = formula
// 10,20,30,40,50,60
// 0, 1, 2, 3, 4, 5

// 50,60,10,20,30,40
// 0, 1, 2, 3, 4, 5


//Week 3 Assignment sums

// Key Pair Sum, it means you are given 1 array, 1 (X) value 
// if any pair in the array can be a sum of the X
// Input = [1,4,45,6,8,10]

// arr[3] + arr[5] = 16 . If you find the pair then return true or false

// it means we need to taks all the pairs first and sum  it , if it equal to the X(16) then true


// function keyPair(arr,sum) {
    
// let n = arr.length;

// for(let i = 0; i < n; i++ ){

// for(let j = i+1; j < n; j++){

// if((arr[i]  + arr[j]) === sum ){
// return true
    
// }}}

// return false

// }

// let res = keyPair([1,4,45,6,8,10],16)
// console.log(res); true




// function twoSum(arr,target) {
    
// arr.sort((a,b) => a - b)

// let n = arr.length;
// let left = 0;
// let right = n-1;


// while( left < right   ){

// if( arr[left] + arr[right] === target  ){

// return true

// }else if( arr[left] + arr[right]  < target ){
// left++;
// } 
// else{
//     right--
// }}
// return false

// }

// let res = twoSum([1,4,45,6,8,10],16)
// console.log(res); 
// true
// here after true we didn't write left++, right-- as whatver code comes after return is deadcode in that if block


// You must move at least one pointer every loop iteration.

// Otherwise:
// Infinite loop.
// Same pair repeated forever.

// // Best time to Buy and sell
// function stock(arr) {
 
//     let curMin = arr[0]
//     let curMax = 0;

//     for(let i = 1; i < arr.length; i++){

// curMin = Math.min(arr[i], curMin)
// curMax = Math.max(curMax, arr[i] - curMin ) 
//     }

// return  curMax


// }

// let res = stock([7,1,5,3,6,4])
// console.log(res); //---> 5