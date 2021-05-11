/*

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

---------------------------------

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2

-----------------------------

Example 2:

Input: nums = [3,1,3,4,2]
Output: 3

-----------------------------

Example 3:

Input: nums = [1,1]
Output: 1

-----------------------------

Example 4:

Input: nums = [1,1,2]
Output: 1

-----------------------------

Constraints:

1.  2 <= n <= 105
2.  nums.length == n + 1
3.  1 <= nums[i] <= n
4.  All the integers in nums appear only once except for precisely one integer which appears two or more times.


Follow up:

1.    How can we prove that at least one duplicate number must exist in nums?
2.    Can you solve the problem without modifying the array nums?
3.    Can you solve the problem using only constant, O(1) extra space?
4.    Can you solve the problem with runtime complexity less than O(n2)?

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    const testArr = new Array(nums.length + 1);

    for (const s of nums) {

        if (!testArr[s]) testArr[s] = -1;
        else return s;
    }

    return -1;
};


const length01 = findDuplicate([1, 3, 4, 2, 2]);
console.log('length01=', length01);

const length02 = findDuplicate([3, 1, 3, 4, 2]);
console.log('length02=', length02);
