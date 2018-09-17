(self.AMP=self.AMP||[]).push({n:"amp-timeago",v:"1537224222059",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpTimeAgo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _layout = require('../../../src/layout');

var _timeago = require('../../../third_party/timeagojs/timeago');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

var AmpTimeAgo = exports.AmpTimeAgo = function (_AMP$BaseElement) {
  _inherits(AmpTimeAgo, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpTimeAgo(element) {
    _classCallCheck(this, AmpTimeAgo);

    /** @private {string} */
    var _this = _possibleConstructorReturn(this, (AmpTimeAgo.__proto__ || Object.getPrototypeOf(AmpTimeAgo)).call(this, element));

    _this.datetime_ = '';

    /** @private {string} */
    _this.locale_ = '';

    /** @private {string} */
    _this.title_ = '';
    return _this;
  }

  /** @override */


  _createClass(AmpTimeAgo, [{
    key: 'buildCallback',
    value: function buildCallback() {
      (0, _log.user)().assert(this.element.textContent.length > 0, 'Content cannot be empty. Found in: %s', this.element);

      this.datetime_ = this.element.getAttribute('datetime');
      this.locale_ = this.element.getAttribute('locale') || this.win.document.documentElement.lang;
      this.title_ = this.element.textContent.trim();

      this.element.title = this.title_;
      this.element.textContent = '';

      var timeElement = document.createElement('time');
      timeElement.setAttribute('datetime', this.datetime_);

      if (this.element.hasAttribute('cutoff')) {
        var cutoff = parseInt(this.element.getAttribute('cutoff'), 10);
        var elDate = new Date(this.datetime_);
        var secondsAgo = Math.floor((Date.now() - elDate.getTime()) / 1000);

        if (secondsAgo > cutoff) {
          timeElement.textContent = this.title_;
        } else {
          timeElement.textContent = (0, _timeago.timeago)(this.datetime_, this.locale_);
        }
      } else {
        timeElement.textContent = (0, _timeago.timeago)(this.datetime_, this.locale_);
      }

      this.element.appendChild(timeElement);
    }

    /** @override */

  }, {
    key: 'isLayoutSupported',
    value: function isLayoutSupported(layout) {
      return (0, _layout.isLayoutSizeDefined)(layout);
    }
  }]);

  return AmpTimeAgo;
}(AMP.BaseElement);

AMP.extension('amp-timeago', '0.1', function (AMP) {
  AMP.registerElement('amp-timeago', AmpTimeAgo);
});

},{"../../../src/layout":2,"../../../src/log":3,"../../../third_party/timeagojs/timeago":14}],2:[function(require,module,exports){
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

},{"./log":3,"./static-template":6,"./string":7,"./style":8,"./types":9}],3:[function(require,module,exports){
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

},{"./mode":5,"./mode-object":4,"./types":9}],4:[function(require,module,exports){
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

},{"./mode":5}],5:[function(require,module,exports){
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

var version = '1537224222059';

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

  // Currently `1537224222059` and thus `mode.version` contain only
  // major version. The full version however must also carry the minor version.
  // We will default to production default `01` minor version for now.
  // TODO(erwinmombay): decide whether 1537224222059 should contain
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

},{"./url-parse-query-string":10}],6:[function(require,module,exports){
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

},{"./log":3,"./utils/object.js":12}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./string":7,"./utils/object.js":12}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"./url-try-decode-uri-component":11}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"../types":9}],13:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v3.0.0
 * https://github.com/hustcc/timeago.js
 */

/**
 * ar (Arabic)
 */
var ar = exports.ar = function ar(number, index) {
  if (index === 0) {
    return ['منذ لحظات', 'بعد لحظات'];
  }

  var timeTypes = [['ثانية', 'ثانيتين', '%s ثوان', '%s ثانية'], // Seconds
  ['دقيقة', 'دقيقتين', '%s دقائق', '%s دقيقة'], // Minutes
  ['ساعة', 'ساعتين', '%s ساعات', '%s ساعة'], // Hours
  ['يوم', 'يومين', '%s أيام', '%s يوماً'], // Days
  ['أسبوع', 'أسبوعين', '%s أسابيع', '%s أسبوعاً'], // Weeks
  ['شهر', 'شهرين', '%s أشهر', '%s شهراً'], // Months
  ['عام', 'عامين', '%s أعوام', '%s عاماً']];

  var timeStr = formatTime(Math.floor(index / 2), number);

  return ['\u0645\u0646\u0630  ' + timeStr, '\u0628\u0639\u062F  ' + timeStr];

  function formatTime(type, n) {
    if (n < 3) {
      return timeTypes[type][n - 1];
    } else if (n >= 3 && n <= 10) {
      return timeTypes[type][2];
    } else {
      return timeTypes[type][3];
    }
  }
};

/**
 * be (Belarusian)
 */
var be = exports.be = function be(number, index) {
  var seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд');
  var minutes = formatNum.bind(null, 'хвіліну', '%s хвіліну', '%s хвіліны', '%s хвілін');
  var hours = formatNum.bind(null, 'гадзіну', '%s гадзіну', '%s гадзіны', '%s гадзін');
  var days = formatNum.bind(null, 'дзень', '%s дзень', '%s дні', '%s дзён');
  var weeks = formatNum.bind(null, 'тыдзень', '%s тыдзень', '%s тыдні', '%s тыдняў');
  var months = formatNum.bind(null, 'месяц', '%s месяц', '%s месяцы', '%s месяцаў');
  var years = formatNum.bind(null, 'год', '%s год', '%s гады', '%s гадоў');

  switch (index) {
    case 0:
      return ['толькі што', 'праз некалькі секунд'];
    case 1:
      return [seconds(number) + ' таму', 'праз ' + seconds(number)];
    case 2:
    case 3:
      return [minutes(number) + ' таму', 'праз ' + minutes(number)];
    case 4:
    case 5:
      return [hours(number) + ' таму', 'праз ' + hours(number)];
    case 6:
    case 7:
      return [days(number) + ' таму', 'праз ' + days(number)];
    case 8:
    case 9:
      return [weeks(number) + ' таму', 'праз ' + weeks(number)];
    case 10:
    case 11:
      return [months(number) + ' таму', 'праз ' + months(number)];
    case 12:
    case 13:
      return [years(number) + ' таму', 'праз ' + years(number)];
    default:
      return ['', ''];
  }

  /**
   *
   * @param f1 - 1
   * @param f - 21, 31, ...
   * @param s - 2-4, 22-24, 32-34 ...
   * @param t - 5-20, 25-30, ...
   * @param n
   * @return {string}
   */
  function formatNum(f1, f, s, t, n) {
    var n10 = n % 10;
    var str = t;

    if (n === 1) {
      str = f1;
    } else if (n10 === 1 && n > 20) {
      str = f;
    } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
      str = s;
    }

    return str;
  }
};

/**
 * bg (Bulgarian)
 */
var bg = exports.bg = function bg(number, index) {
  return [['току що', 'съвсем скоро'], ['преди %s секунди', 'след %s секунди'], ['преди 1 минута', 'след 1 минута'], ['преди %s минути', 'след %s минути'], ['преди 1 час', 'след 1 час'], ['преди %s часа', 'след %s часа'], ['преди 1 ден', 'след 1 ден'], ['преди %s дни', 'след %s дни'], ['преди 1 седмица', 'след 1 седмица'], ['преди %s седмици', 'след %s седмици'], ['преди 1 месец', 'след 1 месец'], ['преди %s месеца', 'след %s месеца'], ['преди 1 година', 'след 1 година'], ['преди %s години', 'след %s години']][index];
};

/**
 * ca (Catalan)
 */
var ca = exports.ca = function ca(number, index) {
  return [['fa un moment', 'd\'aquí un moment'], ['fa %s segons', 'd\'aquí %s segons'], ['fa 1 minut', 'd\'aquí 1 minut'], ['fa %s minuts', 'd\'aquí %s minuts'], ['fa 1 hora', 'd\'aquí 1 hora'], ['fa %s hores', 'd\'aquí %s hores'], ['fa 1 dia', 'd\'aquí 1 dia'], ['fa %s dies', 'd\'aquí %s dies'], ['fa 1 setmana', 'd\'aquí 1 setmana'], ['fa %s setmanes', 'd\'aquí %s setmanes'], ['fa 1 mes', 'd\'aquí 1 mes'], ['fa %s mesos', 'd\'aquí %s mesos'], ['fa 1 any', 'd\'aquí 1 any'], ['fa %s anys', 'd\'aquí %s anys']][index];
};

/**
 * da (Danish)
 */
var da = exports.da = function da(number, index) {
  return [['for et øjeblik siden', 'om et øjeblik'], ['for %s sekunder siden', 'om %s sekunder'], ['for 1 minut siden', 'om 1 minut'], ['for %s minutter siden', 'om %s minutter'], ['for 1 time siden', 'om 1 time'], ['for %s timer siden', 'om %s timer'], ['for 1 dag siden', 'om 1 dag'], ['for %s dage siden', 'om %s dage'], ['for 1 uge siden', 'om 1 uge'], ['for %s uger siden', 'om %s uger'], ['for 1 måned siden', 'om 1 måned'], ['for %s måneder siden', 'om %s måneder'], ['for 1 år siden', 'om 1 år'], ['for %s år siden', 'om %s år']][index];
};

/**
 * de (German)
 */
var de = exports.de = function de(number, index) {
  return [['gerade eben', 'vor einer Weile'], ['vor %s Sekunden', 'in %s Sekunden'], ['vor 1 Minute', 'in 1 Minute'], ['vor %s Minuten', 'in %s Minuten'], ['vor 1 Stunde', 'in 1 Stunde'], ['vor %s Stunden', 'in %s Stunden'], ['vor 1 Tag', 'in 1 Tag'], ['vor %s Tagen', 'in %s Tagen'], ['vor 1 Woche', 'in 1 Woche'], ['vor %s Wochen', 'in %s Wochen'], ['vor 1 Monat', 'in 1 Monat'], ['vor %s Monaten', 'in %s Monaten'], ['vor 1 Jahr', 'in 1 Jahr'], ['vor %s Jahren', 'in %s Jahren']][index];
};

/**
 * el (Greek)
 */
var el = exports.el = function el(number, index) {
  return [['μόλις τώρα', 'σε λίγο'], ['%s δευτερόλεπτα πριν', 'σε %s δευτερόλεπτα'], ['1 λεπτό πριν', 'σε 1 λεπτό'], ['%s λεπτά πριν', 'σε %s λεπτά'], ['1 ώρα πριν', 'σε 1 ώρα'], ['%s ώρες πριν', 'σε %s ώρες'], ['1 μέρα πριν', 'σε 1 μέρα'], ['%s μέρες πριν', 'σε %s μέρες'], ['1 εβδομάδα πριν', 'σε 1 εβδομάδα'], ['%s εβδομάδες πριν', 'σε %s εβδομάδες'], ['1 μήνα πριν', 'σε 1 μήνα'], ['%s μήνες πριν', 'σε %s μήνες'], ['1 χρόνο πριν', 'σε 1 χρόνο'], ['%s χρόνια πριν', 'σε %s χρόνια']][index];
};

/**
 * en (English)
 */
var en = exports.en = function en(number, index) {
  return [['just now', 'right now'], ['%s seconds ago', 'in %s seconds'], ['1 minute ago', 'in 1 minute'], ['%s minutes ago', 'in %s minutes'], ['1 hour ago', 'in 1 hour'], ['%s hours ago', 'in %s hours'], ['1 day ago', 'in 1 day'], ['%s days ago', 'in %s days'], ['1 week ago', 'in 1 week'], ['%s weeks ago', 'in %s weeks'], ['1 month ago', 'in 1 month'], ['%s months ago', 'in %s months'], ['1 year ago', 'in 1 year'], ['%s years ago', 'in %s years']][index];
};

/**
 * enShort (English - short)
 */
var enShort = exports.enShort = function enShort(number, index) {
  return [['just now', 'right now'], ['%ss ago', 'in %ss'], ['1m ago', 'in 1m'], ['%sm ago', 'in %sm'], ['1h ago', 'in 1h'], ['%sh ago', 'in %sh'], ['1d ago', 'in 1d'], ['%sd ago', 'in %sd'], ['1w ago', 'in 1w'], ['%sw ago', 'in %sw'], ['1mo ago', 'in 1mo'], ['%smo ago', 'in %smo'], ['1yr ago', 'in 1yr'], ['%syr ago', 'in %syr']][index];
};

/**
 * es (Spanish)
 */
var es = exports.es = function es(number, index) {
  return [['justo ahora', 'en un rato'], ['hace %s segundos', 'en %s segundos'], ['hace 1 minuto', 'en 1 minuto'], ['hace %s minutos', 'en %s minutos'], ['hace 1 hora', 'en 1 hora'], ['hace %s horas', 'en %s horas'], ['hace 1 día', 'en 1 día'], ['hace %s días', 'en %s días'], ['hace 1 semana', 'en 1 semana'], ['hace %s semanas', 'en %s semanas'], ['hace 1 mes', 'en 1 mes'], ['hace %s meses', 'en %s meses'], ['hace 1 año', 'en 1 año'], ['hace %s años', 'en %s años']][index];
};

/**
 * eu (Basque)
 */
var eu = exports.eu = function eu(number, index) {
  return [['orain', 'denbora bat barru'], ['duela %s segundu', '%s segundu barru'], ['duela minutu 1', 'minutu 1 barru'], ['duela %s minutu', '%s minutu barru'], ['duela ordu 1', 'ordu 1 barru'], ['duela %s ordu', '%s ordu barru'], ['duela egun 1', 'egun 1 barru'], ['duela %s egun', '%s egun barru'], ['duela aste 1', 'aste 1 barru'], ['duela %s aste', '%s aste barru'], ['duela hillabete 1', 'hillabete 1 barru'], ['duela %s hillabete', '%s hillabete barru'], ['duela urte 1', 'urte 1 barru'], ['duela %s urte', '%s urte barru']][index];
};

/**
 * fi (Finnish)
 */
var fi = exports.fi = function fi(number, index) {
  return [['juuri äsken', 'juuri nyt'], ['%s sekuntia sitten', '%s sekunnin päästä'], ['minuutti sitten', 'minuutin päästä'], ['%s minuuttia sitten', '%s minuutin päästä'], ['tunti sitten', 'tunnin päästä'], ['%s tuntia sitten', '%s tunnin päästä'], ['päivä sitten', 'päivän päästä'], ['%s päivää sitten', '%s päivän päästä'], ['viikko sitten', 'viikon päästä'], ['%s viikkoa sitten', '%s viikon päästä'], ['kuukausi sitten', 'kuukauden päästä'], ['%s kuukautta sitten', '%s kuukauden päästä'], ['vuosi sitten', 'vuoden päästä'], ['%s vuotta sitten', '%s vuoden päästä']][index];
};

/**
 * fr (French)
 */
var fr = exports.fr = function fr(number, index) {
  return [['à l\'instant', 'dans un instant'], ['il y a %s secondes', 'dans %s secondes'], ['il y a 1 minute', 'dans 1 minute'], ['il y a %s minutes', 'dans %s minutes'], ['il y a 1 heure', 'dans 1 heure'], ['il y a %s heures', 'dans %s heures'], ['il y a 1 jour', 'dans 1 jour'], ['il y a %s jours', 'dans %s jours'], ['il y a 1 semaine', 'dans 1 semaine'], ['il y a %s semaines', 'dans %s semaines'], ['il y a 1 mois', 'dans 1 mois'], ['il y a %s mois', 'dans %s mois'], ['il y a 1 an', 'dans 1 an'], ['il y a %s ans', 'dans %s ans']][index];
};

/**
 * he (Hebrew)
 */
var he = exports.he = function he(number, index) {
  return [['זה עתה', 'עכשיו'], ['לפני %s שניות', 'בעוד %s שניות'], ['לפני דקה', 'בעוד דקה'], ['לפני %s דקות', 'בעוד %s דקות'], ['לפני שעה', 'בעוד שעה'], ['לפני %s שעות', 'בעוד %s שעות'], ['אתמול', 'מחר'], ['לפני %s ימים', 'בעוד %s ימים'], ['לפני שבוע', 'בעוד שבוע'], ['לפני %s שבועות', 'בעוד %s שבועות'], ['לפני חודש', 'בעוד חודש'], ['לפני %s חודשים', 'בעוד %s חודשים'], ['לפני שנה', 'בעוד שנה'], ['לפני %s שנים', 'בעוד %s שנים']][index];
};

/**
 * hu (Hungarian)
 */
var hu = exports.hu = function hu(number, index) {
  return [['éppen most', 'éppen most'], ['%s másodperce', '%s másodpercen belül'], ['1 perce', '1 percen belül'], ['%s perce', '%s percen belül'], ['1 órája', '1 órán belül'], ['%s órája', '%s órán belül'], ['1 napja', '1 napon belül'], ['%s napja', '%s napon belül'], ['1 hete', '1 héten belül'], ['%s hete', '%s héten belül'], ['1 hónapja', '1 hónapon belül'], ['%s hónapja', '%s hónapon belül'], ['1 éve', '1 éven belül'], ['%s éve', '%s éven belül']][index];
};

/**
 * inBG (Bangla)
 */
var inBG = exports.inBG = function inBG(number, index) {
  return [['এইমাত্র', 'একটা সময়'], ['%s সেকেন্ড আগে', '%s এর সেকেন্ডের মধ্যে'], ['1 মিনিট আগে', '1 মিনিটে'], ['%s এর মিনিট আগে', '%s এর মিনিটের মধ্যে'], ['1 ঘন্টা আগে', '1 ঘন্টা'], ['%s ঘণ্টা আগে', '%s এর ঘন্টার মধ্যে'], ['1 দিন আগে', '1 দিনের মধ্যে'], ['%s এর দিন আগে', '%s এর দিন'], ['1 সপ্তাহ আগে', '1 সপ্তাহের মধ্যে'], ['%s এর সপ্তাহ আগে', '%s সপ্তাহের মধ্যে'], ['1 মাস আগে', '1 মাসে'], ['%s মাস আগে', '%s মাসে'], ['1 বছর আগে', '1 বছরের মধ্যে'], ['%s বছর আগে', '%s বছরে']][index];
};

/**
 * inHI (Hindi)
 */
var inHI = exports.inHI = function inHI(number, index) {
  return [['अभी', 'कुछ समय'], ['%s सेकंड पहले', '%s सेकंड में'], ['1 मिनट पहले', '1 मिनट में'], ['%s मिनट पहले', '%s मिनट में'], ['1 घंटे पहले', '1 घंटे में'], ['%s घंटे पहले', '%s घंटे में'], ['1 दिन पहले', '1 दिन में'], ['%s दिन पहले', '%s दिनों में'], ['1 सप्ताह पहले', '1 सप्ताह में'], ['%s हफ्ते पहले', '%s हफ्तों में'], ['1 महीने पहले', '1 महीने में'], ['%s महीने पहले', '%s महीनों में'], ['1 साल पहले', '1 साल में'], ['%s साल पहले', '%s साल में']][index];
};

/**
 * inID (Malay)
 */
var inID = exports.inID = function inID(number, index) {
  return [['baru saja', 'sebentar'], ['%s detik yang lalu', 'dalam %s detik'], ['1 menit yang lalu', 'dalam 1 menit'], ['%s menit yang lalu', 'dalam %s menit'], ['1 jam yang lalu', 'dalam 1 jam'], ['%s jam yang lalu', 'dalam %s jam'], ['1 hari yang lalu', 'dalam 1 hari'], ['%s hari yang lalu', 'dalam %s hari'], ['1 minggu yang lalu', 'dalam 1 minggu'], ['%s minggu yang lalu', 'dalam %s minggu'], ['1 bulan yang lalu', 'dalam 1 bulan'], ['%s bulan yang lalu', 'dalam %s bulan'], ['1 tahun yang lalu', 'dalam 1 tahun'], ['%s tahun yang lalu', 'dalam %s tahun']][index];
};

/**
 * it (Italian)
 */
var it = exports.it = function it(number, index) {
  return [['poco fa', 'tra poco'], ['%s secondi fa', '%s secondi da ora'], ['un minuto fa', 'un minuto da ora'], ['%s minuti fa', '%s minuti da ora'], ['un\'ora fa', 'un\'ora da ora'], ['%s ore fa', '%s ore da ora'], ['un giorno fa', 'un giorno da ora'], ['%s giorni fa', '%s giorni da ora'], ['una settimana fa', 'una settimana da ora'], ['%s settimane fa', '%s settimane da ora'], ['un mese fa', 'un mese da ora'], ['%s mesi fa', '%s mesi da ora'], ['un anno fa', 'un anno da ora'], ['%s anni fa', '%s anni da ora']][index];
};

/**
 * ja (Japanese)
 */
var ja = exports.ja = function ja(number, index) {
  return [['すこし前', 'すぐに'], ['%s秒前', '%s秒以内'], ['1分前', '1分以内'], ['%s分前', '%s分以内'], ['1時間前', '1時間以内'], ['%s時間前', '%s時間以内'], ['1日前', '1日以内'], ['%s日前', '%s日以内'], ['1週間前', '1週間以内'], ['%s週間前', '%s週間以内'], ['1ヶ月前', '1ヶ月以内'], ['%sヶ月前', '%sヶ月以内'], ['1年前', '1年以内'], ['%s年前', '%s年以内']][index];
};

/**
 * ko (Korean)
 */
var ko = exports.ko = function ko(number, index) {
  return [['방금', '곧'], ['%s초 전', '%s초 후'], ['1분 전', '1분 후'], ['%s분 전', '%s분 후'], ['1시간 전', '1시간 후'], ['%s시간 전', '%s시간 후'], ['1일 전', '1일 후'], ['%s일 전', '%s일 후'], ['1주일 전', '1주일 후'], ['%s주일 전', '%s주일 후'], ['1개월 전', '1개월 후'], ['%s개월 전', '%s개월 후'], ['1년 전', '1년 후'], ['%s년 전', '%s년 후']][index];
};

/**
 * ml (Malayalam)
 */
var ml = exports.ml = function ml(number, index) {
  return [['ഇപ്പോള്‍', 'കുറച്ചു മുന്‍പ്'], ['%s സെക്കന്റ്‌കള്‍ക്ക് മുന്‍പ്', '%s സെക്കന്റില്‍'], ['1 മിനിറ്റിനു മുന്‍പ്', '1 മിനിറ്റില്‍'], ['%s മിനിറ്റുകള്‍ക്ക് മുന്‍പ', '%s മിനിറ്റില്‍'], ['1 മണിക്കൂറിനു മുന്‍പ്', '1 മണിക്കൂറില്‍'], ['%s മണിക്കൂറുകള്‍ക്കു മുന്‍പ്', '%s മണിക്കൂറില്‍'], ['1 ഒരു ദിവസം മുന്‍പ്', '1 ദിവസത്തില്‍'], ['%s ദിവസങ്ങള്‍ക് മുന്‍പ്', '%s ദിവസങ്ങള്‍ക്കുള്ളില്‍'], ['1 ആഴ്ച മുന്‍പ്', '1 ആഴ്ചയില്‍'], ['%s ആഴ്ചകള്‍ക്ക് മുന്‍പ്', '%s ആഴ്ചകള്‍ക്കുള്ളില്‍'], ['1 മാസത്തിനു മുന്‍പ്', '1 മാസത്തിനുള്ളില്‍'], ['%s മാസങ്ങള്‍ക്ക് മുന്‍പ്', '%s മാസങ്ങള്‍ക്കുള്ളില്‍'], ['1 വര്‍ഷത്തിനു  മുന്‍പ്', '1 വര്‍ഷത്തിനുള്ളില്‍'], ['%s വര്‍ഷങ്ങള്‍ക്കു മുന്‍പ്', '%s വര്‍ഷങ്ങള്‍ക്കുല്ല്ളില്‍']][index];
};

/**
 * nbNO (Norwegian Bokmål)
 */
var nbNO = exports.nbNO = function nbNO(number, index) {
  return [['akkurat nå', 'om litt'], ['%s sekunder siden', 'om %s sekunder'], ['1 minutt siden', 'om 1 minutt'], ['%s minutter siden', 'om %s minutter'], ['1 time siden', 'om 1 time'], ['%s timer siden', 'om %s timer'], ['1 dag siden', 'om 1 dag'], ['%s dager siden', 'om %s dager'], ['1 uke siden', 'om 1 uke'], ['%s uker siden', 'om %s uker'], ['1 måned siden', 'om 1 måned'], ['%s måneder siden', 'om %s måneder'], ['1 år siden', 'om 1 år'], ['%s år siden', 'om %s år']][index];
};

/**
 * nl (Dutch)
 */
var nl = exports.nl = function nl(number, index) {
  return [['recent', 'binnenkort'], ['%s seconden geleden', 'binnen %s seconden'], ['1 minuut geleden', 'binnen 1 minuut'], ['%s minuten geleden', 'binnen %s minuten'], ['1 uur geleden', 'binnen 1 uur'], ['%s uren geleden', 'binnen %s uren'], ['1 dag geleden', 'binnen 1 dag'], ['%s dagen geleden', 'binnen %s dagen'], ['1 week geleden', 'binnen 1 week'], ['%s weken geleden', 'binnen %s weken'], ['1 maand geleden', 'binnen 1 maand'], ['%s maanden geleden', 'binnen %s maanden'], ['1 jaar geleden', 'binnen 1 jaar'], ['%s jaren geleden', 'binnen %s jaren']][index];
};

/**
 * nnNO (Norwegian Nynorsk)
 */
var nnNO = exports.nnNO = function nnNO(number, index) {
  return [['nett no', 'om litt'], ['%s sekund sidan', 'om %s sekund'], ['1 minutt sidan', 'om 1 minutt'], ['%s minutt sidan', 'om %s minutt'], ['1 time sidan', 'om 1 time'], ['%s timar sidan', 'om %s timar'], ['1 dag sidan', 'om 1 dag'], ['%s dagar sidan', 'om %s dagar'], ['1 veke sidan', 'om 1 veke'], ['%s veker sidan', 'om %s veker'], ['1 månad sidan', 'om 1 månad'], ['%s månadar sidan', 'om %s månadar'], ['1 år sidan', 'om 1 år'], ['%s år sidan', 'om %s år']][index];
};

/**
 * pl (Polish)
 */
var pl = exports.pl = function pl(number, index) {
  var l = [['w tej chwili', 'za chwilę'], ['%s sekund temu', 'za %s sekund'], ['1 minutę temu', 'za 1 minutę'], ['%s minut temu', 'za %s minut'], ['1 godzinę temu', 'za 1 godzinę'], ['%s godzin temu', 'za %s godzin'], ['1 dzień temu', 'za 1 dzień'], // ['wczoraj', 'jutro'],
  ['%s dni temu', 'za %s dni'], ['1 tydzień temu', 'za 1 tydzień'], ['%s tygodni temu', 'za %s tygodni'], ['1 miesiąc temu', 'za 1 miesiąc'], ['%s miesięcy temu', 'za %s miesięcy'], ['1 rok temu', 'za 1 rok'], ['%s lat temu', 'za %s lat'], ['%s sekundy temu', 'za %s sekundy'], ['%s minuty temu', 'za %s minuty'], ['%s godziny temu', 'za %s godziny'], ['%s dni temu', 'za %s dni'], ['%s tygodnie temu', 'za %s tygodnie'], ['%s miesiące temu', 'za %s miesiące'], ['%s lata temu', 'za %s lata']];
  // to determine which plural form must be used check the last 2 digits
  // and calculate new index value to get the nominative form (14-20)
  // for all other cases use index value as it is (0-13)
  return l[index & 1 ? number % 10 > 4 || number % 10 < 2 || 1 === ~~(number / 10) % 10 ? index : ++index / 2 + 13 : index];
};

/**
 * ptBR (Portuguese)
 */
var ptBR = exports.ptBR = function ptBR(number, index) {
  return [['agora mesmo', 'daqui um pouco'], ['há %s segundos', 'em %s segundos'], ['há um minuto', 'em um minuto'], ['há %s minutos', 'em %s minutos'], ['há uma hora', 'em uma hora'], ['há %s horas', 'em %s horas'], ['há um dia', 'em um dia'], ['há %s dias', 'em %s dias'], ['há uma semana', 'em uma semana'], ['há %s semanas', 'em %s semanas'], ['há um mês', 'em um mês'], ['há %s meses', 'em %s meses'], ['há um ano', 'em um ano'], ['há %s anos', 'em %s anos']][index];
};

/**
 * ro (Romanian)
 */
var ro = exports.ro = function ro(number, index) {
  var langTable = [['chiar acum', 'chiar acum'], ['acum %s secunde', 'peste %s secunde'], ['acum un minut', 'peste un minut'], ['acum %s minute', 'peste %s minute'], ['acum o oră', 'peste o oră'], ['acum %s ore', 'peste %s ore'], ['acum o zi', 'peste o zi'], ['acum %s zile', 'peste %s zile'], ['acum o săptămână', 'peste o săptămână'], ['acum %s săptămâni', 'peste %s săptămâni'], ['acum o lună', 'peste o lună'], ['acum %s luni', 'peste %s luni'], ['acum un an', 'peste un an'], ['acum %s ani', 'peste %s ani']];

  if (number < 20) {
    return langTable[index];
  }

  // A `de` preposition must be added between the number and the adverb
  // if the number is greater than 20.
  return [langTable[index][0].replace('%s', '%s de'), langTable[index][1].replace('%s', '%s de')];
};

/**
 * ru (Russian)
 */
var ru = exports.ru = function ru(number, index) {
  var seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунды', '%s секунд');
  var minutes = formatNum.bind(null, 'минуту', '%s минуту', '%s минуты', '%s минут');
  var hours = formatNum.bind(null, 'час', '%s час', '%s часа', '%s часов');
  var days = formatNum.bind(null, 'день', '%s день', '%s дня', '%s дней');
  var weeks = formatNum.bind(null, 'неделю', '%s неделю', '%s недели', '%s недель');
  var months = formatNum.bind(null, 'месяц', '%s месяц', '%s месяца', '%s месяцев');
  var years = formatNum.bind(null, 'год', '%s год', '%s года', '%s лет');

  switch (index) {
    case 0:
      return ['только что', 'через несколько секунд'];
    case 1:
      return [seconds(number) + ' назад', 'через ' + seconds(number)];
    case 2: // ['минуту назад', 'через минуту'];
    case 3:
      return [minutes(number) + ' назад', 'через ' + minutes(number)];
    case 4: // ['час назад', 'через час'];
    case 5:
      return [hours(number) + ' назад', 'через ' + hours(number)];
    case 6:
      return ['вчера', 'завтра'];
    case 7:
      return [days(number) + ' назад', 'через ' + days(number)];
    case 8: // ['неделю назад', 'через неделю'];
    case 9:
      return [weeks(number) + ' назад', 'через ' + weeks(number)];
    case 10: // ['месяц назад', 'через месяц'];
    case 11:
      return [months(number) + ' назад', 'через ' + months(number)];
    case 12: // ['год назад', 'через год'];
    case 13:
      return [years(number) + ' назад', 'через ' + years(number)];
    default:
      return ['', ''];
  }

  /**
   *
   * @param f1 - 1
   * @param f - 21, 31, ...
   * @param s - 2-4, 22-24, 32-34 ...
   * @param t - 5-20, 25-30, ...
   * @param n
   * @return {string}
   */
  function formatNum(f1, f, s, t, n) {
    var n10 = n % 10;
    var str = t;

    if (n === 1) {
      str = f1;
    } else if (n10 === 1 && n > 20) {
      str = f;
    } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
      str = s;
    }
    return str;
  }
};

