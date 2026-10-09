function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

function removePunctuations(str) {
  // keep only letters, numbers and underscore
  return str.replace(/[^\w\s]/g, '');
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function clearString(str) {
  return removeSpaces(removePunctuations(str))
}

const palindromes = function (str) {
  const reversedString = str.split('').reverse().join('');
  return toLowerCase(clearString(reversedString)) === toLowerCase(clearString(str));
};

// Do not edit below this line
module.exports = palindromes;
