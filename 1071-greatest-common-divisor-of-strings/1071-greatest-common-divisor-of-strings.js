/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
        // If they cannot be formed by repeating the same pattern
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Find GCD of the lengths
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    return str1.substring(0, gcd(str1.length, str2.length));
};