module.exports = function reverse (n) {
   return Math.abs(String(n).split('').reverse().join('').replace("-", ""));  
}
