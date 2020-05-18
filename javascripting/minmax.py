def longest_consec(strarr, k):

    d = 0
    e = 0
    f = 0
    if (len(strarr) == 0 or k > len(strarr) or k <= 0):
        return ""
    while (k <= len(strarr)):
        a = (strarr[slice(e, k)])
        c = len("".join(a))
        if (c > d):
            d = c
            f = a
            e += 1
            k += 1
        else:
            e += 1
            k += 1
    return "".join(f)


print(longest_consec(
    ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0))
