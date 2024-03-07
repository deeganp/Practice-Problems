function lengthOfLongestSubstring(s) {
    let maxLength = 0; // Initialize the maximum length of substring
    let left = 0; // Initialize the left pointer of the sliding window

    const seen = new Set(); // Initialize a set to keep track of seen characters

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // If the current character is already seen, move the left pointer until no repeating characters are encountered
        while (seen.has(currentChar)) {
            seen.delete(s[left]);
            left++;
        }

        // Add the current character to the set
        seen.add(currentChar);

        // Update the maximum length of substring
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}