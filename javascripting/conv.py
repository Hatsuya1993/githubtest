def rgb(r, g, b):
    a = []
    if (r > 255):
        r = 255
    elif (r < 0):
        r = 0
    rnew = '{0:02x}'.format(r)
    a.append(rnew)
    if (g > 255):
        g = 255
    elif (g < 0):
        g = 0
    gnew = '{0:02x}'.format(g)
    a.append(gnew)
    if (b > 255):
        b = 255
    elif (b < 0):
        b = 0
    gnew = '{0:02x}'.format(b)
    a.append(gnew)
    return ''.join(a).upper()


print(rgb(-20, 275, 125))
