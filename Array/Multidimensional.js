
            // [0]    [1]     [1]
var arr = [ [1,2,3],[4,5,6],[7,8,9] ]

//console.log(arr[0][0]) 
//console.log(arr[1][1])

for (var i = 0; i < arr.length; i++) {
   for (var j = 0; j < arr[i].length ;j++) {
    console.log('Element '+ '[' + i + ']'  +  ' : ' + arr[i][j])
   }
}