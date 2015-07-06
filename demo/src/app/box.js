import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';

export class Box{

  static inject = [Element,Animator];
  constructor(element,animator) {
    this.element = element;
    this.animator = animator;
  }

  attached(){
    this.enterSequence = [
      { e: this.element, p: { opacity:[1,0], translateY: [0,50] }, o: { duration: 600 } },
      { e: this.image, p: { opacity:[1,0] }, o: { delay:200, easing:"ease-in", duration: 400, sequenceQueue: false } },
      { e: this.buddy, p: { opacity:[1,0], translateY: [0,50] }, o: { delay:0, easing:[ 500, 20 ],duration: 800 } },
      { e: this.article, p: { opacity:[1,0], translateX: [0,0],translateY: [0,-50] }, o: { delay:300, easing:"spring",duration: 800, sequenceQueue: false } },
      { e: this.actions, p: { opacity:[1,0], translateX: [0,-150] }, o: { delay:200, easing:"spring",duration: 800, sequenceQueue: false } }
    ];

    this.leaveSequence = [
      { e: this.element, p: { opacity:[1,1], translateY: [0,0] }, o: { delay:0,duration: 0, easing:"easeOutQuad" } },
      { e: this.article, p: { opacity:[0,1], translateX: [-50,0] }, o: { duration: 200, easing:"easeOutQuad" } },
      { e: this.actions, p: { opacity:[0,1], translateX: [50,0] }, o: { duration: 200, easing:"easeOutQuad", sequenceQueue: false } },
      { e: this.element, p: { opacity:[0,1], translateY: [50,0] }, o: { delay:100,duration: 400, easing:"easeOutQuad" } }
    ];
  }

  enter(){
    this.animator.stopSequence(this.enterSequence);

    this.element.style.opacity = 0;
    this.image.style.opacity = 0;
    this.buddy.style.opacity = 0;
    this.article.style.opacity = 0;
    this.actions.style.opacity = 0;

    this.animator.runSequence(this.enterSequence);
  }

  leave(){
    this.animator.stopSequence(this.leaveSequence);

    this.element.style.opacity = 1;
    this.image.style.opacity = 1;
    this.buddy.style.opacity = 1;

    this.animator.runSequence(this.leaveSequence);
  }

}
