class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        distance = 0
        
        while x > 0 or y > 0:
            bit_x = x % 2
            bit_y = y % 2
            if bit_x != bit_y:
                distance += 1
            x //= 2
            y //= 2
            
        return distance
                
        
        
        
        