/**
 * sv (Swedish)
 */
var sv = exports.sv = function sv(number, index) {
  return [['just nu', 'om en stund'], ['%s sekunder sedan', 'om %s seconder'], ['1 minut sedan', 'om 1 minut'], ['%s minuter sedan', 'om %s minuter'], ['1 timme sedan', 'om 1 timme'], ['%s timmar sedan', 'om %s timmar'], ['1 dag sedan', 'om 1 dag'], ['%s dagar sedan', 'om %s dagar'], ['1 vecka sedan', 'om 1 vecka'], ['%s veckor sedan', 'om %s veckor'], ['1 månad sedan', 'om 1 månad'], ['%s månader sedan', 'om %s månader'], ['1 år sedan', 'om 1 år'], ['%s år sedan', 'om %s år']][index];
};

/**
 * ta (Tamil)
 */
var ta = exports.ta = function ta(number, index) {
  return [['இப்போது', 'சற்று நேரம் முன்பு'], ['%s நொடிக்கு முன்', '%s நொடிகளில்'], ['1 நிமிடத்திற்க்கு முன்', '1 நிமிடத்தில்'], ['%s நிமிடத்திற்க்கு முன்', '%s நிமிடங்களில்'], ['1 மணி நேரத்திற்கு முன்', '1 மணி நேரத்திற்குள்'], ['%s மணி நேரத்திற்கு முன்', '%s மணி நேரத்திற்குள்'], ['1 நாளுக்கு முன்', '1 நாளில்'], ['%s நாட்களுக்கு முன்', '%s நாட்களில்'], ['1 வாரத்திற்கு முன்', '1 வாரத்தில்'], ['%s வாரங்களுக்கு முன்', '%s வாரங்களில்'], ['1 மாதத்திற்கு முன்', '1 மாதத்தில்'], ['%s மாதங்களுக்கு முன்', '%s மாதங்களில்'], ['1 வருடத்திற்கு முன்', '1 வருடத்தில்'], ['%s வருடங்களுக்கு முன்', '%s வருடங்களில்']][index];
};

