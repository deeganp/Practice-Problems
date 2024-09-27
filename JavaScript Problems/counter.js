// In the video game Destiny 2, there are a number of perks that can replenish ammo to your equipped weapon based on meeting 
// certain criteria, such as landing multiple shots in a row. Two of these perks are Triple Tap (landing three shots in a row returns one ammo)
// and Fourth Times the Charm (landing four shots returns two ammo), based on having these perks, I wanted to write functions that coould tell you how 
// many bullets you could shoot in a row assuming all landed shots, based on a base magazine size.

function counter(baseMag) {
    let count = 0;
    for (let i = 1; i <= baseMag; i++) {
        count++;
        if (count % 4 === 0) {
            baseMag += 2;
        }
    }
    return baseMag;
}


//other version

function counter2(baseMag) {
    let count = 0;
    let i = baseMag;
    let total = 0;

    while (i > 0) {
        count++;
        if (count % 4 === 0) {
             i += 2;
        }
        i--;
        total++;
    }
    return total;
}


//fttc and tt 

function magCounter(baseMag){

    let FTTCcounter = 0;
    let TTcounter = 0;

    let finalCount = 0;
    while (baseMag > 0){
        baseMag--;
        finalCount++;
        
        FTTCcounter++;
        TTcounter++;
        
        if (TTcounter === 3){
            baseMag++;
            TTcounter = 0;
        }
        if (FTTCcounter === 4){
            baseMag += 2;
            FTTCcounter = 0;
        }
    }
    return finalCount;
}