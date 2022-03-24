const ftoc = function (tempf) {
  const tempc = ((tempf - 32) * 5) / 9;
  return Math.round(tempc * 10) / 10;
};

const ctof = function (tempc) {
  const tempf = (tempc * 9) / 5 + 32;
  return Math.round(tempf * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
