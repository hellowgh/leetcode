var RandomizedSet = function() {
    this.list = [];
    this.map = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.map) {
        return false;
    }
    this.list.push(val);
    this.map[val] = this.list.length - 1;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (val in this.map) {
        const index = this.map[val];
        const len = this.list.length;
        const last = this.list[len - 1];
        this.list[index] = last;
        this.map[last] = index;
        this.list.pop();
        delete this.map[val];
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const len = this.list.length;
    const index = Math.floor(Math.random() * len);
    return this.list[index];
};