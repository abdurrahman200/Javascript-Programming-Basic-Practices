//  string length = without library function 
var str = 'You are very good student'
var len = 0
while (true) {
    if (str.charAt(len) == '' ) {
        break
    }
    else {
        len++
    }
}
console.log(len)
console.log(str.length) // with library function 