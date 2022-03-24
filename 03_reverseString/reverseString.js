const reverseString = function (str) {
  let strArray = str.split("");
  let revString = "";
  for (let i = strArray.length - 1; i >= 0; i--) {
    revString += strArray[i];
  }
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
