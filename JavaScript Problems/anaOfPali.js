function anaOfPali(string){


    if ((string.length % 2) == 0){
      let freqMap = {};
      for ( let s of string){
       freqMap[s] = (freqMap[s] || 0 ) + 1;
      }
      console.log(freqMap);
      for ( let str in freqMap){
       if ((freqMap[str] % 2) !== 0){
         return false;
       }
       else {
         return true;
       }
      }
    }
    else{
     let freqMap = {};
     let foundOdd = false;
     for ( let s of string){
      freqMap[s] = (freqMap[s] || 0 ) + 1;
     }
     for ( let str in freqMap){
      if ((freqMap[str] % 2) !== 0){
        if (foundOdd){
        return false;
        }
        else {
         foundOdd = true;
        }
      }
      else {
        return true;
      }
     }
    }
   }
   
   console.log(anaOfPali("aabc"));

   //fix this
   