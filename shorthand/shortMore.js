// Null, Undefined, Empty Checks

//Longhand

if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
  let variable2 = variable1;
}

//Shorthand;

let variable2 = variable1 || '';

/*
//null value example
let variable1 = null;
let variable2 = variable1 || '';
console.log(variable2);
//output: '' (an empty string)

//undefined value example
let variable1 = undefined;
let variable2 = variable1 || '';
console.log(variable2);
//output: '' (an empty string)

//normal value example
let variable1 = 'hi there';
let variable2 = variable1 || '';
console.log(variable2);
//output: 'hi there'

*/

//Object Array Notation

//Longhand

let a = new Array();
a[0] = 'myString1';
a[1] = 'myString2';
a[2] = 'myString3';

//Shorthand

let a = ['myString1', 'myString2', 'myString3'];

//If true … else

//Longhand

let bigg;
if (x > 10) {
  bigg = true;
} else {
  bigg = false;
}
//Shorthand:

let big = x > 10 ? true : false;

// Declaring variables Shorthand

//longhand:

/*
let x;
let y;
let z = 3;

*/
//Shorthand:
let x,
  y,
  z = 3;

//If Presence

// Longhand

if (likeJavaScript === true) {
}

if (likeJavaScript) {
  // Shorthand
}

/*
//Switch case alternative
const dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    document.write("It's Monday");
    break;
  case 2:
    document.write("It's Tuesday");
    break;
  case 3:
    document.write("It's Wednesday");
    break;
  case 4:
    document.write("It's Thursday");
    break;
  case 5:
    document.write("It's Friday");
    break;
}
*/

// shorthand

/*
const case = {
  'one': () => console.log('It is Monday'),
  'two': () => console.log('It is Tuesday'),
  'three': () => console.log('It is Wednesday'),  
  'four': () => console.log('It is Thursday'),  
  'five': () => console.log('It is Friday')
};

(case[dayOfWeek] || case['three'])();

*/

// longhand
// joining arrays
const nums1 = [0,1,2,3];
const nums2 = [4,5,6].concat(nums1);
// cloning arrays
const arr = [0,1,2,3,4,5];
const arr2 = arr.slice()
//shorthand
// joining arrays
const nums1 = [0,1,2,3 ];
const nums2 = [4,5,6, …nums1];
// cloning arrays
const arr = [1, 2, 3, 4,5];
const arr2 = […arr];