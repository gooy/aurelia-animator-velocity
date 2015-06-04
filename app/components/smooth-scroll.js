System.register(["aurelia-framework","gooy/aurelia-animator-velocity"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,r){var n=r[t];if(n){var i={};for(var o in n)i[o]=n[o];i.value=i.initializer.call(e),Object.defineProperty(e,t,i)}}var n,i,o,a,l,u=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,a=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var l=0;l<o.length;l++){var u=o[l];if("function"!=typeof u)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof u);i=u(e,a,i)||i}if(void 0!==i.initializer){r[a]=i;continue}}Object.defineProperty(e,a,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}();return{setters:[function(e){n=e.bindable,i=e.noView,o=e.customAttribute},function(e){a=e.VelocityAnimator}],execute:function(){l=function(){function e(e,n){t(this,s),r(this,"duration",l),r(this,"easing",l),this.subs=[],this.element=e,this.animator=n}var l={},s=e;return u(s,[{key:"duration",decorators:[n],initializer:function(){return 400},enumerable:!0},{key:"easing",decorators:[n],initializer:function(){return"ease-in"},enumerable:!0},{key:"attached",value:function(){var e=this.onClick.bind(this);this.subs.push(),this.element.addEventListener("click",e)}},{key:"detached",value:function(){if(this.subs){var e=!0,t=!1,r=void 0;try{for(var n,i=this.subs[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var o=n.value;o()}}catch(a){t=!0,r=a}finally{try{!e&&i["return"]&&i["return"]()}finally{if(t)throw r}}}}},{key:"onClick",value:function(e){return e.preventDefault(),this.scrollTo(this.element.getAttribute("href")),!1}},{key:"scrollTo",value:function(t){var r=void 0===arguments[1]?{}:arguments[1],n=void 0===arguments[2]?document.body:arguments[2];console.log("scrollTo",t);var i=t;if("string"==typeof t){var o=t;0===o.indexOf("#")&&(o=o.slice(1,o.length)),i=n.querySelector('[id="'+o+'"'),i||n.querySelector('[name="'+o+'"')}var a=n.scrollTop;return window.location.hash=o,n.scrollTop=a,this.animator.move(i,"scroll",Object.assign({duration:this.duration,offset:e.getOffset(),easing:this.easing},r))}}],[{key:"inject",value:[Element,a],enumerable:!0},{key:"getOffset",value:function(){return-document.querySelector(".page-host").offsetTop}}],l),e=i(e)||e,e=o("smooth-scroll")(e)||e}(),e("SmoothScroll",l)}}});