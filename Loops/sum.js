

var sum = 0

/*for (var i = 1; i <= 10; i++) {
    
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum +=i
}
console.log('Result : ',sum);
*/

for (var i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(sum + ' + ' + i + ' = ' + (sum + i));
    } 
    sum +=i
}
console.log('Result : ',sum);