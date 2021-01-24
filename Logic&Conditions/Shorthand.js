var name = 'Mr XYZ'
var A = ''
// Normal Use 
if (name.length === 0) {
    console.log('akaid');
} else {
    A = name
}
// Shorthand
A = name || 'akaid' // Fact  True value 
console.log(A)

var c = false
c && console.log('All Okey mama');