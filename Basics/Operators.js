//Arithmetic Operator = + - * / % ++ -- 
var a = 10 
var b = 3
console.log( a % b);
// Incremental  = Prefix  Incremental --> Postfix Incremental --> Prefix  Decrement  --> Postfix Decrement 
console.log(++a) // 11
console.log(a) // 11
console.log(a++) // 11
console.log(a) // 12
console.log(--b) // 2 
console.log(b) // 2
console.log(b--) // 2
console.log(b) // 1
// Assignment Operator = =,==,===
a =a + b
console.log(a);
a = a - b
console.log(a);
a = a * b
console.log(a);
a = a / b
console.log( a);
// comparison operators
console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // true
console.log(a < b); // false
console.log(a <= b); // false
console.log(a >= b); //true
// comparison operators with string
console.log(a == b); // false
console.log(a === b); // false
console.log(a !== b); // true
console.log(a <= b); // false
console.log(a >= b); // true

// Logical Operator =  && , || , !
console.log(a == b && a != b); // false 
console.log(a == b || a != b); // true
// Bitwise Operator = 2ta binary logic value k  & operation , 2ta binary logic value k  | operation, ~ , ^ , >> =left shift , << = right shift 

// TypeOF  Operator = Know About datatype 

console.log(typeof('string')); // string
console.log(typeof(a)); //number  