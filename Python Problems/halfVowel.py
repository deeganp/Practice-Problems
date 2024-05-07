# Write a function that takes a word and returns true if more than half the letters are vowels and false if not

def more_than_half_vowels(word):
    vowels = set("aeiouAEIOU")
    vowel_count = sum(1 for letter in word if letter in vowels)
    return vowel_count > len(word) / 2