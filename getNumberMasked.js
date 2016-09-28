  var base1 = 3
  var base2 = 5
  var mask1 = 'Fizz'
  var mask2 = 'Buzz'

module.exports = function(number){
  var isMultipleOfBase1 = number % base1 == 0
  var isMultipleOfBase2 = number % base2 == 0
  var maskedNumber = ''
  if(isMultipleOfBase1){
    maskedNumber += mask1
  }
  if(isMultipleOfBase2){
    maskedNumber += mask2
  }
  return maskedNumber === '' ? number : maskedNumber
}
