function getLettersFromString(string) {
  const letters = {};

  for (let letter of string) {
    if (!letter.match(/[a-z]/i)) continue;

    letter = letter.toUpperCase();
    letters[letter] ||= 0;
    letters[letter]++;
  }

  return letters;
}

function countLetters(multiDimensionArray) {
  const letters = {};

  for (let element of multiDimensionArray) {
    let newLetters = {};

    if (Array.isArray(element)) {
      newLetters = countLetters(element);
    } else if (typeof element === "string") {
      newLetters = getLettersFromString(element);
    }

    for (let letter in newLetters) {
      letters[letter] ||= 0;
      letters[letter] += newLetters[letter];
    }
  }

  return letters;
}

const multiDimensionArray = [1, "Afsfsfs43432Ad", "B", ["Cdsa", 2]];
const letters = countLetters(multiDimensionArray);
console.log(letters);
