  var base1 = 3
  var base2 = 5
  var mask1 = 'Fizz'
  var mask2 = 'Buzz'

module.exports = function(number){
  var isMultipleOfBase1 = number % base1 == 0
  var isMultipleOfBase2 = number % base2 == 0
  if( isMultipleOfBase1 && isMultipleOfBase2 ){
    return mask1 + mask2
  }
  if(isMultipleOfBase1){
    return mask1
  }
  if(isMultipleOfBase2){
    return mask2
  }
  return number
}
