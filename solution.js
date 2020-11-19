/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverseInt = x.toString().split('').reverse().join('')
    
    return x == reverseInt
};