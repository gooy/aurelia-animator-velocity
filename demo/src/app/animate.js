import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';
import {EventAggregator} from 'aurelia-event-aggregator';

export class AnimatePage{

  static inject = [Animator,EventAggregator];
  constructor(animator,ea) {
    this.animator = animator;
    this.config = config;
    this.ea = ea;
  }

  attached(){
    this.ea.publish("page:ready");
  }

  animate(){
    this.animator.stop(this.testElement,true).animate(this.testElement,this.animationConfig.getEffect(),{easing:this.animationConfig.easing,duration:parseInt(this.animationConfig.duration)});
  }

}
