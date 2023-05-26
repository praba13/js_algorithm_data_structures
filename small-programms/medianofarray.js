/*
Input arr1 : [1 4 7 9]
Output : 5.5
Explanation : The median of the two sorted array is 
              the middle elements which is 5 if the 
              arrayLength =arr1.length + arr2.length is odd 
              if the array length is even then it will be 
              the average of two number 

Input: arr1 : [5 3 1 8 90]
        
Output: 5
Explanation : The median is average of two number 
              because the array.length is even for this case.

*/
function medianof2Arr(arr1) {
  var concat = arr1;
  concat = concat.sort(function (a, b) {
    return a - b;
  });

  console.log(concat);
  var length = concat.length;

  if (length % 2 == 1) {
    // If length is odd
    console.log(concat[length / 2 - 0.5]);
    return concat[length / 2 - 0.5];
  } else {
    console.log((concat[length / 2] + concat[length / 2 - 1]) / 2);

    return (concat[length / 2] + concat[length / 2 - 1]) / 2;
  }
}

arr1 = [1, 4, 7, 9];

medianof2Arr(arr1);
