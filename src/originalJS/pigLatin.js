// Given a string return that string in Pig latin

function pigIt(str){
  var array = str.split(' ');
  var result = '';
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].substring(1) + array[i][0] + 'ay';
  }
  return array.join(" ");
}

//Examples:
pitIt('Hello there person') // 'elloHay heretay ersonpay'
pigIt('One two three four') // 'neOay wotay hreetay ourfay'