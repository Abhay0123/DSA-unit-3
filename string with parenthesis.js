function runProgram(input) {
  let arr = input.trim().split("");
  let Input = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "[" ||
      arr[i] == "]" ||
      arr[i] == "(" ||
      arr[i] == ")" ||
      arr[i] == "{" ||
      arr[i] == "}"
    ) {
      Input.push(arr[i]);
    }
  }
  let newInput = Input.join("");
  //  console.log(newInput);
  stringsWithParenthesis(newInput);
}
function stringsWithParenthesis(newInput) {
  let obj = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  let str = [];
  if (newInput.length % 2 !== 0) {
    console.log("unbalanced");
  } else {
    for (let i = 0; i < newInput.length; i++) {
      if (obj[newInput[i]] === undefined) {
        str.push(newInput[i]);
      } else {
        if (str.length === 0) {
          console.log("unbalanced");
          return;
        }

        if (str[str.length - 1] == obj[newInput[i]]) {
          str.pop();
        }
      }
    }
    if (str.length) {
      console.log("unbalanced");
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
