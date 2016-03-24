module.exports = function(condition, trueFn, falseFn) {
  if (condition) {
    trueFn && trueFn();
    return true;
  }

  falseFn && falseFn();
  return false;
};