/*
Merge 2 Sorted Arrays

function merge(arr,brr) {

let ans = [];
let i = 0;
let j = 0;

while( i < arr.length && j < brr.length){

if(arr[i] < brr[j] ){
    ans.push(arr[i])
    i++
}else{
    ans.push(brr[j])
    j++
}
}

while(i <arr.length ){
ans.push(arr[i])
i++
}

while(j < brr.length){
    ans.push(brr[j])
    j++
}

return ans

}

let res = merge([1,3,5,7],[0,2,4,6,8])
console.log(res);
[ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]


In this method we go and check from the last wihtout the extra space


function merge(arr,brr, m,n) {

    let i = m-1
    let j = n-1
    let k = m+n -1

    
    while( i >= 0 && j>=0 ){
        if( arr[i] > brr[j] ){
            arr[k] = arr[i]
            i--
        }else{
            arr[k] = brr[j]
            j--
        }
        k--
    }

    while( j >= 0 ){
        arr[k] = brr[j]
        j--
        k--
    }
return arr
}



let res = merge([1,2,3,0,0,0], [2,5,6], 3, 3);

console.log(res) [ 1, 2, 2, 3, 5, 6 ]


*/