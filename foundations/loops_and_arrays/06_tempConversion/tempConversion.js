const convertToCelsius = function(fahrenheit) {
// °C = (°F − 32) ÷ 1.8
  return Number.parseFloat(((fahrenheit - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(celsius) {
//  °F = (°C × 1.8) + 32
  return Number.parseFloat(((celsius * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
