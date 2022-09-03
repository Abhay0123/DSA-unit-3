function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let br = input[line];
    line++;
    bracket(br);
    // console.log(br);
  }
  function bracket(br) {
    let obj = {
      "]": "[",
      "}": "{",
      ")": "(",
    };
    let str = [];
    for (let i = 0; i < br.length; i++) {
      if (obj[br[i]] === undefined) {
        str.push(br[i]);
      } else {
        if (str.length === 0) {
          console.log("not balanced");
          return;
        }

        if (str[str.length - 1] == obj[br[i]]) {
          str.pop();
        }
      }
    }
    if (str.length) {
      console.log("not balanced");
    } else {
      console.log("balanced");
    }
  }
}
if (process.env.USERNAME === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
