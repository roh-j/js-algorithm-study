const str = "aabcccccaaa";

{
  const solution = (str) => {
    let result = [];
    let count = 1;

    for (let i = 0; i < str.length; i++) {
      const cur = str[i];
      const next = str[i + 1];

      if (cur === next) {
        count++;
      } else {
        result.push(cur + count);
        count = 1;
      }
    }

    return result.join("").length > str.length ? str : result.join("");
  };

  console.log(solution(str));
}
