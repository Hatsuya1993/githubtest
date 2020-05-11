def disemvowel(string):
    vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    new = list(string)

    for i in range(len(vowel)):
        for j in range(len(new)):
            if (vowel[i] == new[j]):
                new[j] = ''
    return ''.join(new)


print(disemvowel("This website is for losers LOL!"))
