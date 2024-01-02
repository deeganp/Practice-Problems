class Solution(object):
    def isPalindrome(self, s):
        clean_s = ''.join(ch.lower() for ch in s if ch.isalnum())
        return clean_s == clean_s[::-1]
        """
        :type s: str
        :rtype: bool
        """