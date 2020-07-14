// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// /**
//  * @param {character[]} s
//  * @return {void} Do not return anything, modify s in-place instead.
//  */
var reverseString = function(s) {
  let pointer1 = 0;
  let pointer2 = s.length - 1;

  while (pointer1 < pointer2) {
    [s[pointer1], s[pointer2]] = [s[pointer2], s[pointer1]];
    pointer1++;
    pointer2--;
  }
};

revStrRec = str => {
  if (str.length === 0) return "";
  let rev = "";
  rev += revStrRec(str.slice(1)) + str[0];

  return rev;
};

console.log(revStrRec("Hello World"));
