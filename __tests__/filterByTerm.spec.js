describe("Filter function", () => {
    test("should filter by search term", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output1 = [{ id: 3, url: "https://www.link3.dev" }];
        expect(filterByTerm(input, "link")).toEqual(output1);

        expect(filterByTerm(input, "LINK")).toEqual(output1);

        expect(filterByTerm(input, "uRl")).toEqual([{ id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" }]);

        expect(filterByTerm(input, "")).toEqual([]);


    });
});

filterByTerm = (inputArr, searchTerm) => {
    if(searchTerm){
        return inputArr.filter(item => item.url.match(new RegExp(searchTerm, "i")));
    } else {
        return [];
    }
}