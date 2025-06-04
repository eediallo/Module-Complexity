function replaceUniqueChars(str) {
  const uniqChars = Array.from(new Set(str)).join("");
  return uniqChars.replaceAll(/./g, "~");
}

function replaceChars(str) {
  const lowerStr = str.toLowerCase();
  // Count occurrences of each character
  const counts = {};
  for (const char of lowerStr) {
    counts[char] = (counts[char] || 0) + 1;
  }

  // Replace repeated characters with '*', keep unique with '1'
  let result = "";
  for (const char of lowerStr) {
    if (counts[char] > 1) {
      result += "*";
    } else {
      result += "1";
    }
  }

  return result;
}

console.log(replaceChars("recede"));
console.log(replaceChars("Success"));
console.log(replaceChars("11*2"));
