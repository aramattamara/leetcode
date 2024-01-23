/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    
    let result = 0;
    
    let sortedS = s.sort((a, b ) => a - b);
    let sortedG = g.sort((a, b ) => a - b);
    
    for (let i = g.length - 1; i >= 0; i--){
        if (g[i] <= s[s.length - 1]) {  
            result ++;
            s.pop()
        }
       
    }
    return result;
};