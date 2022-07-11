module.exports = function reverse (n) {
    n = n.toString().split('').reverse().join('');     
    return parseFloat(n);
  }