/**
 * th (Thai)
 */
var th = exports.th = function th(number, index) {
  return [['เมื่อสักครู่นี้', 'อีกสักครู่'], ['%s วินาทีที่แล้ว', 'ใน %s วินาที'], ['1 นาทีที่แล้ว', 'ใน 1 นาที'], ['%s นาทีที่แล้ว', 'ใน %s นาที'], ['1 ชั่วโมงที่แล้ว', 'ใน 1 ชั่วโมง'], ['%s ชั่วโมงที่แล้ว', 'ใน %s ชั่วโมง'], ['1 วันที่แล้ว', 'ใน 1 วัน'], ['%s วันที่แล้ว', 'ใน %s วัน'], ['1 อาทิตย์ที่แล้ว', 'ใน 1 อาทิตย์'], ['%s อาทิตย์ที่แล้ว', 'ใน %s อาทิตย์'], ['1 เดือนที่แล้ว', 'ใน 1 เดือน'], ['%s เดือนที่แล้ว', 'ใน %s เดือน'], ['1 ปีที่แล้ว', 'ใน 1 ปี'], ['%s ปีที่แล้ว', 'ใน %s ปี']][index];
};

/**
 * tr (Turkish)
 */
var tr = exports.tr = function tr(number, index) {
  return [['az önce', 'şimdi'], ['%s saniye önce', '%s saniye içinde'], ['1 dakika önce', '1 dakika içinde'], ['%s dakika önce', '%s dakika içinde'], ['1 saat önce', '1 saat içinde'], ['%s saat önce', '%s saat içinde'], ['1 gün önce', '1 gün içinde'], ['%s gün önce', '%s gün içinde'], ['1 hafta önce', '1 hafta içinde'], ['%s hafta önce', '%s hafta içinde'], ['1 ay önce', '1 ay içinde'], ['%s ay önce', '%s ay içinde'], ['1 yıl önce', '1 yıl içinde'], ['%s yıl önce', '%s yıl içinde']][index];
};

