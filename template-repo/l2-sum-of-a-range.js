 function range(start, end, step = start < end ? 1 : -1) {
  var array = [];

if (step > 0) {
    for (var i = start; i <= end; i += step) array.push(i);
}
else {
    for (var i = start; i >= end; i += step) array.push(i);
}
    return array;
}

function sum(array) {
    var total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}

console.log(range(1, 10))
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
