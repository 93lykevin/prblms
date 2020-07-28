//[1,2,3]
function permutations(nums, currentNums = [], result = []) {
  // p([1,2,3],[],[]) -> p([2,3],[1],[]) -> p([2],[1,3],[1,2,3])
  if (nums.length === 0) {
    return result.push(currentNums.slice(0)); //[[1,2,3]]
  } else {
    for (let i = 0; i < nums.length; i++) {
      // i=1 // i=0<1
      let num = nums[i]; // 2
      currentNums.push(num); // [1,3,2]
      permutations(
        nums.slice(0, i).concat(nums.slice(i + 1)),
        currentNums,
        result
      ); // p([2],[1,3],[1,2,3]) -> p([],[1,3,2],[1,2,3])
      currentNums.pop();
    }
  }

  return result;
}

console.log(permutations([1, 2, 3], [], []));
console.log(permutations([1, 2, 3, 4], [], []));
