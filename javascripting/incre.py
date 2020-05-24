import re


def increment_string(strng):

    if (strng == ""):
        return "".join(str(1))

    i = []
    res = [re.findall(r'[A-Za-z]+|\d+', strng)]
    if (len(res[0]) == 1):
        if (("".join(res[0])).isdigit()):
            b = int(res[0][0])
            i.append((str(b+1).zfill(len(res[0]))))
            return "".join(i)
        else:
            i.append(res[0][0])
            i.append(str(1))
            return "".join(i)
    else:
        a = int(res[0][1])
        i.append(res[0][0])

        if (len(res[0][1]) == 1):
            i.append(str(a+1))

            return "".join(i)
        else:
            i.append((str(a+1).zfill(len(res[0][1]))))
            return "".join(i)


print((increment_string("11")))
