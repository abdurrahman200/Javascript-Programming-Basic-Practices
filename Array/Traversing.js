//  A-Z all array using to loop
var arr = [1,2,3,4,5]
/*for(var i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i] + 2
}
console.log(arr) // change array position value adding  2
*/
/*var sum = 0
for (let i = 0; i <arr.length ; i++) {
    sum += arr[i]
}
console.log(sum)
*/
//even numbers 
/*for (let i = 0; i <arr.length ; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}*/

//Odd numbers formula
/*
for (let i = 0; i <arr.length ; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i])
    }
}*/
//even numbers summation formula
var sum = 0 
/*for (let i = 0; i <arr.length ; i++) {
    if (arr[i] % 2 == 0) {
        sum += arr[i]
    }
    
}
console.log(sum)
*/
odd numbers summation formula
for (let i = 0; i <arr.length ; i++) {
    if (arr[i] % 2 != 0) {
        sum += arr[i]
    }
    
}
console.log(sum)