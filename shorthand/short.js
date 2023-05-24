//Longhand
let x;
let y = 20;

//Shorthand
let x,
  y = 20;

//////////////////////////
//Longhand
let a, b, c;
a = 5;
b = 8;
c = 12;

//Shorthand
let [a, b, c] = [5, 8, 12];

//////////////////////////////////
let marks = 26;

//Longhand
let result;
if (marks >= 30) {
  result = 'Pass';
} else {
  result = 'Fail';
}

//Shorthand
let result = marks >= 30 ? 'Pass' : 'Fail';

////////////////////////////
//Longhand
let imagePath;
let path = getImagePath();
if (path !== null && path !== undefined && path !== '') {
  imagePath = path;
} else {
  imagePath = 'default.jpg';
}

//Shorthand 1
let imagePath = getImagePath() || 'default.jpg';

//Shorthand 2
let imagePath = getImagePath() ?? 'default.jpg';

//////////////////////////////
//Longhand
if (isLoggedin) {
  goToHomepage();
}

//Shorthand
isLoggedin && goToHomepage();

/////////////////
//Swap two variables
let x = 'Hello',
  y = 55;

//Longhand
const temp = x;
x = y;
y = temp;

//Shorthand
[x, y] = [y, x];

// Arrow Function
//Longhand
function add(num1, num2) {
  return num1 + num2;
}

//Shorthand
const add = (num1, num2) => num1 + num2;

//Template Literals
//Longhand
console.log('You got a missed call from ' + number + ' at ' + time);

//Shorthand
console.log(`You got a missed call from ${number} at ${time}`);

// Multiple condition checking
//Longhand
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
  // Execute some code
}

// Shorthand 1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
  // Execute some code
}

// Shorthand 2
if ([1, 'one', 2, 'two'].includes(value)) {
  // Execute some code
}

//Object Property Assignment
let firstname = 'Amitav';
let lastname = 'Mishra';

//Longhand
let obj = { firstname: firstname, lastname: lastname };

//Shorthand
let obj = { firstname, lastname };

//String into a Number

//Longhand
let total = parseInt('453');
let average = parseFloat('42.6');

//Shorthand
let total = +'453';
let average = +'42.6';

//Repeat a string multiple times
//Longhand
let str = '';
for (let i = 0; i < 5; i++) {
  str += 'Hello ';
}
console.log(str); // Hello Hello Hello Hello Hello

// Shorthand
'Hello '.repeat(5);

//Exponent Power
// Longhand
const power = Math.pow(4, 3); // 64

// Shorthand
const power = 4 ** 3; // 64

// Find max and min numbers in an array
// Shorthand
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2

//For loop
let arr = [10, 20, 30, 40];

//Longhand
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Shorthand
//for of loop
for (const val of arr) {
  console.log(val);
}

//for in loop
for (const index in arr) {
  console.log(`index: ${index} and value: ${arr[index]}`);
}

//Merging of arrays
let arr1 = [20, 30];

// Longhand
let arr2 = arr1.concat([60, 80]);
// [20, 30, 60, 80]

// Shorthand
let arr2 = [...arr1, 60, 80];
// [20, 30, 60, 80]

//JavaScript foreach Loop Shorthand
// Longhand
for (var i = 0; i < allImgs.length; i++)
  // Shorthand
  // Shorthand for Array.forEach
  for (var i in allImgs)
    function logArrayElements(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    }

[2, 5, 9].forEach(logArrayElements);
// logs: a[0] = 2, a[1] = 5, a[2] = 9

//If Presence Shorthand

// Longhand
if (likeJavaScript === true)
  if (likeJavaScript)
    // Shorthand
    // Other Examples:
    // If 'a' is NOT equal to true, then do something.
    // Longhand
    var a;

if (a !== true) {
  // do something...
}

// Shorthand
var a;

if (!a) {
  // do something...
}