/**
 * uk (Ukrainian)
 */
var uk = exports.uk = function uk(number, index) {
  var seconds = formatNum.bind(null, 'секунду', '%s секунду', '%s секунди', '%s секунд');
  var minutes = formatNum.bind(null, 'хвилину', '%s хвилину', '%s хвилини', '%s хвилин');
  var hours = formatNum.bind(null, 'годину', '%s годину', '%s години', '%s годин');
  var days = formatNum.bind(null, 'день', '%s день', '%s дні', '%s днів');
  var weeks = formatNum.bind(null, 'тиждень', '%s тиждень', '%s тиждні', '%s тижднів');
  var months = formatNum.bind(null, 'місяць', '%s місяць', '%s місяці', '%s місяців');
  var years = formatNum.bind(null, 'рік', '%s рік', '%s роки', '%s років');

  switch (index) {
    case 0:
      return ['щойно', 'через декілька секунд'];
    case 1:
      return [seconds(number) + ' тому', 'через ' + seconds(number)];
    case 2:
    case 3:
      return [minutes(number) + ' тому', 'через ' + minutes(number)];
    case 4:
    case 5:
      return [hours(number) + ' тому', 'через ' + hours(number)];
    case 6:
    case 7:
      return [days(number) + ' тому', 'через ' + days(number)];
    case 8:
    case 9:
      return [weeks(number) + ' тому', 'через ' + weeks(number)];
    case 10:
    case 11:
      return [months(number) + ' тому', 'через ' + months(number)];
    case 12:
    case 13:
      return [years(number) + ' тому', 'через ' + years(number)];
    default:
      return ['', ''];
  }

  function formatNum(f1, f, s, t, n) {
    var n10 = n % 10;
    var str = t;

    if (n === 1) {
      str = f1;
    } else if (n10 === 1 && n > 20) {
      str = f;
    } else if (n10 > 1 && n10 < 5 && (n > 20 || n < 10)) {
      str = s;
    }
    return str;
  }
};

