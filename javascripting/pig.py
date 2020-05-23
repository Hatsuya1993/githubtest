def pig_it(text):
    a = text.split()
    b = 'ay'
    c = []
    d = []
    for i in range(len(a)):
        if (a[i] == '!' or a[i] == "?"):
            d.append(a[i])
            continue
        for j in range(len(a[i])):
            if (j > 0):
                c.append(a[i][j])
        c += a[i][0]
        c += b
        e = "".join(c)
        d.append(e)
        c = []
    return " ".join(d)


print(pig_it('O tempora o mores !'))
