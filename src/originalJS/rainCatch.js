// Given an array of numbers representing rooftops in a 2D drawing,
// find the maximum area of collected water.
// Examples:
// [0, 1, 0] is 0, nothing is caught since there is no pool
// [1, 0, 1] is 1, just the water above the 0 is caught on both sides
// [12, 0, 3] is 3, the water above the 0 is bounded on the right by 3
// [12, 0, 2, 3] is 4, the water above the 0 (3 high) and the 2 (1 high) are both caught on the right by 3



var rainCatch = function(arr) {
  var total = 0; // the total caught water
  var ml = arr[0]; // the maximum from the left
  var mr = arr[arr.length-1]; // the maximum from the right
  var i = 0 // index counting up
  var j = arr.length-1; // index counting down

    // you always want to compare the current value to the second smallest value
    // the current value is determined by which is smaller, mr or ml
  while (i <= j) {
    ml = Math.max(ml, arr[i]);
    mr = Math.max(mr, arr[j]);
    if (ml > mr) { // then we need to look at values on the right side and compare with the second largest value, mr. Then move backwards to see if the value to the left of the current value is the new second smallest
        total += mr - arr[j]; // if they are equal note this adds nothing
        j--;
    } else { // this means the max on the right is bigger than the left (or they are the same) and you can compare the current value to the value on the right
            total += ml-arr[i];
            i++;
    }
  }
    return total;
}

// More Examples
// console.log(rainCatch([1,0,3,1,2,0,3,1,4,0,7])) // 13 ends on an abs max
// console.log(rainCatch([1,0,3,1,2,0,3,1,4,0])) // 9 ends on an abs min
// console.log(rainCatch([1,0,3,1,2,0,3,1])) // 7 ends on a local min
// console.log(rainCatch([1,0,3,1,2])) // 2 ends on a local max
// console.log(rainCatch([5,4,3,2,1,2,3,4,5,1,1,1,1,1,1])) // 16
// console.log(rainCatch([1,3,1,2,1,4,1,3,4,5,4,2,2,1,0,2,5,4,2,2,3,2,7])) // 40