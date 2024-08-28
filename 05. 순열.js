const str = ["a", "b", "c"];

{
  const solution = (str) => {
    let result = [];

    const dfs = (pivot, item) => {
      if (pivot === item.length) {
        result.push([...item]);
        return;
      }

      for (let j = pivot; j < item.length; j++) {
        [item[pivot], item[j]] = [item[j], item[pivot]];
        dfs(pivot + 1, item);
        [item[pivot], item[j]] = [item[j], item[pivot]];
      }
    };

    dfs(0, str);

    return result;
  };

  console.log(solution(str));
}
