function firstUniqChar(s) {
    const charCount = {};

    // Store the frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }

    // Iterate through the string to find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i; // Return the index of the first non-repeating character
        }
    }

    return -1; // Return -1 if no non-repeating character is found
}
