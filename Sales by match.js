function runProgram(input) {
  input = input.trim().split("\n");
  let l = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let obj = {};
  for (let i = 0; i < l; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  } //console.log(obj);
  let ans = [];
  for (let k in obj) {
    if (obj[k] > 1) {
      ans.push(obj[k]);
    }
  } // console.log(ans);
  let num = 0;
  for (let p = 0; p < ans.length; p++) {
    if (ans[p] % 2 === 0) {
      num += ans[p] / 2;
      //  console.log(num)
    }
    if (ans[p] % 2 !== 0) {
      num += (ans[p] - 1) / 2;
      //  console.log(num)
    }
  }
  console.log(num);
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
