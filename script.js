console.log("Hey this works!");

var x = 8;
var y = 19;
var z = 4;


function one (x) {
	var x = x + 100;
	return x;
}

function two (x) {
	var x = x / 2;
	return x;
}

function three (x) {
	var x = x * 4;
	return x;

}

function combine(x, y, z) {
	one + two + three;
}

console.log(one(6));
console.log(two(45));
console.log(three(2));

console.log(combine);

one(two(three(45)));