function runProgram(input) {
  input = input.trim().split("\n");
  let [r, c] = input[0].split(" ");
  let line = 1;
  let sum = 0;
  for (let i = 0; i < r; i++) {
    var arr = input[line++].trim().split(" ").map(Number);
    for (let j = 0; j < arr.length; j++) {
      sum = sum + arr[j];
    }
  }
  //  console.log(sum);
  line = 1;

  for (let l = 0; l < r; l++) {
    let arr1 = input[line++].trim().split(" ").map(Number);
    let num = 0;
    let arr2 = [];
    for (let k = 0; k < arr1.length; k++) {
      num = sum - arr1[k];
      arr2.push(num);
    }
    console.log(arr2.join(" "));
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
