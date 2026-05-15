//Binary DSA


// function fnlidx(arr,target) {
 
//     let n = arr.length;
//     let start = 0; let end = n-1;

//  let idxtwo = -1; 
//  let idxone = -1; 
// while( start <= end){

// let mid = Math.floor(start + (end - start ) / 2 )

// if( arr[mid] === target){
//  idxone = mid
//  end = mid - 1;

// } else if( arr[mid] < target){
//     start = mid + 1;
// }else{
// end = mid - 1;

// }}

//  n = arr.length;
//  start = 0;  end = n-1

//  while( start <= end){

//     let mid = Math.floor( start + (end - start) / 2  )

// if(arr[mid] === target){
// idxtwo = mid
// start = mid + 1;

// } else if(arr[mid] < target ){
//        start = mid + 1;
// } else{
// end = mid - 1; 
// } }
//  return idxtwo -idxone +1 
// }

// let res = fnlidx([5,7,7,8,8,8,10],8)
// console.log(res);



// function peakidx(arr) {
//     let n = arr.length;
// let start = 0; let end = n-1    

// while( start < end   ){

// let mid = Math.floor(start + ( end - start) / 2)

// if(arr[mid] < arr[mid + 1] ){
//     start = mid + 1
// }else{
//     end = mid

// }}
// return end
// }
// let res = peakidx(  [3,7,10,14,17,19,20,22,14] )
// console.log(res);  //---> 6

    
// O(n) approach using HashMap
// function findPairsHashMap(arr, k) {
//     if (k < 0) return 0;

//     const map = new Map();

//     // count occurrences
//     for (const num of arr) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }

//     let count = 0;

//     for (const [num, freq] of map.entries()) {
//         if (k > 0 && map.has(num + k)) {
//             count++;
//         } else if (k === 0 && freq > 1) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example
// console.log(findPairsHashMap([1,1,1,1,1], 2)); //0




// Find K-Closest Element
// function kClosest(arr, x, k) {

//     // jus sub it
//     let temp = arr.map(num => ({num,dist: Math.abs(num - x)
//     }));

//     // sort it
//     temp.sort((a, b) => a.dist - b.dist);

//     // take first k elements
//     return temp.slice(0, k).map(obj => obj.num);
// }

// console.log(kClosest([1, 3, 7, 8, 9], 6, 3));


// Another  version of the same sum of finding K-Closest elem
// First of all, what they did in the previous version is
// They subtracted all the elem with x and sorted it , now they took first K elems in the sorted array 
// The question is also this only, we need get the first K number of the x, the arr is
// [12,16,22,30,35,39,42,45,48,50,53,55,56] 
// X is 35 , K = 4 it means I need the nearest 4 elems of x, here nearest 4 elems od 35 is 30,35,39,42


// function KcloElem(arr, x , k) {

//     let n = arr.length;
//     let start = 0;
//     let end = n-1
    
// while( end - start >= k  ){

//     if( x- arr[start]  > arr[end] - x  ){
//        start++
//     }else{
//         end--
//     }}
// return arr.slice( start, end+1  )
// }

// let res = KcloElem([12,16,22,30,35,39,42,45,48,50,53,55,56], 35, 4)
// console.log(res); [ 30, 35, 39, 42 ]
// T&C = O(n-k)
// We first sub it, how, x - start and with end -x, if start is high then ++ reduce the window size as long as they meet the condition
// And how we move when end – start >= K , then only we move here
 



// function rotTimes(arr) {

// let n = arr.length;
// let start = 0; let end = n-1;
// let ans = Infinity
// let idx = -1
// while( start <= end ){

// let mid = Math.floor(start + (end - start) /2)
 
// if(arr[start]  <= arr[mid] ){
// if(arr[start] < ans){
//   idx = start
//   ans = arr[start]

// }
// start = mid + 1

// }else {  

//   if(arr[mid ] < ans ){
//     idx = mid
//     ans = arr[mid]

//   }
//       end = mid-1
// }}
// return idx
// }

// let res = rotTimes([3,4,5,1,2])
// console.log(res); 3
// Number of rotations = index of the minimum element, so if we understand the rotate find mini this mini is how many times rotated is easy



// function lasWd(str) {

//     let n = str.length - 1

//     while( n>=0 ){

//         if( str[n] !== " " ) break;
//        --n
//     }

//     let count = 0;

//     while( n >= 0 ){
//         //as soon as you find the gap break it
//     if(str[n] === " ") break
//      --n;
//      ++count;
// }
// return count
// }

// let res = lasWd("fly     me to the    moon                ")
// console.log(res); //4

// since I need to find the last word, we start from the last, 
// when last has so many spaces, what we can do is , we can ignore the spaces
// as soon as we find the word, we start counting until the spaces comes ,
// it means before m.

