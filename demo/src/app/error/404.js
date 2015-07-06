import {bindable,useView} from 'aurelia-framework';

@useView("./generic.html")
export class ErrorPage404{
  id = null;

  title = "Error 404: Not found";
  message = "This is not the page you are looking for...";

  activate(data){
    if(data && data.code){
      this.id = data.code;
    }
  }
}
