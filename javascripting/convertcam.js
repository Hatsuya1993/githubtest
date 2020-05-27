function toCamelCase(str) {
    let a = str.split(/[.\-_]/);
    for (let i = 0; i < a.length; i++) {
        if (i > 0) {
            let b = a[i].split("");
            b[0] = b[0].toUpperCase();
            let d = b.join("");
            a[i] = d;
        } else {
            continue;
        }
    }
    return a.join("");
}


console.log(toCamelCase("the_stealth_warrior"));