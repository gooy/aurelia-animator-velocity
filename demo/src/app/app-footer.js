import {bindable,Animator} from 'aurelia-framework';
import {config} from 'config';

export class AppFooter{

  static inject = [Element,Animator];
  constructor(element,animator) {
    this.element = element;
    this.animator = animator;
  }

}
