const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: [],
};

{
  const solution = (start) => {
    let visited = [];
    let queue = [];

    queue.push(start);

    while (queue.length) {
      const node = queue.shift();

      if (!visited.includes(node)) {
        visited.push(node);
        queue = [...queue, ...graph[node]];
      }
    }

    return visited;
  };

  console.log(solution(1));
}
