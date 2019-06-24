describe('FizzBuzz', function(){

  var fizzbuzz;
  beforeEach(function(){
    fizzbuzz = new FizzBuzz;
  });

  describe('Multiples of 3', function(){
    it('Fizz returned for multiples of 3', function(){
      expect(fizzbuzz.game(3)).toEqual("Fizz");
    });
  });

  describe('Multiples of 5', function(){
    it('Buzz returned for multiples of 5', function(){
      expect(fizzbuzz.game(5)).toEqual("Buzz");
    });
  });

  describe('Multiples of 15', function(){
    it('Buzz returned for multiples of 15', function(){
      expect(fizzbuzz.game(15)).toEqual("FizzBuzz");
    });
  });

  describe('If not divisible by any', function(){
    it('returns input number', function(){
      expect(fizzbuzz.game(2)).toEqual(2);
    });
  });
});
