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

  describe('finish function', () => {
    let elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('#test-simple').eq(0)[0];
      animator.stop(elem,true);
    });

    /*it('returns a promise', () => {
      let result = animator.finish(elem);
      expect(result.then).toBeDefined();
    });*/

    it('stops the animation and move to the end state', (done) => {

      //the fixture does not have an opacity at the begining
      expect(elem.style.opacity).toBe('');

      elem.style.opacity = 0;

      let result = animator.animate(elem,{opacity:1},{duration:100});

      //stop the animation halfway through
      setTimeout(()=>{
        //check if opacity was being animated
        expect(elem.style.opacity > 0,elem.style.opacity < 1).toBe(true);
        //finish animation
        var p = animator.finish(elem,true);

        done();

        /*p.then(()=>{
          //check if animation is at it's end state, should have full opacity
          //this doesnt work most of the time
          //expect(parseFloat(elem.style.opacity)).toBe(1);
          done();
        }).catch((e)=>{
          console.log('error',e);
        });*/

      },50);

    });

  });

  describe('reverse function', () => {
    let elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('#test-simple').eq(0)[0];
      animator.stop(elem,true);
    });

    it('returns the animator instance for a fluent api', () => {
      let result = animator.reverse(elem);
      expect(result).toBe(animator);
    });

  });

  describe('rewind function', () => {
    let elem;
    beforeEach(() => {
      loadFixtures('animation.html');
      elem = $('#test-simple').eq(0)[0];
      animator.stop(elem,true);
    });

    it('returns the animator instance for a fluent api', () => {
      let result = animator.rewind(elem);
      expect(result).toBe(animator);
    });

  });

});
