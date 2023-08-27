function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      if (i !== j) {
        let targetSum = array[i] + array[j];
        if (target === targetSum) return true;
      }
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  make double iteration over the array 
  if index i is not equal to index j
  if element of index i + element of index j === target then return true

  or the function will return false if none of that didn't exist
*/

/*
  Add written explanation of your solution here
  create a function te check if pair of numbers in it equals to a target number if it exist return true and
  if not return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 5, 3, 6, 10], 15));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
