// two sum

/**
 * 最典型的以空间换时间
 * @param nums 
 * @param target 
 * @returns 
 */

function twoSum(nums: number[], target: number): number[] {
    const map: {[k: string]: number} = {}

    for (let i = 0; i < nums.length; i++) {
        const diff = String(target - nums[i]);
        if (diff in map && map[diff] !== i) {
            return [i, map[diff]]
        }

        map[nums[i]] = i;
    }
    
    return [];
};

const ret = twoSum([2,5,5,11], 10)

console.log(ret);
