import {VelocityAnimator} from '../src/animator';
import {animationEvent} from 'aurelia-templating';

jasmine.getFixtures().fixturesPath = 'base/test/fixtures/';

describe('animator-velocity', () => {

  let elem;
  let animator;
  let container;

  beforeEach( () => {
    //stop all animations running on the test element
    if(animator) animator.stop(elem,true);

    loadFixtures('animation.html');
    container = $("#animation").eq(0)[0];
    animator = new VelocityAnimator(container);
  });

  describe('leave function', () => {
    let elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('#test-simple').eq(0)[0];
      animator.stop(elem,true);
    });

    it('returns a promise', () => {
      let result = animator.leave(elem);
      expect(result.then).toBeDefined();
    });

    it('sets isAnimating to true when the animation starts and sets it to false when the animation is done', (done) => {
      expect(animator.isAnimating).toBe(false);
      let result = animator.leave(elem).then(()=>{
        expect(animator.isAnimating).toBe(false);
        done();
      });
      expect(animator.isAnimating).toBe(true);
    });

    it('can use aliases', (done) => {
      let result = animator.leave(elem).then(()=>{
        expect(elem.style.opacity).toBe('0');
        done();
      }).catch((error) => console.log(error));
    });

    it('publishes an leaveBegin and leaveDone event', (done) => {
      let leaveBeginCalled = false, leaveDoneCalled = false;
      let l1 = document.addEventListener(animationEvent.leaveBegin, (payload) => leaveBeginCalled = true),
        l2 = document.addEventListener(animationEvent.leaveDone, () => leaveDoneCalled = true);

      animator.leave(elem,"fadeIn").then( () => {
        expect(leaveDoneCalled).toBe(true);
        document.removeEventListener(animationEvent.leaveDone, l2, false);
        done();
      });

      expect(leaveBeginCalled).toBe(true);
      document.removeEventListener(animationEvent.leaveBegin, l1, false);
    });

  });

});
