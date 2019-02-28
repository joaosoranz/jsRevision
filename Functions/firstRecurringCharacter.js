//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(array) {
    var myHash = {};
  
    for(let i = 0; i <= array.length; i++) {
      if(myHash[array[i]] !== undefined) {
        return array[i];
      } else {
        myHash[array[i]] = true;
      }
    }
  
    return undefined;
  }
  
  firstRecurringCharacter([2,3,4,5]);