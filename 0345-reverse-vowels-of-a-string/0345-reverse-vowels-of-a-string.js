/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split("");

    let vowels = "aeiouAEIOU";

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        // Move left until a vowel is found
        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }

        // Move right until a vowel is found
        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }

        // Swap vowels
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr.join("");
};