

// let arr = [10,15,11,8,3]
// now how to name the last character of array ? arr[4] = 3
// I did this as i know the array length what ifI don't know?

// SO I did this 

// let arr = [10, 15, 11, 8, 3];
// let n = arr.length;

// let lastElement = arr[n - 1];

// console.log(lastElement); // 3

// let last2Sec = arr[n - 2];

// console.log(last2Sec ); // 8

// let last2Third = arr[n - 3];

// console.log(last2Third ); // 11

// let last2For = arr[n - 4];

// console.log(last2For); // 15


// let last2Fiv = arr[n - 5];

// console.log(last2Fiv); // 10
// console.log(arr); //----> [ 10, 15, 11, 8, 3 ]


// similarly how to select from the first


// let arr = [10, 15, 11, 8, 3];
// let n = arr.length;
// let zero = arr[0] 
// console.log(zero); 10

// let one = arr[1] 
// console.log(one); 15

// let two = arr[2] 
// console.log(two); 11

// let three = arr[3]
// console.log(three); 8

// let four = arr[4]
// console.log(four); 3
// console.log(arr); --> [10, 15, 11, 8, 3];







// Rotate the number, only one number 

// arr = [10,15,11,8,3]
// Rotated Array = [3,8,11,15,10]
// Solving steps 
// so rotated array means last no. comes to the first place and everyno. moves to next position
// 1 - Start by storing the last No. in a temp varible let temp = arr[n-1]
// 2 - iterate loop from n-2 to 0 second last till 0th index
// i goes to i + 1 since we need to shift all the arr[i]'s it to next one place we write this line arr[i+1] = arr[i]
// 3- 0th index = temp ,finally give this to arr's pth index 

// function rotat(arr) {
    
// let n = arr.length; 

// let one = arr[n-1];

// for(let i =(n - 2);   i >= 0;   i--){
//        arr[i+1] = arr[i]
// }

//  arr[0] = one 
//     return arr; 

// }

// let res = rotat([10,15,11,8,3,])
// console.log(res);  //---> [ 3, 10, 15, 11, 8 ]



// 2)
// Rotate the Array
// Given an integar array nums, rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7] k =7
// Output: [5,6,7,1,2,3,4]

// Explanation : 
// Rotate 1 steps to the right : [7,1,2,3,4,5,6]
// Rotate 2 steps to the right : [7,6,1,2,3,4,5]
// Rotate 3 steps to the right : [7,6,5,1,2,3,4]

// -----
// Now if I solve this problem like last one, the code look like this




// function rotat2(arr) {

//     let n = arr.length;
//     let one = arr[n-1]
//     let two = arr[n-2]

// for(let i = n-3; i >= 0; i--){
//     arr[i+2] = arr[i];
// }    

// // arr[0] = one;
// // arr[1] = two;

// return arr
// }

// let res = rotat2( [1,2,3,4,5,6,7] )
// console.log(res);  //---> [  7, 6, 1, 2, 3, 4, 5]









// let res = rotatK( [1,2,3,4,5,6,7] )
// console.log(res);  //---> [  7, 6, 5, 1, 2, 3, 4]
// Rotating K Times now, not like specific 1 or 2 times,
// SO it needs to be automated can't repeat like above,
// [1,2,3,4,5,6,7] will look like [ 5,6,7, 1, 2, 3, 4]
// last three is just coming like a gang and sits in the first, so first three is 567 and 1,2,3,4 should come in 4 5 6 7
// we are gonna create a new array first here, as nums []
// so loop starts from 0 to last only, 
// in the array, nums[i+k]%n = 0+3%7 = 3%7 = 3 so first element goes to 3rd index , arr[i] 1 came in 3rd index now.
// and it does it to all, 2 is 4, 3 is 5th , 4 is 6th, now 5 is on 0th index right how? just as the formula that every i followed
// Now 5 is i+k%7 = 4+3 % 7 = 7%7 = 0th index, 6 is i+k%7= 8%7= 1st index and 7 is 9%7= 2nd index 567 1234 got it
 

// 
// 


// function rotatK(arr, k) {
  
//     let n = arr.length;
// let num = [];

// for(let i = 0; i < n; i++){
//  num[(i+k) % n] = arr[i] 

// }    
// return num
// }

// let res = rotatK([1,2,3,4,5,6,7], 3)
// console.log(res); //--->[5, 6, 7, 1, 2, 3, 4]
// now since we have created a new array and passed all the values in that array , space is increased right,we should be totating inside that itself so that it'll be less space complexity







// function rotatK(arr,k) {
    
// let n = arr.length;
//  k = k % n 

// function reverse(start, end) {
  
// while(start<end){

// [arr[start], arr[end]] = [arr[end], arr[start]]
// start++;
// end--;
// }
// }

// reverse(0, n-1);
// reverse(0,k-1);
// reverse(k,n-1);

// return arr;
// }


// let res = rotatK([1,2,3,4,5,6,7], 3)
// console.log(res); //

// let n = 7;
// let k = 12;
// let ans = k % n 

// console.log(ans);--> 5, thats why we do it this way if it is rotated by k-12 times,
// still it be same and right ans.



//SUm of Unique elements

// function uniq(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {

//         let found = false;

//         for (let j = 0; j < arr.length; j++) {

//             if (i === j) {
//                 continue;   // skip same index
//             }
//             else if (arr[i] === arr[j]) {
//                 found = true;   // duplicate caught
//                 break;
//             }
//         }

//         if (found === false) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// let res = uniq([10,20,30,20,20,20,30,40]);
// // console.log(res);

















// function sumOfUnique(nums) {
//     let freq = {};
    
//     for(let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if(freq[num]) {
//             freq[num] += 1;
//         } else {
//             freq[num] = 1;
//         }
//     }
    
//     let sum = 0;

//     for(let key in freq) {
//         if(freq[key] === 1) {
//             sum += Number(key);  // Convert string key to number
//         }
//     }
    
//     return sum;
// }

// // Test
// console.log(sumOfUnique([1, 2, 3, 2]));  // Output: 4 (1+3)
// console.log(sumOfUnique([1, 1, 1, 1]));  // Output: 0
// console.log(sumOfUnique([1, 2, 3, 4, 5])); // Output: 15







// function sumOfUnique(arr) {

//     let freq ={};

//     for(let i = 0; i<arr.length; i++){
//         const num = arr[i]
//     if(freq[num]){
//         freq[num] += 1;
//     } 
//     else{
//         freq[num] = 1
//     }
//     }

// let sum = 0 ;
// for(let key in freq){
//     if(freq[key] === 1){
//        sum += Number(key)
//     }
// }

// return sum

// }

// console.log(sumOfUnique([1, 2, 3, 2])); ---> 4

















