import math


def decompose(n):
    a = []
    b = n*n
    q = b
    d = []
    m = 1
    c = 0
    e = 0
    o = 1
    z = []
    k = True
    if (k):
        for i in range(o, n, m):
            a.append(i*i)
        for j in range(len(a)):
            c = (b - a[j])
            b = c
            if (c >= 0):
                d.append(a[j])
            else:
                break
        for l in range(len(d)):
            e += d[l]
        if (e == q):
            k = False
            for i in range(len(d)):
                z.append(int(d[i]**.5))
            return z
        else:
            e = 0
            d = []
            a = []
            if (m == (n-1)):
                o += 1
                m = 1
            else:
                m += 1
            if (o == (n-1)):
                return None
            b = n*n
            c = 0


print((decompose(5)))
