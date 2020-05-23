def rot13(message):
    a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
         'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    b = 13
    c = list(message.lower())
    d = []
    e = list(message)
    for i in range(len(c)):
        for j in range(len(a)):
            if (c[i] == a[j]):
                if (j >= b):
                    if (e[i].isupper()):
                        d.append(a[j-b].upper())
                        break
                    else:
                        d.append(a[j-b])
                        break
                elif (j <= b):
                    if (e[i].isupper()):
                        d.append(a[j+b].upper())
                        break
                    else:
                        d.append(a[j+b])

    return "".join(d)


print(rot13("EYOKQGWHH"))
