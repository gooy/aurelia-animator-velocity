import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';

export class SettingsPage{

  @bindable selectedEnterAnimation;
  @bindable selectedEnterEasing;

  @bindable selectedLeaveAnimation;
  @bindable selectedLeaveEasing;

  @bindable enterDuration;
  @bindable leaveDuration;

  enterEffects = [];
  leaveEffects = [];
  easings = [];

  static inject = [Animator];
  constructor(animator) {
    this.animator = animator;
    this.config = config;

    this.selectedEnterAnimation = this.animator.enterAnimation.properties;
    this.selectedEnterEasing = (this.animator.enterAnimation.options)? this.animator.enterAnimation.options.easing : null;
    this.enterDuration = (this.animator.enterAnimation.options)? this.animator.enterAnimation.options.duration : null;

    this.selectedLeaveAnimation = this.animator.leaveAnimation.properties;
    this.selectedLeaveEasing = (this.animator.leaveAnimation.options)? this.animator.leaveAnimation.options.easing : null;
    this.leaveDuration = (this.animator.leaveAnimation.options)? this.animator.leaveAnimation.options.duration : null;

    var key;
    for(key in Animator.effects){
      if(key.lastIndexOf("In")===key.length-2) this.enterEffects.push(key);
      if(key.lastIndexOf("Down")===key.length-4) this.enterEffects.push(key);
      if(key.indexOf("callout")===0) this.enterEffects.push(key);
    }
    for(key in Animator.effects){
      if(key.lastIndexOf("Out")===key.length-3) this.leaveEffects.push(key);
      if(key.lastIndexOf("Up")===key.length-2) this.leaveEffects.push(key);
      if(key.indexOf("callout")===0) this.leaveEffects.push(key);
    }

    for(key in Animator.easings){
      this.easings.push(key);
    }

  }

  selectedEnterAnimationChanged(newValue,oldValue){
    this.updateEnterAnimation();
  }

  selectedEnterEasingChanged(newValue,oldValue){
    this.updateEnterAnimation();
  }

  enterDurationChanged(newValue,oldValue){
    this.updateEnterAnimation();
  }

  updateEnterAnimation() {
    this.animator.enterAnimation = {properties:this.selectedEnterAnimation,options:{easing:this.selectedEnterEasing,duration:this.enterDuration}};
  }

  selectedLeaveAnimationChanged(newValue,oldValue){
    this.updateLeaveAnimation();
  }

  selectedLeaveEasingChanged(newValue,oldValue){
    this.updateLeaveAnimation();
  }

  leaveDurationChanged(newValue,oldValue){
    this.updateLeaveAnimation();
  }

  updateLeaveAnimation() {
    this.animator.leaveAnimation = {properties:this.selectedLeaveAnimation,options:{easing:this.selectedLeaveEasing,duration:this.leaveDuration}};
  }

}
