function replaceUniqueChars(word) {
  const uniqChars = Array.from(new Set(word)).join("");
  return uniqChars.replaceAll(/./g, "~");
}

function duplicateEncode(word) {
  const lowerword = word.toLowerCase();
  // Count occurrences of each character
  const counts = {};
  for (const char of lowerword) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Replace repeated characters with '*', keep unique with '1'
  let result = "";
  for (const char of lowerword) {
    if (counts[char] > 1) {
      result += "*";
    } else {
      result += "1";
    }
  }

  return result;
}

function duplicateEncode(word) {
  let result = "";

  for (const char of word) {
    const lowerCaseChar = char.toLowerCase();
    if (word.indexOf(lowerCaseChar) === word.lastIndexOf(lowerCaseChar)) {
      result += "1";
    } else {
      result += "*";
    }
  }

  return result;
}

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("11*2"));
