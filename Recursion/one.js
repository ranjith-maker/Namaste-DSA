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

*/