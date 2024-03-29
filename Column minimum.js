function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  var newarr = [];
  var [r, c] = input[0].trim().split(" ").map(Number);
  for (let i = 0; i < r; i++) {
    var arr = input[line++].trim().split(" ").map(Number);
    newarr.push(arr);
    // console.log(arr.join(' '));
  }
  let final_ans = "";
  for (i = 0; i < c; i++) {
    let min = Infinity;
    for (j = 0; j < r; j++) {
      if (newarr[j][i] < min) {
        min = newarr[j][i];
      }
    }
    final_ans += min + " ";
  }
  console.log(final_ans);
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
