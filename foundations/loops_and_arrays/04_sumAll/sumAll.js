function minOfTwo(a, b) {
  return a < b ? a : b;
}

function maxOfTwo(a, b) {
  return a > b ? a : b;
}

const sumAll = function(rangeStart, rangeEnd) {
  if (!Number.isFinite(rangeStart) || !Number.isFinite(rangeEnd) ||
  rangeStart < 0 || rangeEnd < 0 ||
  rangeStart !== Math.floor(rangeStart) || rangeEnd !== Math.floor(rangeEnd)) return "ERROR";

  let result = 0;
  for (let i = minOfTwo(rangeStart, rangeEnd); i <= maxOfTwo(rangeStart, rangeEnd); i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
