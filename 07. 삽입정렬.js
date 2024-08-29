const nums = [6, 3, 12, 2, 3];

{
  // 공간이 나올 때 까지 Shift
  const solution = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      const cur = nums[i];
      let j = i - 1;

      while (j >= 0 && nums[j] > cur) {
        nums[j + 1] = nums[j];
        j--;
      }

      nums[j + 1] = cur;
    }

    return nums;
  };

  console.log(solution(nums));
}
