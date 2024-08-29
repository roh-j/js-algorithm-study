const nums = [6, 3, 12, 2, 3];

{
  // j, j+1 두개씩 비교
  const solution = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        }
      }
    }

    return nums;
  };

  console.log(solution(nums));
}
