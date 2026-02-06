                    // NAMASTE DSA

       //Started with Loops
// function greet(name){

// console.log("Hello", name);

// }
// greet("OOPs")


// let sum = 0;
// for(let i = 1; i<101; i++){
//     sum +=i;
    
// }
// console.log(sum);




// function eligible(age) {
    
// if(age < 18 ){
//     console.log("You can vote by next year");
// } else {
//     console.log("You can vote");
    
// }

// }

// eligible(51)
// eligible(15) 



// function isEvenorOdd(num) {

//     if(num % 2 ===  0){
//         console.log("It is Even");
//     } else {
//         console.log("It is odd");
        
//     }
// }

// isEvenorOdd(1)
// isEvenorOdd(7879)
// isEvenorOdd(12)
// isEvenorOdd(0)


// for(let i = 12; i>0; i--){
//     // if(i%2 === 0 )
//     console.log("time is " + i);
    
// }

// let are = [10,20,30,11,55,75,45,59,80]

// for(let i =0; i<are.length; i++){
//     if(are[i] % 2 === 0)
// console.log(are[i]);

// }


// Write a function that searches for a element in an array and returns an index if the element is not present then just return -1

// function searchIndex(x,are) {
    
// for(let i = 0; i<are.length; i++){
//     if(x === are[i]   ){
//         return i
//     }
// } 
// return "Not found"
// }


// console.log(searchIndex(20,[10,20,30,40,50]))
// Ans 1 as 20 is at 1st posiiton in the are Array
// now, I'll pass a number nad that number is inside that array you need to give me the no.'s position inside the array


// 4- Write  a function that returns only negative numbers in the array


// function negativeNums(are){
   
// negative = [];
//     for(let i = 0; i<are.length; i++){
//         if(are[i] < 0  ){
//     negative.push(are[i])
//         } 
//     } return negative
// }

// let res = negativeNums([10,-20,1,-56,89,-87,55,-11])
// console.log(res) ---> [ -20, -56, -87, -11 ] as these are negative Numbers in the array

// function negativeNums(are) {
// let count = 0
//     for(let i = 0; i<are.length; i++){
//         if( are[i] < 0 )
//             ++count;
//     }
//     return count
// }

// let res = negativeNums([10,-20,1,-56,100,-87,55,-11])
// console.log(res) ---> 4

// Write a fucntion that returns a largest number in the array


// function largest(are) {
// let max = -Infinity
//     for(let i = 0; i<are.length; i++){
// if(are[i]  > max ){

//     max = are[i]
// }
//     }
// return max
// }

// let res = largest([10,20,99,56,100,55,11])
// console.log(res)  

// here first what we want, largest no. from the array
// for that we need to compare a no. with array right, that's why max = -Infinity (Infinity is unlimited, the highest number possible in the world , so if we set minus Infinity -Infinity it is the lowest possible number in the world) (making the finding easy by assigning max as 0 ) 
//  we assigned max as 0 and wrote the condition as if arrays i(i is inside characters) is higher than max , then the max will become that arrays character arr[i] 
//


// function smallest(are) {

//     let min = 100000;
//     for(let i = 0; i<are.length; i++){
//         if(are[i] < min ){
//             min = are[i]
//         }
//     } return min

// }

// let res = smallest([10,20,99,56,100,55,-150])
// console.log(res)  ----> -150

// so since we're finding  a smallest no.we're gonna assign  mina as the highest no. ever possible 




// Find the second smallest number in the array


// Find the second largest number in the array


// function secondbigno(arr) {

//     if(arr.length < 2){
//         return null
//     }

// let first = -Infinity;
// let second = -Infinity;

// for(let i = 0; i<arr.length; i++ ){
// if( arr[i] > first ){
//     second = first
//     first = arr[i]
// } else if( arr[i] > second && arr[i] < first){
//     second = arr[i]
// }

// }
// return second

// }

// let res = secondbigno([12,20,10, 20])

// console.log(res);
// Ans - 12

//     second = first
//     first = arr[i]
// } else if( arr[i] > second && arr[i] !== first){
// with this, what we are telling is after the second gets the first largest no.
// first also gets the first largest no. in 
// the else if condition is we are asking I want the big no. from the array if it is higher than my current updated no. 
// && arr[i] !== first ,with this, and also I want that is not a current updated first big no.


// Finding the index of the given no. from the array
// Duplicate also there
// function idx(x,arr) {
//     let indices = []
//     for(let i = 0; i<arr.length; i++ ){
//         if(arr[i] === x ){
//             indices.push(i)
//         }
//     }
// return indices
// }

// let res = idx(20,[12,20,10,20])
// console.log(res); //----> [1,3]

// here you are erturning a index no. of the given no.(20)
// but the there are 2 20s inside the array , you can just create an empty array and push it into that return that simple
// Scroll in above we have noted this, like if you ewawnt more than one answer then you should keep, create an array and keep it empty and asthe condition met
// you can push it into the empty array






// function nega(arr) {
// largest = -Infinity;

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]  < 0  && arr[i] > largest    ){
//      largest = arr[i]
 
//         }
//     }
// return largest;
// }



// let res = nega([12,20,-10,-20,-3])

// console.log(res);

//wrtie a function that returns only negative in the array

// function nega(arr) {
    
//     if(arr.length === 0){
//         return "Array is empty"
//     }

// let count = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] <  0 ){
//         count.push(i)
//     }
// }
 
// if(count.length === 0){
//     return "There is no negative no."
// }

//  return `their indecies are ${count}`
// }

// console.log( nega([12,20,10,20,3])    );

// console.log(  nega([12,20,-10,-20,-3])   );

// console.log(  nega([])   ); Array is empty


// Find the Largest  second negative in the given array

// Edge cases 
// a- when there is no negative return a staement
// b- Deal with duplicates as well

// Returning the second negative no.



// function high(arr) {

// let first = -Infinity;
// let second = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       if (arr[i] > first) {
//         second = first;
//         first = arr[i];
//       } else if (arr[i] > second && arr[i] !== first) {
//         second = arr[i];
//       }
//     }
//   }


// if( second === Infinity ){
//     return "There is no negative numbers"
// }
// return second
// }

// console.log( high([12,20,10,10,-3,-18,-45,-18,-20,-20])    ); 
// console.log( high([12,20,10,10,3,18,45])    ); 

// -18
// -Infinity



// Find the Smallest Negative number in the array


// function small(arr) {
    
//     let second = Infinity;

// for(let i = 0; i< arr.length; i++){
//      if( arr[i] < 0 ){
//         if( arr[i] < second ){
//             second = arr[i]
//         }
//      }
// }
// if(second === Infinity){
//     return "There is no Negative number in the array"
// }

// return second

// }

// console.log( small([12,20,10,10,-3,-18,-45,-18,-20,-20])    ); 
// console.log( small([12,20,10,10,3,18,45])    ); 
// -45
// There is no Negative number in the array





























