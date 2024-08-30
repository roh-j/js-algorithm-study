const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

{
  const target = 3;

  const solution = (nums) => {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  };

  console.log(solution(nums));
}
