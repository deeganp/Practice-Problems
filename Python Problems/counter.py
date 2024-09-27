# In the video game Destiny 2, there are a number of perks that can replenish ammo to your equipped weapon based on meeting 
# certain criteria, such as landing multiple shots in a row. Two of these perks are Triple Tap (landing three shots in a row returns one ammo)
# and Fourth Times the Charm (landing four shots returns two ammo), based on having these perks, I wanted to write functions that coould tell you how 
# many bullets you could shoot in a row assuming all landed shots, based on a base magazine size.

def counter(base_mag):
    count = 0
    i = 1
    while i <= base_mag:
        count += 1
        if count % 4 == 0:
            base_mag += 2
        i += 1
    return base_mag


def counter2(base_mag):
    count = 0
    i = base_mag
    total = 0

    while i > 0:
        count += 1
        if count % 4 == 0:
            i += 2
        i -= 1
        total += 1
    return total


def mag_counter(base_mag):
    FTTC_counter = 0
    TT_counter = 0
    final_count = 0

    while base_mag > 0:
        base_mag -= 1
        final_count += 1
        FTTC_counter += 1
        TT_counter += 1

       
