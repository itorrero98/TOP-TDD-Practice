import { sum, capitalize } from "../GettingStarted/utils";
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
