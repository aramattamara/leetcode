/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if (s.length > t.length) return false;
    
    let i = 0;
    let j = 0;
    
    while (i < s.length && j < t.length){
        if (s[i] == t[j]){
            i++;
        }
        j++;
    }
    
    return i === s.length;
    
};