def sum_pairs(ints, s):
    j = 1
    p = j
    slice2 = slice(j, j+1)
    slices22 = ints[slice2]
    m = True
    while (m):
        for k in range(len(ints)):
            if (ints[k] + slices22[0] == s):
                m = False
                return [ints[k], slices22[0]]
            else:
                j += 1
                if (j >= len(ints)):
                    j = 0
                    break
                else:
                    slice2 = slice(j, j+1)
                    slices22 = ints[slice2]
                    continue
            j += 1
            slice2 = slice(j, j+1)
            slices22 = ints[slice2]
        p += 1
        if (p == len(ints)):
            return None
        j = p
        slice2 = slice(j, j+1)
        slices22 = ints[slice2]


print(sum_pairs([5, 9, 13, -3], 10))
