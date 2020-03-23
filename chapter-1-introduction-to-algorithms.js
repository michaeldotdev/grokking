// Example

const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = arr[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

let arr = [1, 3, 5, 7, 9];

console.log(binarySearch(arr, 4));

// Exercises

/* 

1.1 - Binary Search on a list of 128 names, what is the max steps?
128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1
7 steps 

1.2 - Double it 258
258 -> 128 -> 64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1
8 steps

*/
