var lengthOfLIS = function(nums) {
    const len = nums.length;
    if (len <= 1) return len;
    
    const dp = new Array(len);
    let ret = 1;

    for (let i = 0; i < len; i++) {
        dp[i] = 1;
        for (let j = 0; j <= i; j++) {
            ret = Math.max();
        }
    }

    return ret;
};