function sum(a, b) {
    return a + b;
}

const capitalize = (toCapitalize) => {
    if (!toCapitalize) throw new Error("ERROR: No string given to capitalize.");
    return toCapitalize[0].toUpperCase() + toCapitalize.slice(1);
};

const reverseString = (toReverse) => {
    if (!toReverse) throw new Error("ERROR: No string given to reverse");
    let reversed = "";
    for (let i = toReverse.length - 1; i >= 0; i--) {
        reversed += toReverse[i];
    }
    return reversed;
};

module.exports = {
    sum,
    capitalize,
    reverseString,
};
