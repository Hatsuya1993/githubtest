def sum_two_smallest_numbers(numbers):
    a = []
    for i in range(len(numbers)):
        if (type(numbers[i]) == int):
            a.append(numbers[i])

    b = min(a)

    a.remove(b)
    c = min(a)

    return b+c


print(sum_two_smallest_numbers([25, 42, 12, 18, 22]))
