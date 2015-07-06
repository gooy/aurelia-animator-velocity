import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';
import {EventAggregator} from 'aurelia-event-aggregator';


export class RunSequencePage{

  @bindable selectedEnterAnimation;
  @bindable selectedEnterEasing;

  @bindable selectedLeaveAnimation;
  @bindable selectedLeaveEasing;

  @bindable enterDuration;
  @bindable leaveDuration;

  enterEffects = [];
  leaveEffects = [];
  easings = [];

  static inject = [Element,EventAggregator];
  constructor(element,ea) {
    this.element = element;
    this.ea = ea;
  }

  attached(){
    this.ea.publish("page:ready");
  }

  runEnterSequence(){
    this.box.enter();
  }

  runLeaveSequence(){
    this.box.leave();
  }



}
