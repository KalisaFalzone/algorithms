// Problem: given an sodoku board as an array of arrays, write a function in three parts that
// will determine if the board is a valid solution to a sodoku problem.

var validSolution = function(board) {

  // part 1 - check that all rows have each number 1 through 9 exactly once
  var checkRows = function(boardEx) {
     for (var i = 0; i < 9; i++) {
      var obj = {}
      for (var j = 0; j < 9; j++) {
        if (obj[boardEx[i][j]]) {
          return false;
        } else {
          obj[board[i][j]] = true;
        }
      }
    }
    return true;
  }

  // part 2 - all columns have unique digits 1-9
  var checkColumns = function(boardEx2) {
    var counter = 0;
    var objects = [{},{},{},{},{},{},{},{},{}]
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (objects[counter%9][boardEx2[i][j]]) {
          return false;
        } else {
          objects[counter%9][boardEx2[i][j]] = true;
        }
        counter++;
      }
    }
    return true;
  }

  // part 3 - every 3x3 matrix (there are 9) have unique digits 1-9
  var checkAreas = function(boardEx3) {
    var objects = [{},{},{},{},{},{},{},{},{}]
    //determine which area the number is in given i and j
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (objects[Math.floor(i/3)*3 + Math.floor(j/3)][boardEx3[i][j]]) {
          return false;
        } else {
          objects[Math.floor(i/3)*3 + Math.floor(j/3)][boardEx3[i][j]] = true;
        }
      }
    }
    return true;
  }

  if (checkRows(board) && checkColumns(board) && checkAreas(board)) {
    return true;
  }
  return false;
}

// Examples:

// should return true
var validBoard = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
                  [6, 7, 2, 1, 9, 5, 3, 4, 8],
                  [1, 9, 8, 3, 4, 2, 5, 6, 7],
                  [8, 5, 9, 7, 6, 1, 4, 2, 3],
                  [4, 2, 6, 8, 5, 3, 7, 9, 1],
                  [7, 1, 3, 9, 2, 4, 8, 5, 6],
                  [9, 6, 1, 5, 3, 7, 2, 8, 4],
                  [2, 8, 7, 4, 1, 9, 6, 3, 5],
                  [3, 4, 5, 2, 8, 6, 1, 7, 9]]

// should return true
var good_sudoku = [ [7,8,4,1,5,9,3,2,6],
              [5,3,9,6,7,2,8,4,1],
              [6,1,2,4,3,8,7,5,9],
              [9,2,8,7,1,5,4,6,3],
              [3,5,7,8,4,6,1,9,2],
              [4,6,1,9,2,3,5,8,7],
              [8,7,6,3,9,4,2,1,5],
              [2,4,3,5,6,1,9,7,8],
              [1,9,5,2,8,7,6,3,4] ]

// should return false
var bad_sudoku = [ [7,8,4,1,5,9,3,2,6],
              [5,3,9,7,6,2,8,4,1],
              [6,1,2,4,3,8,7,5,9],
              [9,2,8,7,1,5,4,6,3],
              [3,5,7,8,4,6,1,9,2],
              [4,6,1,9,2,3,5,8,7],
              [8,7,6,3,9,4,2,1,5],
              [2,4,3,5,7,1,9,6,8],
              [1,9,5,2,8,7,6,3,4] ]

console.log('validSolution', validSolution(validBoard));
console.log('good_sodoku', validSolution(good_sudoku));
console.log('bad_sodoku', validSolution(bad_sudoku));