var arr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 1]
var find = 1
var isFound = false
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == find) {
        console.log('Data Is at index ', i)
        isFound = true
        break
    }
}
if (!isFound) {
    console.log('data not found')
}