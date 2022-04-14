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

const caesarCipher = (toEncrypt, shift) => {
    let encryptedString = "";
    if (typeof shift === "undefined") shift = 1;
    //Loop through our string and get encypted counterpart
    for (let i = 0; i < toEncrypt.length; i++) {
        encryptedString += encrypt(toEncrypt[i], shift);
    }
    return encryptedString;
};

const encrypt = (letter, shift) => {
    let cipherKey = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
        10: "k",
        11: "l",
        12: "m",
        13: "n",
        14: "o",
        15: "p",
        16: "q",
        17: "r",
        18: "s",
        19: "t",
        20: "u",
        21: "v",
        22: "w",
        23: "x",
        24: "y",
        25: "z",
    };

    //Need to find the given letter in our cipherKey object
    let num = Object.keys(cipherKey).find(
        (key) => cipherKey[key] === letter.toLowerCase()
    );

    //If we don't find the letter in our key object then just give it back
    if (typeof num === "undefined") return letter;
    num = Number(num) + shift;
    //Now lets shift our number by 1, if it's over 26, wrap it back
    let newNum = num <= 25 ? num : num - 26;
    if (letter === letter.toUpperCase()) {
        let returnLetter = cipherKey[newNum];
        return returnLetter.toUpperCase();
    } else return cipherKey[newNum];
};

const analyzeArray = (args) => {
    let analysis = {};
    //Calculate average
    let total = 0;
    let min = null;
    let max = null;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
        if (!min || (min && args[i] < min)) min = args[i];
        if (!max || (max && args[i] > max)) max = args[i];
    }
    analysis["average"] = total / args.length;
    analysis["length"] = args.length;
    analysis["max"] = max;
    analysis["min"] = min;
    return analysis;
};

module.exports = {
    sum,
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};