/**
 * vi (Vietnamese)
 */
var vi = exports.vi = function vi(number, index) {
  return [['vừa xong', 'một lúc'], ['%s giây trước', 'trong %s giây'], ['1 phút trước', 'trong 1 phút'], ['%s phút trước', 'trong %s phút'], ['1 giờ trước', 'trong 1 giờ'], ['%s giờ trước', 'trong %s giờ'], ['1 ngày trước', 'trong 1 ngày'], ['%s ngày trước', 'trong %s ngày'], ['1 tuần trước', 'trong 1 tuần'], ['%s tuần trước', 'trong %s tuần'], ['1 tháng trước', 'trong 1 tháng'], ['%s tháng trước', 'trong %s tháng'], ['1 năm trước', 'trong 1 năm'], ['%s năm trước', 'trong %s năm']][index];
};

/**
 * zhCN (Chinese)
 */
var zhCN = exports.zhCN = function zhCN(number, index) {
  return [['刚刚', '片刻后'], ['%s秒前', '%s秒后'], ['1分钟前', '1分钟后'], ['%s分钟前', '%s分钟后'], ['1小时前', '1小时后'], ['%s小时前', '%s小时后'], ['1天前', '1天后'], ['%s天前', '%s天后'], ['1周前', '1周后'], ['%s周前', '%s周后'], ['1月前', '1月后'], ['%s月前', '%s月后'], ['1年前', '1年后'], ['%s年前', '%s年后']][index];
};

