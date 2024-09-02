// Input: [1, 2, 3, 4];
// Output: [
//   [1, 2, 3],
//   [1, 2, 4],
//   [1, 3, 4],
//   [2, 3, 4],
// ];

const arr = [1, 2, 3, 4];

{
  const solution = (arr, depth) => {
    const result = [];

    if (depth === 1) {
      return arr.map((element) => [element]);
    }

    arr.forEach((fixed, index) => {
      const rest = [...arr].slice(index + 1);

      const combination = solution(rest, depth - 1);
      const attached = combination.map((element) => [fixed, ...element]);
      result.push(...attached);
    });

    return result;
  };

  console.log(solution(arr, 3));
}
