import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';
import {EventAggregator} from 'aurelia-event-aggregator';


export class EnterLeavePage{

  @bindable selectedEnterAnimation;
  @bindable selectedEnterEasing;

  @bindable selectedLeaveAnimation;
  @bindable selectedLeaveEasing;

  @bindable enterDuration;
  @bindable leaveDuration;

  enterEffects = [];
  leaveEffects = [];
  easings = [];

  static inject = [Animator,EventAggregator];
  constructor(animator,ea) {
    this.animator = animator;
    this.config = config;
    this.ea = ea;

    this.selectedEnterAnimation = this.animator.enterAnimation.properties;
    this.selectedEnterEasing = (this.animator.enterAnimation.options)? this.animator.enterAnimation.options.easing : null;
    this.enterDuration = (this.animator.enterAnimation.options)? this.animator.enterAnimation.options.duration : null;

    this.selectedLeaveAnimation = this.animator.leaveAnimation.properties;
    this.selectedLeaveEasing = (this.animator.leaveAnimation.options)? this.animator.leaveAnimation.options.easing : null;
    this.leaveDuration = (this.animator.leaveAnimation.options)? this.animator.leaveAnimation.options.duration : null;

    var key;
    for(key in this.animator.effects){
      if(!this.animator.effects.hasOwnProperty(key)) continue;
      if(key.lastIndexOf("In")===key.length-2) this.enterEffects.push(key);
      if(key.lastIndexOf("Down")===key.length-4) this.enterEffects.push(key);
      if(key.indexOf("callout")===0) this.enterEffects.push(key);
    }
    for(key in this.animator.effects){
      if(!this.animator.effects.hasOwnProperty(key)) continue;
      if(key.lastIndexOf("Out")===key.length-3) this.leaveEffects.push(key);
      if(key.lastIndexOf("Up")===key.length-2) this.leaveEffects.push(key);
      if(key.indexOf("callout")===0) this.leaveEffects.push(key);
    }

    for(key in this.animator.easings){
      if(!this.animator.easings.hasOwnProperty(key)) continue;
      this.easings.push(key);
    }

  }

  attached(){
    this.testElement.parentNode.removeChild(this.testElement);
    this.ea.publish("page:ready");
    setTimeout(()=>{
      this.ea.publish("page:ready");
    })
  }

  enterAnim(){
    //this.animator.enter(this.testElement,this.enterConfig.getEffect(),{easing:this.enterConfig.easing,duration:parseInt(this.enterConfig.duration)});
    this.animStage.appendChild(this.testElement);
  }

  leaveAnim(){
    //this.animator.leave(this.testElement,this.leaveConfig.getEffect(),{easing:this.leaveConfig.easing,duration:parseInt(this.leaveConfig.duration)});
    this.animStage.removeChild(this.testElement);
  }

  selectedEnterAnimationChanged(newValue,oldValue){
    this.animator.effects[":enter"] = newValue;
    this.updateEnterAnimation();
  }

  selectedLeaveAnimationChanged(newValue,oldValue){
    this.animator.effects[":leave"] = newValue;
    this.updateLeaveAnimation();
  }


}
