function sum(a, b) {
    return a + b;
}

let capitalize = (toCapitalize) => {
    if (!toCapitalize)
        throw new Error("ERROR: No string given to function capitalize.");
    return toCapitalize[0].toUpperCase() + toCapitalize.slice(1);
};

module.exports = {
    sum,
    capitalize,
};
