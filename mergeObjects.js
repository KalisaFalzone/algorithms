// given two objects and a key this function will determine how the second object should be merged in with the first at that key

var mergeField = function(a, b, key) {
  if (Array.isArray(a[key])) {
    if (b[key] === undefined || b[key] === null) {
      a[key] = [];
    } else if (Array.isArray(b[key])) {
      a[key] = b[key];
    } else {
      a[key].push(b[key]);
    }
  } else if (a.hasOwnProperty(key) && b[key] === undefined) {
    delete a[key];
  } else if (typeof b[key] === 'string' || typeof b[key] === 'number' || typeof b[key] === 'boolean' || b[key] === undefined || b[key] === null) {
    a[key] = b[key];
  }
}

// this is the recursive function that calls the mergeField function on items that are not objects
// or recurses for nested objects.
// Note: typeof null === 'object', but this case should not need a recursive call.
var mergeObjects = function (obj1, obj2) {
  for (var key in obj2) {
    if (Array.isArray(obj2[key]) || typeof obj2[key] !== 'object' || obj2[key] === null) {
      mergeField(obj1, obj2, key)
    } else {
      mergeObjects(obj1[key], obj2[key])
    }
  }
}

// I separated out the mergeField function from the merge function in order to have some separation of concerns. The function that should be used
// to merge the two objects is mergeObjects

// To test this code with the example provided you can use this web address: https://repl.it/ClCz
