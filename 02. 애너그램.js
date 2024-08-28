const a = "listen";
const b = "silent";

// Solution 1
{
  const solution = (a, b) => {
    if (a.length !== b.length) {
      return false;
    }

    return a.split("").sort().join() === b.split("").sort().join();
  };

  console.log(solution(a, b));
}

// Solution 2
{
  const hash = {};

  const solution = (a, b) => {
    for (char of a) {
      hash[char] = hash[char] ? hash[char] + 1 : 1;
    }

    for (char of b) {
      if (!hash[char]) {
        return false;
      }

      hash[char]--;
    }

    return true;
  };

  console.log(solution(a, b));
}
