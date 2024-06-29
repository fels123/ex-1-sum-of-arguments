//EXCERCISE -1

// create function called sum taking
//  varying arguments which will be =10

// function sums(...items) {
//   return items.reduce((a, b) => a + b);
// }
// console.log(sums(3, 6, 1));

// // to challenge yourself modify the
// // sum to take an array and still give the same result

// function sum(...items) {
//   if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
//   return items.reduce((a, b) => a + b);
// }
// console.log(sum([3, 6, 1]));

// ***********************************************************
// area of a circle
// circle.raius = 2;
// circle.area = 20;

// calculating area of a circle
// const circles = function (radius) {
//   return Math.PI * radius * radius;
// };
// console.log(circles(4));

// ************************************

// const circle = {
//   radius: 4,
//   get area() {
//     return Math.PI * this.radius * this.radius;
//   },
// };
// console.log(circle.area);

// conclusion:Use circles function if you prioritize reusability and simplicity for standalone calculations.
// Use circle object with area getter if you prefer encapsulation, object-oriented design, and readability, especially in scenarios involving multiple properties or methods related to circles.

// ************************************************************
//ERROR HANDLING

try {
  const numbers = [1, 2, 3, 4];

  const count = countOccurances(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurances(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid array");
  return array.reduce((accumulator, current) => {
    const occurance = current === searchElement ? 1 : 0;
    return accumulator + occurance;
  }, 0);
}
