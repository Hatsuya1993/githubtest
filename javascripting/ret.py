

def high_and_low(numbers):
    numbers = numbers.replace(" ", ',')

    # a = list(eval(numbers))
    a = [int(s) for s in numbers.split(',')]
    b = str(max(a)) + ' ' + str(min(a))
    return b


print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))
