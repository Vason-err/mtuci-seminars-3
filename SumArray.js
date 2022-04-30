function getSum(arr) {
  return arr.reduce((a, b) => a + b);
}

let arr = [50, 60, 20, 15, 10];
console.log(getSum(arr)) // 155