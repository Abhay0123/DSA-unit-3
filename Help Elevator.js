function helpElevator(N, elements) {
  for (let i = 0; i < N; i++) {
    if (elements[i] < 85) {
      console.log("Enter");
    } else {
      console.log("Beep");
    }
  }
}
