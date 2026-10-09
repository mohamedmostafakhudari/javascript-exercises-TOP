const fibonacci = function(pos) {
if (!Number.isInteger(pos) || pos < 0) return "OOPS";

  if (pos === 0) return 0;
  if (pos === 1) return 1;

  let firstPos = 0;
  let secondPos = 1;
  
  let i = 2;
  while (i <= pos) {
    [firstPos, secondPos] = [secondPos, firstPos + secondPos];
    i++;
  }

  return secondPos;
};

const _fibonacci = function(pos, memo = new Map()) {
  if (!Number.isInteger(pos) || pos < 0) return "OOPS";
  
  if (pos === 0) return 0;
  if (pos === 1) return 1;

  if (memo.has(pos)) {
    return memo.get(pos);
  }

  const result = _fibonacci(pos - 1, memo) + _fibonacci(pos - 2, memo);
  memo.set(pos, result);

  return result;
}

// Do not edit below this line
module.exports = fibonacci;
