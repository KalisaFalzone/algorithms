// You are robbing houses and given an array of houses
// each item in the array is the amount of money you would get by robbing that house
// you can't rob adjacent houses
// how do you maximize your profits?

function rob(nums) {
  var prev = 0;
  var cur = 0;

  for (var i = 0; i < nums.length; i++) {
    var temp = Math.max(prev+nums[i], cur);
    prev = cur;
    cur = temp;
  }
  return cur;
}

console.log(rob([5, 0, 1, 10, 2]));