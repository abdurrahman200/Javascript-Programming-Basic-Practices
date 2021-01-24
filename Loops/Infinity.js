
for (; ;) {
    var rand = Math.floor( Math.random() * 10 + 1)
    if (rand == 9) {
        console.log('You Win : ',rand)
        isRun = false
    }
    else {
        console.log('You lost :', rand)
    }
}