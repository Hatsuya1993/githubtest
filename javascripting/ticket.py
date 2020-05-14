def tickets(people):
    j = 0
    for i in range(len(people)):
        if (people[i] > 25):
            if ((people[i] - j) == 0 or (people[i] - j) == 25):
                j = (people[i] - j)

            else:
                return "NO"

        else:
            j += 25

    return "YES"


print(tickets([25, 25, 50, 50, 100]))
