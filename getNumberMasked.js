  var base1 = 3
  var base2 = 5
  var mask1 = 'Fizz'
  var mask2 = 'Buzz'
module.exports = function(number){
  if(number % (base1*base2) == 0 ){
    return mask1 + mask2
  }
  if(number % base1 == 0){
    return mask1
  }
  if(number % base2 == 0){
    return mask2
  }
  return number
}
