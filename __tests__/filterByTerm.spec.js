const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
    ];

    test("should filter by search term 'link/LINK'", () => {
        const output1 = [{ id: 3, url: "https://www.link3.dev" }];
        expect(filterByTerm(input, "link")).toEqual(output1);

        expect(filterByTerm(input, "LINK")).toEqual(output1);

        expect(filterByTerm(input, "uRl")).toEqual([{ id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" }]);
    });

    test("throw errors", () => {
        expect(() => filterByTerm(input, "")).toThrow("searchTerm cannot be empty");

        expect(() => filterByTerm([], "link")).toThrow("inputArr cannot be empty");
    });
});