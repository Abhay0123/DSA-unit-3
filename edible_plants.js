function ediblePlants(N, edible, M, plants) {
  let count = 0;
  let sum = 0;

  edible = edible.split("");
  plants = plants.split("");

  let obj = {};
  for (let i = 0; i < M; i++) {
    if (obj[plants[i]] === undefined) {
      obj[plants[i]] = 1;
    } else {
      obj[plants[i]]++;
    }
  } //console.log(obj)
  for (let k in obj) {
    for (let j = 0; j < N; j++) {
      if (edible[j] == k) {
        sum += obj[k];
      }
    }
  }
  console.log(sum);
  //console.log(typeof(sum))
}
