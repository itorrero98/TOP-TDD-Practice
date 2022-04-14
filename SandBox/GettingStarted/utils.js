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

const calculator = (args) => {
    //Validate initial input
    if (!args || !args.op || !args.param1 || !args.param2) {
        throw new Error(
            "ERROR: One or more parameters are missing for calculation."
        );
    } else if (
        typeof args.param1 !== "number" ||
        typeof args.param2 !== "number" ||
        typeof args.op !== "string"
    ) {
        throw new Error(
            "ERROR: Both numbers to calculate must be a number and operation must be a string"
        );
    }

    switch (args.op) {
        case "add":
            return args.param1 + args.param2;
        case "subtract":
            return args.param1 - args.param2;
        case "multiply":
            return args.param1 * args.param2;
        case "divide":
            return args.param1 / args.param2;
        default:
            throw new Error("ERROR: Did not find the specified operation");
    }
};

module.exports = {
    sum,
    capitalize,
    reverseString,
    calculator,
};
