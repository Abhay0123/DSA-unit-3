function runProgram(input) {
  // console.log(input);
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (arr.length === 0 || arr[arr.length - 1] != input[i]) {
      arr.push(input[i]);
    } else {
      if (arr[arr.length - 1] == input[i]) {
        arr.pop();
      }
    }
  }
  if (arr.length === 0) {
    console.log("Empty String");
  } else {
    console.log(arr.join(""));
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
