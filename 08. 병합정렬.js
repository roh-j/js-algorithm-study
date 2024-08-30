const arr = [30, -6, -2, 4, 8, 20];

{
  const mergeSort = (arr) => {
    if (arr.length === 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left, right) => {
    let sorted = [];

    while (left.length && right.length) {
      if (left[0] > right[0]) {
        sorted.push(right.shift());
      } else {
        sorted.push(left.shift());
      }
    }

    return [...sorted, ...left, ...right];
  };

  console.log(mergeSort(arr));
}