/**
 * zhTW (Taiwanese)
 */
var zhTW = exports.zhTW = function zhTW(number, index) {
  return [['剛剛', '片刻後'], ['%s秒前', '%s秒後'], ['1分鐘前', '1分鐘後'], ['%s分鐘前', '%s分鐘後'], ['1小時前', '1小時後'], ['%s小時前', '%s小時後'], ['1天前', '1天後'], ['%s天前', '%s天後'], ['1周前', '1周後'], ['%s周前', '%s周後'], ['1月前', '1月後'], ['%s月前', '%s月後'], ['1年前', '1年後'], ['%s年前', '%s年後']][index];
};

},{}],14:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeago = timeago;

var _timeagoLocales = require('./timeago-locales');

/**
 * Copyright (c) 2016 hustcc
 * License: MIT
 * Version: v3.0.0
 * https://github.com/hustcc/timeago.js
 */

var locales = {};

// second, minute, hour, day, week, month, year(365 days)
var SEC_ARRAY = [60, 60, 24, 7, 365 / 7 / 12, 12];
var SEC_ARRAY_LEN = 6;

// format Date / string / timestamp to Date instance.
function toDate(input) {
  if (input instanceof Date) {
    return input;
  };
  if (!isNaN(input)) {
    return new Date(toInt(input));
  }
  if (/^\d+$/.test(input)) {
    return new Date(toInt(input));
  }
  input = (input || '').trim().replace(/\.\d+/, '') // remove milliseconds
  .replace(/-/, '/').replace(/-/, '/').replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
  .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400
  return new Date(input);
}

