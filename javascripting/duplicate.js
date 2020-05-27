function duplicateCount(text) {
    text = text.toLowerCase();
    let a = (text.split(""));
    let b = []
    let c = 0
    let d = []
    for (let i = 0; i < a.length; i++) {
        if (b[a[i]] === true) {
            d.push(a[i])
        }
        b[a[i]] = true
    }
    let j = [...new Set(d)];
    return j.length;
}


console.log((duplicateCount("Indivisibilities")));