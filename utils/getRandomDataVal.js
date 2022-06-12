exports.getRandomNumber = (digit) => Math.random().toFixed(digit).split(".")[1];

exports.getRandRangeNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

exports.getRandDate = (start, end) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
