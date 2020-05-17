def anagrams(word, words):
    a = list(word)
    a = sorted(a)
    c = []
    for i in range(len(words)):
        b = sorted(words[i])
        if (a == b):
            c.append(words[i])
    return c


print(anagrams('laser', ['lazing', 'lazy',  'lacer']))
