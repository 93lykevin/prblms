// lower <= a**2 + b**2 <= upper
function lowerUpperBound(a, b, lower, upper) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let result = [];

  // wrong
  let s1 = 0;
  let s2 = 0;
  let e1 = 0;
  let e2 = 0;
  loop1: for (let i = 0; i < a.length; i++) {
    loop2: for (let j = 0; j < b.length; j++) {
      let sumSquares = a[i] ** 2 + b[j] ** 2;
      if (sumSquares >= lower) {
        s1 = i;
        s2 = j;
        break loop1;
      }
    }
  }

  loop1: for (let i = a.length - 1; i >= 0; i--) {
    loop2: for (let j = b.length - 1; j >= 0; j--) {
      let sumSquares = a[i] ** 2 + b[j] ** 2;
      if (sumSquares <= upper) {
        e1 = i;
        e2 = j;
        break loop1;
      }
    }
  }

  for (let i = s1; i <= e1; i++) {
    // 0, 1
    for (let j = s2; j <= e2; j++) {
      result.push([a[i], b[j]]);
    }
  }
  console.log(a);
  console.log(b);
  console.log(s1);
  console.log(s2);
  console.log(e1);
  console.log(e2);
  console.log(result);
  return result;
}

lowerUpperBound([-1, 3, 9, 10, 13, 15, 100], [2, 5, 13, 100], 7, 101);
