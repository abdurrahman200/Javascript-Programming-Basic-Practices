// Reverse  Array  = without library function

var  arr = [ 1,2,3,4,5,6 ]
for (let i = 0; i  < (arr.length / 2) ; i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i ]
    arr[arr.length - 1 - i ] = temp 

}
console.log(arr)
// console.log(arr.reverse) with library function