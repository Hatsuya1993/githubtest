def sum(nums, target):
    a = True
    i = 0
    j = 1
    while a:
        if (nums[i] + nums[j] == target):
            k = [i, j]
            a = False
        else:
            if (j == len(nums)-1):
                if (nums[i] + nums[j] == target):
                    k = [i, j]
                    a = False
                else:
                    i += 1
                    j = 0
            else:
                j += 1
                if (j == i):
                    j += 1
    return k


print(sum([2, 5, 5, 11], 10))
