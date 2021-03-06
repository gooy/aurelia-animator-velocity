import Velocity from 'velocity';
import 'velocity/velocity.ui';

import JSOL from 'jsol';
import {animationEvent} from 'aurelia-templating';

//import 'core-js';

/**
 * Aurelia animator implementation using Velocity
 */
export class VelocityAnimator {

  /**
   * Default options for velocity
   * @type {Object}
   */
  options = {
    duration: 400,
    easing:'linear'
  };

  isAnimating = false;

  enterAnimation = {properties:":enter",options:{easing:"ease-in",duration:200}};
  leaveAnimation = {properties:":leave",options:{easing:"ease-in",duration:200}};

  /**
   * Array of easing names that can be used with this animator
   *
   * @type {Array}
   */
  easings = [];

  /**
   * Effects mapped by name
   *
   * @type {Object}
   */
  effects = {
    ":enter": "fadeIn",
    ":leave": "fadeOut"
  };

  constructor(container) {
    this.container = container||window.document;
    this.easings = Object.assign(Velocity.Easings,this.easings);
    this.effects = Object.assign(Velocity.Redirects,this.effects);
  }

  //--------------------------------- Aurelia Animator interface

  /**
   * Run a animation by name or by manually specifying properties and options for it
   *
   * @param element {HTMLElement|Array<HTMLElement>}    Element or array of elements to animate
   * @param nameOrProps {String|Object}                       Element properties to animate
   * @param options {Object}                            Animation options
   *
   * @returns {Promise} resolved when animation is complete
   */
  animate(element,nameOrProps,options,silent) {
    this.isAnimating = true;
    let _this = this;
    let overrides = {
      complete:function(el){
        _this.isAnimating = false;
        if(!silent) dispatch(el,"animateDone");
        if(options && options.complete) options.complete.apply(this,arguments);
      }
    };
    if(!element) return Promise.reject(new Error("invalid first argument"));

    //resolve selectors
    if(typeof element === "string") element = this.container.querySelectorAll(element);

    //if nothing was found or no element was passed resolve the promise immediatly
    if(!element || element.length === 0) return Promise.resolve(element);

    if(!silent) dispatch(element,"animateBegin");

    if(typeof nameOrProps === "string"){
      nameOrProps =  this.resolveEffectAlias(nameOrProps);
      //if(!nameOrProps) Promise.reject(new Error(`effect alias ${nameOrProps} not found`));
    }

    //try to run the animation
    var opts = Object.assign({},this.options,options,overrides);
    var p = Velocity(element, nameOrProps, opts);

    //reject the promise if Velocity didn't return a Promise due to invalid arguments
    if(!p) return Promise.reject(new Error("invalid element used for animator.animate"));
    return p;
  }

  /**
   * Stop an animation
   *
   * @param element {HTMLElement}   Element to animate
   * @param clearQueue {boolean}    clear the animation queue
   *
   * @returns {Animator} return this instance for chaining
   */
  stop(element, clearQueue){
    Velocity(element,'stop',clearQueue);
    this.isAnimating = false;
    return this;
  }

  /**
   * Stop an animation
   *
   * @param element {HTMLElement}   Element to animate
   *
   * @returns {Animator} return this instance for chaining
   */
  reverse(element){
    Velocity(element,'reverse');
    return this;
  }

  /**
   * Bring animation back to the start state (this does not stop an animation)
   *
   */
  rewind(element){
    Velocity(name,'rewind');
    return this;
  }

  /**
   * Register a new effect by name.
   *
   * if second parameter is a string the effect will registered as an alias
   *
   * @param name {String}   name for the effect
   * @param props {Object}  properties for the effect
   */
  registerEffect(name,props){
    if(name[0] === ":") {
      if(typeof props === "string"){
        this.effects[name] = props;
      }else{
        throw new Error("second parameter must be a string when registering aliases");
      }
    }else{
      Velocity.RegisterEffect(name,props);
    }
    return this;
  }

  /**
   * Unregister an effect by name
   *
   * @param name {String}   name of the effect
   */
  unregisterEffect(name){
    delete this.effects[name];
    return this;
  }

  /**
   * Run a seqeunce of animations, one after the other
   *
   * @param sequence {Array}  array of animations
   */
  runSequence(sequence){
    dispatch(window,"sequenceBegin");
    return new Promise((resolve, reject) => {
      this.sequenceReject = resolve;
      var last = sequence[sequence.length-1];
      last.options = last.options||last.o||{};
      last.options.complete = ()=>{
        if(!this.sequenceReject) return;
        this.sequenceReject = undefined;
        dispatch(window,"sequenceDone");
        resolve();
      };
      try{
        Velocity.RunSequence(sequence);
      }catch(e){
        this.stopSequence(sequence);
        this.sequenceReject(e);
      }
    });
  }

