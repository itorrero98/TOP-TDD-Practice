import { sum, capitalize, reverseString } from "../GettingStarted/utils";
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
