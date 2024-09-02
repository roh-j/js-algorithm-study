const arr = [
  [1, 2],
  [3, 4],
];

{
  console.log(arr.some((e) => e.every((v, idx) => v === [1, 2][idx])));
}
