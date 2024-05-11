function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // If the array is empty, return an empty string

    // Initialize the longest common prefix as the first string in the array
    let prefix = strs[0];

    // Iterate through the array starting from the second string
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the current prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by one character
            prefix = prefix.slice(0, prefix.length - 1);
            // If the prefix becomes empty, there's no common prefix, return an empty string
            if (prefix === "") return "";
        }
    }

    // Return the longest common prefix found
    return prefix;
}