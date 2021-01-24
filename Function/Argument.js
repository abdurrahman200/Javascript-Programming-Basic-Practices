//  if real data provided in a function that data call argument : argument is a object

// inde
// function test(a ,b ,c ) {
//     console.log(arguments)
// }
// test() // calling function 

// [Arguments] { '0': 1, '1': 2, '2': 3 }
// function test(a ,b ,c ) {
//     console.log(arguments)
// }

// test(1,2,3) // calling function 

// 1
// 2
// 3
// function test(a ,b ,c ) {
//     for (let i = 0; i < arguments.length; i++) {
//      console.log(arguments[i])
//     }
//  }
 
// test(1,2,3) // calling function 
//  summing argument 
function test(a ,b ,c ) {
    var sum = 0
    for (let i = 0; i < arguments.length; i++) {
     sum +=  arguments[i]
    }
    console.log(sum)
 }

test(1,2,3) // calling function 