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
});
