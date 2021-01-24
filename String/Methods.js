//  String method 
var a = 'i am'
var b = 'Akaid'

var c = a.concat(' ',b) //concat
var d = c.substr(5, 3) // substr 5 = total ,3 = character 
console.log(c.charAt(0)) // index character
console.log(c.startsWith('i am')) // start string 
console.log(c.endsWith('akaid')) // start string 

console.log(b.toUpperCase()) // All uppercase

console.log(b.toLowerCase()) // All lowercase 

console.log(c.trim()) // Extra string space clear trim

console.log(c.split(' ')) // 