function runProgram(input) {
  input = input.trim().split("\n");
  let first = input[0].trim().split(" ").map(Number);
  let k = +first[1];
  let arr = input[1].trim().split(" ").map(Number);

  arr = arr.sort();
  function sort(a, b) {
    return b - a;
  }

  let diff = k - arr[0];
  if (diff > 0) {
    console.log(diff);
  } else {
    console.log("0");
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
