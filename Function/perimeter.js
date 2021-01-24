// function defined needed to to variable that called perimeter

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [7, 8, 9]

function arrSum(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

arrSum(arr1)
arrSum(arr2)
arrSum(arr3) 
