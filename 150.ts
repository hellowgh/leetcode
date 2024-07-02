// 单词规律

/**
 * 官方解释说是双射套路
 * 
 * 我觉着这道简单题挺难的
 */

function wordPattern(pattern: string, s: string): boolean {
    const pMap = new Map();
    const sMap = new Map();
    const words = s.split(' ');

    if (pattern.length !== words.length) {
        return false;
    }

    for (let [i, word] of words.entries()) {
        const ch = pattern[i];

        if (pMap.has(ch) && pMap.get(ch) !== word || sMap.has(word) && sMap.get(word) !== ch) {
            return false;
        }

        pMap.set(ch, word);
        sMap.set(word, ch);
    }

    return true;
};

const s = 'aaaabbbb'

const map = new Map();

s.split('').forEach(s => {
    map.set(s, 333);
})

console.log(map);
