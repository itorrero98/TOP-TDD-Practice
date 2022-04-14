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

const caesarCipher = (toEncrypt) => {
    let encryptedString = "";
    //Loop through our string and get encypted counterpart
    for (let i = 0; i < toEncrypt.length; i++) {
        encryptedString += encrypt(toEncrypt[i]);
    }
    console.log(`Turned ${toEncrypt} into ${encryptedString}`);
    return encryptedString;
};

const encrypt = (letter) => {
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
    ++num;

    //Now lets shift our number by 1, if it's over 26, wrap it back
    let newNum = num <= 25 ? num : num - 26;

    //Return the encrypted number
    return cipherKey[newNum];
};

module.exports = {
    sum,
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
};
