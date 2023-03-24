const FEE = 50;
const UNITS =2;
const cost = [
    [[1, 10], 5],
    [[11, 20], 10],
    [[21, 30], 30],
    [[31, Infinity], 50]
];

function between(value, range) {
        const min = Math.min(range[0], range[1]),
        max = Math.max(range[0], range[1]);

        return value >= min && value <= max;
}

function getFee(totalUnits) {
    return breakdown.map((_, index) => {
        const constPerUnit = cost.find((el) => {
            const isUnitInRange = between(index + 1, el[0]);

            return isUnitInRange;
        });
        //return price for unit
        return constPerUnit[1];
    });
}

const pricedUnits = getFee(UNITS);
console.log("Price per each unit", pricedUnits);

//summary
const granTotal = pricedUnits.reduce((a, c) => a + c, 0) + FEE;
console.log("Grand Total is:", granTotal);