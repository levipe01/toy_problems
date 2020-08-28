// write function that follows this pattern.
// fn(pattern, word) bool
// fn(h1ckreactor, hackreactor) -> True
// fn(h2kreactor, hackreactor) -> True
// fn(h5eactor, hackreactor) -> False
// fn(h2ckreactor, hackreactor) -> False
// fn(hackreactor, hackreactor) -> True
// fn(2, ae) -> True
// fn(2eeee, e) -> False

const assert = function(pattern, word) {
  let output = true;

  const isEqual = function(pattern, word) {
    if (pattern.length === 0) {
      return;
    } else if (pattern[0] === word[0]) {
      isEqual(pattern.substring(1, pattern.length), word.substring(1, word.length));
    } else {
      if (Number.isNaN(Number(pattern[0])) === false) {
        isEqual(pattern.substring(1, pattern.length), word.substring(Number(pattern[0]), word.length));
      } else {
        output = false;
        return;
      }
    }
  }

  isEqual(pattern, word);
  return output;
}