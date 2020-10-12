// given an array of arrays of numbers traverse through all values in a spiral around and back,
// return an array of the numbers in the order they are visited.

function spiralTraversal (matrix) {

  //variables
  var results = [];
  var rows = matrix.length; //rows = the total number of rows in the input
  var columns = matrix[0].length; //colmuns = the total number of columns in the input
  var rc = 0; //rc = the counter to track how many rows you have been through
  var cc = 0; //cc = the counter to track how many columns you have been through

  var rL = 0; //tracks how many times the rowLeft function has been called
  var rR = 0; //tracks how many times the rowRight function has been called
  var cD = 0; //tracks how many times the colDown function has been called
  var cU = 1; //since colUp is the only function that doesn't go all the way to the edge in the first call

  var rowRight = function(r, c, ec) {
    while (c < ec) {
      results.push(matrix[r][c]);
      c++;
    }
    results.push(matrix[r][c])
    rc++;
    rR++;
    if (rc === rows || cc === columns) {return}//done traversing (if you have either seen every row or every column)
    colDown(r+1, c, rows - 1 - cD);
  }

  var colDown = function(r, c, er) {
    while (r < er) {
      results.push(matrix[r][c])
      r++;
    }
    results.push(matrix[r][c])
    cc++;
    cD++;
    if (rc === rows || cc === columns) {return}//done traversing
    rowLeft(r, c-1, rL)
  }

  var rowLeft = function (r, c, ec) {
    while (c > ec) {
      results.push(matrix[r][c]);
      c--;
    }
    results.push(matrix[r][c])
    rc++;
    rL++;
    if (rc === rows || cc === columns) {return}//done traversing
    colUp(r-1, c, cU);
  }

  var colUp = function(r, c, er) {
    while (r > er) {
      results.push(matrix[r][c]);
      r--;
    }
    results.push(matrix[r][c])
    cc++;
    cU++;
    if (rc === rows || cc === columns) {return}//done traversing
    rowRight(r, c+1, columns-1-rR)
  }


  rowRight(0, 0, columns-1)
  return results;
}