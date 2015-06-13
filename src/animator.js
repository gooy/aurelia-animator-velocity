import Velocity from 'velocity';
import JSOL from 'jsol';

/**
 * Aurelia animator implementation using Velocity
 */
export class VelocityAnimator {

  /**
   * Default options for velocity
   * @type {Object}
   */
  options = {
    duration: 500,
    easing:"linear"
  };

  /**
   * Default enter animation
   * @type {Object}
   */
  enterAnimation = {properties:"fadeIn",options:{duration:200}};
  /**
   * Default leave animation
   * @type {Object}
   */
  leaveAnimation = {properties:"fadeOut",options:{duration:200}};

  isAnimating = false;

  easings = [];
  effects = {};

  constructor() {
    this.easings = Animator.easings;
    this.effects = Animator.Redirects;
  }

  //--------------------------------- Aurelia Animator interface

  /**
   * Run a animation by name or by manually specifying properties and options for it
   *
   * @param element {HTMLElement}   Element to animate
   * @param props {Object}          element properties to animate
   * @param options {Object}        animation options
   *
   * @returns {Promise} resolved when animation is complete
   */
  animate(element,props,options) {
    this.isAnimating = true;
    return new Promise(resolve=>{
      var defaults = {
        complete:elements=>{
          this.isAnimating = false;
          resolve(true);
        }
      };
      Velocity(element, props, Object.assign(this.options,defaults,options));
    });
  }

  /**
   * Run the enter animation on an element
   *
   * @param element {HTMLElement}   Element to animate
   * @returns {Promise} resolved when animation is complete
   */
  enter(element) {
    return this._runElementAnimation(element,"enter");
  }

  /**
   * Run the leave animation on an element
   *
   * @param element {HTMLElement}   Element to animate
   * @returns {Promise} resolved when animation is complete
   */
  leave(element) {
    return this._runElementAnimation(element,"leave");
  }

  /**
   * Register a new effect by name
   *
   * @param name {String}   name for the effect
   * @param props {Object}  properties for the effect
   */
  registerEffect(name,props){
    Velocity.registerEffect(name,props);
  }

  unregisterEffect(name){
    Velocity.unregisterEffect(name);
  }

  /**
   * Run a seqeunce of animations, one after the other
   *
   * @param sequence {Array}  array of animations
   */
  runSequence(sequence){
    Velocity.runSequence(sequence);
  }

  //--------------------------------- Private methods

  /**
   * Run animation by type name
   *
   * @param element {HTMLElement}   Element to animate
   * @param name {String}           Name of the animation to run
   *
   * @returns {Promise} resolved when animation is complete
   */
  _runElementAnimation(element,name){
    var properties;
    var options = {};

    //parse animation properties for this element if none were found
    //if(!element.animations)
      this._parseAnimations(element);
    if(element.animations[name]) {
      properties = element.animations[name].properties;
      options = element.animations[name].options;
    }

    //skip if no enter animation was specified
    if(!properties) return Promise.resolve(false);

    this.isAnimating = true;
    return new Promise(resolve=>{
      var defaults = {
        complete:elements=>{
          this.isAnimating = false;
          resolve(true);
        }
      };
      options = Object.assign({},this.options,defaults,options);
      Velocity(element, properties, options);
    });
  }

  /**
   * Parse animations specified in the elements attributes
   *
   * @param element {HTMLElement}   Element to parse animations from
   */
  _parseAnimations(element){
    element.animations = {};
    element.animations.enter = this.parseAttributeValue(element.getAttribute("animation-enter"))||this.enterAnimation;
    element.animations.leave = this.parseAttributeValue(element.getAttribute("animation-leave"))||this.leaveAnimation;
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
    var p = value.split(";");
    var properties = p[0];
    var options = {};
    if(properties[0]=="{" && properties[properties.length-1] == "}") properties = JSOL.parse(properties);

    if(p.length>1) {
      options = p[1];
      options = JSOL.parse(options);
    }
    return {properties,options};
  }

}
