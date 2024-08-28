const str = "aba";

// Solution 1
{
  const solution = (str) => {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }

    return str === reversed;
  };

  console.log(solution(str));
}

// Solution 2
{
  const solution = (str) => {
    const middle = Math.floor(str.length / 2);

    for (let i = 0; i < middle; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }

    return true;
  };

  console.log(solution(str));
}
