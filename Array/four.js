

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

let res = sor([10,1,3,9,5]);
console.log(res);
[ 1, 3, 5, 9, 10 ]






Bubble Sort Order
Arrange it in Ascending Order
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



