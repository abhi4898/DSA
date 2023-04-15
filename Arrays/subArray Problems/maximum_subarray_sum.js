// Optimal Approach using Kadane's Algorithm
function maxSumSubArray(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER,
    sum = 0;
  let subArrayStart = -1,
    subArrayEnd = -1,
    start = -1;

  for (let i = 0; i < nums.length; i++) {
    if (sum === 0) {
      start = i;
    }
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
      subArrayStart = start;
      subArrayEnd = i;
    }

    if (sum < 0) sum = 0;
  }
  return [maxSum, nums.slice(subArrayStart, subArrayEnd + 1)];
}

(function main() {
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const res = maxSumSubArray(arr);
  console.log("Max Sum: ", res[0]);
  console.log("Max Sum Subarray: ", res[1]);
})();
