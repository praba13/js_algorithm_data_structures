const arr = ['Yes', 'No', 'Maybe'];

// Longhand
for (let i = 0; i < arr.length; i++) {
  console.log('Here is item: ', arr[i]);
}

// Shorthand
for (let str of arr) {
  console.log('Here is item: ', str);
}

arr.forEach((str) => {
  console.log('Here is item: ', str);
});

for (let index in arr) {
  console.log(`Item at index ${index} is ${arr[index]}`);
}

// For object literals
const obj = { a: 1, b: 3, c: 5 };

for (let key in obj) {
  console.log(`Value at key ${key} is ${obj[key]}`);
}
