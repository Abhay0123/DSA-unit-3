function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let l = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    //console.log(l,arr);
    let x = solveAFinancialProblem(l, arr);
    // console.log(x);
    let ans = "";
    for (let j = 0; j < arr.length; j++) {
      if (x[j] == -1) {
        ans += j + 1 + " ";
      } else {
        ans += j - x[j] + " ";
      }
    }
    console.log(ans);
  }
}
function solveAFinancialProblem(l, arr) {
  let stack = [];
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length !== 0 && arr[i] >= arr[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }
    stack.push(i);
  }
  return ans;
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
