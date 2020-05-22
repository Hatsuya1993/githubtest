var uniqueInOrder = function (iterable) {

    if (iterable == "") {
        return [];
    }
    if (typeof (iterable) == 'object') {
        let a = iterable;
        let c = a.slice(0, 1)
        let b = [];
        for (let i = 0; i < a.length; i++) {
            if (c == a[i]) {
                delete a[i];
            } else {
                b.push(c[0]);
                c = a.slice(i, i + 1);
            }
        }
        b.push(c[0])
        return b;
    }
    let b = []
    let a = iterable.split("");
    let c = a.slice(0, 1)

    for (let i = 0; i < a.length; i++) {
        if (c == a[i]) {
            delete a[i];
        } else {
            b.push(c.join(""));
            c = a.slice(i, i + 1);
        }
    }
    b.push(c.join(""))
    return b;
}

console.log(uniqueInOrder('ABBCcAD'));