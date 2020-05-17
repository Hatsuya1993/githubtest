def to_camel_case(text):

    if '-' in text:
        a = text.split("-")
        d = 0

    elif '_' in text:
        a = text.split("_")
        d = 1
    for i in range(len(a)):
        if (i > 0):
            a = list(a[i])
            a[0] = a[0].upper()

            c = ''.join(a)

            b.append(c)
            if (d == 0):
                a = text.split("-")
            elif (d == 1):
                a = text.split("_")

        elif (i == 0):
            b.append(a[i])

    return "".join(b)


b = []
a = 0
print(to_camel_case("The_Stealth_Warrior"))  # returns "theStealthWarrior"
