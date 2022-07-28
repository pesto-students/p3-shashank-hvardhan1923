function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  //console.log(nums);
  let minDiff = Number.MAX_VALUE;
  let res = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum == target) return target;

      if (sum < target) {
        if (target - sum < minDiff) minDiff = target - sum;
        {
          //sum = 2, target = 1,  2 < 1.90
          res = sum;
        }

        l++;
      } else {
        if (sum - target < minDiff) {
          minDiff = sum - target;
          res = sum;
        }

        r--;
      }
    }
  }

  return res;
}

console.log(threeSumClosest([-2, 1, 6, 8, 4, 0, -11], 9));
