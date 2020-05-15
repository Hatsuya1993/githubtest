def order(sentence):
    a = []
    c = 1
    b = sentence.split(" ")
    if (sentence == ""):
        return ""
    while(c < len(b)+1):

        for i in range(len(b)):
            for j in range(len(b[i])):

                if (b[i][j].isdigit()):
                    d = int(b[i][j])
                    if (d == c):
                        a.append(b[i])
                        c += 1

                    else:
                        pass
                else:
                    pass
    return " ".join(a)


print(order("4of Fo1r pe6ople g3ood th5e the2"))
