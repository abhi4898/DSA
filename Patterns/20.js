function invertedPyramidAndMirror(rows) {
  let str = "";

  // top half
  for (let i = 0; i < rows; i++) {
    // right angle triangle
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    // space
    for (let j = 0; j < 2 * (rows - i - 1); j++) {
      str += " ";
    }
    // mirror right angle triangle
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  // bottom half
  for (let i = rows - 1; i > 0; i--) {
    // inverse right angle triangle
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    // space
    for (let j = 0; j < 2 * (rows - i); j++) {
      str += " ";
    }
    // mirror inverse right angle triangle
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}

console.log(invertedPyramidAndMirror(5));