  /**
   * runs stop on all elements in a sequence
   *
   * @param sequence {Array}  array of animations
   */
  stopSequence(sequence){
    sequence.map(item=>{
      var el = item.e||item.element||item.elements;
      this.stop(el,true);
    });
    if(this.sequenceReject) {
      this.sequenceReject();
      this.sequenceReject = undefined;
    }
    dispatch(window,"sequenceDone");
    return this;
  }

  /**
   * Resolve the real effect name from an effect alias
   */
  resolveEffectAlias(alias){
    //resolve alias if string start with a colon
    if(typeof alias === "string" && alias[0]===":"){
      return this.effects[alias];
    }
    return alias;
  }

  //--------- The enter and leave animations are called for each page transition made by the router

  /**
   * Run the enter animation on an element
   *
   * @param element {HTMLElement}   Element to animate
   * @returns {Promise} resolved when animation is complete
   */
  enter(element,effectName,options) {
    return this.stop(element,true)._runElementAnimation(element,effectName||':enter',options,'enter');
  }

  /**
   * Run the leave animation on an element
   *
   * @param element {HTMLElement}   Element to animate
   *
   * @returns {Promise} resolved when animation is complete
   */
  leave(element,effectName,options) {
    return this.stop(element,true)._runElementAnimation(element,effectName||':leave',options,'leave').then(elements=>{
    });
  }

  _runElements(element,name,options={}){

    //if nothing was found or no element was passed resolve the promise immediatly
    if(!element) return Promise.reject(new Error("invalid first argument"));

    //resolve selectors
    if(typeof element === "string") element = this.container.querySelectorAll(element);

    //if nothing was found or no element was passed resolve the promise immediatly
    if(!element || element.length === 0) return Promise.resolve(element);

    for (var i = 0; i < element.length; i++) {
      this._runElementAnimation(element[i],name,options);
    }
  }

  //--------------------------------- Private methods

  /**
   * execute an animation that is coupled to an HTMLElement
   *
   * The html element can optionally override the animation options through it's attributes
   *
   * @param element {HTMLElement}   Element to animate
   * @param name {String}           Name of the effect to execute
   * @param options                 animation options
   *
   * @returns {Promise} resolved when animation is complete
   *
   */
  _runElementAnimation(element,name,options={},eventName=undefined){

    //if nothing was found or no element was passed resolve the promise immediatly
    if(!element) return Promise.reject(new Error("invalid first argument"));

    //resolve selectors
    if(typeof element === "string") element = this.container.querySelectorAll(element);

    //if nothing was found or no element was passed resolve the promise immediatly
    if(!element || element.length === 0) return Promise.resolve(element);

    //parse animation properties
    if(!element.animations) this.parseAttributes(element);

    if(eventName) dispatch(element,eventName+"Begin");

    let overrides = {
      complete:elements=>{
        this.isAnimating = false;
        if(eventName) dispatch(element,eventName+"Done");
        if(options && options.complete) options.complete.apply(this,arguments);
      }
    };

    var opts = Object.assign({},this.options,options,overrides);
    return this.animate(element, name, opts, true);
  }

  /**
   * Parse animations specified in the elements attributes.
   * The parsed attributes will be stored in the animations property for the element.
   *
   * @param element {HTMLElement|Array<HTMLElement>}   Element(s) to parse
   */
  parseAttributes(element){
    let el,i,l;
    element = this.ensureList(element);
    for (i = 0,l=element.length; i < l; i++) {
      el = element[i];
      el.animations = {};
      el.animations.enter = this.parseAttributeValue(el.getAttribute('anim-enter'))||this.enterAnimation;
      el.animations.leave = this.parseAttributeValue(el.getAttribute('anim-leave'))||this.leaveAnimation;
    }
  }

  /**
   * Parse an attribute value as an animation definition
   *
   * syntax with effectname:     effectName:{prop1:value,prop2:value}
   * syntax with properties:     {prop1:value,prop2:value}:{prop1:value,prop2:value}
   *
   * @param value           Attribute value
   * @returns {Object}      Object with the effectName/properties and options that have been extracted
   */
  parseAttributeValue(value){
    if(!value) return value;
    let p = value.split(';');
    let properties = p[0];
    let options = {};
    if(properties[0]=='{' && properties[properties.length-1] == '}') properties = JSOL.parse(properties);

    if(p.length>1) {
      options = p[1];
      options = JSOL.parse(options);
    }
    return {properties,options};
  }

  ensureList(element){
    if(!Array.isArray(element) && !(element instanceof NodeList)) element = [element];
    return element
  }

}

function dispatch(element,name){
  var evt = new CustomEvent(animationEvent[name], { bubbles: true, cancelable: true, detail: element });
  document.dispatchEvent(evt);
}
