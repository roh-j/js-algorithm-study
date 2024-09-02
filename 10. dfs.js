const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

{
  const solution = (here, visited = new Set()) => {
    if (visited.has(here)) {
      return;
    }

    visited.add(here);

    graph[here].forEach((element) => {
      solution(element, visited);
    });

    return [...visited];
  };

  console.log(solution(1));
}
