// Input: [1, 2, 3, 4];
// Output: [
//   [1, 2, 3],
//   [1, 2, 4],
//   [1, 3, 2],
//   [1, 3, 4],
//   [1, 4, 2],
//   [1, 4, 3],
//   [2, 1, 3],
//   [2, 1, 4],
//   [2, 3, 1],
//   [2, 3, 4],
//   [2, 4, 1],
//   [2, 4, 3],
//   [3, 1, 2],
//   [3, 1, 4],
//   [3, 2, 1],
//   [3, 2, 4],
//   [3, 4, 1],
//   [3, 4, 2],
//   [4, 1, 2],
//   [4, 1, 3],
//   [4, 2, 1],
//   [4, 2, 3],
//   [4, 3, 1],
//   [4, 3, 2],
// ];

const arr = [1, 2, 3, 4];

{
  const solution = (arr, depth) => {
    const result = [];

    if (depth === 1) {
      return arr.map((element) => [element]);
    }

    arr.forEach((fixed, index) => {
      const rest = [...[...arr].slice(0, index), ...[...arr].slice(index + 1)];

      const permutation = solution(rest, depth - 1);
      const attached = permutation.map((element) => [fixed, ...element]);
      result.push(...attached);
    });

    return result;
  };

  console.log(solution(arr, 3));
}
