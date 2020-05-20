def sum_of_intervals(intervals):
    j = []
    k = []
    for i in range(len(intervals)):
        j += list(range(intervals[i][0], intervals[i][1]))
    for l in range(len(j)):
        if j[l] not in k:
            k.append(j[l])
    return len(sorted(k, key=int))


print(sum_of_intervals([(1, 4), (7, 10), (3, 5)]))
