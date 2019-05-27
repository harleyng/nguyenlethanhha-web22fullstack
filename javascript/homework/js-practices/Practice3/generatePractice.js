'use strict'
function generate(testLengthArray){
  ///////////////////////// INPUT /////////////////////////
  const result = [];
  for (let i = 0; i <= testLengthArray.length - 1; i++) {
    let newList = {
      input: [],
      target: null,
      ouput: null
    }
    for (let j = 0; j <= testLengthArray[i] - 1; j++) {
      newList.input.push(Math.floor(Math.random() * 20000 - 10000));
    }
  
    function sort(input) {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length - i; j++) {
          if (input[j] > input[j + 1]) {
            input[j] = input[j] + input[j + 1];
            input[j + 1] = input[j] - input[j + 1];
            input[j] = input[j] - input[j + 1];
          }
        }
      }
      return input;
    }

    sort(newList.input);

  ///////////////////////// TARGET & OUTPUT /////////////////////////
    function search(input, target) {
      for (var index = 0; index < input.length; index++) {
          if (input[index] === target) {
            return index;
          }
      }
      return -1;
    }

    if (i === 0) {
        newList.target = 99999999;
        newList.ouput = -1;
    } else if (i === 1) {
        newList.target = newList.input[0];
        newList.ouput = 0;
    } else if (i === 2) {
        newList.target = newList.input[newList.input.length - 1];
        newList.ouput = newList.input.length - 1;
    } else if (i === 3) {
        newList.target = newList.input[2];
        newList.ouput = 2;
    } else {
      newList.target = Math.floor(Math.random() * 20000 - 10000);
      newList.ouput = search(newList.input, newList.target);
    }
    //////////////////////// RESULT ////////////////////////
    result.push(newList);
  }
  return result;
}

module.exports = generate
