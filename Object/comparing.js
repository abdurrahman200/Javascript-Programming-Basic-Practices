var obj = {a:1, b:2}
var obj2 = {a:1, b:2}

if (obj.a == obj2.a && obj.b == obj2.b) {
    console.log(true)
}else{
    console.log(false)
}

// tips and tricks
console.log(obj)
console.log(JSON.stringify(obj) == JSON.stringify(obj2) ) //  convert to string 
