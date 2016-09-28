  var base1 = 3
  var base2 = 5
module.exports = function(number){
  if(number % (base1*base2) == 0 ){
    return 'FizzBuzz'
  }
  if(number % base1 == 0){
    return 'Fizz'
  }
  if(number % base2 == 0){
    return 'Buzz'
  }
  return number
}
