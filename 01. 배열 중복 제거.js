const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

// Solution 1
{
  const result = [...new Set(nums)];
  console.log(result);
}

// Solution 2
{
  const result = nums.filter((num, idx) => nums.indexOf(num) === idx);
  console.log(result);
}
