const leapYears = function(year) {
  /*
  • Divisible by 4: Years that divide evenly by 4 are leap years (like 2024).
  • Century Exception: Years that divide by 100 are not leap years (like 1900).
  • 400 Rule: Century years that divide evenly by 400 are leap years (like 2000).
  */
  if ((year % 4 === 0 && year % 100 !== 0) ||
(year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
