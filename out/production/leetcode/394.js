// decode string

var decodeString = function(s) {
    const stack = [...s];
    let ret = '';

    while(stack.length) {
        let arr = [];
        let flag = 0;
        const char = stack.pop();
        if (char === ']') {
            flag += 1;
            continue;
        } else if (char === '[') {
            flag -= 1;
            // todo
            if (flag > 0) {
                
            } else {
                const num = stack.pop();
                ret = arr.join('').repeat(num) + ret;
                arr = [];
            }
            
        } else {
            if (flag > 0) {
                arr.unshift(char);
            } else {
                ret = char + ret;
            }
        }
    }

    return ret;
}; 

let s;
s = "3[a]2[bc]"
const ret = decodeString(s);

console.log(ret);