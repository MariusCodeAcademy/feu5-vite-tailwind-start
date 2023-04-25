const a = 5;

function add(sk: number) {
  return sk + 5;
}

add(a);

// function to get average array value
function getAverage(arr: number[]) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum / arr.length;
}
