// ab57 => ab57, Ab57, aB57, AB57
//FIXME
function permLetterCase(str, currentStr, results = []) {
  // Base case
  if (str.length === 0) {
    results.push(currentStr);
  } else {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (isNaN(parseInt(char))) {
        // if character is not an integer, permute it
        currentStr += char;
        permLetterCase(
          str.slice(0, i).concat(str.slice(i + 1)),
          currentStr,
          results
        );
        str.pop();
      } else {
        currentStr += char;
        continue;
      }
    }
  }

  return results;
}

console.log(permLetterCase(["a", "b", 5, 7], "", []));
