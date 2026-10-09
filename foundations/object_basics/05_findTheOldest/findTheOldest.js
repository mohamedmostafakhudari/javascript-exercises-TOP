function computeAge(person) {
  // either dead or alive
  return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function(people) {
  let oldest = people[0];

  for (const person of people) {
    const personAge = computeAge(person);
    const oldestAge = computeAge(oldest);

    if (personAge > oldestAge) {
      oldest = person;
    }
  }
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
