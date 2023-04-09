// Longest subarray with given sum(Contains only Positives)

function findLongestSubarraySumLen(arr, k) {
  let left = 0,
    right = 0;
  let sum = arr[0];
  let maxLen = 0,
    n = arr.length;

  while (right < n) {
    while (left <= right && sum > k) {
      sum -= arr[left++];
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    // right++
    if (right < n) sum += arr[++right];
  }
  return maxLen;
}

(function main() {
  const arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
  const k = 6;
  const len = findLongestSubarraySumLen(arr, k);
  console.log(len);
})();

// Longest subarray with given sum(Contains both Positives & Negatives)

function findLongestSubarraySumLen(arr, k) {
  let preSumMap = {},
    sum = 0,
    maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLen = Math.max(maxLen, i + 1);
    }
    let rem = sum - k;
    if (rem in preSumMap) {
      let len = i - preSumMap[rem];
      maxLen = Math.max(maxLen, len);
    }
    if (!(sum in preSumMap)) {
      preSumMap[sum] = i;
    }
  }
  console.log(preSumMap);
  return maxLen;
}

(function main() {
  const arr = [7, 1, 6, 0];
  const k = 7;
  const len = findLongestSubarraySumLen(arr, k);
  console.log(len);
})();
