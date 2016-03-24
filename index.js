module.exports = function(condition, falseFn, trueFn) {
  if (condition) {
    trueFn && trueFn();
    return true;
  }

  falseFn && falseFn();
  return false;
};
