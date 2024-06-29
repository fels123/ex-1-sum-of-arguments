//EXCERCISE -1

// create function called sum taking
//  varying arguments which will be =10

function sums(...items) {
  return items.reduce((a, b) => a + b);
}
console.log(sums(3, 6, 1));

// to challenge yourself modify the
// sum to take an array and still give the same result

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}
console.log(sum([3, 6, 1]));
