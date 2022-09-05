function runProgram(input) {
  input = input.trim().split("\n");
  let tc = input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let arr = input[line].trim().split(" ").join();
    line++;
    //console.log(arr);
    alanAndChristopher(arr);
  }
}
function alanAndChristopher(arr) {
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "#") {
      str.pop();
    } else {
      str.push(arr[i]);
    }
  }
  console.log(str.join(""));
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
