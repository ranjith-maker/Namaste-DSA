


// // 4 times 012

// for(let i = 0; i <= 3 ; i++  ){
// for(let j = 0; j <=2; j++ ){
//   //  console.log(j);
    
// }

// }

// for (let i = 0; i <= 3; i++) {       // Outer loop (4 iterations)
//     for (let j = 0; j <= 2; j++) {   // Inner loop (3 iterations per outer loop iteration)
//         // console.log(j);               // This line runs 12 times in total
//     }
// }

// // How many times it'll run 4
// // How much it'll run 012 so 3 nums , multiply both 4 X 3 = 12 times 
// // the loop'll run for 12 times


// // for(let i = 0; i< 3; i++ ){
// //     for(let j = 0; j< 3; j++){
// //       console.log( "i = " + i, "j = " + j  );
        
// //     }
// // } //Visual representation


// // for(let i = 0; i < 3; i++ ){
// //     for(let j = 0; j < i; j++){
// // console.log(i,j);
        
// //     }
// //}

// //

//     // for(let i = 0; i < 3; i++){
//     // for(let j = i; j > 0; j--){
//     //     console.log(i,j);   
//     // }
//     // }

//     // 1 is higher than 0 
//     // so 1 1
//     // so 2 > 0, 1>0
//     //  11  
//     //   22
//     //   21



//     // for(let i = 0; i < 3; i++){
//     // for(let j = i; j >= 0; j--){
//     //     console.log(i,j);   
//     // }
//     // }

// // 0 0
// // 1 1
// // 1 0
// // 2 2
// // 2 1
// // 2 0



// for(let i = 5;  i > 0; i--){

//     for(let j = 0; j < i; j++ ){
//        // console.log(i,j);
        
//     }

// }

// //



//     for(let i = 5; i > 0; i--){
//         for(let j = 0; j < i; j++  ){
//            // console.log(i,j);
            
//         }
//     }

// //  j<5

// // 50
// // 51
// // 52
// // 53
// // 54

// // 40 
// // 41
// // 42
// // 43

// // 30
// // 30
// // 30

// // 20
// // 21

// // 10


// for(let i = 10; i > 0; i--){
//     for(let j = 0; j < i; j++){
//        // console.log(i, j);
//     }
// }


// //10 times
// //101
// //10
// //
// //
// // Own Practice
// for(let i = 7; i < 10; i++){
//     for(let j = 0; j < 5; j++){
//      //  console.log(i, j);
//     }
// }

// for(let i = 0; i < 4; i++){
//     for(let j = 3; j > i; j--){
//       //console.log(i, j);
//     }
// }


// for(let i = 6; i >= 0; i--){
//     for(let j = 0; j < 6; j++){
//       //  console.log(i, j);
//     }
// }

 
// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < i; j++){
//      //   console.log(i, j);
//     }
// }


// for(let i = 4; i < 8; i++){
//     for(let j = 0; j < i; j++){
//         //console.log(i, j);
//     }
// }




// for(let i = 0; i < 5; i++){
//     for(let j = 0; j <= i; j++){
//         //console.log(i, j);
//     }
// }




// for(let i = 9; i > 3; i--){
//     for(let j = 0; j < i; j++){
//       //  console.log(i, j);
//     }
// }


// for(let i = 1; i < 4; i++){
//     for(let j = 0; j < i; j++){
//        // console.log(i, j);
//     }
// }

// for(let i = 5; i >= 0; i--){
//     for(let j = 0; j < i; j++){
//      // console.log(i, j);
//     }
// }


                       //PATTERN PRINTING
// let n = 4
//     for(let i = 0; i < n; i++){
//         let row = ""
//         for( let j = 0; j < n-1; j++ ){
//          row += "*"   
//         }
//     console.log(row);

//     } 



// let n = 4;

// for(let i = 0; i < 5; i++){
//     let row = ""

//     for(let j = 1; j <= i ; j++){
//         row += "*"
//     }
// console.log(row);
// }

// *
// **
// ***
// ****
// *****

// so i forms a row 
// tell me how many rows does this have pyramid ahve ?
// 5 rows, so i<5 ---> 0 1 2 3 4 
// so i always starts from 0 only 
// so when i is 0 j prints 1 time  
// wehn i is 1 j prints 2 times 
// when i is 2 j prints 3 times 
// when i is 3 j prints 4 times 
// so everytime j is 1 number ahead of i right , why not we write j < i + 1





for(let i =1; i<=5; i++){
    let row = ""

 for(let j =1; j <=i; j++){
row += j
 }
// console.log(row);

}








// 1
// 12
// 123
// 1234
// 12345

for(let i = 1; i<=5; i++){
    let row ="";
    for(let j =1; j<=i ; j++){
        row += i ;
    }
// console.log(row);

}


//1
//22
//333
//4444
//55555


for(let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j <= i  ; j++){
        row += j
    }
// console.log(row);

}

for(let i = 5; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= i  ; j++){
        row += j
    }
// console.log(row);

}

// 12345
// 1234
// 123
// 12
// 1




// for(let i = 1; i<=5; i++){
//     let row ="";
//     for(let s = 5-i; s >= 1  ; s-- ){
//         row += " "
//     } 
//     for(let j = 1; j<=i; j++){
//         row += j
//     }
//     console.log(row);
// }


//    1
//    12
//   123
//  1234
// 12345






for(let i = 5; i >=1; i--){

    let row = "";
    for(let j = 1; j <= i; j++ ){
        row +=j 
    }
// console.log(row);

}



// for(let i = 1; i <= 5; i++){
//     let row = "";

//     for(let j = 1; j <= i; j++){
//         row += j % 2
//     }
//     console.log(row);
    
// }

// 1
// 10
// 101
// 1010
// 10101

// Binary printing always % 2 only since j is 12345 we can do j%2




for(let i = 1; i<=5; i++){
    let row = ""
  for(let s = 1; s <= 5- i; s++){
    row += " " 
 }
for(let j = 1; j <= 2 * i  - 1 ; j++){
    row += j
}
// console.log(row);
}

// }

//     *
//    ***
//   *****
//  *******
// *********



for(let i =1; i<=5; i++){
    let row = "";

for(let k = 4; k >= i; k--)
row += " "
    for(let j =1; j <=i; j++){
        row +=i
    }
// console.log(row);

}








