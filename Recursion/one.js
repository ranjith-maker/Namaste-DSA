/*

Recursion 101
Function calls itself to solve smaller version of the same problem
Calling the same fn inside the same fn

Two Parts 
1) Base case – stop condition when to stop calling itself, else it'll be an infinite loop
2) Recursive case – part where fn call itself

Real life example
1) Queue of people
2) Comment threads, like reddit
3)Org. Hierarchies , every senior has many ppl reporting them

This'll be an infinite loop, give us a range error in node internals
function fun(num) {
    console.log(num)
    num = num - 1
    fun(num)   
}
let a = 5
fun(a)
 this is where we need to find a edge case, what could be an edge case here ? when num hits 0 returnt the fn


function fun(num) {
if(num === 0) return
    console.log(num)
    num = num - 1
    fun(num)   
}
let a = 5
fun(a) 5 4 3 2 1
so whenever we write Recursion the first thing we write is our base case only which'll actually stop the recursion
Infinite recursion leads to Stack Overflow

When to use Recursion
1) when the problem can be broken into sub problem
2) Trees and Graphs
3) Backtrakking, DP, Divide and Conquer

2)Sum of first n numbers
ABCDEF
Now if we ask how many ppl are behind A, the ans can be
1+p(B)  1+ how many ppl behind B 
So F'll say to E I have 0 ppl behind me and E'll say D, I have 1 ppl behind me , E just adds 1 when saying to D
D does the same, D'll say to C, I have 2 ppl behind me .
C does the same, C'll say to B, I have 3 ppl behind me .
B does the same, B'll say to A, I have 4 ppl behind me .


Sum(5) = 1+2+3+4+5 = 15

function sum(n) {
   
    if(n === 0) return 0
    return  n + sum(n-1)

}
sum(5)




Sum of all elements in the array

/*
function sum(n) {

if( n === 0 ) return arr[0]

return arr[n] + sum(n-1) 

}

let arr = [5,3,2,0,1]

console.log(sum(arr.length - 1)); //11



Sum of all odd no. in the array

let arr = [1, 2, 3, 4, 5, 6, 7];

function sum(n) {
    //sum's nature case
  let odd = arr[n] % 2 === 1;

  // Base case
  if (n === 0) {
    return odd ? arr[n] : 0;
  }

  // Recursive case
  return (odd ? arr[n] : 0) + sum(n - 1);
 
}

console.log(sum(arr.length - 1)); 16


function sum(n) {
  if (n < 0) return 0;

  return (arr[n] % 2 ? arr[n] : 0) + sum(n - 1);
}

console.log(sum(arr.length - 1)) 16



*/

//Mostly we start recursion from last no. so that we can start in the 0 or first elem as index of 0


/*Factorial using Recursion , ! this excalmation mark denotes factorial


function fac(n) {
  
if(n === 1 ) return 1

return n * fac(n-1)

}

console.log(fac(5)); //120


Power of 2

function powOfTwo(n) {
  
if(n === 1) return true
if((n%2 ===1) ||( n < 1) ) return false

return powOfTwo(n/2)
}



console.log(powOfTwo(8));

Every power of 2 eventually becomes 1 when divided by 2 repeatedly:

8 → 4 → 2 → 1
16 → 8 → 4 → 2 → 1
Part 1: n % 2 === 1

This means n is odd.
Part 2: n < 1 ====> Powers of 2 are positive numbers:



Climbing Stairs
function climb(n) {
  
if( n === 0 || n===1) return 1

  return climb(n-1) + climb(n-2)
}

console.log(climb(5)); //8 




Print array
let arr = [10,20,30,40,50,60]
let i = 0

function fun(nums,i) {
  
  if(i >= nums.length - 1) return nums

  return nums = fun(nums, i+1)

}

console.log(fun(arr,i) ) [ 10, 20, 30, 40, 50, 60 ]

here what we're telling is first i is 0 right .. so we consider it as index not as applying jus considering to make it work
how we access last elem of an array ? arr.length -1
so the base case will be if it reaches the last case it'll stop right 
that’s why   if(i >= nums.length - 1) return nums
when I is higher or equal to the last elem index no. stop
from the first we increase it,   return nums = fun(nums, i+1)
when it reaches the last elem it returns the whole num



let arr = [10,20,30,40,50,60]
let i = 0

function fun(nums,i) {
  
  if(i >= nums.length - 1) return nums[i]

  console.log(nums[i])
  return nums = fun(nums, i+1)
}
console.log(fun(arr,i) ) 10 20 30 40 50 60
here we print one by one like recursive









*/