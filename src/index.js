// module.exports = function check(str, bracketsConfig) {
//   var opens = str.match(/\(/\|g) || [],
//   closes = str.match(/\)/g) || [];
//   return opens.length === closes.length;

// }

// module.exports = function check(str, bracketsConfig) {
//   return true
// }


module.exports = function check(str, bracketsConfig) {
  // if (bracketsConfig % 2 == 1){
  //   return false
  // }
        
  count = 0
  for(let i = 0; i < str.length; i++) {
      if(str[i] == '(' ){
        count++
      }
          
      else if(str[i] == ')'){
        if(count == 0){
          return false
        }
            
        else{
          count--
        }
      }
          
              
  }

  if(count == 0){
    return true
  }
      

  return false
}

