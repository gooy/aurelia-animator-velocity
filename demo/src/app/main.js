import 'gooy/aurelia-animator-velocity';
import 'gooy/aurelia-markdown';

import 'velocity/velocity.ui';
import {SmoothScroll} from 'gooy/aurelia-smooth-scroll';

//Fix Prism to allow dot character in html attribute names
Prism.languages.markup.tag.pattern = /<\/?[\w:-]+\s*(?:\s+[^=]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i;

export function configure(aurelia) {

  SmoothScroll.getOffset = function(){
    return - 20 - document.querySelector(".page-host").offsetTop;
  };

  aurelia.use
  .standardConfiguration()
  .developmentLogging()
  .plugin('gooy/aurelia-animator-velocity',instance=>{
    instance.options.duration = 400;
    instance.options.easing = "ease-in";

    instance.enterAnimation = {properties:"fadeIn",options:{easing:"ease-in",duration:200}};
    instance.leaveAnimation = {properties:"fadeOut",options:{easing:"ease-in",duration:200}};
  })
  .plugin('gooy/aurelia-markdown')
  .plugin('gooy/aurelia-smooth-scroll')
  ;

  aurelia.start().then(a => a.setRoot());
}
