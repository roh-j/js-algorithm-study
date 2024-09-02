const nums = [10, 20, 10, 30, 20, 50];

{
  const solution = (nums) => {
    const arr = [0, ...nums];

    let dp = new Array(arr.length).fill(0);

    for (let i = 1; i < arr.length; i++) {
      let mx = 0;

      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
          mx = Math.max(mx, dp[j]);
        }
      }

      dp[i] = mx + 1;
    }

    return Math.max(...dp);
  };

  console.log(solution(nums));
}
