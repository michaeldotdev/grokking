/*
Exercise

2.1 - Keeping track of monthly budget, a lot of insert and few reads.
      Should you use array or a list?

      Array, because adding to the end of array is O(1) time
      it is easier to access and edit previous spending

2.2 - LinkedList would be best in this case.
      With LinkedList we know the start and end, and taking the order from
      start and adding to end would be easier for a restaurant queue

2.3 - As array, because accessing the middle of an array is quicker compared
      to accessing middle of a linkedlist

2.4 - using array to store list of usernames, it would need to be stored
      alphabetically, inserting a username into order is O(n) because you
      will need the other usernames in order to insert the newly created one
      in the correct place.

      if you just use the O(1) array insertion, push - then binary search would
      not work, because then the array is not in chonological order
 
 2.5 - Faster, the hybrid data structure has random access for what the name start with
       then it just inserts into the linked list containing the usernames for that
       specific letter
*/

//Selection Sort

const findSmallest = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const selectionSort = arr => {
  let newArr = [];
  let length = arr.length;

  for (let i = 0; i < length; i += 1) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
};

console.log(selectionSort([5, 3, 6, 2, 10]));
