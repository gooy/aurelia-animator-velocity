import {bindable,useView} from 'aurelia-framework';

@useView("./generic.html")
export class ErrorPage403{
  id = null;

  title = "Error 403: Forbidden";
  message = "Authentication required...";

  activate(data){
    if(data && data.code){
      this.id = data.code;
    }
  }
}
