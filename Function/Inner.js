// nested function
// function GPA(great , name) {
//     function sayHi() {
//         console.log(great , name)
//     }
//     sayHi()  //  second execute that 
// }

// GPA('3.66', 'Very Good GPA') //  first execute that 


// nested function another
function GPA(great , name) {
    function getFirstName() { // call inside fixed
        if (name) {
            return name.split(' ')[0]
        }
        else{
            return ''
        }
    }
    var message = great + ' ' + getFirstName()  //  second execute that 
    console.log(message)
}

GPA('Very Good GPA') //  first execute that 