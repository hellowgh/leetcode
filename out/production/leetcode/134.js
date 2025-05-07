// gas station
// second

var canCompleteCircuit = function(gas, cost) {
    const len = gas.length;
    let i = 0;
    while (i < len) {
        let sumOfGas = 0;
        let sumOfCost = 0;
        let ins = 0;

        while (ins < len) {
            let j = (i + ins) % len;
            sumOfGas += gas[j];
            sumOfCost += cost[j];

            if (sumOfCost > sumOfGas) {
                break;
            }

            ins++;
        }
        if (ins === len) {
            return i;
        } else {
            i = ins + i + 1;
        }
    }

    return -1;
};