function sort(arr) {
  for (let i = 0, endI = arr.length; i < endI; i += 1) {
    let toggle = false;

    for (let j = 0, endJ = endI - 1; j < endJ; j += 1) {
      if (arr[j].name > arr[j + 1].name) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        toggle = true;
      }
    }
    if (!toggle) break;
  }
  return arr;
}

export default { sort };
