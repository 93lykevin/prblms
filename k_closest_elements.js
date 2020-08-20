// 658. Find K Closest Elements
// Medium
// 1415
// 246

// Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.
// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 10^4
// Absolute value of elements in the array and x will not exceed 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  // binary search to find closest element to x
  // then use 2 pointers, left and right
  // then check ele[left] vs ele[right], which is closer to x
  // push the closer one to final result array
  //      if they are equal, push the smaller value
  // decrement left or increment right depending on what I did

  let start = 0;
  let end = arr.length - 1;
  let closestIdx = arr.length;

  // binary search to find correct starting point;
  //arr = [1,2,3,4,5], k = 4, x = -1
  //arr = [2,4,6,8,10,12], k = 4, x = 3
  //arr = [0,3,5,6,8,15,20], k = 4, x = 17
  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === x) {
      closestIdx = mid;
      break;
    } else {
      closestIdx =
        Math.abs(arr[start] - x) <= Math.abs(arr[end] - x) ? start : end;

      if (x < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  let left = closestIdx - k < 0 ? 0 : closestIdx - k;
  let right = closestIdx + k > arr.length - 1 ? arr.length - 1 : closestIdx + k;

  while (right - left + 1 > k) {
    if (Math.abs(arr[right] - x) >= Math.abs(arr[left] - x)) {
      right -= 1;
    } else {
      left += 1;
    }
  }

  return arr.slice(left, right + 1);
};
