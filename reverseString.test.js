const reverseString = require("./reverseString");

test("Reverse this string", () => {
    expect(reverseString("hello")).toBe("olleh");
});