import {EventAggregator} from 'aurelia-event-aggregator';
import {bindable,Animator} from 'aurelia-framework';

export class Docs{

  static inject = [Element,EventAggregator,Animator];
  constructor(element,ea,animator) {
    this.element = element;
    this.ea = ea;
    this.animator = animator;
  }

  attached(){
    this.ea.publish("page:ready");

    //this.aside.style.opacity = 0;
    //this.article.style.opacity = 0;

    //this.animator.animate(this.aside,{opacity:[1,0],translateX:[0,-200]},{delay:400,easing:"ease-out"});
    //this.animator.animate(this.article,{opacity:[1,0],translateX:[0,100]},{delay:700,easing:"ease-out"});
    //this.animator(this.article,"slideRightOut");
  }

  detached(){
    //return this.animator.animate(this.element.querySelector("router-view"),{opacity:[0,1]},{easing:"ease-out"});
  }

}
