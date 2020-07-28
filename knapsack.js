// Top down soln. No optimization
function knapsack(profits, weights, capacity) {
  function knapsackRecursive(profits, weights, capacity, index) {
    if (capacity <= 0 || index >= profits.length) {
      return 0;
    }

    let profitsTakeCurrent = 0;
    if (capacity >= weights[index]) {
      profitsTakeCurrent =
        profits[index] +
        knapsackRecursive(
          profits,
          weights,
          capacity - weights[index],
          index + 1
        );
    }

    let profitsNotTakeCurrent = knapsackRecursive(
      profits,
      weights,
      capacity,
      index + 1
    );

    return Math.max(profitsTakeCurrent, profitsNotTakeCurrent);
  }

  return knapsackRecursive(profits, weights, capacity, 0);
}

// Bottom-Up soln.
function knapsackBottomUp() {}
