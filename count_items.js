function countItems(items) {
  if (!items.length) {
    return 0;
  }

  return 1 + countItems(items.slice(1));
}

console.log(countItems([1, 2, 3, 4]));
