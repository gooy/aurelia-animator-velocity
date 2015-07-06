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

  describe('unregisterEffect function', () => {
    let elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('#test-simple').eq(0)[0];
      animator.stop(elem,true);
    });

    it('returns the animator instance for a fluent api', () => {
      let result = animator.unregisterEffect(elem);
      expect(result).toBe(animator);
    });

    it('unregisters effects', () => {
      var props = {left:100};
      expect(animator.effects['fadeIn'] !== undefined).toBe(true);
      animator.unregisterEffect("fadeIn");
      expect(animator.effects['fadeIn'] === undefined).toBe(true);
    });

    it('unregisters aliases', () => {
      var props = {left:100};
      animator.registerEffect(":alias","fadeIn");
      expect(animator.effects[':alias'] !== undefined).toBe(true);
      animator.unregisterEffect(":alias");
      expect(animator.effects[':alias'] === undefined).toBe(true);
    });

  });

});
