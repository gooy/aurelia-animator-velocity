import {bindable} from 'aurelia-framework';
import {VelocityAnimator} from "gooy/aurelia-animator-velocity";

export class Home{

  static inject = [VelocityAnimator];
  constructor(animator) {
    this.animator = animator;
  }

}
