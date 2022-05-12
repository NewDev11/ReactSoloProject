const object = { a: 1, b: 2, c: 3, d: 4 };

let arr= []

for (const key in object) {
  console.log(`${key}: ${object[key]}`);
  arr.push(object[key])
}
console.log(arr)