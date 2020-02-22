describe("Candy store inventory",function(){
  describe("when someone removes 20 Lollipops candy from bin of 510 Lollipops candies",function(){
    let lolliPopsCandyLeft;
    beforeEach(function(){
      lolliPopsCandyLeft = new lolliPopsCandy(510,20);
    });
    it("should be 490 of the Lollipops candy type left in the bin", function(){
          expect(lolliPopsCandyLeft.result).toEqual(490);
      })
  });
  describe("When an employee adds 600 Jelly Beans candies to a bin that has 4 Jelly Beans",function(){
    let jellyBeanCandInTheBin;
    beforeEach(function(){
      jellyBeanCandInTheBin = new jellyBeanCandy(4,600);
    });
    
    it("should be 604 Jelly Bean candies in that bin", function(){
         expect(jellyBeanCandInTheBin.result).toEqual(604);
    })
  }) ; 
})