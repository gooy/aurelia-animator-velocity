import {VelocityAnimator} from '../src/animator';

jasmine.getFixtures().fixturesPath = 'base/test/fixtures/';

describe('animator-velocity', () => {
  var sut;
  beforeEach( () => {
    sut = new VelocityAnimator();
  });

  describe('enter animation', () => {
    var elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('.au-animate').eq(0)[0];
    });

    it('should return a promise', () => {
      var result = sut.enter(elem);
      expect(result.then).toBeDefined();
    });

    it('should kick off animation', (done) => {
      var elem = $('.animated-item').eq(0)[0];

      console.log(elem);

      sut.enter(elem).then( (didRunAnimation) => {
        expect(didRunAnimation).toBe(true);
        done();
      });
    });

    it('should not kick off animation on element without proper classes', (done) => {
      var elem = $('.boring-item').eq(0)[0];
      sut.enter(elem).then( (didRunAnimation) => {
        expect(didRunAnimation).toBe(false);
        done();
      });
    });

  });

  describe('leave animation', () => {
    var elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('.au-animate').eq(0)[0];
    });

    it('should return a promise', () => {
      var result = sut.leave(elem);
      expect(result.then).toBeDefined();
    });

    it('should kick off animation', (done) => {
      var elem = $('.animated-item').eq(0)[0];

      sut.leave(elem).then( (didRunAnimation) => {
        expect(didRunAnimation).toBe(true);
        done();
      });
    });

    it('should not kick off animation on element without proper classes', (done) => {
      var elem = $('.boring-item').eq(0)[0];
      sut.leave(elem).then( (didRunAnimation) => {
        expect(didRunAnimation).toBe(false);
        done();
      });
    });

  });

});
