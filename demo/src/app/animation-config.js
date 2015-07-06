import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';

export class AnimationConfig{

  @bindable effect = "";
  @bindable easing = "spring";
  @bindable duration = 800;
  @bindable effectFilter = null;
  @bindable customEffect = {
    "opacity": [1,0],
    "translateX": [0,-200]
  };

  effects = [];
  easings = [];

  static inject = [Element,Animator];
  constructor(element,animator) {
    this.element = element;
    this.animator = animator;
  }

  bind(){
    let key;
    for(key in this.animator.effects){
      if(!this.animator.effects.hasOwnProperty(key)) continue;

      if(this.effectFilter){
        if(this.effectFilter=="in"){
          if(key.lastIndexOf("In")===key.length-2) this.effects.push(key);
          if(key.lastIndexOf("Down")===key.length-4) this.effects.push(key);
          if(key.indexOf("callout")===0) this.effects.push(key);
        }else{
          if(key.lastIndexOf("Out")===key.length-3) this.effects.push(key);
          if(key.lastIndexOf("Up")===key.length-2) this.effects.push(key);
          if(key.indexOf("callout")===0) this.effects.push(key);
        }
      }else{
        this.effects.push(key);
      }
    }

    for(key in this.animator.easings){
      if(!this.animator.easings.hasOwnProperty(key)) continue;
      this.easings.push(key);
    }
  }

  getEffect(){
    return this.effect||this.getCustomEffect();
  }

  customEffectChanged(){
    this.aceEditor.setValue(this.customEffect);
  }

  getCustomEffect(){
    if(this.aceEditor) return JSON.parse(this.aceEditor.editor.getValue());
    return null;
  }

  selectedAnimationChanged(newValue,oldValue){
    this.animator.effects[":"] = newValue;
  }


}
