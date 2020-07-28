function orderMatrix(arr) {
  let strs = [];
  let n = arr.length;
  let count = 0;
  for (let i = n - 1; i >= 0; i--) {
    let rowBound = n;
    let colBound = n - i;
    let str = "";
    let row = i;
    let col = 0;
    while (str.length < n) {
      str += arr[row][col];
      row += 1;
      col += 1;
      if (row >= rowBound) {
        row = i;
      }
      if (col >= colBound) {
        col = 0;
      }
    }
    strs.push([str, count]);
    count += 1;
  }

  for (let i = 1; i < n; i++) {
    let rowBound = n - i; // 2
    let colBound = n;
    let str = "";
    let row = 0;
    let col = i;

    while (str.length < n) {
      str += arr[row][col];
      row += 1;
      col += 1;

      if (row >= rowBound) {
        row = 0;
      }

      if (col >= colBound) {
        col = i;
      }
    }
    strs.push([str, count]);
    count += 1;
  }

  strs.sort();
  console.log(strs);
  console.log(strs.map((r) => r[1]));
  return strs.map((r) => r[1]);
}

orderMatrix([
  ["b", "a"],
  ["b", "a"],
]); // [[b,b],
//  [b,a]] => bb, ba, bb
orderMatrix([
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
]); // [[a,b,c],
//  [d,e,f]
//  [g,h,i]] => ggg, dhd, aei, bfb, ccc
orderMatrix([
  ["a", "b", "c", "d", "e"],
  ["b", "c", "d", "e", "a"],
  ["a", "b", "c", "d", "e"],
  ["a", "b", "c", "d", "e"],
  ["e", "d", "c", "b", "a"],
]);
// [[a,b,c],
//  [d,e,f]
//  [g,h,i]] => ggg, dhd, aei, bfb, ccc
