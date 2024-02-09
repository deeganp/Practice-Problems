function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false; // If the lengths are different, they can't be anagrams
    }

    const charCount = {}; // Object to store character counts

    // Count occurrences of characters in string s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrement the counts for characters in string t
    for (let char of t) {
        if (!charCount[char]) {
            return false; // If a character in t is not found in charCount, it's not an anagram
        }
        charCount[char] -= 1; // Decrement count for the character
    }

    // Check if all characters' counts are zero (indicating anagrams)
    for (let count in charCount) {
        if (charCount[count] !== 0) {
            return false; // If any count is not zero, they're not anagrams
        }
    }

    return true; // If all characters' counts are zero, they are anagrams
}