const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
]

 
const sum = (array) => {
let total = 0;
array.map((arr) => {
    if(!isNaN(arr))
    total += arr;
    else total += sum(arr)
});
return total;
}
  
console.log(sum(numbers))


  