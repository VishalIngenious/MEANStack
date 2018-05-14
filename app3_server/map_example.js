var numbers = [1, 2, 3, 4, 5, 6];

/*
var squares = [];
for (var index = 0; index < numbers.length; index++) {
    squares.push(numbers[index] * numbers[index]);
}

console.log(squares);
*/

/*
var squares = numbers.map(function(number) {
    return number * number;
});

console.log(squares);


var squares = numbers.map((number) => {
    return number * number;
});

console.log(squares);

*/

var squares = numbers.map(number => number * number);
console.log(squares);

console.log(numbers.map(number => number * number * number));