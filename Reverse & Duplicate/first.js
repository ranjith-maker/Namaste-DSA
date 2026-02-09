

// Problem Statement:
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


// Consider the number of unique elements of nums to be k. To get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important, as well as the size of nums. eturn k.

// Examples:
// Example 1:
// Input: nums = [1,1,2]

// Output: 2, nums = [1,2,_]

// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]

// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).

// Constraints:
// 1 ≤ nums.length ≤ 3 * 104

// -100 ≤ nums[i] ≤ 100

// nums is sorted in non-decreasing order.
// Let's see what is Increasing and Decreasing order first
// Increasing Order
// Let are = [4,6,8,9,12,15,20 ]
// arr[i+1] > arr[i]
 
// Decreasing Order
// let are = [20,15,12,9,8,6,4 ]
// arr[i+1] < arr[i]





// Soreted and Non Decreaing Means 
// Each and Every Value should not necessarily be greater than the previous ones , yes it means opposite of increasing , also sorted non decreasing means 
// it isn't always greater than the previous one, so what it can be , it can't be less , and it isn't always higher as well 
// SO it can be DUPLICAtES,when they say the array is sorted non decreasing , it means it can have dupplicates
//  A Sorted Decreasing Array look like this
// let arr = [1,2,3,3,3,4,4,5,5,5,6,6,6,7,8,9,9 ]
// now you will say this as yes, it is sorted and non decreasing only , SO you r solution should be auch it can handle duplciates
// so arr[i+1] >= arr[i]

// remove the duplicates in-place
// whenever it says in-place , it means remove it in their place itself not to create a new onw

//  The relative order of the elements should be kept the same.
// it means the order of the question itself , let's say it is 1,2,3,4,4,5,5,5,6,6,6,7,7,8,8,9,10
// The ans should not be 1,5,7,10 like this , it needs to be in the question's order only, question's next number only 

// Then return the number of unique elements in nums.
// Return how many unique elements in the end, it means after removing all the duplicates, how many no.s left int he array, 
// return that as answer
// Ques - [0,0,1,1,2,2,3,3,3,3,4,4,4,4 ]
// We know the ans will be [0,1,2,3,4]
// Ans
// Now how can we code this
// we can use TWO POINTERS here
// One point will check unique elements only, like loops through each and every elem 

// Another point will shift the unique element to its respective place as the question says remove the duplicates in-place, 

// let keep 2 thing i and x
// i will go to the next next index to find the unique elemtns and
// x order it next to each other, now since it is a non-decreasing(it means increasing) it should order in increasing order only so can we safely say it is if i is 1 and x is 2 
// addded + 1 right 







// let unique = function (arr) {
// if(arr.length === 0)return 0

// let x = 0        // setting index value

// for(let i = 1; i < arr.length; i++){
// if( arr[i] !== arr[x] ){
// x++;
// arr[x] = arr[i]
// }
// }       

// return x + 1

// }

// console.log(unique([0,0,1,1,2,2,3,3,3,3,4,4,4,4,5,5,5]));




// if( arr[i] !== arr[x]  )  ---> here we're telling that arrays 1st value and 0th value is not the same, of course it won't be , one can't duplicate the 1st value, every duplicate compares it with their pervious value, 1st value cvan't be compared soo we salefly assume it is unique
//x++ as x becomes x++ 
// x value is now increases, so it checks with renewed x's index 
// when the loop goes to the 2nd index as 0,1,2   x has  become 1 , so now 2 isn't equal to 1, x++ hogya right ?

// return x + 1 , why we return x + 1 is becoz x is index value and not count, here we made it as arr[x] right, so since index is 0 , we return plus 1 sa we want to return how how many unique us there

// when the first 0 and the first 1 compares 
// x ++ happens in our array 















// let unique = function (arr) {
// if(arr.length === 0)return 0

// let x = 0        // setting index value
// for(let i = 0; i<arr.length; i++){

//     if(arr[i] > arr[x]){          
//         x++;
//         arr[x] = arr[i]
//     }
// }
// return x+1

// }

// console.log(unique([0,0,1,1,2,2,5,3,3,3,4,3,4,4,4]));


//         x++;
//         arr[x] = arr[i]
// with this 2 line x index value increases by 1 and in that place new i comes thats it 





//Remove the duplicate 


// function uni(arr){

// let x = 0;

// for(let i = 1; i<arr.length; i++){

//     if( arr[i] > arr[x] ){
//         arr[x] = arr[i]
//         x++;
//     }

// }

// return x+1;

// }

// let ans= uni([12,16,18,20,20,21,55])
// console.log(ans);




// Remove Duplicates

// function uni(arr,val) {
    
// let x = 0;

// for(let i = 0; i<arr.length;i++){
// if(arr[i]  !== val){
// arr[x] = arr[i]
// x++;
// }
// }
//  return x

// }


// console.log(uni([12,16,18,20,20,21,55],12));




// Reverse a string




// function reverse(s) {

// let n = s.length;
// let halfLength = Math.floor(n/2);

// for(let i = 0; i<halfLength; i++){

// let c = s[i];
// s[i] = s[n-1-i];
// s[n-1-i] = c

// }
    
// }
// let arr = ["h","e","l","l","o","a","l","l"]  
//  reverse(arr)
// console.log(arr);

// [  'l', 'l', 'a',   'o', 'l', 'l', 'e', 'h' ]





// function maxProfit(prices) {
    
// let min = prices[0]
// let max = 0;

// for(let i = 1; i < prices.length; i++){

// if( prices[i]-min > max ){        //max moves when selling today gives high profit than all previous profits
//     max = prices[i]-min;
// }

// if( prices[i] < min){    //when the curretn price is lower than the all days prices
//     min = prices[i]
// }

// }

// return max

// }


// let ans = maxProfit([7,3,5,1,6,4])
// console.log(ans);






// for(let i ="a"; i<="z"; i++){
//         console.log(i);
        
//     }

// Is this what we say sum of 10 natural numbers

let row = "";
for(let i = 1; i<=5; i++){
 row += i 

}

console.log(row);








