function filterArray(numbers, value) {
  const newArray = []; // empty

  // loop through each element of the "numbers" array and checking if number is greater than "value" = add to newArray
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }

  return newArray;
}

console.log("These are the results of Task 3");
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
