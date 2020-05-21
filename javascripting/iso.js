function isIsogram(str) {
    let a = str.toLowerCase();
    b = [];
    a = a.split("")
    for (let i = 0; i < a.length; i++) {
        if (b[a[i]] == true) {
            return false;
        } else {
            b[a[i]] = true;
        }
    }
    return true;

}

console.log(isIsogram(""));