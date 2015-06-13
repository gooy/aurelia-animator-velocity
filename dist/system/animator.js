System.register(['velocity', 'jsol'], function (_export) {
  'use strict';

  var Velocity, JSOL, VelocityAnimator;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_velocity) {
      Velocity = _velocity['default'];
    }, function (_jsol) {
      JSOL = _jsol['default'];
    }],
    execute: function () {
      VelocityAnimator = (function () {
        function VelocityAnimator() {
          _classCallCheck(this, VelocityAnimator);

          this.options = {
            duration: 500,
            easing: 'linear'
          };
          this.enterAnimation = { properties: 'fadeIn', options: { duration: 200 } };
          this.leaveAnimation = { properties: 'fadeOut', options: { duration: 200 } };
          this.isAnimating = false;
          this.easings = [];
          this.effects = {};

          this.easings = Animator.easings;
          this.effects = Animator.Redirects;
        }

        _createClass(VelocityAnimator, [{
          key: 'animate',
          value: function animate(element, props, options) {
            var _this = this;

            this.isAnimating = true;
            return new Promise(function (resolve) {
              var defaults = {
                complete: function complete(elements) {
                  _this.isAnimating = false;
                  resolve(true);
                }
              };
              Velocity(element, props, Object.assign(_this.options, defaults, options));
            });
          }
        }, {
          key: 'enter',
          value: function enter(element) {
            return this._runElementAnimation(element, 'enter');
          }
        }, {
          key: 'leave',
          value: function leave(element) {
            return this._runElementAnimation(element, 'leave');
          }
        }, {
          key: 'registerEffect',
          value: function registerEffect(name, props) {
            Velocity.registerEffect(name, props);
          }
        }, {
          key: 'unregisterEffect',
          value: function unregisterEffect(name) {
            Velocity.unregisterEffect(name);
          }
        }, {
          key: 'runSequence',
          value: function runSequence(sequence) {
            Velocity.runSequence(sequence);
          }
        }, {
          key: '_runElementAnimation',
          value: function _runElementAnimation(element, name) {
            var _this2 = this;

            var properties;
            var options = {};

            this._parseAnimations(element);
            if (element.animations[name]) {
              properties = element.animations[name].properties;
              options = element.animations[name].options;
            }

            if (!properties) return Promise.resolve(false);

            this.isAnimating = true;
            return new Promise(function (resolve) {
              var defaults = {
                complete: function complete(elements) {
                  _this2.isAnimating = false;
                  resolve(true);
                }
              };
              options = Object.assign({}, _this2.options, defaults, options);
              Velocity(element, properties, options);
            });
          }
        }, {
          key: '_parseAnimations',
          value: function _parseAnimations(element) {
            element.animations = {};
            element.animations.enter = this.parseAttributeValue(element.getAttribute('animation-enter')) || this.enterAnimation;
            element.animations.leave = this.parseAttributeValue(element.getAttribute('animation-leave')) || this.leaveAnimation;
          }
        }, {
          key: 'parseAttributeValue',
          value: function parseAttributeValue(value) {
            if (!value) return value;
            var p = value.split(';');
            var properties = p[0];
            var options = {};
            if (properties[0] == '{' && properties[properties.length - 1] == '}') properties = JSOL.parse(properties);

            if (p.length > 1) {
              options = p[1];
              options = JSOL.parse(options);
            }
            return { properties: properties, options: options };
          }
        }]);

        return VelocityAnimator;
      })();

      _export('VelocityAnimator', VelocityAnimator);
    }
  };
});
//# sourceMappingURL=animator.js.map