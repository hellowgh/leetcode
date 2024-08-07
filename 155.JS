// min stack

var MinStack = function() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
    this.mins = [];
};

MinStack.prototype.push = function(val) {
    if (val <= this.min) {
        this.min = val;
        this.mins.push(this.stack.length);
    } else {
        const len = this.mins.length;
        this.mins[len] = this.mins[len - 1];
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.mins.pop();
    this.stack.pop();

    const len = this.mins.length;
    if (len === 0) {
        this.min = Number.MAX_SAFE_INTEGER;
    } else {
        const index = this.mins[len - 1];
        this.min = this.stack[index];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};