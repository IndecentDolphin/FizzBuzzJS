function FizzBuzz() {

}

FizzBuzz.prototype.game = function(number){


    if(this._divisibleBy(15, number)){
      return("FizzBuzz");
    }
    else if(this._divisibleBy(5, number)){
      return("Buzz");
    }
    else if(this._divisibleBy(3, number)){
      return("Fizz");
    }
    else {
      return(number);
  }
}

FizzBuzz.prototype._divisibleBy = function(divisor, number) {
  return number % divisor === 0;

}
