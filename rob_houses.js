// # You are a professional robber planning to rob houses along a street. 
// # Each house has a certain amount of money stashed. 
// # All houses at this place are arranged in a circle. 
// # That means the first house is the neighbor of the last one. 
// # Meanwhile, adjacent houses have a security system connected, 
// # and it will automatically contact the police if two adjacent houses were broken into on the same night.

// # Given an integer array nums representing the amount of money of each house, 
// # return the maximum amount of money you can rob tonight without alerting the police.

 

// # Example 1:

// # Input: nums = [2,3,2]
// # Output: 3
// # Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// # Example 2:

// # Input: nums = [1,2,3,1]
// # Output: 4
// # Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// # Total amount you can rob = 1 + 3 = 4.
// # Example 3:

// # Input: nums = [1,2,3]
// # Output: 3

// # [1,2,15,1,2,18,5] ??
// 15 + 18 + 1 = 34 - once it is robbed we need skip next two houses
// Check the adjacent index to choose the highest value between two indices 
// Max of First index and last index value

function robHouse(arrHouses) {
    // edge case checking the arrayHouse length atleast one
    if (!arrHouses || arrHouses.length === 0) return null;
    // If the array of houses is only one element in the array return that element
    if (arrHouses.length === 1) return arrHouses[0];
    if (arrHouses.length === 2 || arrHouses.length === 3) {
      let maxArrayElement = arrHouses[0];
      for (let i = 0; i < arrHouses.length - 1; i++) {
        maxArrayElement = Math.max(arrHouses[i], arrHouses[i+1]);
    }
      return maxArrayElement;
    }
    /*
    // If the array of houses is more than 3 elements
    let firstPointer = 0; 
    let secondPointer = 0;
  
    for (let amount = 1; amount < arrHouses.length - 1; amount++) {
      // add constraint of not robbing the adjacent
      console.log("First Pointer: " + firstPointer);
      console.log("Second Pointer: " + secondPointer);
      console.log(`Current Amount ${arrHouses[amount]} of Index: ${amount}`);
      // check if the firstPointer is greater than the secondPointer
      let houseT = Math.max(firstPointer + arrHouses[amount], secondPointer);
      console.log("HouseT: " + houseT);
      firstPointer = secondPointer;
      secondPointer = houseT;
      console.log("First Pointer After Swap: " + firstPointer);
      console.log("Second Pointer After Swap: " + secondPointer);
    }
    secondPointer += Math.max(arrHouses[0], arrHouses[arrHouses.length - 1]);
    return secondPointer;
    */
   // Helper function to rob a linear list of houses
  function robLinear(arr) {
    let prev = 0, curr = 0;
    for (let num of arr) {
      console.log("Previous Pointer Initial Value: " + prev);
      console.log("Current Pointer Initial Value: " + curr);
      console.log("Amount Value : " + num);
      let temp = Math.max(curr, prev + num);
      console.log("Rob House Amount: " + temp);
      prev = curr;
      curr = temp;
      console.log("Previous Pointer After Swap: " + prev);
      console.log("Current Pointer After Swap: " + curr);
    }
    return curr;
  }

    // Rob from 0 to n-2 or 1 to n-1
    const robFirst = robLinear(arrHouses.slice(0, arrHouses.length - 1));
    console.log("Rob First House: " + robFirst);
    const robSecond = robLinear(arrHouses.slice(1));
    console.log("Rob Second House: " + robSecond);
    // Return the maximum of the two
    return Math.max(
      robFirst,
      robSecond
    );
  }
  let arrHouses = [3,2,3,4,6];
  console.log("The value of the robbed house " + robHouse(arrHouses));
  