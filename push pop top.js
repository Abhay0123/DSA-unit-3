function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let arr = [];
  // console.log(input);
  for (let i = 1; i <= tc; i++) {
    let v = input[i].split(" ").map(Number);
    if (v[0] == 1) {
      arr.push(v[1]);
      //console.log(arr)
    } else if (v[0] == 2) {
      arr.pop();
      //console.log(arr)
    } else {
      if (arr.length !== 0) {
        console.log(arr[arr.length - 1]);
      }
      if (arr.length === 0) {
        console.log("Empty!");
      }
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
