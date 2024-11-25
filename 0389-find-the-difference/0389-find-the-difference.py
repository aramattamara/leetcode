class Solution(object):
    def findTheDifference(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: str
        """
        dictS = {}
        dictT = {}
        
        for char in s:
            dictS[char] = dictS.get(char, 0) + 1 
            
        for char in t:
            dictT[char] = dictT.get(char, 0) + 1
            
        for char in dictT:
            if dictT[char] != dictS.get(char, 0):
                return char
            

        
        
        