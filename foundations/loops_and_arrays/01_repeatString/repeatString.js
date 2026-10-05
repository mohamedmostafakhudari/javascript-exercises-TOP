const repeatString = function(str, repeatCount) {
  if (str === undefined || typeof str !== 'string' || repeatCount < 0) return "ERROR";
  
  let result = '';
  
  for (let i = 0; i < repeatCount; i++) {
    result += str;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
