// Dot notation
var point  = {x: 45, y: 10}
point.x = 1
point.z = 1
console.log(point)
console.log(point.d)

// Array Notation 
point.a = undefined
console.log(point)

// 2 way = easy way( delete operator use to delete object properties )  , hard way
delete point.a
console.log(point)