//         if( str[n] !== " " ) break;
//  I wanna run as long as I find the word, so checking as break the loop as soon as you dont find the gap else run backward to find the word as you're in the " " gap 

//         //as soon as you find the gap break it
//     if(str[n] === " ") break

// we did this approach with 1 loop in second approach

// function lasWd(str) {

// let n = str.length - 1
// let count = 0;

// while( n >= 0 ){

// if( str[n] !== " "   ){
//     count++
// }else if(count > 0){
//     break
// }
// n--
// }return count
// }
// let res = lasWd("fly     me to the    moon                ")
// console.log(res); //4

// O(1) space means the amount of extra memory does not grow with input size.	

// Jewels and Stones
//Brute force
// function JwelSton(jwels, stone) {
    
// let count = 0;

// for( let i=0; i<stone.length; i++ ){

// for(let j=0; j<jwels.length; j++){

//  if( jwels[j] === stone[i] ){
//     count++
//     break
//  }}}
// return count
// }


// let res = JwelSton("aA" , "aaAbbbbbb" )
// console.log(res); //3

// Optimised Approach
// function JwelSton(jwels, stone) {

// let jSet = new Set()

// for(let i=0; i<jwels.length; i++){

//      jSet.add(jwels[i])
//     }

//     let count = 0;
// for(let j=0; j<stone.length; j++){

// if(jSet.has(stone[j]))
//     count++

// }

// return count
// }


// let res = JwelSton("aA" , "aaAbbbbbb" )
// console.log(res); //3


// 3)Find most frequent vowels and consonant

// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// here if we see it clearly, successes has = vowels--> 1u, 2e,  consonant ---> s-4c--->2 so taking only max of both and adding , 2vow 4cons = total 6



// Split a String in a balanced string 


// function Twins(str) {
    

// let R = 0; let L = 0;
// let count = 0;

// for(let i=0; i<str.length; i++){

// if( str[i] === "R" ){
//     R++
// }else{
//     L++
// }

// if( R === L ){
//     count++
//     R = L = 0
// }}
// return count

// }

// let res = Twins("RLRRLLRLRL")
// console.log(res); //4



// function Twins(str) {
    
// let temp = 0;
// let count = 0;

// for(let i=0; i<str.length; i++){

// if( str[i] === "R" ){
//     temp++
// }else{
//     temp--
// }
// if(temp === 0){
//     count++
// }}

// return count

// }

// let res = Twins("RLRRLLRLRL")
// console.log(res); //4





// function reverseII(str,k) {

//     let st = str.split("")

// for(let x=0; x<st.length; x= x+(2*k) ) {   
//     let n = k
//     let mid = Math.floor(n/2)
// for(let i=0; i<mid; i++ ){

// let temp = st[x+i]
// st[x+i] = st[x+n-i-1]
// st[x+n-i-1]  = temp 


// }}

// return st.join()

// }
// let res = reverseII("abcdefghiklm", 3)
// console.log(res)

// Valid Palindrome Approach 1 (extra space)

// function isPalindrome(str) {

//   let s = str.toLowerCase()

//   let filtered = ""
//   let rev = ""

//   for(let i = 0; i < s; i++ ){
 
//     if( s[i].match([/a-z0-9/i])  ) {

//          filtered += s[i] 
//          rev = s[i] + rev
        
// }}
// return filtered === rev
// }

// let res = isPalindrome("Race CAR ")
// console.log(res); true


// fitler will add--  r a c e 
// rev is   ecar

// while(start <= end)
// → "Keep searching while range is valid."
// while(start < end)
// → "Keep shrinking until only one candidate remains."


// function isPalindrome(str) {

//   let n = str.length;
//   let i = 0;
//   let j = n-1;

//   while(i < j){

// if(! str[i].match(/[a-z0-9]/i) ){
//   i++
// }else if(! str[j].match(/[a-z0-9]/i) ){
// j--
// }else if(str[i].toLowerCase() !== str[j].toLowerCase()){
//   return false
// }
// i++
// j--
// }
// return true
// }
// let res = isPalindrome("Race CAR ")
// console.log(res); true
// 3 - Longest Odd no. in a string
// Substring means part of string , here they asked largest ODD sub string, 
// so if question is 2510004 I'll cutting from the last as long as 251,
//  because when the last digit is odd, it is a odd as well as it is the 
// largest also  and whole string can also be considered as sub string depending on the condition, for ex - 2500007 it is also a valid largest odd sub string
// tell me what is the largest odd sub string here ? 252680 , nothing so return ""

// function LarSubstr(s) {

// let n = s.length - 1

// while(n >= 0){
// if( s[n] % 2 === 1 ){

// return s.slice(0, n+1)

// }
//   n--
// }
// return ""
// }

// let res = LarSubstr("450236")
// console.log(res); 45023
//   here our JS automatically ocnverrts it into a number even though string is a input 
