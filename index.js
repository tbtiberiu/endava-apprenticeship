function getLettersFromString(string) {
  const letters = {};

  string.split("").forEach((letter) => {
    if (!letter.match(/[a-z]/i)) return;

    letter = letter.toUpperCase();
    letters[letter] ||= 0;
    letters[letter] += 1;
  });

  return letters;
}

function countLetters(multiDimensionArray) {
  const letters = {};

  multiDimensionArray.forEach((el) => {
    let newLetters = {};

    if (typeof el === "string") {
      newLetters = getLettersFromString(el);
    } else if (Array.isArray(el)) {
      newLetters = countLetters(el);
    }

    Object.keys(newLetters).forEach((letter) => {
      letters[letter] ||= 0;
      letters[letter] += newLetters[letter];
    });
  });

  return letters;
}

const multiDimensionArray = [1, "Afsfsfs43432Ad", "B", ["Cdsa", 2]];
const letters = countLetters(multiDimensionArray);
console.log(letters);
