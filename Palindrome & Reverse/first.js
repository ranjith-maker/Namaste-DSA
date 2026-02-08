 
//                          //PALINDROME NO.


// function revers(num) {
//     if(num < 0) false
// let original = num

// let rev = 0;
// while( num > 0 ){

// let rem = num % 10;
// rev = ( 10 * rev) + rem        
// num = Math.floor(num / 10)     
// }

// return rev === original
// }
// let res = revers(-7227)
// console.log(res);


// with this code even negative no.s also handled , non palindrome returns false here

// if you don't write num/10 , then the no. 1234 never gets reduced 123 and 12 and 1 to stop the loop
// rev = ( 10 * rev) + rem   ---> this is where the reverse of num is being written
// num = Math.floor(num / 10)  ---> this is where it becomes 123 and why Math.floor here, bcoz we din't want anhy remainder to be 54.454, it removes decimals 
// why we keep it in the original first before even loop runs, 
// bcoz that's how we can compare it with the original ones, or else at the end the num becomes 0.2134 0 point something, which we can't do
// it is very very imp to keep the no. in the original befoer loop runs bcoz that's how it works right ....,only when it getse mutated we can get the next no. to last digit and do n/10 as well...
// Only in Programming everything syncs like a perfect puzzle





// function paline(num) {
    
//     let original = num;

//     let rev = 0;

//     while( num > 0){

// let rem = num % 10
// rev = (10 * rev) + rem

// num = Math.floor(num/10)
    

// }
// return {
//     reversed : rev,
//    palindrome: rev === original

// }

// }

// let res = paline(212545)
// console.log(res);



//                         // REVERSE NO.




// function revers(num) {

// original = num;             // we are storing the raw negative no. in original before even gets looped
// num = Math.abs(num)         //now the num gets converted to postitive with Math.abs(num) so it;ll loop if the num is positive

// let rev = 0;

// while(num > 0){

// let last = num % 10;
// rev = (10 * rev) + last
// num = Math.floor(num / 10)
// }

// let limit = 2**31;
// if(rev < -limit || rev > limit) return 0

// return (original < 0 ) ? -rev : rev

// }

// let result = revers(2**32)
// console.log(result);

// original = num;              we are storing the raw negative no. in original before even gets looped
// num = Math.abs(num)         now the num gets converted to postitive with Math.abs(num) so it;ll loop if the num is positive

// here even though the no. is palindrome , it wwon't even lopped even once why
// bcoz the condition run only when the num is higher than 0, here it is -343 negative right , it won't run
// this is what above palindrome is, now witht his sum , reversed integar, we are gonna loop it as well as return the num as well not 0
// return (original < 0 ) ? -rev : rev  -- this is the amazing part, we are saying that 
// return the reversed no. with minus (-) if the original no.is less than < 0 else return the reversed one it self incase of positive

// if(rev < -limit || rev > limit) return 0 --->if the limit is less than the reversed num or higher than the reversed num return 0




// Palindrome and reverse

function pal(n) {

    let original = n;
    n = Math.abs(n)

let revers = 0;

while(n > 0){

    let last = n % 10;
    revers = (10 * revers) + last;
    n = Math.floor(n/10)

}

return (original < 0) ? -revers : revers


}

let result = pal(-215);
console.log(result);




// if(rev < -limit || rev > limit) return 0





