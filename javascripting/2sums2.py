def sum_pairs(ints, s):
    j = 0
    i = 0
    p = j
    m = True
    while (m):
        if ((ints[i] + ints[j+1]) == s):
            m = False
            return [ints[i], ints[j+1]]
        else:
            j += 1
            i += 1
            if (j == len(ints)-1):
                if (ints[0] + ints[len(ints)-1]) != s:
                    p += 1
                    if (p == (len(ints)-1)):
                        return None
                    j = p
                    i = 0
                else:
                    return [ints[0], ints[len(ints)-1]]


print(sum_pairs([5, 9, 13, -3], 10))
