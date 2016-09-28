const Chai = require('chai');
let Expect = Chai.expect;
const scoreThrows = require('../js/scoring.js');

describe ('scoring Function', function(){
  var myScoring;
  beforeEach(function (){
    myScoring = scoreThrows;
  });
      // test point 1, must pass if you connected correctly the js file in Step7
  it('Should exist a scoreThrows function',() => {
    Expect(myScoring.scoreThrows).to.be.a('function');
  });
  it('Should return a number' ,() => {
    Expect(myScoring.scoreThrows([1,5,11])).to.equal(15);
    Expect(myScoring.scoreThrows([15,20,30])).to.deep.equal(0);
    Expect(myScoring.scoreThrows([1,2,3,4])).to.deep.equal(140);
  });

  });