// change f into int, remove decimal. Just for code compression
function toInt(f) {
  return parseInt(f, 10);
}

// format the diff second to *** time ago, with setting locale
function formatDiff(diff, locale) {
  // if locale is not exist, use defaultLocale.
  // if defaultLocale is not exist, use build-in `en`.
  // be sure of no error when locale is not exist.
  locale = locales[locale] ? locale : 'en';
  // if (! locales[locale]) locale = defaultLocale;
  var i = 0;
  var agoin = diff < 0 ? 1 : 0; // timein or timeago
  var totalSec = diff = Math.abs(diff);

  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY_LEN; i++) {
    diff /= SEC_ARRAY[i];
  }
  diff = toInt(diff);
  i *= 2;

  if (diff > (i === 0 ? 9 : 1)) {
    i += 1;
  }
  return locales[locale](diff, i, totalSec)[agoin].replace('%s', diff);
}

// calculate the diff second between date to be formated an now date.
function diffSec(date) {
  var nowDate = new Date();
  return (nowDate - toDate(date)) / 1000;
}

/**
 * timeago: the function to get `timeago` instance.
 * - nowDate: the relative date, default is new Date().
 * - defaultLocale: the default locale, default is en. if your set it, then the `locale` parameter of format is not needed of you.
 **/
