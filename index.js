'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameIconsDirective = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require('@angular/core');

require('gameicons-font/dist/game-icons.css');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameIconsDirective = exports.GameIconsDirective = (_dec = (0, _core.Directive)({
  selector: '[gi]',
  inputs: ['icon']
}), _dec(_class = function () {
  _createClass(GameIconsDirective, null, [{
    key: 'parameters',
    get: function get() {
      return [[_core.ElementRef]];
    }
  }]);

  function GameIconsDirective(elementRef) {
    _classCallCheck(this, GameIconsDirective);

    this.el = elementRef.nativeElement;
  }

  _createClass(GameIconsDirective, [{
    key: 'ngOnChanges',
    value: function ngOnChanges() {
      var _el$classList;

      this.el.className = '';
      (_el$classList = this.el.classList).add.apply(_el$classList, _toConsumableArray(this.iconClass()));
    }
  }, {
    key: 'iconClass',
    value: function iconClass() {
      var classes = ['game-icon', 'game-icon-' + this.icon];
      return classes;
    }
  }]);

  return GameIconsDirective;
}()) || _class);
