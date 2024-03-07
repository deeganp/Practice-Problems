function groupAnagrams(strs) {
    // Create an object to store groups of anagrams
    const anagramGroups = {};

    // Iterate through each string in the input array
    for (const str of strs) {
        // Sort the characters of the string to create a unique key for anagrams
        const sortedStr = str.split('').sort().join('');

        // Add the string to its corresponding group
        if (!anagramGroups[sortedStr]) {
            anagramGroups[sortedStr] = [];
        }
        anagramGroups[sortedStr].push(str);
    }

    // Return the values (arrays of anagrams) from the object
    return Object.values(anagramGroups);
}