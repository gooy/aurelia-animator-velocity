import {bindable,noView,customAttribute} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@customAttribute("affix-bottom")
@noView
export class AffixBottom{

  subs = [];

  static inject = [Element,EventAggregator];
  constructor(element,ea) {
    this.element = element;
    this.ea = ea;
  }

  bind(){

  }

  unbind(){
    if(this.subs) for(let sub of this.subs) sub();
  }

  attached(){
    this.subs.push(window.addEventListener('resize',this.onResize.bind(this)));
    this.update();
  }

  onResize(e){
    this.update();
  }

  setLoading() {
    this.element.style.display = "none";
  }

  update(){

    this.element.style.display = "block";

    this.element.classList.remove("affix-bottom");
    var rect = this.element.getBoundingClientRect();

    if(rect.bottom <= window.innerHeight){
      this.element.classList.add("affix-bottom");
      document.body.classList.add("affix-bottom");
    }else{
      this.element.classList.remove("affix-bottom");
      document.body.classList.remove("affix-bottom");
    }

  }

}
