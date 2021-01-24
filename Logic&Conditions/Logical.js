// &&
var a = 1
var b = 2
var c = 3
var d = 4
/*
true && true = true
true && false = false
false && false = false
false &&  true= false
*/
// false
if (a > b && c > d) {
    console.log('True');
} else {
    console.log('false');
}
// false
if (a < b && c > d) {
    console.log('True');
} else {
    console.log('false');
}

// true
if (a < b && c < d) {
    console.log('True');
} else {
    console.log('false');
}
/*
true || true = true
true || false = true
false || false = false
false || true= true
*/
// false
if (a > b || c > d) {
    console.log('True');
} else {
    console.log('false');
}
// true
if (a < b || c > d) {
    console.log('True');
} else {
    console.log('false');
}
// true
if (a < b || c < d) {
    console.log('True');
} else {
    console.log('false');
}