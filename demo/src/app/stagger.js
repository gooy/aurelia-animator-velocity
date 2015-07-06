import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';
import {EventAggregator} from 'aurelia-event-aggregator';

export class StaggerPage{

  items = [];

  @bindable count = 20;

  @bindable staggerAmount = 50;
  @bindable drag = false;
  @bindable backwards = false;

  @bindable leaveStaggerAmount = 50;
  @bindable leaveDrag = false;
  @bindable leaveBackwards = false;

  static inject = [Animator,EventAggregator];
  constructor(animator,ea) {
    this.animator = animator;
    this.config = config;
    this.ea = ea;
  }

  attached(){
    this.ea.publish("page:ready");
  }

  createElements(){
    this.testElement.innerHTML = "";

    for(var i = 0, l = this.count; i < l; i++){
      var el = document.createElement("li");
      el.className = "staggerBox center-cell";

      var d = document.createElement("div");
      d.innerHTML = i;
      el.appendChild(d);

      this.testElement.appendChild(el);
    }
  }

  stagger(){

    this.createElements();

    this.animator.animate(this.testElement.children,this.animationConfig.getEffect(),{
      easing:this.animationConfig.easing,
      display:false,
      stagger:this.staggerAmount,
      drag:this.drag,
      backwards:this.backwards,
      duration:parseInt(this.animationConfig.duration)
    });
  }

  staggerLeave(){

    this.createElements();

    this.animator.animate(this.testElement.children,this.leaveConfig.getEffect(),{
      easing:this.leaveConfig.easing,
      display:false,
      stagger:this.leaveStaggerAmount,
      drag:this.leaveDrag,
      backwards:this.leaveBackwards,
      duration:parseInt(this.leaveConfig.duration)
    });
  }

}
