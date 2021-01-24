var obj = { x: 40, y: 50 , z: 60 }
// basics level
console.log(Object.keys(obj)) //  Key insert into Array
console.log(Object.values(obj)) //  Key To bring into values
console.log(Object.entries(obj)) //  2d Array show It
// advance level 
// var obj2 = obj
// obj2.x = 1
// obj2.y = 2
// obj2.z = 3
var obj2 = Object.assign({},obj)
obj2.x = 100
console.log(obj)
console.log(obj2)
