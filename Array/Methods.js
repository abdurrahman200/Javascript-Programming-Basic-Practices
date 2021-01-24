//  some Method
var arr = [ 1 , 2 , 3 , 4 , 5 ]
var arr2 = [ 11, 12, 13, 14, 15]
console.log(arr.join(' ')) // string generate and its return value
console.log(arr.join(' , ')) // comma generate and its return value
console.log(arr.join(' | ')) // comma generate and its return value

console.log(arr.fill(0)) // full element fill with 0 return to All value 0

var arr3 = arr.concat(arr2) // array concat and All array copy with array 3
console.log(arr3) // concat return value
console.log(Array.isArray(arr2)) // return True or false 

var arr2 = Array.from(arr)
console.log(arr2)

// - - - - - - - -- - mutability and immutability
var m = [1,3]
var n = Array.from(m)

n[0]  = 5
console.log(m)

