def reverse_string(s):
    # Convert the string to a list of characters
    s_list = list(s)
    
    left = 0
    right = len(s_list) - 1

    while left < right:
        # Swap characters at left and right pointers
        s_list[left], s_list[right] = s_list[right], s_list[left]
        
        # Move pointers towards the center
        left += 1
        right -= 1
    
    # Convert the list of characters back to a string
    reversed_string = ''.join(s_list)
    
    return reversed_string
