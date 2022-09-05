// funny pair question.......
function runProgram(input) {
  input = input.trim().split("\n");
  let line = 1;
  let tc = +input[0];
  for (let i = 0; i < tc; i++) {
    let l = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(l,arr);
    funnyPair(l, arr);
  }
}
function funnyPair(l, arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  } //console.log(obj);
  let count = 0;
  let arr2 = [];
  for (let k in obj) {
    if (obj[k] == k) {
      arr2.push(k);
    } //console.log(arr2);
    //    console.log(k);
  }
  if (arr2) {
    if (arr2.length == 1) {
      console.log(arr2.join(" "));
    } else if (arr2.length > 1) {
      let max = 0;
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] > max) {
          max = arr2[j];
        }
      }
      console.log(max);
    } else {
      console.log(-1);
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
