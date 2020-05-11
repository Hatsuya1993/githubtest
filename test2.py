def spin_words(sentence):
    b = 0
    a = (sentence.split())
    for i in range(len(a)):
        a[i] = list(a[i])
        for j in range(len(a[i])):
            b += 1
        if (b >= 5):
            b = 0
            a[i] = a[i][::-1]
            a[i] = ''.join(a[i])

        else:
            b = 0
            a[i] = ''.join(a[i])
    return ' '.join(a)


print(spin_words('Welcome home sir'))
