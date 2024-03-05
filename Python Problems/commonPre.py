def longest_common_prefix(strs):
    if not strs:
        return ""

    # Iterate through characters of the first string
    for i, char in enumerate(strs[0]):
        # Check if all other strings have the same character at the same position
        for string in strs[1:]:
            if i >= len(string) or string[i] != char:
                # If not, return the prefix found so far
                return strs[0][:i]
    
    # If all strings have the same prefix, return the first string
    return strs[0]
