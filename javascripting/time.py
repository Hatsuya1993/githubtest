def make_readable(seconds):
    sec = 00
    min = 00
    hour = 00
    while (seconds != 0):
        if (seconds < 60):
            sec += seconds
            break
        else:
            seconds -= 60
            min += 1
            if (min == 60):
                min -= 60
                hour += 1
    return str(hour).zfill(2)+":"+str(min).zfill(2)+":"+str(sec).zfill(2)


print(make_readable(359999))
