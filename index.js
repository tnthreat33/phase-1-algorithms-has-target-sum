function hasTargetSum(array, target) {
  // Write your algorithm here
    // Create a set to store the numbers we have seen
    const seen = {};

    // Iterate through the array
    for (const num of array) {
      // Check if the target minus the current number has been seen
      const x = target - num
      if (x in seen)
        return true;
        seen[num] = true;
     
    }
  
    // If we finish iterating through the array and haven't found any pairs that add up to the target, return false
    return false;
  }


/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here
  create a set to store the numbers already used
  iterate through the array
  check is target minus current number is in the array
  add the number to the seen numbers
  if at the end of iterating no x numbers have been found return false 
*/

/*
  Add written explanation of your solution here
  hasTarget Sum iterates through the array and checks to see if the target sum minus each number equals any of the other numbers in the array. 
  if it does then it is true and if is goes through all the numbers and it doesn't then it is false 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("expecting:fasle ");
  console.log("=>", hasTargetSum([1,2,3,4],1))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
