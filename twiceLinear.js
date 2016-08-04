// Problem description:
// //Description:

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:

// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

// Example:

// dbl_linear(10) should return 22

var y = function(n) {
    return 2*n +1;
}

var z = function(n) {
    return 3*n +1;
}

var num = function(a,b) { return a-b; }

function dbl_linear(x) {
    var array = [1];
    var index = 0;

    do {
        var val1 = y(array[index]);

        var val2 = z(array[index++]);

        if (array.indexOf(val1) < 0) { array.push(val1); array.sort(num); }
        if (array.indexOf(val2) < 0) { array.push(val2); array.sort(num); }
    } while (index <= x);

    return array[x];
}