const add = function(operandA, operandB) {
  return operandA + operandB;
};

const subtract = function(operandA, operandB) {
	return operandA - operandB;
};

const sum = function(arr) {
	return arr.reduce((sum, x) => sum + x, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, x) => prod * x, 1);
};

const power = function(base, power) {
	let result = base;
  for (let i = 1; i < power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) return 1;
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
