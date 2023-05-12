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
