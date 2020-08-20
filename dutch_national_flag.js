function dutch(arr) {
    let lo = 0;
    let hi = arr.length - 1;
    let i = 0;
    while (i <= hi) {
        if (arr[i] === 0) {
            [arr[i], arr[lo]] = [arr[lo], arr[i]];
            i += 1;
            lo += 1;
        } else if (arr[i] === 2) {
            [arr[i], arr[hi]] = [arr[hi], arr[i]];
            hi -= 1;
        } else {
            i += 1;
        }
    }
    return arr;
}

console.log(dutch([2, 0, 1, 2, 1, 0]));
console.log(dutch([2, 2, 2, 2, 1, 1, 1, 0, 0]));
