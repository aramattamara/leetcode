/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// if sorted from low to high
var findContentChildren = function(g, s) {
    
    let result = 0;
    
    let sortedS = s.sort((a, b ) => a - b);
    let sortedG = g.sort((a, b ) => a - b);
    
    for (let i = g.length - 1; i >= 0 ; i--){
        if (g[i] <= s[s.length - 1]) {  
            result ++;
            s.pop()
        }
       
    }
    return result;
};

// if sorted from high to low
// var findContentChildren = function(g, s) {

//     let result = 0;
//     let j = 0;

//     let sortedS = s.sort((a, b ) => b - a);
//     let sortedG = g.sort((a, b ) => b - a);

//     for (let i = 0; i < g.length; i++){
//         if (g[i] <= s[j]) {
//             result ++;
//             j++;
//         }

//     }
//     return result;
// };