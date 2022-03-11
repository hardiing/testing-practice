//import { test } from "@jest/globals";

const capitalize = require("./capitalize");

test("start sentences capitalized", () => {
    expect(capitalize("start")).toBe("Start");
});