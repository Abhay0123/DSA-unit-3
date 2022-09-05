function runProgram(input) {
  input = input.trim().split("\n");
  let l = +input[0];
  let arr1 = input[1].trim().split("");
  let arr2 = input[2].trim().split("");
  rockPaperScissor(l, arr1, arr2);
}
function rockPaperScissor(l, arr1, arr2) {
  let str1_val = 0;
  let str2_val = 0;

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] == "r" && arr2[i] == "p") {
      str2_val++;
    } else if (arr1[i] == "p" && arr2[i] == "r") {
      str1_val++;
    } else if (arr1[i] == "r" && arr2[i] == "s") {
      str1_val++;
    } else if (arr1[i] == "s" && arr2[i] == "r") {
      str2_val++;
    } else if (arr1[i] == "p" && arr2[i] == "s") {
      str2_val++;
    } else if (arr1[i] == "s" && arr2[i] == "p") {
      str1_val++;
    } else if (
      (arr1[i] == "r" && arr2[i] == "r") ||
      (arr1[i] == "p" && arr2[i] == "p") ||
      (arr1[i] == "s" && arr2[i] == "s")
    ) {
      str1_val++;
      str2_val++;
    }
  }
  //console.log(str1_val);
  //console.log(str2_val);
  if (str1_val > str2_val) {
    console.log("First");
  } else if (str1_val < str2_val) {
    console.log("Second");
  } else if (str1_val == str2_val) {
    console.log("Draw");
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
