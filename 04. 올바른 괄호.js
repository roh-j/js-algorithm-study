// {, }, [, ], (, )

const str = "{[()]}";

{
  const solution = (str) => {
    let stack = [];

    for (char of str) {
      if (char === "{" || char === "[" || char === "(") {
        if (char === "{") {
          stack.push("}");
        }

        if (char === "[") {
          stack.push("]");
        }

        if (char === "(") {
          stack.push(")");
        }
      } else {
        const last = stack.pop();

        if (last !== char) {
          return false;
        }
      }
    }

    return !stack.length;
  };

  console.log(solution(str));
}
