def digital_root(n):

    k = 0
    i = [int(d) for d in str(n)]
    while(len(i) > 1):
        k = 0
        for j in range(len(i)):
            k += i[j]
        i = [int(d) for d in str(k)]
    return k


print(digital_root(456))
