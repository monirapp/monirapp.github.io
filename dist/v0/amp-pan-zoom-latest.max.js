(self.AMP=self.AMP||[]).push({n:"amp-pan-zoom",v:"1537222846916",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = exports.CSS = ".i-amphtml-pan-zoom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/";

},{}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpPanZoom = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actionConstants = require('../../../src/action-constants');

var _animation = require('../../../src/animation');

var _ampPanZoom = require('../../../build/amp-pan-zoom-0.1.css');

var _gestureRecognizers = require('../../../src/gesture-recognizers');

var _gesture = require('../../../src/gesture');

var _layout = require('../../../src/layout');

var _services = require('../../../src/services');

var _curve = require('../../../src/curve');

var _math = require('../../../src/utils/math');

var _motion = require('../../../src/motion');

var _eventHelper = require('../../../src/event-helper');

var _log = require('../../../src/log');

var _layoutRect = require('../../../src/layout-rect');

var _transition = require('../../../src/transition');

var _object = require('../../../src/utils/object');

var _style = require('../../../src/style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PAN_ZOOM_CURVE_ = (0, _curve.bezierCurve)(0.4, 0, 0.2, 1.4);
var TAG = 'amp-pan-zoom';
var DEFAULT_MAX_SCALE = 3;
var MAX_ANIMATION_DURATION = 250;

var ELIGIBLE_TAGS = {
  'svg': true,
  'DIV': true,
  'AMP-IMG': true,
  'AMP-LAYOUT': true
};

var SUPPORT_VALIDATION_MSG = TAG + ' should\n  have its target element as the one and only child';

/**
 * @extends {AMP.BaseElement}
 */

var AmpPanZoom = exports.AmpPanZoom = function (_AMP$BaseElement) {
  _inherits(AmpPanZoom, _AMP$BaseElement);

  // TODO (#15685): refactor this to share code with amp-image-viewer

  /** @param {!AmpElement} element */
  function AmpPanZoom(element) {
    _classCallCheck(this, AmpPanZoom);

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (AmpPanZoom.__proto__ || Object.getPrototypeOf(AmpPanZoom)).call(this, element));

    _this.content_ = null;

    /** @private {?../../../src/service/action-impl.ActionService} */
    _this.action_ = null;

    /** @private {number} */
    _this.sourceWidth_ = 0;

    /** @private {number} */
    _this.sourceHeight_ = 0;

    /** @private {?../../../src/layout-rect.LayoutRectDef} */
    _this.elementBox_ = null;

    /** @private {?../../../src/layout-rect.LayoutRectDef} */
    _this.contentBox_ = null;

    /** @private {?UnlistenDef} */
    _this.unlistenOnSwipePan_ = null;

    /** @private */
    _this.scale_ = 1;

    /** @private */
    _this.startScale_ = 1;

    /** @private */
    _this.minScale_ = 1;

    /** @private */
    _this.maxScale_ = DEFAULT_MAX_SCALE;

    /** @private */
    _this.initialX_ = 0;

    /** @private */
    _this.initialY_ = 0;

    /** @private */
    _this.initialScale_ = 1;

    /** @private */
    _this.startX_ = 0;

    /** @private */
    _this.startY_ = 0;

    /** @private */
    _this.posX_ = 0;

    /** @private */
    _this.posY_ = 0;

    /** @private */
    _this.minX_ = 0;

    /** @private */
    _this.minY_ = 0;

    /** @private */
    _this.maxX_ = 0;

    /** @private */
    _this.maxY_ = 0;

    /** @private {?../../../src/gesture.Gestures} */
    _this.gestures_ = null;

    /** @private {?../../../src/motion.Motion} */
    _this.motion_ = null;

    /** @private */
    _this.resetOnResize_ = false;
    return _this;
  }

  /** @override */


  _createClass(AmpPanZoom, [{
    key: 'buildCallback',
    value: function buildCallback() {
      var _this2 = this;

      this.action_ = _services.Services.actionServiceForDoc(this.element);
      var children = this.getRealChildren();

      (0, _log.user)().assert(children.length == 1, SUPPORT_VALIDATION_MSG);
      (0, _log.user)().assert(this.elementIsSupported_(children[0]), children[0].tagName + (' is not supported by ' + TAG));
      this.element.classList.add('i-amphtml-pan-zoom');
      this.content_ = children[0];
      this.content_.classList.add('i-amphtml-pan-zoom-child');
      this.maxScale_ = this.getNumberAttributeOr_('max-scale', DEFAULT_MAX_SCALE);
      this.initialScale_ = this.getNumberAttributeOr_('initial-scale', 1);
      this.initialX_ = this.getNumberAttributeOr_('initial-x', 0);
      this.initialY_ = this.getNumberAttributeOr_('initial-y', 0);
      this.resetOnResize_ = this.element.hasAttribute('reset-on-resize');

      this.registerAction('transform', function (invocation) {
        var args = invocation.args;

        if (!args) {
          return;
        }
        var scale = args['scale'] || 1;
        _this2.updatePanZoomBounds_(scale);
        var x = _this2.boundX_(args['x'] || 0, /*allowExtent*/false);
        var y = _this2.boundY_(args['y'] || 0, /*allowExtent*/false);
        return _this2.set_(scale, x, y, /*animate*/true).then(function () {
          return _this2.onZoomRelease_();
        });
      });
    }

    /** @override */

  }, {
    key: 'onMeasureChanged',
    value: function onMeasureChanged() {
      if (this.resetOnResize_) {
        this.resetContentDimensions_();
      }
    }

    /** @override */

  }, {
    key: 'layoutCallback',
    value: function layoutCallback() {
      return this.resetContentDimensions_().then(this.setupGestures_());
    }

    /** @override */

  }, {
    key: 'pauseCallback',
    value: function pauseCallback() {
      this.resetContentDimensions_();
      this.cleanupGestures_();
    }

    /** @override */

  }, {
    key: 'resumeCallback',
    value: function resumeCallback() {
      if (this.content_) {
        this.scheduleLayout(this.content_);
      }
      this.setupGestures_();
    }

    /** @override */

  }, {
    key: 'unlayoutCallback',
    value: function unlayoutCallback() {
      this.cleanupGestures_();
      return true;
    }

    /** @override */

  }, {
    key: 'isLayoutSupported',
    value: function isLayoutSupported(layout) {
      return layout == _layout.Layout.FIXED || layout == _layout.Layout.FIXED_HEIGHT || layout == _layout.Layout.FILL || layout == _layout.Layout.RESPONSIVE;
    }

    /**
     * Checks to see if an element is supported.
     * @param {Element} element
     * @return {boolean}
     * @private
     */

  }, {
    key: 'elementIsSupported_',
    value: function elementIsSupported_(element) {
      return ELIGIBLE_TAGS[element.tagName];
    }

    /**
     * Tries to retrieve a number attribute, returns a default value
     * if unsuccessful.
     * @param {string} attribute
     * @param {number} defaultValue
     * @return {number}
     * @private
     */

  }, {
    key: 'getNumberAttributeOr_',
    value: function getNumberAttributeOr_(attribute, defaultValue) {
      var element = this.element;

      return element.hasAttribute(attribute) ? parseInt(element.getAttribute(attribute), 10) : defaultValue;
    }

    /**
     * Measures the content viewer and content sizes and positioning.
     * This must be called AFTER the source element has already been
     * laid out.
     * @private
     */

  }, {
    key: 'measure_',
    value: function measure_() {
      this.sourceWidth_ = this.content_. /*OK*/scrollWidth;
      this.sourceHeight_ = this.content_. /*OK*/scrollHeight;

      this.elementBox_ = (0, _layoutRect.layoutRectFromDomRect)(this.element. /*OK*/getBoundingClientRect());

      var sourceAspectRatio = this.sourceWidth_ / this.sourceHeight_;
      var height = Math.min(this.elementBox_.width / sourceAspectRatio, this.elementBox_.height);
      var width = Math.min(this.elementBox_.height * sourceAspectRatio, this.elementBox_.width);

      if (Math.abs(width - this.sourceWidth_) <= 16 && Math.abs(height - this.sourceHeight_ <= 16)) {
        width = this.sourceWidth_;
        height = this.sourceHeight_;
      }

      this.contentBox_ = (0, _layoutRect.layoutRectLtwh)(Math.round((this.elementBox_.width - width) / 2), Math.round((this.elementBox_.height - height) / 2), Math.round(width), Math.round(height));

      // Adjust max scale to at least fit the screen.
      var elementBoxRatio = this.elementBox_.width / this.elementBox_.height;
      var maxScale = Math.max(elementBoxRatio / sourceAspectRatio, sourceAspectRatio / elementBoxRatio);
      this.maxScale_ = Math.max(this.maxScale_, maxScale);

      // Reset zoom and pan.
      this.startScale_ = this.scale_ = this.initialScale_;
      this.startX_ = this.posX_ = this.initialX_;
      this.startY_ = this.posY_ = this.initialY_;
      this.updatePanZoomBounds_(this.scale_);
    }

    /**
     * Measures and resets the content dimensions, after the element
     * dimensions changes.
     * @return {!Promise}
     */

  }, {
    key: 'resetContentDimensions_',
    value: function resetContentDimensions_() {
      var _this3 = this;

      var content = (0, _log.dev)().assertElement(this.content_);
      return this.measureElement(function () {
        return _this3.measure_();
      }).then(function () {
        return _this3.mutateElement(function () {
          // Set the actual dimensions of the content
          (0, _style.setStyles)(content, {
            width: (0, _style.px)(_this3.contentBox_.width),
            height: (0, _style.px)(_this3.contentBox_.height)
          });
          // Update translation and scaling
          _this3.updatePanZoom_();
        }, content);
      });
    }

    /** @private */

  }, {
    key: 'cleanupGestures_',
    value: function cleanupGestures_() {
      if (this.gestures_) {
        this.gestures_.cleanup();
        this.gestures_ = null;
      }
    }

    /**
     * Given a x offset relative to the viewport, return the x offset
     * relative to the amp-pan-zoom component.
     * @param {number} clientX
     */

  }, {
    key: 'getOffsetX_',
    value: function getOffsetX_(clientX) {
      var left = this.elementBox_.left;

      return left - this.getViewport().getScrollLeft() - clientX;
    }

    /**
     * Given a y offset relative to the viewport, return the y offset
     * relative to the amp-pan-zoom component.
     * @param {number} clientY
     */

  }, {
    key: 'getOffsetY_',
    value: function getOffsetY_(clientY) {
      var top = this.elementBox_.top;

      return top - this.getViewport().getScrollTop() - clientY;
    }

    /** @private */

  }, {
    key: 'setupGestures_',
    value: function setupGestures_() {
      var _this4 = this;

      if (this.gestures_) {
        return;
      }
      // TODO (#12881): this and the subsequent use of event.preventDefault
      // is a temporary solution to #12362. We should revisit this problem after
      // resolving #12881 or change the use of window.event to the specific event
      // triggering the gesture.
      this.gestures_ = _gesture.Gestures.get(this.element,
      /* opt_shouldNotPreventDefault */false);

      this.gestures_.onPointerDown(function () {
        if (_this4.motion_) {
          _this4.motion_.halt();
        }
      });

      // Zoomable.
      this.gestures_.onGesture(_gestureRecognizers.DoubletapRecognizer, function (e) {
        var _e$data = e.data,
            clientX = _e$data.clientX,
            clientY = _e$data.clientY;

        var newScale = _this4.scale_ == 1 ? _this4.maxScale_ : _this4.minScale_;
        var deltaX = _this4.elementBox_.width / 2 + _this4.getOffsetX_(clientX);
        var deltaY = _this4.elementBox_.height / 2 + _this4.getOffsetY_(clientY);

        _this4.onZoom_(newScale, deltaX, deltaY, /*animate*/true).then(function () {
          return _this4.onZoomRelease_();
        });
      });

      this.gestures_.onGesture(_gestureRecognizers.PinchRecognizer, function (e) {
        var _e$data2 = e.data,
            centerClientX = _e$data2.centerClientX,
            centerClientY = _e$data2.centerClientY,
            deltaX = _e$data2.deltaX,
            deltaY = _e$data2.deltaY,
            dir = _e$data2.dir,
            last = _e$data2.last;


        _this4.onPinchZoom_(centerClientX, centerClientY, deltaX, deltaY, dir);
        if (last) {
          _this4.onZoomRelease_();
        }
      });

      // Override all taps to enable tap events on content
      this.gestures_.onGesture(_gestureRecognizers.TapRecognizer, function (e) {
        var event = (0, _eventHelper.createCustomEvent)(_this4.win, 'click', null, { bubbles: true });
        e.data.target.dispatchEvent(event);
      });
    }

    /**
     * Registers a Swipe gesture to handle panning when the content is zoomed.
     * @private
     */

  }, {
    key: 'registerPanningGesture_',
    value: function registerPanningGesture_() {
      var _this5 = this;

      // Movable.
      this.unlistenOnSwipePan_ = this.gestures_.onGesture(_gestureRecognizers.SwipeXYRecognizer, function (e) {
        event.preventDefault();
        var _e$data3 = e.data,
            deltaX = _e$data3.deltaX,
            deltaY = _e$data3.deltaY,
            last = _e$data3.last,
            velocityX = _e$data3.velocityX,
            velocityY = _e$data3.velocityY;

        _this5.onMove_(deltaX, deltaY, /*animate*/false);
        if (last) {
          _this5.onMoveRelease_(velocityX, velocityY);
        }
      });
    }

    /**
     * Deregisters the Swipe gesture for panning when the content is zoomed out.
     * @private
     */

  }, {
    key: 'unregisterPanningGesture_',
    value: function unregisterPanningGesture_() {
      if (this.unlistenOnSwipePan_) {
        this.unlistenOnSwipePan_();
        this.unlistenOnSwipePan_ = null;
        this.gestures_.removeGesture(_gestureRecognizers.SwipeXYRecognizer);
      }
    }

    /**
     * Returns value bound to min and max values +/- extent.
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @param {number} extent
     * @return {number}
     * @private
     */

  }, {
    key: 'boundValue_',
    value: function boundValue_(value, min, max, extent) {
      return (0, _math.clamp)(value, min - extent, max + extent);
    }

    /**
     * Returns the scale within the allowed range with possible extent.
     * @param {number} s
     * @param {boolean} allowExtent
     * @return {number}
     * @private
     */

  }, {
    key: 'boundScale_',
    value: function boundScale_(s, allowExtent) {
      var extent = allowExtent ? 0.25 : 0;
      return this.boundValue_(s, this.minScale_, this.maxScale_, extent);
    }

    /**
     * Returns the X position within the allowed range with possible extent.
     * @param {number} x
     * @param {boolean} allowExtent
     * @return {number}
     * @private
     */

  }, {
    key: 'boundX_',
    value: function boundX_(x, allowExtent) {
      var maxExtent = this.elementBox_.width * 0.25;
      var extent = allowExtent && this.scale_ > 1 ? maxExtent : 0;
      return this.boundValue_(x, this.minX_, this.maxX_, extent);
    }

    /**
     * Returns the Y position within the allowed range with possible extent.
     * @param {number} y
     * @param {boolean} allowExtent
     * @return {number}
     * @private
     */

  }, {
    key: 'boundY_',
    value: function boundY_(y, allowExtent) {
      var maxExtent = this.elementBox_.height * 0.25;
      var extent = allowExtent && this.scale_ > 1 ? maxExtent : 0;
      return this.boundValue_(y, this.minY_, this.maxY_, extent);
    }

    /**
     * Updates X/Y bounds based on the provided scale value. The min/max bounds
     * are calculated to allow full pan of the content regardless of the scale
     * value.
     * @param {number} scale
     * @private
     */

  }, {
    key: 'updatePanZoomBounds_',
    value: function updatePanZoomBounds_(scale) {
      var dh = this.elementBox_.height - this.contentBox_.height * scale;
      var dw = this.elementBox_.width - this.contentBox_.width * scale;

      var minY = dh >= 0 ? 0 : dh / 2;
      var maxY = dh >= 0 ? 0 : -minY;
      var minX = dw >= 0 ? 0 : dw / 2;
      var maxX = dw >= 0 ? 0 : -minX;

      this.minX_ = minX;
      this.minY_ = minY;
      this.maxX_ = maxX;
      this.maxY_ = maxY;
    }

    /**
     * Updates pan/zoom of the content based on the current values.
     * @private
     */

  }, {
    key: 'updatePanZoom_',
    value: function updatePanZoom_() {
      var s = this.scale_,
          x = this.posX_,
          y = this.posY_,
          content = this.content_;

      this.mutateElement(function () {
        (0, _style.setStyles)((0, _log.dev)().assertElement(content), {
          transform: (0, _style.translate)(x, y) + ' ' + (0, _style.scale)(s)
        });
      }, content);
    }

    /**
     * @param {number} scale
     * @param {number} x
     * @param {number} y
     * @private
     */

  }, {
    key: 'triggerTransformEnd_',
    value: function triggerTransformEnd_(scale, x, y) {
      var transformEndEvent = (0, _eventHelper.createCustomEvent)(this.win, TAG + '.transformEnd', (0, _object.dict)({
        'scale': scale,
        'x': x,
        'y': y
      }));
      this.action_.trigger(this.element, 'transformEnd', transformEndEvent, _actionConstants.ActionTrust.HIGH);
    }

    /**
     * Performs a one-step or an animated motion (panning).
     * @param {number} deltaX
     * @param {number} deltaY
     * @param {boolean} animate
     * @private
     */

  }, {
    key: 'onMove_',
    value: function onMove_(deltaX, deltaY, animate) {
      var newPosX = this.boundX_(this.startX_ + deltaX, false);
      var newPosY = this.boundY_(this.startY_ + deltaY, false);
      this.set_(this.scale_, newPosX, newPosY, animate);
    }

    /**
     * Performs actions once the motion gesture has been complete. The motion
     * may continue based on the final velocity.
     * @param {number} veloX
     * @param {number} veloY
     * @private
     */

  }, {
    key: 'onMoveRelease_',
    value: function onMoveRelease_(veloX, veloY) {
      var _this6 = this;

      // Continue motion.
      this.motion_ = (0, _motion.continueMotion)((0, _log.dev)().assertElement(this.content_), this.posX_, this.posY_, veloX, veloY, function (x, y) {
        var newPosX = _this6.boundX_(x, false);
        var newPosY = _this6.boundY_(y, false);
        if (Math.abs(newPosX - _this6.posX_) < 1 && Math.abs(newPosY - _this6.posY_) < 1) {
          // Hit the wall: stop motion.
          return false;
        }
        _this6.set_(_this6.scale_, newPosX, newPosY, false);
        return true;
      });

      // Snap back.
      this.motion_.thenAlways(function () {
        _this6.motion_ = null;
        return _this6.release_();
      });
    }

    /**
     * Performs a one-step pinch zoom action.
     * @param {number} centerClientX
     * @param {number} centerClientY
     * @param {number} deltaX
     * @param {number} deltaY
     *  @param {number} dir
     * @private
     */

  }, {
    key: 'onPinchZoom_',
    value: function onPinchZoom_(centerClientX, centerClientY, deltaX, deltaY, dir) {
      this.zoomToPoint_(centerClientX, centerClientY, deltaX, deltaY, dir);
    }

    /**
     * Given center position, zoom delta, and zoom position, computes
     * and updates a zoom action on the content.
     * @param {number} centerClientX
     * @param {number} centerClientY
     * @param {number} deltaX
     * @param {number} deltaY
     * @param {number} dir
     * @private
     */

  }, {
    key: 'zoomToPoint_',
    value: function zoomToPoint_(centerClientX, centerClientY, deltaX, deltaY, dir) {
      if (dir == 0) {
        return;
      }
      var dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      var newScale = this.startScale_ * (1 + dir * dist / 100);
      var deltaCenterX = this.elementBox_.width / 2 - centerClientX;
      var deltaCenterY = this.elementBox_.height / 2 - centerClientY;
      deltaX = Math.min(deltaCenterX, deltaCenterX * (dist / 100));
      deltaY = Math.min(deltaCenterY, deltaCenterY * (dist / 100));
      this.onZoom_(newScale, deltaX, deltaY, /*animate*/false);
    }

    /**
     * Performs a one-step or an animated zoom action.
     * @param {number} scale
     * @param {number} deltaX
     * @param {number} deltaY
     * @param {boolean} animate
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'onZoom_',
    value: function onZoom_(scale, deltaX, deltaY, animate) {
      var newScale = this.boundScale_(scale, true);
      if (newScale == this.scale_) {
        return Promise.resolve();
      }

      this.updatePanZoomBounds_(newScale);

      var newPosX = this.boundX_(this.startX_ + deltaX * newScale, false);
      var newPosY = this.boundY_(this.startY_ + deltaY * newScale, false);
      return this.set_(newScale, newPosX, newPosY, animate);
    }

    /**
     * Performs actions after the gesture that was performing zooming has been
     * released.
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'onZoomRelease_',
    value: function onZoomRelease_() {
      var _this7 = this;

      return this.release_().then(function () {
        // After the scale is updated, also register or unregister panning
        if (_this7.scale_ <= 1) {
          _this7.unregisterPanningGesture_();
        } else {
          _this7.registerPanningGesture_();
        }
      });
    }

    /**
     * Sets or animates pan/zoom parameters.
     * @param {number} newScale
     * @param {number} newPosX
     * @param {number} newPosY
     * @param {boolean} animate
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'set_',
    value: function set_(newScale, newPosX, newPosY, animate) {
      var _this8 = this;

      var ds = newScale - this.scale_;
      var dx = newPosX - this.posX_;
      var dy = newPosY - this.posY_;
      var dist = Math.sqrt(dx * dx + dy * dy);

      var dur = animate ? Math.min(1, Math.max(dist * 0.01, // Distance
      Math.abs(ds) // Change in scale
      )) * MAX_ANIMATION_DURATION : 0;

      if (dur > 16 && animate) {
        var scaleFunc = (0, _transition.numeric)(this.scale_, newScale);
        var xFunc = (0, _transition.numeric)(this.posX_, newPosX);
        var yFunc = (0, _transition.numeric)(this.posY_, newPosY);
        return _animation.Animation.animate((0, _log.dev)().assertElement(this.content_), function (time) {
          _this8.scale_ = scaleFunc(time);
          _this8.posX_ = xFunc(time);
          _this8.posY_ = yFunc(time);
          _this8.updatePanZoom_();
        }, dur, PAN_ZOOM_CURVE_).thenAlways(function () {
          _this8.scale_ = newScale;
          _this8.posX_ = newPosX;
          _this8.posY_ = newPosY;
          _this8.updatePanZoom_();
          _this8.triggerTransformEnd_(newScale, newPosX, newPosY);
        });
      } else {
        this.scale_ = newScale;
        this.posX_ = newPosX;
        this.posY_ = newPosY;
        this.updatePanZoom_();
        return Promise.resolve();
      }
    }

    /**
     * Sets or animates pan/zoom parameters after release of the gesture.
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'release_',
    value: function release_() {
      var _this9 = this;

      var newScale = this.boundScale_(this.scale_, false);
      if (newScale != this.scale_) {
        this.updatePanZoomBounds_(newScale);
      }
      var newPosX = this.boundX_(this.posX_ / this.scale_ * newScale, false);
      var newPosY = this.boundY_(this.posY_ / this.scale_ * newScale, false);
      return this.set_(newScale, newPosX, newPosY, true).then(function () {
        _this9.startScale_ = _this9.scale_;
        _this9.startX_ = _this9.posX_;
        _this9.startY_ = _this9.posY_;
        _this9.triggerTransformEnd_(_this9.scale_, _this9.posX_, _this9.posY_);
      });
    }
  }]);

  return AmpPanZoom;
}(AMP.BaseElement);

AMP.extension(TAG, '0.1', function (AMP) {
  AMP.registerElement(TAG, AmpPanZoom, _ampPanZoom.CSS);
});

},{"../../../build/amp-pan-zoom-0.1.css":1,"../../../src/action-constants":5,"../../../src/animation":6,"../../../src/curve":9,"../../../src/event-helper":13,"../../../src/gesture":16,"../../../src/gesture-recognizers":15,"../../../src/layout":18,"../../../src/layout-rect":17,"../../../src/log":19,"../../../src/motion":22,"../../../src/services":34,"../../../src/style":37,"../../../src/transition":39,"../../../src/utils/math":46,"../../../src/utils/object":47}],3:[function(require,module,exports){
/*!

Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
// global window Object
// optional polyfill info
//    'auto' used by default, everything is feature detected
//    'force' use the polyfill even if not fully needed
function installCustomElements(window, polyfill) {'use strict';

  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
  // THIS FILE IS JUST WRAPPED UP RESULTING IN
  // build/document-register-element.node.js

  var
    document = window.document,
    Object = window.Object
  ;

  var htmlClass = (function (info) {
    // (C) Andrea Giammarchi - @WebReflection - MIT Style
    var
      catchClass = /^[A-Z]+[a-z]/,
      filterBy = function (re) {
        var arr = [], tag;
        for (tag in register) {
          if (re.test(tag)) arr.push(tag);
        }
        return arr;
      },
      add = function (Class, tag) {
        tag = tag.toLowerCase();
        if (!(tag in register)) {
          register[Class] = (register[Class] || []).concat(tag);
          register[tag] = (register[tag.toUpperCase()] = Class);
        }
      },
      register = (Object.create || Object)(null),
      htmlClass = {},
      i, section, tags, Class
    ;
    for (section in info) {
      for (Class in info[section]) {
        tags = info[section][Class];
        register[Class] = tags;
        for (i = 0; i < tags.length; i++) {
          register[tags[i].toLowerCase()] =
          register[tags[i].toUpperCase()] = Class;
        }
      }
    }
    htmlClass.get = function get(tagOrClass) {
      return typeof tagOrClass === 'string' ?
        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
        filterBy(tagOrClass);
    };
    htmlClass.set = function set(tag, Class) {
      return (catchClass.test(tag) ?
        add(tag, Class) :
        add(Class, tag)
      ), htmlClass;
    };
    return htmlClass;
  }({
    "collections": {
      "HTMLAllCollection": [
        "all"
      ],
      "HTMLCollection": [
        "forms"
      ],
      "HTMLFormControlsCollection": [
        "elements"
      ],
      "HTMLOptionsCollection": [
        "options"
      ]
    },
    "elements": {
      "Element": [
        "element"
      ],
      "HTMLAnchorElement": [
        "a"
      ],
      "HTMLAppletElement": [
        "applet"
      ],
      "HTMLAreaElement": [
        "area"
      ],
      "HTMLAttachmentElement": [
        "attachment"
      ],
      "HTMLAudioElement": [
        "audio"
      ],
      "HTMLBRElement": [
        "br"
      ],
      "HTMLBaseElement": [
        "base"
      ],
      "HTMLBodyElement": [
        "body"
      ],
      "HTMLButtonElement": [
        "button"
      ],
      "HTMLCanvasElement": [
        "canvas"
      ],
      "HTMLContentElement": [
        "content"
      ],
      "HTMLDListElement": [
        "dl"
      ],
      "HTMLDataElement": [
        "data"
      ],
      "HTMLDataListElement": [
        "datalist"
      ],
      "HTMLDetailsElement": [
        "details"
      ],
      "HTMLDialogElement": [
        "dialog"
      ],
      "HTMLDirectoryElement": [
        "dir"
      ],
      "HTMLDivElement": [
        "div"
      ],
      "HTMLDocument": [
        "document"
      ],
      "HTMLElement": [
        "element",
        "abbr",
        "address",
        "article",
        "aside",
        "b",
        "bdi",
        "bdo",
        "cite",
        "code",
        "command",
        "dd",
        "dfn",
        "dt",
        "em",
        "figcaption",
        "figure",
        "footer",
        "header",
        "i",
        "kbd",
        "mark",
        "nav",
        "noscript",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "small",
        "strong",
        "sub",
        "summary",
        "sup",
        "u",
        "var",
        "wbr"
      ],
      "HTMLEmbedElement": [
        "embed"
      ],
      "HTMLFieldSetElement": [
        "fieldset"
      ],
      "HTMLFontElement": [
        "font"
      ],
      "HTMLFormElement": [
        "form"
      ],
      "HTMLFrameElement": [
        "frame"
      ],
      "HTMLFrameSetElement": [
        "frameset"
      ],
      "HTMLHRElement": [
        "hr"
      ],
      "HTMLHeadElement": [
        "head"
      ],
      "HTMLHeadingElement": [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6"
      ],
      "HTMLHtmlElement": [
        "html"
      ],
      "HTMLIFrameElement": [
        "iframe"
      ],
      "HTMLImageElement": [
        "img"
      ],
      "HTMLInputElement": [
        "input"
      ],
      "HTMLKeygenElement": [
        "keygen"
      ],
      "HTMLLIElement": [
        "li"
      ],
      "HTMLLabelElement": [
        "label"
      ],
      "HTMLLegendElement": [
        "legend"
      ],
      "HTMLLinkElement": [
        "link"
      ],
      "HTMLMapElement": [
        "map"
      ],
      "HTMLMarqueeElement": [
        "marquee"
      ],
      "HTMLMediaElement": [
        "media"
      ],
      "HTMLMenuElement": [
        "menu"
      ],
      "HTMLMenuItemElement": [
        "menuitem"
      ],
      "HTMLMetaElement": [
        "meta"
      ],
      "HTMLMeterElement": [
        "meter"
      ],
      "HTMLModElement": [
        "del",
        "ins"
      ],
      "HTMLOListElement": [
        "ol"
      ],
      "HTMLObjectElement": [
        "object"
      ],
      "HTMLOptGroupElement": [
        "optgroup"
      ],
      "HTMLOptionElement": [
        "option"
      ],
      "HTMLOutputElement": [
        "output"
      ],
      "HTMLParagraphElement": [
        "p"
      ],
      "HTMLParamElement": [
        "param"
      ],
      "HTMLPictureElement": [
        "picture"
      ],
      "HTMLPreElement": [
        "pre"
      ],
      "HTMLProgressElement": [
        "progress"
      ],
      "HTMLQuoteElement": [
        "blockquote",
        "q",
        "quote"
      ],
      "HTMLScriptElement": [
        "script"
      ],
      "HTMLSelectElement": [
        "select"
      ],
      "HTMLShadowElement": [
        "shadow"
      ],
      "HTMLSlotElement": [
        "slot"
      ],
      "HTMLSourceElement": [
        "source"
      ],
      "HTMLSpanElement": [
        "span"
      ],
      "HTMLStyleElement": [
        "style"
      ],
      "HTMLTableCaptionElement": [
        "caption"
      ],
      "HTMLTableCellElement": [
        "td",
        "th"
      ],
      "HTMLTableColElement": [
        "col",
        "colgroup"
      ],
      "HTMLTableElement": [
        "table"
      ],
      "HTMLTableRowElement": [
        "tr"
      ],
      "HTMLTableSectionElement": [
        "thead",
        "tbody",
        "tfoot"
      ],
      "HTMLTemplateElement": [
        "template"
      ],
      "HTMLTextAreaElement": [
        "textarea"
      ],
      "HTMLTimeElement": [
        "time"
      ],
      "HTMLTitleElement": [
        "title"
      ],
      "HTMLTrackElement": [
        "track"
      ],
      "HTMLUListElement": [
        "ul"
      ],
      "HTMLUnknownElement": [
        "unknown",
        "vhgroupv",
        "vkeygen"
      ],
      "HTMLVideoElement": [
        "video"
      ]
    },
    "nodes": {
      "Attr": [
        "node"
      ],
      "Audio": [
        "audio"
      ],
      "CDATASection": [
        "node"
      ],
      "CharacterData": [
        "node"
      ],
      "Comment": [
        "#comment"
      ],
      "Document": [
        "#document"
      ],
      "DocumentFragment": [
        "#document-fragment"
      ],
      "DocumentType": [
        "node"
      ],
      "HTMLDocument": [
        "#document"
      ],
      "Image": [
        "img"
      ],
      "Option": [
        "option"
      ],
      "ProcessingInstruction": [
        "node"
      ],
      "ShadowRoot": [
        "#shadow-root"
      ],
      "Text": [
        "#text"
      ],
      "XMLDocument": [
        "xml"
      ]
    }
  }));
  
  
    
  // passed at runtime, configurable
  // via nodejs module
  if (!polyfill) polyfill = 'auto';
  
  var
    // V0 polyfill entry
    REGISTER_ELEMENT = 'registerElement',
  
    // IE < 11 only + old WebKit for attributes + feature detection
    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
  
    // shortcuts and costants
    ADD_EVENT_LISTENER = 'addEventListener',
    ATTACHED = 'attached',
    CALLBACK = 'Callback',
    DETACHED = 'detached',
    EXTENDS = 'extends',
  
    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
    CONNECTED_CALLBACK = 'connected' + CALLBACK,
    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
    CREATED_CALLBACK = 'created' + CALLBACK,
    DETACHED_CALLBACK = DETACHED + CALLBACK,
  
    ADDITION = 'ADDITION',
    MODIFICATION = 'MODIFICATION',
    REMOVAL = 'REMOVAL',
  
    DOM_ATTR_MODIFIED = 'DOMAttrModified',
    DOM_CONTENT_LOADED = 'DOMContentLoaded',
    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  
    PREFIX_TAG = '<',
    PREFIX_IS = '=',
  
    // valid and invalid node names
    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
    invalidNames = [
      'ANNOTATION-XML',
      'COLOR-PROFILE',
      'FONT-FACE',
      'FONT-FACE-SRC',
      'FONT-FACE-URI',
      'FONT-FACE-FORMAT',
      'FONT-FACE-NAME',
      'MISSING-GLYPH'
    ],
  
    // registered types and their prototypes
    types = [],
    protos = [],
  
    // to query subnodes
    query = '',
  
    // html shortcut used to feature detect
    documentElement = document.documentElement,
  
    // ES5 inline helpers || basic patches
    indexOf = types.indexOf || function (v) {
      for(var i = this.length; i-- && this[i] !== v;){}
      return i;
    },
  
    // other helpers / shortcuts
    OP = Object.prototype,
    hOP = OP.hasOwnProperty,
    iPO = OP.isPrototypeOf,
  
    defineProperty = Object.defineProperty,
    empty = [],
    gOPD = Object.getOwnPropertyDescriptor,
    gOPN = Object.getOwnPropertyNames,
    gPO = Object.getPrototypeOf,
    sPO = Object.setPrototypeOf,
  
    // jshint proto: true
    hasProto = !!Object.__proto__,
  
    // V1 helpers
    fixGetClass = false,
    DRECEV1 = '__dreCEv1',
    customElements = window.customElements,
    usableCustomElements = polyfill !== 'force' && !!(
      customElements &&
      customElements.define &&
      customElements.get &&
      customElements.whenDefined
    ),
    Dict = Object.create || Object,
    Map = window.Map || function Map() {
      var K = [], V = [], i;
      return {
        get: function (k) {
          return V[indexOf.call(K, k)];
        },
        set: function (k, v) {
          i = indexOf.call(K, k);
          if (i < 0) V[K.push(k) - 1] = v;
          else V[i] = v;
        }
      };
    },
    Promise = window.Promise || function (fn) {
      var
        notify = [],
        done = false,
        p = {
          'catch': function () {
            return p;
          },
          'then': function (cb) {
            notify.push(cb);
            if (done) setTimeout(resolve, 1);
            return p;
          }
        }
      ;
      function resolve(value) {
        done = true;
        while (notify.length) notify.shift()(value);
      }
      fn(resolve);
      return p;
    },
    justCreated = false,
    constructors = Dict(null),
    waitingList = Dict(null),
    nodeNames = new Map(),
    secondArgument = function (is) {
      return is.toLowerCase();
    },
  
    // used to create unique instances
    create = Object.create || function Bridge(proto) {
      // silly broken polyfill probably ever used but short enough to work
      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
    },
  
    // will set the prototype if possible
    // or copy over all properties
    setPrototype = sPO || (
      hasProto ?
        function (o, p) {
          o.__proto__ = p;
          return o;
        } : (
      (gOPN && gOPD) ?
        (function(){
          function setProperties(o, p) {
            for (var
              key,
              names = gOPN(p),
              i = 0, length = names.length;
              i < length; i++
            ) {
              key = names[i];
              if (!hOP.call(o, key)) {
                defineProperty(o, key, gOPD(p, key));
              }
            }
          }
          return function (o, p) {
            do {
              setProperties(o, p);
            } while ((p = gPO(p)) && !iPO.call(p, o));
            return o;
          };
        }()) :
        function (o, p) {
          for (var key in p) {
            o[key] = p[key];
          }
          return o;
        }
    )),
  
    // DOM shortcuts and helpers, if any
  
    MutationObserver = window.MutationObserver ||
                       window.WebKitMutationObserver,
  
    HTMLElementPrototype = (
      window.HTMLElement ||
      window.Element ||
      window.Node
    ).prototype,
  
    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
  
    safeProperty = IE8 ? function (o, k, d) {
      o[k] = d.value;
      return o;
    } : defineProperty,
  
    isValidNode = IE8 ?
      function (node) {
        return node.nodeType === 1;
      } :
      function (node) {
        return iPO.call(HTMLElementPrototype, node);
      },
  
    targets = IE8 && [],
  
    attachShadow = HTMLElementPrototype.attachShadow,
    cloneNode = HTMLElementPrototype.cloneNode,
    dispatchEvent = HTMLElementPrototype.dispatchEvent,
    getAttribute = HTMLElementPrototype.getAttribute,
    hasAttribute = HTMLElementPrototype.hasAttribute,
    removeAttribute = HTMLElementPrototype.removeAttribute,
    setAttribute = HTMLElementPrototype.setAttribute,
  
    // replaced later on
    createElement = document.createElement,
    patchedCreateElement = createElement,
  
    // shared observer for all attributes
    attributesObserver = MutationObserver && {
      attributes: true,
      characterData: true,
      attributeOldValue: true
    },
  
    // useful to detect only if there's no MutationObserver
    DOMAttrModified = MutationObserver || function(e) {
      doesNotSupportDOMAttrModified = false;
      documentElement.removeEventListener(
        DOM_ATTR_MODIFIED,
        DOMAttrModified
      );
    },
  
    // will both be used to make DOMNodeInserted asynchronous
    asapQueue,
    asapTimer = 0,
  
    // internal flags
    V0 = REGISTER_ELEMENT in document,
    setListener = true,
    justSetup = false,
    doesNotSupportDOMAttrModified = true,
    dropDomContentLoaded = true,
  
    // needed for the innerHTML helper
    notFromInnerHTMLHelper = true,
  
    // optionally defined later on
    onSubtreeModified,
    callDOMAttrModified,
    getAttributesMirror,
    observer,
    observe,
  
    // based on setting prototype capability
    // will check proto or the expando attribute
    // in order to setup the node once
    patchIfNotAlready,
    patch
  ;
  
  // only if needed
  if (!V0) {
  
    if (sPO || hasProto) {
        patchIfNotAlready = function (node, proto) {
          if (!iPO.call(proto, node)) {
            setupNode(node, proto);
          }
        };
        patch = setupNode;
    } else {
        patchIfNotAlready = function (node, proto) {
          if (!node[EXPANDO_UID]) {
            node[EXPANDO_UID] = Object(true);
            setupNode(node, proto);
          }
        };
        patch = patchIfNotAlready;
    }
  
    if (IE8) {
      doesNotSupportDOMAttrModified = false;
      (function (){
        var
          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
          addEventListener = descriptor.value,
          patchedRemoveAttribute = function (name) {
            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
            e.attrName = name;
            e.prevValue = getAttribute.call(this, name);
            e.newValue = null;
            e[REMOVAL] = e.attrChange = 2;
            removeAttribute.call(this, name);
            dispatchEvent.call(this, e);
          },
          patchedSetAttribute = function (name, value) {
            var
              had = hasAttribute.call(this, name),
              old = had && getAttribute.call(this, name),
              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
            ;
            setAttribute.call(this, name, value);
            e.attrName = name;
            e.prevValue = had ? old : null;
            e.newValue = value;
            if (had) {
              e[MODIFICATION] = e.attrChange = 1;
            } else {
              e[ADDITION] = e.attrChange = 0;
            }
            dispatchEvent.call(this, e);
          },
          onPropertyChange = function (e) {
            // jshint eqnull:true
            var
              node = e.currentTarget,
              superSecret = node[EXPANDO_UID],
              propertyName = e.propertyName,
              event
            ;
            if (superSecret.hasOwnProperty(propertyName)) {
              superSecret = superSecret[propertyName];
              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
              event.attrName = superSecret.name;
              event.prevValue = superSecret.value || null;
              event.newValue = (superSecret.value = node[propertyName] || null);
              if (event.prevValue == null) {
                event[ADDITION] = event.attrChange = 0;
              } else {
                event[MODIFICATION] = event.attrChange = 1;
              }
              dispatchEvent.call(node, event);
            }
          }
        ;
        descriptor.value = function (type, handler, capture) {
          if (
            type === DOM_ATTR_MODIFIED &&
            this[ATTRIBUTE_CHANGED_CALLBACK] &&
            this.setAttribute !== patchedSetAttribute
          ) {
            this[EXPANDO_UID] = {
              className: {
                name: 'class',
                value: this.className
              }
            };
            this.setAttribute = patchedSetAttribute;
            this.removeAttribute = patchedRemoveAttribute;
            addEventListener.call(this, 'propertychange', onPropertyChange);
          }
          addEventListener.call(this, type, handler, capture);
        };
        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
      }());
    } else if (!MutationObserver) {
      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
      documentElement.setAttribute(EXPANDO_UID, 1);
      documentElement.removeAttribute(EXPANDO_UID);
      if (doesNotSupportDOMAttrModified) {
        onSubtreeModified = function (e) {
          var
            node = this,
            oldAttributes,
            newAttributes,
            key
          ;
          if (node === e.target) {
            oldAttributes = node[EXPANDO_UID];
            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
            for (key in newAttributes) {
              if (!(key in oldAttributes)) {
                // attribute was added
                return callDOMAttrModified(
                  0,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  ADDITION
                );
              } else if (newAttributes[key] !== oldAttributes[key]) {
                // attribute was changed
                return callDOMAttrModified(
                  1,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  MODIFICATION
                );
              }
            }
            // checking if it has been removed
            for (key in oldAttributes) {
              if (!(key in newAttributes)) {
                // attribute removed
                return callDOMAttrModified(
                  2,
                  node,
                  key,
                  oldAttributes[key],
                  newAttributes[key],
                  REMOVAL
                );
              }
            }
          }
        };
        callDOMAttrModified = function (
          attrChange,
          currentTarget,
          attrName,
          prevValue,
          newValue,
          action
        ) {
          var e = {
            attrChange: attrChange,
            currentTarget: currentTarget,
            attrName: attrName,
            prevValue: prevValue,
            newValue: newValue
          };
          e[action] = attrChange;
          onDOMAttrModified(e);
        };
        getAttributesMirror = function (node) {
          for (var
            attr, name,
            result = {},
            attributes = node.attributes,
            i = 0, length = attributes.length;
            i < length; i++
          ) {
            attr = attributes[i];
            name = attr.name;
            if (name !== 'setAttribute') {
              result[name] = attr.value;
            }
          }
          return result;
        };
      }
    }
  
    // set as enumerable, writable and configurable
    document[REGISTER_ELEMENT] = function registerElement(type, options) {
      upperType = type.toUpperCase();
      if (setListener) {
        // only first time document.registerElement is used
        // we need to set this listener
        // setting it by default might slow down for no reason
        setListener = false;
        if (MutationObserver) {
          observer = (function(attached, detached){
            function checkEmAll(list, callback) {
              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
            }
            return new MutationObserver(function (records) {
              for (var
                current, node, newValue,
                i = 0, length = records.length; i < length; i++
              ) {
                current = records[i];
                if (current.type === 'childList') {
                  checkEmAll(current.addedNodes, attached);
                  checkEmAll(current.removedNodes, detached);
                } else {
                  node = current.target;
                  if (notFromInnerHTMLHelper &&
                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
                      current.attributeName !== 'style') {
                    newValue = getAttribute.call(node, current.attributeName);
                    if (newValue !== current.oldValue) {
                      node[ATTRIBUTE_CHANGED_CALLBACK](
                        current.attributeName,
                        current.oldValue,
                        newValue
                      );
                    }
                  }
                }
              }
            });
          }(executeAction(ATTACHED), executeAction(DETACHED)));
          observe = function (node) {
            observer.observe(
              node,
              {
                childList: true,
                subtree: true
              }
            );
            return node;
          };
          observe(document);
          if (attachShadow) {
            HTMLElementPrototype.attachShadow = function () {
              return observe(attachShadow.apply(this, arguments));
            };
          }
        } else {
          asapQueue = [];
          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
        }
  
        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
  
        HTMLElementPrototype.cloneNode = function (deep) {
          var
            node = cloneNode.call(this, !!deep),
            i = getTypeIndex(node)
          ;
          if (-1 < i) patch(node, protos[i]);
          if (deep && query.length) loopAndSetup(node.querySelectorAll(query));
          return node;
        };
      }
  
      if (justSetup) return (justSetup = false);
  
      if (-2 < (
        indexOf.call(types, PREFIX_IS + upperType) +
        indexOf.call(types, PREFIX_TAG + upperType)
      )) {
        throwTypeError(type);
      }
  
      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
        throw new Error('The type ' + type + ' is invalid');
      }
  
      var
        constructor = function () {
          return extending ?
            document.createElement(nodeName, upperType) :
            document.createElement(nodeName);
        },
        opt = options || OP,
        extending = hOP.call(opt, EXTENDS),
        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
        upperType,
        i
      ;
  
      if (extending && -1 < (
        indexOf.call(types, PREFIX_TAG + nodeName)
      )) {
        throwTypeError(nodeName);
      }
  
      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
  
      query = query.concat(
        query.length ? ',' : '',
        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
      );
  
      constructor.prototype = (
        protos[i] = hOP.call(opt, 'prototype') ?
          opt.prototype :
          create(HTMLElementPrototype)
      );
  
      if (query.length) loopAndVerify(
        document.querySelectorAll(query),
        ATTACHED
      );
  
      return constructor;
    };
  
    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
      var
        is = getIs(typeExtension),
        node = is ?
          createElement.call(document, localName, secondArgument(is)) :
          createElement.call(document, localName),
        name = '' + localName,
        i = indexOf.call(
          types,
          (is ? PREFIX_IS : PREFIX_TAG) +
          (is || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (is) {
        node.setAttribute('is', is = is.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), is);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    });
  
  }
  
  function ASAP() {
    var queue = asapQueue.splice(0, asapQueue.length);
    asapTimer = 0;
    while (queue.length) {
      queue.shift().call(
        null, queue.shift()
      );
    }
  }
  
  function loopAndVerify(list, action) {
    for (var i = 0, length = list.length; i < length; i++) {
      verifyAndSetupAndAction(list[i], action);
    }
  }
  
  function loopAndSetup(list) {
    for (var i = 0, length = list.length, node; i < length; i++) {
      node = list[i];
      patch(node, protos[getTypeIndex(node)]);
    }
  }
  
  function executeAction(action) {
    return function (node) {
      if (isValidNode(node)) {
        verifyAndSetupAndAction(node, action);
        if (query.length) loopAndVerify(
          node.querySelectorAll(query),
          action
        );
      }
    };
  }
  
  function getTypeIndex(target) {
    var
      is = getAttribute.call(target, 'is'),
      nodeName = target.nodeName.toUpperCase(),
      i = indexOf.call(
        types,
        is ?
            PREFIX_IS + is.toUpperCase() :
            PREFIX_TAG + nodeName
      )
    ;
    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
  }
  
  function isInQSA(name, type) {
    return -1 < query.indexOf(name + '[is="' + type + '"]');
  }
  
  function onDOMAttrModified(e) {
    var
      node = e.currentTarget,
      attrChange = e.attrChange,
      attrName = e.attrName,
      target = e.target,
      addition = e[ADDITION] || 2,
      removal = e[REMOVAL] || 3
    ;
    if (notFromInnerHTMLHelper &&
        (!target || target === node) &&
        node[ATTRIBUTE_CHANGED_CALLBACK] &&
        attrName !== 'style' && (
          e.prevValue !== e.newValue ||
          // IE9, IE10, and Opera 12 gotcha
          e.newValue === '' && (
            attrChange === addition ||
            attrChange === removal
          )
    )) {
      node[ATTRIBUTE_CHANGED_CALLBACK](
        attrName,
        attrChange === addition ? null : e.prevValue,
        attrChange === removal ? null : e.newValue
      );
    }
  }
  
  function onDOMNode(action) {
    var executor = executeAction(action);
    return function (e) {
      asapQueue.push(executor, e.target);
      if (asapTimer) clearTimeout(asapTimer);
      asapTimer = setTimeout(ASAP, 1);
    };
  }
  
  function onReadyStateChange(e) {
    if (dropDomContentLoaded) {
      dropDomContentLoaded = false;
      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    }
    if (query.length) loopAndVerify(
      (e.target || document).querySelectorAll(query),
      e.detail === DETACHED ? DETACHED : ATTACHED
    );
    if (IE8) purge();
  }
  
  function patchedSetAttribute(name, value) {
    // jshint validthis:true
    var self = this;
    setAttribute.call(self, name, value);
    onSubtreeModified.call(self, {target: self});
  }
  
  function setupNode(node, proto) {
    setPrototype(node, proto);
    if (observer) {
      observer.observe(node, attributesObserver);
    } else {
      if (doesNotSupportDOMAttrModified) {
        node.setAttribute = patchedSetAttribute;
        node[EXPANDO_UID] = getAttributesMirror(node);
        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
      }
      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
    }
    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
      node.created = true;
      node[CREATED_CALLBACK]();
      node.created = false;
    }
  }
  
  function purge() {
    for (var
      node,
      i = 0,
      length = targets.length;
      i < length; i++
    ) {
      node = targets[i];
      if (!documentElement.contains(node)) {
        length--;
        targets.splice(i--, 1);
        verifyAndSetupAndAction(node, DETACHED);
      }
    }
  }
  
  function throwTypeError(type) {
    throw new Error('A ' + type + ' type is already registered');
  }
  
  function verifyAndSetupAndAction(node, action) {
    var
      fn,
      i = getTypeIndex(node)
    ;
    if (-1 < i) {
      patchIfNotAlready(node, protos[i]);
      i = 0;
      if (action === ATTACHED && !node[ATTACHED]) {
        node[DETACHED] = false;
        node[ATTACHED] = true;
        i = 1;
        if (IE8 && indexOf.call(targets, node) < 0) {
          targets.push(node);
        }
      } else if (action === DETACHED && !node[DETACHED]) {
        node[ATTACHED] = false;
        node[DETACHED] = true;
        i = 1;
      }
      if (i && (fn = node[action + CALLBACK])) fn.call(node);
    }
  }
  
  
  
  // V1 in da House!
  function CustomElementRegistry() {}
  
  CustomElementRegistry.prototype = {
    constructor: CustomElementRegistry,
    // a workaround for the stubborn WebKit
    define: usableCustomElements ?
      function (name, Class, options) {
        if (options) {
          CERDefine(name, Class, options);
        } else {
          var NAME = name.toUpperCase();
          constructors[NAME] = {
            constructor: Class,
            create: [NAME]
          };
          nodeNames.set(Class, NAME);
          customElements.define(name, Class);
        }
      } :
      CERDefine,
    get: usableCustomElements ?
      function (name) {
        return customElements.get(name) || get(name);
      } :
      get,
    whenDefined: usableCustomElements ?
      function (name) {
        return Promise.race([
          customElements.whenDefined(name),
          whenDefined(name)
        ]);
      } :
      whenDefined
  };
  
  function CERDefine(name, Class, options) {
    var
      is = options && options[EXTENDS] || '',
      CProto = Class.prototype,
      proto = create(CProto),
      attributes = Class.observedAttributes || empty,
      definition = {prototype: proto}
    ;
    // TODO: is this needed at all since it's inherited?
    // defineProperty(proto, 'constructor', {value: Class});
    safeProperty(proto, CREATED_CALLBACK, {
        value: function () {
          if (justCreated) justCreated = false;
          else if (!this[DRECEV1]) {
            this[DRECEV1] = true;
            new Class(this);
            if (CProto[CREATED_CALLBACK])
              CProto[CREATED_CALLBACK].call(this);
            var info = constructors[nodeNames.get(Class)];
            if (!usableCustomElements || info.create.length > 1) {
              notifyAttributes(this);
            }
          }
      }
    });
    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
      value: function (name) {
        if (-1 < indexOf.call(attributes, name))
          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
      }
    });
    if (CProto[CONNECTED_CALLBACK]) {
      safeProperty(proto, ATTACHED_CALLBACK, {
        value: CProto[CONNECTED_CALLBACK]
      });
    }
    if (CProto[DISCONNECTED_CALLBACK]) {
      safeProperty(proto, DETACHED_CALLBACK, {
        value: CProto[DISCONNECTED_CALLBACK]
      });
    }
    if (is) definition[EXTENDS] = is;
    name = name.toUpperCase();
    constructors[name] = {
      constructor: Class,
      create: is ? [is, secondArgument(name)] : [name]
    };
    nodeNames.set(Class, name);
    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
    whenDefined(name);
    waitingList[name].r();
  }
  
  function get(name) {
    var info = constructors[name.toUpperCase()];
    return info && info.constructor;
  }
  
  function getIs(options) {
    return typeof options === 'string' ?
        options : (options && options.is || '');
  }
  
  function notifyAttributes(self) {
    var
      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
      attributes = callback ? self.attributes : empty,
      i = attributes.length,
      attribute
    ;
    while (i--) {
      attribute =  attributes[i]; // || attributes.item(i);
      callback.call(
        self,
        attribute.name || attribute.nodeName,
        null,
        attribute.value || attribute.nodeValue
      );
    }
  }
  
  function whenDefined(name) {
    name = name.toUpperCase();
    if (!(name in waitingList)) {
      waitingList[name] = {};
      waitingList[name].p = new Promise(function (resolve) {
        waitingList[name].r = resolve;
      });
    }
    return waitingList[name].p;
  }
  
  function polyfillV1() {
    if (customElements) delete window.customElements;
    defineProperty(window, 'customElements', {
      configurable: true,
      value: new CustomElementRegistry()
    });
    defineProperty(window, 'CustomElementRegistry', {
      configurable: true,
      value: CustomElementRegistry
    });
    for (var
      patchClass = function (name) {
        var Class = window[name];
        if (Class) {
          window[name] = function CustomElementsV1(self) {
            var info, isNative;
            if (!self) self = this;
            if (!self[DRECEV1]) {
              justCreated = true;
              info = constructors[nodeNames.get(self.constructor)];
              isNative = usableCustomElements && info.create.length === 1;
              self = isNative ?
                Reflect.construct(Class, empty, info.constructor) :
                document.createElement.apply(document, info.create);
              self[DRECEV1] = true;
              justCreated = false;
              if (!isNative) notifyAttributes(self);
            }
            return self;
          };
          window[name].prototype = Class.prototype;
          try {
            Class.prototype.constructor = window[name];
          } catch(WebKit) {
            fixGetClass = true;
            defineProperty(Class, DRECEV1, {value: window[name]});
          }
        }
      },
      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
      i = Classes.length;
      i--;
      patchClass(Classes[i])
    ) {}
    (document.createElement = function (name, options) {
      var is = getIs(options);
      return is ?
        patchedCreateElement.call(this, name, secondArgument(is)) :
        patchedCreateElement.call(this, name);
    });
    if (!V0) {
      justSetup = true;
      document[REGISTER_ELEMENT]('');
    }
  }
  
  // if customElements is not there at all
  if (!customElements || polyfill === 'force') polyfillV1();
  else {
    // if available test extends work as expected
    try {
      (function (DRE, options, name) {
        options[EXTENDS] = 'a';
        DRE.prototype = create(HTMLAnchorElement.prototype);
        DRE.prototype.constructor = DRE;
        window.customElements.define(name, DRE, options);
        if (
          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
        ) {
          throw options;
        }
      }(
        function DRE() {
          return Reflect.construct(HTMLAnchorElement, [], DRE);
        },
        {},
        'document-register-element-a'
      ));
    } catch(o_O) {
      // or force the polyfill if not
      // and keep internal original reference
      polyfillV1();
    }
  }
  
  try {
    createElement.call(document, 'a', 'a');
  } catch(FireFox) {
    secondArgument = function (is) {
      return {is: is.toLowerCase()};
    };
  }
  
}

exports.installCustomElements = installCustomElements;


},{}],4:[function(require,module,exports){
'use strict';

/**
 * Constructs a ES6/Promises A+ Promise instance.
 *
 * @constructor
 * @param {function(function(*=), function (*=))} resolver
 */
function Promise(resolver) {
  if (!(this instanceof Promise)) {
    throw new TypeError('Constructor Promise requires `new`');
  }
  if (!isFunction(resolver)) {
    throw new TypeError('Must pass resolver function');
  }

  /**
   * @type {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise}
   * @private
   */
  this._state = PendingPromise;

  /**
   * @type {*}
   * @private
   */
  this._value = [];

  /**
   * @type {boolean}
   * @private
   */
  this._isChainEnd = true;

  doResolve(
    this,
    adopter(this, FulfilledPromise),
    adopter(this, RejectedPromise),
    { then: resolver }
  );
}

/****************************
  Public Instance Methods
 ****************************/

/**
 * Creates a new promise instance that will receive the result of this promise
 * as inputs to the onFulfilled or onRejected callbacks.
 *
 * @param {function(*)} onFulfilled
 * @param {function(*)} onRejected
 */
Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = isFunction(onFulfilled) ? onFulfilled : void 0;
  onRejected = isFunction(onRejected) ? onRejected : void 0;

  if (onFulfilled || onRejected) {
    this._isChainEnd = false;
  }

  return this._state(
    this._value,
    onFulfilled,
    onRejected
  );
};

/**
 * Creates a new promise that will handle the rejected state of this promise.
 *
 * @param {function(*)} onRejected
 * @returns {!Promise}
 */
Promise.prototype.catch = function(onRejected) {
  return this.then(void 0, onRejected);
};

/****************************
  Public Static Methods
 ****************************/

/**
 * Creates a fulfilled Promise of value. If value is itself a then-able,
 * resolves with the then-able's value.
 *
 * @this {!Promise}
 * @param {*=} value
 * @returns {!Promise}
 */
Promise.resolve = function(value) {
  var Constructor = this;
  var promise;

  if (isObject(value) && value instanceof this) {
    promise = value;
  } else {
    promise = new Constructor(function(resolve) {
      resolve(value);
    });
  }

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a rejected Promise of reason.
 *
 * @this {!Promise}
 * @param {*=} reason
 * @returns {!Promise}
 */
Promise.reject = function(reason) {
  var Constructor = this;
  var promise = new Constructor(function(_, reject) {
    reject(reason);
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve with an array of the values of the
 * passed in promises. If any promise rejects, the returned promise will
 * reject.
 *
 * @this {!Promise}
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.all = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    var length = promises.length;
    var values = new Array(length);

    if (length === 0) {
      return resolve(values);
    }

    each(promises, function(promise, index) {
      Constructor.resolve(promise).then(function(value) {
        values[index] = value;
        if (--length === 0) {
          resolve(values);
        }
      }, reject);
    });
  });

  return /** @type {!Promise} */(promise);
};

/**
 * Creates a Promise that will resolve or reject based on the first
 * resolved or rejected promise.
 *
 * @this {!Promise}
 * @param {!Array<Promise|*>} promises
 * @returns {!Promise}
 */
Promise.race = function(promises) {
  var Constructor = this;
  var promise = new Constructor(function(resolve, reject) {
    for (var i = 0; i < promises.length; i++) {
      Constructor.resolve(promises[i]).then(resolve, reject);
    }
  });

  return /** @type {!Promise} */(promise);
};

var onPossiblyUnhandledRejection = function(reason, promise) {
  throw reason;
};

/**
 * An internal use static function.
 */
Promise._overrideUnhandledExceptionHandler = function(handler) {
  onPossiblyUnhandledRejection = handler;
};

/****************************
  Private functions
 ****************************/

/**
 * The Fulfilled Promise state. Calls onFulfilled with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onFulfilled, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} value The current promise's resolved value.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} unused
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Fulfilled state from the
 *     Pending state.
 * @returns {!Promise}
 */
function FulfilledPromise(value, onFulfilled, unused, deferred) {
  if (!onFulfilled) {
    deferredAdopt(deferred, FulfilledPromise, value);
    return this;
  }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onFulfilled, value));
  return deferred.promise;
}

/**
 * The Rejected Promise state. Calls onRejected with the resolved value of
 * this promise, creating a new promise.
 *
 * If there is no onRejected, returns the current promise to avoid an promise
 * instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} reason The current promise's rejection reason.
 * @param {function(*=)=} unused
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Rejected state from the
 *     Pending state.
 * @returns {!Promise}
 */
function RejectedPromise(reason, unused, onRejected, deferred) {
  if (!onRejected) {
    deferredAdopt(deferred, RejectedPromise, reason);
    return this;
  }
  if (!deferred) {
    deferred = new Deferred(this.constructor);
  }
  defer(tryCatchDeferred(deferred, onRejected, reason));
  return deferred.promise;
}

/**
 * The Pending Promise state. Eventually calls onFulfilled once the promise has
 * resolved, or onRejected once the promise rejects.
 *
 * If there is no onFulfilled and no onRejected, returns the current promise to
 * avoid an promise instance.
 *
 * @this {!Promise} The current promise
 * @param {*=} queue The current promise's pending promises queue.
 * @param {function(*=)=} onFulfilled
 * @param {function(*=)=} onRejected
 * @param {Deferred} deferred A deferred object that holds a promise and its
 *     resolve and reject functions. It IS NOT passed when called from
 *     Promise#then to save an object instance (since we may return the current
 *     promise). It IS passed in when adopting the Pending state from the
 *     Pending state of another promise.
 * @returns {!Promise}
 */
function PendingPromise(queue, onFulfilled, onRejected, deferred) {
  if (!deferred) {
    if (!onFulfilled && !onRejected) { return this; }
    deferred = new Deferred(this.constructor);
  }
  queue.push({
    deferred: deferred,
    onFulfilled: onFulfilled || deferred.resolve,
    onRejected: onRejected || deferred.reject
  });
  return deferred.promise;
}

/**
 * Constructs a deferred instance that holds a promise and its resolve and
 * reject functions.
 *
 * @constructor
 */
function Deferred(Promise) {
  var deferred = this;
  /** @type {!Promise} */
  this.promise = new Promise(function(resolve, reject) {
    /** @type {function(*=)} */
    deferred.resolve = resolve;

    /** @type {function(*=)} */
    deferred.reject = reject;
  });
  return deferred;
}

/**
 * Transitions the state of promise to another state. This is only ever called
 * on with a promise that is currently in the Pending state.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function adopt(promise, state, value, adoptee) {
  var queue = promise._value;
  promise._state = state;
  promise._value = value;

  if (adoptee && state === PendingPromise) {
    adoptee._state(value, void 0, void 0, {
      promise: promise,
      resolve: void 0,
      reject: void 0
    });
  }

  for (var i = 0; i < queue.length; i++) {
    var next = queue[i];
    promise._state(
      value,
      next.onFulfilled,
      next.onRejected,
      next.deferred
    );
  }
  queue.length = 0;

  // Determine if this rejected promise will be "handled".
  if (state === RejectedPromise && promise._isChainEnd) {
    setTimeout(function() {
      if (promise._isChainEnd) {
        onPossiblyUnhandledRejection(value, promise);
      }
    }, 0);
  }
}

/**
 * A partial application of adopt.
 *
 * @param {!Promise} promise
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @returns {function(*=)}
 */
function adopter(promise, state) {
  return function(value) {
    adopt(promise, state, value);
  };
}

/**
 * Updates a deferred promises state. Necessary for updating an adopting
 * promise's state when the adoptee resolves.
 *
 * @param {?Deferred} deferred
 * @param {function(this:Promise,*=,function(*=),function(*=),Deferred):!Promise} state
 * @param {*=} value
 */
function deferredAdopt(deferred, state, value) {
  if (deferred) {
    var promise = deferred.promise;
    promise._state = state;
    promise._value = value;
  }
}

/**
 * A no-op function to prevent double resolving.
 */
function noop() {}

/**
 * Tests if fn is a Function
 *
 * @param {*} fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === 'function';
}

/**
 * Tests if fn is an Object
 *
 * @param {*} obj
 * @returns {boolean}
 */
function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Iterates over each element of an array, calling the iterator with the
 * element and its index.
 *
 * @param {!Array} collection
 * @param {function(*=,number)} iterator
 */
function each(collection, iterator) {
  for (var i = 0; i < collection.length; i++) {
    iterator(collection[i], i);
  }
}

/**
 * Creates a function that will attempt to resolve the deferred with the return
 * of fn. If any error is raised, rejects instead.
 *
 * @param {!Deferred} deferred
 * @param {function(*=)} fn
 * @param {*} arg
 * @returns {function()}
 */
function tryCatchDeferred(deferred, fn, arg) {
  var promise = deferred.promise;
  var resolve = deferred.resolve;
  var reject = deferred.reject;
  return function() {
    try {
      var result = fn(arg);
      doResolve(promise, resolve, reject, result, result);
    } catch (e) {
      reject(e);
    }
  };
}

/**
 * Queues and executes multiple deferred functions on another run loop.
 */
var defer = (function() {
  /**
   * Defers fn to another run loop.
   */
  var scheduleFlush;
  if (typeof window !== 'undefined' && window.postMessage) {
    window.addEventListener('message', flush);
    scheduleFlush = function() {
      window.postMessage('macro-task', '*');
    };
  } else {
    scheduleFlush = function() {
      setTimeout(flush, 0);
    };
  }

  var queue = new Array(16);
  var length = 0;

  function flush() {
    for (var i = 0; i < length; i++) {
      var fn = queue[i];
      queue[i] = null;
      fn();
    }
    length = 0;
  }

  /**
   * @param {function()} fn
   */
  function defer(fn) {
    if (length === 0) { scheduleFlush(); }
    queue[length++] = fn;
  }

  return defer;
})();

/**
 * The Promise resolution procedure.
 * https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
 *
 * @param {!Promise} promise
 * @param {function(*=)} resolve
 * @param {function(*=)} reject
 * @param {*} value
 * @param {*=} context
 */
function doResolve(promise, resolve, reject, value, context) {
  var _reject = reject;
  var then;
  var _resolve;
  try {
    if (value === promise) {
      throw new TypeError('Cannot fulfill promise with itself');
    }
    var isObj = isObject(value);
    if (isObj && value instanceof promise.constructor) {
      adopt(promise, value._state, value._value, value);
    } else if (isObj && (then = value.then) && isFunction(then)) {
      _resolve = function(value) {
        _resolve = _reject = noop;
        doResolve(promise, resolve, reject, value, value);
      };
      _reject = function(reason) {
        _resolve = _reject = noop;
        reject(reason);
      };
      then.call(
        context,
        function(value) { _resolve(value); },
        function(reason) { _reject(reason); }
      );
    } else {
      resolve(value);
    }
  } catch (e) {
    _reject(e);
  }
}

module.exports = Promise;

},{}],5:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Key string in an action arguments map for an unparsed object literal string.
 *
 * E.g. for the action in <p on="tap:AMP.setState({foo: 'bar'})",
 * then `args[RAW_OBJECT_ARGS_KEY]` is the string "{foo: 'bar'}".
 *
 * The action service delegates parsing of object literals to the corresponding
 * extension (in the example above, amp-bind).
 *
 * @see ./service/action-impl.ActionInfoDef
 * @const {string}
 */
var RAW_OBJECT_ARGS_KEY = exports.RAW_OBJECT_ARGS_KEY = '__AMP_OBJECT_STRING__';

/**
 * Trust level of an action.
 *
 * Corresponds to degree of user intent, i.e. events triggered with strong
 * user intent have high trust.
 *
 * @enum {number}
 */
var ActionTrust = exports.ActionTrust = {
  LOW: 1,
  HIGH: 100
};

},{}],6:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _promise = require('./utils/promise');

var _services = require('./services');

var _log = require('./log');

var _curve = require('./curve');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG_ = 'Animation';

var NOOP_CALLBACK = function NOOP_CALLBACK() {};

/**
 * The animation class allows construction of arbitrary animation processes.
 * The main method is "add" that adds a segment of animation at particular
 * time offset (delay) and duration. All animation segments are simply functions
 * of type Transition which are iterated from 0 to 1 in animation frames to
 * achieve the desired effect.
 */

var Animation = exports.Animation = function () {
  _createClass(Animation, null, [{
    key: 'animate',


    /**
     * Creates and starts animation with a single segment. Returns AnimationPlayer
     * object that can be used to monitor or control animation.
     *
     * @param {!Node} contextNode The context node.
     * @param {!TransitionDef<?>} transition Transition to animate.
     * @param {./time.timeDef} duration Duration in milliseconds.
     * @param {(!./curve.CurveDef|string)=} opt_curve Optional curve to use for
     *   animation. Default is the linear animation.
     * @return {!AnimationPlayer}
     */
    value: function animate(contextNode, transition, duration, opt_curve) {
      return new Animation(contextNode).setCurve(opt_curve).add(0, transition, 1).start(duration);
    }

    /**
     * @param {!Node} contextNode
     * @param {!./service/vsync-impl.Vsync=} opt_vsync
     */

  }]);

  function Animation(contextNode, opt_vsync) {
    _classCallCheck(this, Animation);

    /** @private @const {!Node} */
    this.contextNode_ = contextNode;

    /** @private @const {!./service/vsync-impl.Vsync} */
    this.vsync_ = opt_vsync || _services.Services.vsyncFor(self);

    /** @private {?./curve.CurveDef} */
    this.curve_ = null;

    /**
     * @private @const {!Array<!SegmentDef>}
     */
    this.segments_ = [];
  }

  /**
   * Sets the default curve for the animation. Each segment is allowed to have
   * its own curve, but this curve will be used if a segment doesn't specify
   * its own.
   * @param {!./curve.CurveDef|string|undefined} curve
   * @return {!Animation}
   */


  _createClass(Animation, [{
    key: 'setCurve',
    value: function setCurve(curve) {
      if (curve) {
        this.curve_ = (0, _curve.getCurve)(curve);
      }
      return this;
    }

    /**
     * Adds a segment to the animation. Each segment starts at offset (delay) and
     * runs for a portion of the overall animation (duration). Note that both
     * delay and duration and normtimeDef types which accept values from 0 to 1.
     * Optionally, the time is pushed through a curve. If curve is not specified,
     * the default animation curve will be used. The specified transition is
     * animated over the specified duration from 0 to 1.
     *
     * @param {./time.normtimeDef} delay
     * @param {!TransitionDef<?>} transition
     * @param {./time.normtimeDef} duration
     * @param {(!./curve.CurveDef|string)=} opt_curve
     * @return {!Animation}
     */

  }, {
    key: 'add',
    value: function add(delay, transition, duration, opt_curve) {
      this.segments_.push({
        delay: delay,
        func: transition,
        duration: duration,
        curve: (0, _curve.getCurve)(opt_curve)
      });
      return this;
    }

    /**
     * Starts the animation and returns the AnimationPlayer object that can be
     * used to monitor and control the animation.
     *
     * @param {./time.timeDef} duration Absolute time in milliseconds.
     * @return {!AnimationPlayer}
     */

  }, {
    key: 'start',
    value: function start(duration) {
      var player = new AnimationPlayer(this.vsync_, this.contextNode_, this.segments_, this.curve_, duration);
      return player;
    }
  }]);

  return Animation;
}();

/**
 * AnimationPlayer allows tracking and monitoring of the running animation.
 * Most importantly it exposes methods "then" and "thenAlways" that have the
 * semantics of a Promise and signal when the animation completed or failed.
 * Additionally, it exposes the method "halt" which allows to stop/reset the
 * animation.
 * // TODO(@cramforce) Actually fully implement.
 * implements {IThenable}
 */


var AnimationPlayer = function () {

  /**
   * @param {!./service/vsync-impl.Vsync} vsync
   * @param {!Node} contextNode
   * @param {!Array<!SegmentDef>} segments
   * @param {?./curve.CurveDef} defaultCurve
   * @param {./time.timeDef} duration
   */
  function AnimationPlayer(vsync, contextNode, segments, defaultCurve, duration) {
    _classCallCheck(this, AnimationPlayer);

    /** @private @const {!./service/vsync-impl.Vsync} */
    this.vsync_ = vsync;

    /** @private @const {!Node} */
    this.contextNode_ = contextNode;

    /** @private @const {!Array<!SegmentRuntimeDef>} */
    this.segments_ = [];
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      this.segments_.push({
        delay: segment.delay,
        func: segment.func,
        duration: segment.duration,
        curve: segment.curve || defaultCurve,
        started: false,
        completed: false
      });
    }

    /** @private @const */
    this.duration_ = duration;

    /** @private {./time.timeDef} */
    this.startTime_ = Date.now();

    /** @private {./time.normtimeDef} */
    // this.normLinearTime_ = 0;

    /** @private {./time.normtimeDef} */
    // this.normTime_ = 0;

    /** @private {boolean} */
    this.running_ = true;

    /** @private {!Object<string, *>} */
    this.state_ = {};

    var deferred = new _promise.Deferred();

    /** @const @private */
    this.promise_ = deferred.promise;

    /** @const @private */
    this.resolve_ = deferred.resolve;

    /** @const @private */
    this.reject_ = deferred.reject;

    /** @const */
    this.task_ = this.vsync_.createAnimTask(this.contextNode_, {
      mutate: this.stepMutate_.bind(this)
    });

    if (this.vsync_.canAnimate(this.contextNode_)) {
      this.task_(this.state_);
    } else {
      (0, _log.dev)().warn(TAG_, 'cannot animate');
      this.complete_( /* success */false, /* dir */0);
    }
  }

  /**
   * Chains to the animation's promise that will resolve when the animation has
   * completed or will reject if animation has failed or was interrupted.
   * @param {!Function=} opt_resolve
   * @param {!Function=} opt_reject
   * @return {!Promise}
   */


  _createClass(AnimationPlayer, [{
    key: 'then',
    value: function then(opt_resolve, opt_reject) {
      if (!opt_resolve && !opt_reject) {
        return this.promise_;
      }
      return this.promise_.then(opt_resolve, opt_reject);
    }

    /**
     * Callback for regardless whether the animation succeeds or fails.
     * @param {!Function=} opt_callback
     * @return {!Promise}
     */

  }, {
    key: 'thenAlways',
    value: function thenAlways(opt_callback) {
      var callback = opt_callback || NOOP_CALLBACK;
      return this.then(callback, callback);
    }

    /**
     * Halts the animation. Depending on the opt_dir value, the following actions
     * can be performed:
     * 0: No action. The state will be as at the moment of halting (default)
     * 1: Final state. Transitionable will be set to state = 1.
     * -1: Reset state. Transitionable will be reset to state = 0.
     * The animation's promise will be rejected since the transition has been
     * interrupted.
     * @param {number=} opt_dir
     */

  }, {
    key: 'halt',
    value: function halt(opt_dir) {
      this.complete_( /* success */false, /* dir */opt_dir || 0);
    }

    /**
     * @param {boolean} success
     * @param {number} dir
     * @private
     */

  }, {
    key: 'complete_',
    value: function complete_(success, dir) {
      if (!this.running_) {
        return;
      }
      this.running_ = false;
      if (dir != 0) {
        // Sort in the completion order.
        if (this.segments_.length > 1) {
          this.segments_.sort(function (s1, s2) {
            return s1.delay + s1.duration - (s2.delay + s2.duration);
          });
        }
        try {
          if (dir > 0) {
            // Natural order - all set to 1.
            for (var i = 0; i < this.segments_.length; i++) {
              this.segments_[i].func(1, true);
            }
          } else {
            // Reverse order - all set to 0.
            for (var _i = this.segments_.length - 1; _i >= 0; _i--) {
              this.segments_[_i].func(0, false);
            }
          }
        } catch (e) {
          (0, _log.dev)().error(TAG_, 'completion failed: ' + e, e);
          success = false;
        }
      }
      if (success) {
        this.resolve_();
      } else {
        this.reject_();
      }
    }

    /**
     * @param {!Object<string, *>} unusedState
     * @private
     */

  }, {
    key: 'stepMutate_',
    value: function stepMutate_(unusedState) {
      if (!this.running_) {
        return;
      }
      var currentTime = Date.now();
      var normLinearTime = Math.min((currentTime - this.startTime_) / this.duration_, 1);

      // Start segments due to be started
      for (var i = 0; i < this.segments_.length; i++) {
        var segment = this.segments_[i];
        if (!segment.started && normLinearTime >= segment.delay) {
          segment.started = true;
        }
      }

      // Execute all pending segments.
      for (var _i2 = 0; _i2 < this.segments_.length; _i2++) {
        var _segment = this.segments_[_i2];
        if (!_segment.started || _segment.completed) {
          continue;
        }
        this.mutateSegment_(_segment, normLinearTime);
      }

      // Complete or start next cycle.
      if (normLinearTime == 1) {
        this.complete_( /* success */true, /* dir */0);
      } else {
        if (this.vsync_.canAnimate(this.contextNode_)) {
          this.task_(this.state_);
        } else {
          (0, _log.dev)().warn(TAG_, 'cancel animation');
          this.complete_( /* success */false, /* dir */0);
        }
      }
    }

    /**
     * @param {!SegmentRuntimeDef} segment
     * @param {number} totalLinearTime
     */

  }, {
    key: 'mutateSegment_',
    value: function mutateSegment_(segment, totalLinearTime) {
      var normLinearTime = void 0;
      var normTime = void 0;
      if (segment.duration > 0) {
        normLinearTime = Math.min((totalLinearTime - segment.delay) / segment.duration, 1);
        normTime = normLinearTime;
        if (segment.curve && normTime != 1) {
          try {
            normTime = segment.curve(normLinearTime);
          } catch (e) {
            (0, _log.dev)().error(TAG_, 'step curve failed: ' + e, e);
            this.complete_( /* success */false, /* dir */0);
            return;
          }
        }
      } else {
        normLinearTime = 1;
        normTime = 1;
      }
      if (normLinearTime == 1) {
        segment.completed = true;
      }
      try {
        segment.func(normTime, segment.completed);
      } catch (e) {
        (0, _log.dev)().error(TAG_, 'step mutate failed: ' + e, e);
        this.complete_( /* success */false, /* dir */0);
        return;
      }
    }
  }]);

  return AnimationPlayer;
}();

/**
 * @typedef {{
 *   delay: ./time.normtimeDef,
 *   func: !TransitionDef,
 *   duration: ./time.normtimeDef,
 *   curve: ?./curve.CurveDef
 * }}
 */


var SegmentDef = void 0;

/**
 * @typedef {{
 *   delay: ./time.normtimeDef,
 *   func: !TransitionDef,
 *   duration: ./time.normtimeDef,
 *   curve: ?./curve.CurveDef,
 *   started: boolean,
 *   completed: boolean
 * }}
 */
var SegmentRuntimeDef = void 0;

},{"./curve":9,"./log":19,"./services":34,"./utils/promise":48}],7:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Allows for runtime configuration. Internally, the runtime should
 * use the src/config.js module for various constants. We can use the
 * AMP_CONFIG global to translate user-defined configurations to this
 * module.
 * @type {!Object<string, string>}
 */
var env = self.AMP_CONFIG || {};

var thirdPartyFrameRegex = typeof env['thirdPartyFrameRegex'] == 'string' ? new RegExp(env['thirdPartyFrameRegex']) : env['thirdPartyFrameRegex'];

var cdnProxyRegex = typeof env['cdnProxyRegex'] == 'string' ? new RegExp(env['cdnProxyRegex']) : env['cdnProxyRegex'];

/** @type {!Object<string, string|boolean|RegExp>} */
var urls = exports.urls = {
  thirdParty: env['thirdPartyUrl'] || 'https://3p.ampproject.net',
  thirdPartyFrameHost: env['thirdPartyFrameHost'] || 'ampproject.net',
  thirdPartyFrameRegex: thirdPartyFrameRegex || /^d-\d+\.ampproject\.net$/,
  cdn: env['cdnUrl'] || 'https://cdn.ampproject.org',
  /* Note that cdnProxyRegex is only ever checked against origins
   * (proto://host[:port]) so does not need to consider path
   */
  cdnProxyRegex: cdnProxyRegex || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,
  localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
  errorReporting: env['errorReportingUrl'] || 'https://amp-error-reporting.appspot.com/r',
  localDev: env['localDev'] || false
};

var config = exports.config = {
  urls: urls
};

},{}],8:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;

var _string = require('./string');

var _url = require('./url');

var _config = require('./config');

/**
 * Returns the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * Returns the cookie's value or `null`.
 *
 * @param {!Window} win
 * @param {string} name
 * @return {?string}
 */
function getCookie(win, name) {
  var cookieString = tryGetDocumentCookieNoInline(win);
  if (!cookieString) {
    return null;
  }
  var cookies = cookieString.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    var eq = cookie.indexOf('=');
    if (eq == -1) {
      continue;
    }
    if ((0, _url.tryDecodeUriComponent)(cookie.substring(0, eq).trim()) == name) {
      var value = cookie.substring(eq + 1).trim();
      return (0, _url.tryDecodeUriComponent)(value, value);
    }
  }
  return null;
}

/**
 * This method should not be inlined to prevent TryCatch deoptimization.
 * NoInline keyword at the end of function name also prevents Closure compiler
 * from inlining the function.
 * @param {!Window} win
 * @return {string}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function tryGetDocumentCookieNoInline(win) {
  try {
    return win.document.cookie;
  } catch (e) {
    // Act as if no cookie is available. Exceptions can be thrown when
    // AMP docs are opened on origins that do not allow setting
    // cookies such as null origins.
    return '';
  }
}

/**
 * Sets the value of the cookie. The cookie access is restricted and must
 * go through the privacy review. Before using this method please file a
 * GitHub issue with "Privacy Review" label.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {{
 *   highestAvailableDomain:(boolean|undefined),
 *   domain:(string|undefined)
 * }=} opt_options
 *     - highestAvailableDomain: If true, set the cookie at the widest domain
 *       scope allowed by the browser. E.g. on example.com if we are currently
 *       on www.example.com.
 *     - domain: Explicit domain to set.
 *     - allowOnProxyOrigin: Allow setting a cookie on the AMP Cache.
 */
function setCookie(win, name, value, expirationTime, opt_options) {
  checkOriginForSettingCookie(win, opt_options, name);
  if (opt_options && opt_options.highestAvailableDomain) {
    var parts = win.location.hostname.split('.');
    var _domain = parts[parts.length - 1];
    for (var i = parts.length - 2; i >= 0; i--) {
      _domain = parts[i] + '.' + _domain;
      trySetCookie(win, name, value, expirationTime, _domain);
      if (getCookie(win, name) == value) {
        return;
      }
    }
  }
  var domain = undefined;
  if (opt_options && opt_options.domain) {
    domain = opt_options.domain;
  }
  trySetCookie(win, name, value, expirationTime, domain);
}

/**
 * Attempt to set a cookie with the given params.
 *
 * @param {!Window} win
 * @param {string} name
 * @param {string} value
 * @param {time} expirationTime
 * @param {string|undefined} domain
 */
function trySetCookie(win, name, value, expirationTime, domain) {
  // We do not allow setting cookies on the domain that contains both
  // the cdn. and www. hosts.
  if (domain == 'ampproject.org') {
    // Actively delete them.
    value = 'delete';
    expirationTime = 0;
  }
  var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + '; path=/' + (domain ? '; domain=' + domain : '') + '; expires=' + new Date(expirationTime).toUTCString();
  try {
    win.document.cookie = cookie;
  } catch (ignore) {
    // Do not throw if setting the cookie failed Exceptions can be thrown
    // when AMP docs are opened on origins that do not allow setting
    // cookies such as null origins.
  }
}

/**
 * Throws if a given cookie should not be set on the given origin.
 * This is a defense-in-depth. Callers should never run into this.
 *
 * @param {!Window} win
 * @param {!Object|undefined} options
 * @param {string} name For the error message.
 */
function checkOriginForSettingCookie(win, options, name) {
  if (options && options.allowOnProxyOrigin) {
    return;
  }
  if ((0, _url.isProxyOrigin)(win.location.href)) {
    throw new Error('Should never attempt to set cookie on proxy origin: ' + name);
  }

  var current = (0, _url.parseUrlDeprecated)(win.location.href).hostname.toLowerCase();
  var proxy = (0, _url.parseUrlDeprecated)(_config.urls.cdn).hostname.toLowerCase();
  if (current == proxy || (0, _string.endsWith)(current, '.' + proxy)) {
    throw new Error('Should never attempt to set cookie on proxy origin.' + ' (in depth check): ' + name);
  }
}

},{"./config":7,"./string":36,"./url":43}],9:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Curves = exports.CurveDef = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

// Imported just for the side effect of getting the `types` it exports into
// the type system during compile time.


exports.bezierCurve = bezierCurve;
exports.getCurve = getCurve;

require('./time');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A CurveDef is a function that returns a normtime value (0 to 1) for another
 * normtime value.
 * @typedef {function(./time.normtimeDef): ./time.normtimeDef}
 */
var CurveDef = exports.CurveDef = void 0;

/**
 * Returns a cubic bezier curve.
 * @param {number} x1 X coordinate of the first control point.
 * @param {number} y1 Y coordinate of the first control point.
 * @param {number} x2 X coordinate of the second control point.
 * @param {number} y2 Y coordinate of the second control point.
 * @return {!CurveDef}
 */
function bezierCurve(x1, y1, x2, y2) {
  var bezier = new Bezier(0, 0, x1, y1, x2, y2, 1, 1);
  return bezier.solveYValueFromXValue.bind(bezier);
}

/**
 * Thanks to
 * https://closure-library.googlecode.com/git-history/docs/local_closure_goog_math_bezier.js.source.html
 */

var Bezier = function () {

  /**
   * @param {number} x0 X coordinate of the start point.
   * @param {number} y0 Y coordinate of the start point.
   * @param {number} x1 X coordinate of the first control point.
   * @param {number} y1 Y coordinate of the first control point.
   * @param {number} x2 X coordinate of the second control point.
   * @param {number} y2 Y coordinate of the second control point.
   * @param {number} x3 X coordinate of the end point.
   * @param {number} y3 Y coordinate of the end point.
   */
  function Bezier(x0, y0, x1, y1, x2, y2, x3, y3) {
    _classCallCheck(this, Bezier);

    /**
     * X coordinate of the first point.
     * @type {number}
     */
    this.x0 = x0;

    /**
     * Y coordinate of the first point.
     * @type {number}
     */
    this.y0 = y0;

    /**
     * X coordinate of the first control point.
     * @type {number}
     */
    this.x1 = x1;

    /**
     * Y coordinate of the first control point.
     * @type {number}
     */
    this.y1 = y1;

    /**
     * X coordinate of the second control point.
     * @type {number}
     */
    this.x2 = x2;

    /**
     * Y coordinate of the second control point.
     * @type {number}
     */
    this.y2 = y2;

    /**
     * X coordinate of the end point.
     * @type {number}
     */
    this.x3 = x3;

    /**
     * Y coordinate of the end point.
     * @type {number}
     */
    this.y3 = y3;
  }

  /**
   * Computes the y coordinate of a point on the curve given its x coordinate.
   * @param {number} xVal The x coordinate of the point on the curve.
   * @return {number} The y coordinate of the point on the curve.
   */


  _createClass(Bezier, [{
    key: 'solveYValueFromXValue',
    value: function solveYValueFromXValue(xVal) {
      return this.getPointY(this.solvePositionFromXValue(xVal));
    }

    /**
     * Computes the position t of a point on the curve given its x coordinate.
     * That is, for an input xVal, finds t s.t. getPointX(t) = xVal.
     * As such, the following should always be true up to some small epsilon:
     * t ~ solvePositionFromXValue(getPointX(t)) for t in [0, 1].
     * @param {number} xVal The x coordinate of the point to find on the curve.
     * @return {number} The position t.
     */

  }, {
    key: 'solvePositionFromXValue',
    value: function solvePositionFromXValue(xVal) {
      // Desired precision on the computation.
      var epsilon = 1e-6;

      // Initial estimate of t using linear interpolation.
      var t = (xVal - this.x0) / (this.x3 - this.x0);
      if (t <= 0) {
        return 0;
      } else if (t >= 1) {
        return 1;
      }

      // Try gradient descent to solve for t. If it works, it is very fast.
      var tMin = 0;
      var tMax = 1;
      var value = 0;
      for (var i = 0; i < 8; i++) {
        value = this.getPointX(t);
        var derivative = (this.getPointX(t + epsilon) - value) / epsilon;
        if (Math.abs(value - xVal) < epsilon) {
          return t;
        } else if (Math.abs(derivative) < epsilon) {
          break;
        } else {
          if (value < xVal) {
            tMin = t;
          } else {
            tMax = t;
          }
          t -= (value - xVal) / derivative;
        }
      }

      // If the gradient descent got stuck in a local minimum, e.g. because
      // the derivative was close to 0, use a Dichotomy refinement instead.
      // We limit the number of iterations to 8.
      for (var _i = 0; Math.abs(value - xVal) > epsilon && _i < 8; _i++) {
        if (value < xVal) {
          tMin = t;
          t = (t + tMax) / 2;
        } else {
          tMax = t;
          t = (t + tMin) / 2;
        }
        value = this.getPointX(t);
      }
      return t;
    }

    /**
     * Computes the curve's X coordinate at a point between 0 and 1.
     * @param {number} t The point on the curve to find.
     * @return {number} The computed coordinate.
     */

  }, {
    key: 'getPointX',
    value: function getPointX(t) {
      // Special case start and end.
      if (t == 0) {
        return this.x0;
      } else if (t == 1) {
        return this.x3;
      }

      // Step one - from 4 points to 3
      var ix0 = this.lerp(this.x0, this.x1, t);
      var ix1 = this.lerp(this.x1, this.x2, t);
      var ix2 = this.lerp(this.x2, this.x3, t);

      // Step two - from 3 points to 2
      ix0 = this.lerp(ix0, ix1, t);
      ix1 = this.lerp(ix1, ix2, t);

      // Final step - last point
      return this.lerp(ix0, ix1, t);
    }

    /**
     * Computes the curve's Y coordinate at a point between 0 and 1.
     * @param {number} t The point on the curve to find.
     * @return {number} The computed coordinate.
     */

  }, {
    key: 'getPointY',
    value: function getPointY(t) {
      // Special case start and end.
      if (t == 0) {
        return this.y0;
      } else if (t == 1) {
        return this.y3;
      }

      // Step one - from 4 points to 3
      var iy0 = this.lerp(this.y0, this.y1, t);
      var iy1 = this.lerp(this.y1, this.y2, t);
      var iy2 = this.lerp(this.y2, this.y3, t);

      // Step two - from 3 points to 2
      iy0 = this.lerp(iy0, iy1, t);
      iy1 = this.lerp(iy1, iy2, t);

      // Final step - last point
      return this.lerp(iy0, iy1, t);
    }

    /**
     * Performs linear interpolation between values a and b. Returns the value
     * between a and b proportional to x (when x is between 0 and 1. When x is
     * outside this range, the return value is a linear extrapolation).
     * @param {number} a A number.
     * @param {number} b A number.
     * @param {number} x The proportion between a and b.
     * @return {number} The interpolated value between a and b.
     */

  }, {
    key: 'lerp',
    value: function lerp(a, b, x) {
      return a + x * (b - a);
    }
  }]);

  return Bezier;
}();

/**
 * A collection of common curves.
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function
 * @enum {!CurveDef}
 */


var Curves = exports.Curves = {
  /**
   * linear
   * @param {number} n
   * @return {number}
   */
  LINEAR: function LINEAR(n) {
    return n;
  },


  /**
   * ease
   */
  EASE: bezierCurve(0.25, 0.1, 0.25, 1.0),

  /**
   * ease-in: slow out, fast in
   */
  EASE_IN: bezierCurve(0.42, 0.0, 1.0, 1.0),

  /**
   * ease-out: fast out, slow in
   */
  EASE_OUT: bezierCurve(0.0, 0.0, 0.58, 1.0),

  /**
   * ease-in-out
   */
  EASE_IN_OUT: bezierCurve(0.42, 0.0, 0.58, 1.0)
};

/**
 * @const {!Object<string, !CurveDef>}
 */
var NAME_MAP = {
  'linear': Curves.LINEAR,
  'ease': Curves.EASE,
  'ease-in': Curves.EASE_IN,
  'ease-out': Curves.EASE_OUT,
  'ease-in-out': Curves.EASE_IN_OUT
};

/**
 * If the argument is a string, this methods matches an existing curve by name.
 * @param {?CurveDef|string|undefined} curve
 * @return {?CurveDef}
 */
function getCurve(curve) {
  if (!curve) {
    return null;
  }
  if (typeof curve == 'string') {
    // If the curve is a custom cubic-bezier curve
    if (curve.indexOf('cubic-bezier') != -1) {
      var match = curve.match(/cubic-bezier\((.+)\)/);
      if (match) {
        var values = match[1].split(',').map(parseFloat);
        if (values.length == 4) {
          for (var i = 0; i < 4; i++) {
            if (isNaN(values[i])) {
              return null;
            }
          }
          return bezierCurve(values[0], values[1], values[2], values[3]);
        }
      }
      return null;
    }
    return NAME_MAP[curve];
  }
  return curve;
}

},{"./time":38}],10:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPGRADE_TO_CUSTOMELEMENT_RESOLVER = exports.UPGRADE_TO_CUSTOMELEMENT_PROMISE = undefined;
exports.waitForChild = waitForChild;
exports.waitForChildPromise = waitForChildPromise;
exports.waitForBody = waitForBody;
exports.waitForBodyPromise = waitForBodyPromise;
exports.removeElement = removeElement;
exports.removeChildren = removeChildren;
exports.copyChildren = copyChildren;
exports.insertAfterOrAtStart = insertAfterOrAtStart;
exports.addAttributesToElement = addAttributesToElement;
exports.createElementWithAttributes = createElementWithAttributes;
exports.isConnectedNode = isConnectedNode;
exports.rootNodeFor = rootNodeFor;
exports.closest = closest;
exports.closestNode = closestNode;
exports.closestByTag = closestByTag;
exports.closestBySelector = closestBySelector;
exports.matches = matches;
exports.elementByTag = elementByTag;
exports.childElement = childElement;
exports.childElements = childElements;
exports.lastChildElement = lastChildElement;
exports.childNodes = childNodes;
exports.setScopeSelectorSupportedForTesting = setScopeSelectorSupportedForTesting;
exports.childElementByAttr = childElementByAttr;
exports.lastChildElementByAttr = lastChildElementByAttr;
exports.childElementsByAttr = childElementsByAttr;
exports.childElementByTag = childElementByTag;
exports.childElementsByTag = childElementsByTag;
exports.scopedQuerySelector = scopedQuerySelector;
exports.scopedQuerySelectorAll = scopedQuerySelectorAll;
exports.getDataParamsFromAttributes = getDataParamsFromAttributes;
exports.hasNextNodeInDocumentOrder = hasNextNodeInDocumentOrder;
exports.ancestorElements = ancestorElements;
exports.ancestorElementsByTag = ancestorElementsByTag;
exports.templateContentClone = templateContentClone;
exports.iterateCursor = iterateCursor;
exports.openWindowDialog = openWindowDialog;
exports.isJsonScriptTag = isJsonScriptTag;
exports.isJsonLdScriptTag = isJsonLdScriptTag;
exports.isRTL = isRTL;
exports.escapeCssSelectorIdent = escapeCssSelectorIdent;
exports.escapeCssSelectorNth = escapeCssSelectorNth;
exports.escapeHtml = escapeHtml;
exports.tryFocus = tryFocus;
exports.isIframed = isIframed;
exports.isAmpElement = isAmpElement;
exports.whenUpgradedToCustomElement = whenUpgradedToCustomElement;
exports.fullscreenEnter = fullscreenEnter;
exports.fullscreenExit = fullscreenExit;
exports.isFullscreenElement = isFullscreenElement;
exports.isEnabled = isEnabled;

var _promise = require('./utils/promise');

var _cssEscape = require('../third_party/css-escape/css-escape');

var _log = require('./log');

var _object = require('./utils/object');

var _string = require('./string');

var _types = require('./types');

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var HTML_ESCAPE_CHARS = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
var HTML_ESCAPE_REGEX = /(&|<|>|"|'|`)/g;

/** @const {string} */
var UPGRADE_TO_CUSTOMELEMENT_PROMISE = exports.UPGRADE_TO_CUSTOMELEMENT_PROMISE = '__AMP_UPG_PRM';

/** @const {string} */
var UPGRADE_TO_CUSTOMELEMENT_RESOLVER = exports.UPGRADE_TO_CUSTOMELEMENT_RESOLVER = '__AMP_UPG_RES';

/**
 * Waits until the child element is constructed. Once the child is found, the
 * callback is executed.
 * @param {!Element} parent
 * @param {function(!Element):boolean} checkFunc
 * @param {function()} callback
 */
function waitForChild(parent, checkFunc, callback) {
  if (checkFunc(parent)) {
    callback();
    return;
  }
  /** @const {!Window} */
  var win = (0, _types.toWin)(parent.ownerDocument.defaultView);
  if (win.MutationObserver) {
    /** @const {MutationObserver} */
    var observer = new win.MutationObserver(function () {
      if (checkFunc(parent)) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(parent, { childList: true });
  } else {
    /** @const {number} */
    var interval = win.setInterval(function () {
      if (checkFunc(parent)) {
        win.clearInterval(interval);
        callback();
      }
    }, /* milliseconds */5);
  }
}

/**
 * Waits until the child element is constructed. Once the child is found, the
 * promise is resolved.
 * @param {!Element} parent
 * @param {function(!Element):boolean} checkFunc
 * @return {!Promise}
 */
function waitForChildPromise(parent, checkFunc) {
  return new Promise(function (resolve) {
    waitForChild(parent, checkFunc, resolve);
  });
}

/**
 * Waits for document's body to be available.
 * Will be deprecated soon; use {@link AmpDoc#whenBodyAvailable} or
 * @{link DocumentState#onBodyAvailable} instead.
 * @param {!Document} doc
 * @param {function()} callback
 */
function waitForBody(doc, callback) {
  waitForChild(doc.documentElement, function () {
    return !!doc.body;
  }, callback);
}

/**
 * Waits for document's body to be available.
 * @param {!Document} doc
 * @return {!Promise}
 */
function waitForBodyPromise(doc) {
  return new Promise(function (resolve) {
    waitForBody(doc, resolve);
  });
}

/**
 * Removes the element.
 * @param {!Element} element
 */
function removeElement(element) {
  if (element.parentElement) {
    element.parentElement.removeChild(element);
  }
}

/**
 * Removes all child nodes of the specified element.
 * @param {!Element} parent
 */
function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * Copies all children nodes of element "from" to element "to". Child nodes
 * are deeply cloned. Notice, that this method should be used with care and
 * preferably on smaller subtrees.
 * @param {!Element} from
 * @param {!Element|!DocumentFragment} to
 */
function copyChildren(from, to) {
  var frag = to.ownerDocument.createDocumentFragment();
  for (var n = from.firstChild; n; n = n.nextSibling) {
    frag.appendChild(n.cloneNode(true));
  }
  to.appendChild(frag);
}

/**
 * Insert the element in the root after the element named after or
 * if that is null at the beginning.
 * @param {!Element|!ShadowRoot} root
 * @param {!Element} element
 * @param {?Node} after
 */
function insertAfterOrAtStart(root, element, after) {
  var before = after ? after.nextSibling : root.firstChild;
  root.insertBefore(element, before);
}

/**
 * Add attributes to an element.
 * @param {!Element} element
 * @param {!JsonObject<string, string>} attributes
 * @return {!Element} created element
 */
function addAttributesToElement(element, attributes) {
  for (var attr in attributes) {
    element.setAttribute(attr, attributes[attr]);
  }
  return element;
}

/**
 * Create a new element on document with specified tagName and attributes.
 * @param {!Document} doc
 * @param {string} tagName
 * @param {!JsonObject<string, string>} attributes
 * @return {!Element} created element
 */
function createElementWithAttributes(doc, tagName, attributes) {
  var element = doc.createElement(tagName);
  return addAttributesToElement(element, attributes);
}

/**
 * Returns true if node is connected (attached).
 * @param {!Node} node
 * @return {boolean}
 * @see https://dom.spec.whatwg.org/#connected
 */
function isConnectedNode(node) {
  var connected = node.isConnected;
  if (connected !== undefined) {
    return connected;
  }

  // "An element is connected if its shadow-including root is a document."
  var n = node;
  do {
    n = rootNodeFor(n);
    if (n.host) {
      n = n.host;
    } else {
      break;
    }
  } while (true);
  return n.nodeType === Node.DOCUMENT_NODE;
}

/**
 * Returns the root for a given node. Does not cross shadow DOM boundary.
 * @param {!Node} node
 * @return {!Node}
 */
function rootNodeFor(node) {
  if (Node.prototype.getRootNode) {
    // Type checker says `getRootNode` may return null.
    return node.getRootNode() || node;
  }
  var n = void 0;
  for (n = node; !!n.parentNode; n = n.parentNode) {}
  return n;
}

/**
 * Finds the closest element that satisfies the callback from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {function(!Element):boolean} callback
 * @param {Element=} opt_stopAt optional elemnt to stop the search at.
 * @return {?Element}
 */
function closest(element, callback, opt_stopAt) {
  for (var el = element; el && el !== opt_stopAt; el = el.parentElement) {
    if (callback(el)) {
      return el;
    }
  }
  return null;
}

/**
 * Finds the closest node that satisfies the callback from this node
 * up the DOM subtree.
 * @param {!Node} node
 * @param {function(!Node):boolean} callback
 * @return {?Node}
 */
function closestNode(node, callback) {
  for (var n = node; n; n = n.parentNode) {
    if (callback(n)) {
      return n;
    }
  }
  return null;
}

/**
 * Finds the closest element with the specified name from this element
 * up the DOM subtree.
 * @param {!Element} element
 * @param {string} tagName
 * @return {?Element}
 */
function closestByTag(element, tagName) {
  if (element.closest) {
    return element.closest(tagName);
  }
  tagName = tagName.toUpperCase();
  return closest(element, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Finds the closest element with the specified selector from this element
 * @param {!Element} element
 * @param {string} selector
 * @return {?Element} closest ancestor if found.
 */
function closestBySelector(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  return closest(element, function (el) {
    return matches(el, selector);
  });
}

/**
 * Checks if the given element matches the selector
 * @param  {!Element} el The element to verify
 * @param  {string} selector The selector to check against
 * @return {boolean} True if the element matched the selector. False otherwise.
 */
function matches(el, selector) {
  var matcher = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
  if (matcher) {
    return matcher.call(el, selector);
  }
  return false; // IE8 always returns false.
}

/**
 * Finds the first descendant element with the specified name.
 * @param {!Element|!Document|!ShadowRoot} element
 * @param {string} tagName
 * @return {?Element}
 */
function elementByTag(element, tagName) {
  var elements = void 0;
  // getElementsByTagName() is not supported on ShadowRoot.
  if (typeof element.getElementsByTagName === 'function') {
    elements = element.getElementsByTagName(tagName);
  } else {
    elements = element. /*OK*/querySelectorAll(tagName);
  }
  return elements && elements[0] || null;
}

/**
 * Finds the first child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */
function childElement(parent, callback) {
  for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
    if (callback(child)) {
      return child;
    }
  }
  return null;
}

/**
 * Finds all child elements that satisfy the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {!Array<!Element>}
 */
function childElements(parent, callback) {
  var children = [];
  for (var child = parent.firstElementChild; child; child = child.nextElementSibling) {
    if (callback(child)) {
      children.push(child);
    }
  }
  return children;
}

/**
 * Finds the last child element that satisfies the callback.
 * @param {!Element} parent
 * @param {function(!Element):boolean} callback
 * @return {?Element}
 */
function lastChildElement(parent, callback) {
  for (var child = parent.lastElementChild; child; child = child.previousElementSibling) {
    if (callback(child)) {
      return child;
    }
  }
  return null;
}

/**
 * Finds all child nodes that satisfy the callback.
 * These nodes can include Text, Comment and other child nodes.
 * @param {!Node} parent
 * @param {function(!Node):boolean} callback
 * @return {!Array<!Node>}
 */
function childNodes(parent, callback) {
  var nodes = [];
  for (var child = parent.firstChild; child; child = child.nextSibling) {
    if (callback(child)) {
      nodes.push(child);
    }
  }
  return nodes;
}

/**
 * @type {boolean|undefined}
 * @visibleForTesting
 */
var scopeSelectorSupported = void 0;

/**
 * @param {boolean|undefined} val
 * @visibleForTesting
 */
function setScopeSelectorSupportedForTesting(val) {
  scopeSelectorSupported = val;
}

/**
 * Test that the :scope selector is supported and behaves correctly.
 * @param {!Element} parent
 * @return {boolean}
 */
function isScopeSelectorSupported(parent) {
  var doc = parent.ownerDocument;
  try {
    var testElement = doc.createElement('div');
    var testChild = doc.createElement('div');
    testElement.appendChild(testChild);
    // NOTE(cvializ, #12383): Firefox's implementation is incomplete,
    // therefore we test actual functionality of`:scope` as well.
    return testElement. /*OK*/querySelector(':scope div') === testChild;
  } catch (e) {
    return false;
  }
}

/**
 * Finds the first child element that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {?Element}
 */
function childElementByAttr(parent, attr) {
  return scopedQuerySelector /*OK*/(parent, '> [' + attr + ']');
}

/**
 * Finds the last child element that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {?Element}
 */
function lastChildElementByAttr(parent, attr) {
  return lastChildElement(parent, function (el) {
    return el.hasAttribute(attr);
  });
}

/**
 * Finds all child elements that has the specified attribute.
 * @param {!Element} parent
 * @param {string} attr
 * @return {!NodeList<!Element>}
 */
function childElementsByAttr(parent, attr) {
  return scopedQuerySelectorAll /*OK*/(parent, '> [' + attr + ']');
}

/**
 * Finds the first child element that has the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {?Element}
 */
function childElementByTag(parent, tagName) {
  return scopedQuerySelector /*OK*/(parent, '> ' + tagName);
}

/**
 * Finds all child elements with the specified tag name.
 * @param {!Element} parent
 * @param {string} tagName
 * @return {!NodeList<!Element>}
 */
function childElementsByTag(parent, tagName) {
  return scopedQuerySelectorAll /*OK*/(parent, '> ' + tagName);
}

/**
 * Finds the first element that matches `selector`, scoped inside `root`.
 * Note: in IE, this causes a quick mutation of the element's class list.
 * @param {!Element} root
 * @param {string} selector
 * @return {?Element}
 */
function scopedQuerySelector(root, selector) {
  if (scopeSelectorSupported == null) {
    scopeSelectorSupported = isScopeSelectorSupported(root);
  }
  if (scopeSelectorSupported) {
    return root. /*OK*/querySelector(':scope ' + selector);
  }

  // Only IE.
  var unique = 'i-amphtml-scoped';
  root.classList.add(unique);
  var element = root. /*OK*/querySelector('.' + unique + ' ' + selector);
  root.classList.remove(unique);
  return element;
}

/**
 * Finds the every element that matches `selector`, scoped inside `root`.
 * Note: in IE, this causes a quick mutation of the element's class list.
 * @param {!Element} root
 * @param {string} selector
 * @return {!NodeList<!Element>}
 */
function scopedQuerySelectorAll(root, selector) {
  if (scopeSelectorSupported == null) {
    scopeSelectorSupported = isScopeSelectorSupported(root);
  }
  if (scopeSelectorSupported) {
    return root. /*OK*/querySelectorAll(':scope ' + selector);
  }

  // Only IE.
  var unique = 'i-amphtml-scoped';
  root.classList.add(unique);
  var elements = root. /*OK*/querySelectorAll('.' + unique + ' ' + selector);
  root.classList.remove(unique);
  return elements;
}

/**
 * Returns element data-param- attributes as url parameters key-value pairs.
 * e.g. data-param-some-attr=value -> {someAttr: value}.
 * @param {!Element} element
 * @param {function(string):string=} opt_computeParamNameFunc to compute the
 *    parameter name, get passed the camel-case parameter name.
 * @param {!RegExp=} opt_paramPattern Regex pattern to match data attributes.
 * @return {!JsonObject}
 */
function getDataParamsFromAttributes(element, opt_computeParamNameFunc, opt_paramPattern) {
  var computeParamNameFunc = opt_computeParamNameFunc || function (key) {
    return key;
  };
  var dataset = element.dataset;

  var params = (0, _object.dict)();
  var paramPattern = opt_paramPattern ? opt_paramPattern : /^param(.+)/;
  for (var key in dataset) {
    var _matches = key.match(paramPattern);
    if (_matches) {
      var param = _matches[1][0].toLowerCase() + _matches[1].substr(1);
      params[computeParamNameFunc(param)] = dataset[key];
    }
  }
  return params;
}

/**
 * Whether the element have a next node in the document order.
 * This means either:
 *  a. The element itself has a nextSibling.
 *  b. Any of the element ancestors has a nextSibling.
 * @param {!Element} element
 * @param {?Node} opt_stopNode
 * @return {boolean}
 */
function hasNextNodeInDocumentOrder(element, opt_stopNode) {
  var currentElement = element;
  do {
    if (currentElement.nextSibling) {
      return true;
    }
  } while ((currentElement = currentElement.parentNode) && currentElement != opt_stopNode);
  return false;
}

/**
 * Finds all ancestor elements that satisfy predicate.
 * @param {!Element} child
 * @param {function(!Element):boolean} predicate
 * @return {!Array<!Element>}
 */
function ancestorElements(child, predicate) {
  var ancestors = [];
  for (var ancestor = child.parentElement; ancestor; ancestor = ancestor.parentElement) {
    if (predicate(ancestor)) {
      ancestors.push(ancestor);
    }
  }
  return ancestors;
}

/**
 * Finds all ancestor elements that has the specified tag name.
 * @param {!Element} child
 * @param {string} tagName
 * @return {!Array<!Element>}
 */
function ancestorElementsByTag(child, tagName) {
  tagName = tagName.toUpperCase();
  return ancestorElements(child, function (el) {
    return el.tagName == tagName;
  });
}

/**
 * Returns a clone of the content of a template element.
 *
 * Polyfill to replace .content access for browsers that do not support
 * HTMLTemplateElements natively.
 *
 * @param {!HTMLTemplateElement|!Element} template
 * @return {!DocumentFragment}
 */
function templateContentClone(template) {
  if ('content' in template) {
    return template.content.cloneNode(true);
  } else {
    var content = template.ownerDocument.createDocumentFragment();
    copyChildren(template, content);
    return content;
  }
}

/**
 * Iterate over an array-like. Some collections like NodeList are
 * lazily evaluated in some browsers, and accessing `length` forces full
 * evaluation. We can improve performance by iterating until an element is
 * `undefined` to avoid checking the `length` property.
 * Test cases: https://jsperf.com/iterating-over-collections-of-elements
 * @param {!IArrayLike<T>} iterable
 * @param {function(T, number)} cb
 * @template T
 */
function iterateCursor(iterable, cb) {
  for (var i = 0, value; (value = iterable[i]) !== undefined; i++) {
    cb(value, i);
  }
}

/**
 * This method wraps around window's open method. It first tries to execute
 * `open` call with the provided target and if it fails, it retries the call
 * with the `_top` target. This is necessary given that in some embedding
 * scenarios, such as iOS' WKWebView, navigation to `_blank` and other targets
 * is blocked by default.
 *
 * @param {!Window} win
 * @param {string} url
 * @param {string} target
 * @param {string=} opt_features
 * @return {?Window}
 */
function openWindowDialog(win, url, target, opt_features) {
  // Try first with the specified target. If we're inside the WKWebView or
  // a similar environments, this method is expected to fail by default for
  // all targets except `_top`.
  var res = void 0;
  try {
    res = win.open(url, target, opt_features);
  } catch (e) {
    (0, _log.dev)().error('DOM', 'Failed to open url on target: ', target, e);
  }

  // Then try with `_top` target.
  if (!res && target != '_top') {
    res = win.open(url, '_top');
  }
  return res;
}

/**
 * Whether the element is a script tag with application/json type.
 * @param {!Element} element
 * @return {boolean}
 */
function isJsonScriptTag(element) {
  return element.tagName == 'SCRIPT' && element.getAttribute('type').toUpperCase() == 'APPLICATION/JSON';
}

/**
 * Whether the element is a script tag with application/json type.
 * @param {!Element} element
 * @return {boolean}
 */
function isJsonLdScriptTag(element) {
  return element.tagName == 'SCRIPT' && element.getAttribute('type').toUpperCase() == 'APPLICATION/LD+JSON';
}

/**
 * Whether the page's direction is right to left or not.
 * @param {!Document} doc
 * @return {boolean}
 */
function isRTL(doc) {
  var dir = doc.body.getAttribute('dir') || doc.documentElement.getAttribute('dir') || 'ltr';
  return dir == 'rtl';
}

/**
 * Escapes an ident (ID or a class name) to be used as a CSS selector.
 *
 * See https://drafts.csswg.org/cssom/#serialize-an-identifier.
 *
 * @param {string} ident
 * @return {string}
 */
function escapeCssSelectorIdent(ident) {
  return (0, _cssEscape.cssEscape)(ident);
}

/**
 * Escapes an ident in a way that can be used by :nth-child() psuedo-class.
 *
 * See https://github.com/w3c/csswg-drafts/issues/2306.
 *
 * @param {string|number} ident
 * @return {string}
 */
function escapeCssSelectorNth(ident) {
  var escaped = String(ident);
  // Ensure it doesn't close the nth-child psuedo class.
  (0, _log.dev)().assert(escaped.indexOf(')') === -1);
  return escaped;
}

/**
 * Escapes `<`, `>` and other HTML charcaters with their escaped forms.
 * @param {string} text
 * @return {string}
 */
function escapeHtml(text) {
  if (!text) {
    return text;
  }
  return text.replace(HTML_ESCAPE_REGEX, escapeHtmlChar);
}

/**
 * @param {string} c
 * @return {string}
 */
function escapeHtmlChar(c) {
  return HTML_ESCAPE_CHARS[c];
}

/**
 * Tries to focus on the given element; fails silently if browser throws an
 * exception.
 * @param {!Element} element
 */
function tryFocus(element) {
  try {
    element. /*OK*/focus();
  } catch (e) {
    // IE <= 7 may throw exceptions when focusing on hidden items.
  }
}

/**
 * Whether the given window is in an iframe or not.
 * @param {!Window} win
 * @return {boolean}
 */
function isIframed(win) {
  return win.parent && win.parent != win;
}

/**
 * Determines if this element is an AMP element
 * @param {!Element} element
 * @return {boolean}
 */
function isAmpElement(element) {
  var tag = element.tagName;
  // Use prefix to recognize AMP element. This is necessary because stub
  // may not be attached yet.
  return (0, _string.startsWith)(tag, 'AMP-') &&
  // Some "amp-*" elements are not really AMP elements. :smh:
  !(tag == 'AMP-STICKY-AD-TOP-PADDING' || tag == 'AMP-BODY');
}

/**
 * Return a promise that resolve when an AMP element upgrade from HTMLElement
 * to CustomElement
 * @param {!Element} element
 * @return {!Promise<!Element>}
 */
function whenUpgradedToCustomElement(element) {
  (0, _log.dev)().assert(isAmpElement(element), 'element is not AmpElement');
  if (element.createdCallback) {
    // Element already is CustomElement;
    return Promise.resolve(element);
  }
  // If Element is still HTMLElement, wait for it to upgrade to customElement
  // Note: use pure string to avoid obfuscation between versions.
  if (!element[UPGRADE_TO_CUSTOMELEMENT_PROMISE]) {
    var deferred = new _promise.Deferred();
    element[UPGRADE_TO_CUSTOMELEMENT_PROMISE] = deferred.promise;
    element[UPGRADE_TO_CUSTOMELEMENT_RESOLVER] = deferred.resolve;
  }

  return element[UPGRADE_TO_CUSTOMELEMENT_PROMISE];
}

/**
 * Replacement for `Element.requestFullscreen()` method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
 * @param {!Element} element
 */
function fullscreenEnter(element) {
  var requestFs = element.requestFullscreen || element.requestFullScreen || element.webkitRequestFullscreen || element.webkitRequestFullScreen || element.webkitEnterFullscreen || element.webkitEnterFullScreen || element.msRequestFullscreen || element.msRequestFullScreen || element.mozRequestFullscreen || element.mozRequestFullScreen;
  if (requestFs) {
    requestFs.call(element);
  }
}

/**
 * Replacement for `Document.exitFullscreen()` method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
 * @param {!Element} element
 */
function fullscreenExit(element) {
  var exitFs = element.cancelFullScreen || element.exitFullscreen || element.exitFullScreen || element.webkitExitFullscreen || element.webkitExitFullScreen || element.webkitCancelFullScreen || element.mozCancelFullScreen || element.msExitFullscreen;
  if (exitFs) {
    exitFs.call(element);
    return;
  }
  if (element.ownerDocument) {
    exitFs = element.ownerDocument.cancelFullScreen || element.ownerDocument.exitFullscreen || element.ownerDocument.exitFullScreen || element.ownerDocument.webkitExitFullscreen || element.ownerDocument.webkitExitFullScreen || element.ownerDocument.webkitCancelFullScreen || element.ownerDocument.mozCancelFullScreen || element.ownerDocument.msExitFullscreen;
  }
  if (exitFs) {
    exitFs.call(element.ownerDocument);
    return;
  }
}

/**
 * Replacement for `Document.fullscreenElement`.
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenElement
 * @param {!Element} element
 * @return {boolean}
 */
function isFullscreenElement(element) {
  var isFullscreen = element.webkitDisplayingFullscreen;
  if (isFullscreen) {
    return true;
  }
  if (element.ownerDocument) {
    var fullscreenElement = element.ownerDocument.fullscreenElement || element.ownerDocument.webkitFullscreenElement || element.ownerDocument.mozFullScreenElement || element.webkitCurrentFullScreenElement;
    if (fullscreenElement == element) {
      return true;
    }
  }
  return false;
}

/**
 * Returns true if node is not disabled.
 *
 * IE8 can return false positives, see {@link matches}.
 * @param {!Element} element
 * @return {boolean}
 * @see https://www.w3.org/TR/html5/forms.html#concept-fe-disabled
 */
function isEnabled(element) {
  return !(element.disabled || matches(element, ':disabled'));
}

},{"../third_party/css-escape/css-escape":49,"./log":19,"./string":36,"./types":40,"./utils/object":47,"./utils/promise":48}],11:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementService = getElementService;
exports.getElementServiceIfAvailable = getElementServiceIfAvailable;
exports.getElementServiceForDoc = getElementServiceForDoc;
exports.getElementServiceIfAvailableForDoc = getElementServiceIfAvailableForDoc;
exports.getElementServiceIfAvailableForDocInEmbedScope = getElementServiceIfAvailableForDocInEmbedScope;
exports.extensionScriptsInNode = extensionScriptsInNode;
exports.isExtensionScriptInNode = isExtensionScriptInNode;

var _dom = require('./dom');

var dom = _interopRequireWildcard(_dom);

var _service = require('./service');

var _types = require('./types');

var _log = require('./log');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Returns a promise for a service for the given id and window. Also expects an
 * element that has the actual implementation. The promise resolves when the
 * implementation loaded. Users should typically wrap this as a special purpose
 * function (e.g. Services.viewportForDoc(...)) for type safety and because the
 * factory should not be passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an element,
 *     not the extension.
 * @return {!Promise<*>}
 */
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function getElementService(win, id, extension, opt_element) {
  return getElementServiceIfAvailable(win, id, extension, opt_element).then(function (service) {
    return assertService(service, id, extension);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailable(win, id, extension, opt_element) {
  var s = (0, _service.getServicePromiseOrNull)(win, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */s
    );
  }
  return getElementServicePromiseOrNull(win, id, extension, opt_element);
}

/**
 * @param {!Window} win
 * @param {string} elementName Name of an extended custom element.
 * @return {boolean} Whether this element is scheduled to be loaded.
 */
function isElementScheduled(win, elementName) {
  // Set in custom-element.js
  if (!win.ampExtendedElements) {
    return false;
  }
  return !!win.ampExtendedElements[elementName];
}

/**
 * Returns a promise for a service for the given id and window. Also expects an
 * element that has the actual implementation. The promise resolves when the
 * implementation loaded. Users should typically wrap this as a special purpose
 * function (e.g. Services.viewportForDoc(...)) for type safety and because the
 * factory should not be passed around.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an element,
 *     not the extension.
 * @return {!Promise<*>}
 */
function getElementServiceForDoc(elementOrAmpDoc, id, extension, opt_element) {
  return getElementServiceIfAvailableForDoc(elementOrAmpDoc, id, extension, opt_element).then(function (service) {
    return assertService(service, id, extension);
  });
}

/**
 * Same as getElementService but produces null if the given element is not
 * actually available on the current page.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom extension that provides the
 *     implementation of this service.
 * @param {boolean=} opt_element Whether this service is provided by an
 *     element, not the extension.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailableForDoc(elementOrAmpDoc, id, extension, opt_element) {
  var ampdoc = (0, _service.getAmpdoc)(elementOrAmpDoc);
  var s = (0, _service.getServicePromiseOrNullForDoc)(elementOrAmpDoc, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */s
    );
  }

  return ampdoc.whenBodyAvailable().then(function () {
    return waitForExtensionIfPresent(ampdoc.win, extension, ampdoc.getHeadNode());
  }).then(function () {
    // If this service is provided by an element, then we can't depend on
    // the service (they may not use the element).
    if (opt_element) {
      return (0, _service.getServicePromiseOrNullForDoc)(elementOrAmpDoc, id);
    } else if (isElementScheduled(ampdoc.win, extension)) {
      return (0, _service.getServicePromiseForDoc)(elementOrAmpDoc, id);
    }
    return null;
  });
}

/**
 * Returns a promise for service for the given id in the embed scope of
 * a given node, if it exists. Otherwise, falls back to ampdoc scope IFF
 * the given node is in the top-level window.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id of the service.
 * @param {string} extension Name of the custom element that provides
 *     the implementation of this service.
 * @return {!Promise<?Object>}
 */
function getElementServiceIfAvailableForDocInEmbedScope(elementOrAmpDoc, id, extension) {
  var s = (0, _service.getExistingServiceForDocInEmbedScope)(elementOrAmpDoc, id);
  if (s) {
    return (/** @type {!Promise<?Object>} */Promise.resolve(s)
    );
  }
  // Return embed-scope element service promise if scheduled.
  if (elementOrAmpDoc.nodeType) {
    var win = (0, _types.toWin)(elementOrAmpDoc.ownerDocument.defaultView);
    var topWin = (0, _service.getTopWindow)(win);
    // In embeds, doc-scope services are window-scope. But make sure to
    // only do this for embeds (not the top window), otherwise we'd grab
    // a promise from the wrong service holder which would never resolve.
    if (win !== topWin) {
      return getElementServicePromiseOrNull(win, id, extension);
    } else {
      // Fallback to ampdoc IFF the given node is _not_ FIE.
      return getElementServiceIfAvailableForDoc(elementOrAmpDoc, id, extension);
    }
  }
  return (/** @type {!Promise<?Object>} */Promise.resolve(null)
  );
}

/**
 * Throws user error if `service` is null.
 * @param {Object} service
 * @param {string} id
 * @param {string} extension
 * @return {!Object}
 * @private
 */
function assertService(service, id, extension) {
  return (/** @type {!Object} */(0, _log.user)().assert(service, 'Service %s was requested to be provided through %s, ' + 'but %s is not loaded in the current page. To fix this ' + 'problem load the JavaScript file for %s in this page.', id, extension, extension, extension)
  );
}

/**
 * Get list of all the extension JS files
 * @param {HTMLHeadElement|Element|ShadowRoot} head
 * @return {!Array<string>}
 */
function extensionScriptsInNode(head) {
  // ampdoc.getHeadNode() can return null
  if (!head) {
    return [];
  }
  var scripts = [];
  var list = head.querySelectorAll('script[custom-element]');
  for (var i = 0; i < list.length; i++) {
    scripts.push(list[i].getAttribute('custom-element'));
  }
  return scripts;
}

/**
 * Waits for body to be present then verifies that an extension script is
 * present in head for installation.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @param {string} extensionId
 * @return {!Promise<boolean>}
 */
function isExtensionScriptInNode(ampdoc, extensionId) {
  return ampdoc.whenBodyAvailable().then(function () {
    return extensionScriptInNode(ampdoc.getHeadNode(), extensionId);
  });
}

/**
 * Verifies that an extension script is present in head for
 * installation.
 * @param {HTMLHeadElement|Element|ShadowRoot} head
 * @param {string} extensionId
 * @private
 */
function extensionScriptInNode(head, extensionId) {
  return extensionScriptsInNode(head).includes(extensionId);
}

/**
 * Waits for an extension if its script is present
 * @param {!Window} win
 * @param {string} extension
 * @param {HTMLHeadElement|Element|ShadowRoot} head
 * @return {!Promise}
 * @private
 */
function waitForExtensionIfPresent(win, extension, head) {
  /**
   * If there is an extension script wait for it to load before trying
   * to get the service. Prevents a race condition when everything but
   * the extensions is in cache. If there is no script then it's either
   * not present, or the service was defined by a test. In those cases
   * we don't wait around for an extension that does not exist.
   */

  // TODO(jpettitt) investigate registerExtension to short circuit
  // the dom call in extensionScriptsInNode()
  if (!extensionScriptInNode(head, extension)) {
    return Promise.resolve();
  }

  var extensions = (0, _service.getService)(win, 'extensions');
  return (/** @type {!Promise<?Object>} */extensions.waitForExtension(win, extension)
  );
}

/**
 * Returns the promise for service with `id` on the given window if available.
 * Otherwise, resolves with null (service was not registered).
 * @param {!Window} win
 * @param {string} id
 * @param {string} extension
 * @param {boolean=} opt_element
 * @return {!Promise<Object>}
 * @private
 */
function getElementServicePromiseOrNull(win, id, extension, opt_element) {
  return dom.waitForBodyPromise(win.document).then(function () {
    return waitForExtensionIfPresent(win, extension, win.document.head);
  }).then(function () {
    // If this service is provided by an element, then we can't depend on
    // the service (they may not use the element).
    if (opt_element) {
      return (0, _service.getServicePromiseOrNull)(win, id);
    } else if (isElementScheduled(win, extension)) {
      return (0, _service.getServicePromise)(win, id);
    }
    return null;
  });
}

},{"./dom":10,"./log":19,"./service":33,"./types":40}],12:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalListenImplementation = internalListenImplementation;
exports.detectEvtListenerOptsSupport = detectEvtListenerOptsSupport;
exports.resetEvtListenerOptsSupportForTesting = resetEvtListenerOptsSupportForTesting;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
  * Whether addEventListener supports options or only takes capture as a boolean
  * @type {boolean|undefined}
  * @visibleForTesting
  */
var optsSupported = void 0;

/**
 * Listens for the specified event on the element.
 *
 * Do not use this directly. This method is implemented as a shared
 * dependency. Use `listen()` in either `event-helper` or `3p-frame-messaging`,
 * depending on your use case.
 *
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
  var localElement = element;
  var localListener = listener;
  /**
   * @type {?Function}
   */
  var wrapped = void 0;

  wrapped = function wrapped(event) {
    try {
      return localListener(event);
    } catch (e) {
      // reportError is installed globally per window in the entry point.
      self.reportError(e);
      throw e;
    }
  };
  var optsSupported = detectEvtListenerOptsSupport();
  var capture = false;
  if (opt_evtListenerOpts) {
    capture = opt_evtListenerOpts.capture;
  }
  localElement.addEventListener(eventType, wrapped, optsSupported ? opt_evtListenerOpts : capture);
  return function () {
    if (localElement) {
      localElement.removeEventListener(eventType, wrapped, optsSupported ? opt_evtListenerOpts : capture);
    }
    // Ensure these are GC'd
    localListener = null;
    localElement = null;
    wrapped = null;
  };
}

/**
 * Tests whether the browser supports options as an argument of addEventListener
 * or not.
 *
 * @return {boolean}
 */
function detectEvtListenerOptsSupport() {
  // Only run the test once
  if (optsSupported !== undefined) {
    return optsSupported;
  }

  optsSupported = false;
  try {
    // Test whether browser supports EventListenerOptions or not
    var options = {
      get capture() {
        optsSupported = true;
      }
    };
    self.addEventListener('test-options', null, options);
    self.removeEventListener('test-options', null, options);
  } catch (err) {
    // EventListenerOptions are not supported
  }
  return optsSupported;
}

/**
  * Resets the test for whether addEventListener supports options or not.
  */
function resetEvtListenerOptsSupportForTesting() {
  optsSupported = undefined;
}

},{}],13:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCustomEvent = createCustomEvent;
exports.listen = listen;
exports.getData = getData;
exports.getDetail = getDetail;
exports.listenOnce = listenOnce;
exports.listenOncePromise = listenOncePromise;
exports.isLoaded = isLoaded;
exports.loadPromise = loadPromise;
exports.isLoadErrorMessage = isLoadErrorMessage;

var _eventHelperListen = require('./event-helper-listen');

var _log = require('./log');

/** @const {string}  */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var LOAD_FAILURE_PREFIX = 'Failed to load:';

/**
 * Returns a CustomEvent with a given type and detail; supports fallback for IE.
 * @param {!Window} win
 * @param {string} type
 * @param {!JsonObject|string|undefined|null} detail
 * @param {EventInit=} opt_eventInit
 * @return {!Event}
 */
function createCustomEvent(win, type, detail, opt_eventInit) {
  var eventInit = /** @type {!CustomEventInit} */{ detail: detail };
  Object.assign(eventInit, opt_eventInit);
  // win.CustomEvent is a function on Edge, Chrome, FF, Safari but
  // is an object on IE 11.
  if (typeof win.CustomEvent == 'function') {
    return new win.CustomEvent(type, eventInit);
  } else {
    // Deprecated fallback for IE.
    var e = win.document.createEvent('CustomEvent');
    e.initCustomEvent(type, !!eventInit.bubbles, !!eventInit.cancelable, detail);
    return e;
  }
}

/**
 * Listens for the specified event on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function listen(element, eventType, listener, opt_evtListenerOpts) {
  return (0, _eventHelperListen.internalListenImplementation)(element, eventType, listener, opt_evtListenerOpts);
}

/**
 * Returns the data property of an event with the correct type.
 * @param {!Event|{data: !JsonObject}} event
 * @return {?JsonObject|string|undefined}
 */
function getData(event) {
  return (/** @type {?JsonObject|string|undefined} */event.data
  );
}

/**
 * Returns the detail property of an event with the correct type.
 * @param {!Event|{detail: !JsonObject}} event
 * @return {?JsonObject|string|undefined}
 */
function getDetail(event) {
  return (/** @type {?JsonObject|string|undefined} */event.detail
  );
}

/**
 * Listens for the specified event on the element and removes the listener
 * as soon as event has been received.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {function(!Event)} listener
 * @param {Object=} opt_evtListenerOpts
 * @return {!UnlistenDef}
 */
function listenOnce(element, eventType, listener, opt_evtListenerOpts) {
  var localListener = listener;
  var unlisten = (0, _eventHelperListen.internalListenImplementation)(element, eventType, function (event) {
    try {
      localListener(event);
    } finally {
      // Ensure listener is GC'd
      localListener = null;
      unlisten();
    }
  }, opt_evtListenerOpts);
  return unlisten;
}

/**
 * Returns  a promise that will resolve as soon as the specified event has
 * fired on the element.
 * @param {!EventTarget} element
 * @param {string} eventType
 * @param {Object=} opt_evtListenerOpts
 * @param {function(!UnlistenDef)=} opt_cancel An optional function that, when
 *     provided, will be called with the unlistener. This gives the caller
 *     access to the unlistener, so it may be called manually when necessary.
 * @return {!Promise<!Event>}
 */
function listenOncePromise(element, eventType, opt_evtListenerOpts, opt_cancel) {
  var unlisten = void 0;
  var eventPromise = new Promise(function (resolve) {
    unlisten = listenOnce(element, eventType, resolve, opt_evtListenerOpts);
  });
  eventPromise.then(unlisten, unlisten);
  if (opt_cancel) {
    opt_cancel(unlisten);
  }
  return eventPromise;
}

/**
 * Whether the specified element/window has been loaded already.
 * @param {!Element|!Window} eleOrWindow
 * @return {boolean}
 */
function isLoaded(eleOrWindow) {
  return !!(eleOrWindow.complete || eleOrWindow.readyState == 'complete'
  // If the passed in thing is a Window, infer loaded state from
  //
  || eleOrWindow.document && eleOrWindow.document.readyState == 'complete');
}

/**
 * Returns a promise that will resolve or fail based on the eleOrWindow's 'load'
 * and 'error' events. Optionally this method takes a timeout, which will reject
 * the promise if the resource has not loaded by then.
 * @param {T} eleOrWindow Supports both Elements and as a special case Windows.
 * @return {!Promise<T>}
 * @template T
 */
function loadPromise(eleOrWindow) {
  var unlistenLoad = void 0;
  var unlistenError = void 0;
  if (isLoaded(eleOrWindow)) {
    return Promise.resolve(eleOrWindow);
  }
  var loadingPromise = new Promise(function (resolve, reject) {
    // Listen once since IE 5/6/7 fire the onload event continuously for
    // animated GIFs.
    var tagName = eleOrWindow.tagName;

    if (tagName === 'AUDIO' || tagName === 'VIDEO') {
      unlistenLoad = listenOnce(eleOrWindow, 'loadstart', resolve);
    } else {
      unlistenLoad = listenOnce(eleOrWindow, 'load', resolve);
    }
    // For elements, unlisten on error (don't for Windows).
    if (tagName) {
      unlistenError = listenOnce(eleOrWindow, 'error', reject);
    }
  });

  return loadingPromise.then(function () {
    if (unlistenError) {
      unlistenError();
    }
    return eleOrWindow;
  }, function () {
    if (unlistenLoad) {
      unlistenLoad();
    }
    failedToLoad(eleOrWindow);
  });
}

/**
 * Emit error on load failure.
 * @param {!Element|!Window} eleOrWindow Supports both Elements and as a special
 *     case Windows.
 */
function failedToLoad(eleOrWindow) {
  // Report failed loads as user errors so that they automatically go
  // into the "document error" bucket.
  var target = eleOrWindow;
  if (target && target.src) {
    target = target.src;
  }
  throw (0, _log.user)().createError(LOAD_FAILURE_PREFIX, target);
}

/**
 * Returns true if this error message is was created for a load error.
 * @param {string} message An error message
 * @return {boolean}
 */
function isLoadErrorMessage(message) {
  return message.indexOf(LOAD_FAILURE_PREFIX) != -1;
}

},{"./event-helper-listen":12,"./log":19}],14:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RANDOM_NUMBER_GENERATORS = exports.ExperimentInfo = undefined;
exports.isCanary = isCanary;
exports.getBinaryType = getBinaryType;
exports.isExperimentOn = isExperimentOn;
exports.toggleExperiment = toggleExperiment;
exports.experimentToggles = experimentToggles;
exports.experimentTogglesOrNull = experimentTogglesOrNull;
exports.getExperimentToglesFromCookieForTesting = getExperimentToglesFromCookieForTesting;
exports.resetExperimentTogglesForTesting = resetExperimentTogglesForTesting;
exports.randomlySelectUnsetExperiments = randomlySelectUnsetExperiments;
exports.getExperimentBranch = getExperimentBranch;
exports.forceExperimentBranch = forceExperimentBranch;

var _cookies = require('./cookies');

var _object = require('./utils/object');

var _url = require('./url');

/** @const {string} */
var COOKIE_NAME = 'AMP_EXP';

/** @const {number} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Experiments system allows a developer to opt-in to test
 * features that are not yet fully tested.
 *
 * Experiments page: https://cdn.ampproject.org/experiments.html *
 */

var COOKIE_MAX_AGE_DAYS = 180; // 6 month

/** @const {time} */
var COOKIE_EXPIRATION_INTERVAL = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

/** @const {string} */
var TOGGLES_WINDOW_PROPERTY = '__AMP__EXPERIMENT_TOGGLES';

/**
 * @typedef {{
 *   isTrafficEligible: function(!Window):boolean,
 *   branches: !Array<string>
 * }}
 */
var ExperimentInfo = exports.ExperimentInfo = void 0;

/**
 * Whether we are in canary.
 * @param {!Window} win
 * @return {boolean}
 */
function isCanary(win) {
  return !!(win.AMP_CONFIG && win.AMP_CONFIG.canary);
}

/**
 * Returns binary type, e.g., canary, control, or production.
 * @param {!Window} win
 * @return {string}
 */
function getBinaryType(win) {
  return win.AMP_CONFIG && win.AMP_CONFIG.type ? win.AMP_CONFIG.type : 'unknown';
}

/**
 * Whether the specified experiment is on or off.
 * @param {!Window} win
 * @param {string} experimentId
 * @return {boolean}
 */
function isExperimentOn(win, experimentId) {
  var toggles = experimentToggles(win);
  return !!toggles[experimentId];
}

/**
 * Toggles the experiment on or off. Returns the actual value of the experiment
 * after toggling is done.
 * @param {!Window} win
 * @param {string} experimentId
 * @param {boolean=} opt_on
 * @param {boolean=} opt_transientExperiment  Whether to toggle the
 *     experiment state "transiently" (i.e., for this page load only) or
 *     durably (by saving the experiment IDs to the cookie after toggling).
 *     Default: false (save durably).
 * @return {boolean} New state for experimentId.
 */
function toggleExperiment(win, experimentId, opt_on, opt_transientExperiment) {
  var currentlyOn = isExperimentOn(win, /*OK*/experimentId);
  var on = !!(opt_on !== undefined ? opt_on : !currentlyOn);
  if (on != currentlyOn) {
    var toggles = experimentToggles(win);
    toggles[experimentId] = on;

    if (!opt_transientExperiment) {
      var cookieToggles = getExperimentTogglesFromCookie(win);
      cookieToggles[experimentId] = on;
      saveExperimentTogglesToCookie(win, cookieToggles);
    }
  }
  return on;
}

/**
 * Calculate whether the experiment is on or off based off of the
 * cookieFlag or the global config frequency given.
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 */
function experimentToggles(win) {
  if (win[TOGGLES_WINDOW_PROPERTY]) {
    return win[TOGGLES_WINDOW_PROPERTY];
  }
  win[TOGGLES_WINDOW_PROPERTY] = Object.create(null);
  var toggles = win[TOGGLES_WINDOW_PROPERTY];

  // Read the default config of this build.
  if (win.AMP_CONFIG) {
    for (var experimentId in win.AMP_CONFIG) {
      var frequency = win.AMP_CONFIG[experimentId];
      if (typeof frequency === 'number' && frequency >= 0 && frequency <= 1) {
        toggles[experimentId] = Math.random() < frequency;
      }
    }
  }
  // Read document level override from meta tag.
  if (win.AMP_CONFIG && Array.isArray(win.AMP_CONFIG['allow-doc-opt-in']) && win.AMP_CONFIG['allow-doc-opt-in'].length > 0) {
    var allowed = win.AMP_CONFIG['allow-doc-opt-in'];
    var meta = win.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
    if (meta) {
      var optedInExperiments = meta.getAttribute('content').split(',');
      for (var i = 0; i < optedInExperiments.length; i++) {
        if (allowed.indexOf(optedInExperiments[i]) != -1) {
          toggles[optedInExperiments[i]] = true;
        }
      }
    }
  }

  Object.assign(toggles, getExperimentTogglesFromCookie(win));

  if (win.AMP_CONFIG && Array.isArray(win.AMP_CONFIG['allow-url-opt-in']) && win.AMP_CONFIG['allow-url-opt-in'].length > 0) {
    var _allowed = win.AMP_CONFIG['allow-url-opt-in'];
    var hash = win.location.originalHash || win.location.hash;
    var params = (0, _url.parseQueryString)(hash);
    for (var _i = 0; _i < _allowed.length; _i++) {
      var param = params['e-' + _allowed[_i]];
      if (param == '1') {
        toggles[_allowed[_i]] = true;
      }
      if (param == '0') {
        toggles[_allowed[_i]] = false;
      }
    }
  }
  return toggles;
}

/**
 * Returns the cached experiments toggles, or null if they have not been
 * computed yet.
 * @param {!Window} win
 * @return {Object<string, boolean>}
 */
function experimentTogglesOrNull(win) {
  return win[TOGGLES_WINDOW_PROPERTY] || null;
}

/**
 * Returns a set of experiment IDs currently on.
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 */
function getExperimentTogglesFromCookie(win) {
  var experimentCookie = (0, _cookies.getCookie)(win, COOKIE_NAME);
  var tokens = experimentCookie ? experimentCookie.split(/\s*,\s*/g) : [];

  var toggles = Object.create(null);
  for (var i = 0; i < tokens.length; i++) {
    if (tokens[i].length == 0) {
      continue;
    }
    if (tokens[i][0] == '-') {
      toggles[tokens[i].substr(1)] = false;
    } else {
      toggles[tokens[i]] = true;
    }
  }

  return toggles;
}

/**
 * Saves a set of experiment IDs currently on.
 * @param {!Window} win
 * @param {!Object<string, boolean>} toggles
 */
function saveExperimentTogglesToCookie(win, toggles) {
  var experimentIds = [];
  for (var experiment in toggles) {
    experimentIds.push((toggles[experiment] === false ? '-' : '') + experiment);
  }

  (0, _cookies.setCookie)(win, COOKIE_NAME, experimentIds.join(','), Date.now() + COOKIE_EXPIRATION_INTERVAL, {
    // Set explicit domain, so the cookie gets send to sub domains.
    domain: win.location.hostname,
    allowOnProxyOrigin: true
  });
}

/**
 * See getExperimentTogglesFromCookie().
 * @param {!Window} win
 * @return {!Object<string, boolean>}
 * @visibleForTesting
 */
function getExperimentToglesFromCookieForTesting(win) {
  return getExperimentTogglesFromCookie(win);
}

/**
 * Resets the experimentsToggle cache for testing purposes.
 * @param {!Window} win
 * @visibleForTesting
 */
function resetExperimentTogglesForTesting(win) {
  (0, _cookies.setCookie)(win, COOKIE_NAME, '', 0, {
    domain: win.location.hostname
  });
  win[TOGGLES_WINDOW_PROPERTY] = null;
}

/**
 * In some browser implementations of Math.random(), sequential calls of
 * Math.random() are correlated and can cause a bias.  In particular,
 * if the previous random() call was < 0.001 (as it will be if we select
 * into an experiment), the next value could be less than 0.5 more than
 * 50.7% of the time.  This provides an implementation that roots down into
 * the crypto API, when available, to produce less biased samples.
 *
 * @return {number} Pseudo-random floating-point value on the range [0, 1).
 */
function slowButAccuratePrng() {
  // TODO(tdrl): Implement.
  return Math.random();
}

/**
 * Container for alternate random number generator implementations.  This
 * allows us to set an "accurate" PRNG for branch selection, but to mock it
 * out easily in tests.
 *
 * @visibleForTesting
 * @const {!{accuratePrng: function():number}}
 */
var RANDOM_NUMBER_GENERATORS = exports.RANDOM_NUMBER_GENERATORS = {
  accuratePrng: slowButAccuratePrng
};

/**
 * Selects, uniformly at random, a single item from the array.
 * @param {!Array<string>} arr Object to select from.
 * @return {?string} Single item from arr or null if arr was empty.
 */
function selectRandomItem(arr) {
  var rn = RANDOM_NUMBER_GENERATORS.accuratePrng();
  return arr[Math.floor(rn * arr.length)] || null;
}

/**
 * Selects which page-level experiment branches are enabled. If a given
 * experiment name is already set (including to the null / no branches selected
 * state), this won't alter its state.
 *
 * Check whether a given experiment is set using isExperimentOn(win,
 * experimentName) and, if it is on, look for which branch is selected in
 * win.experimentBranches[experimentName].
 *
 * @param {!Window} win Window context on which to save experiment
 *     selection state.
 * @param {!Object<string, !ExperimentInfo>} experiments  Set of experiments to
 *     configure for this page load.
 * @return {!Object<string, string>} Map of experiment names to selected
 *     branches.
 */
function randomlySelectUnsetExperiments(win, experiments) {
  win.experimentBranches = win.experimentBranches || {};
  var selectedExperiments = {};
  for (var experimentName in experiments) {
    // Skip experimentName if it is not a key of experiments object or if it
    // has already been populated by some other property.
    if (!(0, _object.hasOwn)(experiments, experimentName)) {
      continue;
    }
    if ((0, _object.hasOwn)(win.experimentBranches, experimentName)) {
      selectedExperiments[experimentName] = win.experimentBranches[experimentName];
      continue;
    }

    if (!experiments[experimentName].isTrafficEligible || !experiments[experimentName].isTrafficEligible(win)) {
      win.experimentBranches[experimentName] = null;
      continue;
    }

    // If we're in the experiment, but we haven't already forced a specific
    // experiment branch (e.g., via a test setup), then randomize the branch
    // choice.
    if (!win.experimentBranches[experimentName] && isExperimentOn(win, /*OK*/experimentName)) {
      var branches = experiments[experimentName].branches;

      win.experimentBranches[experimentName] = selectRandomItem(branches);
      selectedExperiments[experimentName] = win.experimentBranches[experimentName];
    }
  }
  return selectedExperiments;
}

/**
 * Returns the experiment branch enabled for the given experiment ID.
 * For example, 'control' or 'experiment'.
 *
 * @param {!Window} win Window context to check for experiment state.
 * @param {string} experimentName Name of the experiment to check.
 * @return {?string} Active experiment branch ID for experimentName (possibly
 *     null if experimentName has been tested but no branch was enabled).
 */
function getExperimentBranch(win, experimentName) {
  return win.experimentBranches ? win.experimentBranches[experimentName] : null;
}

/**
 * Force enable (or disable) a specific branch of a given experiment name.
 * Disables the experiment name altogether if branchId is falseish.
 *
 * @param {!Window} win Window context to check for experiment state.
 * @param {string} experimentName Name of the experiment to check.
 * @param {?string} branchId ID of branch to force or null to disable
 *     altogether.
 * @visibleForTesting
 */
function forceExperimentBranch(win, experimentName, branchId) {
  win.experimentBranches = win.experimentBranches || {};
  toggleExperiment(win, experimentName, !!branchId, true);
  win.experimentBranches[experimentName] = branchId;
}

},{"./cookies":8,"./url":43,"./utils/object":47}],15:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinchRecognizer = exports.TapzoomRecognizer = exports.SwipeYRecognizer = exports.SwipeXRecognizer = exports.SwipeXYRecognizer = exports.SwipeDef = exports.DoubletapRecognizer = exports.TapRecognizer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gesture = require('./gesture');

var _motion = require('./motion');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * A "tap" gesture.
 * @typedef {{
 *   clientX: number,
 *   clientY: number
 * }}
 */
var TapDef = void 0;

/**
 * Recognizes "tap" gestures.
 * @extends {GestureRecognizer<TapDef>}
 */

var TapRecognizer = exports.TapRecognizer = function (_GestureRecognizer) {
  _inherits(TapRecognizer, _GestureRecognizer);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function TapRecognizer(manager) {
    _classCallCheck(this, TapRecognizer);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (TapRecognizer.__proto__ || Object.getPrototypeOf(TapRecognizer)).call(this, 'tap', manager));

    _this.startX_ = 0;

    /** @private {number} */
    _this.startY_ = 0;

    /** @private {number} */
    _this.lastX_ = 0;

    /** @private {number} */
    _this.lastY_ = 0;

    /** @private {?EventTarget} */
    _this.target_ = null;
    return _this;
  }

  /** @override */


  _createClass(TapRecognizer, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      var touches = e.touches;

      this.target_ = e.target;
      if (touches && touches.length == 1) {
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var touches = e.changedTouches || e.touches;
      if (touches && touches.length == 1) {
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
        var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
        if (dx || dy) {
          return false;
        }
      }
      return true;
    }

    /** @override */

  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(unusedE) {
      this.signalReady(0);
    }

    /** @override */

  }, {
    key: 'acceptStart',
    value: function acceptStart() {
      this.signalEmit({
        clientX: this.lastX_,
        clientY: this.lastY_,
        target: this.target_
      }, null);
      this.signalEnd();
    }
  }]);

  return TapRecognizer;
}(_gesture.GestureRecognizer);

/**
 * A "doubletap" gesture.
 * @typedef {{
 *   clientX: number,
 *   clientY: number
 * }}
 */


var DoubletapDef = void 0;

/**
 * Recognizes a "doubletap" gesture. This gesture will block a single "tap"
 * for about 300ms while it's expecting the second "tap".
 * @extends {GestureRecognizer<DoubletapDef>}
 */

var DoubletapRecognizer = exports.DoubletapRecognizer = function (_GestureRecognizer2) {
  _inherits(DoubletapRecognizer, _GestureRecognizer2);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function DoubletapRecognizer(manager) {
    _classCallCheck(this, DoubletapRecognizer);

    /** @private {number} */
    var _this2 = _possibleConstructorReturn(this, (DoubletapRecognizer.__proto__ || Object.getPrototypeOf(DoubletapRecognizer)).call(this, 'doubletap', manager));

    _this2.startX_ = 0;

    /** @private {number} */
    _this2.startY_ = 0;

    /** @private {number} */
    _this2.lastX_ = 0;

    /** @private {number} */
    _this2.lastY_ = 0;

    /** @private {number} */
    _this2.tapCount_ = 0;

    /** @private {?Event} */
    _this2.event_ = null;
    return _this2;
  }

  /** @override */


  _createClass(DoubletapRecognizer, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      if (this.tapCount_ > 1) {
        return false;
      }
      var touches = e.touches;

      if (touches && touches.length == 1) {
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var touches = e.touches;

      if (touches && touches.length == 1) {
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
        var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
        if (dx || dy) {
          this.acceptCancel();
          return false;
        }
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      this.tapCount_++;
      if (this.tapCount_ < 2) {
        this.signalPending(300);
      } else {
        this.event_ = e;
        this.signalReady(0);
      }
    }

    /** @override */

  }, {
    key: 'acceptStart',
    value: function acceptStart() {
      this.tapCount_ = 0;
      this.signalEmit({ clientX: this.lastX_, clientY: this.lastY_ }, this.event_);
      this.signalEnd();
    }

    /** @override */

  }, {
    key: 'acceptCancel',
    value: function acceptCancel() {
      this.tapCount_ = 0;
    }
  }]);

  return DoubletapRecognizer;
}(_gesture.GestureRecognizer);

/**
 * A "swipe-xy", "swipe-x" or "swipe-y" gesture. A number of these gestures
 * may be emitted for a single touch series.
 * @typedef {{
 *   first: boolean,
 *   last: boolean,
 *   deltaX: number,
 *   deltaY: number,
 *   velocityX: number,
 *   velocityY: number
 * }}
 */


var SwipeDef = exports.SwipeDef = void 0;

/**
 * Recognizes swipe gestures. This gesture will yield about 10ms to other
 * gestures.
 * @extends {GestureRecognizer<SwipeDef>}
 */

var SwipeRecognizer = function (_GestureRecognizer3) {
  _inherits(SwipeRecognizer, _GestureRecognizer3);

  /**
   * @param {string} type
   * @param {!./gesture.Gestures} manager
   * @param {boolean} horiz
   * @param {boolean} vert
   */
  function SwipeRecognizer(type, manager, horiz, vert) {
    _classCallCheck(this, SwipeRecognizer);

    /** @private {boolean} */
    var _this3 = _possibleConstructorReturn(this, (SwipeRecognizer.__proto__ || Object.getPrototypeOf(SwipeRecognizer)).call(this, type, manager));

    _this3.horiz_ = horiz;

    /** @private {boolean} */
    _this3.vert_ = vert;

    /** @private {boolean} */
    _this3.eventing_ = false;

    /** @private {number} */
    _this3.startX_ = 0;

    /** @private {number} */
    _this3.startY_ = 0;

    /** @private {number} */
    _this3.lastX_ = 0;

    /** @private {number} */
    _this3.lastY_ = 0;

    /** @private {number} */
    _this3.prevX_ = 0;

    /** @private {number} */
    _this3.prevY_ = 0;

    /** @private {time} */
    _this3.startTime_ = 0;

    /** @private {time} */
    _this3.lastTime_ = 0;

    /** @private {time} */
    _this3.prevTime_ = 0;

    /** @private {number} */
    _this3.velocityX_ = 0;

    /** @private {number} */
    _this3.velocityY_ = 0;
    return _this3;
  }

  /** @override */


  _createClass(SwipeRecognizer, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      var touches = e.touches;

      if (touches && touches.length == 1) {
        this.startTime_ = Date.now();
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var touches = e.touches;

      if (touches && touches.length == 1) {
        var _touches$ = touches[0],
            x = _touches$.clientX,
            y = _touches$.clientY;

        this.lastX_ = x;
        this.lastY_ = y;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx = Math.abs(x - this.startX_);
          var dy = Math.abs(y - this.startY_);
          // Swipe is penalized slightly since it's one of the least demanding
          // gesture, thus -10 in signalReady.
          if (this.horiz_ && this.vert_) {
            if (dx >= 8 || dy >= 8) {
              this.signalReady(-10);
            }
          } else if (this.horiz_) {
            if (dx >= 8 && dx > dy) {
              this.signalReady(-10);
            } else if (dy >= 8) {
              return false;
            }
          } else if (this.vert_) {
            if (dy >= 8 && dy > dx) {
              this.signalReady(-10);
            } else if (dx >= 8) {
              return false;
            }
          } else {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      this.end_(e);
    }

    /** @override */

  }, {
    key: 'acceptStart',
    value: function acceptStart() {
      this.eventing_ = true;
      // Reset start coordinates to where the gesture began to avoid visible
      // jump, but preserve them as "prev" coordinates to calculate the right
      // velocity.
      this.prevX_ = this.startX_;
      this.prevY_ = this.startY_;
      this.prevTime_ = this.startTime_;
      this.startX_ = this.lastX_;
      this.startY_ = this.lastY_;
      this.emit_(true, false, null);
    }

    /** @override */

  }, {
    key: 'acceptCancel',
    value: function acceptCancel() {
      this.eventing_ = false;
    }

    /**
     * @param {boolean} first
     * @param {boolean} last
     * @param {?Event} event
     * @private
     */

  }, {
    key: 'emit_',
    value: function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      var deltaTime = this.lastTime_ - this.prevTime_;
      // It's often that `touchend` arrives on the next frame. These should
      // be ignored to avoid a significant velocity downgrade.
      if (!last && deltaTime > 4 || last && deltaTime > 16) {
        this.velocityX_ = (0, _motion.calcVelocity)(this.lastX_ - this.prevX_, deltaTime, this.velocityX_);
        this.velocityY_ = (0, _motion.calcVelocity)(this.lastY_ - this.prevY_, deltaTime, this.velocityY_);
        this.velocityX_ = Math.abs(this.velocityX_) > 1e-4 ? this.velocityX_ : 0;
        this.velocityY_ = Math.abs(this.velocityY_) > 1e-4 ? this.velocityY_ : 0;
        this.prevX_ = this.lastX_;
        this.prevY_ = this.lastY_;
        this.prevTime_ = this.lastTime_;
      }

      this.signalEmit({
        first: first,
        last: last,
        time: this.lastTime_,
        deltaX: this.horiz_ ? this.lastX_ - this.startX_ : 0,
        deltaY: this.vert_ ? this.lastY_ - this.startY_ : 0,
        startX: this.startX_,
        startY: this.startY_,
        lastX: this.lastX_,
        lastY: this.lastY_,
        velocityX: this.horiz_ ? this.velocityX_ : 0,
        velocityY: this.vert_ ? this.velocityY_ : 0
      }, event);
    }

    /**
     * @param {?Event} event
     * @private
     */

  }, {
    key: 'end_',
    value: function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    }
  }]);

  return SwipeRecognizer;
}(_gesture.GestureRecognizer);

/**
 * Recognizes "swipe-xy" gesture. Yields about 10ms to other gestures.
 */


var SwipeXYRecognizer = exports.SwipeXYRecognizer = function (_SwipeRecognizer) {
  _inherits(SwipeXYRecognizer, _SwipeRecognizer);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeXYRecognizer(manager) {
    _classCallCheck(this, SwipeXYRecognizer);

    return _possibleConstructorReturn(this, (SwipeXYRecognizer.__proto__ || Object.getPrototypeOf(SwipeXYRecognizer)).call(this, 'swipe-xy', manager, true, true));
  }

  return SwipeXYRecognizer;
}(SwipeRecognizer);

/**
 * Recognizes "swipe-x" gesture. Yields about 10ms to other gestures.
 */


var SwipeXRecognizer = exports.SwipeXRecognizer = function (_SwipeRecognizer2) {
  _inherits(SwipeXRecognizer, _SwipeRecognizer2);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeXRecognizer(manager) {
    _classCallCheck(this, SwipeXRecognizer);

    return _possibleConstructorReturn(this, (SwipeXRecognizer.__proto__ || Object.getPrototypeOf(SwipeXRecognizer)).call(this, 'swipe-x', manager, true, false));
  }

  return SwipeXRecognizer;
}(SwipeRecognizer);

/**
 * Recognizes "swipe-y" gesture. Yields about 10ms to other gestures.
 */


var SwipeYRecognizer = exports.SwipeYRecognizer = function (_SwipeRecognizer3) {
  _inherits(SwipeYRecognizer, _SwipeRecognizer3);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function SwipeYRecognizer(manager) {
    _classCallCheck(this, SwipeYRecognizer);

    return _possibleConstructorReturn(this, (SwipeYRecognizer.__proto__ || Object.getPrototypeOf(SwipeYRecognizer)).call(this, 'swipe-y', manager, false, true));
  }

  return SwipeYRecognizer;
}(SwipeRecognizer);

/**
 * A "tapzoom" gesture. It has a center, delta off the center center and
 * the velocity of moving away from the center.
 * @typedef {{
 *   first: boolean,
 *   last: boolean,
 *   centerClientX: number,
 *   centerClientY: number,
 *   deltaX: number,
 *   deltaY: number,
 *   velocityX: number,
 *   velocityY: number
 * }}
 */


var TapzoomDef = void 0;

/**
 * Recognizes a "tapzoom" gesture. This gesture will block other gestures
 * for about 400ms after first "tap" while it's expecting swipe.
 * @extends {GestureRecognizer<TapzoomDef>}
 */

var TapzoomRecognizer = exports.TapzoomRecognizer = function (_GestureRecognizer4) {
  _inherits(TapzoomRecognizer, _GestureRecognizer4);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function TapzoomRecognizer(manager) {
    _classCallCheck(this, TapzoomRecognizer);

    /** @private {boolean} */
    var _this7 = _possibleConstructorReturn(this, (TapzoomRecognizer.__proto__ || Object.getPrototypeOf(TapzoomRecognizer)).call(this, 'tapzoom', manager));

    _this7.eventing_ = false;

    /** @private {number} */
    _this7.startX_ = 0;

    /** @private {number} */
    _this7.startY_ = 0;

    /** @private {number} */
    _this7.lastX_ = 0;

    /** @private {number} */
    _this7.lastY_ = 0;

    /** @private {number} */
    _this7.tapCount_ = 0;

    /** @private {number} */
    _this7.prevX_ = 0;

    /** @private {number} */
    _this7.prevY_ = 0;

    /** @private {time} */
    _this7.lastTime_ = 0;

    /** @private {time} */
    _this7.prevTime_ = 0;

    /** @private {number} */
    _this7.velocityX_ = 0;

    /** @private {number} */
    _this7.velocityY_ = 0;
    return _this7;
  }

  /** @override */


  _createClass(TapzoomRecognizer, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      if (this.eventing_) {
        return false;
      }
      var touches = e.touches;

      if (touches && touches.length == 1) {
        this.startX_ = touches[0].clientX;
        this.startY_ = touches[0].clientY;
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var touches = e.touches;

      if (touches && touches.length == 1) {
        this.lastX_ = touches[0].clientX;
        this.lastY_ = touches[0].clientY;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx = Math.abs(this.lastX_ - this.startX_) >= 8;
          var dy = Math.abs(this.lastY_ - this.startY_) >= 8;
          if (dx || dy) {
            if (this.tapCount_ == 0) {
              this.acceptCancel();
              return false;
            } else {
              this.signalReady(0);
            }
          }
        }
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      if (this.eventing_) {
        this.end_(e);
        return;
      }

      this.tapCount_++;
      if (this.tapCount_ == 1) {
        this.signalPending(400);
        return;
      }

      this.acceptCancel();
    }

    /** @override */

  }, {
    key: 'acceptStart',
    value: function acceptStart() {
      this.tapCount_ = 0;
      this.eventing_ = true;
      this.emit_(true, false, null);
    }

    /** @override */

  }, {
    key: 'acceptCancel',
    value: function acceptCancel() {
      this.tapCount_ = 0;
      this.eventing_ = false;
    }

    /**
     * @param {boolean} first
     * @param {boolean} last
     * @param {?Event} event
     * @private
     */

  }, {
    key: 'emit_',
    value: function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      if (first) {
        this.velocityX_ = this.velocityY_ = 0;
      } else if (this.lastTime_ - this.prevTime_ > 2) {
        this.velocityX_ = (0, _motion.calcVelocity)(this.lastX_ - this.prevX_, this.lastTime_ - this.prevTime_, this.velocityX_);
        this.velocityY_ = (0, _motion.calcVelocity)(this.lastY_ - this.prevY_, this.lastTime_ - this.prevTime_, this.velocityY_);
      }
      this.prevX_ = this.lastX_;
      this.prevY_ = this.lastY_;
      this.prevTime_ = this.lastTime_;

      this.signalEmit({
        first: first,
        last: last,
        centerClientX: this.startX_,
        centerClientY: this.startY_,
        deltaX: this.lastX_ - this.startX_,
        deltaY: this.lastY_ - this.startY_,
        velocityX: this.velocityX_,
        velocityY: this.velocityY_
      }, event);
    }

    /**
     * @param {?Event} event
     * @private
     */

  }, {
    key: 'end_',
    value: function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    }
  }]);

  return TapzoomRecognizer;
}(_gesture.GestureRecognizer);

/**
 * A "pinch" gesture. It has a center, delta off the center center and
 * the velocity of moving away from the center. "dir" component of `1`
 * indicates that it's a expand motion and `-1` indicates pinch motion.
 * @typedef {{
 *   first: boolean,
 *   last: boolean,
 *   centerClientX: number,
 *   centerClientY: number,
 *   dir: number,
 *   deltaX: number,
 *   deltaY: number,
 *   velocityX: number,
 *   velocityY: number
 * }}
 */


var PinchDef = void 0;

/**
 * Threshold in pixels for how much two touches move away from
 * each other before we recognize the gesture as a pinch.
 */
var PINCH_ACCEPT_THRESHOLD = 4;

/**
 * Threshold in pixels for how much two touches move in the same
 * direction before we reject the gesture as a pinch.
 */
var PINCH_REJECT_THRESHOLD = 10;

/**
 * Recognizes a "pinch" gesture.
 * @extends {GestureRecognizer<PinchDef>}
 */

var PinchRecognizer = exports.PinchRecognizer = function (_GestureRecognizer5) {
  _inherits(PinchRecognizer, _GestureRecognizer5);

  /**
   * @param {!./gesture.Gestures} manager
   */
  function PinchRecognizer(manager) {
    _classCallCheck(this, PinchRecognizer);

    /** @private {boolean} */
    var _this8 = _possibleConstructorReturn(this, (PinchRecognizer.__proto__ || Object.getPrototypeOf(PinchRecognizer)).call(this, 'pinch', manager));

    _this8.eventing_ = false;

    /** @private {number} */
    _this8.startX1_ = 0;
    /** @private {number} */
    _this8.startY1_ = 0;

    /** @private {number} */
    _this8.startX2_ = 0;
    /** @private {number} */
    _this8.startY2_ = 0;

    /** @private {number} */
    _this8.lastX1_ = 0;
    /** @private {number} */
    _this8.lastY1_ = 0;

    /** @private {number} */
    _this8.lastX2_ = 0;
    /** @private {number} */
    _this8.lastY2_ = 0;

    /** @private {number} */
    _this8.prevDeltaX_ = 0;
    /** @private {number} */
    _this8.prevDeltaY_ = 0;

    /** @private {number} */
    _this8.centerClientX_ = 0;
    /** @private {number} */
    _this8.centerClientY_ = 0;

    /** @private {time} */
    _this8.startTime_ = 0;
    /** @private {time} */
    _this8.lastTime_ = 0;
    /** @private {time} */
    _this8.prevTime_ = 0;

    /** @private {number} */
    _this8.velocityX_ = 0;
    /** @private {number} */
    _this8.velocityY_ = 0;
    return _this8;
  }

  /** @override */


  _createClass(PinchRecognizer, [{
    key: 'onTouchStart',
    value: function onTouchStart(e) {
      var touches = e.touches;
      // Pinch touches are not always simultaneous, continue to listen
      // for second touch.

      if (touches && touches.length == 1) {
        return true;
      } else if (touches && touches.length == 2) {
        this.startTime_ = Date.now();
        this.startX1_ = touches[0].clientX;
        this.startY1_ = touches[0].clientY;
        this.startX2_ = touches[1].clientX;
        this.startY2_ = touches[1].clientY;
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchMove',
    value: function onTouchMove(e) {
      var touches = e.touches;
      // Pinch touches are not always simultaneous, continue to listen
      // for second touch.

      if (touches && touches.length == 1) {
        return true;
      } else if (touches && touches.length == 2) {
        this.lastX1_ = touches[0].clientX;
        this.lastY1_ = touches[0].clientY;
        this.lastX2_ = touches[1].clientX;
        this.lastY2_ = touches[1].clientY;
        if (this.eventing_) {
          this.emit_(false, false, e);
        } else {
          var dx1 = this.lastX1_ - this.startX1_;
          var dy1 = this.lastY1_ - this.startY1_;
          var dx2 = this.lastX2_ - this.startX2_;
          var dy2 = this.lastY2_ - this.startY2_;
          // Fingers should move in opposite directions and go over the threshold.
          if (dx1 * dx2 <= 0 && dy1 * dy2 <= 0) {
            if (Math.abs(dx1 - dx2) >= PINCH_ACCEPT_THRESHOLD || Math.abs(dy1 - dy2) >= PINCH_ACCEPT_THRESHOLD) {
              this.signalReady(0);
            }
          } else if (Math.abs(dx1 + dx2) >= PINCH_REJECT_THRESHOLD || Math.abs(dy1 + dy2) >= PINCH_REJECT_THRESHOLD) {
            // Moving in the same direction over a threshold.
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }

    /** @override */

  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(e) {
      this.end_(e);
    }

    /** @override */

  }, {
    key: 'acceptStart',
    value: function acceptStart() {
      this.eventing_ = true;
      this.prevTime_ = this.startTime_;
      this.prevDeltaX_ = 0;
      this.prevDeltaY_ = 0;
      this.centerClientX_ = (this.startX1_ + this.startX2_) * 0.5;
      this.centerClientY_ = (this.startY1_ + this.startY2_) * 0.5;
      this.emit_(true, false, null);
    }

    /** @override */

  }, {
    key: 'acceptCancel',
    value: function acceptCancel() {
      this.eventing_ = false;
    }

    /**
     * @param {boolean} first
     * @param {boolean} last
     * @param {?Event} event
     * @private
     */

  }, {
    key: 'emit_',
    value: function emit_(first, last, event) {
      this.lastTime_ = Date.now();
      var deltaTime = this.lastTime_ - this.prevTime_;
      var deltaX = this.deltaX_();
      var deltaY = this.deltaY_();
      // It's often that `touchend` arrives on the next frame. These should
      // be ignored to avoid a significant velocity downgrade.
      if (!last && deltaTime > 4 || last && deltaTime > 16) {
        this.velocityX_ = (0, _motion.calcVelocity)(deltaX - this.prevDeltaX_, deltaTime, this.velocityX_);
        this.velocityY_ = (0, _motion.calcVelocity)(deltaY - this.prevDeltaY_, deltaTime, this.velocityY_);
        this.velocityX_ = Math.abs(this.velocityX_) > 1e-4 ? this.velocityX_ : 0;
        this.velocityY_ = Math.abs(this.velocityY_) > 1e-4 ? this.velocityY_ : 0;
        this.prevDeltaX_ = deltaX;
        this.prevDeltaY_ = deltaY;
        this.prevTime_ = this.lastTime_;
      }

      var startSq = this.sqDist_(this.startX1_, this.startX2_, this.startY1_, this.startY2_);
      var lastSq = this.sqDist_(this.lastX1_, this.lastX2_, this.lastY1_, this.lastY2_);
      this.signalEmit({
        first: first,
        last: last,
        time: this.lastTime_,
        centerClientX: this.centerClientX_,
        centerClientY: this.centerClientY_,
        dir: Math.sign(lastSq - startSq),
        deltaX: deltaX * 0.5,
        deltaY: deltaY * 0.5,
        velocityX: this.velocityX_ * 0.5,
        velocityY: this.velocityY_ * 0.5
      }, event);
    }

    /**
     * @param {?Event} event
     * @private
     */

  }, {
    key: 'end_',
    value: function end_(event) {
      if (this.eventing_) {
        this.eventing_ = false;
        this.emit_(false, true, event);
        this.signalEnd();
      }
    }

    /**
     * @param {number} x1
     * @param {number} x2
     * @param {number} y1
     * @param {number} y2
     * @return {number}
     * @private
     */

  }, {
    key: 'sqDist_',
    value: function sqDist_(x1, x2, y1, y2) {
      return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'deltaX_',
    value: function deltaX_() {
      return Math.abs(this.lastX1_ - this.startX1_ - (this.lastX2_ - this.startX2_));
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'deltaY_',
    value: function deltaY_() {
      return Math.abs(this.lastY1_ - this.startY1_ - (this.lastY2_ - this.startY2_));
    }
  }]);

  return PinchRecognizer;
}(_gesture.GestureRecognizer);

},{"./gesture":16,"./motion":22}],16:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GestureRecognizer = exports.Gestures = exports.Gesture = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observable = require('./observable');

var _pass = require('./pass');

var _log = require('./log');

var _array = require('./utils/array');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

var PROP_ = '__AMP_Gestures';

/**
 * A gesture object contains the type and data of the gesture such as
 * a tap or a double-tap or a swipe. See {@link GestureRecognizer} for
 * more details.
 * @struct
 * @const
 * @template DATA
 */

var Gesture =
/**
 * @param {string} type The gesture's string type.
 * @param {DATA} data The data of the gesture.
 * @param {time} time The time that the gesture has been emitted.
 * @param {?Event} event An optional browser event that resulted in the
 *   gesture.
 */
exports.Gesture = function Gesture(type, data, time, event) {
  _classCallCheck(this, Gesture);

  /** @const {string} */
  this.type = type;
  /** @const {DATA} */
  this.data = data;
  /** @const {time} */
  this.time = time;
  /** @const {?Event} */
  this.event = event;
};

/**
 * Gestures object manages all gestures on a particular element. It listens
 * to all pointer events and delegates them to individual gesture recognizers.
 * When a recognizer has recognized a gesture and ready to start emitting it
 * it requests permission to do so from this class which resolves conflicts
 * between competing recognizers to decide which gesture should go forward.
 */


var Gestures = exports.Gestures = function () {
  _createClass(Gestures, null, [{
    key: 'get',


    /**
     * Creates if not yet created and returns the shared Gestures instance for
     * the specified element.
     * @param {!Element} element
     * @param {boolean=} opt_shouldNotPreventDefault
     * @return {!Gestures}
     */
    value: function get(element) {
      var opt_shouldNotPreventDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var res = element[PROP_];
      if (!res) {
        res = new Gestures(element, opt_shouldNotPreventDefault);
        element[PROP_] = res;
      }
      return res;
    }

    /**
     * @param {!Element} element
     * @param {boolean} shouldNotPreventDefault
     */

  }]);

  function Gestures(element, shouldNotPreventDefault) {
    _classCallCheck(this, Gestures);

    /** @private {!Element} */
    this.element_ = element;

    /** @private {!Array<!GestureRecognizer>} */
    this.recognizers_ = [];

    /** @private {!Array<boolean>} */
    this.tracking_ = [];

    /** @private {!Array<time>} */
    this.ready_ = [];

    /** @private {!Array<time>} */
    this.pending_ = [];

    /** @private {?GestureRecognizer} */
    this.eventing_ = null;

    /** @private {boolean} */
    this.shouldNotPreventDefault_ = shouldNotPreventDefault;

    /**
     * This variable indicates that the eventing has stopped on this
     * event cycle.
     * @private {boolean}
     */
    this.wasEventing_ = false;

    /** @private {!Pass} */
    this.pass_ = new _pass.Pass((0, _types.toWin)(element.ownerDocument.defaultView), this.doPass_.bind(this));

    /** @private {!Observable} */
    this.pointerDownObservable_ = new _observable.Observable();

    /**
     * Observers for each type of registered gesture types.
     * @private {!Object<string, !Observable<!Gesture>>}
     */
    this.overservers_ = Object.create(null);

    /** @private @const {function(!Event)} */
    this.boundOnTouchStart_ = this.onTouchStart_.bind(this);
    /** @private @const {function(!Event)} */
    this.boundOnTouchEnd_ = this.onTouchEnd_.bind(this);
    /** @private @const {function(!Event)} */
    this.boundOnTouchMove_ = this.onTouchMove_.bind(this);
    /** @private @const {function(!Event)} */
    this.boundOnTouchCancel_ = this.onTouchCancel_.bind(this);

    this.element_.addEventListener('touchstart', this.boundOnTouchStart_);
    this.element_.addEventListener('touchend', this.boundOnTouchEnd_);
    this.element_.addEventListener('touchmove', this.boundOnTouchMove_);
    this.element_.addEventListener('touchcancel', this.boundOnTouchCancel_);

    /** @private {boolean} */
    this.passAfterEvent_ = false;
  }

  /**
   * Unsubscribes from all pointer events and removes the shared cache instance.
   */


  _createClass(Gestures, [{
    key: 'cleanup',
    value: function cleanup() {
      this.element_.removeEventListener('touchstart', this.boundOnTouchStart_);
      this.element_.removeEventListener('touchend', this.boundOnTouchEnd_);
      this.element_.removeEventListener('touchmove', this.boundOnTouchMove_);
      this.element_.removeEventListener('touchcancel', this.boundOnTouchCancel_);
      delete this.element_[PROP_];
      this.pass_.cancel();
    }

    /**
     * Subscribes to a gesture emitted by the specified recognizer. For a first
     * gesture handler registered in this method the recognizer is installed
     * and from that point on it participates in the event processing.
     *
     * @param {function(new:GestureRecognizer<DATA>, !Gestures)} recognizerConstr
     * @param {function(!Gesture<DATA>)} handler
     * @return {!UnlistenDef}
     * @template DATA
     */

  }, {
    key: 'onGesture',
    value: function onGesture(recognizerConstr, handler) {
      var recognizer = new recognizerConstr(this);
      var type = recognizer.getType();
      var overserver = this.overservers_[type];
      if (!overserver) {
        this.recognizers_.push(recognizer);
        overserver = new _observable.Observable();
        this.overservers_[type] = overserver;
      }
      return overserver.add(handler);
    }

    /**
     * Unsubscribes all handlers from the given gesture recognizer. Returns
     * true if anything was done. Returns false if there were no handlers
     * registered on the given gesture recognizer in first place.
     *
     * @param {function(new:GestureRecognizer<DATA>, !Gestures)} recognizerConstr
     * @return {boolean}
     */

  }, {
    key: 'removeGesture',
    value: function removeGesture(recognizerConstr) {
      var type = new recognizerConstr(this).getType();
      var overserver = this.overservers_[type];
      if (overserver) {
        overserver.removeAll();
        var index = (0, _array.findIndex)(this.recognizers_, function (e) {
          return e.getType() == type;
        });
        if (index < 0) {
          return false;
        }
        // Remove the recognizer as well as all associated tracking state
        this.recognizers_.splice(index, 1);
        this.ready_.splice(index, 1);
        this.pending_.splice(index, 1);
        this.tracking_.splice(index, 1);
        delete this.overservers_[type];
        return true;
      } else {
        return false;
      }
    }

    /**
     * Subscribes to pointer down events, such as "touchstart" or "mousedown".
     * @param {!Function} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onPointerDown',
    value: function onPointerDown(handler) {
      return this.pointerDownObservable_.add(handler);
    }

    /**
     * Handles all "touchstart" events and dispatches them to the tracking
     * recognizers.
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'onTouchStart_',
    value: function onTouchStart_(event) {
      var now = Date.now();
      this.wasEventing_ = false;

      this.pointerDownObservable_.fire(event);

      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.ready_[i]) {
          // If the recognizer is in the "ready" state, it won't receive
          // any more touch series until it's allowed to emit.
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          // Pending state expired. Reset.
          this.stopTracking_(i);
        }
        if (this.recognizers_[i].onTouchStart(event)) {
          // When a recognizer is interested in the touch series it returns "true"
          // from its onTouchStart method. For this recognizer we start tracking
          // the whole series of touch events from touchstart to touchend. Other
          // recognizers will not receive them unless they return "true" from
          // onTouchStart.
          this.startTracking_(i);
        }
      }

      this.afterEvent_(event);
    }

    /**
     * Handles all "touchmove" events and dispatches them to the tracking
     * recognizers.
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'onTouchMove_',
    value: function onTouchMove_(event) {
      var now = Date.now();

      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.tracking_[i]) {
          // The whole touch series are ignored for non-tracking recognizers.
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          // Pending state expired. Reset.
          this.stopTracking_(i);
          continue;
        }
        if (!this.recognizers_[i].onTouchMove(event)) {
          // Recognizer lost interest in the series. Reset.
          this.stopTracking_(i);
        }
      }

      this.afterEvent_(event);
    }

    /**
     * Handles all "touchend" events and dispatches them to the tracking
     * recognizers.
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'onTouchEnd_',
    value: function onTouchEnd_(event) {
      var now = Date.now();

      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.tracking_[i]) {
          // The whole touch series are ignored for non-tracking recognizers.
          continue;
        }
        if (this.pending_[i] && this.pending_[i] < now) {
          // Pending state expired. Reset.
          this.stopTracking_(i);
          continue;
        }
        this.recognizers_[i].onTouchEnd(event);
        if (!this.pending_[i] || this.pending_[i] < now) {
          this.stopTracking_(i);
        }
      }

      this.afterEvent_(event);
    }

    /**
     * Handles all "touchcancel" events. Cancels all tracking/emitting
     * recognizers.
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'onTouchCancel_',
    value: function onTouchCancel_(event) {
      for (var i = 0; i < this.recognizers_.length; i++) {
        this.cancelEventing_(i);
      }
      this.afterEvent_(event);
    }

    /**
     * Callback for a gesture recognizer to communicate that it's ready to
     * start emitting gestures. Gestures instance may or may not allow the
     * recognizer to proceed.
     * @param {!GestureRecognizer} recognizer
     * @param {number} offset
     * @private
     * @restricted
     * @visibleForTesting
     */

  }, {
    key: 'signalReady_',
    value: function signalReady_(recognizer, offset) {
      // Somebody got here first.
      if (this.eventing_) {
        recognizer.acceptCancel();
        return;
      }

      // Set the recognizer as ready and wait for the pass to
      // make the decision.
      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.recognizers_[i] == recognizer) {
          this.ready_[i] = now + offset;
          this.pending_[i] = 0;
        }
      }
      this.passAfterEvent_ = true;
    }

    /**
     * Callback for a gesture recognizer to communicate that it's close to
     * start emitting gestures, but needs more time to see more events. Once
     * this time expires the recognizer should either signal readiness or it
     * will be canceled.
     * @param {!GestureRecognizer} recognizer
     * @param {number} timeLeft
     * @private
     * @restricted
     * @visibleForTesting
     */

  }, {
    key: 'signalPending_',
    value: function signalPending_(recognizer, timeLeft) {
      // Somebody got here first.
      if (this.eventing_) {
        recognizer.acceptCancel();
        return;
      }

      var now = Date.now();
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (this.recognizers_[i] == recognizer) {
          this.pending_[i] = now + timeLeft;
        }
      }
    }

    /**
     * Callback for a gesture recognizer to communicate that it's done
     * emitting gestures.
     * @param {!GestureRecognizer} recognizer
     * @private
     * @restricted
     * @visibleForTesting
     */

  }, {
    key: 'signalEnd_',
    value: function signalEnd_(recognizer) {
      if (this.eventing_ == recognizer) {
        this.eventing_ = null;
        this.wasEventing_ = true;
      }
    }

    /**
     * Callback for a gesture emit the gesture. Only the currently emitting
     * recognizer is allowed to emit gestures.
     * @param {!GestureRecognizer} recognizer
     * @param {*} data
     * @param {?Event} event
     * @private
     * @restricted
     * @visibleForTesting
     */

  }, {
    key: 'signalEmit_',
    value: function signalEmit_(recognizer, data, event) {
      (0, _log.dev)().assert(this.eventing_ == recognizer, 'Recognizer is not currently allowed: %s', recognizer.getType());
      var overserver = this.overservers_[recognizer.getType()];
      if (overserver) {
        overserver.fire(new Gesture(recognizer.getType(), data, Date.now(), event));
      }
    }

    /**
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'afterEvent_',
    value: function afterEvent_(event) {
      var cancelEvent = !!this.eventing_ || this.wasEventing_;
      this.wasEventing_ = false;
      if (!cancelEvent) {
        var now = Date.now();
        for (var i = 0; i < this.recognizers_.length; i++) {
          if (this.ready_[i] || this.pending_[i] && this.pending_[i] >= now) {
            cancelEvent = true;
            break;
          }
        }
      }
      if (cancelEvent) {
        event.stopPropagation();
        if (!this.shouldNotPreventDefault_) {
          event.preventDefault();
        }
      }
      if (this.passAfterEvent_) {
        this.passAfterEvent_ = false;
        this.doPass_();
      }
    }

    /**
     * The pass that decides which recognizers can start emitting and which
     * are canceled.
     * @private
     */

  }, {
    key: 'doPass_',
    value: function doPass_() {
      var now = Date.now();

      // The "most ready" recognizer is the youngest in the "ready" set.
      // Otherwise we wouldn't wait for it at all.
      var readyIndex = -1;
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (!this.ready_[i]) {
          if (this.pending_[i] && this.pending_[i] < now) {
            // Pending state expired. Reset.
            this.stopTracking_(i);
          }
          continue;
        }
        if (readyIndex == -1 || this.ready_[i] > this.ready_[readyIndex]) {
          readyIndex = i;
        }
      }

      if (readyIndex == -1) {
        // Nothing to do.
        return;
      }

      // Look for conflicts.
      var waitTime = 0;
      for (var _i = 0; _i < this.recognizers_.length; _i++) {
        if (this.ready_[_i] || !this.tracking_[_i]) {
          continue;
        }
        waitTime = Math.max(waitTime, this.pending_[_i] - now);
      }

      if (waitTime < 2) {
        // We waited long enough.
        this.startEventing_(readyIndex);
        return;
      }

      // Some conflicts: have to wait to see who wins.
      this.pass_.schedule(waitTime);
    }

    /**
     * This recognizer is given "go ahead" and all others are canceled.
     * @param {number} index
     * @private
     */

  }, {
    key: 'startEventing_',
    value: function startEventing_(index) {
      var recognizer = this.recognizers_[index];
      for (var i = 0; i < this.recognizers_.length; i++) {
        if (i != index) {
          this.cancelEventing_(i);
        }
      }
      this.ready_[index] = 0;
      this.pending_[index] = 0;
      this.eventing_ = recognizer;
      recognizer.acceptStart();
    }

    /**
     * @param {number} index
     * @private
     */

  }, {
    key: 'startTracking_',
    value: function startTracking_(index) {
      this.tracking_[index] = true;
      this.pending_[index] = 0;
    }

    /**
     * @param {number} index
     * @private
     */

  }, {
    key: 'stopTracking_',
    value: function stopTracking_(index) {
      this.tracking_[index] = false;
      this.pending_[index] = 0;
      if (!this.ready_[index]) {
        this.recognizers_[index].acceptCancel();
      }
    }

    /**
     * @param {number} index
     * @private
     */

  }, {
    key: 'cancelEventing_',
    value: function cancelEventing_(index) {
      this.ready_[index] = 0;
      this.stopTracking_(index);
    }
  }]);

  return Gestures;
}();

/**
 * The gesture recognizer receives the pointer events from Gestures instance.
 * Based on these events, it can "recognize" the gesture it's responsible for,
 * request to start emitting and emit gestures. Gestures instances manages
 * several competing recognizers and decides which ones get to emit gestures
 * and which do not.
 *
 * The recognizer can be in several main states:
 * 1. Tracking state. In this state the recognizer is receiving the series of
 *    touch events from touchstart to touchend. To get into this state the
 *    recognizer has to return "true" from the {@link onTouchStart}.
 * 2. Pending state (optional). The recognizer matched part of the gesture,
 *    but needs more time to get track more events. It requests more time
 *    by calling {@link signalPending}, By the end of this time the recognizer
 *    has either matched the gesture or has been canceled.
 * 3. Ready state. The recognizer matched the whole gesture and ready to start
 *    emitting. It communicates to the Gestures this readiness by calling
 *    {@link signalReady}.
 * 5. Emitting state. If Gestures decides to go ahead with this recognizer, it
 *    will call {@link acceptStart} method. Otherwise, it will call
 *    {@link acceptCancel} method. Once in the emitting state, the recognizer
 *    can emit any number of events by calling {@link signalEmit}.
 * 6. Complete state. Once done, the recognizer can call {@link signalEnd} to
 *    communicate that it's done.
 *
 * @template DATA
 */


var GestureRecognizer = exports.GestureRecognizer = function () {

  /**
   * @param {string} type
   * @param {!Gestures} manager
   */
  function GestureRecognizer(type, manager) {
    _classCallCheck(this, GestureRecognizer);

    /** @private @const {string} */
    this.type_ = type;

    /** @private @const {!Gestures} */
    this.manager_ = manager;
  }

  /**
   * Returns the type of the gesture emitted by the instance of this class.
   * It has to be unique in the scope of the Gestures instance.
   * @return {string}
   */


  _createClass(GestureRecognizer, [{
    key: 'getType',
    value: function getType() {
      return this.type_;
    }

    /**
     * The recognizer can call this method to communicate that it's ready to
     * start emitting the gesture. Optionally it can pass a zero, positive or
     * negative offset - a time on how much the gesture should be penalized or
     * given advantage in conflict resolution. The recognizer at this point is
     * in the "ready" state.
     * @param {time} offset
     */

  }, {
    key: 'signalReady',
    value: function signalReady(offset) {
      this.manager_.signalReady_(this, offset);
    }

    /**
     * The recognizer can call this method to communicate that it needs more
     * time (timeLeft) to match the gesture. By the end of this time the
     * recognizer has to either transit to the ready state using
     * {@link signalReady} or it will be canceled. The recognizer is in the
     * "pending" state.
     * @param {time} timeLeft
     */

  }, {
    key: 'signalPending',
    value: function signalPending(timeLeft) {
      this.manager_.signalPending_(this, timeLeft);
    }

    /**
     * The recognizer can call this method to communicate that it's done
     * emitting the gestures. It will return to the waiting state. Recognizer
     * can only call this method if it has previously received the
     * {@link acceptStart} call.
     */

  }, {
    key: 'signalEnd',
    value: function signalEnd() {
      this.manager_.signalEnd_(this);
    }

    /**
     * The recognizer can call this method to emit the gestures while in the
     * "emitting" state. Recognizer can only call this method if it has
     * previously received the {@link acceptStart} call.
     * @param {DATA} data
     * @param {?Event} event
     */

  }, {
    key: 'signalEmit',
    value: function signalEmit(data, event) {
      this.manager_.signalEmit_(this, data, event);
    }

    /**
     * The Gestures instance calls this method to allow the recognizer to start
     * emitting the gestures. At this point the recognizer is in the "emitting"
     * state. It will be in this state until it calls {@link signalEnd} or
     * the {@link acceptCancel} is called by the Gestures instance.
     */

  }, {
    key: 'acceptStart',
    value: function acceptStart() {}

    /**
     * The Gestures instance calls this method to reset the recognizer. At this
     * point the recognizer is in the initial waiting state.
     */

  }, {
    key: 'acceptCancel',
    value: function acceptCancel() {}

    /**
     * The Gestures instance calls this method for each "touchstart" event. If
     * the recognizer wants to receive other touch events in the series, it has
     * to return "true".
     * @param {!Event} unusedEvent
     * @return {boolean}
     */

  }, {
    key: 'onTouchStart',
    value: function onTouchStart(unusedEvent) {
      return false;
    }

    /**
     * The Gestures instance calls this method for each "touchmove" event. If
     * the recognizer wants to continue receiving touch events in the series,
     * it has to return "true".
     * @param {!Event} unusedEvent
     * @return {boolean}
     */

  }, {
    key: 'onTouchMove',
    value: function onTouchMove(unusedEvent) {
      return false;
    }

    /**
     * The Gestures instance calls this method for the "touchend" event.
     * Somewhere within this touch series the recognizer has to call
     * {@link signalReady} or {@link signalPending} or it will be reset for the
     * next touch series.
     * @param {!Event} unusedEvent
     */

  }, {
    key: 'onTouchEnd',
    value: function onTouchEnd(unusedEvent) {}
  }]);

  return GestureRecognizer;
}();

},{"./log":19,"./observable":23,"./pass":24,"./types":40,"./utils/array":44}],17:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layoutRectLtwh = layoutRectLtwh;
exports.layoutRectFromDomRect = layoutRectFromDomRect;
exports.layoutRectsOverlap = layoutRectsOverlap;
exports.rectIntersection = rectIntersection;
exports.layoutRectsRelativePos = layoutRectsRelativePos;
exports.expandLayoutRect = expandLayoutRect;
exports.moveLayoutRect = moveLayoutRect;
exports.areMarginsChanged = areMarginsChanged;
exports.layoutRectSizeEquals = layoutRectSizeEquals;
exports.layoutRectEquals = layoutRectEquals;
exports.cloneLayoutMarginsChangeDef = cloneLayoutMarginsChangeDef;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The structure that combines position and size for an element. The exact
 * interpretation of position and size depends on the use case.
 *
 * @typedef {{
 *   top: number,
 *   bottom: number,
 *   left: number,
 *   right: number,
 *   width: number,
 *   height: number,
 *   x: number,
 *   y: number
 * }}
 */
var LayoutRectDef = exports.LayoutRectDef = void 0;

/**
 * The structure that represents the margins of an Element.
 *
 * @typedef {{
 *   top: number,
 *   right: number,
 *   bottom: number,
 *   left: number
 * }}
 */
var LayoutMarginsDef = exports.LayoutMarginsDef = void 0;

/**
 * The structure that represents a requested change to the margins of an
 * Element. Any new values specified will replace existing ones (rather than
 * being additive).
 *
 * @typedef {{
 *   top: (number|undefined),
 *   right: (number|undefined),
 *   bottom: (number|undefined),
 *   left: (number|undefined)
 * }}
 */
var LayoutMarginsChangeDef = exports.LayoutMarginsChangeDef = void 0;

/**
* RelativePositions
*
* Describes the relative position of an element to another (whether the
* first is inside the second, on top of the second or on the bottom
* @enum {string}
*/
var RelativePositions = exports.RelativePositions = {
  INSIDE: 'inside',
  TOP: 'top',
  BOTTOM: 'bottom'
};

/**
 * Creates a layout rect based on the left, top, width and height parameters
 * in that order.
 * @param {number} left
 * @param {number} top
 * @param {number} width
 * @param {number} height
 * @return {!LayoutRectDef}
 */
function layoutRectLtwh(left, top, width, height) {
  return {
    left: left,
    top: top,
    width: width,
    height: height,
    bottom: top + height,
    right: left + width,
    x: left,
    y: top
  };
}

/**
 * Creates a layout rect based on the DOMRect, e.g. obtained from calling
 * getBoundingClientRect.
 * @param {!ClientRect} rect
 * @return {!LayoutRectDef}
 */
function layoutRectFromDomRect(rect) {
  return layoutRectLtwh(Number(rect.left), Number(rect.top), Number(rect.width), Number(rect.height));
}

/**
 * Returns true if the specified two rects overlap by a single pixel.
 * @param {!LayoutRectDef} r1
 * @param {!LayoutRectDef} r2
 * @return {boolean}
 */
function layoutRectsOverlap(r1, r2) {
  return r1.top <= r2.bottom && r2.top <= r1.bottom && r1.left <= r2.right && r2.left <= r1.right;
}

/**
 * Returns the intersection between a, b or null if there is none.
 * @param {...?LayoutRectDef|undefined} var_args
 * @return {?LayoutRectDef}
 */
function rectIntersection(var_args) {
  var x0 = -Infinity;
  var x1 = Infinity;
  var y0 = -Infinity;
  var y1 = Infinity;
  for (var i = 0; i < arguments.length; i++) {
    var current = arguments[i];
    if (!current) {
      continue;
    }
    x0 = Math.max(x0, current.left);
    x1 = Math.min(x1, current.left + current.width);
    y0 = Math.max(y0, current.top);
    y1 = Math.min(y1, current.top + current.height);
    if (x1 < x0 || y1 < y0) {
      return null;
    }
  }
  if (x1 == Infinity) {
    return null;
  }
  return layoutRectLtwh(x0, y0, x1 - x0, y1 - y0);
}

/**
 * Returns the position of r2 relative to r1
 * @param {!LayoutRectDef} r1
 * @param {!LayoutRectDef} r2
 * @return {RelativePositions}
 */
function layoutRectsRelativePos(r1, r2) {
  if (r1.top < r2.top) {
    return RelativePositions.TOP;
  } else if (r1.bottom > r2.bottom) {
    return RelativePositions.BOTTOM;
  } else {
    return RelativePositions.INSIDE;
  }
}

/**
 * Expand the layout rect using multiples of width and height.
 * @param {!LayoutRectDef} rect Original rect.
 * @param {number} dw Expansion in width, specified as a multiple of width.
 * @param {number} dh Expansion in height, specified as a multiple of height.
 * @return {!LayoutRectDef}
 */
function expandLayoutRect(rect, dw, dh) {
  return layoutRectLtwh(rect.left - rect.width * dw, rect.top - rect.height * dh, rect.width * (1 + dw * 2), rect.height * (1 + dh * 2));
}

/**
 * Moves the layout rect using dx and dy.
 * @param {!LayoutRectDef} rect Original rect.
 * @param {number} dx Move horizontally with this value.
 * @param {number} dy Move vertically with this value.
 * @return {!LayoutRectDef}
 */
function moveLayoutRect(rect, dx, dy) {
  if (dx == 0 && dy == 0 || rect.width == 0 && rect.height == 0) {
    return rect;
  }
  return layoutRectLtwh(rect.left + dx, rect.top + dy, rect.width, rect.height);
}

/**
 * @param {!LayoutMarginsDef} margins
 * @param {!LayoutMarginsChangeDef} change
 * @return {boolean}
 */
function areMarginsChanged(margins, change) {
  return change.top !== undefined && change.top != margins.top || change.right !== undefined && change.right != margins.right || change.bottom !== undefined && change.bottom != margins.bottom || change.left !== undefined && change.left != margins.left;
}

/**
 * @param {!LayoutRectDef} from
 * @param {!LayoutRectDef} to
 * @return {boolean}
 */
function layoutRectSizeEquals(from, to) {
  return from.width == to.width && from.height === to.height;
}

/**
 * @param {?LayoutRectDef} r1
 * @param {?LayoutRectDef} r2
 * @return {boolean}
 */
function layoutRectEquals(r1, r2) {
  if (!r1 || !r2) {
    return false;
  }
  return r1.left == r2.left && r1.top == r2.top && r1.width == r2.width && r1.height == r2.height;
}

/**
 * @param {LayoutMarginsChangeDef|undefined} marginsChange
 * @return {LayoutMarginsChangeDef|undefined}
 */
function cloneLayoutMarginsChangeDef(marginsChange) {
  if (!marginsChange) {
    return marginsChange;
  }
  return {
    top: marginsChange.top,
    bottom: marginsChange.bottom,
    left: marginsChange.left,
    right: marginsChange.right
  };
}

},{}],18:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOADING_ELEMENTS_ = exports.naturalDimensions_ = exports.LengthDef = exports.LayoutPriority = exports.Layout = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      <i-amphtml-sizer class="i-amphtml-sizer">\n        <img class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>'], ['\n      <i-amphtml-sizer class="i-amphtml-sizer">\n        <img class="i-amphtml-intrinsic-sizer" />\n      </i-amphtml-sizer>']);

exports.parseLayout = parseLayout;
exports.getLayoutClass = getLayoutClass;
exports.isLayoutSizeDefined = isLayoutSizeDefined;
exports.isInternalElement = isInternalElement;
exports.parseLength = parseLength;
exports.assertLength = assertLength;
exports.assertLengthOrPercent = assertLengthOrPercent;
exports.getLengthUnits = getLengthUnits;
exports.getLengthNumeral = getLengthNumeral;
exports.hasNaturalDimensions = hasNaturalDimensions;
exports.getNaturalDimensions = getNaturalDimensions;
exports.isLoadingAllowed = isLoadingAllowed;
exports.applyStaticLayout = applyStaticLayout;

var _log = require('./log');

var _staticTemplate = require('./static-template');

var _types = require('./types');

var _style = require('./style');

var _string = require('./string');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                   * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                   *
                                                                                                                                                   * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                   * you may not use this file except in compliance with the License.
                                                                                                                                                   * You may obtain a copy of the License at
                                                                                                                                                   *
                                                                                                                                                   *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                   *
                                                                                                                                                   * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                   * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                   * See the License for the specific language governing permissions and
                                                                                                                                                   * limitations under the License.
                                                                                                                                                   */

/**
 * @fileoverview Implements element layout. See https://goo.gl/9avXuT for
 * details.
 */

/**
 * @enum {string}
 */
var Layout = exports.Layout = {
  NODISPLAY: 'nodisplay',
  FIXED: 'fixed',
  FIXED_HEIGHT: 'fixed-height',
  RESPONSIVE: 'responsive',
  CONTAINER: 'container',
  FILL: 'fill',
  FLEX_ITEM: 'flex-item',
  FLUID: 'fluid',
  INTRINSIC: 'intrinsic'
};

/**
 * Layout priorities to use with BaseElement#getLayoutPriority() and
 * BaseElement#updateLayoutPriority().
 * @enum {number}
 */
var LayoutPriority = exports.LayoutPriority = {
  CONTENT: 0,
  METADATA: 1,
  ADS: 2,
  BACKGROUND: 3
};

/**
 * CSS Length type. E.g. "1px" or "20vh".
 * @typedef {string}
 */
var LengthDef = exports.LengthDef = void 0;

/**
 * @typedef {{
 *   width: string,
 *   height: string
 * }}
 */
var DimensionsDef = void 0;

/**
 * The set of elements with natural dimensions, that is, elements
 * which have a known dimension either based on their value specified here,
 * or, if the value is null, a dimension specific to the browser.
 * `hasNaturalDimensions` checks for membership in this set.
 * `getNaturalDimensions` determines the dimensions for an element in the
 *    set and caches it.
 * @type {!Object<string, ?DimensionsDef>}
 * @private  Visible for testing only!
 */
var naturalDimensions_ = exports.naturalDimensions_ = {
  'AMP-PIXEL': { width: '0px', height: '0px' },
  'AMP-ANALYTICS': { width: '1px', height: '1px' },
  // TODO(dvoytenko): audio should have width:auto.
  'AMP-AUDIO': null,
  'AMP-SOCIAL-SHARE': { width: '60px', height: '44px' }
};

/**
 * Elements that the progess can be shown for. This set has to be externalized
 * since the element's implementation may not be downloaded yet.
 * @enum {boolean}
 * @private  Visible for testing only!
 */
var LOADING_ELEMENTS_ = exports.LOADING_ELEMENTS_ = {
  'AMP-ANIM': true,
  'AMP-BRIGHTCOVE': true,
  'AMP-GOOGLE-DOCUMENT-EMBED': true,
  'AMP-EMBED': true,
  'AMP-FACEBOOK': true,
  'AMP-FACEBOOK-COMMENTS': true,
  'AMP-FACEBOOK-LIKE': true,
  'AMP-FACEBOOK-PAGE': true,
  'AMP-IFRAME': true,
  'AMP-IMG': true,
  'AMP-INSTAGRAM': true,
  'AMP-LIST': true,
  'AMP-OOYALA-PLAYER': true,
  'AMP-PINTEREST': true,
  'AMP-PLAYBUZZ': true,
  'AMP-VIDEO': true,
  'AMP-YOUTUBE': true
};

/**
 * @param {string} s
 * @return {Layout|undefined} Returns undefined in case of failure to parse
 *   the layout string.
 */
function parseLayout(s) {
  for (var k in Layout) {
    if (Layout[k] == s) {
      return Layout[k];
    }
  }
  return undefined;
}

/**
 * @param {!Layout} layout
 * @return {string}
 */
function getLayoutClass(layout) {
  return 'i-amphtml-layout-' + layout;
}

/**
 * Whether an element with this layout inherently defines the size.
 * @param {!Layout} layout
 * @return {boolean}
 */
function isLayoutSizeDefined(layout) {
  return layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.FILL || layout == Layout.FLEX_ITEM || layout == Layout.FLUID || layout == Layout.INTRINSIC;
}

/**
 * Whether the tag is an internal (service) AMP tag.
 * @param {!Node|string} tag
 * @return {boolean}
 */
function isInternalElement(tag) {
  var tagName = typeof tag == 'string' ? tag : tag.tagName;
  return tagName && (0, _string.startsWith)(tagName.toLowerCase(), 'i-');
}

/**
 * Parses the CSS length value. If no units specified, the assumed value is
 * "px". Returns undefined in case of parsing error.
 * @param {string|undefined|null} s
 * @return {!LengthDef|undefined}
 */
function parseLength(s) {
  if (typeof s == 'number') {
    return s + 'px';
  }
  if (!s) {
    return undefined;
  }
  if (!/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(s)) {
    return undefined;
  }
  if (/^\d+(\.\d+)?$/.test(s)) {
    return s + 'px';
  }
  return s;
}

/**
 * Asserts that the supplied value is a non-percent CSS Length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {!LengthDef}
 */
function assertLength(length) {
  (0, _log.user)().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(length), 'Invalid length value: %s', length);
  return (/** @type {!LengthDef} */length
  );
}

/**
 * Asserts that the supplied value is a CSS Length value
 * (including percent unit).
 * @param {!LengthDef|string} length
 * @return {!LengthDef}
 */
function assertLengthOrPercent(length) {
  (0, _log.user)().assert(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|%)$/.test(length), 'Invalid length or percent value: %s', length);
  return length;
}

/**
 * Returns units from the CSS length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {string}
 */
function getLengthUnits(length) {
  assertLength(length);
  (0, _log.dev)().assertString(length);
  var m = (0, _log.user)().assert(length.match(/[a-z]+/i), 'Failed to read units from %s', length);
  return m[0];
}

/**
 * Returns the numeric value of a CSS length value.
 * @param {!LengthDef|string|null|undefined} length
 * @return {number|undefined}
 */
function getLengthNumeral(length) {
  var res = parseFloat(length);
  return (0, _types.isFiniteNumber)(res) ? res : undefined;
}

/**
 * Determines whether the tagName is a known element that has natural dimensions
 * in our runtime or the browser.
 * @param {string} tagName The element tag name.
 * @return {boolean}
 */
function hasNaturalDimensions(tagName) {
  tagName = tagName.toUpperCase();
  return naturalDimensions_[tagName] !== undefined;
}

/**
 * Determines the default dimensions for an element which could vary across
 * different browser implementations, like <audio> for instance.
 * This operation can only be completed for an element whitelisted by
 * `hasNaturalDimensions`.
 * @param {!Element} element
 * @return {DimensionsDef}
 */
function getNaturalDimensions(element) {
  var tagName = element.tagName.toUpperCase();
  (0, _log.dev)().assert(naturalDimensions_[tagName] !== undefined);
  if (!naturalDimensions_[tagName]) {
    var doc = element.ownerDocument;
    var naturalTagName = tagName.replace(/^AMP\-/, '');
    var temp = doc.createElement(naturalTagName);
    // For audio, should no-op elsewhere.
    temp.controls = true;
    (0, _style.setStyles)(temp, {
      position: 'absolute',
      visibility: 'hidden'
    });
    doc.body.appendChild(temp);
    naturalDimensions_[tagName] = {
      width: (temp. /*OK*/offsetWidth || 1) + 'px',
      height: (temp. /*OK*/offsetHeight || 1) + 'px'
    };
    doc.body.removeChild(temp);
  }
  return (/** @type {DimensionsDef} */naturalDimensions_[tagName]
  );
}

/**
 * Whether the loading can be shown for the specified elemeent. This set has
 * to be externalized since the element's implementation may not be
 * downloaded yet.
 * @param {!Element} element
 * @return {boolean}
 */
function isLoadingAllowed(element) {
  var tagName = element.tagName.toUpperCase();
  if (tagName == 'AMP-AD' || tagName == 'AMP-EMBED') {
    return true;
  }
  return LOADING_ELEMENTS_[tagName] || false;
}

/**
 * Applies layout to the element. Visible for testing only.
 *
 * \   \  /  \  /   / /   \     |   _  \     |  \ |  | |  | |  \ |  |  / _____|
 *  \   \/    \/   / /  ^  \    |  |_)  |    |   \|  | |  | |   \|  | |  |  __
 *   \            / /  /_\  \   |      /     |  . `  | |  | |  . `  | |  | |_ |
 *    \    /\    / /  _____  \  |  |\  \----.|  |\   | |  | |  |\   | |  |__| |
 *     \__/  \__/ /__/     \__\ | _| `._____||__| \__| |__| |__| \__|  \______|
 *
 * The equivalent of this method is used for server-side rendering (SSR) and
 * any changes made to it must be made in coordination with caches that
 * implement SSR. For more information on SSR see bit.ly/amp-ssr.
 *
 * @param {!Element} element
 * @return {!Layout}
 */
function applyStaticLayout(element) {
  // Check if the layout has already been done by server-side rendering. The
  // document may be visible to the user if the boilerplate was removed so
  // please take care in making changes here.
  var completedLayoutAttr = element.getAttribute('i-amphtml-layout');
  if (completedLayoutAttr) {
    var _layout = /** @type {!Layout} */(0, _log.dev)().assert(parseLayout(completedLayoutAttr));
    if ((_layout == Layout.RESPONSIVE || _layout == Layout.INTRINSIC) && element.firstElementChild) {
      // Find sizer, but assume that it might not have been parsed yet.
      element.sizerElement = element.querySelector('i-amphtml-sizer') || undefined;
    } else if (_layout == Layout.NODISPLAY) {
      applyNoDisplayLayout(element);
    }
    return _layout;
  }

  // If the layout was already done by server-side rendering (SSR), then the
  // code below will not run. Any changes below will necessitate a change to SSR
  // and must be coordinated with caches that implement SSR. See bit.ly/amp-ssr.

  // Parse layout from the element.
  var layoutAttr = element.getAttribute('layout');
  var widthAttr = element.getAttribute('width');
  var heightAttr = element.getAttribute('height');
  var sizesAttr = element.getAttribute('sizes');
  var heightsAttr = element.getAttribute('heights');

  // Input layout attributes.
  var inputLayout = layoutAttr ? parseLayout(layoutAttr) : null;
  (0, _log.user)().assert(inputLayout !== undefined, 'Unknown layout: %s', layoutAttr);
  /** @const {string|null|undefined} */
  var inputWidth = widthAttr && widthAttr != 'auto' ? parseLength(widthAttr) : widthAttr;
  (0, _log.user)().assert(inputWidth !== undefined, 'Invalid width value: %s', widthAttr);
  /** @const {string|null|undefined} */
  var inputHeight = heightAttr && heightAttr != 'fluid' ? parseLength(heightAttr) : heightAttr;
  (0, _log.user)().assert(inputHeight !== undefined, 'Invalid height value: %s', heightAttr);

  // Effective layout attributes. These are effectively constants.
  var width = void 0;
  var height = void 0;
  var layout = void 0;

  // Calculate effective width and height.
  if ((!inputLayout || inputLayout == Layout.FIXED || inputLayout == Layout.FIXED_HEIGHT) && (!inputWidth || !inputHeight) && hasNaturalDimensions(element.tagName)) {
    // Default width and height: handle elements that do not specify a
    // width/height and are defined to have natural browser dimensions.
    var dimensions = getNaturalDimensions(element);
    width = inputWidth || inputLayout == Layout.FIXED_HEIGHT ? inputWidth : dimensions.width;
    height = inputHeight || dimensions.height;
  } else {
    width = inputWidth;
    height = inputHeight;
  }

  // Calculate effective layout.
  if (inputLayout) {
    layout = inputLayout;
  } else if (!width && !height) {
    layout = Layout.CONTAINER;
  } else if (height == 'fluid') {
    layout = Layout.FLUID;
  } else if (height && (!width || width == 'auto')) {
    layout = Layout.FIXED_HEIGHT;
  } else if (height && width && (sizesAttr || heightsAttr)) {
    layout = Layout.RESPONSIVE;
  } else {
    layout = Layout.FIXED;
  }

  // Verify layout attributes.
  if (layout == Layout.FIXED || layout == Layout.FIXED_HEIGHT || layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC) {
    (0, _log.user)().assert(height, 'Expected height to be available: %s', heightAttr);
  }
  if (layout == Layout.FIXED_HEIGHT) {
    (0, _log.user)().assert(!width || width == 'auto', 'Expected width to be either absent or equal "auto" ' + 'for fixed-height layout: %s', widthAttr);
  }
  if (layout == Layout.FIXED || layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC) {
    (0, _log.user)().assert(width && width != 'auto', 'Expected width to be available and not equal to "auto": %s', widthAttr);
  }

  if (layout == Layout.RESPONSIVE || layout == Layout.INTRINSIC) {
    (0, _log.user)().assert(getLengthUnits(width) == getLengthUnits(height), 'Length units should be the same for width and height: %s, %s', widthAttr, heightAttr);
  } else {
    (0, _log.user)().assert(heightsAttr === null, 'Unexpected "heights" attribute for none-responsive layout');
  }

  // Apply UI.
  element.classList.add(getLayoutClass(layout));
  if (isLayoutSizeDefined(layout)) {
    element.classList.add('i-amphtml-layout-size-defined');
  }
  if (layout == Layout.NODISPLAY) {
    // CSS defines layout=nodisplay automatically with `display:none`. Thus
    // no additional styling is needed.
    applyNoDisplayLayout(element);
  } else if (layout == Layout.FIXED) {
    (0, _style.setStyles)(element, {
      width: (0, _log.dev)().assertString(width),
      height: (0, _log.dev)().assertString(height)
    });
  } else if (layout == Layout.FIXED_HEIGHT) {
    (0, _style.setStyle)(element, 'height', (0, _log.dev)().assertString(height));
  } else if (layout == Layout.RESPONSIVE) {
    var sizer = element.ownerDocument.createElement('i-amphtml-sizer');
    (0, _style.setStyles)(sizer, {
      display: 'block',
      paddingTop: getLengthNumeral(height) / getLengthNumeral(width) * 100 + '%'
    });
    element.insertBefore(sizer, element.firstChild);
    element.sizerElement = sizer;
  } else if (layout == Layout.INTRINSIC) {
    // Intrinsic uses an svg inside the sizer element rather than the padding
    // trick Note a naked svg won't work becasue other thing expect the
    // i-amphtml-sizer element
    var _sizer = (0, _staticTemplate.htmlFor)(element)(_templateObject);
    var intrinsicSizer = _sizer.firstElementChild;
    intrinsicSizer.setAttribute('src', 'data:image/svg+xml;charset=utf-8,<svg height="' + height + '" width="' + width + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
    element.insertBefore(_sizer, element.firstChild);
    // TODO(jpettitt): sizer is leaked and can't be cleaned up.
    element.sizerElement = intrinsicSizer;
  } else if (layout == Layout.FILL) {
    // Do nothing.
  } else if (layout == Layout.CONTAINER) {
    // Do nothing. Elements themselves will check whether the supplied
    // layout value is acceptable. In particular container is only OK
    // sometimes.
  } else if (layout == Layout.FLEX_ITEM) {
    // Set height and width to a flex item if they exist.
    // The size set to a flex item could be overridden by `display: flex` later.
    if (width) {
      (0, _style.setStyle)(element, 'width', width);
    }
    if (height) {
      (0, _style.setStyle)(element, 'height', height);
    }
  } else if (layout == Layout.FLUID) {
    element.classList.add('i-amphtml-layout-awaiting-size');
    if (width) {
      (0, _style.setStyle)(element, 'width', width);
    }
    (0, _style.setStyle)(element, 'height', 0);
  }
  return layout;
}

/**
 * @param {!Element} element
 */
function applyNoDisplayLayout(element) {
  // TODO(dvoytenko, #9353): once `toggleLayoutDisplay` API has been deployed
  // everywhere, switch all relevant elements to this API. In the meantime,
  // simply unblock display toggling via `style="display: ..."`.
  (0, _style.setStyle)(element, 'display', 'none');
  element.classList.add('i-amphtml-display');
}

},{"./log":19,"./static-template":35,"./string":36,"./style":37,"./types":40}],19:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Log = exports.LogLevel = exports.USER_ERROR_EMBED_SENTINEL = exports.USER_ERROR_SENTINEL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.isUserErrorMessage = isUserErrorMessage;
exports.isUserErrorEmbed = isUserErrorEmbed;
exports.setReportError = setReportError;
exports.overrideLogLevel = overrideLogLevel;
exports.duplicateErrorIfNecessary = duplicateErrorIfNecessary;
exports.createErrorVargs = createErrorVargs;
exports.rethrowAsync = rethrowAsync;
exports.initLogConstructor = initLogConstructor;
exports.resetLogConstructorForTesting = resetLogConstructorForTesting;
exports.user = user;
exports.dev = dev;
exports.isFromEmbed = isFromEmbed;

var _mode = require('./mode');

var _modeObject = require('./mode-object');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Triple zero width space.
 *
 * This is added to user error messages, so that we can later identify
 * them, when the only thing that we have is the message. This is the
 * case in many browsers when the global exception handler is invoked.
 *
 * @const {string}
 */
var USER_ERROR_SENTINEL = exports.USER_ERROR_SENTINEL = '\u200B\u200B\u200B';

/**
 * Four zero width space.
 *
 * @const {string}
 */
var USER_ERROR_EMBED_SENTINEL = exports.USER_ERROR_EMBED_SENTINEL = '\u200B\u200B\u200B\u200B';

/**
 * @param {string} message
 * @return {boolean} Whether this message was a user error.
 */
function isUserErrorMessage(message) {
  return message.indexOf(USER_ERROR_SENTINEL) >= 0;
}

/**
 * @param {string} message
 * @return {boolean} Whether this message was a a user error from an iframe embed.
 */
function isUserErrorEmbed(message) {
  return message.indexOf(USER_ERROR_EMBED_SENTINEL) >= 0;
}

/**
 * @enum {number}
 * @private Visible for testing only.
 */
var LogLevel = exports.LogLevel = {
  OFF: 0,
  ERROR: 1,
  WARN: 2,
  INFO: 3,
  FINE: 4
};

/**
 * Sets reportError function. Called from error.js to break cyclic
 * dependency.
 * @param {function(*, !Element=)|undefined} fn
 */
function setReportError(fn) {
  self.reportError = fn;
}

/**
 * @type {!LogLevel|undefined}
 * @private
 */
var levelOverride_ = undefined;

/**
 * @param {!LogLevel} level
 */
function overrideLogLevel(level) {
  levelOverride_ = level;
}

/**
 * Logging class. Use of sentinel string instead of a boolean to check user/dev
 * errors because errors could be rethrown by some native code as a new error,
 * and only a message would survive. Also, some browser don’t support a 5th
 * error object argument in window.onerror. List of supporting browser can be
 * found here:
 * https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
 * @final
 * @private Visible for testing only.
 */

var Log = exports.Log = function () {
  /**
   * opt_suffix will be appended to error message to identify the type of the
   * error message. We can't rely on the error object to pass along the type
   * because some browsers do not have this param in its window.onerror API.
   * See:
   * https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
   *
   * @param {!Window} win
   * @param {function(!./mode.ModeDef):!LogLevel} levelFunc
   * @param {string=} opt_suffix
   */
  function Log(win, levelFunc, opt_suffix) {
    _classCallCheck(this, Log);

    /**
     * In tests we use the main test window instead of the iframe where
     * the tests runs because only the former is relayed to the console.
     * @const {!Window}
     */
    this.win = (0, _mode.getMode)().test && win.AMP_TEST_IFRAME ? win.parent : win;

    /** @private @const {function(!./mode.ModeDef):!LogLevel} */
    this.levelFunc_ = levelFunc;

    /** @private @const {!LogLevel} */
    this.level_ = this.defaultLevel_();

    /** @private @const {string} */
    this.suffix_ = opt_suffix || '';
  }

  /**
   * @return {!LogLevel}
   * @private
   */


  _createClass(Log, [{
    key: 'getLevel_',
    value: function getLevel_() {
      return levelOverride_ !== undefined ? levelOverride_ : this.level_;
    }

    /**
     * @return {!LogLevel}
     * @private
     */

  }, {
    key: 'defaultLevel_',
    value: function defaultLevel_() {
      // No console - can't enable logging.
      if (!this.win.console || !this.win.console.log) {
        return LogLevel.OFF;
      }

      // Logging has been explicitly disabled.
      if ((0, _mode.getMode)().log == '0') {
        return LogLevel.OFF;
      }

      // Logging is enabled for tests directly.
      if ((0, _mode.getMode)().test && this.win.ENABLE_LOG) {
        return LogLevel.FINE;
      }

      // LocalDev by default allows INFO level, unless overriden by `#log`.
      if ((0, _mode.getMode)().localDev && !(0, _mode.getMode)().log) {
        return LogLevel.INFO;
      }

      // Delegate to the specific resolver.
      return this.levelFunc_((0, _modeObject.getModeObject)());
    }

    /**
     * @param {string} tag
     * @param {string} level
     * @param {!Array} messages
     */

  }, {
    key: 'msg_',
    value: function msg_(tag, level, messages) {
      if (this.getLevel_() != LogLevel.OFF) {
        var fn = this.win.console.log;
        if (level == 'ERROR') {
          fn = this.win.console.error || fn;
        } else if (level == 'INFO') {
          fn = this.win.console.info || fn;
        } else if (level == 'WARN') {
          fn = this.win.console.warn || fn;
        }
        if ((0, _mode.getMode)().localDev) {
          messages.unshift('[' + tag + ']');
        }
        fn.apply(this.win.console, messages);
      }
    }

    /**
     * Whether the logging is enabled.
     * @return {boolean}
     */

  }, {
    key: 'isEnabled',
    value: function isEnabled() {
      return this.getLevel_() != LogLevel.OFF;
    }

    /**
     * Reports a fine-grained message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'fine',
    value: function fine(tag, var_args) {
      if (this.getLevel_() >= LogLevel.FINE) {
        this.msg_(tag, 'FINE', Array.prototype.slice.call(arguments, 1));
      }
    }

    /**
     * Reports a informational message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'info',
    value: function info(tag, var_args) {
      if (this.getLevel_() >= LogLevel.INFO) {
        this.msg_(tag, 'INFO', Array.prototype.slice.call(arguments, 1));
      }
    }

    /**
     * Reports a warning message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'warn',
    value: function warn(tag, var_args) {
      if (this.getLevel_() >= LogLevel.WARN) {
        this.msg_(tag, 'WARN', Array.prototype.slice.call(arguments, 1));
      }
    }

    /**
     * Reports an error message. If the logging is disabled, the error is rethrown
     * asynchronously.
     * @param {string} tag
     * @param {...*} var_args
     * @return {!Error|undefined}
     * @private
     */

  }, {
    key: 'error_',
    value: function error_(tag, var_args) {
      if (this.getLevel_() >= LogLevel.ERROR) {
        this.msg_(tag, 'ERROR', Array.prototype.slice.call(arguments, 1));
      } else {
        var error = createErrorVargs.apply(null, Array.prototype.slice.call(arguments, 1));
        this.prepareError_(error);
        return error;
      }
    }

    /**
     * Reports an error message.
     * @param {string} tag
     * @param {...*} var_args
     */

  }, {
    key: 'error',
    value: function error(tag, var_args) {
      var error = this.error_.apply(this, arguments);
      if (error) {
        error.name = tag || error.name;
        // reportError is installed globally per window in the entry point.
        self.reportError(error);
      }
    }

    /**
     * Reports an error message and marks with an expected property. If the
     * logging is disabled, the error is rethrown asynchronously.
     * @param {string} unusedTag
     * @param {...*} var_args
     */

  }, {
    key: 'expectedError',
    value: function expectedError(unusedTag, var_args) {
      var error = this.error_.apply(this, arguments);
      if (error) {
        error.expected = true;
        // reportError is installed globally per window in the entry point.
        self.reportError(error);
      }
    }

    /**
     * Creates an error object.
     * @param {...*} var_args
     * @return {!Error}
     */

  }, {
    key: 'createError',
    value: function createError(var_args) {
      var error = createErrorVargs.apply(null, arguments);
      this.prepareError_(error);
      return error;
    }

    /**
     * Creates an error object with its expected property set to true.
     * @param {...*} var_args
     * @return {!Error}
     */

  }, {
    key: 'createExpectedError',
    value: function createExpectedError(var_args) {
      var error = createErrorVargs.apply(null, arguments);
      this.prepareError_(error);
      error.expected = true;
      return error;
    }

    /**
     * Throws an error if the first argument isn't trueish.
     *
     * Supports argument substitution into the message via %s placeholders.
     *
     * Throws an error object that has two extra properties:
     * - associatedElement: This is the first element provided in the var args.
     *   It can be used for improved display of error messages.
     * - messageArray: The elements of the substituted message as non-stringified
     *   elements in an array. When e.g. passed to console.error this yields
     *   native displays of things like HTML elements.
     *
     * @param {T} shouldBeTrueish The value to assert. The assert fails if it does
     *     not evaluate to true.
     * @param {string=} opt_message The assertion message
     * @param {...*} var_args Arguments substituted into %s in the message.
     * @return {T} The value of shouldBeTrueish.
     * @template T
     * eslint "google-camelcase/google-camelcase": 0
     */

  }, {
    key: 'assert',
    value: function assert(shouldBeTrueish, opt_message, var_args) {
      var firstElement = void 0;
      if (!shouldBeTrueish) {
        var message = opt_message || 'Assertion failed';
        var splitMessage = message.split('%s');
        var first = splitMessage.shift();
        var formatted = first;
        var messageArray = [];
        pushIfNonEmpty(messageArray, first);
        for (var i = 2; i < arguments.length; i++) {
          var val = arguments[i];
          if (val && val.tagName) {
            firstElement = val;
          }
          var nextConstant = splitMessage.shift();
          messageArray.push(val);
          pushIfNonEmpty(messageArray, nextConstant.trim());
          formatted += toString(val) + nextConstant;
        }
        var e = new Error(formatted);
        e.fromAssert = true;
        e.associatedElement = firstElement;
        e.messageArray = messageArray;
        this.prepareError_(e);
        // reportError is installed globally per window in the entry point.
        self.reportError(e);
        throw e;
      }
      return shouldBeTrueish;
    }

    /**
     * Throws an error if the first argument isn't an Element
     *
     * Otherwise see `assert` for usage
     *
     * @param {*} shouldBeElement
     * @param {string=} opt_message The assertion message
     * @return {!Element} The value of shouldBeTrueish.
     * @template T
     * eslint "google-camelcase/google-camelcase": 2
     */

  }, {
    key: 'assertElement',
    value: function assertElement(shouldBeElement, opt_message) {
      var shouldBeTrueish = shouldBeElement && shouldBeElement.nodeType == 1;
      this.assert(shouldBeTrueish, (opt_message || 'Element expected') + ': %s', shouldBeElement);
      return (/** @type {!Element} */shouldBeElement
      );
    }

    /**
     * Throws an error if the first argument isn't a string. The string can
     * be empty.
     *
     * For more details see `assert`.
     *
     * @param {*} shouldBeString
     * @param {string=} opt_message The assertion message
     * @return {string} The string value. Can be an empty string.
     * eslint "google-camelcase/google-camelcase": 2
     */

  }, {
    key: 'assertString',
    value: function assertString(shouldBeString, opt_message) {
      this.assert(typeof shouldBeString == 'string', (opt_message || 'String expected') + ': %s', shouldBeString);
      return (/** @type {string} */shouldBeString
      );
    }

    /**
     * Throws an error if the first argument isn't a number. The allowed values
     * include `0` and `NaN`.
     *
     * For more details see `assert`.
     *
     * @param {*} shouldBeNumber
     * @param {string=} opt_message The assertion message
     * @return {number} The number value. The allowed values include `0`
     *   and `NaN`.
     */

  }, {
    key: 'assertNumber',
    value: function assertNumber(shouldBeNumber, opt_message) {
      this.assert(typeof shouldBeNumber == 'number', (opt_message || 'Number expected') + ': %s', shouldBeNumber);
      return (/** @type {number} */shouldBeNumber
      );
    }

    /**
     * Throws an error if the first argument isn't a boolean.
     *
     * For more details see `assert`.
     *
     * @param {*} shouldBeBoolean
     * @param {string=} opt_message The assertion message
     * @return {boolean} The boolean value.
     */

  }, {
    key: 'assertBoolean',
    value: function assertBoolean(shouldBeBoolean, opt_message) {
      this.assert(!!shouldBeBoolean === shouldBeBoolean, (opt_message || 'Boolean expected') + ': %s', shouldBeBoolean);
      return (/** @type {boolean} */shouldBeBoolean
      );
    }

    /**
     * Asserts and returns the enum value. If the enum doesn't contain such a
     * value, the error is thrown.
     *
     * @param {!Object<T>} enumObj
     * @param {string} s
     * @param {string=} opt_enumName
     * @return {T}
     * @template T
     * eslint "google-camelcase/google-camelcase": 2
     */

  }, {
    key: 'assertEnumValue',
    value: function assertEnumValue(enumObj, s, opt_enumName) {
      if ((0, _types.isEnumValue)(enumObj, s)) {
        return s;
      }
      this.assert(false, 'Unknown %s value: "%s"', opt_enumName || 'enum', s);
    }

    /**
     * @param {!Error} error
     * @private
     */

  }, {
    key: 'prepareError_',
    value: function prepareError_(error) {
      error = duplicateErrorIfNecessary(error);
      if (this.suffix_) {
        if (!error.message) {
          error.message = this.suffix_;
        } else if (error.message.indexOf(this.suffix_) == -1) {
          error.message += this.suffix_;
        }
      } else if (isUserErrorMessage(error.message)) {
        error.message = error.message.replace(USER_ERROR_SENTINEL, '');
      }
    }
  }]);

  return Log;
}();

/**
 * @param {string|!Element} val
 * @return {string}
 */


function toString(val) {
  // Do check equivalent to `val instanceof Element` without cross-window bug
  if (val && val.nodeType == 1) {
    return val.tagName.toLowerCase() + (val.id ? '#' + val.id : '');
  }
  return (/** @type {string} */val
  );
}

/**
 * @param {!Array} array
 * @param {*} val
 */
function pushIfNonEmpty(array, val) {
  if (val != '') {
    array.push(val);
  }
}

/**
 * Some exceptions (DOMException, namely) have read-only message.
 * @param {!Error} error
 * @return {!Error};
 */
function duplicateErrorIfNecessary(error) {
  var message = error.message;

  var test = String(Math.random());
  error.message = test;

  if (error.message === test) {
    error.message = message;
    return error;
  }

  var e = new Error(error.message);
  // Copy all the extraneous things we attach.
  for (var prop in error) {
    e[prop] = error[prop];
  }
  // Ensure these are copied.
  e.stack = error.stack;
  return e;
}

/**
 * @param {...*} var_args
 * @return {!Error}
 * @visibleForTesting
 */
function createErrorVargs(var_args) {
  var error = null;
  var message = '';
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    if (arg instanceof Error && !error) {
      error = duplicateErrorIfNecessary(arg);
    } else {
      if (message) {
        message += ' ';
      }
      message += arg;
    }
  }

  if (!error) {
    error = new Error(message);
  } else if (message) {
    error.message = message + ': ' + error.message;
  }
  return error;
}

/**
 * Rethrows the error without terminating the current context. This preserves
 * whether the original error designation is a user error or a dev error.
 * @param {...*} var_args
 */
function rethrowAsync(var_args) {
  var error = createErrorVargs.apply(null, arguments);
  setTimeout(function () {
    // reportError is installed globally per window in the entry point.
    self.reportError(error);
    throw error;
  });
}

/**
 * Cache for logs. We do not use a Service since the service module depends
 * on Log and closure literally can't even.
 * @type {{user: ?Log, dev: ?Log, userForEmbed: ?Log}}
 */
self.log = self.log || {
  user: null,
  dev: null,
  userForEmbed: null
};

var logs = self.log;

/**
 * Eventually holds a constructor for Log objects. Lazily initialized, so we
 * can avoid ever referencing the real constructor except in JS binaries
 * that actually want to include the implementation.
 * @type {?Function}
 */
var logConstructor = null;

/**
 * Initializes log contructor.
 */
function initLogConstructor() {
  logConstructor = Log;
  // Initialize instances for use. If a binary (an extension for example) that
  // does not call `initLogConstructor` invokes `dev()` or `user()` earlier than
  // the binary that does call `initLogConstructor` (amp.js), the extension will
  // throw an error as that extension will never be able to initialize the log
  // instances and we also don't want it to call `initLogConstructor` either
  // (since that will cause the Log implementation to be bundled into that
  // binary). So we must initialize the instances eagerly so that they are ready
  // for use (stored globally) after the main binary calls `initLogConstructor`.
  dev();
  user();
}

/**
 * Resets log contructor for testing.
 */
function resetLogConstructorForTesting() {
  logConstructor = null;
}

/**
 * Publisher level log.
 *
 * Enabled in the following conditions:
 *  1. Not disabled using `#log=0`.
 *  2. Development mode is enabled via `#development=1` or logging is explicitly
 *     enabled via `#log=D` where D >= 1.
 *  3. AMP.setLogLevel(D) is called, where D >= 1.
 *
 * @param {!Element=} opt_element
 * @return {!Log}
 */
function user(opt_element) {
  if (!logs.user) {
    logs.user = getUserLogger(USER_ERROR_SENTINEL);
  }
  if (!isFromEmbed(logs.user.win, opt_element)) {
    return logs.user;
  } else {
    if (logs.userForEmbed) {
      return logs.userForEmbed;
    }
    return logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL);
  }
}

/**
 * Getter for user logger
 * @param {string=} suffix
 * @return {!Log}
 */
function getUserLogger(suffix) {
  if (!logConstructor) {
    throw new Error('failed to call initLogConstructor');
  }
  return new logConstructor(self, function (mode) {
    var logNum = parseInt(mode.log, 10);
    if (mode.development || logNum >= 1) {
      return LogLevel.FINE;
    }
    return LogLevel.WARN;
  }, suffix);
}

/**
 * AMP development log. Calls to `devLog().assert` and `dev.fine` are stripped
 * in the PROD binary. However, `devLog().assert` result is preserved in either
 * case.
 *
 * Enabled in the following conditions:
 *  1. Not disabled using `#log=0`.
 *  2. Logging is explicitly enabled via `#log=D`, where D >= 2.
 *  3. AMP.setLogLevel(D) is called, where D >= 2.
 *
 * @return {!Log}
 */
function dev() {
  if (logs.dev) {
    return logs.dev;
  }
  if (!logConstructor) {
    throw new Error('failed to call initLogConstructor');
  }
  return logs.dev = new logConstructor(self, function (mode) {
    var logNum = parseInt(mode.log, 10);
    if (logNum >= 3) {
      return LogLevel.FINE;
    }
    if (logNum >= 2) {
      return LogLevel.INFO;
    }
    return LogLevel.OFF;
  });
}

/**
 * @param {!Window} win
 * @param {!Element=} opt_element
 * @return {boolean} isEmbed
 */
function isFromEmbed(win, opt_element) {
  if (!opt_element) {
    return false;
  }
  return opt_element.ownerDocument.defaultView != win;
}

},{"./mode":21,"./mode-object":20,"./types":40}],20:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModeObject = getModeObject;

var _mode = require('./mode');

/**
 * Provides info about the current app. This return value may be cached and
 * passed around as it will always be DCE'd.
 * @param {?Window=} opt_win
 * @return {!./mode.ModeDef}
 */
function getModeObject(opt_win) {
  return {
    localDev: (0, _mode.getMode)(opt_win).localDev,
    development: (0, _mode.getMode)(opt_win).development,
    filter: (0, _mode.getMode)(opt_win).filter,
    minified: (0, _mode.getMode)(opt_win).minified,
    lite: (0, _mode.getMode)(opt_win).lite,
    test: (0, _mode.getMode)(opt_win).test,
    log: (0, _mode.getMode)(opt_win).log,
    version: (0, _mode.getMode)(opt_win).version,
    rtvVersion: (0, _mode.getMode)(opt_win).rtvVersion
  };
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"./mode":21}],21:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModeDef = undefined;
exports.getMode = getMode;
exports.getRtvVersionForTesting = getRtvVersionForTesting;
exports.resetRtvVersionForTesting = resetRtvVersionForTesting;

var _urlParseQueryString = require('./url-parse-query-string');

/**
 * @typedef {{
 *   localDev: boolean,
 *   development: boolean,
 *   filter: (string|undefined),
 *   minified: boolean,
 *   lite: boolean,
 *   test: boolean,
 *   log: (string|undefined),
 *   version: string,
 *   rtvVersion: string,
 * }}
 */
var ModeDef = exports.ModeDef = void 0;

/** @type {string} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var version = '1537222846916';

/**
 * `rtvVersion` is the prefixed version we serve off of the cdn.
 * The prefix denotes canary(00) or prod(01) or an experiment version ( > 01).
 * @type {string}
 */
var rtvVersion = '';

/**
 * Provides info about the current app.
 * @param {?Window=} opt_win
 * @return {!ModeDef}
 */
function getMode(opt_win) {
  var win = opt_win || self;
  if (win.AMP_MODE) {
    return win.AMP_MODE;
  }
  return win.AMP_MODE = getMode_(win);
}

/**
 * Provides info about the current app.
 * @param {!Window} win
 * @return {!ModeDef}
 */
function getMode_(win) {
  // Magic constants that are replaced by closure compiler.
  // IS_MINIFIED is always replaced with true when closure compiler is used
  // while IS_DEV is only replaced when `gulp dist` is called without the
  // --fortesting flag.
  var IS_DEV = true;
  var IS_MINIFIED = false;

  var localDevEnabled = !!(self.AMP_CONFIG && self.AMP_CONFIG.localDev);
  var runningTests = IS_DEV && !!(win.AMP_TEST || win.__karma__);
  var isLocalDev = IS_DEV && (localDevEnabled || runningTests);
  var hashQuery = (0, _urlParseQueryString.parseQueryString_)(
  // location.originalHash is set by the viewer when it removes the fragment
  // from the URL.
  win.location.originalHash || win.location.hash);

  var searchQuery = (0, _urlParseQueryString.parseQueryString_)(win.location.search);

  if (!rtvVersion) {
    rtvVersion = getRtvVersion(win, isLocalDev);
  }

  // The `minified`, `test` and `localDev` properties are replaced
  // as boolean literals when we run `gulp dist` without the `--fortesting`
  // flags. This improved DCE on the production file we deploy as the code
  // paths for localhost/testing/development are eliminated.
  return {
    localDev: isLocalDev,
    // Triggers validation or enable pub level logging. Validation can be
    // bypassed via #validate=0.
    // Note that AMP_DEV_MODE flag is used for testing purposes.
    development: !!(hashQuery['development'] == '1' || win.AMP_DEV_MODE),
    examiner: hashQuery['development'] == '2',
    // Allows filtering validation errors by error category. For the
    // available categories, see ErrorCategory in validator/validator.proto.
    filter: hashQuery['filter'],
    // amp-geo override
    geoOverride: hashQuery['amp-geo'],
    minified: IS_MINIFIED,
    // Whether document is in an amp-lite viewer. It signal that the user
    // would prefer to use less bandwidth.
    lite: searchQuery['amp_lite'] != undefined,
    test: runningTests,
    log: hashQuery['log'],
    version: version,
    rtvVersion: rtvVersion
  };
}

/**
 * Retrieve the `rtvVersion` which will have a numeric prefix
 * denoting canary/prod/experiment (unless `isLocalDev` is true).
 *
 * @param {!Window} win
 * @param {boolean} isLocalDev
 * @return {string}
 */
function getRtvVersion(win, isLocalDev) {
  // If it's local dev then we won't actually have a full version so
  // just use the version.
  if (isLocalDev) {
    return version;
  }

  if (win.AMP_CONFIG && win.AMP_CONFIG.v) {
    return win.AMP_CONFIG.v;
  }

  // Currently `1537222846916` and thus `mode.version` contain only
  // major version. The full version however must also carry the minor version.
  // We will default to production default `01` minor version for now.
  // TODO(erwinmombay): decide whether 1537222846916 should contain
  // minor version.
  return '01' + version;
}

/**
 * @param {!Window} win
 * @param {boolean} isLocalDev
 * @return {string}
 * @visibleForTesting
 */
function getRtvVersionForTesting(win, isLocalDev) {
  return getRtvVersion(win, isLocalDev);
}

/** @visibleForTesting */
function resetRtvVersionForTesting() {
  rtvVersion = '';
}

},{"./url-parse-query-string":41}],22:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Motion = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

exports.calcVelocity = calcVelocity;
exports.continueMotion = continueMotion;

var _promise = require('./utils/promise');

var _services = require('./services');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {function()} */
var NOOP_CALLBACK_ = function NOOP_CALLBACK_() {};

/** @const {number} */
var MIN_VELOCITY_ = 0.02;

/** @const {number} */
var FRAME_CONST_ = 16.67;

/** @const {number} */
var EXP_FRAME_CONST_ = Math.round(-FRAME_CONST_ / Math.log(0.95));

/**
 * Depreciation factor of 1/100 of a millisecond. This is how much previous
 * velocity is depreciated when calculating the new velocity.
 * @const {number}
 */
var VELOCITY_DEPR_FACTOR_ = FRAME_CONST_ * 2;

/**
 * Calculates velocity for an object traveling the distance deltaV in the
 * time deltaTime given the previous velocity prevVelocity. The calculation
 * assumes a basic informational depreciation of previous velocity.
 * @param {number} deltaV
 * @param {time} deltaTime
 * @param {number} prevVelocity
 * @return {number}
 */
function calcVelocity(deltaV, deltaTime, prevVelocity) {
  if (deltaTime < 1) {
    deltaTime = 1;
  }

  // Calculate speed and speed depreciation.
  var speed = deltaV / deltaTime;

  // Depreciation is simply an informational quality. It basically means:
  // we can't ignore the velocity we knew recently, but we'd only consider
  // it proportionally to how long ago we've seen it. Currently, this
  // depreciation factor is 1/100 of a millisecond. New average velocity is
  // calculated by weighing toward the new velocity and away from old
  // velocity based on the depreciation.
  var depr = 0.5 + Math.min(deltaTime / VELOCITY_DEPR_FACTOR_, 0.5);
  return speed * depr + prevVelocity * (1 - depr);
}

/**
 * Returns a motion process that will yield when the velocity has run down to
 * zerp. For each iteration, the velocity is depreciated and the coordinates
 * are advanced from start X/Y to the destination according to velocity
 * vectors. For each such iteration the callback is called with the new x and y.
 * @param {!Node} contextNode
 * @param {number} startX Start X coordinate.
 * @param {number} startY Start Y coordinate.
 * @param {number} veloX Starting X velocity.
 * @param {number} veloY Starting Y velocity.
 * @param {function(number, number):boolean} callback The callback for each
 *   step of the deceleration motion.
 * @param {!./service/vsync-impl.Vsync=} opt_vsync Mostly for testing only.
 * @return {!Motion}
 */
function continueMotion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
  return new Motion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync).start();
}

/**
 * Motion process that allows tracking and monitoring of the running motion.
 * Most importantly it exposes methods "then" and "thenAlways" that have the
 * semantics of a Promise and signal when the motion has completed or failed.
 * Additionally, it exposes the method "halt" which allows to stop/reset the
 * motion.
 * @implements {IThenable}
 */

var Motion = exports.Motion = function () {
  /**
   * @param {!Node} contextNode Context node.
   * @param {number} startX Start X coordinate.
   * @param {number} startY Start Y coordinate.
   * @param {number} veloX Starting X velocity.
   * @param {number} veloY Starting Y velocity.
   * @param {function(number, number):boolean} callback The callback for each
   *   step of the deceleration motion.
   * @param {!./service/vsync-impl.Vsync=} opt_vsync
   */
  function Motion(contextNode, startX, startY, veloX, veloY, callback, opt_vsync) {
    _classCallCheck(this, Motion);

    /** @private @const {!./service/vsync-impl.Vsync} */
    this.vsync_ = opt_vsync || _services.Services.vsyncFor(self);

    /** @private @const {!Node} */
    this.contextNode_ = contextNode;

    /** @private @const */
    this.callback_ = callback;

    /** @private {number} */
    this.lastX_ = startX;

    /** @private {number} */
    this.lastY_ = startY;

    /** @private {number} */
    this.maxVelocityX_ = veloX;

    /** @private {number} */
    this.maxVelocityY_ = veloY;

    /** @private {number} */
    this.velocityX_ = 0;

    /** @private {number} */
    this.velocityY_ = 0;

    var deferred = new _promise.Deferred();

    /** @private {!Promise} */
    this.promise_ = deferred.promise;

    /** @private {!Function} */
    this.resolve_ = deferred.resolve;

    /** @private {!Function} */
    this.reject_ = deferred.reject;

    /** @private {boolean} */
    this.continuing_ = false;
  }

  /** */


  _createClass(Motion, [{
    key: 'start',
    value: function start() {
      this.continuing_ = true;
      if (Math.abs(this.maxVelocityX_) <= MIN_VELOCITY_ && Math.abs(this.maxVelocityY_) <= MIN_VELOCITY_) {
        this.fireMove_();
        this.completeContinue_(true);
      } else {
        this.runContinuing_();
      }
      return this;
    }

    /**
     * Halts the motion. The motion promise will be rejected since the motion
     * has been interrupted.
     */

  }, {
    key: 'halt',
    value: function halt() {
      if (this.continuing_) {
        this.completeContinue_(false);
      }
    }

    /**
     * Chains to the motion's promise that will resolve when the motion has
     * completed or will reject if motion has failed or was interrupted.
     * @override
     */

  }, {
    key: 'then',
    value: function then(opt_resolve, opt_reject) {
      if (!opt_resolve && !opt_reject) {
        return this.promise_;
      }
      return this.promise_.then(opt_resolve, opt_reject);
    }

    /**
     * Callback for regardless whether the motion succeeds or fails.
     * @param {function()=} opt_callback
     * @return {!Promise}
     */

  }, {
    key: 'thenAlways',
    value: function thenAlways(opt_callback) {
      var callback = opt_callback || NOOP_CALLBACK_;
      return (/** @type {!Promise} */this.then(callback, callback)
      );
    }

    /**
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'runContinuing_',
    value: function runContinuing_() {
      this.velocityX_ = this.maxVelocityX_;
      this.velocityY_ = this.maxVelocityY_;
      var boundStep = this.stepContinue_.bind(this);
      var boundComplete = this.completeContinue_.bind(this, true);
      return this.vsync_.runAnimMutateSeries(this.contextNode_, boundStep, 5000).then(boundComplete, boundComplete);
    }

    /**
     * Returns "true" to continue and "false" to stop motion process.
     * @param {time} timeSinceStart
     * @param {time} timeSincePrev
     * @return {boolean}
     * @private
     */

  }, {
    key: 'stepContinue_',
    value: function stepContinue_(timeSinceStart, timeSincePrev) {
      if (!this.continuing_) {
        return false;
      }

      this.lastX_ += timeSincePrev * this.velocityX_;
      this.lastY_ += timeSincePrev * this.velocityY_;
      if (!this.fireMove_()) {
        return false;
      }

      var decel = Math.exp(-timeSinceStart / EXP_FRAME_CONST_);
      this.velocityX_ = this.maxVelocityX_ * decel;
      this.velocityY_ = this.maxVelocityY_ * decel;
      return Math.abs(this.velocityX_) > MIN_VELOCITY_ || Math.abs(this.velocityY_) > MIN_VELOCITY_;
    }

    /**
     * @param {boolean} success
     * @private
     */

  }, {
    key: 'completeContinue_',
    value: function completeContinue_(success) {
      if (!this.continuing_) {
        return;
      }
      this.continuing_ = false;
      this.fireMove_();
      if (success) {
        this.resolve_();
      } else {
        this.reject_();
      }
    }

    /** @private */

  }, {
    key: 'fireMove_',
    value: function fireMove_() {
      return this.callback_(this.lastX_, this.lastY_);
    }
  }]);

  return Motion;
}();

},{"./services":34,"./utils/promise":48}],23:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This class helps to manage observers. Observers can be added, removed or
 * fired through and instance of this class.
 * @template TYPE
 */
var Observable = exports.Observable = function () {

  /**
   * Creates an instance of Observable.
   */
  function Observable() {
    _classCallCheck(this, Observable);

    /** @type {?Array<function(TYPE)>} */
    this.handlers_ = null;
  }

  /**
   * Adds the observer to this instance.
   * @param {function(TYPE)} handler Observer's handler.
   * @return {!UnlistenDef}
   */


  _createClass(Observable, [{
    key: "add",
    value: function add(handler) {
      var _this = this;

      if (!this.handlers_) {
        this.handlers_ = [];
      }
      this.handlers_.push(handler);
      return function () {
        _this.remove(handler);
      };
    }

    /**
     * Removes the observer from this instance.
     * @param {function(TYPE)} handler Observer's instance.
     */

  }, {
    key: "remove",
    value: function remove(handler) {
      if (!this.handlers_) {
        return;
      }
      var index = this.handlers_.indexOf(handler);
      if (index > -1) {
        this.handlers_.splice(index, 1);
      }
    }

    /**
     * Removes all observers.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      if (!this.handlers_) {
        return;
      }
      this.handlers_.length = 0;
    }

    /**
     * Fires an event. All observers are called.
     * @param {TYPE=} opt_event
     */

  }, {
    key: "fire",
    value: function fire(opt_event) {
      if (!this.handlers_) {
        return;
      }
      var handlers = this.handlers_;
      for (var i = 0; i < handlers.length; i++) {
        var handler = handlers[i];
        handler(opt_event);
      }
    }

    /**
     * Returns number of handlers. Mostly needed for tests.
     * @return {number}
     */

  }, {
    key: "getHandlerCount",
    value: function getHandlerCount() {
      if (!this.handlers_) {
        return 0;
      }
      return this.handlers_.length;
    }
  }]);

  return Observable;
}();

},{}],24:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _services = require('./services');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Pass class helps to manage single-pass process. A pass is scheduled using
 * delay method. Only one pass can be pending at a time. If no pass is pending
 * the process is considered to be "idle".
 */
var Pass = exports.Pass = function () {

  /**
   * Creates a new Pass instance.
   * @param {!Window} win
   * @param {function()} handler Handler to be executed when pass is triggered.
   * @param {number=} opt_defaultDelay Default delay to be used when schedule
   *   is called without one.
   */
  function Pass(win, handler, opt_defaultDelay) {
    var _this = this;

    _classCallCheck(this, Pass);

    this.timer_ = _services.Services.timerFor(win);

    /** @private @const {function()} */
    this.handler_ = handler;

    /** @private @const {number} */
    this.defaultDelay_ = opt_defaultDelay || 0;

    /** @private {number|string} */
    this.scheduled_ = -1;

    /** @private {number} */
    this.nextTime_ = 0;

    /** @private {boolean} */
    this.running_ = false;

    /** @private @const {!Function} */
    this.boundPass_ = function () {
      return _this.pass_();
    };
  }

  /**
   * Whether or not a pass is currently pending.
   * @return {boolean}
   */


  _createClass(Pass, [{
    key: 'isPending',
    value: function isPending() {
      return this.scheduled_ != -1;
    }

    /**
     * Tries to schedule a new pass optionally with specified delay. If the new
     * requested pass is requested before the pending pass, the pending pass is
     * canceled. If the new pass is requested after the pending pass, the newly
     * requested pass is ignored.
     *
     * Returns {@code true} if the pass has been scheduled and {@code false} if
     * ignored.
     *
     * @param {number=} opt_delay Delay to schedule the pass. If not specified
     *   the default delay is used, falling back to 0.
     * @return {boolean}
     */

  }, {
    key: 'schedule',
    value: function schedule(opt_delay) {
      var delay = opt_delay || this.defaultDelay_;
      if (this.running_ && delay < 10) {
        // If we get called recursively, wait at least 10ms for the next
        // execution.
        delay = 10;
      }

      var nextTime = Date.now() + delay;
      // Schedule anew if nothing is scheduled currently or if the new time is
      // sooner then previously requested.
      if (!this.isPending() || nextTime - this.nextTime_ < -10) {
        this.cancel();
        this.nextTime_ = nextTime;
        this.scheduled_ = this.timer_.delay(this.boundPass_, delay);

        return true;
      }

      return false;
    }

    /**
     *
     */

  }, {
    key: 'pass_',
    value: function pass_() {
      this.scheduled_ = -1;
      this.nextTime_ = 0;
      this.running_ = true;
      this.handler_();
      this.running_ = false;
    }

    /**
     * Cancels the pending pass if any.
     */

  }, {
    key: 'cancel',
    value: function cancel() {
      if (this.isPending()) {
        this.timer_.cancel(this.scheduled_);
        this.scheduled_ = -1;
      }
    }
  }]);

  return Pass;
}();

},{"./services":34}],25:[function(require,module,exports){
var _mode = require('./mode');

var _arrayIncludes = require('./polyfills/array-includes');

var _customElements = require('./polyfills/custom-elements');

var _domtokenlistToggle = require('./polyfills/domtokenlist-toggle');

var _documentContains = require('./polyfills/document-contains');

var _mathSign = require('./polyfills/math-sign');

var _objectAssign = require('./polyfills/object-assign');

var _promise = require('./polyfills/promise');

var _documentRegisterElement = require('document-register-element/build/document-register-element.patched');

var _experiments = require('./experiments');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                           *
                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                           * you may not use this file except in compliance with the License.
                                                                                                                                                           * You may obtain a copy of the License at
                                                                                                                                                           *
                                                                                                                                                           *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                           *
                                                                                                                                                           * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                           * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                           * See the License for the specific language governing permissions and
                                                                                                                                                           * limitations under the License.
                                                                                                                                                           */

if ((0, _experiments.isExperimentOn)(self, 'custom-elements-v1') || (0, _mode.getMode)().test) {
  (0, _customElements.install)(self, function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _class;
  }());
} else {
  (0, _documentRegisterElement.installCustomElements)(self, 'auto');
}
(0, _domtokenlistToggle.install)(self);
(0, _mathSign.install)(self);
(0, _objectAssign.install)(self);
(0, _promise.install)(self);
(0, _documentContains.install)(self);
(0, _arrayIncludes.install)(self);

},{"./experiments":14,"./mode":21,"./polyfills/array-includes":26,"./polyfills/custom-elements":27,"./polyfills/document-contains":28,"./polyfills/domtokenlist-toggle":29,"./polyfills/math-sign":30,"./polyfills/object-assign":31,"./polyfills/promise":32,"document-register-element/build/document-register-element.patched":3}],26:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns true if the element is in the array and false otherwise.
 *
 * @param {*} value
 * @param {number=} opt_fromIndex
 * @return {boolean}
 * @this {Array}
 */
function includes(value, opt_fromIndex) {
  var fromIndex = opt_fromIndex || 0;
  var len = this.length;
  var i = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);
  for (; i < len; i++) {
    var other = this[i];
    // If value has been found OR (value is NaN AND other is NaN)
    /*eslint "no-self-compare": 0*/
    if (other === value || value !== value && other !== other) {
      return true;
    }
  }
  return false;
}

/**
* Sets the Array.contains polyfill if it does not exist.
* @param {!Window} win
*/
function install(win) {
  if (!win.Array.prototype.includes) {
    win.Object.defineProperty(Array.prototype, 'includes', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: includes
    });
  }
}

},{}],27:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.install = install;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {{
 *   promise: !Promise<undefined>,
 *   resolve: function(),
 * }}
 */
var DeferredDef = void 0;

/**
 * @typedef {!Function}
 */
var CustomElementConstructorDef = void 0;

/**
 * @typedef {{
 *  name: string,
 *  ctor: !CustomElementConstructorDef,
 * }}
 */
var CustomElementDef = void 0;

/**
 * Validates the custom element's name.
 * This intentionally ignores "valid" higher Unicode Code Points.
 * https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
 */
var VALID_NAME = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/;
var INVALID_NAMES = ['annotation-xml', 'color-profile', 'font-face', 'font-face-src', 'font-face-uri', 'font-face-format', 'font-face-name', 'missing-glyph'];

/**
 * Asserts that the custom element name conforms to the spec.
 *
 * @param {!Function} SyntaxError
 * @param {string} name
 */
function assertValidName(SyntaxError, name) {
  if (!VALID_NAME.test(name) || INVALID_NAMES.indexOf(name) >= 0) {
    throw new SyntaxError('invalid custom element name "' + name + '"');
  }
}

/**
 * Does win have a full Custom Elements registry?
 *
 * @param {!Window} win
 * @return {boolean}
 */
function hasCustomElements(win) {
  var customElements = win.customElements;


  return !!(customElements && customElements.define && customElements.get && customElements.whenDefined);
}

/**
 * Was HTMLElement already patched for this window?
 *
 * @param {!Window} win
 * @return {boolean}
 */
function isPatched(win) {
  var tag = win.HTMLElement.toString();
  return tag.indexOf('[native code]') === -1;
}

/**
 * The public Custom Elements API.
 */

var CustomElementRegistry = function () {
  /**
   * @param {!Window} win
   * @param {!Registry} registry
   */
  function CustomElementRegistry(win, registry) {
    _classCallCheck(this, CustomElementRegistry);

    /**
     * @const @private
     */
    this.win_ = win;

    /**
     * @const @private
     */
    this.registry_ = registry;

    /**
     * @type {!Object<string, DeferredDef>}
     * @private
     * @const
     */
    this.pendingDefines_ = this.win_.Object.create(null);
  }

  /**
   * Register the custom element.
   *
   * @param {string} name
   * @param {!CustomElementConstructorDef} ctor
   * @param {!Object=} options
   */


  _createClass(CustomElementRegistry, [{
    key: 'define',
    value: function define(name, ctor, options) {
      this.registry_.define(name, ctor, options);

      // If anyone is waiting for this custom element to be defined, resolve
      // their promise.
      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (deferred) {
        deferred.resolve();
        delete pending[name];
      }
    }

    /**
     * Get the constructor of the (already defined) custom element.
     *
     * @param {string} name
     * @return {!CustomElementConstructorDef|undefined}
     */

  }, {
    key: 'get',
    value: function get(name) {
      var def = this.registry_.getByName(name);
      if (def) {
        return def.ctor;
      }
    }

    /**
     * Returns a promise that waits until the custom element is defined.
     * If the custom element is already defined, returns a resolved promise.
     *
     * @param {string} name
     * @return {!Promise<undefined>}
     */

  }, {
    key: 'whenDefined',
    value: function whenDefined(name) {
      var _win_ = this.win_,
          Promise = _win_.Promise,
          SyntaxError = _win_.SyntaxError;

      assertValidName(SyntaxError, name);

      if (this.registry_.getByName(name)) {
        return Promise.resolve();
      }

      var pending = this.pendingDefines_;
      var deferred = pending[name];
      if (deferred) {
        return deferred.promise;
      }

      var resolve = void 0;
      var promise = new /*OK*/Promise(function (res) {
        return resolve = res;
      });
      pending[name] = {
        promise: promise,
        resolve: resolve
      };

      return promise;
    }

    /**
     * Upgrade all custom elements inside root.
     *
     * @param {!Node} root
     */

  }, {
    key: 'upgrade',
    value: function upgrade(root) {
      this.registry_.upgrade(root);
    }
  }]);

  return CustomElementRegistry;
}();

/**
 * This internal APIs necessary to run the CustomElementRegistry.
 * Since Registry is never exposed externally, all methods are actually
 * available on the instance.
 */


var Registry = function () {
  /**
   * @param {!Window} win
   */
  function Registry(win) {
    _classCallCheck(this, Registry);

    /**
     * @private @const
     */
    this.win_ = win;

    /**
     * @private @const
     */
    this.doc_ = win.document;

    /**
     * @type {!Object<string, !CustomElementDef>}
     * @private
     * @const
     */
    this.definitions_ = win.Object.create(null);

    /**
     * A up-to-date DOM selector for all custom elements.
     * @type {string}
     */
    this.query_ = '';

    /**
     * The currently upgrading element.
     * @private {Element}
     */
    this.current_ = null;
  }

  /**
   * The currently-being-upgraded custom element.
   *
   * When an already created (through the DOM parsing APIs, or innerHTML)
   * custom element node is being upgraded, we can't just create a new node
   * (it's illegal in the spec). But we still need to run the custom element's
   * constructor code on the node. We avoid this conundrum by running the
   * constructor while returning this current node in the HTMLElement
   * class constructor (the base class of all custom elements).
   *
   * @return {Element}
   */


  _createClass(Registry, [{
    key: 'current',
    value: function current() {
      var current = this.current_;
      this.current_ = null;
      return current;
    }

    /**
     * Finds the custom element definition by name.
     *
     * @param {string} name
     * @return {CustomElementDef|undefined}
     */

  }, {
    key: 'getByName',
    value: function getByName(name) {
      var definition = this.definitions_[name];
      if (definition) {
        return definition;
      }
    }

    /**
     * Finds the custom element definition by constructor instance.
     *
     * @param {CustomElementConstructorDef} ctor
     * @return {CustomElementDef|undefined}
     */

  }, {
    key: 'getByConstructor',
    value: function getByConstructor(ctor) {
      var definitions = this.definitions_;

      for (var name in definitions) {
        var def = definitions[name];
        if (def.ctor === ctor) {
          return def;
        }
      }
    }

    /**
     * Registers the custom element definition, and upgrades all elements by that
     * name in the root document.
     *
     * @param {string} name
     * @param {!CustomElementConstructorDef} ctor
     * @param {!Object|undefined} options
     */

  }, {
    key: 'define',
    value: function define(name, ctor, options) {
      var _win_2 = this.win_,
          Error = _win_2.Error,
          SyntaxError = _win_2.SyntaxError;


      if (options) {
        throw new Error('Extending native custom elements is not supported');
      }

      assertValidName(SyntaxError, name);

      if (this.getByName(name) || this.getByConstructor(ctor)) {
        throw new Error('duplicate definition "' + name + '"');
      }

      // TODO(jridgewell): Record connectedCallback, disconnectedCallback,
      // adoptedCallback, attributeChangedCallback, and observedAttributes.
      // TODO(jridgewell): If attributeChangedCallback, gather observedAttributes
      this.definitions_[name] = {
        name: name,
        ctor: ctor
      };

      this.observe_(name);
      this.upgrade(this.doc_, name);
    }

    /**
     * Upgrades custom elements descendants of root (but not including root).
     *
     * When called with an opt_query, it both upgrades and connects the custom
     * elements (this is used during the custom element define algorithm).
     *
     * @param {!Node} root
     * @param {string=} opt_query
     */

  }, {
    key: 'upgrade',
    value: function upgrade(root, opt_query) {
      // Only CustomElementRegistry.p.define provides a query (the newly defined
      // custom element). In this case, we are both upgrading _and_ connecting
      // the custom elements.
      var newlyDefined = !!opt_query;
      var query = opt_query || this.query_;
      var upgradeCandidates = this.queryAll_(root, query);

      for (var i = 0; i < upgradeCandidates.length; i++) {
        var candidate = upgradeCandidates[i];
        if (newlyDefined) {
          this.connectedCallback_(candidate);
        } else {
          this.upgradeSelf(candidate);
        }
      }
    }

    /**
     * Upgrades the custom element node, if a custom element has been registered
     * by this name.
     *
     * @param {!Node} node
     */

  }, {
    key: 'upgradeSelf',
    value: function upgradeSelf(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }

      this.upgradeSelf_( /** @type {!Element} */node, def);
    }

    /**
     * @param {!Node} root
     * @param {string} query
     * @return {!Array|!NodeList}
     */

  }, {
    key: 'queryAll_',
    value: function queryAll_(root, query) {
      if (!query || !root.querySelectorAll) {
        // Nothing to do...
        return [];
      }

      return root.querySelectorAll(query);
    }

    /**
     * Upgrades the (already created via DOM parsing) custom element.
     *
     * @param {!Element} node
     * @param {!CustomElementDef} def
     */

  }, {
    key: 'upgradeSelf_',
    value: function upgradeSelf_(node, def) {
      var ctor = def.ctor;

      if (node instanceof ctor) {
        return;
      }

      // Despite how it looks, this is not a useless construction.
      // HTMLElementPolyfill (the base class of all custom elements) will return
      // the current node, allowing the custom element's subclass constructor to
      // run on the node. The node itself is already constructed, so the return
      // value is just the node.
      this.current_ = node;
      var el = new ctor();

      if (el !== node) {
        throw new this.win_.Error('Constructor illegally returned a different instance.');
      }
    }

    /**
     * Fires connectedCallback on the custom element, if it has one.
     * This also upgrades the custom element, since it may not have been
     * accessible via the root document before (a detached DOM tree).
     *
     * @param {!Node} node
     */

  }, {
    key: 'connectedCallback_',
    value: function connectedCallback_(node) {
      var def = this.getByName(node.localName);
      if (!def) {
        return;
      }
      this.upgradeSelf_( /** @type {!Element} */node, def);
      // TODO(jridgewell): It may be appropriate to adoptCallback, if the node
      // used to be in another doc.
      // TODO(jridgewell): I should be calling the definitions connectedCallback
      // with node as the context.
      if (node.connectedCallback) {
        node.connectedCallback();
      }
    }

    /**
     * Fires disconnectedCallback on the custom element, if it has one.
     *
     * @param {!Node} node
     */

  }, {
    key: 'disconnectedCallback_',
    value: function disconnectedCallback_(node) {
      // TODO(jridgewell): I should be calling the definitions connectedCallback
      // with node as the context.
      if (node.disconnectedCallback) {
        node.disconnectedCallback();
      }
    }

    /**
     * Records name as a registered custom element to observe.
     *
     * Starts the Mutation Observer if this is the first registered custom
     * element. This is deferred until the first custom element is defined to
     * speed up initial rendering of the page.
     *
     * Mutation Observers are conveniently available in every browser we care
     * about. When a node is connected to the root document, all custom
     * elements (including that node iteself) will be upgraded and call
     * connectedCallback. When a node is disconnectedCallback from the root
     * document, all custom elements will call disconnectedCallback.
     *
     * @param {string} name
     */

  }, {
    key: 'observe_',
    value: function observe_(name) {
      var _this = this;

      if (this.query_) {
        this.query_ += ',' + name;
        return;
      }

      this.query_ = name;

      // The first registered name starts the mutation observer.
      var observer = new this.win_.MutationObserver(function (records) {
        if (records) {
          _this.handleRecords_(records);
        }
      });
      observer.observe(this.doc_, {
        childList: true,
        subtree: true
      });
    }

    /**
     * Handle all the Mutation Observer's Mutation Records.
     * All added custom elements will be upgraded (if not already) and call
     * connectedCallback. All removed custom elements will call
     * disconnectedCallback.
     *
     * @param {!Array<!MutationRecord>} records
     */

  }, {
    key: 'handleRecords_',
    value: function handleRecords_(records) {
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        if (!record) {
          continue;
        }

        var addedNodes = record.addedNodes,
            removedNodes = record.removedNodes;

        for (var _i = 0; _i < addedNodes.length; _i++) {
          var node = addedNodes[_i];
          var connectedCandidates = this.queryAll_(node, this.query_);
          this.connectedCallback_(node);
          for (var _i2 = 0; _i2 < connectedCandidates.length; _i2++) {
            this.connectedCallback_(connectedCandidates[_i2]);
          }
        }

        for (var _i3 = 0; _i3 < removedNodes.length; _i3++) {
          var _node = removedNodes[_i3];
          var disconnectedCandidates = this.queryAll_(_node, this.query_);
          this.disconnectedCallback_(_node);
          for (var _i4 = 0; _i4 < disconnectedCandidates.length; _i4++) {
            this.disconnectedCallback_(disconnectedCandidates[_i4]);
          }
        }
      }
    }
  }]);

  return Registry;
}();

/**
 * Does the polyfilling.
 * @param {!Window} win
 */


function polyfill(win) {
  var HTMLElement = win.HTMLElement,
      Element = win.Element,
      Node = win.Node,
      Document = win.Document,
      Object = win.Object,
      document = win.document;
  var createElement = document.createElement,
      cloneNode = document.cloneNode,
      importNode = document.importNode;


  var registry = new Registry(win);
  var customElements = new CustomElementRegistry(win, registry);

  // Expose the custom element registry.
  // Object.getOwnPropertyDescriptor(window, 'customElements')
  // {get: ƒ, set: undefined, enumerable: true, configurable: true}
  Object.defineProperty(win, 'customElements', {
    enumerable: true,
    configurable: true,
    // writable: false,
    value: customElements
  });

  // Patch createElement to immediately upgrade the custom element.
  // This has the added benefit that it avoids the "already created but needs
  // constructor code run" chicken-and-egg problem.
  Document.prototype.createElement = function createElementPolyfill(name) {
    var def = registry.getByName(name);
    if (def) {
      return new def.ctor();
    }
    return createElement.apply(this, arguments);
  };

  // Patch importNode to immediately upgrade custom elements.
  // TODO(jridgewell): Can fire adoptedCallback for cross doc imports.
  Document.prototype.importNode = function importNodePolyfill() {
    var imported = importNode.apply(this, arguments);
    if (imported) {
      registry.upgradeSelf(imported);
      registry.upgrade(imported);
    }
    return imported;
  };

  // Patch cloneNode to immediately upgrade custom elements.
  Node.prototype.cloneNode = function cloneNodePolyfill() {
    var cloned = cloneNode.apply(this, arguments);
    registry.upgradeSelf(cloned);
    registry.upgrade(cloned);
    return cloned;
  };

  // Patch the innerHTML setter to immediately upgrade custom elements.
  // Note, this could technically fire connectedCallbacks if this node was
  // connected, but we leave that to the Mutation Observer.
  var innerHTMLDesc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
  var innerHTMLSetter = innerHTMLDesc.set;
  innerHTMLDesc.set = function (html) {
    innerHTMLSetter.call(this, html);
    registry.upgrade(this);
  };
  Object.defineProperty(Element.prototype, 'innerHTML', innerHTMLDesc);

  /**
   * You can't use the real HTMLElement constructor, because you can't subclass
   * it without using native classes. So, mock its approximation using
   * createElement.
   */
  function HTMLElementPolyfill() {
    var constructor = this.constructor;

    // If we're upgrading an already created custom element, we can't create
    // another new node (by the spec, it must be the same node).

    var el = registry.current();

    // If there's not a already created custom element, we're being invoked via
    // `new`ing the constructor.
    //
    // Technically, we could get here via createElement, but we patched that.
    // If it the custom element was registered, the patch turned it into a
    // `new` call.
    // If it was not registered, the native createElement is used. And if
    // native createElement is being used and we got to this code, we're really
    // in an infinite loop (a native createElement call just below) so we've
    // got bigger problems.
    //
    // So just take my word we got here via `new`.
    if (!el) {
      // The custom element definition is an invariant. If the custom element
      // is registered, everything works. If it's not, it throws in the member
      // property access (only defined custom elements can be directly
      // constructed via `new`).
      var def = registry.getByConstructor(constructor);
      el = createElement.call(document, def.name);
    }

    // Finally, if the node was already constructed, we need to reset it's
    // prototype to the custom element prototype. And if it wasn't already
    // constructed, we created a new node via native createElement, and we need
    // to reset it's prototype. Basically always reset the prototype.
    Object.setPrototypeOf(el, constructor.prototype);
    return el;
  }
  subClass(Object, HTMLElement, HTMLElementPolyfill);

  // Expose the polyfilled HTMLElement constructor for everyone to extend from.
  win.HTMLElement = HTMLElementPolyfill;
}

/**
 * Wraps HTMLElement in a Reflect.construct constructor, so that transpiled
 * classes can `_this = superClass.call(this)` during their construction.
 *
 * This is only used when Custom Elements v1 is already available _and_ we're
 * using transpiled classes (which use ES5 construction idioms).
 *
 * @param {!Window} win
 */
function wrapHTMLElement(win) {
  var HTMLElement = win.HTMLElement,
      Reflect = win.Reflect,
      Object = win.Object;
  /**
   */

  function HTMLElementWrapper() {
    var ctor = /** @type {function(...?):?|undefined} */
    /** @type {!HTMLElement} */this.constructor;

    // Reflect.construct allows us to construct a new HTMLElement without using
    // `new` (which will always fail because native HTMLElement is a restricted
    // constructor).
    return Reflect.construct(HTMLElement, [], ctor);
  }
  subClass(Object, HTMLElement, HTMLElementWrapper);

  // Expose the wrapped HTMLElement constructor for everyone to extend from.
  win.HTMLElement = HTMLElementWrapper;
}

/**
 * Setups up prototype inheritance
 *
 * @param {!Object} Object
 * @param {!Function} superClass
 * @param {!Function} subClass
 */
function subClass(Object, superClass, subClass) {
  // Object.getOwnPropertyDescriptor(superClass.prototype, 'constructor')
  // {value: ƒ, writable: true, enumerable: false, configurable: true}
  subClass.prototype = Object.create(superClass.prototype, {
    constructor: {
      // enumerable: false,
      configurable: true,
      writable: true,
      value: subClass
    }
  });
}

/**
 * Polyfills Custom Elements v1 API. This has 4 modes:
 *
 * 1. Custom elements v1 already supported, using native classes
 * 2. Custom elements v1 already supported, using transpiled classes
 * 3. Custom elements v1 not supported, using native classes
 * 4. Custom elements v1 not supported, using transpiled classes
 *
 * In mode 1, nothing is done. In mode 2, a minimal polyfill is used to support
 * extending the HTMLElement base class. In mode 3 and 4, a full polyfill is
 * done.
 *
 * @param {!Window} win
 * @param {!Function} ctor
 */
function install(win, ctor) {
  if (isPatched(win)) {
    return;
  }

  var install = true;
  var installWrapper = false;

  if (hasCustomElements(win)) {
    // If ctor is constructable without new, it's a function. That means it was
    // compiled down, and we need to do the minimal polyfill because all you
    // cannot extend HTMLElement without native classes.
    try {
      var _Object = win.Object,
          _Reflect = win.Reflect;

      // "Construct" ctor using ES5 idioms

      var instance = _Object.create(ctor.prototype);
      ctor.call(instance);

      // If that succeeded, we're in a transpiled environment
      // Let's find out if we can wrap HTMLElement and avoid a full patch.
      installWrapper = !!(_Reflect && _Reflect.construct);
    } catch (e) {

      // The ctor threw when we constructed is via ES5, so it's a real class.
      // We're ok to not install the polyfill.
      install = false;
    }
  }

  if (installWrapper) {
    wrapHTMLElement(win);
  } else if (install) {
    polyfill(win);
  }
}

},{}],28:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `document.contains()` method. Notice that according to spec
 * `document.contains` is inclusionary.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
 * @param {?Node} node
 * @return {boolean}
 * @this {Node}
 */
function documentContainsPolyfill(node) {
  // Per spec, "contains" method is inclusionary
  // i.e. `node.contains(node) == true`. However, we still need to test
  // equality to the document itself.
  return node == this || this.documentElement.contains(node);
}

/**
 * Polyfills `HTMLDocument.contains` API.
 * @param {!Window} win
 */
function install(win) {
  // HTMLDocument is undefined in Internet Explorer 10, but it has Document,
  // so we use that as a fallback.
  var documentClass = win.HTMLDocument || win.Document;
  if (!documentClass.prototype.contains) {
    win.Object.defineProperty(documentClass.prototype, 'contains', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: documentContainsPolyfill
    });
  }
}

},{}],29:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Polyfill for `DOMTokenList.prototype.toggle(token, opt_force)` method. This
 * is specially important because IE does not support `opt_force` attribute. See
 * https://goo.gl/hgKNYY for details.
 * @param {string} token
 * @param {boolean=} opt_force
 * @this {DOMTokenList}
 * @return {boolean}
 */
function domTokenListTogglePolyfill(token, opt_force) {
  var remove = opt_force === undefined ? this.contains(token) : !opt_force;
  if (remove) {
    this.remove(token);
    return false;
  } else {
    this.add(token);
    return true;
  }
}

/**
 * Polyfills `DOMTokenList.prototype.toggle` API in IE.
 * @param {!Window} win
 */
function install(win) {
  if (isIe(win) && win.DOMTokenList) {
    win.Object.defineProperty(win.DOMTokenList.prototype, 'toggle', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: domTokenListTogglePolyfill
    });
  }
}

/**
 * Whether the current browser is a IE browser.
 * @param {!Window} win
 * @return {boolean}
 */
function isIe(win) {
  return (/Trident|MSIE|IEMobile/i.test(win.navigator.userAgent)
  );
}

},{}],30:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sign = sign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Parses the number x and returns its sign. For positive x returns 1, for
 * negative, -1. For 0 and -0, returns 0 and -0 respectively. For any number
 * that parses to NaN, returns NaN.
 *
 * @param {number} x
 * @return {number}
 */
function sign(x) {
  x = Number(x);

  // If x is 0, -0, or NaN, return it.
  if (!x) {
    return x;
  }

  return x > 0 ? 1 : -1;
}

/**
 * Sets the Math.sign polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Math.sign) {
    win.Object.defineProperty(win.Math, 'sign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: sign
    });
  }
}

},{}],31:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assign = assign;
exports.install = install;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Copies values of all enumerable own properties from one or more source
 * objects (provided as extended arguments to the function) to a target object.
 *
 * @param {!Object} target
 * @param {...Object} var_args
 * @return {!Object}
 */

function assign(target, var_args) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    if (source != null) {
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          output[key] = source[key];
        }
      }
    }
  }
  return output;
}

/**
 * Sets the Object.assign polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Object.assign) {
    win.Object.defineProperty(win.Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: assign
    });
  }
}

},{}],32:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;

var _promise = require('promise-pjs/promise');

var Promise = _interopRequireWildcard(_promise);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Sets the Promise polyfill if it does not exist.
 * @param {!Window} win
 */
function install(win) {
  if (!win.Promise) {
    win.Promise = /** @type {?} */Promise;
    // In babel the * export is an Object with a default property.
    // In closure compiler it is the Promise function itself.
    if (Promise.default) {
      win.Promise = Promise.default;
    }
    // We copy the individual static methods, because closure
    // compiler flattens the polyfill namespace.
    win.Promise.resolve = Promise.resolve;
    win.Promise.reject = Promise.reject;
    win.Promise.all = Promise.all;
    win.Promise.race = Promise.race;
  }
} /**
   * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

},{"promise-pjs/promise":4}],33:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbeddableService = exports.Disposable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * @fileoverview Registration and getter functions for AMP services.
 *
 * Invariant: Service getters never return null for registered services.
 */

// src/polyfills.js must be the first import.
// eslint-disable-line sort-imports-es6-autofix/sort-imports-es6

exports.getExistingServiceInEmbedScope = getExistingServiceInEmbedScope;
exports.getExistingServiceForDocInEmbedScope = getExistingServiceForDocInEmbedScope;
exports.installServiceInEmbedScope = installServiceInEmbedScope;
exports.registerServiceBuilder = registerServiceBuilder;
exports.registerServiceBuilderForDoc = registerServiceBuilderForDoc;
exports.getService = getService;
exports.getServicePromise = getServicePromise;
exports.getExistingServiceOrNull = getExistingServiceOrNull;
exports.getServicePromiseOrNull = getServicePromiseOrNull;
exports.getServiceForDoc = getServiceForDoc;
exports.getServiceForDocDeprecated = getServiceForDocDeprecated;
exports.getServicePromiseForDoc = getServicePromiseForDoc;
exports.getServicePromiseOrNullForDoc = getServicePromiseOrNullForDoc;
exports.setParentWindow = setParentWindow;
exports.getParentWindow = getParentWindow;
exports.getTopWindow = getTopWindow;
exports.getParentWindowFrameElement = getParentWindowFrameElement;
exports.getAmpdoc = getAmpdoc;
exports.isDisposable = isDisposable;
exports.assertDisposable = assertDisposable;
exports.disposeServicesForDoc = disposeServicesForDoc;
exports.disposeServicesForEmbed = disposeServicesForEmbed;
exports.isEmbeddable = isEmbeddable;
exports.adoptServiceForEmbed = adoptServiceForEmbed;
exports.adoptServiceForEmbedIfEmbeddable = adoptServiceForEmbedIfEmbeddable;
exports.resetServiceForTesting = resetServiceForTesting;

require('./polyfills');

var _promise = require('./utils/promise');

var _log = require('./log');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Holds info about a service.
 * - obj: Actual service implementation when available.
 * - promise: Promise for the obj.
 * - resolve: Function to resolve the promise with the object.
 * - context: Argument for ctor, either a window or an ampdoc.
 * - ctor: Function that constructs and returns the service.
 * @typedef {{
 *   obj: (?Object),
 *   promise: (?Promise),
 *   resolve: (?function(!Object)),
 *   context: (?Window|?./service/ampdoc-impl.AmpDoc),
 *   ctor: (?function(new:Object, !Window)|
 *          ?function(new:Object, !./service/ampdoc-impl.AmpDoc)),
 * }}
 */
var ServiceHolderDef = void 0;

/**
 * This interface provides a `dispose` method that will be called by
 * runtime when a service needs to be disposed of.
 * @interface
 */

var Disposable = exports.Disposable = function () {
  function Disposable() {
    _classCallCheck(this, Disposable);
  }

  _createClass(Disposable, [{
    key: 'dispose',


    /**
     * Instructs the service to release any resources it might be holding. Can
     * be called only once in the lifecycle of a service.
     */
    value: function dispose() {}
  }]);

  return Disposable;
}();

/**
 * This interface provides a `adoptEmbedWindow` method that will be called by
 * runtime for a new embed window.
 * @interface
 */


var EmbeddableService = exports.EmbeddableService = function () {
  function EmbeddableService() {
    _classCallCheck(this, EmbeddableService);
  }

  _createClass(EmbeddableService, [{
    key: 'adoptEmbedWindow',


    /**
     * Instructs the service to adopt the embed window and add any necessary
     * listeners and resources.
     * @param {!Window} unusedEmbedWin
     */
    value: function adoptEmbedWindow(unusedEmbedWin) {}
  }]);

  return EmbeddableService;
}();

/**
 * Returns a service with the given id. Assumes that it has been registered
 * already.
 * @param {!Window} win
 * @param {string} id
 * @param {boolean=} opt_fallbackToTopWin
 * @return {Object} The service.
 */


function getExistingServiceInEmbedScope(win, id, opt_fallbackToTopWin) {
  // First, try to resolve via local (embed) window.
  var local = getLocalExistingServiceForEmbedWinOrNull(win, id);
  if (local) {
    return local;
  }
  if (opt_fallbackToTopWin) {
    return getService(win, id);
  }
  return null;
}

/**
 * Returns a service with the given id. Assumes that it has been constructed
 * already.
 *
 * Unlike most service getters, passing `Node` is necessary for some FIE-scope
 * services since sometimes we only have the FIE Document for context.
 *
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id
 * @param {boolean=} opt_fallbackToTopWin
 * @return {Object} The service.
 */
function getExistingServiceForDocInEmbedScope(nodeOrDoc, id, opt_fallbackToTopWin) {
  // First, try to resolve via local (embed) window.
  if (nodeOrDoc.nodeType) {
    // If a node is passed, try to resolve via this node.
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    var local = getLocalExistingServiceForEmbedWinOrNull(win, id);
    if (local) {
      return local;
    }
  }
  // If an ampdoc is passed or fallback is allowed, continue resolving.
  if (!nodeOrDoc.nodeType || opt_fallbackToTopWin) {
    return getServiceForDocDeprecated(nodeOrDoc, id);
  }
  return null;
}

/**
 * Installs a service override on amp-doc level.
 * @param {!Window} embedWin
 * @param {string} id
 * @param {!Object} service The service.
 */
function installServiceInEmbedScope(embedWin, id, service) {
  var topWin = getTopWindow(embedWin);
  (0, _log.dev)().assert(embedWin != topWin, 'Service override can only be installed in embed window: %s', id);
  (0, _log.dev)().assert(!getLocalExistingServiceForEmbedWinOrNull(embedWin, id), 'Service override has already been installed: %s', id);
  registerServiceInternal(embedWin, embedWin, id, function () {
    return service;
  });
  getServiceInternal(embedWin, id); // Force service to build.
}

/**
 * @param {!Window} embedWin
 * @param {string} id
 * @return {?Object}
 */
function getLocalExistingServiceForEmbedWinOrNull(embedWin, id) {
  // Note that this method currently only resolves against the given window.
  // It does not try to go all the way up the parent window chain. We can change
  // this in the future, but for now this gives us a better performance.
  var topWin = getTopWindow(embedWin);
  if (embedWin != topWin && isServiceRegistered(embedWin, id)) {
    return getServiceInternal(embedWin, id);
  } else {
    return null;
  }
}

/**
 * Registers a service given a class to be used as implementation.
 * @param {!Window} win
 * @param {string} id of the service.
 * @param {function(new:Object, !Window)} constructor
 * @param {boolean=} opt_instantiate Whether to immediately create the service
 */
function registerServiceBuilder(win, id, constructor, opt_instantiate) {
  win = getTopWindow(win);
  registerServiceInternal(win, win, id, constructor);
  if (opt_instantiate) {
    getServiceInternal(win, id);
  }
}

/**
 * Returns a service and registers it given a class to be used as
 * implementation.
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id of the service.
 * @param {function(new:Object, !./service/ampdoc-impl.AmpDoc)} constructor
 * @param {boolean=} opt_instantiate Whether to immediately create the service
 */
function registerServiceBuilderForDoc(nodeOrDoc, id, constructor, opt_instantiate) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  registerServiceInternal(holder, ampdoc, id, constructor);
  if (opt_instantiate) {
    getServiceInternal(holder, id);
  }
}

/**
 * Returns a service for the given id and window (a per-window singleton). Users
 * should typically wrap this as a special purpose function (e.g.
 * `Services.vsyncFor(win)`) for type safety and because the factory should not
 * be passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @template T
 * @return {T}
 */
function getService(win, id) {
  win = getTopWindow(win);
  return getServiceInternal(win, id);
}

/**
 * Returns a promise for a service for the given id and window. Also expects an
 * element that has the actual implementation. The promise resolves when the
 * implementation loaded. Users should typically wrap this as a special purpose
 * function (e.g. `Services.vsyncFor(win)`) for type safety and because the
 * factory should not be passed around.
 * @param {!Window} win
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromise(win, id) {
  return getServicePromiseInternal(win, id);
}

/**
 * Returns a service or null with the given id.
 * @param {!Window} win
 * @param {string} id
 * @return {?Object} The service.
 */
function getExistingServiceOrNull(win, id) {
  win = getTopWindow(win);
  if (isServiceRegistered(win, id)) {
    return getServiceInternal(win, id);
  } else {
    return null;
  }
}

/**
 * Like getServicePromise but returns null if the service was never registered.
 * @param {!Window} win
 * @param {string} id
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNull(win, id) {
  return getServicePromiseOrNullInternal(win, id);
}

/**
 * Returns a service for the given id and ampdoc (a per-ampdoc singleton).
 * Expects service `id` to be registered.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id
 * @return {T}
 * @template T
 */
function getServiceForDoc(elementOrAmpDoc, id) {
  var ampdoc = getAmpdoc(elementOrAmpDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  return getServiceInternal(holder, id);
}

/**
 * tl;dr -- Use getServiceForDoc() instead of this.
 *
 * Privileged variant of getServiceForDoc() that accepts non-element params,
 * e.g. window.document. This is currently necessary for doc-level services
 * used in startup, e.g. Chunks. Eventually we want to remove this function
 * and have callers find the appropriate AmpDoc and use getServiceForDoc().
 *
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @param {string} id
 * @return {T}
 * @template T
 */
function getServiceForDocDeprecated(nodeOrDoc, id) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  var holder = getAmpdocServiceHolder(ampdoc);
  return getServiceInternal(holder, id);
}

/**
 * Returns a promise for a service for the given id and ampdoc. Also expects
 * a service that has the actual implementation. The promise resolves when
 * the implementation loaded.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id
 * @return {!Promise<!Object>}
 */
function getServicePromiseForDoc(elementOrAmpDoc, id) {
  return getServicePromiseInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
}

/**
 * Like getServicePromiseForDoc but returns null if the service was never
 * registered for this ampdoc.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {string} id
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNullForDoc(elementOrAmpDoc, id) {
  return getServicePromiseOrNullInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
}

/**
 * Set the parent and top windows on a child window (friendly iframe).
 * @param {!Window} win
 * @param {!Window} parentWin
 */
function setParentWindow(win, parentWin) {
  win.__AMP_PARENT = parentWin;
  win.__AMP_TOP = getTopWindow(parentWin);
}

/**
 * Returns the parent window for a child window (friendly iframe).
 * @param {!Window} win
 * @return {!Window}
 */
function getParentWindow(win) {
  return win.__AMP_PARENT || win;
}

/**
 * Returns the top window where AMP Runtime is installed for a child window
 * (friendly iframe).
 * @param {!Window} win
 * @return {!Window}
 */
function getTopWindow(win) {
  return win.__AMP_TOP || win;
}

/**
 * Returns the parent "friendly" iframe if the node belongs to a child window.
 * @param {!Node} node
 * @param {!Window} topWin
 * @return {?HTMLIFrameElement}
 */
function getParentWindowFrameElement(node, topWin) {
  var childWin = (node.ownerDocument || node).defaultView;
  if (childWin && childWin != topWin && getTopWindow(childWin) == topWin) {
    try {
      return (/** @type {?HTMLIFrameElement} */childWin.frameElement
      );
    } catch (e) {
      // Ignore the error.
    }
  }
  return null;
}

/**
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @return {!./service/ampdoc-impl.AmpDoc}
 */
function getAmpdoc(nodeOrDoc) {
  if (nodeOrDoc.nodeType) {
    var win = (0, _types.toWin)( /** @type {!Document} */(nodeOrDoc.ownerDocument || nodeOrDoc).defaultView);
    return getAmpdocService(win).getAmpDoc( /** @type {!Node} */nodeOrDoc);
  }
  return (/** @type {!./service/ampdoc-impl.AmpDoc} */nodeOrDoc
  );
}

/**
 * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
 * @return {!./service/ampdoc-impl.AmpDoc|!Window}
 */
function getAmpdocServiceHolder(nodeOrDoc) {
  var ampdoc = getAmpdoc(nodeOrDoc);
  return ampdoc.isSingleDoc() ? ampdoc.win : ampdoc;
}

/**
 * This is essentially a duplicate of `ampdoc.js`, but necessary to avoid
 * circular dependencies.
 * @param {!Window} win
 * @return {!./service/ampdoc-impl.AmpDocService}
 */
function getAmpdocService(win) {
  return (/** @type {!./service/ampdoc-impl.AmpDocService} */getService(win, 'ampdoc')
  );
}

/**
 * Get service `id` from `holder`. Assumes the service
 * has already been registered.
 * @param {!Object} holder Object holding the service instance.
 * @param {string} id of the service.
 * @return {Object}
 * @template T
 */
function getServiceInternal(holder, id) {
  (0, _log.dev)().assert(isServiceRegistered(holder, id), 'Expected service ' + id + ' to be registered');
  var services = getServices(holder);
  var s = services[id];
  if (!s.obj) {
    (0, _log.dev)().assert(s.ctor, 'Service ' + id + ' registered without ctor nor impl.');
    (0, _log.dev)().assert(s.context, 'Service ' + id + ' registered without context.');
    s.obj = new s.ctor(s.context);
    (0, _log.dev)().assert(s.obj, 'Service ' + id + ' constructed to null.');
    s.ctor = null;
    s.context = null;
    // The service may have been requested already, in which case we have a
    // pending promise we need to fulfill.
    if (s.resolve) {
      s.resolve(s.obj);
    }
  }
  return s.obj;
}

/**
 * @param {!Object} holder Object holding the service instance.
 * @param {!Window|!./service/ampdoc-impl.AmpDoc} context Win or AmpDoc.
 * @param {string} id of the service.
 * @param {?function(new:Object, !Window)|?function(new:Object, !./service/ampdoc-impl.AmpDoc)} ctor Constructor function to new the service. Called with context.
 */
function registerServiceInternal(holder, context, id, ctor) {
  var services = getServices(holder);
  var s = services[id];

  if (!s) {
    s = services[id] = {
      obj: null,
      promise: null,
      resolve: null,
      context: null,
      ctor: null
    };
  }

  if (s.ctor || s.obj) {
    // Service already registered.
    return;
  }

  s.ctor = ctor;
  s.context = context;

  // The service may have been requested already, in which case there is a
  // pending promise that needs to fulfilled.
  if (s.resolve) {
    // getServiceInternal will resolve the promise.
    getServiceInternal(holder, id);
  }
}

/**
 * @param {!Object} holder
 * @param {string} id of the service.
 * @return {!Promise<!Object>}
 */
function getServicePromiseInternal(holder, id) {
  var cached = getServicePromiseOrNullInternal(holder, id);
  if (cached) {
    return cached;
  }
  // Service is not registered.

  // TODO(@cramforce): Add a check that if the element is eventually registered
  // that the service is actually provided and this promise resolves.
  var deferred = new _promise.Deferred();
  var promise = deferred.promise,
      resolve = deferred.resolve;


  var services = getServices(holder);
  services[id] = {
    obj: null,
    promise: promise,
    resolve: resolve,
    context: null,
    ctor: null
  };
  return promise;
}

/**
 * Returns a promise for service `id` if the service has been registered
 * on `holder`.
 * @param {!Object} holder
 * @param {string} id of the service.
 * @return {?Promise<!Object>}
 */
function getServicePromiseOrNullInternal(holder, id) {
  var services = getServices(holder);
  var s = services[id];
  if (s) {
    if (s.promise) {
      return s.promise;
    } else {
      // Instantiate service if not already instantiated.
      getServiceInternal(holder, id);
      return s.promise = Promise.resolve( /** @type {!Object} */s.obj);
    }
  }
  return null;
}

/**
 * Returns the object that holds the services registered in a holder.
 * @param {!Object} holder
 * @return {!Object<string,!ServiceHolderDef>}
 */
function getServices(holder) {
  var services = holder.services;

  if (!services) {
    services = holder.services = {};
  }
  return services;
}

/**
 * Whether the specified service implements `Disposable` interface.
 * @param {!Object} service
 * @return {boolean}
 */
function isDisposable(service) {
  return typeof service.dispose == 'function';
}

/**
 * Asserts that the specified service implements `Disposable` interface and
 * typecasts the instance to `Disposable`.
 * @param {!Object} service
 * @return {!Disposable}
 */
function assertDisposable(service) {
  (0, _log.dev)().assert(isDisposable(service), 'required to implement Disposable');
  return (/** @type {!Disposable} */service
  );
}

/**
 * Disposes all disposable (implements `Disposable` interface) services in
 * ampdoc scope.
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 */
function disposeServicesForDoc(ampdoc) {
  disposeServicesInternal(ampdoc);
}

/**
 * Disposes all disposable (implements `Disposable` interface) services in
 * embed scope.
 * @param {!Window} embedWin
 */
function disposeServicesForEmbed(embedWin) {
  disposeServicesInternal(embedWin);
}

/**
 * @param {!Object} holder Object holding the service instances.
 */
function disposeServicesInternal(holder) {
  // TODO(dvoytenko): Consider marking holder as destroyed for later-arriving
  // service to be canceled automatically.
  var services = getServices(holder);

  var _loop = function _loop(id) {
    if (!Object.prototype.hasOwnProperty.call(services, id)) {
      return 'continue';
    }
    var serviceHolder = services[id];
    if (serviceHolder.obj) {
      disposeServiceInternal(id, serviceHolder.obj);
    } else if (serviceHolder.promise) {
      serviceHolder.promise.then(function (instance) {
        return disposeServiceInternal(id, instance);
      });
    }
  };

  for (var id in services) {
    var _ret = _loop(id);

    if (_ret === 'continue') continue;
  }
}

/**
 * @param {string} id
 * @param {!Object} service
 */
function disposeServiceInternal(id, service) {
  if (!isDisposable(service)) {
    return;
  }
  try {
    assertDisposable(service).dispose();
  } catch (e) {
    // Ensure that a failure to dispose a service does not disrupt other
    // services.
    (0, _log.dev)().error('SERVICE', 'failed to dispose service', id, e);
  }
}

/**
 * Whether the specified service implements `EmbeddableService` interface.
 * @param {!Object} service
 * @return {boolean}
 */
function isEmbeddable(service) {
  return typeof service.adoptEmbedWindow == 'function';
}

/**
 * Adopts an embeddable (implements `EmbeddableService` interface) service
 * in embed scope.
 * @param {!Window} embedWin
 * @param {string} serviceId
 */
function adoptServiceForEmbed(embedWin, serviceId) {
  var adopted = adoptServiceForEmbedIfEmbeddable(embedWin, serviceId);
  (0, _log.dev)().assert(adopted, 'Service ' + serviceId + ' not found on parent ' + 'or doesn\'t implement EmbeddableService.');
}

/**
 * Adopts an embeddable (implements `EmbeddableService` interface) service
 * in embed scope.
 * @param {!Window} embedWin
 * @param {string} serviceId
 * @return {boolean}
 */
function adoptServiceForEmbedIfEmbeddable(embedWin, serviceId) {
  var frameElement = /** @type {!Node} */(0, _log.dev)().assert(embedWin.frameElement, 'frameElement not found for embed');
  var ampdoc = getAmpdoc(frameElement);
  var holder = getAmpdocServiceHolder(ampdoc);
  if (!isServiceRegistered(holder, serviceId)) {
    return false;
  }
  var service = getServiceForDocDeprecated(frameElement, serviceId);
  if (!isEmbeddable(service)) {
    return false;
  }
  service.adoptEmbedWindow(embedWin);
  return true;
}

/**
 * Resets a single service, so it gets recreated on next getService invocation.
 * @param {!Object} holder
 * @param {string} id of the service.
 */
function resetServiceForTesting(holder, id) {
  if (holder.services) {
    holder.services[id] = null;
  }
}

/**
 * @param {!Object} holder Object holding the service instance.
 * @param {string} id of the service.
 * @return {boolean}
 */
function isServiceRegistered(holder, id) {
  var service = holder.services && holder.services[id];
  // All registered services must have an implementation or a constructor.
  return !!(service && (service.ctor || service.obj));
}

},{"./log":19,"./polyfills":25,"./types":40,"./utils/promise":48}],34:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Services = exports.SubscriptionService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _service = require('./service');

var _elementService = require('./element-service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @typedef {!../extensions/amp-subscriptions/0.1/amp-subscriptions.SubscriptionService} */
var SubscriptionService = exports.SubscriptionService = void 0;

var Services = exports.Services = function () {
  function Services() {
    _classCallCheck(this, Services);
  }

  _createClass(Services, null, [{
    key: 'accessServiceForDoc',

    /**
     * Hint: Add extensions folder path to compile.js with
     * warnings cannot find modules.
     */

    /**
     * Returns a promise for the Access service.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!../extensions/amp-access/0.1/amp-access.AccessService>}
     */
    value: function accessServiceForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!../extensions/amp-access/0.1/amp-access.AccessService>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'access', 'amp-access')
      );
    }

    /**
     * Returns a promise for the Access service or a promise for null if the
     * service is not available on the current page.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-access/0.1/amp-access.AccessService>}
     */

  }, {
    key: 'accessServiceForDocOrNull',
    value: function accessServiceForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-access/0.1/amp-access.AccessService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'access', 'amp-access')
      );
    }

    /**
     * Returns a promise for the Subscriptions service.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!SubscriptionService>}
     */

  }, {
    key: 'subscriptionsServiceForDoc',
    value: function subscriptionsServiceForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!SubscriptionService>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'subscriptions', 'amp-subscriptions')
      );
    }

    /**
     * Returns a promise for the Subscriptions service.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?SubscriptionService>}
     */

  }, {
    key: 'subscriptionsServiceForDocOrNull',
    value: function subscriptionsServiceForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?SubscriptionService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'subscriptions', 'amp-subscriptions')
      );
    }

    /**
     * Unlike most service getters, passing `Node` is necessary for some FIE-scope
     * services since sometimes we only have the FIE Document for context.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/action-impl.ActionService}
     */

  }, {
    key: 'actionServiceForDoc',
    value: function actionServiceForDoc(nodeOrDoc) {
      return (/** @type {!./service/action-impl.ActionService} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'action', /* opt_fallbackToTopWin */true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!Activity>}
     */

  }, {
    key: 'activityForDoc',
    value: function activityForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!Activity>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'activity', 'amp-analytics')
      );
    }

    /**
     * Returns the global instance of the `AmpDocService` service that can be
     * used to resolve an ampdoc for any node: either in the single-doc or
     * shadow-doc environment.
     * @param {!Window} window
     * @return {!./service/ampdoc-impl.AmpDocService}
     */

  }, {
    key: 'ampdocServiceFor',
    value: function ampdocServiceFor(window) {
      return (/** @type {!./service/ampdoc-impl.AmpDocService} */(0, _service.getService)(window, 'ampdoc')
      );
    }

    /**
     * Returns the AmpDoc for the specified context node.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/ampdoc-impl.AmpDoc}
     */

  }, {
    key: 'ampdoc',
    value: function ampdoc(elementOrAmpDoc) {
      return (0, _service.getAmpdoc)(elementOrAmpDoc);
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @param {boolean=} loadAnalytics
     * @return {!Promise<!../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>}
     */

  }, {
    key: 'analyticsForDoc',
    value: function analyticsForDoc(elementOrAmpDoc) {
      var loadAnalytics = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (loadAnalytics) {
        // Get Extensions service and force load analytics extension.
        var ampdoc = (0, _service.getAmpdoc)(elementOrAmpDoc);
        Services.extensionsFor(ampdoc.win). /*OK*/installExtensionForDoc(ampdoc, 'amp-analytics');
      }
      return (/** @type {!Promise<!../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>} */(0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation', 'amp-analytics')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>}
     */

  }, {
    key: 'analyticsForDocOrNull',
    value: function analyticsForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-analytics/0.1/instrumentation.InstrumentationService>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation', 'amp-analytics')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/batched-xhr-impl.BatchedXhr}
     */

  }, {
    key: 'batchedXhrFor',
    value: function batchedXhrFor(window) {
      return (/** @type {!./service/batched-xhr-impl.BatchedXhr} */(0, _service.getService)(window, 'batched-xhr')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-bind/0.1/bind-impl.Bind>}
     */

  }, {
    key: 'bindForDocOrNull',
    value: function bindForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-bind/0.1/bind-impl.Bind>} */(0, _elementService.getElementServiceIfAvailableForDocInEmbedScope)(elementOrAmpDoc, 'bind', 'amp-bind')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!./service/cid-impl.Cid>}
     */

  }, {
    key: 'cidForDoc',
    value: function cidForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!./service/cid-impl.Cid>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'cid')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/navigation.Navigation}
     */

  }, {
    key: 'navigationForDoc',
    value: function navigationForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/navigation.Navigation} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'navigation')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/crypto-impl.Crypto}
     */

  }, {
    key: 'cryptoFor',
    value: function cryptoFor(window) {
      return (/** @type {!./service/crypto-impl.Crypto} */(0, _service.getService)(window, 'crypto')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/document-info-impl.DocumentInfoDef} Info about the doc
     */

  }, {
    key: 'documentInfoForDoc',
    value: function documentInfoForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/document-info-impl.DocInfo} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'documentInfo').get()
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/document-state.DocumentState}
     */

  }, {
    key: 'documentStateFor',
    value: function documentStateFor(window) {
      return (0, _service.getService)(window, 'documentState');
    }

    /**
     * @param {!Window} window
     * @return {!./service/extensions-impl.Extensions}
     */

  }, {
    key: 'extensionsFor',
    value: function extensionsFor(window) {
      return (/** @type {!./service/extensions-impl.Extensions} */(0, _service.getService)(window, 'extensions')
      );
    }

    /**
     * Returns service implemented in service/history-impl.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/history-impl.History}
     */

  }, {
    key: 'historyForDoc',
    value: function historyForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/history-impl.History} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'history')
      );
    }

    /**
     * @param {!Window} win
     * @return {!./input.Input}
     */

  }, {
    key: 'inputFor',
    value: function inputFor(win) {
      return (0, _service.getService)(win, 'input');
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/layers-impl.LayoutLayers}
     */

  }, {
    key: 'layersForDoc',
    value: function layersForDoc(elementOrAmpDoc) {
      return (/** @type {!./service/layers-impl.LayoutLayers} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'layers')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/performance-impl.Performance}
     */

  }, {
    key: 'performanceFor',
    value: function performanceFor(window) {
      return (/** @type {!./service/performance-impl.Performance}*/(0, _service.getService)(window, 'performance')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/performance-impl.Performance}
     */

  }, {
    key: 'performanceForOrNull',
    value: function performanceForOrNull(window) {
      return (/** @type {!./service/performance-impl.Performance}*/(0, _service.getExistingServiceOrNull)(window, 'performance')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/platform-impl.Platform}
     */

  }, {
    key: 'platformFor',
    value: function platformFor(window) {
      return (/** @type {!./service/platform-impl.Platform} */(0, _service.getService)(window, 'platform')
      );
    }

    /**
     * Uses getServiceForDocDeprecated() since Resources is a startup service.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/resources-impl.Resources}
     */

  }, {
    key: 'resourcesForDoc',
    value: function resourcesForDoc(nodeOrDoc) {
      return (/** @type {!./service/resources-impl.Resources} */(0, _service.getServiceForDocDeprecated)(nodeOrDoc, 'resources')
      );
    }

    /**
     * @param {!Window} win
     * @return {?Promise<?{incomingFragment: string, outgoingFragment: string}>}
     */

  }, {
    key: 'shareTrackingForOrNull',
    value: function shareTrackingForOrNull(win) {
      return (/** @type {!Promise<?{incomingFragment: string, outgoingFragment: string}>} */(0, _elementService.getElementServiceIfAvailable)(win, 'share-tracking', 'amp-share-tracking', true)
      );
    }

    /**
     * @param {!Window} win
     * @return {?Promise<?../extensions/amp-story/1.0/variable-service.StoryVariableDef>}
     */

  }, {
    key: 'storyVariableServiceForOrNull',
    value: function storyVariableServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/1.0/variable-service.StoryVariableDef>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'story-variable', 'amp-story', true)
      );
    }

    /**
     * Version of the story store service depends on which version of amp-story
     * the publisher is loading. They all have the same implementation.
     * @param {!Window} win
     * @return {?Promise<?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService|?../extensions/amp-story/0.1/amp-story-store-service.AmpStoryStoreService>}
     */

  }, {
    key: 'storyStoreServiceForOrNull',
    value: function storyStoreServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService|?../extensions/amp-story/0.1/amp-story-store-service.AmpStoryStoreService>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'story-store', 'amp-story')
      );
    }

    /**
     * @param {!Window} win
     * @return {?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService}
     */

  }, {
    key: 'storyStoreService',
    value: function storyStoreService(win) {
      return (/** @type {?../extensions/amp-story/1.0/amp-story-store-service.AmpStoryStoreService} */
        (0, _service.getExistingServiceOrNull)(win, 'story-store')
      );
    }

    /**
     * @param {!Window} win
     * @return {?../extensions/amp-story/1.0/amp-story-request-service.AmpStoryRequestService}
     */

  }, {
    key: 'storyRequestService',
    value: function storyRequestService(win) {
      return (/** @type {?../extensions/amp-story/1.0/amp-story-request-service.AmpStoryRequestService} */
        (0, _service.getExistingServiceOrNull)(win, 'story-request')
      );
    }

    /**
     * @param {!Window} win
     * @return {!Promise<?../extensions/amp-story/1.0/localization.LocalizationService>}
     */

  }, {
    key: 'localizationServiceForOrNull',
    value: function localizationServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/1.0/localization.LocalizationService>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'localization', 'amp-story', true)
      );
    }

    /**
     * @param {!Window} win
     * @return {!../extensions/amp-story/1.0/localization.LocalizationService}
     */

  }, {
    key: 'localizationService',
    value: function localizationService(win) {
      return (0, _service.getService)(win, 'localization');
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!../extensions/amp-story/0.1/amp-story-store-service.AmpStoryStoreService}
     */

  }, {
    key: 'storyStoreServiceV01',
    value: function storyStoreServiceV01(win) {
      return (0, _service.getService)(win, 'story-store');
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!../extensions/amp-story/0.1/amp-story-request-service.AmpStoryRequestService}
     */

  }, {
    key: 'storyRequestServiceV01',
    value: function storyRequestServiceV01(win) {
      return (0, _service.getService)(win, 'story-request-v01');
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!Promise<?../extensions/amp-story/0.1/localization.LocalizationService>}
     */

  }, {
    key: 'localizationServiceForOrNullV01',
    value: function localizationServiceForOrNullV01(win) {
      return (
        /** @type {!Promise<?../extensions/amp-story/0.1/localization.LocalizationService>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'localization-v01', 'amp-story', true)
      );
    }

    /**
     * TODO(#14357): Remove this when amp-story:0.1 is deprecated.
     * @param {!Window} win
     * @return {!../extensions/amp-story/0.1/localization.LocalizationService}
     */

  }, {
    key: 'localizationServiceV01',
    value: function localizationServiceV01(win) {
      return (0, _service.getService)(win, 'localization-v01');
    }

    /**
     * @param {!Window} win
     * @return {?Promise<?../extensions/amp-viewer-integration/0.1/variable-service.ViewerIntegrationVariableDef>}
     */

  }, {
    key: 'viewerIntegrationVariableServiceForOrNull',
    value: function viewerIntegrationVariableServiceForOrNull(win) {
      return (
        /** @type {!Promise<?../extensions/amp-viewer-integration/0.1/variable-service.ViewerIntegrationVariableDef>} */
        (0, _elementService.getElementServiceIfAvailable)(win, 'viewer-integration-variable', 'amp-viewer-integration', true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!../extensions/amp-animation/0.1/web-animation-service.WebAnimationService>}
     */

  }, {
    key: 'webAnimationServiceFor',
    value: function webAnimationServiceFor(elementOrAmpDoc) {
      return (/** @type {!Promise<!../extensions/amp-animation/0.1/web-animation-service.WebAnimationService>} */
        (0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'web-animation', 'amp-animation')
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!./service/storage-impl.Storage>}
     */

  }, {
    key: 'storageForDoc',
    value: function storageForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!./service/storage-impl.Storage>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'storage')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/template-impl.Templates}
     */

  }, {
    key: 'templatesFor',
    value: function templatesFor(window) {
      return (/** @type {!./service/template-impl.Templates} */(0, _service.getService)(window, 'templates')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/timer-impl.Timer}
     */

  }, {
    key: 'timerFor',
    value: function timerFor(window) {
      return (/** @type {!./service/timer-impl.Timer} */(0, _service.getService)(window, 'timer')
      );
    }

    /**
     * Unlike most service getters, passing `Node` is necessary for some FIE-scope
     * services since sometimes we only have the FIE Document for context.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/url-replacements-impl.UrlReplacements}
     */

  }, {
    key: 'urlReplacementsForDoc',
    value: function urlReplacementsForDoc(nodeOrDoc) {
      return (/** @type {!./service/url-replacements-impl.UrlReplacements} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'url-replace', /* opt_fallbackToTopWin */true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!../extensions/amp-user-notification/0.1/amp-user-notification.UserNotificationManager>}
     */

  }, {
    key: 'userNotificationManagerForDoc',
    value: function userNotificationManagerForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!../extensions/amp-user-notification/0.1/amp-user-notification.UserNotificationManager>} */
        (0, _elementService.getElementServiceForDoc)(elementOrAmpDoc, 'userNotificationManager', 'amp-user-notification')
      );
    }

    /**
     * Returns a promise for the consentPolicy Service or a promise for null if
     * the service is not available on the current page.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-consent/0.1/consent-policy-manager.ConsentPolicyManager>}
     */

  }, {
    key: 'consentPolicyServiceForDocOrNull',
    value: function consentPolicyServiceForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-consent/0.1/consent-policy-manager.ConsentPolicyManager>} */
        (0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'consentPolicyManager', 'amp-consent')
      );
    }

    /**
     * Returns a promise for the geo service or a promise for null if
     * the service is not available on the current page.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<?../extensions/amp-geo/0.1/amp-geo.GeoDef>}
     */

  }, {
    key: 'geoForDocOrNull',
    value: function geoForDocOrNull(elementOrAmpDoc) {
      return (/** @type {!Promise<?../extensions/amp-geo/0.1/amp-geo.GeoDef>} */(0, _elementService.getElementServiceIfAvailableForDoc)(elementOrAmpDoc, 'geo', 'amp-geo', true)
      );
    }

    /**
     * Unlike most service getters, passing `Node` is necessary for some FIE-scope
     * services since sometimes we only have the FIE Document for context.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/url-impl.Url}
     */

  }, {
    key: 'urlForDoc',
    value: function urlForDoc(nodeOrDoc) {
      return (/** @type {!./service/url-impl.Url} */(0, _service.getExistingServiceForDocInEmbedScope)(nodeOrDoc, 'url', /* opt_fallbackToTopWin */true)
      );
    }

    /**
     * Returns a promise for the experiment variants or a promise for null if it
     * is not available on the current page.
     * @param {!Window} win
     * @return {!Promise<?Object<string>>}
     */

  }, {
    key: 'variantForOrNull',
    value: function variantForOrNull(win) {
      return (/** @type {!Promise<?Object<string>>} */(0, _elementService.getElementServiceIfAvailable)(win, 'variant', 'amp-experiment', true)
      );
    }

    /**
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!./service/video-service-interface.VideoServiceInterface}
     */

  }, {
    key: 'videoManagerForDoc',
    value: function videoManagerForDoc(elementOrAmpDoc) {
      return (
        /** @type {!./service/video-service-interface.VideoServiceInterface} */(0, _service.getServiceForDoc)(elementOrAmpDoc, 'video-manager')
      );
    }

    /**
     * Uses getServiceForDocDeprecated() since Viewer is a startup service.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/viewer-impl.Viewer}
     */

  }, {
    key: 'viewerForDoc',
    value: function viewerForDoc(nodeOrDoc) {
      return (/** @type {!./service/viewer-impl.Viewer} */(0, _service.getServiceForDocDeprecated)(nodeOrDoc, 'viewer')
      );
    }

    /**
     * Returns promise for the viewer. This is an unusual case and necessary only
     * for services that need reference to the viewer before it has been
     * initialized. Most of the code, however, just should use `viewerForDoc`.
     * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
     * @return {!Promise<!./service/viewer-impl.Viewer>}
     */

  }, {
    key: 'viewerPromiseForDoc',
    value: function viewerPromiseForDoc(elementOrAmpDoc) {
      return (/** @type {!Promise<!./service/viewer-impl.Viewer>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'viewer')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/vsync-impl.Vsync}
     */

  }, {
    key: 'vsyncFor',
    value: function vsyncFor(window) {
      return (/** @type {!./service/vsync-impl.Vsync} */(0, _service.getService)(window, 'vsync')
      );
    }

    /**
     * Uses getServiceForDocDeprecated() since Viewport is a startup service.
     * @param {!Node|!./service/ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!./service/viewport/viewport-impl.Viewport}
     */

  }, {
    key: 'viewportForDoc',
    value: function viewportForDoc(nodeOrDoc) {
      return (/** @type {!./service/viewport/viewport-impl.Viewport} */(0, _service.getServiceForDocDeprecated)(nodeOrDoc, 'viewport')
      );
    }

    /**
     * @param {!Window} window
     * @return {!./service/xhr-impl.Xhr}
     */

  }, {
    key: 'xhrFor',
    value: function xhrFor(window) {
      return (/** @type {!./service/xhr-impl.Xhr} */(0, _service.getService)(window, 'xhr')
      );
    }
  }]);

  return Services;
}();

},{"./element-service":11,"./service":33}],35:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlFor = htmlFor;
exports.htmlRefs = htmlRefs;

var _log = require('./log');

var _object = require('./utils/object.js');

/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var container = void 0;

/**
 * Creates the html helper for the doc.
 *
 * @param {!Element|!Document} nodeOrDoc
 * @return {function(!Array<string>):!Element}
 */
function htmlFor(nodeOrDoc) {
  var doc = nodeOrDoc.ownerDocument || nodeOrDoc;
  if (!container || container.ownerDocument !== doc) {
    container = doc.createElement('div');
  }

  return html;
}

/**
 * A tagged template literal helper to generate static DOM trees.
 * This must be used as a tagged template, ie
 *
 * ```
 * const div = html`<div><span></span></div>`;
 * ```
 *
 * Only the root element and its subtree will be returned. DO NOT use this to
 * render subtree's with dynamic content, it WILL result in an error!
 *
 * @param {!Array<string>} strings
 * @return {!Element}
 */
function html(strings) {
  (0, _log.dev)().assert(strings.length === 1, 'Improper html template tag usage.');
  container. /*OK*/innerHTML = strings[0];

  var el = container.firstElementChild;
  (0, _log.dev)().assert(el, 'No elements in template');
  (0, _log.dev)().assert(!el.nextElementSibling, 'Too many root elements in template');

  // Clear to free memory.
  container. /*OK*/innerHTML = '';

  return el;
}

/**
 * Queries an element for all elements with a "ref" attribute, removing
 * the attribute afterwards.
 * Returns a named map of all ref elements.
 *
 * @param {!Element} root
 * @return {!Object<string, !Element>}
 */
function htmlRefs(root) {
  var elements = root.querySelectorAll('[ref]');
  var refs = (0, _object.map)();

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var ref = (0, _log.dev)().assert(element.getAttribute('ref'), 'Empty ref attr');
    element.removeAttribute('ref');
    (0, _log.dev)().assert(refs[ref] === undefined, 'Duplicate ref');
    refs[ref] = element;
  }

  return refs;
}

},{"./log":19,"./utils/object.js":47}],36:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dashToCamelCase = dashToCamelCase;
exports.camelCaseToDash = camelCaseToDash;
exports.dashToUnderline = dashToUnderline;
exports.endsWith = endsWith;
exports.startsWith = startsWith;
exports.expandTemplate = expandTemplate;
exports.stringHash32 = stringHash32;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @param {string} _match
 * @param {string} character
 * @return {string}
 */
function toUpperCase(_match, character) {
  return character.toUpperCase();
}

/**
 * @param {string} match
 * @return {string}
 */
function prependDashAndToLowerCase(match) {
  return '-' + match.toLowerCase();
}

/**
 * @param {string} name Attribute name containing dashes.
 * @return {string} Dashes removed and successive character sent to upper case.
 * visibleForTesting
 */
function dashToCamelCase(name) {
  return name.replace(/-([a-z])/g, toUpperCase);
}

/**
 * Converts a string that is in camelCase to one that is in dash-case.
 *
 * @param {string} string The string to convert.
 * @return {string} The string in dash-case.
 */
function camelCaseToDash(string) {
  return string.replace(/(?!^)[A-Z]/g, prependDashAndToLowerCase);
}

/**
 * @param {string} name Attribute name with dashes
 * @return {string} Dashes replaced by underlines.
 */
function dashToUnderline(name) {
  return name.replace('-', '_');
}

/**
 * Polyfill for String.prototype.endsWith.
 * @param {string} string
 * @param {string} suffix
 * @return {boolean}
 */
function endsWith(string, suffix) {
  var index = string.length - suffix.length;
  return index >= 0 && string.indexOf(suffix, index) == index;
}

/**
 * Polyfill for String.prototype.startsWith.
 * @param {string} string
 * @param {string} prefix
 * @return {boolean}
 */
function startsWith(string, prefix) {
  if (prefix.length > string.length) {
    return false;
  }
  return string.lastIndexOf(prefix, 0) == 0;
}

/**
 * Expands placeholders in a given template string with values.
 *
 * Placeholders use ${key-name} syntax and are replaced with the value
 * returned from the given getter function.
 *
 * @param {string} template The template string to expand.
 * @param {function(string):*} getter Function used to retrieve a value for a
 *   placeholder. Returns values will be coerced into strings.
 * @param {number=} opt_maxIterations Number of times to expand the template.
 *   Defaults to 1, but should be set to a larger value your placeholder tokens
 *   can be expanded to other placeholder tokens. Take caution with large values
 *   as recursively expanding a string can be exponentially expensive.
 */
function expandTemplate(template, getter, opt_maxIterations) {
  var maxIterations = opt_maxIterations || 1;

  var _loop = function _loop(i) {
    var matches = 0;
    template = template.replace(/\${([^}]*)}/g, function (_a, b) {
      matches++;
      return getter(b);
    });
    if (!matches) {
      return 'break';
    }
  };

  for (var i = 0; i < maxIterations; i++) {
    var _ret = _loop(i);

    if (_ret === 'break') break;
  }
  return template;
}

/**
 * Hash function djb2a
 * This is intended to be a simple, fast hashing function using minimal code.
 * It does *not* have good cryptographic properties.
 * @param {string} str
 * @return {string} 32-bit unsigned hash of the string
 */
function stringHash32(str) {
  var length = str.length;

  var hash = 5381;
  for (var i = 0; i < length; i++) {
    hash = hash * 33 ^ str.charCodeAt(i);
  }
  // Convert from 32-bit signed to unsigned.
  return String(hash >>> 0);
}

},{}],37:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelCaseToTitleCase = camelCaseToTitleCase;
exports.getVendorJsPropertyName = getVendorJsPropertyName;
exports.setImportantStyles = setImportantStyles;
exports.setStyle = setStyle;
exports.getStyle = getStyle;
exports.setStyles = setStyles;
exports.toggle = toggle;
exports.px = px;
exports.deg = deg;
exports.translateX = translateX;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.removeAlphaFromColor = removeAlphaFromColor;
exports.computedStyle = computedStyle;
exports.resetStyles = resetStyles;

var _object = require('./utils/object.js');

var _string = require('./string');

/** @type {Object<string, string>} */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: loaded by 3p system. Cannot rely on babel polyfills.
var propertyNameCache = void 0;

/** @const {!Array<string>} */
var vendorPrefixes = ['Webkit', 'webkit', 'Moz', 'moz', 'ms', 'O', 'o'];

/**
 * @export
 * @param {string} camelCase camel cased string
 * @return {string} title cased string
 */
function camelCaseToTitleCase(camelCase) {
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

/**
 * Checks the style if a prefixed version of a property exists and returns
 * it or returns an empty string.
 * @private
 * @param {!Object} style
 * @param {string} titleCase the title case version of a css property name
 * @return {string} the prefixed property name or null.
 */
function getVendorJsPropertyName_(style, titleCase) {
  for (var i = 0; i < vendorPrefixes.length; i++) {
    var propertyName = vendorPrefixes[i] + titleCase;
    if (style[propertyName] !== undefined) {
      return propertyName;
    }
  }
  return '';
}

/**
 * Returns the possibly prefixed JavaScript property name of a style property
 * (ex. WebkitTransitionDuration) given a camelCase'd version of the property
 * (ex. transitionDuration).
 * @export
 * @param {!Object} style
 * @param {string} camelCase the camel cased version of a css property name
 * @param {boolean=} opt_bypassCache bypass the memoized cache of property
 *   mapping
 * @return {string}
 */
function getVendorJsPropertyName(style, camelCase, opt_bypassCache) {
  if ((0, _string.startsWith)(camelCase, '--')) {
    // CSS vars are returned as is.
    return camelCase;
  }
  if (!propertyNameCache) {
    propertyNameCache = (0, _object.map)();
  }
  var propertyName = propertyNameCache[camelCase];
  if (!propertyName || opt_bypassCache) {
    propertyName = camelCase;
    if (style[camelCase] === undefined) {
      var titleCase = camelCaseToTitleCase(camelCase);
      var prefixedPropertyName = getVendorJsPropertyName_(style, titleCase);

      if (style[prefixedPropertyName] !== undefined) {
        propertyName = prefixedPropertyName;
      }
    }
    if (!opt_bypassCache) {
      propertyNameCache[camelCase] = propertyName;
    }
  }
  return propertyName;
}

/**
 * Sets the CSS styles of the specified element with !important. The styles
 * are specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */
function setImportantStyles(element, styles) {
  for (var k in styles) {
    element.style.setProperty(getVendorJsPropertyName(styles, k), styles[k].toString(), 'important');
  }
}

/**
 * Sets the CSS style of the specified element with optional units, e.g. "px".
 * @param {?Element} element
 * @param {string} property
 * @param {*} value
 * @param {string=} opt_units
 * @param {boolean=} opt_bypassCache
 */
function setStyle(element, property, value, opt_units, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (propertyName) {
    element.style[propertyName] =
    /** @type {string} */opt_units ? value + opt_units : value;
  }
}

/**
 * Returns the value of the CSS style of the specified element.
 * @param {!Element} element
 * @param {string} property
 * @param {boolean=} opt_bypassCache
 * @return {*}
 */
function getStyle(element, property, opt_bypassCache) {
  var propertyName = getVendorJsPropertyName(element.style, property, opt_bypassCache);
  if (!propertyName) {
    return undefined;
  }
  return element.style[propertyName];
}

/**
 * Sets the CSS styles of the specified element. The styles
 * a specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, *>} styles
 */
function setStyles(element, styles) {
  for (var k in styles) {
    setStyle(element, k, styles[k]);
  }
}

/**
 * Shows or hides the specified element.
 * @param {!Element} element
 * @param {boolean=} opt_display
 */
function toggle(element, opt_display) {
  if (opt_display === undefined) {
    opt_display = getStyle(element, 'display') == 'none';
  }
  setStyle(element, 'display', opt_display ? '' : 'none');
}

/**
 * Returns a pixel value.
 * @param {number} value
 * @return {string}
 */
function px(value) {
  return value + 'px';
}

/**
 * Returns a degree value.
 * @param {number} value
 * @return {string}
 */
function deg(value) {
  return value + 'deg';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function translateX(value) {
  if (typeof value == 'string') {
    return 'translateX(' + value + ')';
  }
  return 'translateX(' + px(value) + ')';
}

/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} x
 * @param {(number|string)=} opt_y
 * @return {string}
 */
function translate(x, opt_y) {
  if (typeof x == 'number') {
    x = px(x);
  }
  if (opt_y === undefined) {
    return 'translate(' + x + ')';
  }
  if (typeof opt_y == 'number') {
    opt_y = px(opt_y);
  }
  return 'translate(' + x + ', ' + opt_y + ')';
}

/**
 * Returns a "scale" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function scale(value) {
  return 'scale(' + value + ')';
}

/**
 * Returns a "rotate" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
function rotate(value) {
  if (typeof value == 'number') {
    value = deg(value);
  }
  return 'rotate(' + value + ')';
}

/**
 * Remove alpha value from a rgba color value.
 * Return the new color property with alpha equals if has the alpha value.
 * Caller needs to make sure the input color value is a valid rgba/rgb value
 * @param {string} rgbaColor
 * @return {string}
 */
function removeAlphaFromColor(rgbaColor) {
  return rgbaColor.replace(/\(([^,]+),([^,]+),([^,)]+),[^)]+\)/g, '($1,$2,$3, 1)');
}

/**
 * Gets the computed style of the element. The helper is necessary to enforce
 * the possible `null` value returned by a buggy Firefox.
 *
 * @param {!Window} win
 * @param {!Element} el
 * @return {!Object<string, string>}
 */
function computedStyle(win, el) {
  var style = /** @type {?CSSStyleDeclaration} */win.getComputedStyle(el);
  return (/** @type {!Object<string, string>} */style || (0, _object.map)()
  );
}

/**
 * Resets styles that were set dynamically (i.e. inline)
 * @param {!Element} element
 * @param {!Array<string>} properties
 */
function resetStyles(element, properties) {
  var styleObj = {};
  properties.forEach(function (prop) {
    styleObj[prop] = null;
  });
  setStyles(element, styleObj);
}

},{"./string":36,"./utils/object.js":47}],38:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Absolute time in milliseconds.
 * @typedef {number}
 */
var timeDef = exports.timeDef = void 0;

/**
 * Number between 0 and 1 that designates normalized time, as in "from start to
 * end".
 * @typedef {number}
 */
var normtimeDef = exports.normtimeDef = void 0;

},{}],39:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOOP = undefined;
exports.all = all;
exports.concat = concat;
exports.withCurve = withCurve;
exports.setStyles = setStyles;
exports.numeric = numeric;
exports.spring = spring;
exports.px = px;
exports.translateX = translateX;
exports.translateY = translateY;
exports.translate = translate;
exports.scale = scale;

var _style = require('./style');

var st = _interopRequireWildcard(_style);

var _curve = require('./curve');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP = exports.NOOP = function NOOP(unusedTime) {
  return null;
};

/**
 * Returns a transition that combines a number of other transitions and
 * invokes them all in parallel.
 * @param {!Array<!TransitionDef>} transitions
 * @return {!TransitionDef<void>}
 */
function all(transitions) {
  return function (time, complete) {
    for (var i = 0; i < transitions.length; i++) {
      var tr = transitions[i];
      tr(time, complete);
    }
  };
}

/**
 * Returns a transition that combines the string result of other string-based
 * transitions such as transform and scale using the given opt_delimiter.
 * @param {!Array<!TransitionDef<string>>} transitions
 * @param {string=} opt_delimiter Defaults to a single whitespace.
 * @return {!TransitionDef<string>}
 */
function concat(transitions) {
  var opt_delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

  return function (time, complete) {
    var results = [];
    for (var i = 0; i < transitions.length; i++) {
      var tr = transitions[i];
      var result = tr(time, complete);
      if (typeof result == 'string') {
        results.push(result);
      }
    }
    return results.join(opt_delimiter);
  };
}

/**
 * Returns the specified transition with the time curved via specified curve
 * function.
 * @param {!TransitionDef<RESULT>} transition
 * @param {!./curve.CurveDef|string} curve
 * @return {!TransitionDef<RESULT>}
 * @template RESULT
 */
function withCurve(transition, curve) {
  /** @const {?./curve.CurveDef} */
  var curveFn = (0, _curve.getCurve)(curve);
  return function (time, complete) {
    return transition(complete ? 1 : curveFn(time), complete);
  };
}

/**
 * A transition that sets the CSS style of the specified element. The styles
 * a specified as a map from CSS property names to transition functions for
 * each of these properties.
 * @param {!Element} element
 * @param {!Object<string, !TransitionDef>} styles
 * @return {!TransitionDef<void>}
 */
function setStyles(element, styles) {
  return function (time, complete) {
    for (var k in styles) {
      st.setStyle(element, k, styles[k](time, complete));
    }
  };
}

/**
 * A basic numeric interpolation.
 * @param {number} start
 * @param {number} end
 * @return {!TransitionDef<number>}
 */
function numeric(start, end) {
  return function (time) {
    return start + (end - start) * time;
  };
}

/**
 * Spring numeric interpolation.
 * @param {number} start
 * @param {number} end
 * @param {number} extended
 * @param {number} threshold
 * @return {!TransitionDef<number>}
 */
function spring(start, end, extended, threshold) {
  if (end == extended) {
    return function (time) {
      return numeric(start, end)(time);
    };
  }
  return function (time) {
    if (time < threshold) {
      return start + (extended - start) * (time / threshold);
    }
    return extended + (end - extended) * ((time - threshold) / (1 - threshold));
  };
}

/**
 * Adds "px" units.
 * @param {!TransitionDef<number>} transition
 * @return {!TransitionDef<string>}
 */
function px(transition) {
  return function (time) {
    return transition(time) + 'px';
  };
}

/**
 * A transition for "translateX" of CSS "transform" property.
 * @param {!TransitionDef<number|string>} transition
 * @return {!TransitionDef<string>}
 */
function translateX(transition) {
  return function (time) {
    var res = transition(time);
    if (typeof res == 'string') {
      return 'translateX(' + res + ')';
    }
    return 'translateX(' + res + 'px)';
  };
}

/**
 * A transition for "translateY" of CSS "transform" property.
 * @param {!TransitionDef<number|string>} transition
 * @return {!TransitionDef<string>}
 */
function translateY(transition) {
  return function (time) {
    var res = transition(time);
    if (typeof res == 'string') {
      return 'translateY(' + res + ')';
    }
    return 'translateY(' + res + 'px)';
  };
}

/**
 * A transition for "translate(x, y)" of CSS "transform" property.
 * @param {!TransitionDef<number|string>} transitionX
 * @param {!TransitionDef<number|string>|undefined} opt_transitionY
 * @return {!TransitionDef<string>}
 */
function translate(transitionX, opt_transitionY) {
  return function (time) {
    var x = transitionX(time);
    if (typeof x == 'number') {
      x = st.px(x);
    }
    if (!opt_transitionY) {
      return 'translate(' + x + ')';
    }

    var y = opt_transitionY(time);
    if (typeof y == 'number') {
      y = st.px(y);
    }
    return 'translate(' + x + ',' + y + ')';
  };
}

/**
 * A transition for "scale" of CSS "transform" property.
 * @param {!TransitionDef<number|string>} transition
 * @return {!TransitionDef<string>}
 */
function scale(transition) {
  return function (time) {
    return 'scale(' + transition(time) + ')';
  };
}

},{"./curve":9,"./style":37}],40:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.toArray = toArray;
exports.isObject = isObject;
exports.isFiniteNumber = isFiniteNumber;
exports.isEnumValue = isEnumValue;
exports.toWin = toWin;
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @const */
var toString_ = Object.prototype.toString;

/**
 * Returns the ECMA [[Class]] of a value
 * @param {*} value
 * @return {string}
 */
function toString(value) {
  return toString_.call(value);
}

/**
 * Determines if value is actually an Array.
 * @param {*} value
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

/**
 * Converts an array-like object to an array.
 * @param {?IArrayLike<T>|string} arrayLike
 * @return {!Array<T>}
 * @template T
 */
function toArray(arrayLike) {
  if (!arrayLike) {
    return [];
  }
  var array = new Array(arrayLike.length);
  for (var i = 0; i < arrayLike.length; i++) {
    array[i] = arrayLike[i];
  }
  return array;
}

/**
 * Determines if value is actually an Object.
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return toString(value) === '[object Object]';
}

/**
 * Determines if value is of number type and finite.
 * NaN and Infinity are not considered a finite number.
 * String numbers are not considered numbers.
 * @param {*} value
 * @return {boolean}
 */
function isFiniteNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Checks whether `s` is a valid value of `enumObj`.
 *
 * @param {!Object<T>} enumObj
 * @param {T} s
 * @return {boolean}
 * @template T
 */
function isEnumValue(enumObj, s) {
  for (var k in enumObj) {
    if (enumObj[k] === s) {
      return true;
    }
  }
  return false;
}

/**
 * Externs declare that access `defaultView` from `document` or
 * `ownerDocument` is of type `(Window|null)` but most of our parameter types
 * assume that it is never null. This is OK in practice as we ever only get
 * null on disconnected documents or old IE.
 * This helper function casts it into just a simple Window return type.
 *
 * @param {!Window|null} winOrNull
 * @return {!Window}
 */
function toWin(winOrNull) {
  return (/** @type {!Window} */winOrNull
  );
}

},{}],41:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryString_ = parseQueryString_;

var _urlTryDecodeUriComponent = require('./url-try-decode-uri-component');

var regex = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 *
 * DO NOT import the function from this file. Instead, import parseQueryString
 * from `src/url.js`.
 *
 * @param {string} queryString
 * @return {!JsonObject}
 */
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function parseQueryString_(queryString) {
  var params = /** @type {!JsonObject} */Object.create(null);
  if (!queryString) {
    return params;
  }

  var match = void 0;
  while (match = regex.exec(queryString)) {
    var name = (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(match[1], match[1]);
    var value = match[2] ? (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(match[2], match[2]) : '';
    params[name] = value;
  }
  return params;
}

},{"./url-try-decode-uri-component":42}],42:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryDecodeUriComponent_ = tryDecodeUriComponent_;
/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tries to decode a URI component, falling back to opt_fallback (or an empty
 * string)
 *
 * DO NOT import the function from this file. Instead, import
 * tryDecodeUriComponent from `src/url.js`.
 *
 * @param {string} component
 * @param {string=} fallback
 * @return {string}
 */
function tryDecodeUriComponent_(component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  try {
    return decodeURIComponent(component);
  } catch (e) {
    return fallback;
  }
}

},{}],43:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SOURCE_ORIGIN_PARAM = undefined;
exports.getWinOrigin = getWinOrigin;
exports.parseUrlDeprecated = parseUrlDeprecated;
exports.parseUrlWithA = parseUrlWithA;
exports.appendEncodedParamStringToUrl = appendEncodedParamStringToUrl;
exports.addParamToUrl = addParamToUrl;
exports.addParamsToUrl = addParamsToUrl;
exports.serializeQueryString = serializeQueryString;
exports.isSecureUrlDeprecated = isSecureUrlDeprecated;
exports.assertHttpsUrl = assertHttpsUrl;
exports.assertAbsoluteHttpOrHttpsUrl = assertAbsoluteHttpOrHttpsUrl;
exports.parseQueryString = parseQueryString;
exports.removeFragment = removeFragment;
exports.getFragment = getFragment;
exports.isProxyOrigin = isProxyOrigin;
exports.getProxyServingType = getProxyServingType;
exports.isLocalhostOrigin = isLocalhostOrigin;
exports.isProtocolValid = isProtocolValid;
exports.removeAmpJsParamsFromUrl = removeAmpJsParamsFromUrl;
exports.removeSearch = removeSearch;
exports.getSourceUrl = getSourceUrl;
exports.getSourceOrigin = getSourceOrigin;
exports.resolveRelativeUrl = resolveRelativeUrl;
exports.resolveRelativeUrlFallback_ = resolveRelativeUrlFallback_;
exports.getCorsUrl = getCorsUrl;
exports.checkCorsUrl = checkCorsUrl;
exports.tryDecodeUriComponent = tryDecodeUriComponent;

var _lruCache = require('./utils/lru-cache');

var _object = require('./utils/object');

var _string = require('./string');

var _mode = require('./mode');

var _types = require('./types');

var _urlParseQueryString = require('./url-parse-query-string');

var _urlTryDecodeUriComponent = require('./url-try-decode-uri-component');

var _config = require('./config');

var _log = require('./log');

/**
 * @type {!JsonObject}
 */
var SERVING_TYPE_PREFIX = (0, _object.dict)({
  // No viewer
  'c': true,
  // In viewer
  'v': true,
  // Ad landing page
  'a': true,
  // Ad
  'ad': true
});

/**
 * Cached a-tag to avoid memory allocation during URL parsing.
 * @type {HTMLAnchorElement}
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var a = void 0;

/**
 * We cached all parsed URLs. As of now there are no use cases
 * of AMP docs that would ever parse an actual large number of URLs,
 * but we often parse the same one over and over again.
 * @type {LruCache}
 */
var cache = void 0;

/** @private @const Matches amp_js_* parameters in query string. */
var AMP_JS_PARAMS_REGEX = /[?&]amp_js[^&]*/;

/** @private @const Matches amp_gsa parameters in query string. */
var AMP_GSA_PARAMS_REGEX = /[?&]amp_gsa[^&]*/;

/** @private @const Matches amp_r parameters in query string. */
var AMP_R_PARAMS_REGEX = /[?&]amp_r[^&]*/;

/** @private @const Matches usqp parameters from goog experiment in query string. */
var GOOGLE_EXPERIMENT_PARAMS_REGEX = /[?&]usqp[^&]*/;

var INVALID_PROTOCOLS = [
/*eslint no-script-url: 0*/'javascript:',
/*eslint no-script-url: 0*/'data:',
/*eslint no-script-url: 0*/'vbscript:'];

/** @const {string} */
var SOURCE_ORIGIN_PARAM = exports.SOURCE_ORIGIN_PARAM = '__amp_source_origin';

/**
 * Returns the correct origin for a given window.
 * @param {!Window} win
 * @return {string} origin
 */
function getWinOrigin(win) {
  return win.origin || parseUrlDeprecated(win.location.href).origin;
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {string} url
 * @param {boolean=} opt_nocache
 * @return {!Location}
 */
function parseUrlDeprecated(url, opt_nocache) {
  if (!a) {
    a = /** @type {!HTMLAnchorElement} */self.document.createElement('a');
    cache = self.UrlCache || (self.UrlCache = new _lruCache.LruCache(100));
  }

  return parseUrlWithA(a, url, opt_nocache ? null : cache);
}

/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {!HTMLAnchorElement} a
 * @param {string} url
 * @param {LruCache=} opt_cache
 * @return {!Location}
 * @restricted
 */
function parseUrlWithA(a, url, opt_cache) {
  if (opt_cache && opt_cache.has(url)) {
    return opt_cache.get(url);
  }

  a.href = url;

  // IE11 doesn't provide full URL components when parsing relative URLs.
  // Assigning to itself again does the trick #3449.
  if (!a.protocol) {
    a.href = a.href;
  }

  var info = /** @type {!Location} */{
    href: a.href,
    protocol: a.protocol,
    host: a.host,
    hostname: a.hostname,
    port: a.port == '0' ? '' : a.port,
    pathname: a.pathname,
    search: a.search,
    hash: a.hash,
    origin: null // Set below.
  };

  // Some IE11 specific polyfills.
  // 1) IE11 strips out the leading '/' in the pathname.
  if (info.pathname[0] !== '/') {
    info.pathname = '/' + info.pathname;
  }

  // 2) For URLs with implicit ports, IE11 parses to default ports while
  // other browsers leave the port field empty.
  if (info.protocol == 'http:' && info.port == 80 || info.protocol == 'https:' && info.port == 443) {
    info.port = '';
    info.host = info.hostname;
  }

  // For data URI a.origin is equal to the string 'null' which is not useful.
  // We instead return the actual origin which is the full URL.
  if (a.origin && a.origin != 'null') {
    info.origin = a.origin;
  } else if (info.protocol == 'data:' || !info.host) {
    info.origin = info.href;
  } else {
    info.origin = info.protocol + '//' + info.host;
  }

  // Freeze during testing to avoid accidental mutation.
  var frozen = (0, _mode.getMode)().test && Object.freeze ? Object.freeze(info) : info;

  if (opt_cache) {
    opt_cache.put(url, frozen);
  }

  return frozen;
}

/**
 * Appends the string just before the fragment part (or optionally
 * to the front of the query string) of the URL.
 * @param {string} url
 * @param {string} paramString
 * @param {boolean=} opt_addToFront
 * @return {string}
 */
function appendEncodedParamStringToUrl(url, paramString, opt_addToFront) {
  if (!paramString) {
    return url;
  }
  var mainAndFragment = url.split('#', 2);
  var mainAndQuery = mainAndFragment[0].split('?', 2);

  var newUrl = mainAndQuery[0] + (mainAndQuery[1] ? opt_addToFront ? '?' + paramString + '&' + mainAndQuery[1] : '?' + mainAndQuery[1] + '&' + paramString : '?' + paramString);
  newUrl += mainAndFragment[1] ? '#' + mainAndFragment[1] : '';
  return newUrl;
}
/**
 * Appends a query string field and value to a url. `key` and `value`
 * will be ran through `encodeURIComponent` before appending.
 * @param {string} url
 * @param {string} key
 * @param {string} value
 * @param {boolean=} opt_addToFront
 * @return {string}
 */
function addParamToUrl(url, key, value, opt_addToFront) {
  var field = encodeURIComponent(key) + '=' + encodeURIComponent(value);
  return appendEncodedParamStringToUrl(url, field, opt_addToFront);
}

/**
 * Appends query string fields and values to a url. The `params` objects'
 * `key`s and `value`s will be transformed into query string keys/values.
 * @param {string} url
 * @param {!JsonObject<string, string|!Array<string>>} params
 * @return {string}
 */
function addParamsToUrl(url, params) {
  return appendEncodedParamStringToUrl(url, serializeQueryString(params));
}

/**
 * Serializes the passed parameter map into a query string with both keys
 * and values encoded.
 * @param {!JsonObject<string, string|!Array<string>>} params
 * @return {string}
 */
function serializeQueryString(params) {
  var s = [];
  for (var k in params) {
    var v = params[k];
    if (v == null) {
      continue;
    } else if ((0, _types.isArray)(v)) {
      for (var i = 0; i < v.length; i++) {
        var sv = /** @type {string} */v[i];
        s.push(encodeURIComponent(k) + '=' + encodeURIComponent(sv));
      }
    } else {
      var _sv = /** @type {string} */v;
      s.push(encodeURIComponent(k) + '=' + encodeURIComponent(_sv));
    }
  }
  return s.join('&');
}

/**
 * Returns `true` if the URL is secure: either HTTPS or localhost (for testing).
 * @param {string|!Location} url
 * @return {boolean}
 */
function isSecureUrlDeprecated(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return url.protocol == 'https:' || url.hostname == 'localhost' || (0, _string.endsWith)(url.hostname, '.localhost');
}

/**
 * Asserts that a given url is HTTPS or protocol relative. It's a user-level
 * assert.
 *
 * Provides an exception for localhost.
 *
 * @param {?string|undefined} urlString
 * @param {!Element|string} elementContext Element where the url was found.
 * @param {string=} sourceName Used for error messages.
 * @return {string}
 */
function assertHttpsUrl(urlString, elementContext) {
  var sourceName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'source';

  (0, _log.user)().assert(urlString != null, '%s %s must be available', elementContext, sourceName);
  // (erwinm, #4560): type cast necessary until #4560 is fixed.
  var theUrlString = /** @type {string} */urlString;
  (0, _log.user)().assert(isSecureUrlDeprecated(theUrlString) || /^(\/\/)/.test(theUrlString), '%s %s must start with ' + '"https://" or "//" or be relative and served from ' + 'either https or from localhost. Invalid value: %s', elementContext, sourceName, theUrlString);
  return theUrlString;
}

/**
 * Asserts that a given url is an absolute HTTP or HTTPS URL.
 * @param {string} urlString
 * @return {string}
 */
function assertAbsoluteHttpOrHttpsUrl(urlString) {
  (0, _log.user)().assert(/^https?\:/i.test(urlString), 'URL must start with "http://" or "https://". Invalid value: %s', urlString);
  return parseUrlDeprecated(urlString).href;
}

/**
 * Parses the query string of an URL. This method returns a simple key/value
 * map. If there are duplicate keys the latest value is returned.
 *
 * This function is implemented in a separate file to avoid a circular
 * dependency.
 *
 * @param {string} queryString
 * @return {!JsonObject}
 */
function parseQueryString(queryString) {
  return (0, _urlParseQueryString.parseQueryString_)(queryString);
}

/**
 * Returns the URL without fragment. If URL doesn't contain fragment, the same
 * string is returned.
 * @param {string} url
 * @return {string}
 */
function removeFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return url;
  }
  return url.substring(0, index);
}

/**
 * Returns the fragment from the URL. If the URL doesn't contain fragment,
 * the empty string is returned.
 * @param {string} url
 * @return {string}
 */
function getFragment(url) {
  var index = url.indexOf('#');
  if (index == -1) {
    return '';
  }
  return url.substring(index);
}

/**
 * Returns whether the URL has the origin of a proxy.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */
function isProxyOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return _config.urls.cdnProxyRegex.test(url.origin);
}

/**
 * For proxy-origin URLs, returns the serving type. Otherwise, returns null.
 * E.g., 'https://amp-com.cdn.ampproject.org/a/s/amp.com/amp_document.html'
 * returns 'a'.
 * @param {string|!Location} url URL of an AMP document.
 * @return {?string}
 */
function getProxyServingType(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  if (!isProxyOrigin(url)) {
    return null;
  }
  var path = url.pathname.split('/', 2);
  return path[1];
}

/**
 * Returns whether the URL origin is localhost.
 * @param {string|!Location} url URL of an AMP document.
 * @return {boolean}
 */
function isLocalhostOrigin(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return _config.urls.localhostRegex.test(url.origin);
}

/**
 * Returns whether the URL has valid protocol.
 * Deep link protocol is valid, but not javascript etc.
 * @param {string|!Location} url
 * @return {boolean}
 */
function isProtocolValid(url) {
  if (!url) {
    return true;
  }
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }
  return !INVALID_PROTOCOLS.includes(url.protocol);
}

/**
 * Returns a URL without AMP JS parameters.
 * @param {string} url
 * @return {string}
 */
function removeAmpJsParamsFromUrl(url) {
  var parsed = parseUrlDeprecated(url);
  var search = removeAmpJsParamsFromSearch(parsed.search);
  return parsed.origin + parsed.pathname + search + parsed.hash;
}

/**
 * Returns a URL without a query string.
 * @param {string} url
 * @return {string}
 */
function removeSearch(url) {
  var index = url.indexOf('?');
  if (index == -1) {
    return url;
  }
  var fragment = getFragment(url);
  return url.substring(0, index) + fragment;
}

/**
 * Removes parameters that start with amp js parameter pattern and returns the
 * new search string.
 * @param {string} urlSearch
 * @return {string}
 */
function removeAmpJsParamsFromSearch(urlSearch) {
  if (!urlSearch || urlSearch == '?') {
    return '';
  }
  var search = urlSearch.replace(AMP_JS_PARAMS_REGEX, '').replace(AMP_GSA_PARAMS_REGEX, '').replace(AMP_R_PARAMS_REGEX, '').replace(GOOGLE_EXPERIMENT_PARAMS_REGEX, '').replace(/^[?&]/, ''); // Removes first ? or &.
  return search ? '?' + search : '';
}

/**
 * Returns the source URL of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string}
 */
function getSourceUrl(url) {
  if (typeof url == 'string') {
    url = parseUrlDeprecated(url);
  }

  // Not a proxy URL - return the URL itself.
  if (!isProxyOrigin(url)) {
    return url.href;
  }

  // A proxy URL.
  // Example path that is being matched here.
  // https://cdn.ampproject.org/c/s/www.origin.com/foo/
  // The /s/ is optional and signals a secure origin.
  var path = url.pathname.split('/');
  var prefix = path[1];
  (0, _log.user)().assert(SERVING_TYPE_PREFIX[prefix], 'Unknown path prefix in url %s', url.href);
  var domainOrHttpsSignal = path[2];
  var origin = domainOrHttpsSignal == 's' ? 'https://' + decodeURIComponent(path[3]) : 'http://' + decodeURIComponent(domainOrHttpsSignal);
  // Sanity test that what we found looks like a domain.
  (0, _log.user)().assert(origin.indexOf('.') > 0, 'Expected a . in origin %s', origin);
  path.splice(1, domainOrHttpsSignal == 's' ? 3 : 2);
  return origin + path.join('/') + removeAmpJsParamsFromSearch(url.search) + (url.hash || '');
}

/**
 * Returns the source origin of an AMP document for documents served
 * on a proxy origin or directly.
 * @param {string|!Location} url URL of an AMP document.
 * @return {string} The source origin of the URL.
 */
function getSourceOrigin(url) {
  return parseUrlDeprecated(getSourceUrl(url)).origin;
}

/**
 * Returns absolute URL resolved based on the relative URL and the base.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 */
function resolveRelativeUrl(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrlDeprecated(baseUrl);
  }
  if (typeof URL == 'function') {
    return new URL(relativeUrlString, baseUrl.href).toString();
  }
  return resolveRelativeUrlFallback_(relativeUrlString, baseUrl);
}

/**
 * Fallback for URL resolver when URL class is not available.
 * @param {string} relativeUrlString
 * @param {string|!Location} baseUrl
 * @return {string}
 * @private Visible for testing.
 */
function resolveRelativeUrlFallback_(relativeUrlString, baseUrl) {
  if (typeof baseUrl == 'string') {
    baseUrl = parseUrlDeprecated(baseUrl);
  }
  relativeUrlString = relativeUrlString.replace(/\\/g, '/');
  var relativeUrl = parseUrlDeprecated(relativeUrlString);

  // Absolute URL.
  if ((0, _string.startsWith)(relativeUrlString.toLowerCase(), relativeUrl.protocol)) {
    return relativeUrl.href;
  }

  // Protocol-relative URL.
  if ((0, _string.startsWith)(relativeUrlString, '//')) {
    return baseUrl.protocol + relativeUrlString;
  }

  // Absolute path.
  if ((0, _string.startsWith)(relativeUrlString, '/')) {
    return baseUrl.origin + relativeUrlString;
  }

  // Relative path.
  return baseUrl.origin + baseUrl.pathname.replace(/\/[^/]*$/, '/') + relativeUrlString;
}

/**
 * Add "__amp_source_origin" query parameter to the URL.
 * @param {!Window} win
 * @param {string} url
 * @return {string}
 */
function getCorsUrl(win, url) {
  checkCorsUrl(url);
  var sourceOrigin = getSourceOrigin(win.location.href);
  return addParamToUrl(url, SOURCE_ORIGIN_PARAM, sourceOrigin);
}

/**
 * Checks if the url has __amp_source_origin and throws if it does.
 * @param {string} url
 */
function checkCorsUrl(url) {
  var parsedUrl = parseUrlDeprecated(url);
  var query = parseQueryString(parsedUrl.search);
  (0, _log.user)().assert(!(SOURCE_ORIGIN_PARAM in query), 'Source origin is not allowed in %s', url);
}

/**
 * Tries to decode a URI component, falling back to opt_fallback (or an empty
 * string)
 *
 * @param {string} component
 * @param {string=} opt_fallback
 * @return {string}
 */
function tryDecodeUriComponent(component, opt_fallback) {
  return (0, _urlTryDecodeUriComponent.tryDecodeUriComponent_)(component, opt_fallback);
}

},{"./config":7,"./log":19,"./mode":21,"./string":36,"./types":40,"./url-parse-query-string":41,"./url-try-decode-uri-component":42,"./utils/lru-cache":45,"./utils/object":47}],44:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areEqualOrdered = areEqualOrdered;
exports.filterSplice = filterSplice;
exports.findIndex = findIndex;
exports.fromIterator = fromIterator;
exports.pushIfNotExist = pushIfNotExist;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Compares if two arrays contains exactly same elements of same number
 * of same order.
 * Notice that it does NOT handle NaN case as expected
 *
 * @param {!Array<T>} arr1
 * @param {!Array<T>} arr2
 * @return {boolean}
 * @template T
 */
function areEqualOrdered(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * A bit like Array#filter, but removes elements that filter false from the
 * array. Returns the filtered items.
 *
 * @param {!Array<T>} array
 * @param {function(T, number, !Array<T>):boolean} filter
 * @return {!Array<T>}
 * @template T
 */
function filterSplice(array, filter) {
  var splice = [];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    if (filter(item, i, array)) {
      if (index < i) {
        array[index] = item;
      }
      index++;
    } else {
      splice.push(item);
    }
  }

  if (index < array.length) {
    array.length = index;
  }

  return splice;
}

/**
 * Returns the index of the first element matching the predicate.
 * Like Array#findIndex.
 *
 * @param {!Array<T>} array
 * @param {function(T, number, !Array<T>):boolean} predicate
 * @return {number}
 * @template T
 */
function findIndex(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

/**
 * Converts the given iterator to an array.
 *
 * @param {!Iterator<T>} iterator
 * @return {Array<T>}
 * @template T
 */
function fromIterator(iterator) {
  var array = [];
  for (var e = iterator.next(); !e.done; e = iterator.next()) {
    array.push(e.value);
  }
  return array;
}

/**
 * Adds item to array if it is not already present.
 *
 * @param {Array<T>} array
 * @param {T} item
 * @template T
 */
function pushIfNotExist(array, item) {
  if (array.indexOf(item) < 0) {
    array.push(item);
  }
}

},{}],45:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LruCache = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS-IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _log = require('../log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {string} */
var TAG = 'lru-cache';

/**
 * @template T
 */

var LruCache = exports.LruCache = function () {
  /**
   * @param {number} capacity
   */
  function LruCache(capacity) {
    _classCallCheck(this, LruCache);

    /** @private @const {number} */
    this.capacity_ = capacity;

    /** @private {number} */
    this.size_ = 0;

    /**
     * An incrementing counter to define the last access.
     * @private {number}
     */
    this.access_ = 0;

    /** @private {!Object<(number|string), {payload: T, access: number}>} */
    this.cache_ = Object.create(null);
  }

  /**
   * Returns whether key is cached.
   *
   * @param {number|string} key
   * @return {boolean}
   */


  _createClass(LruCache, [{
    key: 'has',
    value: function has(key) {
      return !!this.cache_[key];
    }

    /**
     * @param {number|string} key
     * @return {T} The cached payload.
     */

  }, {
    key: 'get',
    value: function get(key) {
      var cacheable = this.cache_[key];
      if (cacheable) {
        cacheable.access = ++this.access_;
        return cacheable.payload;
      }
      return undefined;
    }

    /**
     * @param {number|string} key
     * @param {T} payload The payload to cache.
     */

  }, {
    key: 'put',
    value: function put(key, payload) {
      if (!this.has(key)) {
        this.size_++;
      }
      this.cache_[key] = { payload: payload, access: this.access_ };
      this.evict_();
    }

    /**
     * Evicts the oldest cache entry, if we've exceeded capacity.
     */

  }, {
    key: 'evict_',
    value: function evict_() {
      if (this.size_ <= this.capacity_) {
        return;
      }

      (0, _log.dev)().warn(TAG, 'Trimming LRU cache');
      var cache = this.cache_;
      var oldest = this.access_ + 1;
      var oldestKey = void 0;
      for (var key in cache) {
        var access = cache[key].access;

        if (access < oldest) {
          oldest = access;
          oldestKey = key;
        }
      }

      if (oldestKey !== undefined) {
        delete cache[oldestKey];
        this.size_--;
      }
    }
  }]);

  return LruCache;
}();

},{"../log":19}],46:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapRange = mapRange;
exports.mod = mod;
exports.clamp = clamp;
/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Maps a value in a first range to its equivalent in a second range
 * Ex.: 5 in the range [0,10] gives 60 in the range[40,80]
 *
 * NOTE: lower/upper bounds on the source range are detected automatically,
 * however the bounds on the target range are not altered (thus the target
 * range could be decreasing).
 * Ex1: 8 in the range [0, 10] gives 2 in the range [10, 0]
 * Ex2: also, 8 in the range [10, 0] gives 2 in the range [10, 0]
 *
 * NOTE: Input value is enforced to be bounded inside the source range
 * Ex1: -2 in the range [0, 10] is interpreted as 0 and thus gives 40 in [40,80]
 * Ex2: 19 in the range [0, 5] is interpreted as 5 and thus gives 80 in [40,80]
 *
 * @param {number} val the value in the source range
 * @param {number} min1 the lower bound of the source range
 * @param {number} max1 the upper bound of the source range
 * @param {number} min2 the lower bound of the target range
 * @param {number} max2 the upper bound of the target range
 * @return {number} the equivalent value in the target range
 */
function mapRange(val, min1, max1, min2, max2) {

  var max1Bound = max1;
  var min1Bound = min1;
  if (min1 > max1) {
    max1Bound = min1;
    min1Bound = max1;
  }

  if (val < min1Bound) {
    val = min1Bound;
  } else if (val > max1Bound) {
    val = max1Bound;
  }

  return (val - min1) * (max2 - min2) / (max1 - min1) + min2;
}

/**
 * Computes the modulus of values `a` and `b`.
 *
 * This is needed because the % operator in JavaScript doesn't implement
 * modulus behaviour as can be seen by the spec here:
 * http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3.
 * It instead is used to obtain the remainder of a division.
 * This function uses the remainder (%) operator to determine the modulus.
 * Derived from here:
 * https://stackoverflow.com/questions/25726760/javascript-modular-arithmetic/47354356#47354356
 *
 * @param {number} a
 * @param {number} b
 * @return {number} returns the modulus of the two numbers.
 * @example
 *
 * _.min(10, 5);
 * // => 0
 *
 * _.mod(-1, 5);
 * // => 4
 */
function mod(a, b) {
  return a > 0 && b > 0 ? a % b : (a % b + b) % b;
}

/**
 * Restricts a number to be in the given min/max range.
 *
 * Examples:
 * clamp(0.5, 0, 1) -> 0.5
 * clamp(1.5, 0, 1) -> 1
 * clamp(-0.5, 0, 1) -> 0
 *
 * @param {number} val the value to clamp.
 * @param {number} min the lower bound.
 * @param {number} max the upper bound.
 * @return {number} the clamped value.
 */
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

},{}],47:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.dict = dict;
exports.hasOwn = hasOwn;
exports.ownProperty = ownProperty;
exports.deepMerge = deepMerge;
exports.omit = omit;

var _types = require('../types');

/* @const */
var hasOwn_ = Object.prototype.hasOwnProperty;

/**
 * Returns a map-like object.
 * If opt_initial is provided, copies its own properties into the
 * newly created object.
 * @param {T=} opt_initial This should typically be an object literal.
 * @return {T}
 * @template T
 */
/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function map(opt_initial) {
  var obj = Object.create(null);
  if (opt_initial) {
    Object.assign(obj, opt_initial);
  }
  return obj;
}

/**
 * Return an empty JsonObject or makes the passed in object literal
 * an JsonObject.
 * The JsonObject type is just a simple object that is at-dict.
 * See
 * https://github.com/google/closure-compiler/wiki/@struct-and-@dict-Annotations
 * for what a dict is type-wise.
 * The linter enforces that the argument is, in fact, at-dict like.
 * @param {!Object=} opt_initial
 * @return {!JsonObject}
 */
function dict(opt_initial) {
  // We do not copy. The linter enforces that the passed in object is a literal
  // and thus the caller cannot have a reference to it.
  return (/** @type {!JsonObject} */opt_initial || {}
  );
}

/**
 * Checks if the given key is a property in the map.
 *
 * @param {T}  obj a map like property.
 * @param {string}  key
 * @return {boolean}
 * @template T
 */
function hasOwn(obj, key) {
  return hasOwn_.call(obj, key);
}

/**
 * Returns obj[key] iff key is obj's own property (is not inherited).
 * Otherwise, returns undefined.
 *
 * @param {Object} obj
 * @param {string} key
 * @return {*}
 */
function ownProperty(obj, key) {
  if (hasOwn(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

/**
 * Deep merges source into target.
 *
 * @param {!Object} target
 * @param {!Object} source
 * @param {number} depth The maximum merge depth. If exceeded, Object.assign
 *                       will be used instead.
 * @return {!Object}
 * @throws {Error} If source contains a circular reference.
 * Note: Only nested objects are deep-merged, primitives and arrays are not.
 */
function deepMerge(target, source) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  // Keep track of seen objects to detect recursive references.
  var seen = [];

  /** @type {!Array<{t: !Object, s: !Object, d: number}>} */
  var queue = [];
  queue.push({ t: target, s: source, d: 0 });

  // BFS to ensure objects don't have recursive references at shallower depths.

  var _loop = function _loop() {
    var _queue$shift = queue.shift(),
        t = _queue$shift.t,
        s = _queue$shift.s,
        d = _queue$shift.d;

    if (seen.includes(s)) {
      throw new Error('Source object has a circular reference.');
    }
    seen.push(s);
    if (t === s) {
      return 'continue';
    }
    if (d > depth) {
      Object.assign(t, s);
      return 'continue';
    }
    Object.keys(s).forEach(function (key) {
      var newValue = s[key];
      // Perform a deep merge IFF both target and source have the same key
      // whose corresponding values are objects.
      if (hasOwn(t, key)) {
        var oldValue = t[key];
        if ((0, _types.isObject)(newValue) && (0, _types.isObject)(oldValue)) {
          queue.push({ t: oldValue, s: newValue, d: d + 1 });
          return;
        }
      }
      t[key] = newValue;
    });
  };

  while (queue.length > 0) {
    var _ret = _loop();

    if (_ret === 'continue') continue;
  }
  return target;
}

/**
 * @param {!Object} o An object to remove properties from
 * @param {!Array<string>} props A list of properties to remove from the Object
 * @return {!Object} An object with the given properties removed
 */
function omit(o, props) {
  return Object.keys(o).reduce(function (acc, key) {
    if (!props.includes(key)) {
      acc[key] = o[key];
    }
    return acc;
  }, {});
}

},{"../types":40}],48:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.tryResolve = tryResolve;
exports.some = some;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a Deferred struct, which holds a pending promise and its associated
 * resolve and reject functions.
 *
 * This is preferred instead of creating a Promise instance to extract the
 * resolve/reject functions yourself:
 *
 * ```
 * // Avoid doing
 * let resolve;
 * const promise = new Promise(res => {
 *   resolve = res;
 * });
 *
 * // Good
 * const deferred = new Deferred();
 * const { promise, resolve } = deferred;
 * ```
 *
 * @template T
 */
var Deferred =
/**
 * Creates an instance of Deferred.
 */
exports.Deferred = function Deferred() {
  _classCallCheck(this, Deferred);

  var resolve = void 0,
      reject = void 0;

  /**
   * @const {!Promise<T>}
   */
  this.promise = new /*OK*/Promise(function (res, rej) {
    resolve = res;
    reject = rej;
  });

  /**
   * @const {function(T=)}
   */
  this.resolve = resolve;

  /**
   * @const {function(*=)}
   */
  this.reject = reject;
};

/**
 * Creates a promise resolved to the return value of fn.
 * If fn sync throws, it will cause the promise to reject.
 *
 * @param {function():T} fn
 * @return {!Promise<T>}
 * @template T
 */


function tryResolve(fn) {
  return new Promise(function (resolve) {
    resolve(fn());
  });
}

/**
 * Returns a promise which resolves if a threshold amount of the given promises
 * resolve, and rejects otherwise.
 * @param {!Array<!Promise>} promises The array of promises to test.
 * @param {number} count The number of promises that must resolve for the
 *     returned promise to resolve.
 * @return {!Promise} A promise that resolves if any of the given promises
 *     resolve, and which rejects otherwise.
 */
function some(promises) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Promise(function (resolve, reject) {
    count = Math.max(count, 0);
    var extra = promises.length - count;
    if (extra < 0) {
      reject(new Error('not enough promises to resolve'));
    }
    if (promises.length == 0) {
      resolve([]);
    }
    var values = [];
    var reasons = [];

    var onFulfilled = function onFulfilled(value) {
      if (values.length < count) {
        values.push(value);
      }
      if (values.length == count) {
        resolve(values);
      }
    };
    var onRejected = function onRejected(reason) {
      if (reasons.length <= extra) {
        reasons.push(reason);
      }
      if (reasons.length > extra) {
        reject(reasons);
      }
    };
    for (var i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(onFulfilled, onRejected);
    }
  });
}

/**
 * Resolves with the result of the last promise added.
 * @implements {IThenable}
 */

var LastAddedResolver = exports.LastAddedResolver = function () {
  /**
   * @param {!Array<!Promise>=} opt_promises
   */
  function LastAddedResolver(opt_promises) {
    _classCallCheck(this, LastAddedResolver);

    var resolve_ = void 0,
        reject_ = void 0;
    /** @private @const {!Promise} */
    this.promise_ = new Promise(function (resolve, reject) {
      resolve_ = resolve;
      reject_ = reject;
    });

    /** @private */
    this.resolve_ = resolve_;

    /** @private */
    this.reject_ = reject_;

    /** @private */
    this.count_ = 0;

    if (opt_promises) {
      for (var i = 0; i < opt_promises.length; i++) {
        this.add(opt_promises[i]);
      }
    }
  }

  /**
   * Add a promise to possibly be resolved.
   * @param {!Promise} promise
   * @return {!Promise}
   */


  _createClass(LastAddedResolver, [{
    key: 'add',
    value: function add(promise) {
      var _this = this;

      var countAtAdd = ++this.count_;
      Promise.resolve(promise).then(function (result) {
        if (_this.count_ === countAtAdd) {
          _this.resolve_(result);
        }
      }, function (error) {
        // Don't follow behavior of Promise.all and Promise.race error so that
        // this will only reject when most recently added promise fails.
        if (_this.count_ === countAtAdd) {
          _this.reject_(error);
        }
      });
      return this.promise_;
    }

    /** @override */

  }, {
    key: 'then',
    value: function then(opt_resolve, opt_reject) {
      return this.promise_.then(opt_resolve, opt_reject);
    }
  }]);

  return LastAddedResolver;
}();

},{}],49:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssEscape = cssEscape;
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */

/**
 * This regex consists of 4 matching capture groups and one (non-matching) fallback:
 *
 * - (\0), catch the null terminator character so it may be replaced by UTF
 *   Replacement Char
 * - ^(-)$, catch a solitary dash char, so that it may be backslash escaped.
 *   This is a separate capture group so that the legal-chars (group 4) doesn't
 *   capture it first, since that group doesn't need to escape its dash.
 * - ([\x01-\x1f\x7f]|^-?[0-9]), catch a UTF control char, or any leading
 *   number (with an optional leading dash). The control or the number (but not
 *   the leading dash) must be hex-escaped,.
 * - ([\x80-\uffff0-9a-zA-Z_-]+), catch legal-chars, with the exception of a
 *   solitary dash, which will already have matched in group 1.
 * - [^], finally, a catch-all that allows us to backslash escape the char.
 *
 * Together, this matches everything necessary for CSS.escape.
 */
var regex = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

function escaper(match, nil, dash, hexEscape, chars) {
  // Chars is the legal-chars (group 4) capture
  if (chars) {
    return chars;
  }
  // Nil is the null terminator (group 1) capture
  if (nil) {
    return '\uFFFD';
  }
  // Both UTF control chars, and leading numbers (with optional leading dash)
  // (group 3) must be backslash escaped with a trailing space.  Funnily, the
  // leading dash must not be escaped, but the number. :shrug:
  if (hexEscape) {
    return match.slice(0, -1) + '\\' + match.slice(-1).charCodeAt(0).toString(16) + ' ';
  }
  // Finally, the solitary dash and the catch-all chars require backslash
  // escaping.
  return '\\' + match;
}

/**
 * https://drafts.csswg.org/cssom/#serialize-an-identifier
 * @param {string} value
 * @return {string}
 */
function cssEscape(value) {
  return String(value).replace(regex, escaper);
}

},{}]},{},[2])


})});//# sourceMappingURL=amp-pan-zoom-0.1.max.js.map
