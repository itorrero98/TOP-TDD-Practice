import {
    sum,
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
} from "../GettingStarted/utils";
test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

/**
 * Capitalize Tests
 *  - Test that the string that is returned has the first letter capitalized
 *  - Ensure that if no data is sent in, we throw an error
 */
describe("Capitalize letter functionality works", () => {
    test("Capitalize first letter of given string", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    test("Handle empty params", () => {
        expect(() => capitalize()).toThrow(Error);
        expect(() => capitalize("")).toThrow(Error);
        expect(() => capitalize(undefined)).toThrow(Error);
    });
});

/** Reverse String Tests
 *  - Ensure that if no data is sent in, we throw an error
 *  - Ensure that when we pass in a string it is sent back in reverse order
 *       test with single letter and sentence as well
 */
describe("Reverse string functionality works", () => {
    test("Handle empty params", () => {
        expect(() => reverseString()).toThrow(Error);
        expect(() => reverseString("")).toThrow(Error);
        expect(() => reverseString(undefined)).toThrow(Error);
    });

    test("Return a word properly reversed", () => {
        expect(reverseString("Test")).toBe("tseT");
    });

    test("Return a sentence properly reversed", () => {
        expect(reverseString("This will reverse!")).toBe("!esrever lliw sihT");
    });
});

/** Calculator Tests
 *  - Ensure that if no data is sent in, we throw an error
 *  - **All functions should validate they input**
 *  - When 2 numbers are passed into add the sum is returned
 *  - When 2 numbers are passed into subtract the difference is returned
 *  - When 2 numbers are passed into divide the quotient is returned
 *  - When 2 numbers are passed into multiply the product is returned
 */
describe("All properties of the calculator object function properly", () => {
    test("Handle empty params", () => {
        expect(() => calculator()).toThrow(Error);
        expect(() => calculator("")).toThrow(Error);
        expect(() => calculator(undefined)).toThrow(Error);
    });

    test("Handle invalid input", () => {
        expect(() =>
            calculator({ op: "add", param1: "test", param2: 2 })
        ).toThrow(Error);
        expect(() =>
            calculator({ op: "multiply", param1: 2, param2: "hello" })
        ).toThrow(Error);
        expect(() =>
            calculator({ op: "randomName", param1: 2, param2: 5 })
        ).toThrow(Error);
    });

    test("Add function returns proper sum", () => {
        expect(calculator({ op: "add", param1: 2, param2: 5 })).toBe(7);
        expect(calculator({ op: "add", param1: 112, param2: 230 })).toBe(342);
    });

    test("Subtract function returns proper difference", () => {
        expect(calculator({ op: "subtract", param1: 2, param2: 5 })).toBe(-3);
        expect(calculator({ op: "subtract", param1: 24, param2: 12 })).toBe(12);
    });

    test("Divide function returns proper quotient", () => {
        expect(calculator({ op: "divide", param1: 9, param2: 3 })).toBeCloseTo(
            3
        );
        expect(
            calculator({ op: "divide", param1: 33, param2: 10 })
        ).toBeCloseTo(33 / 10);
    });
    test("Multiply function returns proper quotient", () => {
        expect(calculator({ op: "multiply", param1: 2, param2: 5 })).toBe(10);
        expect(calculator({ op: "multiply", param1: 112, param2: 230 })).toBe(
            112 * 230
        );
    });
});

/** Caesar Cipher
 *  - Tests should maintain capitals
 *  - Test basic 3 letter word with no edge cases
 *  - Test that z loops back to a properly
 *  - Test that we skip over spaces / punctuation
 *  - Test with different shift values
 */
describe("Caesar Cipher encrypts messages properly", () => {
    test("Passes with no edge cases", () => {
        expect(caesarCipher("Bad")).toBe("Cbe");
    });

    test("Passes with z in the initial string", () => {
        expect(caesarCipher("zack")).toBe("abdl");
    });

    test("Ignores punctiuation and spaces", () => {
        expect(caesarCipher("Hello World!")).toBe("Ifmmp Xpsme!");
    });

    test("Shifts properly with a shift other than 1 specified", () => {
        expect(caesarCipher("Testing more! :)", 3)).toBe("Whvwlqj pruh! :)");
    });
});
