filterByTerm = (inputArr, searchTerm) => {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    
    if (!inputArr.length) throw Error("inputArr cannot be empty");

    return inputArr.filter(item => item.url.match(new RegExp(searchTerm, "i")));

}

module.exports = filterByTerm;