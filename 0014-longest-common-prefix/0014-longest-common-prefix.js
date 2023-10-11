/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return "";
    }
     
    strs.sort();
    
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];
    
    let i = 0
    while (i < firstStr.length && firstStr.charAt(i) === lastStr.charAt(i)) {
        i++;
    }
    
    return firstStr.substring(0, i);
    
};