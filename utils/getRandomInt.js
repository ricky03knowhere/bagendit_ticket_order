exports.getRandomNumber = (digit) => {
  return Math.random().toFixed(digit).split(".")[1];
};

exports.getRandRangeNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
