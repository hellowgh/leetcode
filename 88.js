// 合并2个有序数组

var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    const ret = new Array(m + n).fill(0);

    while(j < n) {
        let cur = 0;
        const n2 = nums2[j];
        const n1 = nums1[i];
        if (n1 === n2) {
            ret[i + j] = n1;
            ret[i + j + 1] = n1;
            i++;
            j++;
        } else if (n1 < n2) {
            ret[i + j] = n1;
            i++;
        } else {
            ret[i + j] = n2;
            j++
        }
    }

    for(let i = 0; i < ret.length; i++) {
        nums1[i] = ret[i];
    }
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

merge(nums1, m, nums2, n)