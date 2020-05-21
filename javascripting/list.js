function filter_list(l) {

    let a = l.filter((filt) => Number.isInteger(filt))
    return a

}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))