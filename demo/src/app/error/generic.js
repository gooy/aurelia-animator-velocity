import {bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class ErrorPage{
  id = null;

  static inject = [Element,EventAggregator];
  constructor(element,ea){
    this.element = element;
    this.ea = ea;
  }

  activate(data){
    if(data && data.code){
      this.id = data.code;
    }
  }
}
