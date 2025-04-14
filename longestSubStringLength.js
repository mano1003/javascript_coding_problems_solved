function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            console.log("The Character right s[left] is " + s[left]);
            charSet.delete(s[left]);
            left++;
        }
        console.log("The Character right s[right] is " + s[right]);
        charSet.add(s[right]);
        // let rig =right - left + 1
        console.log("The character set is ", charSet);
        console.log("The character size set length is ", charSet.size.toString());
        console.log("The maxlength ", maxLength.toString());
        console.log("The right " + right.toString());
        console.log("The left " + left.toString());
        maxLength = Math.max(maxLength, right - left + 1);
        console.log("The maxlength after max check ", maxLength.toString());
    }

    return maxLength;
}

lengthOfLongestSubstring("abcdabcdbb"); // Output: 3