function timeago(date, locale) {
  return formatDiff(diffSec(date), locale);
}

/**
 * register: register a new language locale
 * - locale: locale name, e.g. en / zh_CN, notice the standard.
 * - localeFunc: the locale process function
 **/
timeago.register = function (locale, localeFunc) {
  locales[locale] = localeFunc;
};

timeago.register('ar', _timeagoLocales.ar);
timeago.register('be', _timeagoLocales.be);
timeago.register('bg', _timeagoLocales.bg);
timeago.register('ca', _timeagoLocales.ca);
timeago.register('da', _timeagoLocales.da);
timeago.register('de', _timeagoLocales.de);
timeago.register('el', _timeagoLocales.el);
timeago.register('en', _timeagoLocales.en);
timeago.register('enShort', _timeagoLocales.enShort);
timeago.register('es', _timeagoLocales.es);
timeago.register('eu', _timeagoLocales.eu);
timeago.register('fi', _timeagoLocales.fi);
timeago.register('fr', _timeagoLocales.fr);
timeago.register('he', _timeagoLocales.he);
timeago.register('hu', _timeagoLocales.hu);
timeago.register('inBG', _timeagoLocales.inBG);
timeago.register('inHI', _timeagoLocales.inHI);
timeago.register('inID', _timeagoLocales.inID);
timeago.register('it', _timeagoLocales.it);
timeago.register('ja', _timeagoLocales.ja);
timeago.register('ko', _timeagoLocales.ko);
timeago.register('ml', _timeagoLocales.ml);
timeago.register('nbNO', _timeagoLocales.nbNO);
timeago.register('nl', _timeagoLocales.nl);
timeago.register('nnNO', _timeagoLocales.nnNO);
timeago.register('pl', _timeagoLocales.pl);
timeago.register('ptBR', _timeagoLocales.ptBR);
timeago.register('ro', _timeagoLocales.ro);
timeago.register('ru', _timeagoLocales.ru);
timeago.register('sv', _timeagoLocales.sv);
timeago.register('ta', _timeagoLocales.ta);
timeago.register('th', _timeagoLocales.th);
timeago.register('tr', _timeagoLocales.tr);
timeago.register('uk', _timeagoLocales.uk);
timeago.register('vi', _timeagoLocales.vi);
timeago.register('zhCN', _timeagoLocales.zhCN);
timeago.register('zhTW', _timeagoLocales.zhTW);

},{"./timeago-locales":13}]},{},[1])


})});//# sourceMappingURL=amp-timeago-0.1.max.js.map
