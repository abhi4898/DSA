function waterTrapping(blocks, n) {
  let trappedWater = 0;
  let leftMax = blocks[0];
  let RightMax = blocks[n - 1];
  let leftPointer = 1;
  let rightPointer = n - 1;

  if (n <= 2) {
    console.log("no trapped water");
    return;
  }

  while (leftPointer <= rightPointer) {
    if (leftMax < RightMax) {
      if (leftMax < blocks[leftPointer]) {
        leftMax = blocks[leftPointer];
      } else {
        trappedWater += leftMax - blocks[leftPointer];
      }
      leftPointer++;
    } else {
      if (RightMax < blocks[rightPointer]) {
        RightMax = blocks[rightPointer];
      } else {
        trappedWater += RightMax - blocks[rightPointer];
      }
      rightPointer--;
    }
  }
  console.log(trappedWater);
}

// let blocks = [4, 2, 0, 6, 2, 3, 5];
let blocks = [1, 2, 3, 4];
let n = blocks.length;
waterTrapping(blocks, n);
