// longest common prefix

var longestCommonPrefix = function(strs) {
    let ret = '';
    if (strs.length === 0) return ret;

    let minLen = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < strs.length; i++) {
        minLen = Math.min(minLen, strs[i].length);
    }

    let left = 0;
    let right = minLen - 1;

    function isCommonPrefix(strs, index) {
        for (let i = 0; i <= index; i++) {
            const s = strs[0][i];
            for (let j = 1; j <= index; j++) {
                if (strs[j][i] !== s) {
                    return false;
                }
            }
        }

        return true;
    }

    while(left < right) {
        const mid = Math.floor((right - left ) / 2 + left);
        const flag = isCommonPrefix(strs, mid);
        if (flag) {
            // 不全部相同，左移
            right = mid - 1;
        } else {
            // 全部相同，右移
            left = mid + 1;
            ret = strs[0].substring(0, left);
        }
    }

    return ret;
};

let strs;
strs = ["flower","flow","flight"]
// strs = ["flower","fkow"]

const ret = longestCommonPrefix(strs);
console.log(ret);
