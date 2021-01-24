// iterate use  Doesn't come 

var point = { x:1 , y: 2 , z: 3  } // Doesn't come 

// console.log('x' in point )
// console.log('a' in point )

// traves use loop

for (let i in point) {
    // console.log(i)
    console.log(i + ':' ,point[i])
}
