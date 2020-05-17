def array_diff(a, b):
    c = []
    if (b == []):
        return a
    if (a == []):
        return a
    else:
        for i in range(len(a)):
            for j in range(len(b)):
                if ((a[i] == b[j])):
                    a[i] = True
        # return a
        for k in range(len(a)):
            if (type(a[k]) != bool):
                c.append(a[k])

        return c


print(array_diff([-18, 10, -1, -17, 10, -11], [-17, 12, -16]))
