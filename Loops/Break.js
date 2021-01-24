// while lop using
while ( true ) {
    var rand = Math.floor( Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('You Win : ',rand)
        break
    }
    else {
        console.log('You lost :', rand)
    }
} 
// For loop using 
for (let i = 1; i < 10; i++) {
    if (i % 6 == 0) {
        break
    }else{
        console.log(i)
    }
}