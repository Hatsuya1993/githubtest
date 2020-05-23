def sum(nums, target):
    j = 0
    k = 0
    slice_obj = slice(j, j+1)
    nums1 = nums[slice_obj]

    while(k == 0):
        slice_obj = slice(j, j+1)
        nums1 = nums[slice_obj]
        for i in range(len(nums)):
            if (i == j):
                i += 1
                if (nums1[0] + nums[i] == target):
                    k += 1
                    i -= 1
                    return [j, i]
                else:
                    i -= 1
            else:
                if (nums1[0] + nums[i] == target):
                    k += 1
                    return [j, i]
        j += 1


print(sum([2, 5, 5, 11], 10))
