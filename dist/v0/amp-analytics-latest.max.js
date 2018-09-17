(self.AMP=self.AMP||[]).push({n:"amp-analytics",v:"1537222846916",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Activity = undefined;

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
 * @fileoverview Provides an ability to collect data about activities the user
 * has performed on the page.
 */

exports.installActivityServiceForTesting = installActivityServiceForTesting;

var _services = require('../../../src/services');

var _object = require('../../../src/utils/object');

var _eventHelper = require('../../../src/event-helper');

var _service = require('../../../src/service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The amount of time after an activity the user is considered engaged.
 * @private @const {number}
 */
var DEFAULT_ENGAGED_SECONDS = 5;

/**
 * @enum {string}
 */
var ActivityEventType = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
};

/**
 * @typedef {{
 *   type: string,
 *   time: number
 * }}
 */
var ActivityEventDef = void 0;

/**
 * Find the engaged time between the event and the time (exclusive of the time)
 * @param {ActivityEventDef} activityEvent
 * @param {number} time
 * @return {number}
 * @private
 */
function findEngagedTimeBetween(activityEvent, time) {
  var engagementBonus = 0;

  if (activityEvent.type === ActivityEventType.ACTIVE) {
    engagementBonus = DEFAULT_ENGAGED_SECONDS;
  }

  return Math.min(time - activityEvent.time, engagementBonus);
}

var ActivityHistory = function () {

  /**
   * Creates an instance of ActivityHistory.
   */
  function ActivityHistory() {
    _classCallCheck(this, ActivityHistory);

    /** @private {number} */
    this.totalEngagedTime_ = 0;

    /**
     * prevActivityEvent_ remains undefined until the first valid push call.
     * @private {ActivityEventDef|undefined}
     */
    this.prevActivityEvent_ = undefined;
  }

  /**
   * Indicate that an activity took place at the given time.
   * @param {ActivityEventDef} activityEvent
   */


  _createClass(ActivityHistory, [{
    key: 'push',
    value: function push(activityEvent) {
      if (!this.prevActivityEvent_) {
        this.prevActivityEvent_ = activityEvent;
      }

      if (this.prevActivityEvent_.time < activityEvent.time) {
        this.totalEngagedTime_ += findEngagedTimeBetween(this.prevActivityEvent_, activityEvent.time);
        this.prevActivityEvent_ = activityEvent;
      }
    }

    /**
     * Get the total engaged time up to the given time recorded in
     * ActivityHistory.
     * @param {number} time
     * @return {number}
     */

  }, {
    key: 'getTotalEngagedTime',
    value: function getTotalEngagedTime(time) {
      var totalEngagedTime = 0;
      if (this.prevActivityEvent_ !== undefined) {
        totalEngagedTime = this.totalEngagedTime_ + findEngagedTimeBetween(this.prevActivityEvent_, time);
      }
      return totalEngagedTime;
    }
  }]);

  return ActivityHistory;
}();

/**
 * Array of event types which will be listened for on the document to indicate
 * activity. Other activities are also observed on the Viewer and Viewport
 * objects. See {@link setUpActivityListeners_} for listener implementation.
 * @private @const {Array<string>}
 */


var ACTIVE_EVENT_TYPES = ['mousedown', 'mouseup', 'mousemove', 'keydown', 'keyup'];

/**
 * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampDoc
 */
function installActivityServiceForTesting(ampDoc) {
  (0, _service.registerServiceBuilderForDoc)(ampDoc, 'activity', Activity);
}

var Activity = exports.Activity = function () {

  /**
   * Activity tracks basic user activity on the page.
   *  - Listeners are not registered on the activity event types until the
   *    Viewer's `whenFirstVisible` is resolved.
   *  - When the `whenFirstVisible` of Viewer is resolved, a first activity
   *    is recorded.
   *  - The first activity in any second causes all other activities to be
   *    ignored. This is similar to debounce functionality since some events
   *    (e.g. scroll) could occur in rapid succession.
   *  - In any one second period, active events or inactive events can override
   *    each other. Whichever type occured last has precedence.
   *  - Active events give a 5 second "bonus" to engaged time.
   *  - Inactive events cause an immediate stop to the engaged time bonus of
   *    any previous activity event.
   *  - At any point after instantiation, `getTotalEngagedTime` can be used
   *    to get the engage time up to the time the function is called. If
   *    `whenFirstVisible` has not yet resolved, engaged time is 0.
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function Activity(ampdoc) {
    _classCallCheck(this, Activity);

    /** @const {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc */
    this.ampdoc = ampdoc;

    /** @private @const {function()} */
    this.boundStopIgnore_ = this.stopIgnore_.bind(this);

    /** @private @const {function()} */
    this.boundHandleActivity_ = this.handleActivity_.bind(this);

    /** @private @const {function()} */
    this.boundHandleVisibilityChange_ = this.handleVisibilityChange_.bind(this);

    /**
     * Contains the incrementalEngagedTime timestamps for named triggers.
     * @private {Object<string, number>}
     */
    this.totalEngagedTimeByTrigger_ = {
      /*
       * "$triggerName" : ${lastRequestTimestamp}
      */
    };

    /** @private {Array<!UnlistenDef>} */
    this.unlistenFuncs_ = [];

    /** @private {boolean} */
    this.ignoreActivity_ = false;

    /** @private {boolean} */
    this.ignoreInactive_ = false;

    /** @private @const {!ActivityHistory} */
    this.activityHistory_ = new ActivityHistory();

    /** @private @const {!../../../src/service/viewer-impl.Viewer} */
    this.viewer_ = _services.Services.viewerForDoc(this.ampdoc);

    /** @private @const {!../../../src/service/viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(this.ampdoc);

    this.viewer_.whenFirstVisible().then(this.start_.bind(this));
  }

  /** @private */


  _createClass(Activity, [{
    key: 'start_',
    value: function start_() {
      /** @private @const {number} */
      this.startTime_ = Date.now();
      // record an activity since this is when the page became visible
      this.handleActivity_();
      this.setUpActivityListeners_();
    }

    /** @private */

  }, {
    key: 'getTimeSinceStart_',
    value: function getTimeSinceStart_() {
      var timeSinceStart = Date.now() - this.startTime_;
      // Ensure that a negative time is never returned. This may cause loss of
      // data if there is a time change during the session but it will decrease
      // the likelyhood of errors in that situation.
      return timeSinceStart > 0 ? timeSinceStart : 0;
    }

    /**
     * Return to a state where neither activities or inactivity events are
     * ignored when that event type is fired.
     * @private
     */

  }, {
    key: 'stopIgnore_',
    value: function stopIgnore_() {
      this.ignoreActivity_ = false;
      this.ignoreInactive_ = false;
    }

    /** @private */

  }, {
    key: 'setUpActivityListeners_',
    value: function setUpActivityListeners_() {
      for (var i = 0; i < ACTIVE_EVENT_TYPES.length; i++) {
        this.unlistenFuncs_.push((0, _eventHelper.listen)(this.ampdoc.getRootNode(), ACTIVE_EVENT_TYPES[i], this.boundHandleActivity_));
      }

      this.unlistenFuncs_.push(this.viewer_.onVisibilityChanged(this.boundHandleVisibilityChange_));

      // Viewport.onScroll does not return an unlisten function.
      // TODO(britice): If Viewport is updated to return an unlisten function,
      // update this to capture the unlisten function.
      this.viewport_.onScroll(this.boundHandleActivity_);
    }

    /** @private */

  }, {
    key: 'handleActivity_',
    value: function handleActivity_() {
      if (this.ignoreActivity_) {
        return;
      }
      this.ignoreActivity_ = true;
      this.ignoreInactive_ = false;

      this.handleActivityEvent_(ActivityEventType.ACTIVE);
    }

    /** @private */

  }, {
    key: 'handleInactive_',
    value: function handleInactive_() {
      if (this.ignoreInactive_) {
        return;
      }
      this.ignoreInactive_ = true;
      this.ignoreActivity_ = false;

      this.handleActivityEvent_(ActivityEventType.INACTIVE);
    }

    /**
     * @param {ActivityEventType} type
     * @private
     */

  }, {
    key: 'handleActivityEvent_',
    value: function handleActivityEvent_(type) {
      var timeSinceStart = this.getTimeSinceStart_();
      var secondKey = Math.floor(timeSinceStart / 1000);
      var timeToWait = 1000 - timeSinceStart % 1000;

      // stop ignoring activity at the start of the next activity bucket
      setTimeout(this.boundStopIgnore_, timeToWait);

      this.activityHistory_.push({
        type: type,
        time: secondKey
      });
    }

    /** @private */

  }, {
    key: 'handleVisibilityChange_',
    value: function handleVisibilityChange_() {
      if (this.viewer_.isVisible()) {
        this.handleActivity_();
      } else {
        this.handleInactive_();
      }
    }

    /**
     * Remove all listeners associated with this Activity instance.
     * @private
     */

  }, {
    key: 'unlisten_',
    value: function unlisten_() {
      for (var i = 0; i < this.unlistenFuncs_.length; i++) {
        var unlistenFunc = this.unlistenFuncs_[i];
        // TODO(britice): Due to eslint typechecking, this check may not be
        // necessary.
        if (typeof unlistenFunc === 'function') {
          unlistenFunc();
        }
      }
      this.unlistenFuncs_ = [];
    }

    /**
     * @private
     * @visibleForTesting
     */

  }, {
    key: 'cleanup_',
    value: function cleanup_() {
      this.unlisten_();
    }

    /**
     * Get total engaged time since the page became visible.
     * @return {number}
     */

  }, {
    key: 'getTotalEngagedTime',
    value: function getTotalEngagedTime() {
      var secondsSinceStart = Math.floor(this.getTimeSinceStart_() / 1000);
      return this.activityHistory_.getTotalEngagedTime(secondsSinceStart);
    }

    /**
     * Get the incremental engaged time since the last push and reset it if asked.
     * @param {string} name
     * @param {boolean=} reset
     * @return {number}
     */

  }, {
    key: 'getIncrementalEngagedTime',
    value: function getIncrementalEngagedTime(name) {
      var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!(0, _object.hasOwn)(this.totalEngagedTimeByTrigger_, name)) {
        if (reset) {
          this.totalEngagedTimeByTrigger_[name] = this.getTotalEngagedTime();
        }
        return this.getTotalEngagedTime();
      }
      var currentIncrementalEngagedTime = this.totalEngagedTimeByTrigger_[name];
      if (reset === false) {
        return this.getTotalEngagedTime() - currentIncrementalEngagedTime;
      }
      this.totalEngagedTimeByTrigger_[name] = this.getTotalEngagedTime();
      return this.totalEngagedTimeByTrigger_[name] - currentIncrementalEngagedTime;
    }
  }]);

  return Activity;
}();

},{"../../../src/event-helper":30,"../../../src/service":51,"../../../src/services":53,"../../../src/utils/object":65}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpAnalytics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _activityImpl = require('./activity-impl');

var _config = require('./config');

var _events = require('./events');

var _variables = require('./variables');

var _iframeTransport = require('./iframe-transport');

var _instrumentation = require('./instrumentation');

var _layout = require('../../../src/layout');

var _requests = require('./requests');

var _services = require('../../../src/services');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _string = require('../../../src/string');

var _adHelper = require('../../../src/ad-helper');

var _mode = require('../../../src/mode');

var _service = require('../../../src/service');

var _types = require('../../../src/types');

var _transport = require('./transport');

var _resourceTiming = require('./resource-timing');

var _style = require('../../../src/style');

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

var TAG = 'amp-analytics';

var MAX_REPLACES = 16; // The maximum number of entries in a extraUrlParamsReplaceMap

var WHITELIST_EVENT_IN_SANDBOX = [_events.AnalyticsEventType.VISIBLE, _events.AnalyticsEventType.HIDDEN];

var AmpAnalytics = exports.AmpAnalytics = function (_AMP$BaseElement) {
  _inherits(AmpAnalytics, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpAnalytics(element) {
    _classCallCheck(this, AmpAnalytics);

    /** @private {!Promise} */
    var _this = _possibleConstructorReturn(this, (AmpAnalytics.__proto__ || Object.getPrototypeOf(AmpAnalytics)).call(this, element));

    _this.consentPromise_ = Promise.resolve();

    /**
     * The html id of the `amp-user-notification` element.
     * @private {?string}
     */
    _this.consentNotificationId_ = null;

    /** @private {boolean} */
    _this.isSandbox_ = false;

    /**
     * @private {Object<string, RequestHandler>} A map of request handler with requests
     */
    _this.requests_ = {};

    /**
     * @private {JsonObject}
     */
    _this.config_ = (0, _object.dict)();

    /** @private {?./instrumentation.InstrumentationService} */
    _this.instrumentation_ = null;

    /** @private {?./instrumentation.AnalyticsGroup} */
    _this.analyticsGroup_ = null;

    /** @private {!./variables.VariableService} */
    _this.variableService_ = (0, _variables.variableServiceFor)(_this.win);

    /** @private {!../../../src/service/crypto-impl.Crypto} */
    _this.cryptoService_ = _services.Services.cryptoFor(_this.win);

    /** @private {?Promise} */
    _this.iniPromise_ = null;

    /** @private {?IframeTransport} */
    _this.iframeTransport_ = null;

    /** @private {boolean} */
    _this.isInabox_ = (0, _mode.getMode)(_this.win).runtime == 'inabox';

    /**
     * Maximum time (since epoch) to report resource timing metrics.
     * We stop reporting after 1 minute.
     * @private @const {number}
     */
    _this.maxResourceTimingReportingTime_ = Date.now() + 60 * 1000;
    return _this;
  }

  /** @override */


  _createClass(AmpAnalytics, [{
    key: 'getLayoutPriority',
    value: function getLayoutPriority() {
      // Load immediately if inabox, otherwise after other content.
      return this.isInabox_ ? _layout.LayoutPriority.CONTENT : _layout.LayoutPriority.METADATA;
    }

    /** @override */

  }, {
    key: 'isAlwaysFixed',
    value: function isAlwaysFixed() {
      return true;
    }

    /** @override */

  }, {
    key: 'isLayoutSupported',
    value: function isLayoutSupported(unusedLayout) {
      return true;
    }

    /** @override */

  }, {
    key: 'buildCallback',
    value: function buildCallback() {
      var _this2 = this;

      this.isSandbox_ = this.element.hasAttribute('sandbox');

      this.element.setAttribute('aria-hidden', 'true');

      this.consentNotificationId_ = this.element.getAttribute('data-consent-notification-id');

      if (this.consentNotificationId_ != null) {
        this.consentPromise_ = _services.Services.userNotificationManagerForDoc(this.element).then(function (service) {
          return service.get((0, _log.dev)().assertString(_this2.consentNotificationId_));
        });
      }

      if (this.element.getAttribute('trigger') == 'immediate') {
        this.ensureInitialized_();
      }
    }

    /** @override */

  }, {
    key: 'layoutCallback',
    value: function layoutCallback() {
      // Now that we are rendered, stop rendering the element to reduce
      // resource consumption.
      return this.ensureInitialized_();
    }

    /** @override */

  }, {
    key: 'detachedCallback',
    value: function detachedCallback() {
      if (this.analyticsGroup_) {
        this.analyticsGroup_.dispose();
        this.analyticsGroup_ = null;
      }
      for (var i = 0; i < this.requests_.length; i++) {
        this.requests_[i].dispose();
        delete this.requests_[i];
      }
    }

    /** @override */

  }, {
    key: 'resumeCallback',
    value: function resumeCallback() {
      if (this.config_['transport'] && this.config_['transport']['iframe']) {
        this.initIframeTransport_();
      }
    }

    /** @override */

  }, {
    key: 'unlayoutCallback',
    value: function unlayoutCallback() {
      if (_services.Services.viewerForDoc(this.getAmpDoc()).isVisible()) {
        // amp-analytics tag was just set to display:none. Page is still loaded.
        return false;
      }

      // Page was unloaded - free up owned resources.
      if (this.iframeTransport_) {
        this.iframeTransport_.detach();
        this.iframeTransport_ = null;
      }
      return _get(AmpAnalytics.prototype.__proto__ || Object.getPrototypeOf(AmpAnalytics.prototype), 'unlayoutCallback', this).call(this);
    }

    /**
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'ensureInitialized_',
    value: function ensureInitialized_() {
      var _this3 = this;

      if (this.iniPromise_) {
        return this.iniPromise_;
      }
      (0, _style.toggle)(this.element, false);
      this.iniPromise_ = _services.Services.viewerForDoc(this.getAmpDoc()).whenFirstVisible()
      // Rudimentary "idle" signal.
      .then(function () {
        return _services.Services.timerFor(_this3.win).promise(1);
      }).then(function () {
        return _this3.consentPromise_;
      }).then(function () {
        return (0, _instrumentation.instrumentationServicePromiseForDoc)(_this3.getAmpDoc());
      }).then(function (instrumentation) {
        _this3.instrumentation_ = instrumentation;
        return new _config.AnalyticsConfig(_this3.element).loadConfig();
      }).then(function (config) {
        _this3.config_ = config;
      }).then(this.registerTriggers_.bind(this));
      return this.iniPromise_;
    }

    /**
     * Registers triggers.
     * @return {!Promise|undefined}
     * @private
     */

  }, {
    key: 'registerTriggers_',
    value: function registerTriggers_() {
      var _this4 = this;

      if (this.hasOptedOut_()) {
        // Nothing to do when the user has opted out.
        var _TAG = this.getName_();
        (0, _log.user)().fine(_TAG, 'User has opted out. No hits will be sent.');
        return Promise.resolve();
      }

      this.generateRequests_();

      if (!this.config_['triggers']) {
        var _TAG2 = this.getName_();
        this.user().error(_TAG2, 'No triggers were found in the ' + 'config. No analytics data will be sent.');
        return Promise.resolve();
      }

      this.processExtraUrlParams_(this.config_['extraUrlParams'], this.config_['extraUrlParamsReplaceMap']);

      this.analyticsGroup_ = this.instrumentation_.createAnalyticsGroup(this.element);

      if (this.config_['transport'] && this.config_['transport']['iframe']) {
        this.initIframeTransport_();
      }

      var promises = [];
      // Trigger callback can be synchronous. Do the registration at the end.
      for (var k in this.config_['triggers']) {
        if ((0, _object.hasOwn)(this.config_['triggers'], k)) {
          var _ret = function () {
            var trigger = _this4.config_['triggers'][k];
            var expansionOptions = _this4.expansionOptions_({}, trigger, undefined, true);
            var TAG = _this4.getName_();
            if (!trigger) {
              _this4.user().error(TAG, 'Trigger should be an object: ', k);
              return 'continue';
            }
            if (!trigger['on'] || !trigger['request']) {
              _this4.user().error(TAG, '"on" and "request" ' + 'attributes are required for data to be collected.');
              return 'continue';
            }
            // Check for not supported trigger for sandboxed analytics
            if (_this4.isSandbox_) {
              var eventType = trigger['on'];
              if ((0, _types.isEnumValue)(_events.AnalyticsEventType, eventType) && !WHITELIST_EVENT_IN_SANDBOX.includes(eventType)) {
                _this4.user().error(TAG, eventType + ' is not supported for amp-analytics in scope');
                return 'continue';
              }
            }

            _this4.processExtraUrlParams_(trigger['extraUrlParams'], _this4.config_['extraUrlParamsReplaceMap']);
            promises.push(_this4.isSampledIn_(trigger).then(function (result) {
              if (!result) {
                return;
              }
              // replace selector and selectionMethod
              if (_this4.isSandbox_) {
                // Only support selection of parent element for analytics in scope
                if (!_this4.element.parentElement) {
                  // In case parent element has been removed from DOM, do nothing
                  return;
                }
                trigger['selector'] = _this4.element.parentElement.tagName;
                trigger['selectionMethod'] = 'closest';
                _this4.addTriggerNoInline_(trigger);
              } else if (trigger['selector']) {
                // Expand the selector using variable expansion.
                return _this4.variableService_.expandTemplate(trigger['selector'], expansionOptions).then(function (selector) {
                  trigger['selector'] = selector;
                  _this4.addTriggerNoInline_(trigger);
                });
              } else {
                _this4.addTriggerNoInline_(trigger);
              }
            }));
          }();

          if (_ret === 'continue') continue;
        }
      }
      return Promise.all(promises);
    }

    /**
     * amp-analytics will create an iframe for vendors in
     * extensions/amp-analytics/0.1/vendors.js who have transport/iframe defined.
     * This is limited to MRC-accreddited vendors. The frame is removed if the
     * user navigates/swipes away from the page, and is recreated if the user
     * navigates back to the page.
     * @private
     */

  }, {
    key: 'initIframeTransport_',
    value: function initIframeTransport_() {
      if (this.iframeTransport_) {
        return;
      }
      this.preload((0, _iframeTransport.getIframeTransportScriptUrl)(this.getAmpDoc().win), 'script');
      var ampAdResourceId = this.assertAmpAdResourceId();

      this.iframeTransport_ = new _iframeTransport.IframeTransport(
      // Create  3p transport frame within creative frame if inabox.
      this.isInabox_ ? this.win : this.getAmpDoc().win, this.element.getAttribute('type'), this.config_['transport'], ampAdResourceId);
    }

    /**
     * Asks the browser to preload a URL. Always also does a preconnect
     * because browser support for that is better.
     *
     * @param {string} url
     * @param {string=} opt_preloadAs
     * @visibleForTesting
     */

  }, {
    key: 'preload',
    value: function preload(url, opt_preloadAs) {
      this.preconnect.preload(url, opt_preloadAs);
    }

    /**
     * Gets the resourceID of the parent amp-ad element.
     * Throws an exception if no such element.
     * @return {string}
     * @visibleForTesting
     */

  }, {
    key: 'assertAmpAdResourceId',
    value: function assertAmpAdResourceId() {
      return (0, _log.user)().assertString((0, _adHelper.getAmpAdResourceId)(this.element, (0, _service.getTopWindow)(this.win)), this.getName_() + ': No friendly amp-ad ancestor element was found ' + 'for amp-analytics tag with iframe transport.');
    }

    /**
     * Calls `AnalyticsGroup.addTrigger` and reports any errors. "NoInline" is
     * to avoid inlining this method so that `try/catch` does it veto
     * optimizations.
     * @param {!JsonObject} config
     * @private
     */

  }, {
    key: 'addTriggerNoInline_',
    value: function addTriggerNoInline_(config) {
      try {
        this.analyticsGroup_.addTrigger(config, this.handleEvent_.bind(this, config));
      } catch (e) {
        var _TAG3 = this.getName_();
        var eventType = config['on'];
        (0, _log.rethrowAsync)(_TAG3, 'Failed to process trigger "' + eventType + '"', e);
      }
    }

    /**
     * Replace the names of keys in params object with the values in replace map.
     *
     * @param {!Object<string, string>} params The params that need to be renamed.
     * @param {!Object<string, string>} replaceMap A map of pattern and replacement
     *    value.
     * @private
     */

  }, {
    key: 'processExtraUrlParams_',
    value: function processExtraUrlParams_(params, replaceMap) {
      if (params && replaceMap) {
        // If the config includes a extraUrlParamsReplaceMap, apply it as a set
        // of params to String.replace to allow aliasing of the keys in
        // extraUrlParams.
        var count = 0;
        for (var replaceMapKey in replaceMap) {
          if (++count > MAX_REPLACES) {
            var _TAG4 = this.getName_();
            this.user().error(_TAG4, 'More than ' + MAX_REPLACES + ' extraUrlParamsReplaceMap rules ' + 'aren\'t allowed; Skipping the rest');
            break;
          }

          for (var extraUrlParamsKey in params) {
            var newkey = extraUrlParamsKey.replace(replaceMapKey, replaceMap[replaceMapKey]);
            if (extraUrlParamsKey != newkey) {
              var value = params[extraUrlParamsKey];
              delete params[extraUrlParamsKey];
              params[newkey] = value;
            }
          }
        }
      }
    }

    /**
     * @return {boolean} true if the user has opted out.
     */

  }, {
    key: 'hasOptedOut_',
    value: function hasOptedOut_() {
      if (!this.config_['optout']) {
        return false;
      }

      var props = this.config_['optout'].split('.');
      var k = this.win;
      for (var i = 0; i < props.length; i++) {
        if (!k) {
          return false;
        }
        k = k[props[i]];
      }
      // The actual property being called is controlled by vendor configs only
      // that are approved in code reviews. User customization of the `optout`
      // property is not allowed.
      return k();
    }

    /**
     * Goes through all the requests in predefined vendor config and tag's config
     * and creates a map of request name to request template. These requests can
     * then be used while sending a request to a server.
     *
     * @private
     */

  }, {
    key: 'generateRequests_',
    value: function generateRequests_() {
      var _this5 = this;

      if (!this.config_ || !this.config_['requests']) {
        var _TAG5 = this.getName_();
        this.user().error(_TAG5, 'No request strings defined. Analytics ' + 'data will not be sent from this page.');
        return;
      }

      if (this.config_['requests']) {
        for (var k in this.config_['requests']) {
          if ((0, _object.hasOwn)(this.config_['requests'], k)) {
            var request = this.config_['requests'][k];
            if (!request['baseUrl']) {
              this.user().error(TAG, 'request must have a baseUrl');
              delete this.config_['requests'][k];
            }
          }
        }

        // Expand any placeholders. For requests, we expand each string up to 5
        // times to support nested requests. Leave any unresolved placeholders.
        // Expand any requests placeholder.
        for (var _k in this.config_['requests']) {
          this.config_['requests'][_k]['baseUrl'] = (0, _string.expandTemplate)(this.config_['requests'][_k]['baseUrl'], function (key) {
            var request = _this5.config_['requests'][key];
            return request && request['baseUrl'] || '${' + key + '}';
          }, 5);
        }

        var requests = {};
        for (var _k2 in this.config_['requests']) {
          if ((0, _object.hasOwn)(this.config_['requests'], _k2)) {
            var _request = this.config_['requests'][_k2];
            requests[_k2] = new _requests.RequestHandler(this.element, _request, this.preconnect, this.sendRequest_.bind(this), this.isSandbox_);
          }
        }
        this.requests_ = requests;
      }
    }

    /**
     * Callback for events that are registered by the config's triggers. This
     * method generates requests and sends them out.
     *
     * @param {!JsonObject} trigger JSON config block that resulted in this event.
     * @param {!Object} event Object with details about the event.
     * @private
     */

  }, {
    key: 'handleEvent_',
    value: function handleEvent_(trigger, event) {
      var requests = (0, _types.isArray)(trigger['request']) ? trigger['request'] : [trigger['request']];

      for (var r = 0; r < requests.length; r++) {
        var requestName = requests[r];
        this.handleRequestForEvent_(requestName, trigger, event);
      }
    }

    /**
     * Processes a request for an event callback and sends it out.
     *
     * @param {string} requestName The requestName to process.
     * @param {!JsonObject} trigger JSON config block that resulted in this event.
     * @param {!Object} event Object with details about the event.
     * @private
     */

  }, {
    key: 'handleRequestForEvent_',
    value: function handleRequestForEvent_(requestName, trigger, event) {
      var _this6 = this;

      if (!this.element.ownerDocument.defaultView) {
        var _TAG6 = this.getName_();
        (0, _log.dev)().warn(_TAG6, 'request against destroyed embed: ', trigger['on']);
      }

      var request = this.requests_[requestName];

      if (!request) {
        var _TAG7 = this.getName_();
        this.user().error(_TAG7, 'Ignoring event. Request string ' + 'not found: ', trigger['request']);
        return;
      }

      this.checkTriggerEnabled_(trigger, event).then(function (enabled) {
        if (!enabled) {
          return;
        }
        _this6.expandAndSendRequest_(request, trigger, event);
      });
    }

    /**
     * @param {!JsonObject} trigger JSON config block that resulted in this event.
     * @param {!ExpansionOptions} expansionOptions Expansion options.
     * @return {!Object<string, (string|!Promise<string>|function(): string)>}
     * @private
     */

  }, {
    key: 'getDynamicVariableBindings_',
    value: function getDynamicVariableBindings_(trigger, expansionOptions) {
      var dynamicBindings = {};
      var resourceTimingSpec = trigger['resourceTimingSpec'];
      if (resourceTimingSpec) {
        // Check if we're done reporting resource timing metrics before binding
        // before binding the resource timing variable.
        if (!resourceTimingSpec['done'] && Date.now() < this.maxResourceTimingReportingTime_) {
          var binding = 'RESOURCE_TIMING';
          var analyticsVar = 'resourceTiming';
          dynamicBindings[binding] = (0, _resourceTiming.serializeResourceTiming)(this.win, resourceTimingSpec);
          expansionOptions.vars[analyticsVar] = binding;
        }
      }
      return dynamicBindings;
    }

    /**
     * @param {RequestHandler} request The request to process.
     * @param {!JsonObject} trigger JSON config block that resulted in this event.
     * @param {!Object} event Object with details about the event.
     * @private
     */

  }, {
    key: 'expandAndSendRequest_',
    value: function expandAndSendRequest_(request, trigger, event) {
      this.config_['vars']['requestCount']++;
      var expansionOptions = this.expansionOptions_(event, trigger);
      var dynamicBindings = this.getDynamicVariableBindings_(trigger, expansionOptions);
      request.send(this.config_['extraUrlParams'], trigger, expansionOptions, dynamicBindings);
    }

    /**
     * @param {!JsonObject} trigger The config to use to determine sampling.
     * @return {!Promise<boolean>} Whether the request should be sampled in or
     * not based on sampleSpec.
     * @private
     */

  }, {
    key: 'isSampledIn_',
    value: function isSampledIn_(trigger) {
      var _this7 = this;

      /** @const {!JsonObject} */
      var spec = trigger['sampleSpec'];
      var resolve = Promise.resolve(true);
      var TAG = this.getName_();
      if (!spec) {
        return resolve;
      }
      var sampleOn = spec['sampleOn'];
      if (!sampleOn) {
        this.user().error(TAG, 'Invalid sampleOn value.');
        return resolve;
      }
      var threshold = parseFloat(spec['threshold']); // Threshold can be NaN.
      if (threshold >= 0 && threshold <= 100) {
        var expansionOptions = this.expansionOptions_({}, trigger);
        return this.expandTemplateWithUrlParams_(sampleOn, expansionOptions).then(function (key) {
          return _this7.cryptoService_.uniform(key);
        }).then(function (digest) {
          return digest * 100 < threshold;
        });
      }
      (0, _log.user)(). /*OK*/error(TAG, 'Invalid threshold for sampling.');
      return resolve;
    }

    /**
     * Checks if request for a trigger is enabled.
     * @param {!JsonObject} trigger The config to use to determine if trigger is
     * enabled.
     * @param {!Object} event Object with details about the event.
     * @return {!Promise<boolean>} Whether trigger must be called.
     * @private
     */

  }, {
    key: 'checkTriggerEnabled_',
    value: function checkTriggerEnabled_(trigger, event) {
      var expansionOptions = this.expansionOptions_(event, trigger);
      var enabledOnTagLevel = this.checkSpecEnabled_(this.config_['enabled'], expansionOptions);
      var enabledOnTriggerLevel = this.checkSpecEnabled_(trigger['enabled'], expansionOptions);

      return Promise.all([enabledOnTagLevel, enabledOnTriggerLevel]).then(function (enabled) {
        (0, _log.dev)().assert(enabled.length === 2);
        return enabled[0] && enabled[1];
      });
    }

    /**
     * Checks result of 'enabled' spec evaluation. Returns false if spec is
     * provided and value resolves to a falsey value (empty string, 0, false,
     * null, NaN or undefined).
     * @param {string} spec Expression that will be evaluated.
     * @param {!ExpansionOptions} expansionOptions Expansion options.
     * @return {!Promise<boolean>} False only if spec is provided and value is
     * falsey.
     * @private
     */

  }, {
    key: 'checkSpecEnabled_',
    value: function checkSpecEnabled_(spec, expansionOptions) {
      // Spec absence always resolves to true.
      if (spec === undefined) {
        return Promise.resolve(true);
      }

      return this.expandTemplateWithUrlParams_(spec, expansionOptions).then(function (val) {
        return val !== '' && val !== '0' && val !== 'false' && val !== 'null' && val !== 'NaN' && val !== 'undefined';
      });
    }

    /**
     * Expands spec using provided expansion options and applies url replacement
     * if necessary.
     * @param {string} spec Expression that needs to be expanded.
     * @param {!ExpansionOptions} expansionOptions Expansion options.
     * @return {!Promise<string>} expanded spec.
     * @private
     */

  }, {
    key: 'expandTemplateWithUrlParams_',
    value: function expandTemplateWithUrlParams_(spec, expansionOptions) {
      var _this8 = this;

      return this.variableService_.expandTemplate(spec, expansionOptions).then(function (key) {
        return _services.Services.urlReplacementsForDoc(_this8.element).expandUrlAsync(key);
      });
    }

    /**
     * @param {string} request The full request string to send.
     * @param {!JsonObject} trigger
     * @private
     */

  }, {
    key: 'sendRequest_',
    value: function sendRequest_(request, trigger) {
      if (!request) {
        var _TAG8 = this.getName_();
        this.user().error(_TAG8, 'Request not sent. Contents empty.');
        return;
      }
      if (trigger['iframePing']) {
        (0, _log.user)().assert(trigger['on'] == 'visible', 'iframePing is only available on page view requests.');
        (0, _transport.sendRequestUsingIframe)(this.win, request);
      } else if (this.config_['transport'] && this.config_['transport']['iframe']) {
        (0, _log.user)().assert(this.iframeTransport_, 'iframe transport was inadvertently deleted');
        this.iframeTransport_.sendRequest(request);
      } else {
        (0, _transport.sendRequest)(this.win, request, this.config_['transport'] || {});
      }
    }

    /**
     * @return {string} Returns a string to identify this tag. May not be unique
     * if the element id is not unique.
     * @private
     */

  }, {
    key: 'getName_',
    value: function getName_() {
      return 'AmpAnalytics ' + (this.element.getAttribute('id') || '<unknown id>');
    }

    /**
     * @param {!Object<string, Object<string, string|Array<string>>>} source1
     * @param {!Object<string, Object<string, string|Array<string>>>} source2
     * @param {number=} opt_iterations
     * @param {boolean=} opt_noEncode
     * @return {!ExpansionOptions}
     */

  }, {
    key: 'expansionOptions_',
    value: function expansionOptions_(source1, source2, opt_iterations, opt_noEncode) {
      var vars = (0, _object.map)();
      (0, _config.mergeObjects)(this.config_['vars'], vars);
      (0, _config.mergeObjects)(source2['vars'], vars);
      (0, _config.mergeObjects)(source1['vars'], vars);
      return new _variables.ExpansionOptions(vars, opt_iterations, opt_noEncode);
    }
  }]);

  return AmpAnalytics;
}(AMP.BaseElement);

AMP.extension(TAG, '0.1', function (AMP) {
  // Register doc-service factory.
  AMP.registerServiceForDoc('amp-analytics-instrumentation', _instrumentation.InstrumentationService);
  AMP.registerServiceForDoc('activity', _activityImpl.Activity);
  (0, _variables.installVariableService)(AMP.win);
  // Register the element.
  AMP.registerElement(TAG, AmpAnalytics);
});

},{"../../../src/ad-helper":22,"../../../src/layout":37,"../../../src/log":38,"../../../src/mode":40,"../../../src/service":51,"../../../src/services":53,"../../../src/string":55,"../../../src/style":56,"../../../src/types":57,"../../../src/utils/object":65,"./activity-impl":1,"./config":5,"./events":6,"./iframe-transport":9,"./instrumentation":10,"./requests":11,"./resource-timing":12,"./transport":14,"./variables":15}],3:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedAnalyticsRoot = exports.AmpdocAnalyticsRoot = exports.AnalyticsRoot = undefined;

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

var _services = require('../../../src/services');

var _visibilityManager = require('./visibility-manager');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _mode = require('../../../src/mode');

var _layoutRect = require('../../../src/layout-rect');

var _object = require('../../../src/utils/object');

var _promise = require('../../../src/utils/promise');

var _friendlyIframeEmbed = require('../../../src/friendly-iframe-embed');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'amp-analytics';

/**
 * An analytics root. Analytics can be scoped to either ampdoc, embed or
 * an arbitrary AMP element.
 *
 * TODO(dvoytenko): consider moving this concept into core as `AmpRoot`
 * interface that will be implemented by `AmpDoc` and `FriendlyIframeEmbed`.
 *
 * @implements {../../../src/service.Disposable}
 * @abstract
 */

var AnalyticsRoot = exports.AnalyticsRoot = function () {
  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @param {?AnalyticsRoot} parent
   */
  function AnalyticsRoot(ampdoc, parent) {
    _classCallCheck(this, AnalyticsRoot);

    /** @const */
    this.ampdoc = ampdoc;

    /** @const */
    this.parent = parent;

    /** @const */
    this.trackers_ = (0, _object.map)();

    /** @private {?./visibility-manager.VisibilityManager} */
    this.visibilityManager_ = null;
  }

  /** @override */


  _createClass(AnalyticsRoot, [{
    key: 'dispose',
    value: function dispose() {
      for (var k in this.trackers_) {
        this.trackers_[k].dispose();
        delete this.trackers_[k];
      }
      if (this.visibilityManager_) {
        this.visibilityManager_.dispose();
      }
    }

    /**
     * Returns the type of the tracker.
     * @return {string}
     * @abstract
     */

  }, {
    key: 'getType',
    value: function getType() {}

    /**
     * The root node the analytics is scoped to.
     *
     * @return {!Document|!ShadowRoot|!Element}
     * @abstract
     */

  }, {
    key: 'getRoot',
    value: function getRoot() {}

    /**
     * The viewer of analytics root
     * @return {!../../../src/service/viewer-impl.Viewer}
     */

  }, {
    key: 'getViewer',
    value: function getViewer() {
      return _services.Services.viewerForDoc(this.ampdoc);
    }

    /**
     * The root element within the analytics root.
     *
     * @return {!Element}
     */

  }, {
    key: 'getRootElement',
    value: function getRootElement() {
      var root = this.getRoot();
      return (0, _log.dev)().assertElement(root.documentElement || root.body || root);
    }

    /**
     * The host element of the analytics root.
     *
     * @return {?Element}
     * @abstract
     */

  }, {
    key: 'getHostElement',
    value: function getHostElement() {}

    /**
     * The signals for the root.
     *
     * @return {!../../../src/utils/signals.Signals}
     * @abstract
     */

  }, {
    key: 'signals',
    value: function signals() {}

    /**
     * Whether this analytics root contains the specified node.
     *
     * @param {!Node} node
     * @return {boolean}
     */

  }, {
    key: 'contains',
    value: function contains(node) {
      return this.getRoot().contains(node);
    }

    /**
     * Returns the element with the specified ID in the scope of this root.
     *
     * @param {string} unusedId
     * @return {?Element}
     * @abstract
     */

  }, {
    key: 'getElementById',
    value: function getElementById(unusedId) {}

    /**
     * Returns the tracker for the specified name and list of allowed types.
     *
     * @param {string} name
     * @param {!Object<string, function(new:./events.EventTracker)>} whitelist
     * @return {?./events.EventTracker}
     */

  }, {
    key: 'getTrackerForWhitelist',
    value: function getTrackerForWhitelist(name, whitelist) {
      var trackerProfile = whitelist[name];
      if (trackerProfile) {
        return this.getTracker(name, trackerProfile);
      }
      return null;
    }

    /**
     * Returns the tracker for the specified name and type. If the tracker
     * has not been requested before, it will be created.
     *
     * @param {string} name
     * @param {function(new:./events.CustomEventTracker, !AnalyticsRoot)|function(new:./events.ClickEventTracker, !AnalyticsRoot)|function(new:./events.SignalTracker, !AnalyticsRoot)|function(new:./events.IniLoadTracker, !AnalyticsRoot)|function(new:./events.VideoEventTracker, !AnalyticsRoot)|function(new:./events.VideoEventTracker, !AnalyticsRoot)|function(new:./events.VisibilityTracker, !AnalyticsRoot)} klass
     * @return {!./events.EventTracker}
     */

  }, {
    key: 'getTracker',
    value: function getTracker(name, klass) {
      var tracker = this.trackers_[name];
      if (!tracker) {
        tracker = new klass(this);
        this.trackers_[name] = tracker;
      }
      return tracker;
    }

    /**
     * Returns the tracker for the specified name or `null`.
     * @param {string} name
     * @return {?./events.EventTracker}
     */

  }, {
    key: 'getTrackerOptional',
    value: function getTrackerOptional(name) {
      return this.trackers_[name] || null;
    }

    /**
     * Searches the element that matches the selector within the scope of the
     * analytics root in relationship to the specified context node.
     *
     * @param {!Element} context
     * @param {string} selector DOM query selector.
     * @param {?string=} selectionMethod Allowed values are `null`,
     *   `'closest'` and `'scope'`.
     * @return {!Promise<!Element>} Element corresponding to the selector.
     */

  }, {
    key: 'getElement',
    value: function getElement(context, selector) {
      var _this = this;

      var selectionMethod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      // Special case selectors. The selection method is irrelavant.
      // And no need to wait for document ready.
      if (selector == ':root') {
        return (0, _promise.tryResolve)(function () {
          return _this.getRootElement();
        });
      }
      if (selector == ':host') {
        return new Promise(function (resolve) {
          resolve((0, _log.user)().assertElement(_this.getHostElement(), 'Element "' + selector + '" not found'));
        });
      }

      // Wait for document-ready to avoid false missed searches
      return this.ampdoc.whenReady().then(function () {
        var found = void 0;
        var result = null;
        // Query search based on the selection method.
        try {
          if (selectionMethod == 'scope') {
            found = (0, _dom.scopedQuerySelector)(context, selector);
          } else if (selectionMethod == 'closest') {
            found = (0, _dom.closestBySelector)(context, selector);
          } else {
            found = _this.getRoot().querySelector(selector);
          }
        } catch (e) {
          (0, _log.user)().assert(false, 'Invalid query selector ' + selector);
        }

        // DOM search can "look" outside the boundaries of the root, thus make
        // sure the result is contained.
        if (found && _this.contains(found)) {
          result = found;
        }
        return (0, _log.user)().assertElement(result, 'Element "' + selector + '" not found');
      });
    }

    /**
     * Searches the AMP element that matches the selector within the scope of the
     * analytics root in relationship to the specified context node.
     *
     * @param {!Element} context
     * @param {string} selector DOM query selector.
     * @param {?string=} selectionMethod Allowed values are `null`,
     *   `'closest'` and `'scope'`.
     * @return {!Promise<!AmpElement>} AMP element corresponding to the selector if found.
     */

  }, {
    key: 'getAmpElement',
    value: function getAmpElement(context, selector, selectionMethod) {
      return this.getElement(context, selector, selectionMethod).then(function (element) {
        (0, _log.user)().assert(element.classList.contains('i-amphtml-element'), 'Element "%s" is required to be an AMP element', selector);
        return element;
      });
    }

    /**
     * Creates listener-filter for DOM events to check against the specified
     * selector. If the node (or its ancestors) match the selector the listener
     * will be called.
     *
     * @param {function(!Element, !Event)} listener The first argument is the
     *   matched target node and the second is the original event.
     * @param {!Element} context
     * @param {string} selector DOM query selector.
     * @param {?string=} selectionMethod Allowed values are `null`,
     *   `'closest'` and `'scope'`.
     * @return {function(!Event)}
     */

  }, {
    key: 'createSelectiveListener',
    value: function createSelectiveListener(listener, context, selector) {
      var _this2 = this;

      var selectionMethod = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      return function (event) {
        if (selector == ':host') {
          // `:host` is not reachable via selective listener b/c event path
          // cannot be retargeted across the boundary of the embed.
          return;
        }

        // Navigate up the DOM tree to find the actual target.
        var rootElement = _this2.getRootElement();
        var isSelectAny = selector == '*';
        var isSelectRoot = selector == ':root';
        var target = event.target;

        while (target) {

          // Target must be contained by this root.
          if (!_this2.contains(target)) {
            break;
          }
          // `:scope` context must contain the target.
          if (selectionMethod == 'scope' && !isSelectRoot && !context.contains(target)) {
            break;
          }
          // `closest()` target must contain the conext.
          if (selectionMethod == 'closest' && !target.contains(context)) {
            // However, the search must continue!
            target = target.parentElement;
            continue;
          }

          // Check if the target matches the selector.
          if (isSelectAny || isSelectRoot && target == rootElement || matchesNoInline(target, selector)) {
            listener(target, event);
            // Don't fire the event multiple times even if the more than one
            // ancestor matches the selector.
            break;
          }

          target = target.parentElement;
        }
      };
    }

    /**
     * Returns the promise that will be resolved as soon as the elements within
     * the root have been loaded inside the first viewport of the root.
     * @return {!Promise}
     * @abstract
     */

  }, {
    key: 'whenIniLoaded',
    value: function whenIniLoaded() {}

    /**
     * Returns the visibility root corresponding to this analytics root (ampdoc
     * or embed). The visibility root is created lazily as needed and takes
     * care of all visibility tracking functions.
     * @return {!./visibility-manager.VisibilityManager}
     */

  }, {
    key: 'getVisibilityManager',
    value: function getVisibilityManager() {
      if (!this.visibilityManager_) {
        this.visibilityManager_ = this.createVisibilityManager();
      }
      return this.visibilityManager_;
    }

    /**
     * @return {!./visibility-manager.VisibilityManager}
     * @protected
     * @abstract
     */

  }, {
    key: 'createVisibilityManager',
    value: function createVisibilityManager() {}
  }]);

  return AnalyticsRoot;
}();

/**
 * The implementation of the analytics root for an ampdoc.
 */


var AmpdocAnalyticsRoot = exports.AmpdocAnalyticsRoot = function (_AnalyticsRoot) {
  _inherits(AmpdocAnalyticsRoot, _AnalyticsRoot);

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function AmpdocAnalyticsRoot(ampdoc) {
    _classCallCheck(this, AmpdocAnalyticsRoot);

    return _possibleConstructorReturn(this, (AmpdocAnalyticsRoot.__proto__ || Object.getPrototypeOf(AmpdocAnalyticsRoot)).call(this, ampdoc, /* parent */null));
  }

  /** @override */


  _createClass(AmpdocAnalyticsRoot, [{
    key: 'getType',
    value: function getType() {
      return 'ampdoc';
    }

    /** @override */

  }, {
    key: 'getRoot',
    value: function getRoot() {
      return this.ampdoc.getRootNode();
    }

    /** @override */

  }, {
    key: 'getHostElement',
    value: function getHostElement() {
      // ampdoc is always the root of everything - no host.
      return null;
    }

    /** @override */

  }, {
    key: 'signals',
    value: function signals() {
      return this.ampdoc.signals();
    }

    /** @override */

  }, {
    key: 'getElementById',
    value: function getElementById(id) {
      return this.ampdoc.getElementById(id);
    }

    /** @override */

  }, {
    key: 'whenIniLoaded',
    value: function whenIniLoaded() {
      var viewport = _services.Services.viewportForDoc(this.ampdoc);
      var rect = void 0;
      if ((0, _mode.getMode)(this.ampdoc.win).runtime == 'inabox') {
        // TODO(dvoytenko, #7971): This is currently addresses incorrect position
        // calculations in a in-a-box viewport where all elements are offset
        // to the bottom of the embed. The current approach, even if fixed, still
        // creates a significant probability of risk condition.
        // Once address, we can simply switch to the 0/0 approach in the `else`
        // clause.
        rect = viewport.getLayoutRect(this.getRootElement());
      } else {
        var size = viewport.getSize();
        rect = (0, _layoutRect.layoutRectLtwh)(0, 0, size.width, size.height);
      }
      return (0, _friendlyIframeEmbed.whenContentIniLoad)(this.ampdoc, this.ampdoc.win, rect);
    }

    /** @override */

  }, {
    key: 'createVisibilityManager',
    value: function createVisibilityManager() {
      return new _visibilityManager.VisibilityManagerForDoc(this.ampdoc);
    }
  }]);

  return AmpdocAnalyticsRoot;
}(AnalyticsRoot);

/**
 * The implementation of the analytics root for FIE.
 */


var EmbedAnalyticsRoot = exports.EmbedAnalyticsRoot = function (_AnalyticsRoot2) {
  _inherits(EmbedAnalyticsRoot, _AnalyticsRoot2);

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @param {!../../../src/friendly-iframe-embed.FriendlyIframeEmbed} embed
   * @param {?AnalyticsRoot} parent
   */
  function EmbedAnalyticsRoot(ampdoc, embed, parent) {
    _classCallCheck(this, EmbedAnalyticsRoot);

    /** @const */
    var _this4 = _possibleConstructorReturn(this, (EmbedAnalyticsRoot.__proto__ || Object.getPrototypeOf(EmbedAnalyticsRoot)).call(this, ampdoc, parent));

    _this4.embed = embed;
    return _this4;
  }

  /** @override */


  _createClass(EmbedAnalyticsRoot, [{
    key: 'getType',
    value: function getType() {
      return 'embed';
    }

    /** @override */

  }, {
    key: 'getRoot',
    value: function getRoot() {
      return this.embed.win.document;
    }

    /** @override */

  }, {
    key: 'getHostElement',
    value: function getHostElement() {
      return this.embed.iframe;
    }

    /** @override */

  }, {
    key: 'signals',
    value: function signals() {
      return this.embed.signals();
    }

    /** @override */

  }, {
    key: 'getElementById',
    value: function getElementById(id) {
      return this.embed.win.document.getElementById(id);
    }

    /** @override */

  }, {
    key: 'whenIniLoaded',
    value: function whenIniLoaded() {
      return this.embed.whenIniLoaded();
    }

    /** @override */

  }, {
    key: 'createVisibilityManager',
    value: function createVisibilityManager() {
      return new _visibilityManager.VisibilityManagerForEmbed(this.parent.getVisibilityManager(), this.embed);
    }
  }]);

  return EmbedAnalyticsRoot;
}(AnalyticsRoot);

/**
 * @param  {!Element} el
 * @param  {string} selector
 * @return {boolean}
 */


function matchesNoInline(el, selector) {
  try {
    return (0, _dom.matches)(el, selector);
  } catch (e) {
    (0, _log.user)().error(TAG, 'Bad query selector.', selector, e);
    return false;
  }
}

},{"../../../src/dom":27,"../../../src/friendly-iframe-embed":32,"../../../src/layout-rect":36,"../../../src/log":38,"../../../src/mode":40,"../../../src/services":53,"../../../src/utils/object":65,"../../../src/utils/promise":66,"./visibility-manager":17}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BatchingPluginFunctions = exports.batchSegmentDef = undefined;

var _mode = require('../../../src/mode');

/** @typedef {{
 *    trigger: string,
 *    timestamp: null,
 *    extraUrlParams: ?JsonObject
 *  }} */
var batchSegmentDef = exports.batchSegmentDef = void 0;

/**
 * Please register your batch plugin function below.
 * Please keep the object in alphabetic order.
 * Note: extraUrlParams passed in are not encoded. Please make sure to proper
 * encode segments and make sure the final output url is valid.
 */
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

var BatchingPluginFunctions = exports.BatchingPluginFunctions = {
  '_ping_': ping
};

/**
 * Please add your batch plugin function below in alphabetic order. All batch
 * plugin function should accept input of a string, an array of batchSegment
 * Then return a string. Note: extraUrlParams passed in are not encoded. Please
 * make sure to proper encode segments and make sure the final output url is
 * valid.
 */

// Below is a function prototype for easy copy
// /**
//  * @param {string} baseUrl
//  * @param {Array<!batchSegmentDef>} batchSegments
//  * @return {string}
//  */
// function ping(baseUrl, batchSegments) {}

/**
 * @param {string} unusedBaseUrlForTesting
 * @param {Array<!batchSegmentDef>} unusedBatchSegmentsForTesting
 * @return {string}
 */
function ping(unusedBaseUrlForTesting, unusedBatchSegmentsForTesting) {
  if ((0, _mode.getMode)().localDev || (0, _mode.getMode)().test) {
    return 'testFinalUrl';
  }
  throw new Error('batchPlugin _ping_ is for testing only');
}

},{"../../../src/mode":40}],5:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsConfig = undefined;

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

exports.mergeObjects = mergeObjects;
exports.expandConfigRequest = expandConfigRequest;

var _vendors = require('./vendors');

var _services = require('../../../src/services');

var _url = require('../../../src/url');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _mode = require('../../../src/mode');

var _types = require('../../../src/types');

var _dom = require('../../../src/dom');

var _json = require('../../../src/json');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'analytics-config';

var AnalyticsConfig = exports.AnalyticsConfig = function () {

  /**
   * @param {!Element} element
   */
  function AnalyticsConfig(element) {
    _classCallCheck(this, AnalyticsConfig);

    /** @private {!Element} */
    this.element_ = element;

    /** @private {?Window} */
    this.win_ = null;

    /**
     * @const {!JsonObject} Copied here for tests.
     * @private
     */
    this.predefinedConfig_ = _vendors.ANALYTICS_CONFIG;

    /**
     * @private {JsonObject}
     */
    this.config_ = (0, _object.dict)();

    /**
     * @private {JsonObject}
     */
    this.remoteConfig_ = (0, _object.dict)();

    /** @private {boolean} */
    this.isSandbox_ = false;
  }

  /**
   * @return {!Promise<JsonObject>}
   */


  _createClass(AnalyticsConfig, [{
    key: 'loadConfig',
    value: function loadConfig() {
      var _this = this;

      this.win_ = this.element_.ownerDocument.defaultView;
      this.isSandbox_ = this.element_.hasAttribute('sandbox');

      return this.fetchRemoteConfig_().then(this.processConfigs_.bind(this)).then(function () {
        return _this.config_;
      });
    }

    /**
     * Returns a promise that resolves when configuration is re-written if
     * configRewriter is configured by a vendor.
     *
     * @private
     * @return {!Promise<undefined>}
     */

  }, {
    key: 'processConfigs_',
    value: function processConfigs_() {
      var _this2 = this;

      var configRewriterUrl = this.getConfigRewriter_()['url'];

      var config = (0, _object.dict)({});
      var inlineConfig = this.getInlineConfigNoInline();
      this.validateTransport_(inlineConfig);
      mergeObjects(inlineConfig, config);
      mergeObjects(this.remoteConfig_, config);

      if (!configRewriterUrl || this.isSandbox_) {
        this.config_ = this.mergeConfigs_(config);
        // use default configuration merge.
        return Promise.resolve();
      }

      (0, _url.assertHttpsUrl)(configRewriterUrl, this.element_);
      var TAG = this.getName_();
      (0, _log.dev)().fine(TAG, 'Rewriting config', configRewriterUrl);

      var fetchConfig = {
        method: 'POST',
        body: config,
        requireAmpResponseSourceOrigin: false
      };
      if (this.element_.hasAttribute('data-credentials')) {
        fetchConfig.credentials = this.element_.getAttribute('data-credentials');
      }
      return _services.Services.urlReplacementsForDoc(this.element_).expandUrlAsync(configRewriterUrl).then(function (expandedUrl) {
        return _services.Services.xhrFor((0, _types.toWin)(_this2.win_)).fetchJson(expandedUrl, fetchConfig);
      }).then(function (res) {
        return res.json();
      }).then(function (jsonValue) {
        _this2.config_ = _this2.mergeConfigs_(jsonValue);
        (0, _log.dev)().fine(TAG, 'Configuration re-written', configRewriterUrl);
      }, function (err) {
        (0, _log.user)().error(TAG, 'Error rewriting configuration: ', configRewriterUrl, err);
      });
    }

    /**
     * Returns a promise that resolves when remote config is ready (or
     * immediately if no remote config is specified.)
     * @private
     * @return {!Promise<undefined>}
     */

  }, {
    key: 'fetchRemoteConfig_',
    value: function fetchRemoteConfig_() {
      var _this3 = this;

      var remoteConfigUrl = this.element_.getAttribute('config');
      if (!remoteConfigUrl || this.isSandbox_) {
        return Promise.resolve();
      }
      (0, _url.assertHttpsUrl)(remoteConfigUrl, this.element_);
      var TAG = this.getName_();
      (0, _log.dev)().fine(TAG, 'Fetching remote config', remoteConfigUrl);
      var fetchConfig = {
        requireAmpResponseSourceOrigin: false
      };
      if (this.element_.hasAttribute('data-credentials')) {
        fetchConfig.credentials = this.element_.getAttribute('data-credentials');
      }
      return _services.Services.urlReplacementsForDoc(this.element_).expandUrlAsync(remoteConfigUrl).then(function (expandedUrl) {
        remoteConfigUrl = expandedUrl;
        return _services.Services.xhrFor((0, _types.toWin)(_this3.win_)).fetchJson(remoteConfigUrl, fetchConfig);
      }).then(function (res) {
        return res.json();
      }).then(function (jsonValue) {
        _this3.remoteConfig_ = jsonValue;
        (0, _log.dev)().fine(TAG, 'Remote config loaded', remoteConfigUrl);
      }, function (err) {
        (0, _log.user)().error(TAG, 'Error loading remote config: ', remoteConfigUrl, err);
      });
    }

    /**
     * Merges various sources of configs and stores them in a member variable.
     *
     * Order of precedence for configs from highest to lowest:
     * - Remote config: specified through an attribute of the tag.
     * - Inline config: specified insize the tag.
     * - Predefined config: Defined as part of the platform.
     * - Default config: Built-in config shared by all amp-analytics tags.
     *
     * @private
     * @param {!JsonObject} rewrittenConfig
     * @return {!JsonObject}
     */

  }, {
    key: 'mergeConfigs_',
    value: function mergeConfigs_(rewrittenConfig) {
      // Initialize config with analytics related vars.
      var config = (0, _object.dict)({
        'vars': {
          'requestCount': 0
        }
      });
      var defaultConfig = this.predefinedConfig_['default'] || {};
      mergeObjects(expandConfigRequest(defaultConfig), config);
      mergeObjects(expandConfigRequest(this.getTypeConfig_()), config,
      /* predefined */true);
      mergeObjects(expandConfigRequest(rewrittenConfig), config);
      return config;
    }

    /**
     * Reads configRewriter from a vendor config.
     * @return {!JsonObject}
     */

  }, {
    key: 'getConfigRewriter_',
    value: function getConfigRewriter_() {
      return this.getTypeConfig_()['configRewriter'] || {};
    }

    /**
     * Reads a vendor configuration.
     * @return {!JsonObject}
     */

  }, {
    key: 'getTypeConfig_',
    value: function getTypeConfig_() {
      var type = this.element_.getAttribute('type');
      return this.predefinedConfig_[type] || {};
    }

    /**
     * @private
     * @return {!JsonObject}
     */

  }, {
    key: 'getInlineConfigNoInline',
    value: function getInlineConfigNoInline() {
      if (this.element_.CONFIG) {
        // If the analytics element is created by runtime, return cached config.
        return this.element_.CONFIG;
      }
      var inlineConfig = {};
      var TAG = this.getName_();
      try {
        var children = this.element_.children;

        if (children.length == 1) {
          var child = children[0];
          if ((0, _dom.isJsonScriptTag)(child)) {
            inlineConfig = (0, _json.parseJson)(children[0].textContent);
          } else {
            (0, _log.user)().error(TAG, 'The analytics config should ' + 'be put in a <script> tag with type="application/json"');
          }
        } else if (children.length > 1) {
          (0, _log.user)().error(TAG, 'The tag should contain only one' + ' <script> child.');
        }
      } catch (er) {
        (0, _log.user)().error(TAG, 'Analytics config could not be ' + 'parsed. Is it in a valid JSON format?', er);
      }
      return (/** @type {!JsonObject} */inlineConfig
      );
    }

    /**
     * Validates transport configuration.
     * @param {!JsonObject} inlineConfig
     */

  }, {
    key: 'validateTransport_',
    value: function validateTransport_(inlineConfig) {
      var type = this.element_.getAttribute('type');
      if (this.predefinedConfig_[type]) {
        // TODO(zhouyx, #7096) Track overwrite percentage. Prevent transport
        // overwriting
        if (inlineConfig['transport'] || this.remoteConfig_['transport']) {
          var _TAG = this.getName_();
          (0, _log.user)().error(_TAG, 'Inline or remote config should not ' + 'overwrite vendor transport settings');
        }
      }

      // Do NOT allow inline or remote config to use 'transport: iframe'
      if (inlineConfig['transport'] && inlineConfig['transport']['iframe']) {
        (0, _log.user)().error(TAG, 'Inline configs are not allowed to ' + 'specify transport iframe');
        if (!(0, _mode.getMode)().localDev || (0, _mode.getMode)().test) {
          inlineConfig['transport']['iframe'] = undefined;
        }
      }

      if (this.remoteConfig_['transport'] && this.remoteConfig_['transport']['iframe']) {
        (0, _log.user)().error(TAG, 'Remote configs are not allowed to ' + 'specify transport iframe');
        this.remoteConfig_['transport']['iframe'] = undefined;
      }
    }

    /**
     * @return {string} Returns a string to identify this tag. May not be unique
     * if the element id is not unique.
     * @private
     */

  }, {
    key: 'getName_',
    value: function getName_() {
      return 'AmpAnalytics ' + (this.element_.getAttribute('id') || '<unknown id>');
    }
  }]);

  return AnalyticsConfig;
}();

/**
 * Merges two objects. If the value is array or plain object, the values are
 * merged otherwise the value is overwritten.
 *
 * @param {Object|Array} from Object or array to merge from
 * @param {Object|Array} to Object or Array to merge into
 * @param {boolean=} opt_predefinedConfig
 */


function mergeObjects(from, to, opt_predefinedConfig) {
  if (to === null || to === undefined) {
    to = {};
  }

  // Assert that optouts are allowed only in predefined configs.
  // The last expression adds an exception of known, safe optout function
  // that is already being used in the wild.
  (0, _log.user)().assert(opt_predefinedConfig || !from || !from['optout'] || from['optout'] == '_gaUserPrefs.ioo', 'optout property is only available to vendor config.');

  for (var property in from) {
    (0, _log.user)().assert(opt_predefinedConfig || property != 'iframePing', 'iframePing config is only available to vendor config.');
    // Only deal with own properties.
    if ((0, _object.hasOwn)(from, property)) {
      if ((0, _types.isArray)(from[property])) {
        if (!(0, _types.isArray)(to[property])) {
          to[property] = [];
        }
        to[property] = mergeObjects(from[property], to[property], opt_predefinedConfig);
      } else if ((0, _types.isObject)(from[property])) {
        if (!(0, _types.isObject)(to[property])) {
          to[property] = {};
        }
        to[property] = mergeObjects(from[property], to[property], opt_predefinedConfig);
      } else {
        to[property] = from[property];
      }
    }
  }
  return to;
}

/**
 * Expand config's request to object
 * @param {!JsonObject} config
 * @visibleForTesting
 */
function expandConfigRequest(config) {
  if (!config['requests']) {
    return config;
  }
  for (var k in config['requests']) {
    if ((0, _object.hasOwn)(config['requests'], k)) {
      config['requests'][k] = expandRequestStr(config['requests'][k]);
    }
  }
  return config;
}

/**
 * Expand single request to an object
 * @param {!JsonObject} request
 */
function expandRequestStr(request) {
  if ((0, _types.isObject)(request)) {
    return request;
  }
  return {
    'baseUrl': request
  };
}

},{"../../../src/dom":27,"../../../src/json":35,"../../../src/log":38,"../../../src/mode":40,"../../../src/services":53,"../../../src/types":57,"../../../src/url":60,"../../../src/utils/object":65,"./vendors":16}],6:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityTracker = exports.VideoEventTracker = exports.TimerEventTracker = exports.IniLoadTracker = exports.SignalTracker = exports.ClickEventTracker = exports.CustomEventTracker = exports.EventTracker = exports.AnalyticsEvent = exports.AnalyticsEventType = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

exports.getTrackerKeyName = getTrackerKeyName;
exports.getTrackerTypesForParentType = getTrackerTypesForParentType;

var _commonSignals = require('../../../src/common-signals');

var _observable = require('../../../src/observable');

var _videoInterface = require('../../../src/video-interface');

var _log = require('../../../src/log');

var _eventHelper = require('../../../src/event-helper');

var _dom = require('../../../src/dom');

var _object = require('../../../src/utils/object');

var _types = require('../../../src/types');

var _string = require('../../../src/string');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MIN_TIMER_INTERVAL_SECONDS = 0.5;
var DEFAULT_MAX_TIMER_LENGTH_SECONDS = 7200;
var VARIABLE_DATA_ATTRIBUTE_KEY = /^vars(.+)/;
var NO_UNLISTEN = function NO_UNLISTEN() {};
var TAG = 'analytics-events';

/**
 * Events that can result in analytics data to be sent.
 * @const
 * @enum {string}
 */
var AnalyticsEventType = exports.AnalyticsEventType = {
  VISIBLE: 'visible',
  CLICK: 'click',
  TIMER: 'timer',
  SCROLL: 'scroll',
  HIDDEN: 'hidden'
};

var ALLOWED_FOR_ALL_ROOT_TYPES = ['ampdoc', 'embed'];

/**
 * Events that can result in analytics data to be sent.
 * @const {!Object<string, {
 *     name: string,
 *     allowedFor: !Array<string>,
 *     klass: function(new:./events.EventTracker)
 *   }>}
 */
var TRACKER_TYPE = Object.freeze({
  'click': {
    name: 'click',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer']),
    // Escape the temporal dead zone by not referencing a class directly.
    klass: function klass(root) {
      return new ClickEventTracker(root);
    }
  },
  'custom': {
    name: 'custom',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer']),
    klass: function klass(root) {
      return new CustomEventTracker(root);
    }
  },
  'render-start': {
    name: 'render-start',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer', 'visible']),
    klass: function klass(root) {
      return new SignalTracker(root);
    }
  },
  'ini-load': {
    name: 'ini-load',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer', 'visible']),
    klass: function klass(root) {
      return new IniLoadTracker(root);
    }
  },
  'timer': {
    name: 'timer',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES,
    klass: function klass(root) {
      return new TimerEventTracker(root);
    }
  },
  'visible': {
    name: 'visible',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer']),
    klass: function klass(root) {
      return new VisibilityTracker(root);
    }
  },
  'hidden': {
    name: 'visible', // Reuse tracker with visibility
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer']),
    klass: function klass(root) {
      return new VisibilityTracker(root);
    }
  },
  'video': {
    name: 'video',
    allowedFor: ALLOWED_FOR_ALL_ROOT_TYPES.concat(['timer']),
    klass: function klass(root) {
      return new VideoEventTracker(root);
    }
  }
});

/**
 * @param {string} triggerType
 * @return {boolean}
 */
function isVideoTriggerType(triggerType) {
  return (0, _string.startsWith)(triggerType, 'video');
}

/**
 * @param {string} triggerType
 * @return {boolean}
 */
function isReservedTriggerType(triggerType) {
  return !!TRACKER_TYPE[triggerType] || (0, _types.isEnumValue)(AnalyticsEventType, triggerType);
}

/**
 * @param {string} eventType
 * @return {string}
 */
function getTrackerKeyName(eventType) {
  if (isVideoTriggerType(eventType)) {
    return 'video';
  }
  if (!isReservedTriggerType(eventType)) {
    return 'custom';
  }
  return (0, _object.hasOwn)(TRACKER_TYPE, eventType) ? TRACKER_TYPE[eventType].name : eventType;
}

/**
 * @param {string} parentType
 * @return {!Object<string, function(new:EventTracker)>}
 */
function getTrackerTypesForParentType(parentType) {
  var filtered = {};
  Object.keys(TRACKER_TYPE).forEach(function (key) {
    if ((0, _object.hasOwn)(TRACKER_TYPE, key) && TRACKER_TYPE[key].allowedFor.indexOf(parentType) != -1) {
      filtered[key] = TRACKER_TYPE[key].klass;
    }
  }, this);
  return filtered;
}

/**
 * @interface
 */

var SignalTrackerDef = function () {
  function SignalTrackerDef() {
    _classCallCheck(this, SignalTrackerDef);
  }

  _createClass(SignalTrackerDef, [{
    key: 'getRootSignal',

    /**
     * @param {string} unusedEventType
     * @return {!Promise}
     */
    value: function getRootSignal(unusedEventType) {}

    /**
     * @param {string} unusedEventType
     * @param {!Element} unusedElement
     * @return {!Promise}
     */

  }, {
    key: 'getElementSignal',
    value: function getElementSignal(unusedEventType, unusedElement) {}
  }]);

  return SignalTrackerDef;
}();

/**
 * The analytics event.
 */


var AnalyticsEvent =
/**
 * @param {!Element} target The most relevant target element.
 * @param {string} type The type of event.
 * @param {!Object<string, string>=} opt_vars A map of vars and their values.
 */
exports.AnalyticsEvent = function AnalyticsEvent(target, type, opt_vars) {
  _classCallCheck(this, AnalyticsEvent);

  /** @const */
  this.target = target;
  /** @const */
  this.type = type;
  /** @const */
  this.vars = opt_vars || Object.create(null);
};

/**
 * The base class for all trackers. A tracker tracks all events of the same
 * type for a single analytics root.
 *
 * @implements {../../../src/service.Disposable}
 * @abstract
 * @visibleForTesting
 */


var EventTracker = exports.EventTracker = function () {
  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function EventTracker(root) {
    _classCallCheck(this, EventTracker);

    /** @const */
    this.root = root;
  }

  /** @override @abstract */


  _createClass(EventTracker, [{
    key: 'dispose',
    value: function dispose() {}

    /**
     * @param {!Element} unusedContext
     * @param {string} unusedEventType
     * @param {!JsonObject} unusedConfig
     * @param {function(!AnalyticsEvent)} unusedListener
     * @return {!UnlistenDef}
     * @abstract
     */

  }, {
    key: 'add',
    value: function add(unusedContext, unusedEventType, unusedConfig, unusedListener) {}
  }]);

  return EventTracker;
}();

/**
 * Tracks custom events.
 */


var CustomEventTracker = exports.CustomEventTracker = function (_EventTracker) {
  _inherits(CustomEventTracker, _EventTracker);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function CustomEventTracker(root) {
    _classCallCheck(this, CustomEventTracker);

    /** @const @private {!Object<string, !Observable<!AnalyticsEvent>>} */
    var _this = _possibleConstructorReturn(this, (CustomEventTracker.__proto__ || Object.getPrototypeOf(CustomEventTracker)).call(this, root));

    _this.observables_ = {};

    /**
     * Early events have to be buffered because there's no way to predict
     * how fast all `amp-analytics` elements will be instrumented.
     * @private {!Object<string, !Array<!AnalyticsEvent>>|undefined}
     */
    _this.buffer_ = {};

    /**
     * Sandbox events get their own buffer, because handler to those events will
     * be added after parent element's layout. (Time varies, can be later than
     * 10s) sandbox events buffer will never expire but will cleared when
     * handler is ready.
     * @private {!Object<string, !Array<!AnalyticsEvent>|undefined>|undefined}
     */
    _this.sandboxBuffer_ = {};

    // Stop buffering of custom events after 10 seconds. Assumption is that all
    // `amp-analytics` elements will have been instrumented by this time.
    setTimeout(function () {
      _this.buffer_ = undefined;
    }, 10000);
    return _this;
  }

  /** @override */


  _createClass(CustomEventTracker, [{
    key: 'dispose',
    value: function dispose() {
      this.buffer_ = undefined;
      this.sandboxBuffer_ = undefined;
      for (var k in this.observables_) {
        this.observables_[k].removeAll();
      }
    }

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var _this2 = this;

      var selector = config['selector'];
      if (!selector) {
        selector = ':root';
      }
      var selectionMethod = config['selectionMethod'] || null;

      var targetReady = this.root.getElement(context, selector, selectionMethod);

      var isSandboxEvent = (0, _string.startsWith)(eventType, 'sandbox-');

      // Push recent events if any.
      var buffer = isSandboxEvent ? this.sandboxBuffer_ && this.sandboxBuffer_[eventType] : this.buffer_ && this.buffer_[eventType];

      if (buffer) {
        var bufferLength = buffer.length;
        targetReady.then(function (target) {
          setTimeout(function () {
            for (var i = 0; i < bufferLength; i++) {
              var event = buffer[i];
              if (target.contains(event.target)) {
                listener(event);
              }
            }
            if (isSandboxEvent) {
              // We assume sandbox event will only has single listener.
              // It is safe to clear buffer once handler is ready.
              _this2.sandboxBuffer_[eventType] = undefined;
            }
          }, 1);
        });
      }

      var observables = this.observables_[eventType];
      if (!observables) {
        observables = new _observable.Observable();
        this.observables_[eventType] = observables;
      }

      return this.observables_[eventType].add(function (event) {
        // Wait for target selected
        targetReady.then(function (target) {
          if (target.contains(event.target)) {
            listener(event);
          }
        });
      });
    }

    /**
     * Triggers a custom event for the associated root.
     * @param {!AnalyticsEvent} event
     */

  }, {
    key: 'trigger',
    value: function trigger(event) {
      var eventType = event.type;
      var isSandboxEvent = (0, _string.startsWith)(eventType, 'sandbox-');
      var observables = this.observables_[eventType];

      // If listeners already present - trigger right away.
      if (observables) {
        observables.fire(event);
        if (isSandboxEvent) {
          // No need to buffer sandbox event if handler ready
          return;
        }
      }

      // Create buffer and enqueue buffer if needed
      if (isSandboxEvent) {
        this.sandboxBuffer_[eventType] = this.sandboxBuffer_[eventType] || [];
        this.sandboxBuffer_[eventType].push(event);
      } else {
        // Check if buffer has expired
        if (this.buffer_) {
          this.buffer_[eventType] = this.buffer_[eventType] || [];
          this.buffer_[eventType].push(event);
        }
      }
    }
  }]);

  return CustomEventTracker;
}(EventTracker);

/**
 * Tracks click events.
 */


var ClickEventTracker = exports.ClickEventTracker = function (_EventTracker2) {
  _inherits(ClickEventTracker, _EventTracker2);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function ClickEventTracker(root) {
    _classCallCheck(this, ClickEventTracker);

    /** @private {!Observable<!Event>} */
    var _this3 = _possibleConstructorReturn(this, (ClickEventTracker.__proto__ || Object.getPrototypeOf(ClickEventTracker)).call(this, root));

    _this3.clickObservable_ = new _observable.Observable();

    /** @private @const {function(!Event)} */
    _this3.boundOnClick_ = _this3.clickObservable_.fire.bind(_this3.clickObservable_);
    _this3.root.getRoot().addEventListener('click', _this3.boundOnClick_);
    return _this3;
  }

  /** @override */


  _createClass(ClickEventTracker, [{
    key: 'dispose',
    value: function dispose() {
      this.root.getRoot().removeEventListener('click', this.boundOnClick_);
      this.clickObservable_.removeAll();
    }

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var selector = (0, _log.user)().assert(config['selector'], 'Missing required selector on click trigger');
      var selectionMethod = config['selectionMethod'] || null;
      return this.clickObservable_.add(this.root.createSelectiveListener(this.handleClick_.bind(this, listener), context.parentElement || context, selector, selectionMethod));
    }

    /**
     * @param {function(!AnalyticsEvent)} listener
     * @param {!Element} target
     * @param {!Event} unusedEvent
     * @private
     */

  }, {
    key: 'handleClick_',
    value: function handleClick_(listener, target, unusedEvent) {
      var params = (0, _dom.getDataParamsFromAttributes)(target,
      /* computeParamNameFunc */undefined, VARIABLE_DATA_ATTRIBUTE_KEY);
      listener(new AnalyticsEvent(target, 'click', params));
    }
  }]);

  return ClickEventTracker;
}(EventTracker);

/**
 * Tracks events based on signals.
 * @implements {SignalTrackerDef}
 */


var SignalTracker = exports.SignalTracker = function (_EventTracker3) {
  _inherits(SignalTracker, _EventTracker3);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function SignalTracker(root) {
    _classCallCheck(this, SignalTracker);

    return _possibleConstructorReturn(this, (SignalTracker.__proto__ || Object.getPrototypeOf(SignalTracker)).call(this, root));
  }

  /** @override */


  _createClass(SignalTracker, [{
    key: 'dispose',
    value: function dispose() {}

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var _this5 = this;

      var target = void 0;
      var signalsPromise = void 0;
      var selector = config['selector'] || ':root';
      if (selector == ':root' || selector == ':host') {
        // Root selectors are delegated to analytics roots.
        target = this.root.getRootElement();
        signalsPromise = this.getRootSignal(eventType);
      } else {
        // Look for the AMP-element. Wait for DOM to be fully parsed to avoid
        // false missed searches.
        var selectionMethod = config['selectionMethod'];
        signalsPromise = this.root.getAmpElement(context.parentElement || context, selector, selectionMethod).then(function (element) {
          target = element;
          return _this5.getElementSignal(eventType, target);
        });
      }

      // Wait for the target and the event signal.
      signalsPromise.then(function () {
        listener(new AnalyticsEvent(target, eventType));
      });
      return NO_UNLISTEN;
    }

    /** @override */

  }, {
    key: 'getRootSignal',
    value: function getRootSignal(eventType) {
      return this.root.signals().whenSignal(eventType);
    }

    /** @override */

  }, {
    key: 'getElementSignal',
    value: function getElementSignal(eventType, element) {
      if (typeof element.signals != 'function') {
        return Promise.resolve();
      }
      return element.signals().whenSignal(eventType);
    }
  }]);

  return SignalTracker;
}(EventTracker);

/**
 * Tracks when the elements in the first viewport has been loaded - "ini-load".
 * @implements {SignalTrackerDef}
 */


var IniLoadTracker = exports.IniLoadTracker = function (_EventTracker4) {
  _inherits(IniLoadTracker, _EventTracker4);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function IniLoadTracker(root) {
    _classCallCheck(this, IniLoadTracker);

    return _possibleConstructorReturn(this, (IniLoadTracker.__proto__ || Object.getPrototypeOf(IniLoadTracker)).call(this, root));
  }

  /** @override */


  _createClass(IniLoadTracker, [{
    key: 'dispose',
    value: function dispose() {}

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var _this7 = this;

      var target = void 0;
      var promise = void 0;
      var selector = config['selector'] || ':root';
      if (selector == ':root' || selector == ':host') {
        // Root selectors are delegated to analytics roots.
        target = this.root.getRootElement();
        promise = this.getRootSignal();
      } else {
        // An AMP-element. Wait for DOM to be fully parsed to avoid
        // false missed searches.
        var selectionMethod = config['selectionMethod'];
        promise = this.root.getAmpElement(context.parentElement || context, selector, selectionMethod).then(function (element) {
          target = element;
          return _this7.getElementSignal('ini-load', target);
        });
      }
      // Wait for the target and the event.
      promise.then(function () {
        listener(new AnalyticsEvent(target, eventType));
      });
      return NO_UNLISTEN;
    }

    /** @override */

  }, {
    key: 'getRootSignal',
    value: function getRootSignal() {
      return this.root.whenIniLoaded();
    }

    /** @override */

  }, {
    key: 'getElementSignal',
    value: function getElementSignal(unusedEventType, element) {
      if (typeof element.signals != 'function') {
        return Promise.resolve();
      }
      var signals = element.signals();
      return Promise.race([signals.whenSignal(_commonSignals.CommonSignals.INI_LOAD), signals.whenSignal(_commonSignals.CommonSignals.LOAD_END)]);
    }
  }]);

  return IniLoadTracker;
}(EventTracker);

/**
 * Timer event handler.
 */


var TimerEventHandler = function () {
  /**
   * @param {JsonObject} timerSpec The timer specification.
   * @param {function(): UnlistenDef=} opt_startBuilder Factory for building
   *     start trackers for this timer.
   * @param {function(): UnlistenDef=} opt_stopBuilder Factory for building stop
   *     trackers for this timer.
   */
  function TimerEventHandler(timerSpec, opt_startBuilder, opt_stopBuilder) {
    _classCallCheck(this, TimerEventHandler);

    /** @private {number|undefined} */
    this.intervalId_ = undefined;

    (0, _log.user)().assert('interval' in timerSpec, 'Timer interval specification required');
    /** @private @const {number} */
    this.intervalLength_ = Number(timerSpec['interval']) || 0;
    (0, _log.user)().assert(this.intervalLength_ >= MIN_TIMER_INTERVAL_SECONDS, 'Bad timer interval specification');

    /** @private @const {number} */
    this.maxTimerLength_ = 'maxTimerLength' in timerSpec ? Number(timerSpec['maxTimerLength']) : DEFAULT_MAX_TIMER_LENGTH_SECONDS;
    (0, _log.user)().assert(this.maxTimerLength_ > 0, 'Bad maxTimerLength specification');

    /** @private @const {boolean} */
    this.maxTimerInSpec_ = 'maxTimerLength' in timerSpec;

    /** @private @const {boolean} */
    this.callImmediate_ = 'immediate' in timerSpec ? Boolean(timerSpec['immediate']) : true;

    /** @private {?function()} */
    this.intervalCallback_ = null;

    /** @private {?UnlistenDef} */
    this.unlistenStart_ = null;

    /** @private {?UnlistenDef} */
    this.unlistenStop_ = null;

    /** @private @const {?function(): UnlistenDef} */
    this.startBuilder_ = opt_startBuilder || null;

    /** @private @const {?function(): UnlistenDef} */
    this.stopBuilder_ = opt_stopBuilder || null;

    /** @private {number|undefined} */
    this.startTime_ = undefined; // milliseconds

    /** @private {number|undefined} */
    this.lastRequestTime_ = undefined; // milliseconds
  }

  /**
   * @param {function()} startTimer
   */


  _createClass(TimerEventHandler, [{
    key: 'init',
    value: function init(startTimer) {
      if (!this.startBuilder_) {
        // Timer starts on load.
        startTimer();
      } else {
        // Timer starts on event.
        this.listenForStart_();
      }
    }

    /**
     * Unlistens for start and stop.
     */

  }, {
    key: 'dispose',
    value: function dispose() {
      this.unlistenForStop_();
      this.unlistenForStart_();
    }

    /** @private */

  }, {
    key: 'listenForStart_',
    value: function listenForStart_() {
      if (this.startBuilder_) {
        this.unlistenStart_ = this.startBuilder_();
      }
    }

    /** @private */

  }, {
    key: 'unlistenForStart_',
    value: function unlistenForStart_() {
      if (this.unlistenStart_) {
        this.unlistenStart_();
        this.unlistenStart_ = null;
      }
    }

    /** @private */

  }, {
    key: 'listenForStop_',
    value: function listenForStop_() {
      if (this.stopBuilder_) {
        try {
          this.unlistenStop_ = this.stopBuilder_();
        } catch (e) {
          this.dispose(); // Stop timer and then throw error.
          throw e;
        }
      }
    }

    /** @private */

  }, {
    key: 'unlistenForStop_',
    value: function unlistenForStop_() {
      if (this.unlistenStop_) {
        this.unlistenStop_();
        this.unlistenStop_ = null;
      }
    }

    /** @return {boolean} */

  }, {
    key: 'isRunning',
    value: function isRunning() {
      return !!this.intervalId_;
    }

    /**
     * @param {!Window} win
     * @param {function()} timerCallback
     * @param {function()} timeoutCallback
     */

  }, {
    key: 'startIntervalInWindow',
    value: function startIntervalInWindow(win, timerCallback, timeoutCallback) {
      if (this.isRunning()) {
        return;
      }
      this.startTime_ = Date.now();
      this.lastRequestTime_ = undefined;
      this.intervalCallback_ = timerCallback;
      this.intervalId_ = win.setInterval(function () {
        timerCallback();
      }, this.intervalLength_ * 1000);

      // If there's no way to turn off the timer, cap it.
      if (!this.stopBuilder_ || this.stopBuilder_ && this.maxTimerInSpec_) {
        win.setTimeout(function () {
          timeoutCallback();
        }, this.maxTimerLength_ * 1000);
      }

      this.unlistenForStart_();
      if (this.callImmediate_) {
        timerCallback();
      }
      this.listenForStop_();
    }

    /**
     * @param {!Window} win
     * @restricted
     */

  }, {
    key: 'stopTimer_',
    value: function stopTimer_(win) {
      if (!this.isRunning()) {
        return;
      }
      this.intervalCallback_();
      this.intervalCallback_ = null;
      win.clearInterval(this.intervalId_);
      this.intervalId_ = undefined;
      this.lastRequestTime_ = undefined;
      this.unlistenForStop_();
      this.listenForStart_();
    }

    /** @private @return {number} */

  }, {
    key: 'calculateDuration_',
    value: function calculateDuration_() {
      if (this.startTime_) {
        return Date.now() - (this.lastRequestTime_ || this.startTime_);
      }
      return 0;
    }

    /** @return {{timerDuration: number, timerStart: number}} */

  }, {
    key: 'getTimerVars',
    value: function getTimerVars() {
      var timerDuration = 0;
      if (this.isRunning()) {
        timerDuration = this.calculateDuration_();
        this.lastRequestTime_ = Date.now();
      }
      return {
        'timerDuration': timerDuration,
        'timerStart': this.startTime_ || 0
      };
    }
  }]);

  return TimerEventHandler;
}();

/**
 * Tracks timer events.
 */


var TimerEventTracker = exports.TimerEventTracker = function (_EventTracker5) {
  _inherits(TimerEventTracker, _EventTracker5);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function TimerEventTracker(root) {
    _classCallCheck(this, TimerEventTracker);

    /** @const @private {!Object<number, TimerEventHandler>} */
    var _this8 = _possibleConstructorReturn(this, (TimerEventTracker.__proto__ || Object.getPrototypeOf(TimerEventTracker)).call(this, root));

    _this8.trackers_ = {};

    /** @private {number} */
    _this8.timerIdSequence_ = 1;
    return _this8;
  }

  /**
   * @return {!Array<number>}
   * @visibleForTesting
   */


  _createClass(TimerEventTracker, [{
    key: 'getTrackedTimerKeys',
    value: function getTrackedTimerKeys() {
      return (/** @type {!Array<number>} */Object.keys(this.trackers_)
      );
    }

    /** @override */

  }, {
    key: 'dispose',
    value: function dispose() {
      var _this9 = this;

      this.getTrackedTimerKeys().forEach(function (timerId) {
        _this9.removeTracker_(timerId);
      });
    }

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var _this10 = this;

      var timerSpec = config['timerSpec'];
      (0, _log.user)().assert(timerSpec && (typeof timerSpec === 'undefined' ? 'undefined' : _typeof(timerSpec)) == 'object', 'Bad timer specification');
      var timerStart = 'startSpec' in timerSpec ? timerSpec['startSpec'] : null;
      (0, _log.user)().assert(!timerStart || (typeof timerStart === 'undefined' ? 'undefined' : _typeof(timerStart)) == 'object', 'Bad timer start specification');
      var timerStop = 'stopSpec' in timerSpec ? timerSpec['stopSpec'] : null;
      (0, _log.user)().assert(!timerStart && !timerStop || (typeof timerStop === 'undefined' ? 'undefined' : _typeof(timerStop)) == 'object', 'Bad timer stop specification');

      var timerId = this.generateTimerId_();
      var startBuilder = void 0;
      var stopBuilder = void 0;
      if (timerStart) {
        var startTracker = this.getTracker_(timerStart);
        (0, _log.user)().assert(startTracker, 'Cannot track timer start');
        startBuilder = startTracker.add.bind(startTracker, context, timerStart['on'], timerStart, this.handleTimerToggle_.bind(this, timerId, eventType, listener));
      }
      if (timerStop) {
        var stopTracker = this.getTracker_(timerStop);
        (0, _log.user)().assert(stopTracker, 'Cannot track timer stop');
        stopBuilder = stopTracker.add.bind(stopTracker, context, timerStop['on'], timerStop, this.handleTimerToggle_.bind(this, timerId, eventType, listener));
      }

      var timerHandler = new TimerEventHandler(timerSpec, startBuilder, stopBuilder);
      this.trackers_[timerId] = timerHandler;

      timerHandler.init(this.startTimer_.bind(this, timerId, eventType, listener));
      return function () {
        _this10.removeTracker_(timerId);
      };
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'generateTimerId_',
    value: function generateTimerId_() {
      return ++this.timerIdSequence_;
    }

    /**
     * @param {!JsonObject} config
     * @return {?EventTracker}
     * @private
     */

  }, {
    key: 'getTracker_',
    value: function getTracker_(config) {
      var eventType = (0, _log.user)().assertString(config['on']);
      var trackerKey = getTrackerKeyName(eventType);

      return this.root.getTrackerForWhitelist(trackerKey, getTrackerTypesForParentType('timer'));
    }

    /**
     * Toggles which listeners are active depending on timer state, so no race
     * conditions can occur in the case where the timer starts and stops on the
     * same event type from the same target.
     * @param {number} timerId
     * @param {string} eventType
     * @param {function(!AnalyticsEvent)} listener
     * @private
     */

  }, {
    key: 'handleTimerToggle_',
    value: function handleTimerToggle_(timerId, eventType, listener) {
      var timerHandler = this.trackers_[timerId];
      if (!timerHandler) {
        return;
      }
      if (timerHandler.isRunning()) {
        this.stopTimer_(timerId);
      } else {
        this.startTimer_(timerId, eventType, listener);
      }
    }

    /**
     * @param {number} timerId
     * @param {string} eventType
     * @param {function(!AnalyticsEvent)} listener
     * @private
     */

  }, {
    key: 'startTimer_',
    value: function startTimer_(timerId, eventType, listener) {
      var _this11 = this;

      var timerHandler = this.trackers_[timerId];
      var timerCallback = function timerCallback() {
        listener(_this11.createEvent_(timerId, eventType));
      };
      timerHandler.startIntervalInWindow(this.root.ampdoc.win, timerCallback, this.removeTracker_.bind(this, timerId));
    }

    /**
     * @param {number} timerId
     * @private
     */

  }, {
    key: 'stopTimer_',
    value: function stopTimer_(timerId) {
      this.trackers_[timerId].stopTimer_(this.root.ampdoc.win);
    }

    /**
     * @param {number} timerId
     * @param {string} eventType
     * @return {!AnalyticsEvent}
     * @private
     */

  }, {
    key: 'createEvent_',
    value: function createEvent_(timerId, eventType) {
      return new AnalyticsEvent(this.root.getRootElement(), eventType, this.trackers_[timerId].getTimerVars());
    }

    /**
     * @param {number} timerId
     * @private
     */

  }, {
    key: 'removeTracker_',
    value: function removeTracker_(timerId) {
      if (this.trackers_[timerId]) {
        this.stopTimer_(timerId);
        this.trackers_[timerId].dispose();
        delete this.trackers_[timerId];
      }
    }
  }]);

  return TimerEventTracker;
}(EventTracker);

/**
 * Tracks video session events
 */


var VideoEventTracker = exports.VideoEventTracker = function (_EventTracker6) {
  _inherits(VideoEventTracker, _EventTracker6);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function VideoEventTracker(root) {
    _classCallCheck(this, VideoEventTracker);

    /** @private {?Observable<!Event>} */
    var _this12 = _possibleConstructorReturn(this, (VideoEventTracker.__proto__ || Object.getPrototypeOf(VideoEventTracker)).call(this, root));

    _this12.sessionObservable_ = new _observable.Observable();

    /** @private {?function(!Event)} */
    _this12.boundOnSession_ = _this12.sessionObservable_.fire.bind(_this12.sessionObservable_);

    Object.keys(_videoInterface.VideoAnalyticsEvents).forEach(function (key) {
      _this12.root.getRoot().addEventListener(_videoInterface.VideoAnalyticsEvents[key], _this12.boundOnSession_);
    });
    return _this12;
  }

  /** @override */


  _createClass(VideoEventTracker, [{
    key: 'dispose',
    value: function dispose() {
      var _this13 = this;

      var root = this.root.getRoot();
      Object.keys(_videoInterface.VideoAnalyticsEvents).forEach(function (key) {
        root.removeEventListener(_videoInterface.VideoAnalyticsEvents[key], _this13.boundOnSession_);
      });
      this.boundOnSession_ = null;
      this.sessionObservable_ = null;
    }

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var videoSpec = config['videoSpec'] || {};
      var selector = config['selector'] || videoSpec['selector'];
      var selectionMethod = config['selectionMethod'] || null;
      var targetReady = this.root.getElement(context, selector, selectionMethod);

      var endSessionWhenInvisible = videoSpec['end-session-when-invisible'];
      var excludeAutoplay = videoSpec['exclude-autoplay'];
      var interval = videoSpec['interval'];
      var on = config['on'];

      var intervalCounter = 0;

      return this.sessionObservable_.add(function (event) {
        var type = event.type;

        var isVisibleType = type === _videoInterface.VideoAnalyticsEvents.SESSION_VISIBLE;
        var normalizedType = isVisibleType ? _videoInterface.VideoAnalyticsEvents.SESSION : type;
        var details = /** @type {!VideoAnalyticsDetailsDef} */(0, _eventHelper.getData)(event);

        if (normalizedType !== on) {
          return;
        }

        if (normalizedType === _videoInterface.VideoAnalyticsEvents.SECONDS_PLAYED && !interval) {
          (0, _log.user)().error(TAG, 'video-seconds-played requires interval spec ' + 'with non-zero value');
          return;
        }

        if (normalizedType === _videoInterface.VideoAnalyticsEvents.SECONDS_PLAYED) {
          intervalCounter++;
          if (intervalCounter % interval !== 0) {
            return;
          }
        }

        if (isVisibleType && !endSessionWhenInvisible) {
          return;
        }

        if (excludeAutoplay && details['state'] === _videoInterface.PlayingStates.PLAYING_AUTO) {
          return;
        }

        var el = (0, _log.dev)().assertElement(event.target, 'No target specified by video session event.');
        targetReady.then(function (target) {
          if (target.contains(el)) {
            listener(new AnalyticsEvent(target, normalizedType, details));
          }
        });
      });
    }
  }]);

  return VideoEventTracker;
}(EventTracker);

/**
 * Tracks visibility events.
 */


var VisibilityTracker = exports.VisibilityTracker = function (_EventTracker7) {
  _inherits(VisibilityTracker, _EventTracker7);

  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   */
  function VisibilityTracker(root) {
    _classCallCheck(this, VisibilityTracker);

    /** @private */
    var _this14 = _possibleConstructorReturn(this, (VisibilityTracker.__proto__ || Object.getPrototypeOf(VisibilityTracker)).call(this, root));

    _this14.waitForTrackers_ = {};
    return _this14;
  }

  /** @override */


  _createClass(VisibilityTracker, [{
    key: 'dispose',
    value: function dispose() {}

    /** @override */

  }, {
    key: 'add',
    value: function add(context, eventType, config, listener) {
      var _this15 = this;

      var visibilitySpec = config['visibilitySpec'] || {};
      var selector = config['selector'] || visibilitySpec['selector'];
      var waitForSpec = visibilitySpec['waitFor'];
      var visibilityManager = this.root.getVisibilityManager();
      // special polyfill for eventType: 'hidden'
      var createReadyReportPromiseFunc = null;
      if (eventType == 'hidden') {
        createReadyReportPromiseFunc = this.createReportReadyPromise_.bind(this);
      }

      // Root selectors are delegated to analytics roots.
      if (!selector || selector == ':root' || selector == ':host') {
        // When `selector` is specified, we always use "ini-load" signal as
        // a "ready" signal.
        return visibilityManager.listenRoot(visibilitySpec, this.getReadyPromise(waitForSpec, selector), createReadyReportPromiseFunc, this.onEvent_.bind(this, eventType, listener, this.root.getRootElement()));
      }

      // An AMP-element. Wait for DOM to be fully parsed to avoid
      // false missed searches.
      var selectionMethod = config['selectionMethod'] || visibilitySpec['selectionMethod'];
      var unlistenPromise = this.root.getAmpElement(context.parentElement || context, selector, selectionMethod).then(function (element) {
        return visibilityManager.listenElement(element, visibilitySpec, _this15.getReadyPromise(waitForSpec, selector, element), createReadyReportPromiseFunc, _this15.onEvent_.bind(_this15, eventType, listener, element));
      });
      return function () {
        unlistenPromise.then(function (unlisten) {
          unlisten();
        });
      };
    }

    /**
     * @return {!Promise}
     */

  }, {
    key: 'createReportReadyPromise_',
    value: function createReportReadyPromise_() {
      var viewer = this.root.getViewer();

      if (!viewer.isVisible()) {
        return Promise.resolve();
      }

      return new Promise(function (resolve) {
        viewer.onVisibilityChanged(function () {
          if (!viewer.isVisible()) {
            resolve();
          }
        });
      });
    }

    /**
     * @param {string|undefined} waitForSpec
     * @param {string|undefined} selector
     * @param {Element=} opt_element
     * @return {?Promise}
     * @visibleForTesting
     */

  }, {
    key: 'getReadyPromise',
    value: function getReadyPromise(waitForSpec, selector, opt_element) {
      if (!waitForSpec) {
        // Default case:
        if (!selector) {
          // waitFor selector is not defined, wait for nothing
          return null;
        } else {
          // otherwise wait for ini-load by default
          waitForSpec = 'ini-load';
        }
      }

      var trackerWhitelist = getTrackerTypesForParentType('visible');
      (0, _log.user)().assert(waitForSpec == 'none' || trackerWhitelist[waitForSpec] !== undefined, 'waitFor value %s not supported', waitForSpec);

      var waitForTracker = this.waitForTrackers_[waitForSpec] || this.root.getTrackerForWhitelist(waitForSpec, trackerWhitelist);
      if (waitForTracker) {
        this.waitForTrackers_[waitForSpec] = waitForTracker;
      } else {
        return null;
      }

      // Wait for root signal if there's no element selected.
      return opt_element ? waitForTracker.getElementSignal(waitForSpec, opt_element) : waitForTracker.getRootSignal(waitForSpec);
    }

    /**
     * @param {string} eventType
     * @param {function(!AnalyticsEvent)} listener
     * @param {!Element} target
     * @param {!Object<string, *>} state
     * @private
     */

  }, {
    key: 'onEvent_',
    value: function onEvent_(eventType, listener, target, state) {
      var attr = (0, _dom.getDataParamsFromAttributes)(target,
      /* computeParamNameFunc */undefined, VARIABLE_DATA_ATTRIBUTE_KEY);
      for (var key in attr) {
        state[key] = attr[key];
      }
      listener(new AnalyticsEvent(target, eventType, state));
    }
  }]);

  return VisibilityTracker;
}(EventTracker);

},{"../../../src/common-signals":23,"../../../src/dom":27,"../../../src/event-helper":30,"../../../src/log":38,"../../../src/observable":41,"../../../src/string":55,"../../../src/types":57,"../../../src/utils/object":65,"../../../src/video-interface":68}],7:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IframeTransportMessageQueue = undefined;

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

var _pFrameMessaging = require('../../../src/3p-frame-messaging');

var _iframeHelper = require('../../../src/iframe-helper');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @private @const {string} */
var TAG_ = 'amp-analytics.IframeTransportMessageQueue';

/** @private @const {number} */
var MAX_QUEUE_SIZE_ = 100;

/**
 * @visibleForTesting
 */

var IframeTransportMessageQueue = exports.IframeTransportMessageQueue = function () {
  /**
   * Constructor
   * @param {!Window} win The window element
   * @param {!HTMLIFrameElement} frame The cross-domain iframe to send
   * messages to
   */
  function IframeTransportMessageQueue(win, frame) {
    var _this = this;

    _classCallCheck(this, IframeTransportMessageQueue);

    /** @private {!HTMLIFrameElement} */
    this.frame_ = frame;

    /** @private {boolean} */
    this.isReady_ = false;

    /**
     * @private
     * {!Array<!../../../src/3p-frame-messaging.IframeTransportEvent>}
     */
    this.pendingEvents_ = [];

    /** @private {!../../../src/iframe-helper.SubscriptionApi} */
    this.postMessageApi_ = new _iframeHelper.SubscriptionApi(this.frame_, _pFrameMessaging.MessageType.SEND_IFRAME_TRANSPORT_EVENTS, true, function () {
      _this.setIsReady();
    });
  }

  /**
   * Returns whether the queue has been marked as ready yet
   * @return {boolean}
   * @visibleForTesting
   */


  _createClass(IframeTransportMessageQueue, [{
    key: 'isReady',
    value: function isReady() {
      return this.isReady_;
    }

    /**
     * Indicate that a cross-domain frame is ready to receive messages, and
     * send all messages that were previously queued for it.
     * @visibleForTesting
     */

  }, {
    key: 'setIsReady',
    value: function setIsReady() {
      this.isReady_ = true;
      this.flushQueue_();
    }

    /**
     * Returns how many creativeId -> message(s) mappings there are
     * @return {number}
     * @visibleForTesting
     */

  }, {
    key: 'queueSize',
    value: function queueSize() {
      return this.pendingEvents_.length;
    }

    /**
     * Enqueues an event to be sent to a cross-domain iframe.
     * @param {!../../../src/3p-frame-messaging.IframeTransportEvent} event
     * Identifies the event and which Transport instance (essentially which
     * creative) is sending it.
     */

  }, {
    key: 'enqueue',
    value: function enqueue(event) {
      (0, _log.dev)().assert(event && event.creativeId && event.message, 'Attempted to enqueue malformed message for: ' + event.creativeId);
      this.pendingEvents_.push(event);
      if (this.queueSize() >= MAX_QUEUE_SIZE_) {
        (0, _log.dev)().warn(TAG_, 'Exceeded maximum size of queue for: ' + event.creativeId);
        this.pendingEvents_.shift();
      }
      this.flushQueue_();
    }

    /**
     * Send queued data (if there is any) to a cross-domain iframe
     * @private
     */

  }, {
    key: 'flushQueue_',
    value: function flushQueue_() {
      if (this.isReady() && this.queueSize()) {
        this.postMessageApi_.send(_pFrameMessaging.MessageType.IFRAME_TRANSPORT_EVENTS,
        /** @type {!JsonObject} */
        { events: this.pendingEvents_ });
        this.pendingEvents_ = [];
      }
    }
  }]);

  return IframeTransportMessageQueue;
}();

},{"../../../src/3p-frame-messaging":21,"../../../src/iframe-helper":33,"../../../src/log":38}],8:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
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
 * Vendors who have IAB viewability certification may use iframe transport
 * (see ../amp-analytics.md and ../integrating-analytics.md). In this case,
 * put only the specification of the iframe location in the object below.
 *
 * This object is separated from vendors.js to be shared with extensions
 * other than amp-analytics, for instance amp-ad-exit.
 *
 * @const {!JsonObject}
 */
var IFRAME_TRANSPORTS = /** @type {!JsonObject} */exports.IFRAME_TRANSPORTS = {
  'bg': 'https://tpc.googlesyndication.com/b4a/b4a-runner.html',
  'moat': 'https://js.moatads.com/ampanalytics093284/iframe.html'
};

},{}],9:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IframeTransport = exports.FrameData = undefined;

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

exports.getIframeTransportScriptUrl = getIframeTransportScriptUrl;

var _iframeTransportMessageQueue = require('./iframe-transport-message-queue');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

var _mode = require('../../../src/mode');

var _object = require('../../../src/utils/object');

var _jankMeter = require('../../../src/service/jank-meter');

var _style = require('../../../src/style');

var _config = require('../../../src/config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @private @const {string} */
var TAG_ = 'amp-analytics.IframeTransport';

/** @private @const {number} */
var LONG_TASK_REPORTING_THRESHOLD = 5;

/** @typedef {{
 *    frame: Element,
 *    sentinel: string,
 *    usageCount: number,
 *    queue: IframeTransportMessageQueue,
 *  }} */
var FrameData = exports.FrameData = void 0;

/**
 * Get the URL of the client lib
 * @param {!Window} ampWin The window object of the AMP document
 * @param {boolean=} opt_forceProdUrl If true, prod URL will be returned even
 *     in local/test modes.
 * @return {string}
 */
function getIframeTransportScriptUrl(ampWin, opt_forceProdUrl) {
  if (((0, _mode.getMode)().localDev || (0, _mode.getMode)().test) && !opt_forceProdUrl && ampWin.parent && ampWin.parent.location) {
    var loc = ampWin.parent.location;
    return loc.protocol + '//' + loc.host + '/dist/iframe-transport-client-lib.js';
  }
  return _config.urls.thirdParty + '/1537222846916/iframe-transport-client-v0.js';
}

/**
 * @visibleForTesting
 */

var IframeTransport = exports.IframeTransport = function () {
  /**
   * @param {!Window} ampWin The window object of the AMP document
   * @param {string} type The value of the amp-analytics tag's type attribute
   * @param {!JsonObject} config
   * @param {string} id If (potentially) using sendResponseToCreative(), it
   *     should be something that the recipient can use to identify the
   *     context of the message, e.g. the resourceID of a DOM element.
   */
  function IframeTransport(ampWin, type, config, id) {
    _classCallCheck(this, IframeTransport);

    /** @private @const {!Window} */
    this.ampWin_ = ampWin;

    /** @private @const {string} */
    this.type_ = type;

    /** @private @const {string} */
    this.creativeId_ = id;

    (0, _log.dev)().assert(config && config['iframe'], 'Must supply iframe URL to constructor!');
    this.frameUrl_ = config['iframe'];

    /** @private {number} */
    this.numLongTasks_ = 0;

    this.processCrossDomainIframe();
  }

  /**
   * Called when a Transport instance is being removed from the DOM
   */


  _createClass(IframeTransport, [{
    key: 'detach',
    value: function detach() {
      IframeTransport.markCrossDomainIframeAsDone(this.ampWin_.document, this.type_);
    }

    /**
     * If iframe is specified in config/transport, check whether third-party
     * iframe already exists, and if not, create it.
     */

  }, {
    key: 'processCrossDomainIframe',
    value: function processCrossDomainIframe() {
      var frameData = void 0;
      if (IframeTransport.hasCrossDomainIframe(this.type_)) {
        frameData = IframeTransport.getFrameData(this.type_);
        ++frameData.usageCount;
      } else {
        frameData = this.createCrossDomainIframe();
        this.ampWin_.document.body.appendChild(frameData.frame);
        this.createPerformanceObserver_();
      }
      (0, _log.dev)().assert(frameData, 'Trying to use non-existent frame');
    }

    /**
     * Create a cross-domain iframe for third-party vendor analytics
     * @return {!FrameData}
     * @visibleForTesting
     */

  }, {
    key: 'createCrossDomainIframe',
    value: function createCrossDomainIframe() {
      // Explanation of IDs:
      // Each instance of IframeTransport (owned by a specific amp-analytics
      // tag, in turn owned by a specific creative) has an ID
      // (this.getCreativeId()).
      // Each cross-domain iframe also has an ID, stored here in sentinel.
      // These two types of IDs have different formats.
      // There is a many-to-one relationship, in that several creatives may
      // utilize the same analytics vendor, so perhaps two creatives might
      // both use the same vendor iframe.
      // Of course, a given creative may use multiple analytics vendors, but
      // in that case it would use multiple amp-analytics tags, so the
      // iframeTransport.getCreativeId() -> sentinel relationship is *not*
      // many-to-many.
      var sentinel = IframeTransport.createUniqueId_();
      var frameName = JSON.stringify( /** @type {JsonObject} */{
        scriptSrc: getIframeTransportScriptUrl(this.ampWin_),
        sentinel: sentinel,
        type: this.type_
      });
      var frame = (0, _dom.createElementWithAttributes)(this.ampWin_.document, 'iframe',
      /** @type {!JsonObject} */{
        sandbox: 'allow-scripts allow-same-origin',
        name: frameName,
        'data-amp-3p-sentinel': sentinel
      });
      frame.sentinel = sentinel;
      (0, _style.setStyles)(frame, {
        display: 'none'
      });
      frame.src = this.frameUrl_;
      var frameData = /** @const {FrameData} */{
        frame: frame,
        usageCount: 1,
        queue: new _iframeTransportMessageQueue.IframeTransportMessageQueue(this.ampWin_,
        /** @type {!HTMLIFrameElement} */
        frame)
      };
      IframeTransport.crossDomainIframes_[this.type_] = frameData;
      return frameData;
    }

    /**
     * Uses the Long Task API to create an observer for when 3p vendor frames
     * take more than 50ms of continuous CPU time.
     * Currently the only action in response to that is to log. It will log
     * once per LONG_TASK_REPORTING_THRESHOLD that a long task occurs. (This
     * implies that there is a grace period for the first
     * LONG_TASK_REPORTING_THRESHOLD-1 occurrences.)
     * @private
     */

  }, {
    key: 'createPerformanceObserver_',
    value: function createPerformanceObserver_() {
      var _this = this;

      if (!(0, _jankMeter.isLongTaskApiSupported)(this.ampWin_)) {
        return;
      }
      // TODO(jonkeller): Consider merging with jank-meter.js
      IframeTransport.performanceObservers_[this.type_] = new this.ampWin_.PerformanceObserver(function (entryList) {
        if (!entryList) {
          return;
        }
        entryList.getEntries().forEach(function (entry) {
          if (entry && entry['entryType'] == 'longtask' && entry['name'] == 'cross-origin-descendant' && entry.attribution) {
            entry.attribution.forEach(function (attrib) {
              if (_this.frameUrl_ == attrib.containerSrc && ++_this.numLongTasks_ % LONG_TASK_REPORTING_THRESHOLD == 0) {
                (0, _log.user)().error(TAG_, 'Long Task: Vendor: "' + _this.type_ + '"');
              }
            });
          }
        });
      });
      IframeTransport.performanceObservers_[this.type_].observe({
        entryTypes: ['longtask']
      });
    }

    /**
     * Called when a creative no longer needs its cross-domain iframe (for
     * instance, because the creative has been removed from the DOM).
     * Once all creatives using a frame are done with it, the frame can be
     * destroyed.
     * @param {!HTMLDocument} ampDoc The AMP document
     * @param {string} type The type attribute of the amp-analytics tag
     */

  }, {
    key: 'sendRequest',


    /**
     * Sends an AMP Analytics trigger event to a vendor's cross-domain iframe,
     * or queues the message if the frame is not yet ready to receive messages.
     * @param {string} event A string describing the trigger event
     * @visibleForTesting
     */
    value: function sendRequest(event) {
      var frameData = IframeTransport.getFrameData(this.type_);
      (0, _log.dev)().assert(frameData, 'Trying to send message to non-existent frame');
      (0, _log.dev)().assert(frameData.queue, 'Event queue is missing for messages from ' + this.type_ + ' to creative ID ' + this.creativeId_);
      frameData.queue.enqueue(
      /**
       * @type {!../../../src/3p-frame-messaging.IframeTransportEvent}
       */
      { creativeId: this.creativeId_, message: event });
    }

    /**
     * Gets the FrameData associated with a particular cross-domain frame type.
     * @param {string} type The type attribute of the amp-analytics tag
     * @return {FrameData}
     * @visibleForTesting
     */

  }, {
    key: 'getCreativeId',


    /**
     * @return {string} Unique ID of this instance of IframeTransport
     * @visibleForTesting
     */
    value: function getCreativeId() {
      return this.creativeId_;
    }

    /**
     * @return {string} Type attribute of parent amp-analytics instance
     * @visibleForTesting
     */

  }, {
    key: 'getType',
    value: function getType() {
      return this.type_;
    }
  }], [{
    key: 'markCrossDomainIframeAsDone',
    value: function markCrossDomainIframeAsDone(ampDoc, type) {
      var frameData = IframeTransport.getFrameData(type);
      (0, _log.dev)().assert(frameData && frameData.frame && frameData.usageCount, 'Marked the ' + type + ' frame as done, but there is no' + ' record of it existing.');
      if (--frameData.usageCount) {
        // Some other instance is still using it
        return;
      }
      ampDoc.body.removeChild(frameData.frame);
      delete IframeTransport.crossDomainIframes_[type];
      if (IframeTransport.performanceObservers_[type]) {
        IframeTransport.performanceObservers_[type].disconnect();
        IframeTransport.performanceObservers_[type] = null;
      }
    }

    /**
     * Returns whether this type of cross-domain frame is already known
     * @param {string} type The type attribute of the amp-analytics tag
     * @return {boolean}
     * @visibleForTesting
     */

  }, {
    key: 'hasCrossDomainIframe',
    value: function hasCrossDomainIframe(type) {
      return (0, _object.hasOwn)(IframeTransport.crossDomainIframes_, type);
    }

    /**
     * Create a unique value to differentiate messages from a particular
     * creative to the cross-domain iframe, or to identify the iframe itself.
     * @return {string}
     * @private
     */

  }, {
    key: 'createUniqueId_',
    value: function createUniqueId_() {
      return String(++IframeTransport.nextId_);
    }
  }, {
    key: 'getFrameData',
    value: function getFrameData(type) {
      return IframeTransport.crossDomainIframes_[type];
    }

    /**
     * Removes all knowledge of cross-domain iframes.
     * Does not actually remove them from the DOM.
     * @visibleForTesting
     */

  }, {
    key: 'resetCrossDomainIframes',
    value: function resetCrossDomainIframes() {
      IframeTransport.crossDomainIframes_ = {};
    }
  }]);

  return IframeTransport;
}();

/** @private {Object<string, FrameData>} */


IframeTransport.crossDomainIframes_ = {};

/** @private {number} */
IframeTransport.nextId_ = 0;

/** @private {Object<string, PerformanceObserver>} */
IframeTransport.performanceObservers_ = {};

},{"../../../src/config":24,"../../../src/dom":27,"../../../src/log":38,"../../../src/mode":40,"../../../src/service/jank-meter":52,"../../../src/style":56,"../../../src/utils/object":65,"./iframe-transport-message-queue":7}],10:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnalyticsGroup = exports.InstrumentationService = undefined;

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

exports.instrumentationServicePromiseForDoc = instrumentationServicePromiseForDoc;
exports.instrumentationServiceForDocForTesting = instrumentationServiceForDocForTesting;

var _analyticsRoot = require('./analytics-root');

var _events = require('./events');

var _observable = require('../../../src/observable');

var _services = require('../../../src/services');

var _log = require('../../../src/log');

var _friendlyIframeEmbed = require('../../../src/friendly-iframe-embed');

var _service = require('../../../src/service');

var _object = require('../../../src/utils/object');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCROLL_PRECISION_PERCENT = 5;
var VAR_H_SCROLL_BOUNDARY = 'horizontalScrollBoundary';
var VAR_V_SCROLL_BOUNDARY = 'verticalScrollBoundary';
var PROP = '__AMP_AN_ROOT';

/** @const {string} */
var TAG = 'Analytics.Instrumentation';

/**
 * Events that can result in analytics data to be sent.
 * @const {Array<AnalyticsEventType>}
 */
var ALLOWED_IN_EMBED = [_events.AnalyticsEventType.VISIBLE, _events.AnalyticsEventType.CLICK, _events.AnalyticsEventType.TIMER, _events.AnalyticsEventType.HIDDEN];

/**
 * @implements {../../../src/service.Disposable}
 * @private
 * @visibleForTesting
 */

var InstrumentationService = exports.InstrumentationService = function () {
  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function InstrumentationService(ampdoc) {
    _classCallCheck(this, InstrumentationService);

    /** @const */
    this.ampdoc = ampdoc;

    /** @const */
    this.ampdocRoot_ = new _analyticsRoot.AmpdocAnalyticsRoot(this.ampdoc);

    /** @const {!../../../src/service/viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(this.ampdoc);

    /** @private {boolean} */
    this.scrollHandlerRegistered_ = false;

    /** @private {!Observable<
      !../../../src/service/viewport/viewport-impl.ViewportChangedEventDef>} */
    this.scrollObservable_ = new _observable.Observable();
  }

  /** @override */


  _createClass(InstrumentationService, [{
    key: 'dispose',
    value: function dispose() {
      this.ampdocRoot_.dispose();
    }

    /**
     * @param {!Node} context
     * @return {!./analytics-root.AnalyticsRoot}
     */

  }, {
    key: 'getAnalyticsRoot',
    value: function getAnalyticsRoot(context) {
      return this.findRoot_(context);
    }

    /**
     * @param {!Element} analyticsElement
     * @return {!AnalyticsGroup}
     */

  }, {
    key: 'createAnalyticsGroup',
    value: function createAnalyticsGroup(analyticsElement) {
      var root = this.findRoot_(analyticsElement);
      return new AnalyticsGroup(root, analyticsElement, this);
    }

    /**
     * Triggers the analytics event with the specified type.
     *
     * @param {!Element} target
     * @param {string} eventType
     * @param {!Object<string, string>=} opt_vars A map of vars and their values.
     */

  }, {
    key: 'triggerEventForTarget',
    value: function triggerEventForTarget(target, eventType, opt_vars) {
      // TODO(dvoytenko): rename to `triggerEvent`.
      var event = new _events.AnalyticsEvent(target, eventType, opt_vars);
      var root = this.findRoot_(target);
      var tracker = /** @type {!CustomEventTracker} */root.getTracker('custom', _events.CustomEventTracker);
      tracker.trigger(event);
    }

    /**
     * @param {!Node} context
     * @return {!./analytics-root.AnalyticsRoot}
     */

  }, {
    key: 'findRoot_',
    value: function findRoot_(context) {
      var _this = this;

      // FIE
      var frame = (0, _service.getParentWindowFrameElement)(context, this.ampdoc.win);
      if (frame) {
        var embed = (0, _friendlyIframeEmbed.getFriendlyIframeEmbedOptional)(frame);
        if (embed) {
          var embedNotNull = embed;
          return this.getOrCreateRoot_(embed, function () {
            return new _analyticsRoot.EmbedAnalyticsRoot(_this.ampdoc, embedNotNull, _this.ampdocRoot_);
          });
        }
      }

      // Ampdoc root
      return this.ampdocRoot_;
    }

    /**
     * @param {!Object} holder
     * @param {function():!./analytics-root.AnalyticsRoot} factory
     * @return {!./analytics-root.AnalyticsRoot}
     */

  }, {
    key: 'getOrCreateRoot_',
    value: function getOrCreateRoot_(holder, factory) {
      var root = /** @type {?./analytics-root.AnalyticsRoot} */holder[PROP];
      if (!root) {
        root = factory();
        holder[PROP] = root;
      }
      return root;
    }

    /**
     * @param {!JsonObject} config Configuration for instrumentation.
     * @param {function(!AnalyticsEvent)} listener The callback to call when the event
     *  occurs.
     * @param {!Element} analyticsElement The element associated with the
     *  config.
     * @private
     * @restricted
     */

  }, {
    key: 'addListenerDepr_',
    value: function addListenerDepr_(config, listener, analyticsElement) {
      var eventType = config['on'];
      if (!this.isTriggerAllowed_(eventType, analyticsElement)) {
        (0, _log.user)().error(TAG, 'Trigger type "' + eventType + '" is not ' + 'allowed in the embed.');
        return;
      }
      if (eventType === _events.AnalyticsEventType.SCROLL) {
        if (!config['scrollSpec']) {
          (0, _log.user)().error(TAG, 'Missing scrollSpec on scroll trigger.');
          return;
        }
        this.registerScrollTrigger_(config['scrollSpec'], listener);

        // Trigger an event to fire events that might have already happened.
        var size = this.viewport_.getSize();
        this.onScroll_({
          top: this.viewport_.getScrollTop(),
          left: this.viewport_.getScrollLeft(),
          width: size.width,
          height: size.height,
          relayoutAll: false,
          velocity: 0 // Hack for typing.
        });
      }
    }

    /**
     * @param {string} type
     * @param {!Object<string, string>=} opt_vars
     * @return {!AnalyticsEvent}
     * @private
     */

  }, {
    key: 'createEventDepr_',
    value: function createEventDepr_(type, opt_vars) {
      // TODO(dvoytenko): Remove when Tracker migration is complete.
      return new _events.AnalyticsEvent(this.ampdocRoot_.getRootElement(), type, opt_vars);
    }

    /**
     * @param {!../../../src/service/viewport/viewport-impl.ViewportChangedEventDef} e
     * @private
     */

  }, {
    key: 'onScroll_',
    value: function onScroll_(e) {
      this.scrollObservable_.fire(e);
    }

    /**
     * Register for a listener to be called when the boundaries specified in
     * config are reached.
     * @param {!JsonObject} config the config that specifies the boundaries.
     * @param {function(!AnalyticsEvent)} listener
     * @private
     */

  }, {
    key: 'registerScrollTrigger_',
    value: function registerScrollTrigger_(config, listener) {
      var _this2 = this;

      if (!Array.isArray(config['verticalBoundaries']) && !Array.isArray(config['horizontalBoundaries'])) {
        (0, _log.user)().error(TAG, 'Boundaries are required for the scroll ' + 'trigger to work.');
        return;
      }

      // Ensure that the scroll events are being listened to.
      if (!this.scrollHandlerRegistered_) {
        this.scrollHandlerRegistered_ = true;
        this.viewport_.onChanged(this.onScroll_.bind(this));
      }

      /**
       * @param {!Object<number, boolean>} bounds
       * @param {number} scrollPos Number representing the current scroll
       * @param {string} varName variable name to assign to the bound that
       * triggers the event
       * position.
       */
      var triggerScrollEvents = function triggerScrollEvents(bounds, scrollPos, varName) {
        if (!scrollPos) {
          return;
        }
        // Goes through each of the boundaries and fires an event if it has not
        // been fired so far and it should be.
        for (var b in bounds) {
          if (!(0, _object.hasOwn)(bounds, b)) {
            continue;
          }
          var bound = parseInt(b, 10);
          if (bound > scrollPos || bounds[bound]) {
            continue;
          }
          bounds[bound] = true;
          var vars = Object.create(null);
          vars[varName] = b;
          listener(_this2.createEventDepr_(_events.AnalyticsEventType.SCROLL, vars));
        }
      };

      var boundsV = this.normalizeBoundaries_(config['verticalBoundaries']);
      var boundsH = this.normalizeBoundaries_(config['horizontalBoundaries']);
      this.scrollObservable_.add(function (e) {
        // Calculates percentage scrolled by adding screen height/width to
        // top/left and dividing by the total scroll height/width.
        triggerScrollEvents(boundsV, (e.top + e.height) * 100 / _this2.viewport_.getScrollHeight(), VAR_V_SCROLL_BOUNDARY);
        triggerScrollEvents(boundsH, (e.left + e.width) * 100 / _this2.viewport_.getScrollWidth(), VAR_H_SCROLL_BOUNDARY);
      });
    }

    /**
     * Rounds the boundaries for scroll trigger to nearest
     * SCROLL_PRECISION_PERCENT and returns an object with normalized boundaries
     * as keys and false as values.
     *
     * @param {!Array<number>} bounds array of bounds.
     * @return {!Object<number,boolean>} Object with normalized bounds as keys
     * and false as value.
     * @private
     */

  }, {
    key: 'normalizeBoundaries_',
    value: function normalizeBoundaries_(bounds) {
      var result = {};
      if (!bounds || !Array.isArray(bounds)) {
        return result;
      }

      for (var b = 0; b < bounds.length; b++) {
        var bound = bounds[b];
        if (typeof bound !== 'number' || !isFinite(bound)) {
          (0, _log.user)().error(TAG, 'Scroll trigger boundaries must be finite.');
          return result;
        }

        bound = Math.min(Math.round(bound / SCROLL_PRECISION_PERCENT) * SCROLL_PRECISION_PERCENT, 100);
        result[bound] = false;
      }
      return result;
    }

    /**
     * Checks to confirm that a given trigger type is allowed for the element.
     * Specifically, it confirms that if the element is in the embed, only a
     * subset of the trigger types are allowed.
     * @param  {!AnalyticsEventType} triggerType
     * @param  {!Element} element
     * @return {boolean} True if the trigger is allowed. False otherwise.
     */

  }, {
    key: 'isTriggerAllowed_',
    value: function isTriggerAllowed_(triggerType, element) {
      if (element.ownerDocument.defaultView != this.ampdoc.win) {
        return ALLOWED_IN_EMBED.includes(triggerType);
      }
      return true;
    }
  }]);

  return InstrumentationService;
}();

/**
 * Represents the group of analytics triggers for a single config. All triggers
 * are declared and released at the same time.
 *
 * @implements {../../../src/service.Disposable}
 */


var AnalyticsGroup = exports.AnalyticsGroup = function () {
  /**
   * @param {!./analytics-root.AnalyticsRoot} root
   * @param {!Element} analyticsElement
   * @param {!InstrumentationService} service
   */
  function AnalyticsGroup(root, analyticsElement, service) {
    _classCallCheck(this, AnalyticsGroup);

    // TODO(dvoytenko): remove `service` as soon as migration is complete.

    /** @const */
    this.root_ = root;
    /** @const */
    this.analyticsElement_ = analyticsElement;
    /** @const */
    this.service_ = service;

    /** @private @const {!Array<!UnlistenDef>} */
    this.listeners_ = [];
  }

  /** @override */


  _createClass(AnalyticsGroup, [{
    key: 'dispose',
    value: function dispose() {
      this.listeners_.forEach(function (listener) {
        listener();
      });
    }

    /**
     * Adds a trigger with the specified config and listener. The config must
     * contain `on` property specifying the type of the event.
     *
     * Triggers registered on a group are automatically released when the
     * group is disposed.
     *
     * @param {!JsonObject} config
     * @param {function(!AnalyticsEvent)} handler
     */

  }, {
    key: 'addTrigger',
    value: function addTrigger(config, handler) {
      var eventType = (0, _log.dev)().assertString(config['on']);
      var trackerKey = (0, _events.getTrackerKeyName)(eventType);
      var trackerWhitelist = (0, _events.getTrackerTypesForParentType)(this.root_.getType());

      if (this.isDeprecatedListenerEvent(trackerKey)) {
        // TODO(dvoytenko): remove this use and `addListenerDepr_` once all
        // triggers have been migrated..
        this.service_.addListenerDepr_(config, handler, this.analyticsElement_);
        return;
      }

      var tracker = this.root_.getTrackerForWhitelist(trackerKey, trackerWhitelist);
      (0, _log.user)().assert(!!tracker, 'Trigger type "%s" is not allowed in the %s', eventType, this.root_.getType());
      var unlisten = tracker.add(this.analyticsElement_, eventType, config, handler);
      this.listeners_.push(unlisten);
    }

    /**
     * @param {string} triggerType
     * @return {boolean}
     */

  }, {
    key: 'isDeprecatedListenerEvent',
    value: function isDeprecatedListenerEvent(triggerType) {
      return triggerType == 'scroll';
    }
  }]);

  return AnalyticsGroup;
}();

/**
 * It's important to resolve instrumentation asynchronously in elements that
 * depends on it in multi-doc scope. Otherwise an element life-cycle could
 * resolve way before we have the service available.
 *
 * @param {!Element|!../../../src/service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @return {!Promise<InstrumentationService>}
 */


function instrumentationServicePromiseForDoc(elementOrAmpDoc) {
  return (/** @type {!Promise<InstrumentationService>} */(0, _service.getServicePromiseForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation')
  );
}

/**
 * @param {!Element|!../../../src/service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @return {!InstrumentationService}
 */
function instrumentationServiceForDocForTesting(elementOrAmpDoc) {
  (0, _service.registerServiceBuilderForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation', InstrumentationService);
  return (0, _service.getServiceForDoc)(elementOrAmpDoc, 'amp-analytics-instrumentation');
}

},{"../../../src/friendly-iframe-embed":32,"../../../src/log":38,"../../../src/observable":41,"../../../src/service":51,"../../../src/services":53,"../../../src/utils/object":65,"./analytics-root":3,"./events":6}],11:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestHandler = undefined;

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

var _batchingPlugins = require('./batching-plugins');

var _variables = require('./variables');

var _sandboxVarsWhitelist = require('./sandbox-vars-whitelist');

var _services = require('../../../src/services');

var _url = require('../../../src/url');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _array = require('../../../src/utils/array');

var _types = require('../../../src/types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'AMP-ANALYTICS';

var BATCH_INTERVAL_MIN = 200;

var RequestHandler = exports.RequestHandler = function () {
  /**
   * @param {!Element} ampAnalyticsElement
   * @param {!JsonObject} request
   * @param {!../../../src/preconnect.Preconnect} preconnect
   * @param {function(string, !JsonObject)} handler
   * @param {boolean} isSandbox
   */
  function RequestHandler(ampAnalyticsElement, request, preconnect, handler, isSandbox) {
    _classCallCheck(this, RequestHandler);

    /** @const {!Window} */
    this.win = ampAnalyticsElement.getAmpDoc().win;

    /** @const {string} */
    this.baseUrl = (0, _log.dev)().assert(request['baseUrl']);

    /** @private {Array<number>|number|undefined} */
    this.batchInterval_ = request['batchInterval']; //unit is sec

    /** @private {?number} */
    this.reportWindow_ = Number(request['reportWindow']) || null; // unit is sec

    /** @private {?number} */
    this.batchIntervalPointer_ = null;

    /** @private @const {string} */
    this.batchPluginId_ = request['batchPlugin'];

    (0, _log.user)().assert(this.batchPluginId_ ? this.batchInterval_ : true, 'Invalid request: batchPlugin cannot be set on non-batched request');

    /** @const {?function(string, !Array<!batchSegmentDef>)} */
    this.batchingPlugin_ = this.batchPluginId_ ? (0, _log.user)().assert(_batchingPlugins.BatchingPluginFunctions[this.batchPluginId_], 'Invalid request: unsupported batch plugin ' + this.batchPluginId_) : null;

    /** @private {!./variables.VariableService} */
    this.variableService_ = (0, _variables.variableServiceFor)(this.win);

    /** @private {!../../../src/service/url-replacements-impl.UrlReplacements} */
    this.urlReplacementService_ = _services.Services.urlReplacementsForDoc(ampAnalyticsElement);

    /** @private {?Promise<string>} */
    this.baseUrlPromise_ = null;

    /** @private {?Promise<string>} */
    this.baseUrlTemplatePromise_ = null;

    /** @private {!Array<!Promise<string>>}*/
    this.extraUrlParamsPromise_ = [];

    /** @private {!Array<!Promise<!batchSegmentDef>>} */
    this.batchSegmentPromises_ = [];

    /** @private {!../../../src/preconnect.Preconnect} */
    this.preconnect_ = preconnect;

    /** @private {function(string, !JsonObject)} */
    this.handler_ = handler;

    /** @const @private {!Object|undefined} */
    this.whiteList_ = isSandbox ? _sandboxVarsWhitelist.SANDBOX_AVAILABLE_VARS : undefined;

    /** @private {?number} */
    this.batchIntervalTimeoutId_ = null;

    /** @private {?number} */
    this.reportWindowTimeoutId_ = null;

    /** @private {boolean} */
    this.reportRequest_ = true;

    /** @private {?JsonObject} */
    this.lastTrigger_ = null;

    /** @private {number} */
    this.queueSize_ = 0;

    this.initReportWindow_();
    this.initBatchInterval_();
  }

  /**
   * Exposed method to send a request on event.
   * Real ping may be batched and send out later.
   * @param {?JsonObject} configParams
   * @param {!JsonObject} trigger
   * @param {!./variables.ExpansionOptions} expansionOption
   * @param {!Object<string, *>} dynamicBindings A mapping of variables to
   *     stringable values. For example, values could be strings, functions that
   *     return strings, promises, etc.
   */


  _createClass(RequestHandler, [{
    key: 'send',
    value: function send(configParams, trigger, expansionOption, dynamicBindings) {
      var _this = this;

      var isImportant = trigger['important'];

      var isImmediate = trigger['important'] === true || !this.batchInterval_;
      if (!this.reportRequest_ && !isImportant) {
        // Ignore non important trigger out reportWindow
        return;
      }

      this.queueSize_++;
      this.lastTrigger_ = trigger;
      var triggerParams = trigger['extraUrlParams'];

      var macros = this.variableService_.getMacros();
      var bindings = Object.assign({}, dynamicBindings, macros);

      if (!this.baseUrlPromise_) {
        expansionOption.freezeVar('extraUrlParams');
        this.baseUrlTemplatePromise_ = this.variableService_.expandTemplate(this.baseUrl, expansionOption);
        this.baseUrlPromise_ = this.baseUrlTemplatePromise_.then(function (baseUrl) {
          return _this.urlReplacementService_.expandUrlAsync(baseUrl, bindings, _this.whiteList_);
        });
      }

      var extraUrlParamsPromise = this.expandExtraUrlParams_(configParams, triggerParams, expansionOption).then(function (expandExtraUrlParams) {
        // Construct the extraUrlParamsString: Remove null param and encode
        // component
        var expandedExtraUrlParamsStr = _this.getExtraUrlParamsString_(expandExtraUrlParams);
        return _this.urlReplacementService_.expandUrlAsync(expandedExtraUrlParamsStr, bindings, _this.whiteList_);
      });

      if (this.batchingPlugin_) {
        var batchSegment = (0, _object.dict)({
          'trigger': trigger['on'],
          'timestamp': this.win.Date.now(),
          'extraUrlParams': null
        });
        this.batchSegmentPromises_.push(extraUrlParamsPromise.then(function (str) {
          batchSegment['extraUrlParams'] = (0, _url.parseQueryString)(str);
          return batchSegment;
        }));
      }

      this.extraUrlParamsPromise_.push(extraUrlParamsPromise);
      this.trigger_(isImmediate);
    }

    /**
     * Dispose function that clear request handler state.
     */

  }, {
    key: 'dispose',
    value: function dispose() {
      this.reset_();

      // Clear batchInterval timeout
      if (this.batchIntervalTimeoutId_) {
        this.win.clearTimeout(this.batchIntervalTimeoutId_);
        this.batchIntervalTimeoutId_ = null;
      }

      if (this.reportWindowTimeoutId_) {
        this.win.clearTimeout(this.reportWindowTimeoutId_);
        this.reportWindowTimeoutId_ = null;
      }
    }

    /**
     * Function that schedule the actual request send.
     * @param {boolean} isImmediate
     * @private
     */

  }, {
    key: 'trigger_',
    value: function trigger_(isImmediate) {
      if (this.queueSize_ == 0) {
        // Do nothing if no request in queue
        return;
      }

      if (isImmediate) {
        // If not batched, or batchInterval scheduler schedule trigger immediately
        this.fire_();
        return;
      }
    }

    /**
     * Send out request. Should only be called by `trigger_` function
     * @private
     */

  }, {
    key: 'fire_',
    value: function fire_() {
      var _this2 = this;

      var extraUrlParamsPromise = this.extraUrlParamsPromise_,
          baseUrlTemplatePromise = this.baseUrlTemplatePromise_,
          baseUrlPromise = this.baseUrlPromise_,
          batchSegmentsPromise = this.batchSegmentPromises_;

      var lastTrigger = /** @type {!JsonObject} */this.lastTrigger_;
      this.reset_();

      baseUrlTemplatePromise.then(function (preUrl) {
        _this2.preconnect_.url(preUrl, true);
        baseUrlPromise.then(function (baseUrl) {
          var requestUrlPromise = void 0;
          if (_this2.batchingPlugin_) {
            requestUrlPromise = _this2.constructBatchSegments_(baseUrl, batchSegmentsPromise);
          } else {
            requestUrlPromise = _this2.constructExtraUrlParamStrs_(baseUrl, extraUrlParamsPromise);
          }
          requestUrlPromise.then(function (requestUrl) {
            _this2.handler_(requestUrl, lastTrigger);
          });
        });
      });
    }

    /**
     * Construct the final requestUrl with baseUrl and extraUrlParams
     * @param {string} baseUrl
     * @param {!Array<!Promise<string>>} extraUrlParamStrsPromise
     */

  }, {
    key: 'constructExtraUrlParamStrs_',
    value: function constructExtraUrlParamStrs_(baseUrl, extraUrlParamStrsPromise) {
      return Promise.all(extraUrlParamStrsPromise).then(function (paramStrs) {
        (0, _array.filterSplice)(paramStrs, function (item) {
          return !!item;
        });
        var extraUrlParamsStr = paramStrs.join('&');
        var requestUrl = void 0;
        if (baseUrl.indexOf('${extraUrlParams}') >= 0) {
          requestUrl = baseUrl.replace('${extraUrlParams}', extraUrlParamsStr);
        } else {
          requestUrl = (0, _url.appendEncodedParamStringToUrl)(baseUrl, extraUrlParamsStr);
        }
        return requestUrl;
      });
    }

    /**
     * Construct the final requestUrl by calling the batch plugin function
     * @param {string} baseUrl
     * @param {!Array<!Promise<batchSegmentDef>>} batchSegmentsPromise
     */

  }, {
    key: 'constructBatchSegments_',
    value: function constructBatchSegments_(baseUrl, batchSegmentsPromise) {
      var _this3 = this;

      (0, _log.dev)().assert(this.batchingPlugin_ && typeof this.batchingPlugin_ == 'function', 'Should never call ' + 'constructBatchSegments_ with invalid batchingPlugin function');

      return Promise.all(batchSegmentsPromise).then(function (batchSegments) {
        try {
          return _this3.batchingPlugin_(baseUrl, batchSegments);
        } catch (e) {
          (0, _log.dev)().error(TAG, 'Error: batchPlugin function ' + _this3.batchPluginId_, e);
          return '';
        }
      });
    }

    /**
     * Reset batching status
     * @private
     */

  }, {
    key: 'reset_',
    value: function reset_() {
      this.queueSize_ = 0;
      this.baseUrlPromise_ = null;
      this.baseUrlTemplatePromise_ = null;
      this.extraUrlParamsPromise_ = [];
      this.batchSegmentPromises_ = [];
      this.lastTrigger_ = null;
    }

    /**
     * Function that handler extraUrlParams from config and trigger.
     * @param {?JsonObject} configParams
     * @param {?JsonObject} triggerParams
     * @param {!./variables.ExpansionOptions} expansionOption
     * @return {!Promise<!JsonObject>}
     * @private
     */

  }, {
    key: 'expandExtraUrlParams_',
    value: function expandExtraUrlParams_(configParams, triggerParams, expansionOption) {
      var _this4 = this;

      var requestPromises = [];
      var params = (0, _object.map)();
      // Don't encode param values here,
      // as we'll do it later in the getExtraUrlParamsString_ call.
      var option = new _variables.ExpansionOptions(expansionOption.vars, expansionOption.iterations, true /* noEncode */);
      // Add any given extraUrlParams as query string param
      if (configParams || triggerParams) {
        Object.assign(params, configParams, triggerParams);

        var _loop = function _loop(k) {
          if (typeof params[k] == 'string') {
            requestPromises.push(_this4.variableService_.expandTemplate(params[k], option).then(function (value) {
              params[k] = value;
            }));
          }
        };

        for (var k in params) {
          _loop(k);
        }
      }
      return Promise.all(requestPromises).then(function () {
        return params;
      });
    }

    /**
     * Handle the params map and form the final extraUrlParams string
     * @param {!Object} params
     * @return {string}
     */

  }, {
    key: 'getExtraUrlParamsString_',
    value: function getExtraUrlParamsString_(params) {
      var s = [];
      for (var k in params) {
        var v = params[k];
        if (v == null) {
          continue;
        } else {
          var sv = this.variableService_.encodeVars(k, v);
          s.push(encodeURIComponent(k) + '=' + sv);
        }
      }
      return s.join('&');
    }

    /**
     * Handle batchInterval
     */

  }, {
    key: 'initBatchInterval_',
    value: function initBatchInterval_() {
      if (!this.batchInterval_) {
        return;
      }

      this.batchInterval_ = (0, _types.isArray)(this.batchInterval_) ? this.batchInterval_ : [this.batchInterval_];

      for (var i = 0; i < this.batchInterval_.length; i++) {
        var interval = this.batchInterval_[i];
        (0, _log.user)().assert((0, _types.isFiniteNumber)(interval), 'Invalid batchInterval value: ' + this.batchInterval_ + 'interval must be a number');
        interval = Number(interval) * 1000;
        (0, _log.user)().assert(interval >= BATCH_INTERVAL_MIN, 'Invalid batchInterval value: ' + this.batchInterval_ + ', ' + ('interval value must be greater than ' + BATCH_INTERVAL_MIN + 'ms.'));
        this.batchInterval_[i] = interval;
      }

      this.batchIntervalPointer_ = 0;

      this.refreshBatchInterval_();
    }

    /**
     * Initializes report window.
     */

  }, {
    key: 'initReportWindow_',
    value: function initReportWindow_() {
      var _this5 = this;

      if (this.reportWindow_) {
        this.reportWindowTimeoutId_ = this.win.setTimeout(function () {
          // Flush batch queue;
          _this5.trigger_(true);
          _this5.reportRequest_ = false;
          // Clear batchInterval timeout
          if (_this5.batchIntervalTimeoutId_) {
            _this5.win.clearTimeout(_this5.batchIntervalTimeoutId_);
            _this5.batchIntervalTimeoutId_ = null;
          }
        }, this.reportWindow_ * 1000);
      }
    }

    /**
     * Schedule sending request regarding to batchInterval
     */

  }, {
    key: 'refreshBatchInterval_',
    value: function refreshBatchInterval_() {
      var _this6 = this;

      (0, _log.dev)().assert(this.batchIntervalPointer_ != null, 'Should not start batchInterval without pointer');
      var interval = this.batchIntervalPointer_ < this.batchInterval_.length ? this.batchInterval_[this.batchIntervalPointer_++] : this.batchInterval_[this.batchInterval_.length - 1];

      this.batchIntervalTimeoutId_ = this.win.setTimeout(function () {
        _this6.trigger_(true);
        _this6.refreshBatchInterval_();
      }, interval);
    }
  }]);

  return RequestHandler;
}();

},{"../../../src/log":38,"../../../src/services":53,"../../../src/types":57,"../../../src/url":60,"../../../src/utils/array":61,"../../../src/utils/object":65,"./batching-plugins":4,"./sandbox-vars-whitelist":13,"./variables":15}],12:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeResourceTiming = serializeResourceTiming;

var _variables = require('./variables');

var _array = require('../../../src/utils/array');

var _types = require('../../../src/types');

var _url = require('../../../src/url');

var _log = require('../../../src/log');

/**
 * A user-supplied JSON object that defines a resource to be reported. It is
 * expected to have some fields.
 * A resource timing enty will match against this resource if all of the
 * following properties match.
 * @property {string=} host A string whose value should be a RegExp. It defines
 *     a host or set of hosts to match against. By default, the RegExp will
 *     match all hosts if omitted.
 * @property {string=} path A string whose value should be a RegExp. It defines
 *     a path or set of paths to match against. By default, the RegExp will
 *     match all paths if omitted.
 * @property {string=} query A string whose value should be a RegExp. It defines
 *     a query string or set of query strings to match against. By default, the
 *     RegExp will match all query strings if omitted.
 * @typedef {!JsonObject}
 */
var IndividualResourceSpecDef = void 0;

/**
 * A parsed resource spec for a specific host or sets of hosts (as defined by
 * the hostPattern).
 * @typedef{{
 *   hostPattern: !RegExp,
 *   resouces: !Array<{
 *     name: string,
 *     pathPattern: !RegExp,
 *     queryPattern: !RegExp,
 *   }>,
 * }}
 */
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

var ResourceSpecForHostDef = void 0;

/**
 * The default maximum buffer size for resource timing entries. After the limit
 * has been reached, the browser will stop recording resource timing entries.
 * This number is chosen by the spec: https://w3c.github.io/resource-timing.
 * @const {number}
 */
var RESOURCE_TIMING_BUFFER_SIZE = 150;

/**
 * Yields the thread before running the function to avoid causing jank. (i.e. a
 * task that takes over 16ms.)
 * @param {function(): OUT} fn
 * @return {!Promise<OUT>}
 * @template OUT
 */
function yieldThread(fn) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve(fn());
    });
  });
}

/**
 * Checks whether the given object is a valid resource timing spec.
 * @param {!JsonObject} spec
 * @return {boolean}
 */
function validateResourceTimingSpec(spec) {
  if (!(0, _types.isObject)(spec['resources'])) {
    (0, _log.user)().warn('ANALYTICS', 'resourceTimingSpec missing "resources" field');
    return false;
  }
  if (!spec['encoding'] || !spec['encoding']['entry'] || !spec['encoding']['delim']) {
    (0, _log.user)().warn('ANALYTICS', 'resourceTimingSpec is missing or has incomplete encoding options');
    return false;
  }
  if (spec['encoding']['base'] < 2 || spec['encoding']['base'] > 36) {
    (0, _log.user)().warn('ANALYTICS', 'resource timing variables only supports bases between 2 and 36');
    return false;
  }
  if (spec['responseAfter'] != null && typeof spec['responseAfter'] != 'number') {
    (0, _log.user)().warn('ANALYTICS', 'resourceTimingSpec["responseAfter"] must be a number');
    return false;
  }
  return true;
}

/**
 * Gets all resource timing entries from the given window.
 * @param {!Window} win
 * @return {!Array<!PerformanceResourceTiming>}
 */
function getResourceTimingEntries(win) {
  return (/** @type {!Array<!PerformanceResourceTiming>} */win.performance.getEntriesByType('resource')
  );
}

/**
 * Converts a resource timing entry to the variables for this resource.
 * @param {!PerformanceResourceTiming} entry
 * @param {string} name Name of the resource set by the resourceTimingSpec.
 * @param {function(number, number=): string} format A function to format
 *    timestamps and intervals. (Two numbers will be passed in for intervals.)
 * @return {!ExpansionOptions}
 */
function entryToExpansionOptions(entry, name, format) {
  var vars = {
    // ${key} is the name of the resource from the resourceTimingSpec. i.e. it's
    // the key of the object that specifies the host and path patterns that this
    // resource matched against.
    'key': name,
    'startTime': format(entry.startTime),
    'redirectTime': format(entry.redirectEnd, entry.redirectStart),
    'domainLookupTime': format(entry.domainLookupEnd, entry.domainLookupStart),
    'tcpConnectTime': format(entry.connectEnd, entry.connectStart),
    'serverResponseTime': format(entry.responseStart, entry.requestStart),
    'networkTransferTime': format(entry.responseEnd, entry.responseStart),
    'transferSize': format(entry.transferSize || 0),
    'encodedBodySize': format(entry.encodedBodySize || 0),
    'decodedBodySize': format(entry.decodedBodySize || 0),
    'duration': format(entry.duration),
    'initiatorType': entry.initiatorType
  };
  return new _variables.ExpansionOptions(vars, 1 /* opt_iterations */);
}

/**
 * Returns the variables for the given resource timing entry if it matches one
 * of the defined resources, or null otherwise.
 * @param {!PerformanceResourceTiming} entry
 * @param {!Array<!ResourceSpecForHostDef>} resourcesByHost An array of resource
 *     specs to match against.
 * @return {?string} The name of the entry, or null if no matching name exists.
 */
function nameForEntry(entry, resourcesByHost) {
  var url = (0, _url.parseUrlDeprecated)(entry.name);
  for (var i = 0; i < resourcesByHost.length; ++i) {
    var _resourcesByHost$i = resourcesByHost[i],
        hostPattern = _resourcesByHost$i.hostPattern,
        resources = _resourcesByHost$i.resources;

    if (!hostPattern.test(url.host)) {
      continue;
    }
    var index = (0, _array.findIndex)(resources, function (res) {
      return res.pathPattern.test(url.pathname) && res.queryPattern.test(url.search);
    });
    if (index != -1) {
      return resources[index].name;
    }
  }
  return null; // No match.
}

/**
 * Groups all resource specs (which are defined in terms of {host, path, query}
 * patterns) by host pattern. This is used downstream to avoid running RegExps
 * for host patterns multiple times because we expect multiple resources to
 * use the same host pattern.
 * @param {!Object<string, !IndividualResourceSpecDef>} resourceDefs A map of
 *     names to the resource spec for that name.
 * @return {!Array<!ResourceSpecForHostDef>}
 */
function groupSpecsByHost(resourceDefs) {
  var byHost = {};
  for (var name in resourceDefs) {
    var host = resourceDefs[name]['host'] || '';
    var path = resourceDefs[name]['path'] || '';
    var query = resourceDefs[name]['query'] || '';
    var pattern = {
      name: name,
      pathPattern: new RegExp(path),
      queryPattern: new RegExp(query)
    };
    if (byHost[host]) {
      byHost[host].resources.push(pattern);
    } else {
      byHost[host] = {
        hostPattern: new RegExp(host),
        resources: [pattern]
      };
    }
  }
  var byHostArray = [];
  for (var _host in byHost) {
    byHostArray.push(byHost[_host]);
  }
  return byHostArray;
}

/**
 * Filters out resource timing entries that don't have a name defined in
 * resourceDefs. It returns a new array where each element contains a
 * resource timing entry and the corresponding name.
 * @param {!Array<!PerformanceResourceTiming>} entries
 * @param {!Object<string, !IndividualResourceSpecDef>} resourceDefs
 * @return {!Array<{entry: !PerformanceResourceTiming, name: string}>}
 */
function filterEntries(entries, resourceDefs) {
  // Group resource timing definitions by host since we expect multiple
  // definitions to have the same host.
  var byHost = groupSpecsByHost(resourceDefs);
  var results = [];
  entries.forEach(function (entry) {
    var name = nameForEntry(entry, byHost);
    if (name) {
      results.push({ entry: entry, name: name });
    }
  });
  return results;
}

/**
 * Serializes resource timing entries that match the resourceTimingSpec into a
 * single string.
 * @param {!Array<!PerformanceResourceTiming>} entries
 * @param {!JsonObject} resourceTimingSpec
 * @param {!Window} win
 * @return {!Promise<string>}
 */
function serialize(entries, resourceTimingSpec, win) {
  var resources = resourceTimingSpec['resources'];
  var encoding = resourceTimingSpec['encoding'];

  var variableService = (0, _variables.variableServiceFor)(win);
  var format = function format(val) {
    var relativeTo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return Math.round(val - relativeTo).toString(encoding['base'] || 10);
  };

  var promises = filterEntries(entries, resources).map(function (_ref) {
    var entry = _ref.entry,
        name = _ref.name;
    return entryToExpansionOptions(entry, name, format);
  }).map(function (expansion) {
    return variableService.expandTemplate(encoding['entry'], expansion);
  });
  return Promise.all(promises).then(function (vars) {
    return vars.join(encoding['delim']);
  });
}

/**
 * Serializes resource timing entries according to the resource timing spec.
 * @param {!Window} win
 * @param {!JsonObject} resourceTimingSpec
 * @return {!Promise<string>}
 */
function serializeResourceTiming(win, resourceTimingSpec) {
  // Check that the performance timing API exists before and that the spec is
  // valid before proceeding. If not, we simply return an empty string.
  if (resourceTimingSpec['done'] || !win.performance || !win.performance.now || !win.performance.getEntriesByType || !validateResourceTimingSpec(resourceTimingSpec)) {
    resourceTimingSpec['done'] = true;
    return Promise.resolve('');
  }
  var entries = getResourceTimingEntries(win);
  if (entries.length >= RESOURCE_TIMING_BUFFER_SIZE) {
    // We've exceeded the maximum buffer size so no additional metrics will be
    // reported for this resourceTimingSpec.
    resourceTimingSpec['done'] = true;
  }

  var responseAfter = resourceTimingSpec['responseAfter'] || 0;
  // Update responseAfter for next time to avoid reporting the same resource
  // multiple times.
  resourceTimingSpec['responseAfter'] = Math.max(responseAfter, win.performance.now());

  // Filter resources that are too early.
  entries = entries.filter(function (e) {
    return e.startTime + e.duration >= responseAfter;
  });
  if (!entries.length) {
    return Promise.resolve('');
  }
  // Yield the thread in case iterating over all resources takes a long time.
  return yieldThread(function () {
    return serialize(entries, resourceTimingSpec, win);
  });
}

},{"../../../src/log":38,"../../../src/types":57,"../../../src/url":60,"../../../src/utils/array":61,"./variables":15}],13:[function(require,module,exports){
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
 * Used for inserted scoped analytics element.
 * @const {!Object<string, boolean>}
 */
var SANDBOX_AVAILABLE_VARS = exports.SANDBOX_AVAILABLE_VARS = {
  'RANDOM': true,
  'CANONICAL_URL': true,
  'CANONICAL_HOST': true,
  'CANONICAL_HOSTNAME': true,
  'CANONICAL_PATH': true,
  'AMPDOC_URL': true,
  'AMPDOC_HOST': true,
  'AMPDOC_HOSTNAME': true,
  'SOURCE_URL': true,
  'SOURCE_HOST': true,
  'SOURCE_HOSTNAME': true,
  'SOURCE_PATH': true,
  'TIMESTAMP': true,
  'TIMEZONE': true,
  'TIMEZONE_CODE': true,
  'VIEWPORT_HEIGHT': true,
  'VIEWPORT_WIDTH': true,
  'SCREEN_WIDTH': true,
  'SCREEN_HEIGHT': true,
  'AVAILABLE_SCREEN_HEIGHT': true,
  'AVAILABLE_SCREEN_WIDTH': true,
  'SCREEN_COLOR_DEPTH': true,
  'DOCUMENT_CHARSET': true,
  'BROWSER_LANGUAGE': true,
  'AMP_VERSION': true,
  'BACKGROUND_STATE': true,
  'USER_AGENT': true,
  'FIRST_CONTENTFUL_PAINT': true,
  'FIRST_VIEWPORT_READY': true,
  'MAKE_BODY_VISIBLE': true
};

},{}],14:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transport = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
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

exports.sendRequest = sendRequest;
exports.sendRequestUsingIframe = sendRequestUsingIframe;

var _services = require('../../../src/services');

var _url = require('../../../src/url');

var _pixel = require('../../../src/pixel');

var _log = require('../../../src/log');

var _eventHelper = require('../../../src/event-helper');

var _dom = require('../../../src/dom');

var _style = require('../../../src/style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {string} */
var TAG_ = 'amp-analytics.Transport';

/**
 * @param {!Window} win
 * @param {string} request
 * @param {!Object<string, string|boolean>} transportOptions
 */
function sendRequest(win, request, transportOptions) {
  (0, _url.assertHttpsUrl)(request, 'amp-analytics request');
  (0, _url.checkCorsUrl)(request);

  var referrerPolicy = transportOptions['referrerPolicy'];

  if (referrerPolicy === 'no-referrer') {
    transportOptions['beacon'] = false;
    transportOptions['xhrpost'] = false;
  }

  if (transportOptions['beacon'] && Transport.sendRequestUsingBeacon(win, request)) {
    return;
  }
  if (transportOptions['xhrpost'] && Transport.sendRequestUsingXhr(win, request)) {
    return;
  }
  var image = transportOptions['image'];
  if (image) {
    var suppressWarnings = (typeof image === 'undefined' ? 'undefined' : _typeof(image)) == 'object' && image['suppressWarnings'];
    Transport.sendRequestUsingImage(win, request, suppressWarnings, /** @type {string|undefined} */referrerPolicy);
    return;
  }
  (0, _log.user)().warn(TAG_, 'Failed to send request', request, transportOptions);
}

/**
 * @visibleForTesting
 */

var Transport = exports.Transport = function () {
  function Transport() {
    _classCallCheck(this, Transport);
  }

  _createClass(Transport, null, [{
    key: 'sendRequestUsingImage',


    /**
     * @param {!Window} win
     * @param {string} request
     * @param {boolean} suppressWarnings
     * @param {string|undefined} referrerPolicy
     */
    value: function sendRequestUsingImage(win, request, suppressWarnings, referrerPolicy) {
      var image = (0, _pixel.createPixel)(win, request, referrerPolicy);
      (0, _eventHelper.loadPromise)(image).then(function () {
        (0, _log.dev)().fine(TAG_, 'Sent image request', request);
      }).catch(function () {
        if (!suppressWarnings) {
          (0, _log.user)().warn(TAG_, 'Response unparseable or failed to send image ' + 'request', request);
        }
      });
    }

    /**
     * @param {!Window} win
     * @param {string} request
     * @return {boolean} True if this browser supports navigator.sendBeacon.
     */

  }, {
    key: 'sendRequestUsingBeacon',
    value: function sendRequestUsingBeacon(win, request) {
      if (!win.navigator.sendBeacon) {
        return false;
      }
      var result = win.navigator.sendBeacon(request, '');
      if (result) {
        (0, _log.dev)().fine(TAG_, 'Sent beacon request', request);
      }
      return result;
    }

    /**
     * @param {!Window} win
     * @param {string} request
     * @return {boolean} True if this browser supports cross-domain XHR.
     */

  }, {
    key: 'sendRequestUsingXhr',
    value: function sendRequestUsingXhr(win, request) {
      if (!win.XMLHttpRequest) {
        return false;
      }
      /** @const {XMLHttpRequest} */
      var xhr = new win.XMLHttpRequest();
      if (!('withCredentials' in xhr)) {
        return false; // Looks like XHR level 1 - CORS is not supported.
      }
      xhr.open('POST', request, true);
      xhr.withCredentials = true;

      // Prevent pre-flight HEAD request.
      xhr.setRequestHeader('Content-Type', 'text/plain');

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          (0, _log.dev)().fine(TAG_, 'Sent XHR request', request);
        }
      };

      xhr.send('');
      return true;
    }
  }]);

  return Transport;
}();

/**
 * Sends a ping request using an iframe, that is removed 5 seconds after
 * it is loaded.
 * This is not available as a standard transport, but rather used for
 * specific, whitelisted requests.
 * Note that this is unrelated to the cross-domain iframe use case above in
 * sendRequestUsingCrossDomainIframe()
 * @param {!Window} win
 * @param {string} request The request URL.
 */


function sendRequestUsingIframe(win, request) {
  (0, _url.assertHttpsUrl)(request, 'amp-analytics request');
  /** @const {!Element} */
  var iframe = win.document.createElement('iframe');
  (0, _style.setStyle)(iframe, 'display', 'none');
  iframe.onload = iframe.onerror = function () {
    _services.Services.timerFor(win).delay(function () {
      (0, _dom.removeElement)(iframe);
    }, 5000);
  };
  (0, _log.user)().assert((0, _url.parseUrlDeprecated)(request).origin != (0, _url.parseUrlDeprecated)(win.location.href).origin, 'Origin of iframe request must not be equal to the document origin.' + ' See https://github.com/ampproject/' + ' amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.');
  iframe.setAttribute('amp-analytics', '');
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin');
  iframe.src = request;
  win.document.body.appendChild(iframe);
  return iframe;
}

},{"../../../src/dom":27,"../../../src/event-helper":30,"../../../src/log":38,"../../../src/pixel":42,"../../../src/services":53,"../../../src/style":56,"../../../src/url":60}],15:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableService = exports.ExpansionOptions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

// TODO(calebcordry) remove this once experiment is launched
// also remove from dep-check-config whitelist;


exports.installVariableService = installVariableService;
exports.variableServiceFor = variableServiceFor;

var _services = require('../../../src/services');

var _base = require('../../../src/utils/base64');

var _log = require('../../../src/log');

var _service = require('../../../src/service');

var _types = require('../../../src/types');

var _experiments = require('../../../src/experiments');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {string} */
var TAG = 'Analytics.Variables';

/** @const {RegExp} */
var VARIABLE_ARGS_REGEXP = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/;

/** @typedef {{name: string, argList: string}} */
var FunctionNameArgsDef = void 0;

/**
 * The structure that contains all details needed to expand a template
 * @struct
 * @const
 * @package For type.
 */

var ExpansionOptions = exports.ExpansionOptions = function () {
  /**
   * @param {!Object<string, *>} vars
   * @param {number=} opt_iterations
   * @param {boolean=} opt_noEncode
   */
  function ExpansionOptions(vars, opt_iterations, opt_noEncode) {
    _classCallCheck(this, ExpansionOptions);

    /** @const {!Object<string, string|Array<string>>} */
    this.vars = vars;
    /** @const {number} */
    this.iterations = opt_iterations === undefined ? 2 : opt_iterations;
    /** @const {boolean} */
    this.noEncode = !!opt_noEncode;
    this.freezeVars = {};
  }

  /**
   * Freeze special variable name so that they don't get expanded.
   * For example ${extraUrlParams}
   * @param {string} str
   */


  _createClass(ExpansionOptions, [{
    key: 'freezeVar',
    value: function freezeVar(str) {
      this.freezeVars[str] = true;
    }
  }]);

  return ExpansionOptions;
}();

/**
 * @param {string} str
 * @param {string} s
 * @param {string=} opt_l
 * @return {string}
 */


function substrMacro(str, s, opt_l) {
  var start = Number(s);
  var length = str.length;

  (0, _log.user)().assert((0, _types.isFiniteNumber)(start), 'Start index ' + start + 'in substr macro should be a number');
  if (opt_l) {
    length = Number(opt_l);
    (0, _log.user)().assert((0, _types.isFiniteNumber)(length), 'Length ' + length + ' in substr macro should be a number');
  }

  return str.substr(start, length);
}

/**
 * @param {string} value
 * @param {string} defaultValue
 * @return {string}
 */
function defaultMacro(value, defaultValue) {
  if (!value || !value.length) {
    return (0, _log.user)().assertString(defaultValue);
  }
  return value;
}

/**
 * @param {string} string input to be replaced
 * @param {string} matchPattern string representation of regex pattern
 * @param {string=} opt_newSubStr pattern to be substituted in
 * @return {string}
 */
function replaceMacro(string, matchPattern, opt_newSubStr) {
  if (!matchPattern) {
    (0, _log.user)().warn(TAG, 'REPLACE macro must have two or more arguments');
  }
  if (!opt_newSubStr) {
    opt_newSubStr = '';
  }
  var regex = new RegExp(matchPattern, 'g');
  return string.replace(regex, opt_newSubStr);
}

/**
 * Provides support for processing of advanced variable syntax like nested
 * expansions macros etc.
 */

var VariableService = exports.VariableService = function () {
  /**
   * @param {!Window} window
   */
  function VariableService(window) {
    _classCallCheck(this, VariableService);

    /** @private {!Window} */
    this.win_ = window;

    /** @private {!Object<string, *>} */
    this.macros_ = {};

    this.register_('$DEFAULT', defaultMacro);
    this.register_('$SUBSTR', substrMacro);
    this.register_('$TRIM', function (value) {
      return value.trim();
    });
    this.register_('$JSON', function (value) {
      return JSON.stringify(value);
    });
    this.register_('$TOLOWERCASE', function (value) {
      return value.toLowerCase();
    });
    this.register_('$TOUPPERCASE', function (value) {
      return value.toUpperCase();
    });
    this.register_('$NOT', function (value) {
      return String(!value);
    });
    this.register_('$BASE64', function (value) {
      return (0, _base.base64UrlEncodeFromString)(value);
    });
    this.register_('$HASH', this.hashMacro_.bind(this));
    this.register_('$IF', function (value, thenValue, elseValue) {
      return value ? thenValue : elseValue;
    });
    this.register_('$REPLACE', replaceMacro);
  }

  /**
   * @return {!Object} contains all registered macros
   */


  _createClass(VariableService, [{
    key: 'getMacros',
    value: function getMacros() {
      var isV2ExpansionOn = this.win_ && (0, _experiments.isExperimentOn)(this.win_, 'url-replacement-v2');
      return isV2ExpansionOn ? this.macros_ : {};
    }

    /**
     * @param {string} name
     * @param {*} macro
     */

  }, {
    key: 'register_',
    value: function register_(name, macro) {
      (0, _log.dev)().assert(!this.macros_[name], 'Macro "' + name + '" already registered.');
      this.macros_[name] = macro;
    }

    /**
     * @param {string} template The template to expand
     * @param {!ExpansionOptions} options configuration to use for expansion
     * @return {!Promise<string>} The expanded string
     */

  }, {
    key: 'expandTemplate',
    value: function expandTemplate(template, options) {
      var _this = this;

      if (options.iterations < 0) {
        (0, _log.user)().error(TAG, 'Maximum depth reached while expanding variables. ' + 'Please ensure that the variables are not recursive.');
        return Promise.resolve(template);
      }

      var replacementPromises = [];
      var replacement = template.replace(/\${([^}]*)}/g, function (match, key) {
        if (!key) {
          return Promise.resolve('');
        }

        var _getNameArgs_ = _this.getNameArgs_(key),
            name = _getNameArgs_.name,
            argList = _getNameArgs_.argList;

        if (options.freezeVars[name]) {
          // Do nothing with frozen params
          return match;
        }

        var raw = options.vars[name] != null ? options.vars[name] : '';

        var p = void 0;
        if (typeof raw == 'string') {
          // Expand string values further.
          p = _this.expandTemplate(raw, new ExpansionOptions(options.vars, options.iterations - 1, true /* noEncode */));
        } else {
          // Values can also be arrays and objects. Don't expand them.
          p = Promise.resolve(raw);
        }

        p = p.then(function (finalRawValue) {
          // Then encode the value
          var val = options.noEncode ? finalRawValue : _this.encodeVars(name, finalRawValue);
          return val ? val + argList : val;
        }).then(function (encodedValue) {
          // Replace it in the string
          replacement = replacement.replace(match, encodedValue);
        });

        // Queue current replacement promise after the last replacement.
        replacementPromises.push(p);

        // Since the replacement will happen later, return the original template.
        return match;
      });

      // Once all the promises are complete, return the expanded value.
      return Promise.all(replacementPromises).then(function () {
        return replacement;
      });
    }

    /**
     * Returns an array containing two values: name and args parsed from the key.
     *
     * @param {string} key The key to be parsed.
     * @return {!FunctionNameArgsDef}
     * @private
     */

  }, {
    key: 'getNameArgs_',
    value: function getNameArgs_(key) {
      if (!key) {
        return { name: '', argList: '' };
      }
      var match = key.match(VARIABLE_ARGS_REGEXP);
      (0, _log.user)().assert(match, 'Variable with invalid format found: ' + key);
      return { name: match[1] || match[0], argList: match[2] || '' };
    }

    /**
     * @param {string} unusedName Name of the variable. Only used in tests.
     * @param {string|!Array<string>} raw The values to URI encode.
     * @return {string} The encoded value.
     */

  }, {
    key: 'encodeVars',
    value: function encodeVars(unusedName, raw) {
      if (raw == null) {
        return '';
      }

      if ((0, _types.isArray)(raw)) {
        return raw.map(this.encodeVars.bind(this, unusedName)).join(',');
      }
      // Separate out names and arguments from the value and encode the value.

      var _getNameArgs_2 = this.getNameArgs_(String(raw)),
          name = _getNameArgs_2.name,
          argList = _getNameArgs_2.argList;

      return encodeURIComponent(name) + argList;
    }

    /**
     * @param {string} value
     * @return {!Promise<string>}
     */

  }, {
    key: 'hashMacro_',
    value: function hashMacro_(value) {
      return _services.Services.cryptoFor(this.win_).sha384Base64(value);
    }
  }]);

  return VariableService;
}();

/**
 * @param {!Window} win
 */


function installVariableService(win) {
  (0, _service.registerServiceBuilder)(win, 'amp-analytics-variables', VariableService);
}

/**
 * @param {!Window} win
 * @return {!VariableService}
 */
function variableServiceFor(win) {
  return (0, _service.getService)(win, 'amp-analytics-variables');
}

},{"../../../src/experiments":31,"../../../src/log":38,"../../../src/service":51,"../../../src/services":53,"../../../src/types":57,"../../../src/utils/base64":62}],16:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANALYTICS_CONFIG = undefined;

var _iframeTransportVendors = require('./iframe-transport-vendors');

var _object = require('../../../src/utils/object');

/**
 * @const {!JsonObject}
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

var ANALYTICS_CONFIG = /** @type {!JsonObject} */exports.ANALYTICS_CONFIG = {

  // Default parent configuration applied to all amp-analytics tags.
  'default': {
    'transport': { 'beacon': true, 'xhrpost': true, 'image': true },
    'vars': {
      'accessReaderId': 'ACCESS_READER_ID',
      'adNavTiming': 'AD_NAV_TIMING', // only available in A4A embeds
      'adNavType': 'AD_NAV_TYPE', // only available in A4A embeds
      'adRedirectCount': 'AD_NAV_REDIRECT_COUNT', // only available in A4A
      'ampdocHost': 'AMPDOC_HOST',
      'ampdocHostname': 'AMPDOC_HOSTNAME',
      'ampdocUrl': 'AMPDOC_URL',
      'ampGeo': 'AMP_GEO',
      'ampState': 'AMP_STATE',
      'ampVersion': 'AMP_VERSION',
      'ancestorOrigin': 'ANCESTOR_ORIGIN',
      'authdata': 'AUTHDATA',
      'availableScreenHeight': 'AVAILABLE_SCREEN_HEIGHT',
      'availableScreenWidth': 'AVAILABLE_SCREEN_WIDTH',
      'backgroundState': 'BACKGROUND_STATE',
      'browserLanguage': 'BROWSER_LANGUAGE',
      'canonicalHost': 'CANONICAL_HOST',
      'canonicalHostname': 'CANONICAL_HOSTNAME',
      'canonicalPath': 'CANONICAL_PATH',
      'canonicalUrl': 'CANONICAL_URL',
      'clientId': 'CLIENT_ID',
      'contentLoadTime': 'CONTENT_LOAD_TIME',
      'counter': 'COUNTER',
      'documentCharset': 'DOCUMENT_CHARSET',
      'documentReferrer': 'DOCUMENT_REFERRER',
      'domainLookupTime': 'DOMAIN_LOOKUP_TIME',
      'domInteractiveTime': 'DOM_INTERACTIVE_TIME',
      'externalReferrer': 'EXTERNAL_REFERRER',
      'firstContentfulPaint': 'FIRST_CONTENTFUL_PAINT',
      'firstViewportReady': 'FIRST_VIEWPORT_READY',
      'fragmentParam': 'FRAGMENT_PARAM',
      'makeBodyVisible': 'MAKE_BODY_VISIBLE',
      'htmlAttr': 'HTML_ATTR',
      'incrementalEngagedTime': 'INCREMENTAL_ENGAGED_TIME',
      'navRedirectCount': 'NAV_REDIRECT_COUNT',
      'navTiming': 'NAV_TIMING',
      'navType': 'NAV_TYPE',
      'pageDownloadTime': 'PAGE_DOWNLOAD_TIME',
      'pageLoadTime': 'PAGE_LOAD_TIME',
      'pageViewId': 'PAGE_VIEW_ID',
      'queryParam': 'QUERY_PARAM',
      'random': 'RANDOM',
      'redirectTime': 'REDIRECT_TIME',
      'screenColorDepth': 'SCREEN_COLOR_DEPTH',
      'screenHeight': 'SCREEN_HEIGHT',
      'screenWidth': 'SCREEN_WIDTH',
      'scrollHeight': 'SCROLL_HEIGHT',
      'scrollLeft': 'SCROLL_LEFT',
      'scrollTop': 'SCROLL_TOP',
      'scrollWidth': 'SCROLL_WIDTH',
      'serverResponseTime': 'SERVER_RESPONSE_TIME',
      'sourceUrl': 'SOURCE_URL',
      'sourceHost': 'SOURCE_HOST',
      'sourceHostname': 'SOURCE_HOSTNAME',
      'sourcePath': 'SOURCE_PATH',
      'tcpConnectTime': 'TCP_CONNECT_TIME',
      'timestamp': 'TIMESTAMP',
      'timezone': 'TIMEZONE',
      'timezoneCode': 'TIMEZONE_CODE',
      'title': 'TITLE',
      'totalEngagedTime': 'TOTAL_ENGAGED_TIME',
      'userAgent': 'USER_AGENT',
      'viewer': 'VIEWER',
      'viewportHeight': 'VIEWPORT_HEIGHT',
      'viewportWidth': 'VIEWPORT_WIDTH'
    }
  },
  'acquialift': {
    'vars': {
      'decisionApiUrl': 'us-east-1-decisionapi.lift.acquia.com',
      'accountId': 'xxxxxxxx',
      'siteId': 'xxxxxxxx'
    },
    'transport': { 'beacon': true, 'xhrpost': true, 'image': false },
    'requests': {
      'base': 'https://${decisionApiUrl}/capture?account_id=${accountId}&site_id=${siteId}',
      'basicCapture': '${base}' + '&ident=${clientId(tc_ptid)}' + '&identsrc=amp' + '&es=Amp' + '&url=${canonicalUrl}' + '&rurl=${documentReferrer}' + '&cttl=${title}',
      'pageview': '${basicCapture}' + '&en=Content View',
      'click': '${basicCapture}' + '&en=Click-Through'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'afsanalytics': {
    'vars': {
      'server': 'www',
      'websiteid': 'xxxxxxxx',
      'event': 'click',
      'clicklabel': 'clicked from AMP page'
    },
    'transport': { 'beacon': false, 'xhrpost': false, 'image': true },
    'requests': {
      'host': '//${server}.afsanalytics.com',
      'base': '${host}/cgi_bin/',
      'pageview': '${base}connect.cgi?usr=${websiteid}Pauto' + '&js=1' + '&amp=1' + '&title=${title}' + '&url=${canonicalUrl}' + '&refer=${documentReferrer}' + '&resolution=${screenWidth}x${screenHeight}' + '&color=${screenColorDepth}' + '&Tips=${random}',
      'click': '${base}click.cgi?usr=${websiteid}' + '&event=${event}' + '&exit=${clicklabel}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'alexametrics': {
    'requests': {
      'base': 'https://${ampAtrkHost}/atrk.gif?account=${atrk_acct}&domain=${domain}',
      'pageview': '${base}&jsv=amp-${ampVersion}' + '&frame_height=${viewportHeight}&frame_width=${viewportWidth}' + '&title=${title}&time=${timestamp}&time_zone_offset=${timezone}' + '&screen_params=${screenWidth}x${screenHeight}x${screenColorDepth}' + '&ref_url=${documentReferrer}&host_url=${sourceUrl}' + '&random_number=${random}&user_cookie=${clientId(__auc)}' + '&user_cookie_flag=0&user_lang=${browserLanguage}' + '&amp_doc_url=${ampdocUrl}'
    },
    'vars': {
      'atrk_acct': '',
      'domain': '',
      'ampAtrkHost': 'certify-amp.alexametrics.com'
    },
    'triggers': {
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'xhrpost': false,
      'beacon': false,
      'image': true
    }
  },

  'atinternet': {
    'transport': { 'beacon': false, 'xhrpost': false, 'image': true },
    'requests': {
      'base': 'https://${log}${domain}/hit.xiti?s=${site}&ts=${timestamp}&r=${screenWidth}x${screenHeight}x${screenColorDepth}&re=${availableScreenWidth}x${availableScreenHeight}',
      'suffix': '&medium=amp&${extraUrlParams}&ref=${documentReferrer}',
      'pageview': '${base}&' + 'p=${title}&' + 's2=${level2}${suffix}',
      'click': '${base}&' + 'pclick=${title}&' + 's2click=${level2}&' + 'p=${label}&' + 's2=${level2Click}&' + 'type=click&click=${type}${suffix}'
    }
  },

  'umenganalytics': {
    'vars': {
      'siteid': '',
      'initial_view_time': '',
      'eventName': '',
      'eventProps': ''
    },
    'requests': {
      'base': 'https://b.cnzz.com/utrack?' + '&_siteid=${siteid}' + '&_distinct_id=${clientId(umeng_amp_id)}' + '&_t=${timestamp}' + '&_s=google' + '&_b=web' + '&_r=${externalReferrer}' + '&_h=${screenHeight}' + '&_w=${screenWidth}' + '&_ivt=${initial_view_time}',
      'pageview': '${base}&_ename=$w_page_view&_eprops=${eventProps}',
      'event': '${base}&_ename=${eventName}&_eprops=${eventProps}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'baiduanalytics': {
    'requests': {
      'host': 'https://hm.baidu.com',
      'base': '${host}/hm.gif?' + 'si=${token}&nv=0&st=4&v=pixel-1.0&rnd=${timestamp}',
      'pageview': '${base}&et=0',
      'event': '${base}&ep=${category}*${action}*' + '${label}*${value}&et=4&api=8_0'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'burt': {
    'vars': {
      'trackingKey': 'ignore',
      'category': '',
      'subCategory': ''
    },
    'requests': {
      'host': '//${trackingKey}.c.richmetrics.com/',
      'base': '${host}imglog?' + 'e=${trackingKey}&' + 'pi=${trackingKey}' + '|${pageViewId}' + '|${canonicalPath}' + '|${clientId(burt-amp-user-id)}&' + 'ui=${clientId(burt-amp-user-id)}&' + 'v=amp&' + 'ts=${timestamp}&' + 'sn=${requestCount}&',
      'pageview': '${base}' + 'type=page&' + 'ca=${category}&' + 'sc=${subCategory}&' + 'ln=${browserLanguage}&' + 'lr=${documentReferrer}&' + 'eu=${sourceUrl}&' + 'tz=${timezone}&' + 'pd=${scrollWidth}x${scrollHeight}&' + 'sd=${screenWidth}x${screenHeight}&' + 'wd=${availableScreenWidth}x${availableScreenHeight}&' + 'ws=${scrollLeft}x${scrollTop}',
      'pageping': '${base}' + 'type=pageping'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      },
      'pageping': {
        'on': 'timer',
        'timerSpec': {
          'interval': 15,
          'maxTimerLength': 1200
        },
        'request': 'pageping'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'byside': {
    'vars': {
      'webcareZone': 'webcare',
      'webcareId': '',
      'channel': '',
      'fid': '',
      'lang': 'pt'
    },
    'requests': {
      'host': '//${webcareZone}.byside.com/',
      'base': '${host}BWA${webcareId}/amp/',
      'pageview': '${base}pixel.php',
      'event': '${base}signal.php?event_id=${eventId}' + '&event_label=${eventLabel}&fields=${fields}'
    },
    'extraUrlParams': {
      'webcare_id': '${webcareId}',
      'bwch': '${channel}',
      'lang': '${lang}',
      'fid': '${fid}',
      'bwit': 'A',
      'tuid': '${clientId(byside_webcare_tuid)}',
      'suid': '',
      'puid': '${pageViewId}p${timestamp}',
      'referrer': '${documentReferrer}',
      'page': '${sourceUrl}',
      'amppage': '${ampdocUrl}',
      'bwpt': '${title}',
      'bres': '${viewportWidth}x${viewportHeight}',
      'res': '${screenWidth}x${screenHeight}',
      'v': 'v20171116a',
      'ampv': '${ampVersion}',
      'viewer': '${viewer}',
      'ua': '${userAgent}',
      'r': '${random}'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'chartbeat': {
    'requests': {
      'host': 'https://ping.chartbeat.net',
      'basePrefix': '/ping?h=${domain}&' + 'p=${canonicalPath}&' + 'u=${clientId(_cb)}&' + 'd=${canonicalHost}&' + 'g=${uid}&' + 'g0=${sections}&' + 'g1=${authors}&' + 'g2=${zone}&' + 'g3=${sponsorName}&' + 'g4=${contentType}&' + 'c=120&' + 'x=${scrollTop}&' + 'y=${scrollHeight}&' + 'j=${decayTime}&' + 'R=1&' + 'W=0&' + 'I=0&' + 'E=${totalEngagedTime}&' + 'r=${documentReferrer}&' + 't=${pageViewId}${clientId(_cb)}&' + 'b=${pageLoadTime}&' + 'i=${title}&' + 'T=${timestamp}&' + 'tz=${timezone}&' + 'C=2',
      'baseSuffix': '&_',
      'interval': '${host}${basePrefix}${baseSuffix}',
      'anchorClick': '${host}${basePrefix}${baseSuffix}'
    },
    'triggers': {
      'trackInterval': {
        'on': 'timer',
        'timerSpec': {
          'interval': 15,
          'maxTimerLength': 7200
        },
        'request': 'interval',
        'vars': {
          'decayTime': 30
        }
      },
      'trackAnchorClick': {
        'on': 'click',
        'selector': 'a',
        'request': 'anchorClick',
        'vars': {
          'decayTime': 30
        }
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'clicky': {
    'vars': {
      'site_id': ''
    },
    'requests': {
      'base': 'https://in.getclicky.com/in.php?' + 'site_id=${site_id}',
      'baseSuffix': '&mime=${contentType}&' + 'x=${random}',
      'pageview': '${base}&' + 'res=${screenWidth}x${screenHeight}&' + 'lang=${browserLanguage}&' + 'secure=1&' + 'type=pageview&' + 'href=${canonicalPath}&' + 'title=${title}' + '${baseSuffix}',
      'interval': '${base}&' + 'type=ping' + '${baseSuffix}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      },
      'interval': {
        'on': 'timer',
        'timerSpec': {
          'interval': 60,
          'maxTimerLength': 600
        },
        'request': 'interval'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'colanalytics': {
    'requests': {
      'host': 'https://ase.clmbtech.com',
      'base': '${host}/message',
      'pageview': '${base}?cid=${id}' + '&val_101=${id}' + '&val_101=${canonicalPath}' + '&ch=${canonicalHost}' + '&uuid=${uid}' + '&au=${authors}' + '&zo=${zone}' + '&sn=${sponsorName}' + '&ct=${contentType}' + '&st=${scrollTop}' + '&sh=${scrollHeight}' + '&dct=${decayTime}' + '&tet=${totalEngagedTime}' + '&dr=${documentReferrer}' + '&plt=${pageLoadTime}' + '&val_108=${title}' + '&val_120=3'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'comscore': {
    'vars': {
      'c2': '1000001'
    },
    'requests': {
      'host': 'https://sb.scorecardresearch.com',
      'base': '${host}/b?',
      'pageview': '${base}c1=2' + '&c2=${c2}' + '&cs_pv=${pageViewId}' + '&c12=${clientId(comScore)}' + '&rn=${random}' + '&c8=${title}' + '&c7=${canonicalUrl}' + '&c9=${documentReferrer}' + '&cs_c7amp=${ampdocUrl}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'cxense': {
    'requests': {
      'host': 'https://scomcluster.cxense.com',
      'base': '${host}/Repo/rep.gif',
      'pageview': '${base}?ver=1&typ=pgv&sid=${siteId}&ckp=${clientId(cX_P)}&' + 'loc=${sourceUrl}&rnd=${random}&ref=${documentReferrer}&' + 'ltm=${timestamp}&wsz=${screenWidth}x${screenHeight}&' + 'bln=${browserLanguage}&chs=${documentCharset}&' + 'col=${screenColorDepth}&tzo=${timezone}&cp_cx_channel=amp'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'dynatrace': {
    'requests': {
      'endpoint': '${protocol}://${tenant}${separator}${environment}:${port}/ampbf/${tenantpath}',
      'pageview': '${endpoint}?type=js&' + 'flavor=amp&' + 'v=1&' + 'a=1%7C1%7C_load_%7C_load_%7C-%7C${navTiming(navigationStart)}%7C' + '${navTiming(domContentLoadedEventEnd)}%7C0%2C2%7C2%7C_onload_%7C' + '_load_%7C-%7C${navTiming(domContentLoadedEventStart)}%7C' + '${navTiming(domContentLoadedEventEnd)}%7C0&' + 'fId=${pageViewId}&' + 'vID=${clientId(rxVisitor)}&' + 'referer=${sourceUrl}&' + 'title=${title}&' + 'sw=${screenWidth}&' + 'sh=${screenHeight}&' + 'w=${viewportWidth}&' + 'h=${viewportHeight}&' + 'nt=a${navType}' + 'b${navTiming(navigationStart)}' + 'c${navTiming(navigationStart,redirectStart)}' + 'd${navTiming(navigationStart,redirectEnd)}' + 'e${navTiming(navigationStart,fetchStart)}' + 'f${navTiming(navigationStart,domainLookupStart)}' + 'g${navTiming(navigationStart,domainLookupEnd)}' + 'h${navTiming(navigationStart,connectStart)}' + 'i${navTiming(navigationStart,connectEnd)}' + 'j${navTiming(navigationStart,secureConnectionStart)}' + 'k${navTiming(navigationStart,requestStart)}' + 'l${navTiming(navigationStart,responseStart)}' + 'm${navTiming(navigationStart,responseEnd)}' + 'n${navTiming(navigationStart,domLoading)}' + 'o${navTiming(navigationStart,domInteractive)}' + 'p${navTiming(navigationStart,domContentLoadedEventStart)}' + 'q${navTiming(navigationStart,domContentLoadedEventEnd)}' + 'r${navTiming(navigationStart,domComplete)}' + 's${navTiming(navigationStart,loadEventStart)}' + 't${navTiming(navigationStart,loadEventEnd)}&' + 'app=${app}&' + 'time=${timestamp}'
    },
    'triggers': {
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    },
    'vars': {
      'app': 'ampapp',
      'protocol': 'https',
      'tenant': '',
      'environment': 'live.dynatrace.com',
      'port': '443',
      'separator': '.'
    }
  },

  'euleriananalytics': {
    'vars': {
      'analyticsHost': '',
      'documentLocation': 'SOURCE_URL'
    },
    'requests': {
      'base': 'https://${analyticsHost}',
      'basePrefix': '-/${random}?' + 'euid-amp=${clientId(etuix)}&' + 'url=${documentLocation}&',
      'pageview': '${base}/col2/${basePrefix}' + 'rf=${externalReferrer}&' + 'urlp=${pagePath}&' + 'ss=${screenWidth}x${screenHeight}&' + 'sd=${screenColorDepth}',
      'action': '${base}/action/${basePrefix}' + 'eact=${actionCode}&' + 'actr=${actionRef}',
      'user': '${base}/uparam/${basePrefix}' + 'euk${userParamKey}=${userParamVal}',
      'contextflag': '${base}/cflag2/${basePrefix}' + 'ecf0k=${cflagKey}&ecf0v=${cflagVal}'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'facebookpixel': {
    'vars': {
      'pixelId': 'PIXEL-ID'
    },
    'requests': {
      'host': 'https://www.facebook.com',
      'base': '${host}/tr?noscript=1',
      'pageview': '${base}&ev=PageView&' + 'id=${pixelId}',
      'event': '${base}&ev=${eventName}&' + 'id=${pixelId}' + '&cd[content_name]=${content_name}',
      'eventViewContent': '${base}&ev=ViewContent&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[content_type]=${content_type}' + '&cd[content_ids]=${content_ids}',
      'eventSearch': '${base}&ev=Search&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_category]=${content_category}' + '&cd[content_ids]=${content_ids}' + '&cd[search_string]=${search_string}',
      'eventAddToCart': '${base}&ev=AddToCart&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[content_type]=${content_type}' + '&cd[content_ids]=${content_ids}',
      'eventAddToWishlist': '${base}&ev=AddToWishlist&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[content_category]=${content_category}' + '&cd[content_ids]=${content_ids}',
      'eventInitiateCheckout': '${base}&ev=InitiateCheckout&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[content_category]=${content_category}' + '&cd[num_items]=${num_items}' + '&cd[content_ids]=${content_ids}',
      'eventAddPaymentInfo': '${base}&ev=AddPaymentInfo&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_category]=${content_category}' + '&cd[content_ids]=${content_ids}',
      'eventPurchase': '${base}&ev=Purchase&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[content_type]=${content_type}' + '&cd[content_ids]=${content_ids}' + '&cd[num_items]=${num_items}',
      'eventLead': '${base}&ev=Lead&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[content_category]=${content_category}',
      'eventCompleteRegistration': '${base}&ev=CompleteRegistration&' + 'id=${pixelId}' + '&cd[value]=${value}' + '&cd[currency]=${currency}' + '&cd[content_name]=${content_name}' + '&cd[status]=${status}'
    },
    'triggers': {
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'gemius': {
    'requests': {
      'base': 'https://${prefix}.hit.gemius.pl/_${timestamp}/redot.gif?l=91&id=${identifier}&screen=${screenWidth}x${screenHeight}&window=${viewportWidth}x${viewportHeight}&fr=1&href=${sourceUrl}&ref=${documentReferrer}&extra=gemamp%3D1%7Campid%3D${clientId(gemius)}%7C${extraparams}',
      'pageview': '${base}&et=view&hsrc=1',
      'event': '${base}&et=action&hsrc=3'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'googleadwords': { // https://developers.google.com/adwords/amp/landing-pages
    'requests': {
      'conversion_prefix': 'https://www.googleadservices.com/pagead/conversion/',
      'remarketing_prefix': 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/',
      'common_params': '${googleConversionId}/?' + 'cv=amp2&' + // Increment when making changes.
      'label=${googleConversionLabel}&' + 'random=${random}&' + 'url=${sourceUrl}&' + 'ref=${documentReferrer}&' + 'fst=${pageViewId}&' + 'num=${counter(googleadwords)}&' + 'fmt=3&' + 'async=1&' + 'u_h=${screenHeight}&u_w=${screenWidth}&' + 'u_ah=${availableScreenHeight}&u_aw=${availableScreenWidth}&' + 'u_cd=${screenColorDepth}&' + 'u_tz=${timezone}&' + 'tiba=${title}&' + 'guid=ON&script=0',
      'conversion_params': 'value=${googleConversionValue}&' + 'currency_code=${googleConversionCurrency}&' + 'bg=${googleConversionColor}&' + 'hl=${googleConversionLanguage}',
      'conversion': '${conversion_prefix}${common_params}&${conversion_params}',
      'remarketing': '${remarketing_prefix}${common_params}'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'gtag': {
    'configRewriter': {
      'url': 'https://www.googletagmanager.com/gtag/amp'
    },
    'vars': {
      'eventValue': '0',
      'documentLocation': 'SOURCE_URL',
      'clientId': 'CLIENT_ID(AMP_ECID_GOOGLE,,_ga)',
      'dataSource': 'AMP',
      'anonymizeIP': 'aip',
      'errorParam': '${errorName}-${errorMessage}'
    },
    'requests': {
      'uaHost': 'https://www.google-analytics.com',
      'uaBasePrefix': 'v=1&' + '_v=a1&' + 'ds=${dataSource}&' + '${anonymizeIP}&' + '_s=${requestCount}&' + 'dt=${title}&' + 'sr=${screenWidth}x${screenHeight}&' + 'cid=${clientId}&' + 'tid=${trackingId}&' + 'dl=${documentLocation}&' + 'dr=${externalReferrer}&' + 'sd=${screenColorDepth}&' + 'ul=${browserLanguage}&' + 'de=${documentCharset}',
      'uaBaseSuffix': '&a=${pageViewId}&' + 'z=${random}',
      'uaPageviewCommon': '&t=pageview&' + 'jid=${random}&' + 'gjid=${random}&' + '_r=1',
      'uaPageview': '${uaHost}/r/collect?${uaBasePrefix}' + '${uaPageviewCommon}' + '${uaBaseSuffix}',
      'uaPageviewNpa': '${uaHost}/collect?${uaBasePrefix}' + '${uaPageviewCommon}' + '${uaBaseSuffix}',
      'uaEvent': '${uaHost}/collect?${uaBasePrefix}&' + 't=event&' + 'jid=' + '${uaBaseSuffix}',
      'uaTiming': '${uaHost}/collect?${uaBasePrefix}&' + 'jid=&' + 'plt=${pageLoadTime}&' + 'dns=${domainLookupTime}&' + 'tcp=${tcpConnectTime}&' + 'rrt=${redirectTime}&' + 'srt=${serverResponseTime}&' + 'pdt=${pageDownloadTime}&' + 'clt=${contentLoadTime}&' + 'dit=${domInteractiveTime}' + '${uaBaseSuffix}',
      'uaError': '${uaHost}/collect?${uaBasePrefix}&' + 't=exception&' + 'exd=${errorParam}' + '${uaBaseSuffix}',
      'awConversionPrefix': 'https://www.googleadservices.com/pagead/conversion/',
      'awRemarketingPrefix': 'https://googleads.g.doubleclick.net/pagead/viewthroughconversion/',
      'awCommonParams': '${conversionId}/?' + 'cv=amp3&' + // Increment when making changes.
      'label=${conversionLabel}&' + 'random=${random}&' + 'url=${sourceUrl}&' + 'ref=${documentReferrer}&' + 'fst=${pageViewId}&' + 'num=${counter(googleadwords)}&' + 'fmt=3&' + 'async=1&' + 'u_h=${screenHeight}&u_w=${screenWidth}&' + 'u_ah=${availableScreenHeight}&u_aw=${availableScreenWidth}&' + 'u_cd=${screenColorDepth}&' + 'u_tz=${timezone}&' + 'tiba=${title}&' + 'guid=ON&script=0',
      'awConversion': '${awConversionPrefix}${awCommonParams}',
      'awRemarketing': '${awRemarketingPrefix}${awCommonParams}',
      'flBase': 'https://ad.doubleclick.net/activity;src=${flSrc};type=${flType};cat=${flCat}'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'googleanalytics': {
    'vars': {
      'eventValue': '0',
      'documentLocation': 'SOURCE_URL',
      'clientId': 'CLIENT_ID(AMP_ECID_GOOGLE,,_ga)',
      'dataSource': 'AMP',
      'anonymizeIP': 'aip',
      'errorParam': '${errorName}-${errorMessage}'
    },
    'requests': {
      'host': 'https://www.google-analytics.com',
      'basePrefix': 'v=1&' + '_v=a1&' + 'ds=${dataSource}&' + '${anonymizeIP}&' + '_s=${requestCount}&' + 'dt=${title}&' + 'sr=${screenWidth}x${screenHeight}&' + '_utmht=${timestamp}&' + 'cid=${clientId}&' + 'tid=${account}&' + 'dl=${documentLocation}&' + 'dr=${externalReferrer}&' + 'sd=${screenColorDepth}&' + 'ul=${browserLanguage}&' + 'de=${documentCharset}',
      'baseSuffix': '&a=${pageViewId}&' + 'z=${random}',
      'pageview': '${host}/r/collect?${basePrefix}&' + 't=pageview&' + 'jid=${random}&' + '_r=1' + '${baseSuffix}',
      'event': '${host}/collect?${basePrefix}&' + 't=event&' + 'jid=&' + 'ec=${eventCategory}&' + 'ea=${eventAction}&' + 'el=${eventLabel}&' + 'ev=${eventValue}' + '${baseSuffix}',
      'social': '${host}/collect?${basePrefix}&' + 't=social&' + 'jid=&' + 'sa=${socialAction}&' + 'sn=${socialNetwork}&' + 'st=${socialTarget}' + '${baseSuffix}',
      'timing': '${host}/collect?${basePrefix}&' + 't=${timingRequestType}&' + 'jid=&' + 'plt=${pageLoadTime}&' + 'dns=${domainLookupTime}&' + 'tcp=${tcpConnectTime}&' + 'rrt=${redirectTime}&' + 'srt=${serverResponseTime}&' + 'pdt=${pageDownloadTime}&' + 'clt=${contentLoadTime}&' + 'dit=${domInteractiveTime}' + '${baseSuffix}',
      'error': '${host}/collect?${basePrefix}&' + 't=exception&' + 'exd=${errorParam}' + '${baseSuffix}'
    },
    'triggers': {
      'performanceTiming': {
        'on': 'visible',
        'request': 'timing',
        'sampleSpec': {
          'sampleOn': '${clientId}',
          'threshold': 1
        },
        'vars': {
          'timingRequestType': 'timing'
        }
      },
      'adwordsTiming': {
        'on': 'visible',
        'request': 'timing',
        'enabled': '${queryParam(gclid)}',
        'vars': {
          'timingRequestType': 'adtiming'
        }
      }
    },
    'extraUrlParamsReplaceMap': {
      'dimension': 'cd',
      'metric': 'cm'
    },
    'optout': '_gaUserPrefs.ioo'
  },

  'lotame': {
    'requests': {
      'pageview': 'https://bcp.crwdcntrl.net/amp?c=${account}&pv=y'
    },
    'triggers': {
      'track pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'marinsoftware': {
    'requests': {
      'base': 'https://tracker.marinsm.com/tp',
      'baseParams': 'cid=${trackerId}' + '&ampVersion=${ampVersion}' + '&ds=AMP' + '&ref=${externalReferrer}' + '&page=${sourceUrl}' + '&uuid=${clientId(marin_amp_id)}' + '&rnd=${random}',
      'pageView': '${base}?' + '${baseParams}' + '&act=1',
      'conversion': '${base}?' + '${baseParams}' + '&act=2' + '&trans=UTM:I' + '|${orderId}' + '|${marinConversionType}' + '|${productName}' + '|${category}' + '|${price}' + '|${quantity}'
    },
    'transport': {
      'beacon': true,
      'xhrpost': false,
      'image': true
    }
  },

  'mediametrie': {
    'requests': {
      'host': 'https://prof.estat.com/m/web',
      'pageview': '${host}/${serial}?' + 'c=${level1}' + '&dom=${ampdocUrl}' + '&enc=${documentCharset}' + '&l3=${level3}' + '&l4=${level4}' + '&n=${random}' + '&p=${level2}' + '&r=${documentReferrer}' + '&sch=${screenHeight}' + '&scw=${screenWidth}' + '&tn=amp' + '&v=1' + '&vh=${availableScreenHeight}' + '&vw=${availableScreenWidth}'
    },
    'triggers': {
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'mediarithmics': {
    'vars': {
      'domain': 'events.mediarithmics.com',
      'url': 'SOURCE_URL',
      'event_name': '$page_view',
      'referrer': 'DOCUMENT_REFERRER'
    },
    'requests': {
      'host': 'https://${domain}',
      'pageview': '${host}/v1/visits/pixel?' + '$site_token=${site_token}' + '&$url=${url}' + '&$ev=${event_name}' + '&$referrer=${referrer}'
    },
    'triggers': {
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'mediator': {
    'requests': {
      'host': '//collector.mediator.media/script/${mediator_id}/amp/',
      'renderstart': '${host}init/?url=${canonicalUrl}',
      'prefix': '${host}register/?url=${canonicalUrl}' + '&ref=${documentReferrer}&',
      'suffix': 'vh=${viewportHeight}&sh=${scrollHeight}&st=${scrollTop}',
      'pageview': '${prefix}e=v',
      'timer': '${prefix}e=t&${suffix}',
      's0': '${prefix}e=s0',
      's1': '${prefix}e=s1',
      's2': '${prefix}e=s2',
      's3': '${prefix}e=s3'
    },
    'vars': {
      'mediator_id': ''
    },
    'triggers': {
      'renderStart': {
        'on': 'render-start',
        'request': 'renderstart'
      },
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      },
      'scrollPing0': {
        'on': 'scroll',
        'scrollSpec': {
          'verticalBoundaries': [5]
        },
        'request': 's0'
      },
      'scrollPing1': {
        'on': 'scroll',
        'scrollSpec': {
          'verticalBoundaries': [35]
        },
        'request': 's1'
      },
      'scrollPing2': {
        'on': 'scroll',
        'scrollSpec': {
          'verticalBoundaries': [65]
        },
        'request': 's2'
      },
      'scrollPing3': {
        'on': 'scroll',
        'scrollSpec': {
          'verticalBoundaries': [95]
        },
        'request': 's3'
      },
      'pageTimer': {
        'on': 'timer',
        'timerSpec': {
          'interval': 5,
          'maxTimerLength': 600,
          'immediate': false
        },
        'request': 'timer'
      }
    }
  },

  'metrika': {
    'transport': { 'beacon': true, 'xhrpost': true, 'image': false },
    'requests': {
      'pageview': '${_watch}?browser-info=${_brInfo}&${_siteInfo}&${_suffix}',
      'notBounce': '${_watch}?browser-info=ar%3A1%3Anb%3A1%3A${_brInfo}' + '&${_suffix}',
      'externalLink': '${_watch}?browser-info=ln%3A1%3A${_brInfo}&${_suffix}',
      'reachGoal': '${_watch}?browser-info=ar%3A1%3A${_brInfo}&${_siteInfo}' + '&${_goalSuffix}',
      '_domain': 'https://mc.yandex.ru',
      '_watch': '${_domain}/watch/${counterId}',
      '_suffix': 'page-url=${sourceUrl}&page-ref=${documentReferrer}',
      '_goalSuffix': 'page-url=goal%3A%2F%2F${sourceHost}%2F${goalId}' + '&page-ref=${sourceUrl}',
      '_techInfo': ['amp%3A1%3Az%3A${timezone}%3Ai%3A${timestamp}%3Arn%3A${random}', 'la%3A${browserLanguage}%3Aen%3A${documentCharset}', 'rqn%3A${requestCount}', 's%3A${screenWidth}x${screenHeight}x${screenColorDepth}', 'w%3A${availableScreenWidth}x${availableScreenHeight}', 'ds%3A${_timings}%3Auid%3A${clientId(_ym_uid)}%3Apvid%3A${pageViewId}'].join('%3A'),
      '_timings': ['${domainLookupTime}%2C${tcpConnectTime}', '${serverResponseTime}%2C${pageDownloadTime}', '${redirectTime}%2C${navTiming(redirectStart,redirectEnd)}', '${navRedirectCount}%2C${navTiming(domLoading,domInteractive)}', '${navTiming(domContentLoadedEventStart,domContentLoadedEventEnd)}', '${navTiming(navigationStart,domComplete)}', '${pageLoadTime}%2C${navTiming(loadEventStart,loadEventEnd)}', '${contentLoadTime}'].join('%2C'),
      '_brInfo': '${_techInfo}%3A${_title}',
      '_title': 't%3A${title}',
      '_siteInfo': 'site-info=${yaParams}'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'mobify': {
    'vars': {
      'projectSlug': 'mobify-project-id',
      'templateName': 'page-type'
    },
    'requests': {
      '_host': 'https://engagement-collector.mobify.net',
      '_dimensions': ['%22platform%22%3a%22AMP%22', '%22client_id%22%3a%22${clientId(sandy-client-id)}%22', '%22title%22%3a%22${title}%22', '%22location%22%3a%22${sourceUrl}%22', '%22page%22%3a%22${sourcePath}%22', '%22src_location%22%3a%22${ampdocUrl}%22', '%22referrer%22%3a%22${documentReferrer}%22', '%22templateName%22%3a%22${templateName}%22'].join('%2c'),
      '_basePrefix': '${_host}/s.gif?' + 'slug=${projectSlug}&' + 'timestamp_local=${timestamp}&' + 'channel=web&' + 'dimensions=%7b${_dimensions}%7d',
      'ampstart': '${_basePrefix}&data=%7b%22category%22%3a%22timing%22%2c' + '%22action%22%3a%22ampStart%22%2c%22value%22' + '%3a${navTiming(navigationStart,domLoading)}%7d',
      'pageview': '${_basePrefix}&data=%7b%22action%22%3a%22pageview%22%7d',
      'pageload': '${_basePrefix}&data=%7b%22category%22%3a%22timing%22%2c' + '%22action%22%3a%22load%22%2c%22value%22%3a${pageLoadTime}%7d',
      'pagedcl': '${_basePrefix}&data=%7b%22category%22%3a%22timing%22%2c' + '%22action%22%3a%22DOMContentLoaded%22%2c%22value%22' + '%3a${contentLoadTime}%7d'
    },
    'triggers': {
      'triggerName': {
        'on': 'visible',
        'request': ['ampstart', 'pageload', 'pagedcl']
      },
      'pageview': {
        'on': 'ini-load',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': true,
      'xhrpost': false,
      'image': true
    }
  },

  'mparticle': {
    'vars': {
      'eventType': 'Unknown',
      'debug': false,
      'amp_clientId': 'CLIENT_ID(mparticle_amp_id)'
    },
    'requests': {
      'host': 'https://pixels.mparticle.com',
      'endpointPath': '/v1/${apiKey}/Pixel',
      'baseParams': 'et=${eventType}&' + 'amp_id=${amp_clientId}&' + 'attrs_k=${eventAttributes_Keys}&' + 'attrs_v=${eventAttributes_Values}&' + 'ua_k=${userAttributes_Keys}&' + 'ua_v=${userAttributes_Values}&' + 'ui_t=${userIdentities_Types}&' + 'ui_v=${userIdentities_Values}&' + 'flags_k=${customFlags_Keys}&' + 'flags_v=${customFlags_Values}&' + 'ct=${timestamp}&' + 'dbg=${debug}&' + 'lc=${location}&' + 'av=${appVersion}',
      'pageview': '${host}${endpointPath}?' + 'dt=ScreenView&' + 'n=${canonicalPath}&' + 'hn=${ampdocUrl}&' + 'ttl=${title}&' + '${baseParams}',
      'event': '${host}${endpointPath}?' + 'dt=AppEvent&' + 'n=${eventName}&' + '${baseParams}'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'newrelic': {
    'requests': {
      'pageview': 'https://${beacon}/amp?appId=${appId}' + '&licenseKey=${licenseKey}' + '&ampUrl=${ampdocUrl}' + '&canonicalUrl=${canonicalUrl}' + '&timeToDomContentLoadedEventEnd=' + '${navTiming(domContentLoadedEventEnd)}' + '&timeToDomInteractive=${navTiming(domInteractive)}' + '&timeToDomComplete=${navTiming(domComplete)}' + '&timeToDomLoading=${navTiming(domLoading)}' + '&timeToResponseStart=${navTiming(responseStart)}' + '&timeToResponseEnd=${navTiming(responseEnd)}' + '&timeToLoadEventStart=${navTiming(loadEventStart)}' + '&timeToLoadEventEnd=${navTiming(loadEventEnd)}' + '&timeToConnectStart=${navTiming(connectStart)}' + '&timeToConnectEnd=${navTiming(connectEnd)}' + '&timeToFetchStart=${navTiming(fetchStart)}' + '&timeToRequestStart=${navTiming(requestStart)}' + '&timeToUnloadEventStart=${navTiming(unloadEventStart)}' + '&timeToUnloadEventEnd=${navTiming(unloadEventEnd)}' + '&timeToDomainLookupStart=${navTiming(domainLookupStart)}' + '&timeToDomainLookupEnd=${navTiming(domainLookupEnd)}' + '&timeToRedirectStart=${navTiming(redirectStart)}' + '&timeToRedirectEnd=${navTiming(redirectEnd)}' + '&timeToSecureConnection=${navTiming(secureConnectionStart)}' + '&timestamp=${timestamp}' + '&ampVersion=${ampVersion}' + '&pageLoadTime=${pageLoadTime}'
    },
    'vars': {
      'beacon': 'bam.nr-data.net',
      'appId': [],
      'licenseKey': ''
    },
    'triggers': {
      'trackPageview': {
        'on': 'ini-load',
        'request': 'pageview'
      }
    }
  },

  'nielsen': {
    'vars': {
      'sessionId': 'CLIENT_ID(imrworldwide)',
      'prefix': ''
    },
    'requests': {
      'session': 'https://${prefix}uaid-linkage.imrworldwide.com/cgi-bin/gn?prd=session&c13=asid,P${apid}&sessionId=${sessionId}_${pageViewId}&pingtype=4&enc=false&c61=createtm,${timestamp}&rnd=${random}',
      'cloudapi': 'https://${prefix}cloudapi.imrworldwide.com/nmapi/v2/${apid}/${sessionId}_${pageViewId}/a?b=%7B%22devInfo%22%3A%7B%22devId%22%3A%22${sessionId}_${pageViewId}%22%2C%22apn%22%3A%22${apn}%22%2C%22apv%22%3A%22${apv}%22%2C%22apid%22%3A%22${apid}%22%7D%2C%22metadata%22%3A%7B%22static%22%3A%7B%22type%22%3A%22static%22%2C%22section%22%3A%22${section}%22%2C%22assetid%22%3A%22${pageViewId}%22%2C%22segA%22%3A%22${segA}%22%2C%22segB%22%3A%22${segB}%22%2C%22segC%22%3A%22${segC}%22%2C%22adModel%22%3A%220%22%2C%22dataSrc%22%3A%22cms%22%7D%2C%22content%22%3A%7B%7D%2C%22ad%22%3A%7B%7D%7D%2C%22event%22%3A%22playhead%22%2C%22position%22%3A%22${timestamp}%22%2C%22data%22%3A%7B%22hidden%22%3A%22${backgroundState}%22%2C%22blur%22%3A%22${backgroundState}%22%2C%22position%22%3A%22${timestamp}%22%7D%2C%22type%22%3A%22static%22%2C%22utc%22%3A%22${timestamp}%22%2C%22index%22%3A%22${requestCount}%22%7D'
    },
    'triggers': {
      'visible': {
        'on': 'visible',
        'request': ['session', 'cloudapi']
      },
      'hidden': {
        'on': 'hidden',
        'request': 'cloudapi'
      },
      'duration': {
        'on': 'timer',
        'timerSpec': {
          'interval': 10,
          'maxTimerLength': 86400,
          'immediate': false
        },
        'request': 'cloudapi'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true,
      'referrerPolicy': 'no-referrer'
    }
  },

  'nielsen-marketing-cloud': {
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    },
    'vars': {
      'pubId': '',
      'siteId': ''
    },
    'requests': {
      'host': 'loadeu.exelator.com',
      'pathPrefix': 'load/',
      'trackurl': 'https://${host}/${pathPrefix}?p=${pubId}&g=${siteId}&j=0'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'trackurl'
      }
    }
  },

  'oewadirect': {
    'transport': { 'beacon': false, 'xhrpost': false, 'image': true },
    'requests': {
      'pageview': 'https://${s}.oewabox.at/j0=,,,r=${canonicalUrl};+,amp=1+cp=${cp}+ssl=1+hn=${canonicalHost};;;?lt=${pageViewId}&x=${screenWidth}x${screenHeight}x24&c=CLIENT_ID(oewa)'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'oewa': {
    'transport': { 'beacon': false, 'xhrpost': false, 'image': true },
    'requests': {
      'pageview': '${url}?s=${s}' + '&amp=1' + '&cp=${cp}' + '&host=${canonicalHost}' + '&path=${canonicalPath}'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },
  'parsely': {
    'requests': {
      'host': 'https://srv.pixel.parsely.com',
      'basePrefix': '${host}/plogger/?' + 'rand=${timestamp}&' + 'idsite=${apikey}&' + 'url=${ampdocUrl}&' + 'urlref=${documentReferrer}&' + 'screen=${screenWidth}x${screenHeight}%7C' + '${availableScreenWidth}x${availableScreenHeight}%7C' + '${screenColorDepth}&' + 'title=${title}&' + 'date=${timestamp}&' + 'ampid=${clientId(_parsely_visitor)}',
      'pageview': '${basePrefix}&action=pageview',
      'heartbeat': '${basePrefix}&action=heartbeat' + '&tt=${totalEngagedTime}&inc=${incrementalEngagedTime(parsely-js)}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      },
      'defaultHeartbeat': {
        'on': 'timer',
        'enabled': '${incrementalEngagedTime(parsely-js,false)}',
        'timerSpec': {
          'interval': 10,
          'maxTimerLength': 7200
        },
        'request': 'heartbeat'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'piano': {
    'requests': {
      'host': 'https://api-v3.tinypass.com',
      'basePrefix': '/api/v3',
      'baseSuffix': '&pageview_id=${pageViewId}&rand=${random}&' + 'amp_client_id=${clientId}&aid=${aid}',
      'pageview': '${host}${basePrefix}/page/track?url=${canonicalUrl}&' + 'referer=${documentReferrer}&content_created=${contentCreated}&' + 'content_author=${contentAuthor}&content_section=${contentSection}&' + 'timezone_offset=${timezone}&tags=${tags}&amp_url=${ampdocUrl}&' + 'screen=${screenWidth}x${screenHeight}${baseSuffix}'
    }
  },

  'piStats': {
    'requests': {
      'host': 'https://events.pi-stats.com',
      'basePrefix': '${host}/eventsamp/?' + 'e=PageLoad&' + 'pid=${property}&' + 'url=${ampdocUrl}&' + 'cnt=${cntId}&' + 'lang=${language}&' + 'ref=${documentReferrer}&' + 'id=${clientId(piStatsDEVICEID)}&' + 'ua=${userAgent}&' + 'ctype=web&' + 'blang=${browserLanguage}&' + 'v=2.0&' + 'dist=Javascript',
      'pageview': '${basePrefix}&eventtype=pageview'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'quantcast': {
    'vars': {
      'labels': ''
    },
    'requests': {
      'host': 'https://pixel.quantserve.com/pixel',
      'pageview': '${host};r=${random};a=${pcode};labels=${labels};' + 'fpan=;fpa=${clientId(__qca)};ns=0;ce=1;cm=;je=0;' + 'sr=${screenWidth}x${screenHeight}x${screenColorDepth};' + 'enc=n;et=${timestamp};ref=${documentReferrer};url=${canonicalUrl}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'adobeanalytics': {
    'transport': { 'xhrpost': false, 'beacon': false, 'image': true },
    'vars': {
      'pageName': 'TITLE',
      'host': '',
      'reportSuites': '',
      'linkType': 'o',
      'linkUrl': '',
      'linkName': ''
    },
    'requests': {
      'requestPath': '/b/ss/${reportSuites}/0/amp-1.0/s${random}',
      // vid starts with z to work around #2198
      'basePrefix': 'vid=z${clientId(adobe_amp_id)}' + '&ndh=0' + '&ce=${documentCharset}' + '&pageName=${pageName}' + '&g=${ampdocUrl}' + '&r=${documentReferrer}' + '&bh=${availableScreenHeight}' + '&bw=${availableScreenWidth}' + '&c=${screenColorDepth}' + '&j=amp' + '&s=${screenWidth}x${screenHeight}',
      'pageview': 'https://${host}${requestPath}?${basePrefix}',
      'click': 'https://${host}${requestPath}?${basePrefix}&pe=lnk_${linkType}&pev1=${linkUrl}&pev2=${linkName}'
    }
  },

  'adobeanalytics_nativeConfig': {
    'triggers': {
      'pageLoad': {
        'on': 'visible',
        'request': 'iframeMessage'
      }
    }
  },

  'infonline': {
    'vars': {
      'sv': 'ke',
      'ap': '1'
    },
    'transport': { 'beacon': false, 'xhrpost': false, 'image': true },
    'requests': {
      'pageview': '${url}?st=${st}' + '&sv=${sv}' + '&ap=${ap}' + '&co=${co}' + '&cp=${cp}' + '&host=${canonicalHost}' + '&path=${canonicalPath}'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },
  'simplereach': {
    'vars': {
      'pid': '',
      'published_at': '',
      'authors': [],
      'channels': [],
      'tags': []
    },
    'requests': {
      'host': 'https://edge.simplereach.com',
      'baseParams': 'amp=true' + '&pid=${pid}' + '&title=${title}' + '&url=${canonicalUrl}' + '&date=${published_at}' + '&authors=${authors}' + '&channels=${categories}' + '&tags=${tags}' + '&referrer=${documentReferrer}' + '&page_url=${sourceUrl}' + '&user_id=${clientId(sr_amp_id)}' + '&domain=${canonicalHost}' + '&article_id=${article_id}' + '&ignore_metadata=${ignore_metadata}',
      'visible': '${host}/n?${baseParams}',
      'timer': '${host}/t?${baseParams}' + '&t=5000' + '&e=5000'
    },
    'triggers': {
      'visible': {
        'on': 'visible',
        'request': 'visible'
      },
      'timer': {
        'on': 'timer',
        'timerSpec': {
          'interval': 5,
          'maxTimerLength': 1200
        },
        'request': 'timer'
      }
    }
  },

  'segment': {
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    },
    'vars': {
      'anonymousId': 'CLIENT_ID(segment_amp_id)'
    },
    'requests': {
      'host': 'https://api.segment.io/v1/pixel',
      'base': '?writeKey=${writeKey}' + '&context.library.name=amp' + '&anonymousId=${anonymousId}' + '&context.locale=${browserLanguage}' + '&context.page.path=${canonicalPath}' + '&context.page.url=${canonicalUrl}' + '&context.page.referrer=${documentReferrer}' + '&context.page.title=${title}' + '&context.screen.width=${screenWidth}' + '&context.screen.height=${screenHeight}',
      'page': '${host}/page${base}&name=${name}',
      'track': '${host}/track${base}&event=${event}'
    },
    'triggers': {
      'page': {
        'on': 'visible',
        'request': 'page'
      }
    }
  },

  'shinystat': {
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    },
    'requests': {
      'base': 'https://amp.shinystat.com/cgi-bin/shinyamp.cgi',
      'commpar': 'AMP=1&RM=${random}' + '&USER=${account}' + '&PAG=${page}' + '&HR=${sourceUrl}' + '&REFER=${documentReferrer}' + '&RES=${screenWidth}X${screenHeight}' + '&COLOR=${screenColorDepth}' + '&CID=${clientId(AMP_CID)}' + '&PAGID=${pageViewId}' + '&TITL=${title}' + '&RQC=${requestCount}',
      'pagepar': '&VIE=${viewer}' + '&PLT=${pageLoadTime}',
      'eventpar': '&SSXL=1',
      'linkpar': '&LINK=${outboundLink}',
      'pageview': '${base}?${commpar}${pagepar}',
      'event': '${base}?${commpar}${eventpar}',
      'link': '${base}?${commpar}${linkpar}'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'snowplow': {
    'vars': {
      'duid': 'CLIENT_ID(_sp_id)'
    },
    'requests': {
      'aaVersion': 'amp-0.2',
      'basePrefix': 'https://${collectorHost}/i?url=${canonicalUrl}&page=${title}&' + 'res=${screenWidth}x${screenHeight}&stm=${timestamp}&' + 'tz=${timezone}&aid=${appId}&p=web&tv=${aaVersion}&' + 'cd=${screenColorDepth}&cs=${documentCharset}&' + 'duid=${duid}&' + 'lang=${browserLanguage}&refr=${documentReferrer}&stm=${timezone}&' + 'vp=${viewportWidth}x${viewportHeight}',
      'pageView': '${basePrefix}&e=pv',
      'structEvent': '${basePrefix}&e=se&' + 'se_ca=${structEventCategory}&se_ac=${structEventAction}&' + 'se_la=${structEventLabel}&se_pr=${structEventProperty}&' + 'se_va=${structEventValue}'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'top100': {
    'vars': {
      'pid': '',
      'rid': 'PAGE_VIEW_ID',
      'ruid': 'CLIENT_ID(ruid)',
      'version': '1.0.0'
    },
    'requests': {
      'host': 'https://kraken.rambler.ru',
      'base': '${host}/cnt/?pid=${pid}' + '&rid=${rid}' + '&v=${version}' + '&rn=${random}' + '&ruid=${ruid}' + '&ct=amp',
      'pageview': '${base}&et=pv' + '${_pageData}' + '${_screenData}',
      '_screenData': '&sr=${screenWidth}x${screenHeight}' + '&cd=${screenColorDepth}-bit' + '&bs=${scrollWidth}x${scrollHeight}',
      '_pageData': '&pt=${title}' + '&rf=${documentReferrer}' + '&en=${documentCharset}' + '&la=${browserLanguage}' + '&tz=${timezone}'
    },
    'triggers': {
      'trackPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'treasuredata': {
    'vars': {
      'host': 'in.treasuredata.com',
      'writeKey': '',
      'database': '',
      'table': 'events'
    },
    'requests': {
      'base': 'https://${host}/postback/v3/event/${database}',
      'baseParams': 'td_write_key=${writeKey}' + '&td_global_id=td_global_id' + '&td_client_id=CLIENT_ID(_td)' + '&td_charset=DOCUMENT_CHARSET' + '&td_language=BROWSER_LANGUAGE' + '&td_color=SCREEN_COLOR_DEPTH' + '&td_screen=${screenWidth}x${scrollHeight}' + '&td_viewport=${availableScreenWidth}x${availableScreenHeight}' + '&td_title=TITLE' + '&td_url=SOURCE_URL' + '&td_user_agent=USER_AGENT' + '&td_host=SOURCE_HOST' + '&td_path=SOURCE_PATH' + '&td_referrer=DOCUMENT_REFERRER' + '&td_ip=td_ip',
      'pageview': '${base}/${table}?${baseParams}',
      'event': '${base}/${table}?${baseParams}'
    }
  },

  'webtrekk': {
    'requests': {
      'trackURL': 'https://${trackDomain}/${trackId}/wt',
      'parameterPrefix': '?p=432,${contentId},1,' + '${screenWidth}x${screenHeight},${screenColorDepth},1,' + '${timestamp},${documentReferrer},${viewportWidth}x' + '${viewportHeight},0&tz=${timezone}' + '&eid=${clientId(amp-wt3-eid)}&la=${browserLanguage}',
      'parameterSuffix': '&pu=${sourceUrl}',
      'pageParameter': '&cp1=${pageParameter1}' + '&cp2=${pageParameter2}&cp3=${pageParameter3}' + '&cp4=${pageParameter4}&cp5=${pageParameter5}' + '&cp6=${pageParameter6}&cp7=${pageParameter7}' + '&cp8=${pageParameter8}&cp9=${pageParameter9}' + '&cp10=${pageParameter10}',
      'pageCategories': '&cg1=${pageCategory1}' + '&cg2=${pageCategory2}&cg3=${pageCategory3}' + '&cg4=${pageCategory4}&cg5=${pageCategory5}' + '&cg6=${pageCategory6}&cg7=${pageCategory7}' + '&cg8=${pageCategory8}&cg9=${pageCategory9}' + '&cg10=${pageCategory10}',
      'pageview': '${trackURL}${parameterPrefix}${pageParameter}' + '${pageCategories}${parameterSuffix}',
      'actionParameter': '&ck1=${actionParameter1}' + '&ck2=${actionParameter2}&ck3=${actionParameter3}' + '&ck4=${actionParameter4}&ck5=${actionParameter5}',
      'event': '${trackURL}${parameterPrefix}&ct=${actionName}' + '${actionParameter}${parameterSuffix}'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'webtrekk_v2': {
    'vars': {
      'actionName': 'webtrekk_ignore',
      'contentId': '${title}',
      'mediaName': '${id}',
      'everId': '${clientId(amp-wt3-eid)}'
    },
    'requests': {
      'trackURL': 'https://${trackDomain}/${trackId}/wt',
      'basePrefix': '?p=440,${contentId},1,' + '${screenWidth}x${screenHeight},${screenColorDepth},1,',
      'baseSuffix': ',${documentReferrer},' + '${viewportWidth}x${viewportHeight},0' + '&tz=${timezone}&eid=${everId}&la=${browserLanguage}',
      'parameterPrefix': '${basePrefix}${timestamp}${baseSuffix}',
      'parameterSuffix': '&pu=${sourceUrl}&eor=1',
      'pageview': '${trackURL}${parameterPrefix}&${extraUrlParams}' + '&cp570=${pageLoadTime}${parameterSuffix}',
      'event': '${trackURL}${parameterPrefix}&ct=${actionName}' + '&${extraUrlParams}${parameterSuffix}',
      'scroll': '${trackURL}${parameterPrefix}&ct=${actionName}' + '&ck540=${verticalScrollBoundary}${parameterSuffix}',
      'mediaPrefix': '${trackURL}${basePrefix}${baseSuffix}' + '&mi=${mediaName}',
      'mediaSuffix': '&mt1=${currentTime}&mt2=${duration}' + '&${extraUrlParams}${parameterSuffix}&x=${playedTotal}',
      'mediaPlay': '${mediaPrefix}&mk=play${mediaSuffix}',
      'mediaPause': '${mediaPrefix}&mk=pause${mediaSuffix}',
      'mediaPosition': '${mediaPrefix}&mk=pos${mediaSuffix}',
      'mediaEnded': '${mediaPrefix}&mk=eof${mediaSuffix}'
    },
    'extraUrlParamsReplaceMap': {
      'pageParameter': 'cp',
      'contentGroup': 'cg',
      'actionParameter': 'ck',
      'sessionParameter': 'cs',
      'ecommerceParameter': 'cb',
      'urmCategory': 'uc',
      'campaignParameter': 'cc',
      'mediaCategory': 'mg'
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },

  'mpulse': {
    'requests': {
      'onvisible': 'https://${beacon_url}?' + 'h.d=${h.d}' + '&h.key=${h.key}' + '&h.t=${h.t}' + '&h.cr=${h.cr}' + '&rt.start=navigation' + '&rt.si=${clientId(amp_mpulse)}' + '&rt.ss=${timestamp}' + '&rt.end=${timestamp}' + '&t_resp=${navTiming(navigationStart,responseStart)}' + '&t_page=${navTiming(responseStart,loadEventStart)}' + '&t_done=${navTiming(navigationStart,loadEventStart)}' + '&nt_nav_type=${navType}' + '&nt_red_cnt=${navRedirectCount}' + '&nt_nav_st=${navTiming(navigationStart)}' + '&nt_red_st=${navTiming(redirectStart)}' + '&nt_red_end=${navTiming(redirectEnd)}' + '&nt_fet_st=${navTiming(fetchStart)}' + '&nt_dns_st=${navTiming(domainLookupStart)}' + '&nt_dns_end=${navTiming(domainLookupEnd)}' + '&nt_con_st=${navTiming(connectStart)}' + '&nt_ssl_st=${navTiming(secureConnectionStart)}' + '&nt_con_end=${navTiming(connectEnd)}' + '&nt_req_st=${navTiming(requestStart)}' + '&nt_res_st=${navTiming(responseStart)}' + '&nt_unload_st=${navTiming(unloadEventStart)}' + '&nt_unload_end=${navTiming(unloadEventEnd)}' + '&nt_domloading=${navTiming(domLoading)}' + '&nt_res_end=${navTiming(responseEnd)}' + '&nt_domint=${navTiming(domInteractive)}' + '&nt_domcontloaded_st=${navTiming(domContentLoadedEventStart)}' + '&nt_domcontloaded_end=${navTiming(domContentLoadedEventEnd)}' + '&nt_domcomp=${navTiming(domComplete)}' + '&nt_load_st=${navTiming(loadEventStart)}' + '&nt_load_end=${navTiming(loadEventEnd)}' + '&v=1' + '&http.initiator=amp' + '&u=${sourceUrl}' + '&amp.u=${ampdocUrl}' + '&r2=${documentReferrer}' + '&scr.xy=${screenWidth}x${screenHeight}'
    },

    'triggers': {
      'onvisible': {
        'on': 'visible',
        'request': 'onvisible'
      }
    },

    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    },

    'extraUrlParamsReplaceMap': {
      'ab_test': 'h.ab',
      'page_group': 'h.pg',
      'custom_dimension.': 'cdim.',
      'custom_metric.': 'cmet.'
    }
  },

  'linkpulse': {
    'vars': {
      'id': '',
      'pageUrl': 'CANONICAL_URL',
      'title': 'TITLE',
      'section': '',
      'channel': 'amp',
      'type': '',
      'host': 'pp.lp4.io',
      'empty': ''
    },
    'requests': {
      'base': 'https://${host}',
      'pageview': '${base}/p?i=${id}' + '&r=${documentReferrer}' + '&p=${pageUrl}' + '&s=${section}' + '&t=${type}' + '&c=${channel}' + '&mt=${title}' + '&_t=amp' + '&_r=${random}',
      'pageload': '${base}/pl?i=${id}' + '&ct=${domInteractiveTime}' + '&rt=${pageDownloadTime}' + '&pt=${pageLoadTime}' + '&p=${pageUrl}' + '&c=${channel}' + '&t=${type}' + '&s=${section}' + '&_t=amp' + '&_r=${random}',
      'ping': '${base}/u?i=${id}' + '&u=${clientId(_lp4_u)}' + '&p=${pageUrl}' + '&uActive=true' + '&isPing=yes' + '&c=${channel}' + '&t=${type}' + '&s=${section}' + '&_t=amp' + '&_r=${random}'
    },
    'triggers': {
      'pageview': {
        'on': 'visible',
        'request': 'pageview'
      },
      'pageload': {
        'on': 'visible',
        'request': 'pageload'
      },
      'ping': {
        'on': 'timer',
        'timerSpec': {
          'interval': 30,
          'maxTimerLength': 7200
        },
        'request': 'ping'

      }
    },
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    }
  },
  'rakam': {
    'vars': {
      'deviceId': 'CLIENT_ID(rakam_device_id)'
    },
    'requests': {
      'base': '?api.api_key=${writeKey}' + '&prop._platform=amp' + '&prop._device_id=${deviceId}' + '&prop.locale=${browserLanguage}' + '&prop.path=${canonicalPath}' + '&prop.url=${canonicalUrl}' + '&prop.color_depth=${screenColorDepth}' + '&prop._referrer=${documentReferrer}' + '&prop.title=${title}' + '&prop.timezone=${timezone}' + '&prop._time=${timestamp}' + '&prop.resolution=${screenWidth} × ${screenHeight}',
      'pageview': 'https://${apiEndpoint}/event/pixel${base}&collection=${pageViewName}',
      'custom': 'https://${apiEndpoint}/event/pixel${base}&collection=${collection}'
    }
  },
  'ibeatanalytics': {
    'requests': {
      'host': 'https://ibeat.indiatimes.com',
      'base': 'https://ibeat.indiatimes.com/iBeat/pageTrendlogAmp.html',
      'pageview': '${base}?' + '&h=${h}' + '&d=${h}' + '&url=${url}' + '&k=${key}' + '&ts=${time}' + '&ch=${channel}' + '&sid=${uid}' + '&at=${agentType}' + '&ref=${documentReferrer}' + '&aid=${aid}' + '&loc=1' + '&ct=1' + '&cat=${cat}' + '&scat=${scat}' + '&ac=1' + '&tg=${tags}' + '&ctids=${catIds}' + '&pts=${pagePublishTime}' + '&auth=${author}' + '&pos=${position}' + '&iBeatField=${ibeatFields}' + '&cid=${clientId(MSCSAuthDetails)}'
    },
    'triggers': {
      'defaultPageview': {
        'on': 'visible',
        'request': 'pageview'
      }
    }
  },

  'topmailru': {
    'transport': {
      'beacon': false,
      'xhrpost': false,
      'image': true
    },
    'vars': {
      'url': '${sourceUrl}',
      'referrer': '${documentReferrer}'
    },
    'requests': {
      'pageView': '${_domain}/counter?${_basicMessage};title=${title}',
      'reachGoal': '${_domain}/tracker?${_basicMessage};title=${title}' + ';e=RG%3A${value}%2F${goal}',
      'sendEvent': '${_domain}/tracker?${_basicMessage}' + ';e=CE%3A${value}%2F${category}%3B${action}%3B${label}',
      '_domain': 'https://top-fwz1.mail.ru',
      '_basicMessage': 'js=13;id=${id};u=${url};r=${referrer}' + ';s=${screenWidth}*${screenHeight}' + ';vp=${viewportWidth}*${viewportHeight}' + ';st=${start};gender=${gender};age=${age}' + ';pid=${pid};userid=${userid};device=${device}' + ';params=${params};_=${random}'
    },
    'triggers': {
      'pageView': {
        'on': 'visible',
        'request': 'pageView'
      }
    }
  },

  'moat': {
    'vars': {
      'element': ':root'
    },
    'requests': {
      'load': JSON.stringify( /** @type {!JsonObject} */{
        'type': 'load',
        'pcode': '${pcode}',
        'l0t': '${l0t}',
        'acctType': '${acctType}',
        'adType': '${adType}',
        'qs': '${qs}',
        'element': {
          'src': '${htmlAttr(img,src,width)}',
          'viewer': '${viewer}'
        },
        'document': {
          'AMPDocumentHostname': '${ampdocHostname}',
          'AMPDocumentURL': '${ampdocUrl}',
          'canonicalHost': '${canonicalHost}',
          'canonicalHostname': '${canonicalHostname}',
          'canonicalPath': '${canonicalPath}',
          'canonicalURL': '${canonicalUrl}',
          'documentCharset': '${documentCharset}',
          'documentReferrer': '${documentReferrer}',
          'externalReferrer': '${externalReferrer}',
          'sourceURL': '${sourceUrl}',
          'sourceHost': '${sourceHost}',
          'sourceHostname': '${sourceHostname}',
          'sourcePath': '${sourcePath}',
          'title': '${title}',
          'viewer': '${viewer}'
        },
        'device': {
          'availableScreenHeight': '${availableScreenHeight}',
          'availableScreenWidth': '${availableScreenWidth}',
          'browserLanguage': '${browserLanguage}',
          'screenColorDepth': '${screenColorDepth}',
          'screenHeight': '${screenHeight}',
          'screenWidth': '${screenWidth}',
          'scrollHeight': '${scrollHeight}',
          'scrollWidth': '${scrollWidth}',
          'scrollLeft': '${scrollLeft}',
          'scrollTop': '${scrollTop}',
          'timezone': '${timezone}',
          'userAgent': '${userAgent}',
          'viewportHeight': '${viewportHeight}',
          'viewportWidth': '${viewportWidth}'
        },
        'requestCount': '${requestCount}',
        'timeStamp': '${timestamp}'
      }),
      'unload': JSON.stringify( /** @type {!JsonObject} */{
        'type': 'unload',
        'pcode': '${pcode}',
        'l0t': '${l0t}',
        'requestCount': '${requestCount}',
        'timeStamp': '${timestamp}'
      }),
      'click': JSON.stringify( /** @type {!JsonObject} */{
        'type': 'click',
        'pcode': '${pcode}',
        'l0t': '${l0t}',
        'requestCount': '${requestCount}',
        'timeStamp': '${timestamp}'
      }),
      'viewability': JSON.stringify( /** @type {!JsonObject} */{
        'type': 'viewability',
        'pcode': '${pcode}',
        'l0t': '${l0t}',
        'backgroundState': '${backgroundState}',
        'intersectionRect': '${intersectionRect}',
        'intersectionRatio': '${intersectionRatio}',
        'maxVisiblePercentage': '${maxVisiblePercentage}',
        'minVisiblePercentage': '${minVisiblePercentage}',
        'x': '${elementX}',
        'y': '${elementY}',
        'height': '${elementHeight}',
        'width': '${elementWidth}',
        'viewportHeight': '${viewportHeight}',
        'viewportWidth': '${viewportWidth}',
        'opacity': '${opacity}',
        'timeStamp': '${timestamp}',
        'requestCount': '${requestCount}'
      }),
      'iframe': JSON.stringify( /** @type {!JsonObject} */{
        'type': 'iframe',
        'pcode': '${pcode}',
        'height': '${elementHeight}',
        'width': '${elementWidth}',
        'x': '${elementX}',
        'y': '${elementY}',
        'requestCount': '${requestCount}'
      })
    },
    'triggers': {
      'load': {
        'on': 'ini-load',
        'request': 'load'
      },
      'unload': {
        'on': 'ad-refresh',
        'selector': '${element}',
        'request': 'unload'
      },
      'click': {
        'on': 'click',
        'selector': '${element}',
        'request': 'click'
      },
      'viewability': {
        'on': 'visible',
        'selector': '${element}',
        'request': 'viewability',
        'visibilitySpec': {
          'repeat': true,
          'visiblePercentageThresholds': [[0, 0], [0, 5], [5, 10], [10, 15], [15, 20], [20, 25], [25, 30], [30, 35], [35, 40], [40, 45], [45, 50], [50, 55], [55, 60], [60, 65], [65, 70], [70, 75], [75, 80], [80, 85], [85, 90], [90, 95], [95, 100], [100, 100]]
        }
      },
      'iframe': {
        'on': 'visible',
        'selector': ':root',
        'request': 'iframe',
        'visibilitySpec': {
          'repeat': true,
          'visiblePercentageThresholds': [[0, 0]]
        }
      }
    }
  },

  'bg': {}
};

ANALYTICS_CONFIG['infonline']['triggers']['pageview']['iframe' +
/* TEMPORARY EXCEPTION */'Ping'] = true;

ANALYTICS_CONFIG['adobeanalytics_nativeConfig']['triggers']['pageLoad']['iframe' +
/* TEMPORARY EXCEPTION */'Ping'] = true;

ANALYTICS_CONFIG['oewa']['triggers']['pageview']['iframe' +
/* TEMPORARY EXCEPTION */'Ping'] = true;

mergeIframeTransportConfig(ANALYTICS_CONFIG, _iframeTransportVendors.IFRAME_TRANSPORTS);

/**
 * Merges iframe transport config.
 *
 * @param {!JsonObject} config
 * @param {!JsonObject} iframeTransportConfig
 */
function mergeIframeTransportConfig(config, iframeTransportConfig) {
  for (var vendor in iframeTransportConfig) {
    if ((0, _object.hasOwn)(iframeTransportConfig, vendor)) {
      var url = iframeTransportConfig[vendor];
      config[vendor]['transport'] = Object.assign({}, config[vendor]['transport'], { 'iframe': url });
    }
  }
}

},{"../../../src/utils/object":65,"./iframe-transport-vendors":8}],17:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityManagerForEmbed = exports.VisibilityManagerForDoc = exports.VisibilityManager = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

var _intersectionObserverPolyfill = require('../../../src/intersection-observer-polyfill');

var _services = require('../../../src/services');

var _visibilityModel = require('./visibility-model');

var _log = require('../../../src/log');

var _mode = require('../../../src/mode');

var _types = require('../../../src/types');

var _layoutRect = require('../../../src/layout-rect');

var _object = require('../../../src/utils/object');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'VISIBILITY-MANAGER';

var VISIBILITY_ID_PROP = '__AMP_VIS_ID';

/** @type {number} */
var visibilityIdCounter = 1;

/**
 * @param {!Element} element
 * @return {number}
 */
function getElementId(element) {
  var id = element[VISIBILITY_ID_PROP];
  if (!id) {
    id = ++visibilityIdCounter;
    element[VISIBILITY_ID_PROP] = id;
  }
  return id;
}

/**
 * A base class for `VisibilityManagerForDoc` and `VisibilityManagerForEmbed`.
 * The instance of this class corresponds 1:1 to `AnalyticsRoot`. It represents
 * a collection of all visibility triggers declared within the `AnalyticsRoot`.
 * @implements {../../../src/service.Disposable}
 * @abstract
 */

var VisibilityManager = exports.VisibilityManager = function () {
  /**
   * @param {?VisibilityManager} parent
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function VisibilityManager(parent, ampdoc) {
    _classCallCheck(this, VisibilityManager);

    /** @const @protected */
    this.parent = parent;

    /** @const @protected */
    this.ampdoc = ampdoc;

    /** @const @private */
    this.resources_ = _services.Services.resourcesForDoc(ampdoc);

    /** @private {number} */
    this.rootVisibility_ = 0;

    /** @const @private {!Array<!VisibilityModel>}> */
    this.models_ = [];

    /** @private {?Array<!VisibilityManager>} */
    this.children_ = null;

    /** @const @private {!Array<!UnlistenDef>} */
    this.unsubscribe_ = [];

    if (this.parent) {
      this.parent.addChild_(this);
    }
  }

  /**
   * @param {!VisibilityManager} child
   * @private
   */


  _createClass(VisibilityManager, [{
    key: 'addChild_',
    value: function addChild_(child) {
      if (!this.children_) {
        this.children_ = [];
      }
      this.children_.push(child);
    }

    /**
     * @param {!VisibilityManager} child
     * @private
     */

  }, {
    key: 'removeChild_',
    value: function removeChild_(child) {
      if (this.children_) {
        var index = this.children_.indexOf(child);
        if (index != -1) {
          this.children_.splice(index, 1);
        }
      }
    }

    /** @override */

  }, {
    key: 'dispose',
    value: function dispose() {
      // Give the chance for all events to complete.
      this.setRootVisibility(0);

      // Dispose all models.
      for (var i = this.models_.length - 1; i >= 0; i--) {
        this.models_[i].dispose();
      }

      // Unsubscribe everything else.
      this.unsubscribe_.forEach(function (unsubscribe) {
        unsubscribe();
      });
      this.unsubscribe_.length = 0;

      if (this.parent) {
        this.parent.removeChild_(this);
      }
      if (this.children_) {
        for (var _i = 0; _i < this.children_.length; _i++) {
          this.children_[_i].dispose();
        }
      }
    }

    /**
     * @param {!UnlistenDef} handler
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe(handler) {
      this.unsubscribe_.push(handler);
    }

    /**
     * The start time from which all visibility events and times are measured.
     * @return {number}
     * @abstract
     */

  }, {
    key: 'getStartTime',
    value: function getStartTime() {}

    /**
     * Whether the visibility root is currently in the background.
     * @return {boolean}
     * @abstract
     */

  }, {
    key: 'isBackgrounded',
    value: function isBackgrounded() {}

    /**
     * Whether the visibility root has been created in the background mode.
     * @return {boolean}
     * @abstract
     */

  }, {
    key: 'isBackgroundedAtStart',
    value: function isBackgroundedAtStart() {}

    /**
     * Returns the root's layout rect.
     * @return {!../../../src/layout-rect.LayoutRectDef}}
     * @abstract
     */

  }, {
    key: 'getRootLayoutBox',
    value: function getRootLayoutBox() {}

    /**
     * @return {number}
     */

  }, {
    key: 'getRootVisibility',
    value: function getRootVisibility() {
      if (!this.parent) {
        return this.rootVisibility_;
      }
      return this.parent.getRootVisibility() > 0 ? this.rootVisibility_ : 0;
    }

    /**
     * @param {number} visibility
     */

  }, {
    key: 'setRootVisibility',
    value: function setRootVisibility(visibility) {
      this.rootVisibility_ = visibility;
      this.updateModels_();
      if (this.children_) {
        for (var i = 0; i < this.children_.length; i++) {
          this.children_[i].updateModels_();
        }
      }
    }

    /** @private */

  }, {
    key: 'updateModels_',
    value: function updateModels_() {
      for (var i = 0; i < this.models_.length; i++) {
        this.models_[i].update();
      }
    }

    /**
     * Listens to the visibility events on the root as the whole and the given
     * visibility spec. The visibility tracking can be deferred until
     * `readyPromise` is resolved, if specified.
     * @param {!Object<string, *>} spec
     * @param {?Promise} readyPromise
     * @param {?function():!Promise} createReportPromiseFunc
     * @param {function(!Object<string, *>)} callback
     * @return {!UnlistenDef}
     */

  }, {
    key: 'listenRoot',
    value: function listenRoot(spec, readyPromise, createReportPromiseFunc, callback) {
      var calcVisibility = this.getRootVisibility.bind(this);
      return this.createModelAndListen_(calcVisibility, spec, readyPromise, createReportPromiseFunc, callback);
    }

    /**
     * Listens to the visibility events for the specified element and the given
     * visibility spec. The visibility tracking can be deferred until
     * `readyPromise` is resolved, if specified.
     * @param {!Element} element
     * @param {!Object<string, *>} spec
     * @param {?Promise} readyPromise
     * @param {?function():!Promise} createReportPromiseFunc
     * @param {function(!Object<string, *>)} callback
     * @return {!UnlistenDef}
     */

  }, {
    key: 'listenElement',
    value: function listenElement(element, spec, readyPromise, createReportPromiseFunc, callback) {
      var calcVisibility = this.getElementVisibility.bind(this, element);
      return this.createModelAndListen_(calcVisibility, spec, readyPromise, createReportPromiseFunc, callback, element);
    }

    /**
     * Create visibilityModel and listen to visible events.
     * @param {function():number} calcVisibility
     * @param {!Object<string, *>} spec
     * @param {?Promise} readyPromise
     * @param {?function():!Promise} createReportPromiseFunc
     * @param {function(!Object<string, *>)} callback
     * @param {!Element=} opt_element
     * @return {!UnlistenDef}
     */

  }, {
    key: 'createModelAndListen_',
    value: function createModelAndListen_(calcVisibility, spec, readyPromise, createReportPromiseFunc, callback, opt_element) {
      if (spec['visiblePercentageThresholds'] && spec['visiblePercentageMin'] == undefined && spec['visiblePercentageMax'] == undefined) {
        var unlisteners = [];
        var ranges = spec['visiblePercentageThresholds'];
        if (!ranges || !(0, _types.isArray)(ranges)) {
          (0, _log.user)().error(TAG, 'invalid visiblePercentageThresholds');
          return function () {};
        }
        for (var i = 0; i < ranges.length; i++) {
          var percents = ranges[i];
          if (!(0, _types.isArray)(percents) || percents.length != 2) {
            (0, _log.user)().error(TAG, 'visiblePercentageThresholds entry length is not 2');
            continue;
          }
          if (!(0, _types.isFiniteNumber)(percents[0]) || !(0, _types.isFiniteNumber)(percents[1])) {
            // not valid number
            (0, _log.user)().error(TAG, 'visiblePercentageThresholds entry is not valid number');
            continue;
          }
          var min = Number(percents[0]);
          var max = Number(percents[1]);
          // Min and max must be valid percentages. Min may not be more than max.
          // Max is inclusive. Min is usually exclusive, but there are two
          // special cases: if min and max are both 0, or both 100, then both
          // are inclusive. Otherwise it would not be possible to trigger an
          // event on exactly 0% or 100%.
          if (min < 0 || max > 100 || min > max || min == max && min != 100 && max != 0) {
            (0, _log.user)().error(TAG, 'visiblePercentageThresholds entry invalid min/max value');
            continue;
          }
          var newSpec = spec;
          newSpec['visiblePercentageMin'] = min;
          newSpec['visiblePercentageMax'] = max;
          var _model = new _visibilityModel.VisibilityModel(newSpec, calcVisibility);
          unlisteners.push(this.listen_(_model, spec, readyPromise, createReportPromiseFunc, callback, opt_element));
        }
        return function () {
          unlisteners.forEach(function (unlistener) {
            return unlistener();
          });
        };
      }

      var model = new _visibilityModel.VisibilityModel(spec, calcVisibility);
      return this.listen_(model, spec, readyPromise, createReportPromiseFunc, callback, opt_element);
    }

    /**
     * @param {!VisibilityModel} model
     * @param {!Object<string, *>} spec
     * @param {?Promise} readyPromise
     * @param {?function():!Promise} createReportPromiseFunc
     * @param {function(!Object<string, *>)} callback
     * @param {!Element=} opt_element
     * @return {!UnlistenDef}
     * @private
     */

  }, {
    key: 'listen_',
    value: function listen_(model, spec, readyPromise, createReportPromiseFunc, callback, opt_element) {
      var _this = this;

      // Block visibility.
      if (readyPromise) {
        model.setReady(false);
        readyPromise.then(function () {
          model.setReady(true);
        });
      }

      if (createReportPromiseFunc) {
        model.setReportReady(createReportPromiseFunc);
      }

      // Process the event.
      model.onTriggerEvent(function () {
        var startTime = _this.getStartTime();
        var state = model.getState(startTime);

        // Additional doc-level state.
        state['backgrounded'] = _this.isBackgrounded() ? 1 : 0;
        state['backgroundedAtStart'] = _this.isBackgroundedAtStart() ? 1 : 0;
        state['totalTime'] = Date.now() - startTime;

        // Optionally, element-level state.
        var layoutBox = void 0;
        if (opt_element) {
          var resource = _this.resources_.getResourceForElementOptional(opt_element);
          layoutBox = resource ? resource.getLayoutBox() : _services.Services.viewportForDoc(_this.ampdoc).getLayoutRect(opt_element);
          var intersectionRatio = _this.getElementVisibility(opt_element);
          var intersectionRect = _this.getElementIntersectionRect(opt_element);
          Object.assign(state, {
            'intersectionRatio': intersectionRatio,
            'intersectionRect': JSON.stringify(intersectionRect)
          });
        } else {
          layoutBox = _this.getRootLayoutBox();
        }
        model.maybeDispose();

        if (layoutBox) {
          Object.assign(state, {
            'elementX': layoutBox.left,
            'elementY': layoutBox.top,
            'elementWidth': layoutBox.width,
            'elementHeight': layoutBox.height
          });
        }
        callback(state);
      });

      this.models_.push(model);
      model.unsubscribe(function () {
        var index = _this.models_.indexOf(model);
        if (index != -1) {
          _this.models_.splice(index, 1);
        }
      });

      // Observe the element via InOb.
      if (opt_element) {
        // It's important that this happens after all the setup is done, b/c
        // intersection observer can fire immedidately. Per spec, this should
        // NOT happen. However, all of the existing InOb polyfills, as well as
        // some versions of native implementations, make this mistake.
        model.unsubscribe(this.observe(opt_element, function () {
          return model.update();
        }));
      }

      // Start update.
      model.update();
      return function () {
        model.dispose();
      };
    }

    /**
     * Observes the intersections of the specified element in the viewport.
     * @param {!Element} unusedElement
     * @param {function(number)} unusedListener
     * @return {!UnlistenDef}
     * @protected
     * @abstract
     */

  }, {
    key: 'observe',
    value: function observe(unusedElement, unusedListener) {}

    /**
     * @param {!Element} unusedElement
     * @return {number}
     * @abstract
     */

  }, {
    key: 'getElementVisibility',
    value: function getElementVisibility(unusedElement) {}

    /**
     * @param {!Element} unusedElement
     * @return {?JsonObject}
     * @abstract
     */

  }, {
    key: 'getElementIntersectionRect',
    value: function getElementIntersectionRect(unusedElement) {}
  }]);

  return VisibilityManager;
}();

/**
 * The implementation of `VisibilityManager` for an AMP document. Two
 * distinct modes are supported: the main AMP doc and a in-a-box doc.
 */


var VisibilityManagerForDoc = exports.VisibilityManagerForDoc = function (_VisibilityManager) {
  _inherits(VisibilityManagerForDoc, _VisibilityManager);

  /**
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function VisibilityManagerForDoc(ampdoc) {
    _classCallCheck(this, VisibilityManagerForDoc);

    /** @const @private */
    var _this2 = _possibleConstructorReturn(this, (VisibilityManagerForDoc.__proto__ || Object.getPrototypeOf(VisibilityManagerForDoc)).call(this, /* parent */null, ampdoc));

    _this2.viewer_ = _services.Services.viewerForDoc(ampdoc);

    /** @const @private */
    _this2.viewport_ = _services.Services.viewportForDoc(ampdoc);

    /** @private {boolean} */
    _this2.backgrounded_ = !_this2.viewer_.isVisible();

    /** @const @private {boolean} */
    _this2.backgroundedAtStart_ = _this2.isBackgrounded();

    /**
     * @const
     * @private {!Object<number, {
     *   element: !Element,
     *   intersectionRatio: number,
     *   listeners: !Array<function(number)>
     * }>}
     */
    _this2.trackedElements_ = (0, _object.map)();

    /** @private {?IntersectionObserver|?IntersectionObserverPolyfill} */
    _this2.intersectionObserver_ = null;

    if ((0, _mode.getMode)(_this2.ampdoc.win).runtime == 'inabox') {
      // In-a-box: visibility depends on the InOb.
      var root = _this2.ampdoc.getRootNode();
      var rootElement = (0, _log.dev)().assertElement(root.documentElement || root.body || root);
      _this2.unsubscribe(_this2.observe(rootElement, _this2.setRootVisibility.bind(_this2)));
    } else {
      // Main document: visibility is based on the viewer.
      _this2.setRootVisibility(_this2.viewer_.isVisible() ? 1 : 0);
      _this2.unsubscribe(_this2.viewer_.onVisibilityChanged(function () {
        var isVisible = _this2.viewer_.isVisible();
        if (!isVisible) {
          _this2.backgrounded_ = true;
        }
        _this2.setRootVisibility(isVisible ? 1 : 0);
      }));
    }
    return _this2;
  }

  /** @override */


  _createClass(VisibilityManagerForDoc, [{
    key: 'dispose',
    value: function dispose() {
      _get(VisibilityManagerForDoc.prototype.__proto__ || Object.getPrototypeOf(VisibilityManagerForDoc.prototype), 'dispose', this).call(this);
      if (this.intersectionObserver_) {
        this.intersectionObserver_.disconnect();
        this.intersectionObserver_ = null;
      }
    }

    /** @override */

  }, {
    key: 'getStartTime',
    value: function getStartTime() {
      return (0, _log.dev)().assertNumber(this.viewer_.getFirstVisibleTime());
    }

    /** @override */

  }, {
    key: 'isBackgrounded',
    value: function isBackgrounded() {
      return this.backgrounded_;
    }

    /** @override */

  }, {
    key: 'isBackgroundedAtStart',
    value: function isBackgroundedAtStart() {
      return this.backgroundedAtStart_;
    }

    /** @override */

  }, {
    key: 'getRootLayoutBox',
    value: function getRootLayoutBox() {
      // This code is the same for "in-a-box" and standalone doc.
      var root = this.ampdoc.getRootNode();
      var rootElement = (0, _log.dev)().assertElement(root.documentElement || root.body || root);
      return this.viewport_.getLayoutRect(rootElement);
    }

    /** @override */

  }, {
    key: 'observe',
    value: function observe(element, listener) {
      var _this3 = this;

      this.polyfillAmpElementIfNeeded_(element);

      var id = getElementId(element);
      var trackedElement = this.trackedElements_[id];
      if (!trackedElement) {
        trackedElement = {
          element: element,
          intersectionRatio: 0,
          intersectionRect: null,
          listeners: []
        };
        this.trackedElements_[id] = trackedElement;
      } else if (trackedElement.intersectionRatio > 0) {
        // This has already been tracked and the `intersectionRatio` is fresh.
        listener(trackedElement.intersectionRatio);
      }
      trackedElement.listeners.push(listener);
      this.getIntersectionObserver_().observe(element);
      return function () {
        var trackedElement = _this3.trackedElements_[id];
        if (trackedElement) {
          var index = trackedElement.listeners.indexOf(listener);
          if (index != -1) {
            trackedElement.listeners.splice(index, 1);
          }
          if (trackedElement.listeners.length == 0) {
            _this3.intersectionObserver_.unobserve(element);
            delete _this3.trackedElements_[id];
          }
        }
      };
    }

    /** @override */

  }, {
    key: 'getElementVisibility',
    value: function getElementVisibility(element) {
      if (this.getRootVisibility() == 0) {
        return 0;
      }
      var id = getElementId(element);
      var trackedElement = this.trackedElements_[id];
      return trackedElement && trackedElement.intersectionRatio || 0;
    }

    /**
     * Gets the intersection element.
     *
     * @param {!Element} element
     * @return {?JsonObject}
     */

  }, {
    key: 'getElementIntersectionRect',
    value: function getElementIntersectionRect(element) {
      if (this.getElementVisibility(element) <= 0) {
        return null;
      }
      var id = getElementId(element);
      var trackedElement = this.trackedElements_[id];
      if (trackedElement) {
        return (/** @type {!JsonObject} */trackedElement.intersectionRect
        );
      }
      return null;
    }

    /**
     * @return {!IntersectionObserver|!IntersectionObserverPolyfill}
     * @private
     */

  }, {
    key: 'getIntersectionObserver_',
    value: function getIntersectionObserver_() {
      if (!this.intersectionObserver_) {
        this.intersectionObserver_ = this.createIntersectionObserver_();
      }
      return this.intersectionObserver_;
    }

    /**
     * @return {!IntersectionObserver|!IntersectionObserverPolyfill}
     * @private
     */

  }, {
    key: 'createIntersectionObserver_',
    value: function createIntersectionObserver_() {
      var _this4 = this;

      // Native.
      var win = this.ampdoc.win;

      if ((0, _intersectionObserverPolyfill.nativeIntersectionObserverSupported)(win)) {
        return new win.IntersectionObserver(this.onIntersectionChanges_.bind(this), { threshold: _intersectionObserverPolyfill.DEFAULT_THRESHOLD });
      }

      // Polyfill.
      var intersectionObserverPolyfill = new _intersectionObserverPolyfill.IntersectionObserverPolyfill(this.onIntersectionChanges_.bind(this), { threshold: _intersectionObserverPolyfill.DEFAULT_THRESHOLD });
      var ticker = function ticker() {
        intersectionObserverPolyfill.tick(_this4.viewport_.getRect());
      };
      this.unsubscribe(this.viewport_.onScroll(ticker));
      this.unsubscribe(this.viewport_.onChanged(ticker));
      // Tick in the next event loop. That's how native InOb works.
      setTimeout(ticker);
      return intersectionObserverPolyfill;
    }

    /**
     * @param {!Element} element
     * @private
     */

  }, {
    key: 'polyfillAmpElementIfNeeded_',
    value: function polyfillAmpElementIfNeeded_(element) {
      var _this5 = this;

      var win = this.ampdoc.win;

      if ((0, _intersectionObserverPolyfill.nativeIntersectionObserverSupported)(win)) {
        return;
      }

      // InOb polyfill requires partial AmpElement implementation.
      if (typeof element.getLayoutBox == 'function') {
        return;
      }
      element.getLayoutBox = function () {
        return _this5.viewport_.getLayoutRect(element);
      };
      element.getOwner = function () {
        return null;
      };
    }

    /**
     * @param {!Array<!IntersectionObserverEntry>} entries
     * @private
     */

  }, {
    key: 'onIntersectionChanges_',
    value: function onIntersectionChanges_(entries) {
      var _this6 = this;

      entries.forEach(function (change) {
        var intersection = change.intersectionRect;
        // IntersectionRect type now changed from ClientRect to DOMRectReadOnly.
        // TODO(@zhouyx): Fix all InOb related type.
        intersection = (0, _layoutRect.layoutRectLtwh)(Number(intersection.left), Number(intersection.top), Number(intersection.width), Number(intersection.height));
        _this6.onIntersectionChange_(change.target, change.intersectionRatio, intersection);
      });
    }

    /**
     * @param {!Element} target
     * @param {number} intersectionRatio
     * @param {!../../../src/layout-rect.LayoutRectDef} intersectionRect
     * @private
     */

  }, {
    key: 'onIntersectionChange_',
    value: function onIntersectionChange_(target, intersectionRatio, intersectionRect) {
      intersectionRatio = Math.min(Math.max(intersectionRatio, 0), 1);
      var id = getElementId(target);
      var trackedElement = this.trackedElements_[id];
      if (trackedElement) {
        trackedElement.intersectionRatio = intersectionRatio;
        trackedElement.intersectionRect = intersectionRect;
        for (var i = 0; i < trackedElement.listeners.length; i++) {
          trackedElement.listeners[i](intersectionRatio);
        }
      }
    }
  }]);

  return VisibilityManagerForDoc;
}(VisibilityManager);

/**
 * The implementation of `VisibilityManager` for a FIE embed. This visibility
 * root delegates most of tracking functions to its parent, the ampdoc root.
 */


var VisibilityManagerForEmbed = exports.VisibilityManagerForEmbed = function (_VisibilityManager2) {
  _inherits(VisibilityManagerForEmbed, _VisibilityManager2);

  /**
   * @param {!VisibilityManager} parent
   * @param {!../../../src/friendly-iframe-embed.FriendlyIframeEmbed} embed
   */
  function VisibilityManagerForEmbed(parent, embed) {
    _classCallCheck(this, VisibilityManagerForEmbed);

    /** @const */
    var _this7 = _possibleConstructorReturn(this, (VisibilityManagerForEmbed.__proto__ || Object.getPrototypeOf(VisibilityManagerForEmbed)).call(this, parent, parent.ampdoc));

    _this7.embed = embed;

    /** @const @private {boolean} */
    _this7.backgroundedAtStart_ = _this7.parent.isBackgrounded();

    _this7.unsubscribe(_this7.parent.observe((0, _log.dev)().assertElement(embed.host), _this7.setRootVisibility.bind(_this7)));
    return _this7;
  }

  /** @override */


  _createClass(VisibilityManagerForEmbed, [{
    key: 'getStartTime',
    value: function getStartTime() {
      return this.embed.getStartTime();
    }

    /** @override */

  }, {
    key: 'isBackgrounded',
    value: function isBackgrounded() {
      return this.parent.isBackgrounded();
    }

    /** @override */

  }, {
    key: 'isBackgroundedAtStart',
    value: function isBackgroundedAtStart() {
      return this.backgroundedAtStart_;
    }

    /**
     * Gets the layout box of the embedded document. Note that this may be
     * smaller than the size allocated by the host. In that case, the document
     * will be centered, and the unfilled space will not be reflected in this
     * return value.
     * embed.iframe is used to calculate the root layoutbox, since it is more
     * important for the embedded document to know its own size, rather than
     * the size of the host rectangle which it may or may not entirely fill.
     * embed.host is used to calculate the root visibility, however, since
     * the visibility of the host element directly determines the embedded
     * document's visibility.
     * @override
     */

  }, {
    key: 'getRootLayoutBox',
    value: function getRootLayoutBox() {
      var rootElement = (0, _log.dev)().assertElement(this.embed.iframe);
      return _services.Services.viewportForDoc(this.ampdoc).getLayoutRect(rootElement);
    }

    /** @override */

  }, {
    key: 'observe',
    value: function observe(element, listener) {
      return this.parent.observe(element, listener);
    }

    /** @override */

  }, {
    key: 'getElementVisibility',
    value: function getElementVisibility(element) {
      if (this.getRootVisibility() == 0) {
        return 0;
      }
      return this.parent.getElementVisibility(element);
    }

    /**
     * Returns intersecting element.
     * @override
     */

  }, {
    key: 'getElementIntersectionRect',
    value: function getElementIntersectionRect(element) {
      if (this.getRootVisibility() == 0) {
        return null;
      }
      return this.parent.getElementIntersectionRect(element);
    }
  }]);

  return VisibilityManagerForEmbed;
}(VisibilityManager);

},{"../../../src/intersection-observer-polyfill":34,"../../../src/layout-rect":36,"../../../src/log":38,"../../../src/mode":40,"../../../src/services":53,"../../../src/types":57,"../../../src/utils/object":65,"./visibility-model":18}],18:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityModel = undefined;

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

var _promise = require('../../../src/utils/promise');

var _observable = require('../../../src/observable');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class implements visibility calculations based on the
 * visibility ratio. It's used for documents, embeds and individual element.
 * @implements {../../../src/service.Disposable}
 */
var VisibilityModel = exports.VisibilityModel = function () {
  /**
   * @param {!Object<string, *>} spec
   * @param {function():number} calcVisibility
   */
  function VisibilityModel(spec, calcVisibility) {
    var _this = this;

    _classCallCheck(this, VisibilityModel);

    /** @const @private */
    this.calcVisibility_ = calcVisibility;

    /**
     * Spec parameters.
     * @private {{
     *   visiblePercentageMin: number,
     *   visiblePercentageMax: number,
     *   totalTimeMin: number,
     *   totalTimeMax: number,
     *   continuousTimeMin: number,
     *   continuousTimeMax: number,
     * }}
     */
    this.spec_ = {
      visiblePercentageMin: Number(spec['visiblePercentageMin']) / 100 || 0,
      visiblePercentageMax: Number(spec['visiblePercentageMax']) / 100 || 1,
      totalTimeMin: Number(spec['totalTimeMin']) || 0,
      totalTimeMax: Number(spec['totalTimeMax']) || Infinity,
      continuousTimeMin: Number(spec['continuousTimeMin']) || 0,
      continuousTimeMax: Number(spec['continuousTimeMax']) || Infinity
    };
    // Above, if visiblePercentageMax was not specified, assume 100%.
    // Here, do allow 0% to be the value if that is what was specified.
    if (String(spec['visiblePercentageMax']).trim() === '0') {
      this.spec_.visiblePercentageMax = 0;
    }

    /** @private {boolean} */
    this.repeat_ = spec['repeat'] === true;

    /** @private {?Observable} */
    this.onTriggerObservable_ = new _observable.Observable();

    var deferred = new _promise.Deferred();

    /** @private */
    this.eventPromise_ = deferred.promise;

    /** @private {?function()} */
    this.eventResolver_ = deferred.resolve;

    this.eventPromise_.then(function () {
      _this.onTriggerObservable_.fire();
    });

    /** @private {!Array<!UnlistenDef>} */
    this.unsubscribe_ = [];

    /** @const @private {time} */
    this.createdTime_ = Date.now();

    /** @private {boolean} */
    this.ready_ = true;

    /** @private {boolean} */
    this.reportReady_ = true;

    /** @private {?function():!Promise} */
    this.createReportReadyPromise_ = null;

    /** @private {?number} */
    this.scheduledUpdateTimeoutId_ = null;

    /** @private {boolean} */
    this.matchesVisibility_ = false;

    /** @private {boolean} */
    this.everMatchedVisibility_ = false;

    /** @private {time} duration in milliseconds */
    this.continuousTime_ = 0;

    /** @private {time} duration in milliseconds */
    this.maxContinuousVisibleTime_ = 0;

    /** @private {time} duration in milliseconds */
    this.totalVisibleTime_ = 0;

    /** @private {time} milliseconds since epoch */
    this.firstSeenTime_ = 0;

    /** @private {time} milliseconds since epoch */
    this.lastSeenTime_ = 0;

    /** @private {time} milliseconds since epoch */
    this.firstVisibleTime_ = 0;

    /** @private {time} milliseconds since epoch */
    this.lastVisibleTime_ = 0;

    /** @private {time} percent value in a [0, 1] range */
    this.loadTimeVisibility_ = 0;

    /** @private {number} percent value in a [0, 1] range */
    this.minVisiblePercentage_ = 0;

    /** @private {number} percent value in a [0, 1] range */
    this.maxVisiblePercentage_ = 0;

    /** @private {time} milliseconds since epoch */
    this.lastVisibleUpdateTime_ = 0;

    /** @private {boolean} */
    this.waitToReset_ = false;

    /** @private {?number} */
    this.scheduleRepeatId_ = null;
  }

  /**
   * Refresh counter on visible reset.
   * TODO: Right now all state value are scoped state values that gets reset.
   * We may need to add support to global state values,
   * that never reset like globalTotalVisibleTime.
   * Note: loadTimeVisibility is an exception.
   * @private
   */


  _createClass(VisibilityModel, [{
    key: 'reset_',
    value: function reset_() {
      var _this2 = this;

      (0, _log.dev)().assert(!this.eventResolver_, 'Attempt to refresh visible event before previous one resolve');
      var deferred = new _promise.Deferred();
      this.eventPromise_ = deferred.promise;
      this.eventResolver_ = deferred.resolve;

      this.eventPromise_.then(function () {
        _this2.onTriggerObservable_.fire();
      });
      this.scheduleRepeatId_ = null;
      this.everMatchedVisibility_ = false;
      this.matchesVisibility_ = false;
      this.continuousTime_ = 0;
      this.maxContinuousVisibleTime_ = 0;
      this.totalVisibleTime_ = 0;
      this.firstVisibleTime_ = 0;
      this.firstSeenTime_ = 0;
      this.lastSeenTime_ = 0;
      this.lastVisibleTime_ = 0;
      this.minVisiblePercentage_ = 0;
      this.maxVisiblePercentage_ = 0;
      this.lastVisibleUpdateTime_ = 0;
      this.waitToReset_ = false;
    }

    /**
     * Function that visibilityManager can used to dispose model or reset model
     */

  }, {
    key: 'maybeDispose',
    value: function maybeDispose() {
      if (!this.repeat_) {
        this.dispose();
      }
    }

    /** @override */

  }, {
    key: 'dispose',
    value: function dispose() {
      if (this.scheduledUpdateTimeoutId_) {
        clearTimeout(this.scheduledUpdateTimeoutId_);
        this.scheduledUpdateTimeoutId_ = null;
      }
      if (this.scheduleRepeatId_) {
        clearTimeout(this.scheduleRepeatId_);
        this.scheduleRepeatId_ = null;
      }
      this.unsubscribe_.forEach(function (unsubscribe) {
        unsubscribe();
      });
      this.unsubscribe_.length = 0;
      this.eventResolver_ = null;
      if (this.onTriggerObservable_) {
        this.onTriggerObservable_.removeAll();
        this.onTriggerObservable_ = null;
      }
    }

    /**
     * Adds the unsubscribe handler that will be called when this visibility
     * model is destroyed.
     * @param {!UnlistenDef} handler
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe(handler) {
      this.unsubscribe_.push(handler);
    }

    /**
     * Adds the event handler that will be called when all visibility conditions
     * have been met.
     * @param {function()} handler
     */

  }, {
    key: 'onTriggerEvent',
    value: function onTriggerEvent(handler) {
      if (this.onTriggerObservable_) {
        this.onTriggerObservable_.add(handler);
      }
      if (this.eventPromise_ && !this.eventResolver_) {
        // If eventPromise has already resolved, need to call handler manually.
        handler();
      }
    }

    /**
     * Sets whether this object is ready. Ready means that visibility is
     * ready to be calculated, e.g. because an element has been
     * sufficiently rendered.
     * @param {boolean} ready
     */

  }, {
    key: 'setReady',
    value: function setReady(ready) {
      this.ready_ = ready;
      this.update();
    }

    /**
     * Sets that the model needs to wait on extra report ready promise
     * after all visibility conditions have been met to call report handler
     * @param {function():!Promise} callback
     */

  }, {
    key: 'setReportReady',
    value: function setReportReady(callback) {
      this.reportReady_ = false;
      this.createReportReadyPromise_ = callback;
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getVisibility_',
    value: function getVisibility_() {
      return this.ready_ ? this.calcVisibility_() : 0;
    }

    /**
     * Runs the calculation cycle.
     */

  }, {
    key: 'update',
    value: function update() {
      this.update_(this.getVisibility_());
    }

    /**
     * Returns the calculated state of visibility.
     * @param {time} startTime
     * @return {!Object<string, string|number>}
     */

  }, {
    key: 'getState',
    value: function getState(startTime) {
      return {
        // Observed times, relative to the `startTime`.
        firstSeenTime: timeBase(this.firstSeenTime_, startTime),
        lastSeenTime: timeBase(this.lastSeenTime_, startTime),
        lastVisibleTime: timeBase(this.lastVisibleTime_, startTime),
        firstVisibleTime: timeBase(this.firstVisibleTime_, startTime),

        // Durations.
        maxContinuousVisibleTime: this.maxContinuousVisibleTime_,
        totalVisibleTime: this.totalVisibleTime_,

        // Visibility percents.
        loadTimeVisibility: this.loadTimeVisibility_ * 100 || 0,
        minVisiblePercentage: this.minVisiblePercentage_ * 100,
        maxVisiblePercentage: this.maxVisiblePercentage_ * 100
      };
    }

    /**
     * @param {number} visibility
     * @private
     */

  }, {
    key: 'update_',
    value: function update_(visibility) {
      var _this3 = this;

      // Update state and check if all conditions are satisfied
      if (this.waitToReset_) {
        if (!this.isVisibilityMatch_(visibility)) {
          // We were waiting for a condition to become unmet, and now it has
          this.reset_();
        }
        return;
      }
      if (!this.eventResolver_) {
        return;
      }
      var conditionsMet = this.updateCounters_(visibility);
      if (conditionsMet) {
        if (this.scheduledUpdateTimeoutId_) {
          clearTimeout(this.scheduledUpdateTimeoutId_);
          this.scheduledUpdateTimeoutId_ = null;
        }
        if (this.reportReady_) {
          // TODO(jonkeller): Can we eliminate eventResolver_?
          this.eventResolver_();
          this.eventResolver_ = null;
          if (this.repeat_) {
            this.waitToReset_ = true;
            this.continuousTime_ = 0;
          }
        } else if (this.createReportReadyPromise_) {
          // Report when report ready promise resolve
          var reportReadyPromise = this.createReportReadyPromise_();
          this.createReportReadyPromise_ = null;
          reportReadyPromise.then(function () {
            _this3.reportReady_ = true;
            // Need to update one more time in case time exceeds
            // maxContinuousVisibleTime.
            _this3.update();
          });
        }
      } else if (this.matchesVisibility_ && !this.scheduledUpdateTimeoutId_) {
        // There is unmet duration condition, schedule a check
        var timeToWait = this.computeTimeToWait_();
        if (timeToWait > 0) {
          this.scheduledUpdateTimeoutId_ = setTimeout(function () {
            _this3.scheduledUpdateTimeoutId_ = null;
            _this3.update();
          }, timeToWait);
        }
      } else if (!this.matchesVisibility_ && this.scheduledUpdateTimeoutId_) {
        clearTimeout(this.scheduledUpdateTimeoutId_);
        this.scheduledUpdateTimeoutId_ = null;
      }
    }

    /**
     * Check if visibility fall into the percentage range
     * @param {number} visibility
     * @return {boolean}
     */

  }, {
    key: 'isVisibilityMatch_',
    value: function isVisibilityMatch_(visibility) {
      (0, _log.dev)().assert(visibility >= 0 && visibility <= 1, 'invalid visibility value: %s', visibility);
      // Special case: If visiblePercentageMin is 100%, then it doesn't make
      // sense to do the usual (min, max] since that would never be true.
      if (this.spec_.visiblePercentageMin == 1) {
        return visibility == 1;
      }
      // Special case: If visiblePercentageMax is 0%, then we
      // want to ping when the creative becomes not visible.
      if (this.spec_.visiblePercentageMax == 0) {
        return visibility == 0;
      }
      return visibility > this.spec_.visiblePercentageMin && visibility <= this.spec_.visiblePercentageMax;
    }

    /**
     * @param {number} visibility
     * @return {boolean} true
     * @private
     */

  }, {
    key: 'updateCounters_',
    value: function updateCounters_(visibility) {
      (0, _log.dev)().assert(visibility >= 0 && visibility <= 1, 'invalid visibility value: %s', visibility);
      var now = Date.now();

      if (visibility > 0) {
        this.firstSeenTime_ = this.firstSeenTime_ || now;
        this.lastSeenTime_ = now;
        // Consider it as load time visibility if this happens within 300ms of
        // page load.
        if (!this.loadTimeVisibility_ && now - this.createdTime_ < 300) {
          this.loadTimeVisibility_ = visibility;
        }
      }

      var prevMatchesVisibility = this.matchesVisibility_;
      var timeSinceLastUpdate = this.lastVisibleUpdateTime_ ? now - this.lastVisibleUpdateTime_ : 0;
      this.matchesVisibility_ = this.isVisibilityMatch_(visibility);
      if (this.matchesVisibility_) {
        this.everMatchedVisibility_ = true;
        if (prevMatchesVisibility) {
          // Keep counting.
          this.totalVisibleTime_ += timeSinceLastUpdate;
          this.continuousTime_ += timeSinceLastUpdate;
          this.maxContinuousVisibleTime_ = Math.max(this.maxContinuousVisibleTime_, this.continuousTime_);
        } else {
          // The resource came into view: start counting.
          (0, _log.dev)().assert(!this.lastVisibleUpdateTime_);
          this.firstVisibleTime_ = this.firstVisibleTime_ || now;
        }
        this.lastVisibleUpdateTime_ = now;
        this.minVisiblePercentage_ = this.minVisiblePercentage_ > 0 ? Math.min(this.minVisiblePercentage_, visibility) : visibility;
        this.maxVisiblePercentage_ = Math.max(this.maxVisiblePercentage_, visibility);
        this.lastVisibleTime_ = now;
      } else if (prevMatchesVisibility) {
        // The resource went out of view. Do final calculations and reset state.
        (0, _log.dev)().assert(this.lastVisibleUpdateTime_ > 0);

        this.maxContinuousVisibleTime_ = Math.max(this.maxContinuousVisibleTime_, this.continuousTime_ + timeSinceLastUpdate);

        // Reset for next visibility event.
        this.lastVisibleUpdateTime_ = 0;
        this.totalVisibleTime_ += timeSinceLastUpdate;
        this.continuousTime_ = 0; // Clear only after max is calculated above.
        this.lastVisibleTime_ = now;
      }

      return this.everMatchedVisibility_ && this.totalVisibleTime_ >= this.spec_.totalTimeMin && this.totalVisibleTime_ <= this.spec_.totalTimeMax && this.maxContinuousVisibleTime_ >= this.spec_.continuousTimeMin && this.maxContinuousVisibleTime_ <= this.spec_.continuousTimeMax;
    }

    /**
     * Computes time, assuming the object is currently visible, that it'd take
     * it to match all timing requirements.
     * @return {time}
     * @private
     */

  }, {
    key: 'computeTimeToWait_',
    value: function computeTimeToWait_() {
      var waitForContinuousTime = Math.max(this.spec_.continuousTimeMin - this.continuousTime_, 0);
      var waitForTotalTime = Math.max(this.spec_.totalTimeMin - this.totalVisibleTime_, 0);
      var maxWaitTime = Math.max(waitForContinuousTime, waitForTotalTime);
      return Math.min(maxWaitTime, waitForContinuousTime || Infinity, waitForTotalTime || Infinity);
    }
  }]);

  return VisibilityModel;
}();

/**
 * Calculates the specified time based on the given `baseTime`.
 * @param {time} time
 * @param {time} baseTime
 * @return {time}
 */


function timeBase(time, baseTime) {
  return time >= baseTime ? time - baseTime : 0;
}

},{"../../../src/log":38,"../../../src/observable":41,"../../../src/utils/promise":66}],19:[function(require,module,exports){
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


},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IframeTransportEvent = exports.MessageType = exports.CONSTANTS = undefined;
exports.listen = listen;
exports.serializeMessage = serializeMessage;
exports.deserializeMessage = deserializeMessage;
exports.isAmpMessage = isAmpMessage;

var _log = require('./log');

var _object = require('./utils/object');

var _eventHelperListen = require('./event-helper-listen');

var _json = require('./json');

/** @const */
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

var AMP_MESSAGE_PREFIX = 'amp-';
var CONSTANTS = exports.CONSTANTS = {
  responseTypeSuffix: '-result',
  messageIdFieldName: 'messageId',
  payloadFieldName: 'payload',
  contentFieldName: 'content'
};

/** @enum {string} */
var MessageType = exports.MessageType = {
  // For amp-ad
  SEND_EMBED_STATE: 'send-embed-state',
  EMBED_STATE: 'embed-state',
  SEND_EMBED_CONTEXT: 'send-embed-context',
  EMBED_CONTEXT: 'embed-context',
  SEND_INTERSECTIONS: 'send-intersections',
  INTERSECTION: 'intersection',
  EMBED_SIZE: 'embed-size',
  EMBED_SIZE_CHANGED: 'embed-size-changed',
  EMBED_SIZE_DENIED: 'embed-size-denied',
  NO_CONTENT: 'no-content',
  GET_HTML: 'get-html',
  GET_CONSENT_STATE: 'get-consent-state',

  // For the frame to be placed in full overlay mode for lightboxes
  FULL_OVERLAY_FRAME: 'full-overlay-frame',
  FULL_OVERLAY_FRAME_RESPONSE: 'full-overlay-frame-response',
  CANCEL_FULL_OVERLAY_FRAME: 'cancel-full-overlay-frame',
  CANCEL_FULL_OVERLAY_FRAME_RESPONSE: 'cancel-full-overlay-frame-response',

  // For amp-inabox
  SEND_POSITIONS: 'send-positions',
  POSITION: 'position',

  // For amp-analytics' iframe-transport
  SEND_IFRAME_TRANSPORT_EVENTS: 'send-iframe-transport-events',
  IFRAME_TRANSPORT_EVENTS: 'iframe-transport-events',
  IFRAME_TRANSPORT_RESPONSE: 'iframe-transport-response',

  // For user-error-in-iframe
  USER_ERROR_IN_IFRAME: 'user-error-in-iframe'
};

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
 * Serialize an AMP post message. Output looks like:
 * 'amp-011481323099490{"type":"position","sentinel":"12345","foo":"bar"}'
 * @param {string} type
 * @param {string} sentinel
 * @param {JsonObject=} data
 * @param {?string=} rtvVersion
 * @return {string}
 */
function serializeMessage(type, sentinel) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _object.dict)();
  var rtvVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  // TODO: consider wrap the data in a "data" field. { type, sentinal, data }
  var message = data;
  message['type'] = type;
  message['sentinel'] = sentinel;
  return AMP_MESSAGE_PREFIX + (rtvVersion || '') + JSON.stringify(message);
}

/**
 * Deserialize an AMP post message.
 * Returns null if it's not valid AMP message format.
 *
 * @param {*} message
 * @return {?JsonObject|undefined}
 */
function deserializeMessage(message) {
  if (!isAmpMessage(message)) {
    return null;
  }
  var startPos = message.indexOf('{');
  (0, _log.dev)().assert(startPos != -1, 'JSON missing in %s', message);
  try {
    return (0, _json.parseJson)(message.substr(startPos));
  } catch (e) {
    (0, _log.dev)().error('MESSAGING', 'Failed to parse message: ' + message, e);
    return null;
  }
}

/**
 *  Returns true if message looks like it is an AMP postMessage
 *  @param {*} message
 *  @return {boolean}
 */
function isAmpMessage(message) {
  return typeof message == 'string' && message.indexOf(AMP_MESSAGE_PREFIX) == 0 && message.indexOf('{') != -1;
}

/** @typedef {{creativeId: string, message: string}} */
var IframeTransportEvent = exports.IframeTransportEvent = void 0;
// An event, and the transport ID of the amp-analytics tags that
// generated it. For instance if the creative with transport
// ID 2 sends "hi", then an IframeTransportEvent would look like:
// { creativeId: "2", message: "hi" }
// If the creative with transport ID 2 sent that, and also sent "hello",
// and the creative with transport ID 3 sends "goodbye" then an *array* of 3
// AmpAnalyticsIframeTransportEvent would be sent to the 3p frame like so:
// [
//   { creativeId: "2", message: "hi" }, // An AmpAnalyticsIframeTransportEvent
//   { creativeId: "2", message: "hello" }, // Another
//   { creativeId: "3", message: "goodbye" } // And another
// ]

},{"./event-helper-listen":29,"./json":35,"./log":38,"./utils/object":65}],22:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdPositionAllowed = isAdPositionAllowed;
exports.getAdContainer = getAdContainer;
exports.getAmpAdResourceId = getAmpAdResourceId;

var _style = require('./style');

var _log = require('./log');

var _service = require('./service');

var AD_CONTAINER_PROP = '__AMP__AD_CONTAINER';

/**
 * Tags that are allowed to have fixed positioning
 * @const {!Object<string, boolean>}
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

var CONTAINERS = {
  'AMP-FX-FLYING-CARPET': true,
  'AMP-LIGHTBOX': true,
  'AMP-STICKY-AD': true,
  'AMP-LIGHTBOX-GALLERY': true
};

/**
 * Determines if an element is fixed-positioned.
 * OK to use, because it's only called from onLayoutMeasure
 * @param {!Element} el
 * @param {!Window} win
 * @return {boolean}
 */
function isPositionFixed(el, win) {
  var _computedStyle = (0, _style.computedStyle)(win, el),
      position = _computedStyle.position;
  // We consider sticky positions as fixed, since they can be fixed.


  return position == 'fixed' || position == 'sticky';
}

/**
 * @param {!Element} element
 * @param {!Window} win
 * @return {boolean} whether the element position is allowed. If the element
 * belongs to CONTAINERS, it is allowed to be position fixed.
 * If the element has a position fixed ancestor, it is not allowed.
 * This should only be called when a layout on the page was just forced
 * anyway.
 */
function isAdPositionAllowed(element, win) {
  var hasFixedAncestor = false;
  var containers = 0;
  var el = element;
  do {
    if (CONTAINERS[el.tagName]) {
      // The containers must not themselves be contained in a fixed-position
      // element. Continue the search.
      containers++;
      hasFixedAncestor = false;
    } else if (isPositionFixed((0, _log.dev)().assertElement(el), win)) {
      // Because certain blessed elements may contain a position fixed
      // container (which contain an ad), we continue to search the
      // ancestry tree.
      hasFixedAncestor = true;
    }
    el = el.parentElement;
  } while (el && el.tagName != 'BODY');
  return !hasFixedAncestor && containers <= 1;
}

/**
 * Returns the blessed container element tagName if the ad is contained by one.
 * This is called during layout measure.
 * @param {!Element} element
 * @return {?string}
 */
function getAdContainer(element) {
  if (element[AD_CONTAINER_PROP] === undefined) {
    var el = element.parentElement;
    while (el && el.tagName != 'BODY') {
      if (CONTAINERS[el.tagName]) {
        return element[AD_CONTAINER_PROP] = el.tagName;
      }
      el = el.parentElement;
    }
    element[AD_CONTAINER_PROP] = null;
  }
  return element[AD_CONTAINER_PROP];
}

/**
 * Gets the resource ID of the amp-ad element containing the passed node.
 * If there is no containing amp-ad tag, then null will be returned.
 * TODO(jonkeller): Investigate whether non-A4A use case is needed. Issue 11436
 * @param {!Element} node
 * @param {!Window} topWin
 * @return {?string}
 */
function getAmpAdResourceId(node, topWin) {
  try {
    var frameParent = (0, _service.getParentWindowFrameElement)(node, topWin).parentElement;
    if (frameParent.nodeName == 'AMP-AD') {
      return String(frameParent.getResourceId());
    }
  } catch (e) {}
  // Whether we entered the catch above (e.g. due to attempt to access
  // across xdomain boundary), or failed to enter the if further above, the
  // node is not within a friendly amp-ad tag. So, there is no amp-ad
  // resource ID. How to handle that is up to the caller, but see TODO above.
  return null;
}

},{"./log":38,"./service":51,"./style":56}],23:[function(require,module,exports){
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
 * Commonly used signals across different elements and documents.
 * @enum {string}
 */
var CommonSignals = exports.CommonSignals = {

  /**
   * The element has been built.
   */
  BUILT: 'built',

  /**
   * The initial contents of an element/document/embed have been loaded.
   */
  INI_LOAD: 'ini-load',

  /**
   * The element has been loaded.
   */
  LOAD_END: 'load-end',

  /**
   * The element has started loading.
   */
  LOAD_START: 'load-start',

  /**
   * Rendering has been confirmed to have been started.
   */
  RENDER_START: 'render-start',

  /**
   * The element has been unlaid out.
   */
  UNLOAD: 'unload'
};

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{"./config":24,"./string":55,"./url":60}],26:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDocumentReady = isDocumentReady;
exports.onDocumentReady = onDocumentReady;
exports.whenDocumentReady = whenDocumentReady;
exports.whenDocumentComplete = whenDocumentComplete;
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
 * Whether the document is ready.
 * @param {!Document} doc
 * @return {boolean}
 */
function isDocumentReady(doc) {
  return doc.readyState != 'loading' && doc.readyState != 'uninitialized';
}

/**
 * Whether the document has loaded all the css and sub-resources.
 * @param {!Document} doc
 * @return {boolean}
 */
function isDocumentComplete(doc) {
  return doc.readyState == 'complete';
}

/**
 * Calls the callback when document is ready.
 * @param {!Document} doc
 * @param {function(!Document)} callback
 */
function onDocumentReady(doc, callback) {
  onDocumentState(doc, isDocumentReady, callback);
}

/**
 * Calls the callback when document's state satisfies the stateFn.
 * @param {!Document} doc
 * @param {function(!Document):boolean} stateFn
 * @param {function(!Document)} callback
 */
function onDocumentState(doc, stateFn, callback) {
  var ready = stateFn(doc);
  if (ready) {
    callback(doc);
  } else {
    var readyListener = function readyListener() {
      if (stateFn(doc)) {
        if (!ready) {
          ready = true;
          callback(doc);
        }
        doc.removeEventListener('readystatechange', readyListener);
      }
    };
    doc.addEventListener('readystatechange', readyListener);
  }
}

/**
 * Returns a promise that is resolved when document is ready.
 * @param {!Document} doc
 * @return {!Promise<!Document>}
 */
function whenDocumentReady(doc) {
  return new Promise(function (resolve) {
    onDocumentReady(doc, resolve);
  });
}

/**
 * Returns a promise that is resolved when document is complete.
 * @param {!Document} doc
 * @return {!Promise<!Document>}
 */
function whenDocumentComplete(doc) {
  return new Promise(function (resolve) {
    onDocumentState(doc, isDocumentComplete, resolve);
  });
}

},{}],27:[function(require,module,exports){
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

},{"../third_party/css-escape/css-escape":69,"./log":38,"./string":55,"./types":57,"./utils/object":65,"./utils/promise":66}],28:[function(require,module,exports){
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

},{"./dom":27,"./log":38,"./service":51,"./types":57}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{"./event-helper-listen":29,"./log":38}],31:[function(require,module,exports){
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

},{"./cookies":25,"./url":60,"./utils/object":65}],32:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FriendlyIframeEmbed = exports.FriendlyIframeSpec = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

exports.setSrcdocSupportedForTesting = setSrcdocSupportedForTesting;
exports.setFriendlyIframeEmbedVisible = setFriendlyIframeEmbedVisible;
exports.getFriendlyIframeEmbedOptional = getFriendlyIframeEmbedOptional;
exports.installFriendlyIframeEmbed = installFriendlyIframeEmbed;
exports.mergeHtmlForTesting = mergeHtmlForTesting;
exports.whenContentIniLoad = whenContentIniLoad;
exports.isInFie = isInFie;

var _commonSignals = require('./common-signals');

var _observable = require('./observable');

var _services = require('./services');

var _signals = require('./utils/signals');

var _dom = require('./dom');

var _log = require('./log');

var _service = require('./service');

var _documentReady = require('./document-ready');

var _layoutRect = require('./layout-rect');

var _eventHelper = require('./event-helper');

var _style = require('./style');

var _types = require('./types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {string} */
var EMBED_PROP = '__AMP_EMBED__';

/** @const {!Array<string>} */
var EXCLUDE_INI_LOAD = ['AMP-AD', 'AMP-ANALYTICS', 'AMP-PIXEL', 'AMP-AD-EXIT'];

/**
 * Parameters used to create the new "friendly iframe" embed.
 * - html: The complete content of an AMP embed, which is itself an AMP
 *   document. Can include whatever is normally allowed in an AMP document,
 *   except for AMP `<script>` declarations. Those should be passed as an
 *   array of `extensionIds`.
 * - extensionsIds: An optional array of AMP extension IDs used in this embed.
 * - fonts: An optional array of fonts used in this embed.
 *
 * @typedef {{
 *   host: (?AmpElement|undefined),
 *   url: string,
 *   html: string,
 *   extensionIds: (?Array<string>|undefined),
 *   fonts: (?Array<string>|undefined),
 * }}
 */
var FriendlyIframeSpec = exports.FriendlyIframeSpec = void 0;

/**
 * @type {boolean|undefined}
 * @visibleForTesting
 */
var srcdocSupported = void 0;

/**
 * @param {boolean|undefined} val
 * @visibleForTesting
 */
function setSrcdocSupportedForTesting(val) {
  srcdocSupported = val;
}

/**
 * Returns `true` if the Friendly Iframes are supported.
 * @return {boolean}
 */
function isSrcdocSupported() {
  if (srcdocSupported === undefined) {
    srcdocSupported = 'srcdoc' in HTMLIFrameElement.prototype;
  }
  return srcdocSupported;
}

/**
 * Sets whether the embed is currently visible. The interpretation of visibility
 * is up to the embed parent. However, most of typical cases would rely on
 * whether the embed is currently in the viewport.
 * @param {!FriendlyIframeEmbed} embed
 * @param {boolean} visible
 * TODO(dvoytenko): Re-evaluate and probably drop once layers are ready.
 */
function setFriendlyIframeEmbedVisible(embed, visible) {
  embed.setVisible_(visible);
}

/**
 * Returns the embed created using `installFriendlyIframeEmbed` or `null`.
 * Caution: This will only return the FIE after the iframe has 'loaded'. If you
 * are checking before this signal you may be in a race condition that returns
 * null.
 * @param {!HTMLIFrameElement} iframe
 * @return {?FriendlyIframeEmbed}
 */
function getFriendlyIframeEmbedOptional(iframe) {
  return (/** @type {?FriendlyIframeEmbed} */iframe[EMBED_PROP]
  );
}

/**
 * Creates the requested "friendly iframe" embed. Returns the promise that
 * will be resolved as soon as the embed is available. The actual
 * initialization of the embed will start as soon as the `iframe` is added
 * to the DOM.
 * @param {!HTMLIFrameElement} iframe
 * @param {!Element} container
 * @param {!FriendlyIframeSpec} spec
 * @param {function(!Window)=} opt_preinstallCallback
 * @return {!Promise<!FriendlyIframeEmbed>}
 */
function installFriendlyIframeEmbed(iframe, container, spec, opt_preinstallCallback) {
  /** @const {!Window} */
  var win = (0, _service.getTopWindow)((0, _types.toWin)(iframe.ownerDocument.defaultView));
  /** @const {!./service/extensions-impl.Extensions} */
  var extensions = _services.Services.extensionsFor(win);

  (0, _style.setStyle)(iframe, 'visibility', 'hidden');
  iframe.setAttribute('referrerpolicy', 'unsafe-url');

  // Pre-load extensions.
  if (spec.extensionIds) {
    spec.extensionIds.forEach(function (extensionId) {
      return extensions.preloadExtension(extensionId);
    });
  }

  var html = mergeHtml(spec);

  // Receive the signal when iframe is ready: it's document is formed.
  iframe.onload = function () {
    // Chrome does not reflect the iframe readystate.
    iframe.readyState = 'complete';
  };
  var registerViolationListener = function registerViolationListener() {
    iframe.contentWindow.addEventListener('securitypolicyviolation', function (violationEvent) {
      (0, _log.dev)().warn('FIE', 'security policy violation', violationEvent);
    });
  };
  var loadedPromise = void 0;
  if (isSrcdocSupported()) {
    iframe.srcdoc = html;
    loadedPromise = (0, _eventHelper.loadPromise)(iframe);
    container.appendChild(iframe);
    registerViolationListener();
  } else {
    iframe.src = 'about:blank';
    container.appendChild(iframe);
    var childDoc = iframe.contentWindow.document;
    childDoc.open();
    registerViolationListener();
    childDoc.write(html);
    // With document.write, `iframe.onload` arrives almost immediately, thus
    // we need to wait for child's `window.onload`.
    loadedPromise = (0, _eventHelper.loadPromise)(iframe.contentWindow);
    childDoc.close();
  }

  // Wait for document ready signal.
  // This is complicated due to crbug.com/649201 on Chrome and a similar issue
  // on Safari where newly created document's `readyState` immediately equals
  // `complete`, even though the document itself is not yet available. There's
  // no other reliable signal for `readyState` in a child window and thus
  // we have to fallback to polling.
  var readyPromise = void 0;
  if (isIframeReady(iframe)) {
    readyPromise = Promise.resolve();
  } else {
    readyPromise = new Promise(function (resolve) {
      /** @const {number} */
      var interval = win.setInterval(function () {
        if (isIframeReady(iframe)) {
          resolve();
          win.clearInterval(interval);
        }
      }, /* milliseconds */5);

      // For safety, make sure we definitely stop polling when child doc is
      // loaded.
      loadedPromise.catch(function (error) {
        (0, _log.rethrowAsync)(error);
      }).then(function () {
        resolve();
        win.clearInterval(interval);
      });
    });
  }

  return readyPromise.then(function () {
    var embed = new FriendlyIframeEmbed(iframe, spec, loadedPromise);
    iframe[EMBED_PROP] = embed;

    var childWin = /** @type {!Window} */iframe.contentWindow;
    // Add extensions.
    extensions.installExtensionsInChildWindow(childWin, spec.extensionIds || [], opt_preinstallCallback);
    // Ready to be shown.
    embed.startRender_();
    return embed;
  });
}

/**
 * Returns `true` when iframe is ready.
 * @param {!HTMLIFrameElement} iframe
 * @return {boolean}
 */
function isIframeReady(iframe) {
  // This is complicated due to crbug.com/649201 on Chrome and a similar issue
  // on Safari where newly created document's `readyState` immediately equals
  // `complete`, even though the document itself is not yet available. There's
  // no other reliable signal for `readyState` in a child window and thus
  // the best way to check is to see the contents of the body.
  var childDoc = iframe.contentWindow && iframe.contentWindow.document;
  return !!(childDoc && (0, _documentReady.isDocumentReady)(childDoc) && childDoc.body && childDoc.body.firstChild);
}

/**
 * Merges base and fonts into html document.
 * @param {!FriendlyIframeSpec} spec
 */
function mergeHtml(spec) {
  var originalHtml = spec.html;
  var originalHtmlUp = originalHtml.toUpperCase();

  // Find the insertion point.
  var ip = originalHtmlUp.indexOf('<HEAD');
  if (ip != -1) {
    ip = originalHtmlUp.indexOf('>', ip + 1) + 1;
  }
  if (ip == -1) {
    ip = originalHtmlUp.indexOf('<BODY');
  }
  if (ip == -1) {
    ip = originalHtmlUp.indexOf('<HTML');
    if (ip != -1) {
      ip = originalHtmlUp.indexOf('>', ip + 1) + 1;
    }
  }

  var result = [];

  // Preambule.
  if (ip > 0) {
    result.push(originalHtml.substring(0, ip));
  }

  // Add <BASE> tag.
  result.push('<base href="' + (0, _dom.escapeHtml)(spec.url) + '">');

  // Load fonts.
  if (spec.fonts) {
    spec.fonts.forEach(function (font) {
      result.push('<link href="' + (0, _dom.escapeHtml)(font) + '" rel="stylesheet" type="text/css">');
    });
  }

  // Load CSP
  result.push('<meta http-equiv=Content-Security-Policy ' + 'content="script-src \'none\';object-src \'none\';child-src \'none\'">');

  // Postambule.
  if (ip > 0) {
    result.push(originalHtml.substring(ip));
  } else {
    result.push(originalHtml);
  }

  return result.join('');
}

/**
 * Exposes `mergeHtml` for testing purposes.
 * @param {!FriendlyIframeSpec} spec
 * @visibleForTesting
 */
function mergeHtmlForTesting(spec) {
  return mergeHtml(spec);
}

/**
 * A "friendly iframe" embed. This is the iframe that's fully accessible to
 * the AMP runtime. It's similar to Shadow DOM in many respects, but it also
 * provides iframe/viewport measurements and enables the use of `vh`, `vw` and
 * `@media` CSS.
 *
 * The friendly iframe is managed by the top-level AMP Runtime. When it's
 * destroyed, the `destroy` method must be called to free up the shared
 * resources.
 */

var FriendlyIframeEmbed = exports.FriendlyIframeEmbed = function () {

  /**
   * @param {!HTMLIFrameElement} iframe
   * @param {!FriendlyIframeSpec} spec
   * @param {!Promise} loadedPromise
   */
  function FriendlyIframeEmbed(iframe, spec, loadedPromise) {
    _classCallCheck(this, FriendlyIframeEmbed);

    /** @const {!HTMLIFrameElement} */
    this.iframe = iframe;

    /** @const {!Window} */
    this.win = /** @type{!Window} */iframe.contentWindow;

    /** @const {!FriendlyIframeSpec} */
    this.spec = spec;

    /** @const {?AmpElement} */
    this.host = spec.host || null;

    /** @const @private {time} */
    this.startTime_ = Date.now();

    /**
     * Starts out as invisible. The interpretation of this flag is up to
     * the emded parent.
     * @private {boolean}
     */
    this.visible_ = false;

    /** @private {!Observable<boolean>} */
    this.visibilityObservable_ = new _observable.Observable();

    /** @private @const */
    this.signals_ = this.host ? this.host.signals() : new _signals.Signals();

    /** @private @const {!Promise} */
    this.winLoadedPromise_ = Promise.all([loadedPromise, this.whenReady()]);
  }

  /**
   * Ensures that all resources from this iframe have been released.
   */


  _createClass(FriendlyIframeEmbed, [{
    key: 'destroy',
    value: function destroy() {
      _services.Services.resourcesForDoc(this.iframe).removeForChildWindow(this.win);
      (0, _service.disposeServicesForEmbed)(this.win);
    }

    /**
     * @return {time}
     */

  }, {
    key: 'getStartTime',
    value: function getStartTime() {
      return this.startTime_;
    }

    /**
     * Returns the base URL for the embedded document.
     * @return {string}
     */

  }, {
    key: 'getUrl',
    value: function getUrl() {
      return this.spec.url;
    }

    /** @return {!Signals} */

  }, {
    key: 'signals',
    value: function signals() {
      return this.signals_;
    }

    /**
     * Returns a promise that will resolve when the embed document is ready.
     * Notice that this signal coincides with the embed's `render-start`.
     * @return {!Promise}
     */

  }, {
    key: 'whenReady',
    value: function whenReady() {
      return this.signals_.whenSignal(_commonSignals.CommonSignals.RENDER_START);
    }

    /**
     * Returns a promise that will resolve when the child window's `onload` event
     * has been emitted. In friendly iframes this typically only includes font
     * loading.
     * @return {!Promise}
     */

  }, {
    key: 'whenWindowLoaded',
    value: function whenWindowLoaded() {
      return this.winLoadedPromise_;
    }

    /**
     * Returns a promise that will resolve when the initial load  of the embed's
     * content has been completed.
     * @return {!Promise}
     */

  }, {
    key: 'whenIniLoaded',
    value: function whenIniLoaded() {
      return this.signals_.whenSignal(_commonSignals.CommonSignals.INI_LOAD);
    }

    /**
     * @private
     * @restricted
     */

  }, {
    key: 'startRender_',
    value: function startRender_() {
      var _this = this;

      if (this.host) {
        this.host.renderStarted();
      } else {
        this.signals_.signal(_commonSignals.CommonSignals.RENDER_START);
      }
      (0, _style.setStyle)(this.iframe, 'visibility', '');
      if (this.win.document && this.win.document.body) {
        this.win.document.documentElement.classList.add('i-amphtml-fie');
        (0, _style.setStyles)((0, _log.dev)().assertElement(this.win.document.body), {
          opacity: 1,
          visibility: 'visible',
          animation: 'none'
        });
      }

      // Initial load signal signal.
      var rect = void 0;
      if (this.host) {
        rect = this.host.getLayoutBox();
      } else {
        rect = (0, _layoutRect.layoutRectLtwh)(0, 0, this.win. /*OK*/innerWidth, this.win. /*OK*/innerHeight);
      }
      Promise.all([this.whenReady(), whenContentIniLoad(this.iframe, this.win, rect)]).then(function () {
        _this.signals_.signal(_commonSignals.CommonSignals.INI_LOAD);
      });
    }

    /**
     * Whether the embed is currently visible. The interpretation of visibility
     * is up to the embed parent. However, most of typical cases would rely on
     * whether the embed is currently in the viewport.
     * @return {boolean}
     * TODO(dvoytenko): Re-evaluate and probably drop once layers are ready.
     */

  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.visible_;
    }

    /**
     * See `isVisible` for more info.
     * @param {function(boolean)} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onVisibilityChanged',
    value: function onVisibilityChanged(handler) {
      return this.visibilityObservable_.add(handler);
    }

    /**
     * @param {boolean} visible
     * @private
     * @restricted
     */

  }, {
    key: 'setVisible_',
    value: function setVisible_(visible) {
      if (this.visible_ != visible) {
        this.visible_ = visible;
        this.visibilityObservable_.fire(this.visible_);
      }
    }

    /**
     * @return {!HTMLBodyElement}
     * @visibleForTesting
     */

  }, {
    key: 'getBodyElement',
    value: function getBodyElement() {
      return (/** @type {!HTMLBodyElement} */(this.iframe.contentDocument || this.iframe.contentWindow.document).body
      );
    }

    /**
     * @return {!./service/resources-impl.Resources}
     * @private
     */

  }, {
    key: 'getResources_',
    value: function getResources_() {
      return _services.Services.resourcesForDoc(this.iframe);
    }

    /**
     * Runs a measure/mutate cycle ensuring that the iframe change is propagated
     * to the resource manager.
     * @param {{measure: (function()|undefined), mutate: function()}} task
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'measureMutate_',
    value: function measureMutate_(task) {
      return this.getResources_().measureMutateElement(this.iframe, task.measure || null, task.mutate);
    }

    /**
     * @return {!Promise}
     */

  }, {
    key: 'enterFullOverlayMode',
    value: function enterFullOverlayMode() {
      var _this2 = this;

      var ampAdParent = (0, _log.dev)().assertElement(this.iframe.parentNode);

      // Security assertion. Otherwise any 3p frame could request lighbox mode.
      (0, _log.user)().assert(ampAdParent.tagName.toLowerCase() == 'amp-ad', 'Only <amp-ad> is allowed to enter lightbox mode.');

      var bodyStyle = {
        'background': 'transparent',
        'position': 'absolute',
        'bottom': 'auto',
        'right': 'auto',

        // Set for replacing with vsync values.
        'top': '',
        'left': '',
        'width': '',
        'height': ''
      };

      var iframeStyle = {
        'position': 'fixed',
        'left': 0,
        'right': 0,
        'bottom': 0,
        'width': '100vw',
        'top': 0,
        'height': '100vh'
      };

      return this.measureMutate_({
        measure: function measure() {
          var rect = _this2.host ? _this2.host.getLayoutBox() : _this2.iframe. /*OK*/getBoundingClientRect();

          // Offset by scroll top as iframe will be position: fixed.
          var dy = -_services.Services.viewportForDoc(_this2.iframe).getScrollTop();

          var _moveLayoutRect = (0, _layoutRect.moveLayoutRect)(rect, /* dx */0, dy),
              top = _moveLayoutRect.top,
              left = _moveLayoutRect.left,
              width = _moveLayoutRect.width,
              height = _moveLayoutRect.height;

          // Offset body by header height to prevent visual jump.


          Object.assign(bodyStyle, {
            'top': (0, _style.px)(top),
            'left': (0, _style.px)(left),
            'width': (0, _style.px)(width),
            'height': (0, _style.px)(height)
          });
        },
        mutate: function mutate() {
          // !important to prevent abuse e.g. box @ ltwh = 0, 0, 0, 0
          (0, _style.setImportantStyles)(_this2.iframe, iframeStyle);

          // We need to override runtime-level !important rules
          (0, _style.setImportantStyles)(_this2.getBodyElement(), bodyStyle);
        }
      });
    }

    /**
     * @return {!Promise}
     */

  }, {
    key: 'leaveFullOverlayMode',
    value: function leaveFullOverlayMode() {
      var _this3 = this;

      return this.measureMutate_({
        mutate: function mutate() {
          (0, _style.resetStyles)(_this3.iframe, ['position', 'left', 'right', 'top', 'bottom', 'width', 'height']);

          // we're not resetting background here as we need to set it to
          // transparent permanently.
          (0, _style.resetStyles)(_this3.getBodyElement(), ['position', 'top', 'left', 'width', 'height', 'bottom', 'right']);
        }
      });
    }
  }]);

  return FriendlyIframeEmbed;
}();

/**
 * Returns the promise that will be resolved when all content elements
 * have been loaded in the initially visible set.
 * @param {!Element|!./service/ampdoc-impl.AmpDoc} elementOrAmpDoc
 * @param {!Window} hostWin
 * @param {!./layout-rect.LayoutRectDef} rect
 * @return {!Promise}
 */


function whenContentIniLoad(elementOrAmpDoc, hostWin, rect) {
  return _services.Services.resourcesForDoc(elementOrAmpDoc).getResourcesInRect(hostWin, rect).then(function (resources) {
    var promises = [];
    resources.forEach(function (r) {
      if (!EXCLUDE_INI_LOAD.includes(r.element.tagName)) {
        promises.push(r.loadedOnce());
      }
    });
    return Promise.all(promises);
  });
}

/**
 * @param {!Element} element
 * @return {boolean}
 */
function isInFie(element) {
  return !!(0, _dom.closestBySelector)(element, '.i-amphtml-fie');
}

},{"./common-signals":23,"./document-ready":26,"./dom":27,"./event-helper":30,"./layout-rect":36,"./log":38,"./observable":41,"./service":51,"./services":53,"./style":56,"./types":57,"./utils/signals":67}],33:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscriptionApi = undefined;

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

exports.listenFor = listenFor;
exports.listenForOncePromise = listenForOncePromise;
exports.postMessage = postMessage;
exports.postMessageToWindows = postMessageToWindows;
exports.parseIfNeeded = parseIfNeeded;
exports.looksLikeTrackingIframe = looksLikeTrackingIframe;
exports.isAdLike = isAdLike;
exports.disableScrollingOnIframe = disableScrollingOnIframe;

var _dom = require('./dom');

var _pFrameMessaging = require('./3p-frame-messaging');

var _log = require('./log');

var _object = require('./utils/object');

var _array = require('./utils/array');

var _eventHelper = require('./event-helper');

var _url = require('./url');

var _style = require('./style');

var _json = require('./json');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sentinel used to force unlistening after a iframe is detached.
 * @type {string}
 */
var UNLISTEN_SENTINEL = 'unlisten';

/**
 * @typedef {{
 *   frame: !Element,
 *   events: !Object<string, !Array<function(!JsonObject)>>
 * }}
 */
var WindowEventsDef = void 0;

/**
 * Returns a mapping from a URL's origin to an array of windows and their
 * listenFor listeners.
 * @param {?Window} parentWin the window that created the iframe
 * @param {boolean=} opt_create create the mapping if it does not exist
 * @return {?Object<string, !Array<!WindowEventsDef>>}
 */
function getListenFors(parentWin, opt_create) {
  var listeningFors = parentWin.listeningFors;


  if (!listeningFors && opt_create) {
    listeningFors = parentWin.listeningFors = Object.create(null);
  }
  return listeningFors || null;
}

/**
 * Returns an array of WindowEventsDef that have had any listenFor listeners
 * registered for this sentinel.
 * @param {?Window} parentWin the window that created the iframe
 * @param {string} sentinel the sentinel of the message
 * @param {boolean=} opt_create create the array if it does not exist
 * @return {?Array<!WindowEventsDef>}
 */
function getListenForSentinel(parentWin, sentinel, opt_create) {
  var listeningFors = getListenFors(parentWin, opt_create);
  if (!listeningFors) {
    return listeningFors;
  }

  var listenSentinel = listeningFors[sentinel];
  if (!listenSentinel && opt_create) {
    listenSentinel = listeningFors[sentinel] = [];
  }
  return listenSentinel || null;
}

/**
 * Returns an mapping of event names to listenFor listeners.
 * @param {?Window} parentWin the window that created the iframe
 * @param {!Element} iframe the iframe element who's context will trigger the
 *     event
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 * @return {?Object<string, !Array<function(!JsonObject, !Window, string)>>}
 */
function getOrCreateListenForEvents(parentWin, iframe, opt_is3P) {
  var _parseUrlDeprecated = (0, _url.parseUrlDeprecated)(iframe.src),
      origin = _parseUrlDeprecated.origin;

  var sentinel = getSentinel_(iframe, opt_is3P);
  var listenSentinel = getListenForSentinel(parentWin, sentinel, true);

  var windowEvents = void 0;
  for (var i = 0; i < listenSentinel.length; i++) {
    var we = listenSentinel[i];
    if (we.frame === iframe) {
      windowEvents = we;
      break;
    }
  }

  if (!windowEvents) {
    windowEvents = {
      frame: iframe,
      origin: origin,
      events: Object.create(null)
    };
    listenSentinel.push(windowEvents);
  }

  return windowEvents.events;
}

/**
 * Returns an mapping of event names to listenFor listeners.
 * @param {?Window} parentWin the window that created the iframe
 * @param {string} sentinel the sentinel of the message
 * @param {string} origin the source window's origin
 * @param {?Window} triggerWin the window that triggered the event
 * @return {?Object<string, !Array<function(!JsonObject, !Window, string)>>}
 */
function getListenForEvents(parentWin, sentinel, origin, triggerWin) {
  var listenSentinel = getListenForSentinel(parentWin, sentinel);

  if (!listenSentinel) {
    return listenSentinel;
  }

  // Find the entry for the frame.
  // TODO(@nekodo): Add a WeakMap<Window, WindowEventsDef> cache to
  //     speed up this process.
  var windowEvents = void 0;
  for (var i = 0; i < listenSentinel.length; i++) {
    var we = listenSentinel[i];
    var contentWindow = we.frame.contentWindow;

    if (!contentWindow) {
      setTimeout(dropListenSentinel, 0, listenSentinel);
    } else if (sentinel === 'amp') {
      // A non-3P code path, origin must match.
      if (we.origin === origin && contentWindow == triggerWin) {
        windowEvents = we;
        break;
      }
    } else if (triggerWin == contentWindow || isDescendantWindow(contentWindow, triggerWin)) {
      // 3p code path, we may accept messages from nested frames.
      windowEvents = we;
      break;
    }
  }

  return windowEvents ? windowEvents.events : null;
}

/**
 * Checks whether one window is a descendant of another by climbing
 * the parent chain.
 * @param {?Window} ancestor potential ancestor window
 * @param {?Window} descendant potential descendant window
 * @return {boolean}
 */
function isDescendantWindow(ancestor, descendant) {
  for (var win = descendant; win && win != win.parent; win = win.parent) {
    if (win == ancestor) {
      return true;
    }
  }
  return false;
}

/**
 * Removes any listenFors registed on listenSentinel that do not have
 * a contentWindow (the frame was removed from the DOM tree).
 * @param {!Array<!WindowEventsDef>} listenSentinel
 */
function dropListenSentinel(listenSentinel) {
  var noopData = (0, _object.dict)({ 'sentinel': UNLISTEN_SENTINEL });

  for (var i = listenSentinel.length - 1; i >= 0; i--) {
    var windowEvents = listenSentinel[i];

    if (!windowEvents.frame.contentWindow) {
      listenSentinel.splice(i, 1);

      var events = windowEvents.events;

      for (var name in events) {
        // Splice here, so that each unlisten does not shift the array
        events[name].splice(0, Infinity).forEach(function (event) {
          event(noopData);
        });
      }
    }
  }
}

/**
 * Registers the global listenFor event listener if it has yet to be.
 * @param {?Window} parentWin
 */
function registerGlobalListenerIfNeeded(parentWin) {
  if (parentWin.listeningFors) {
    return;
  }
  var listenForListener = function listenForListener(event) {
    if (!(0, _eventHelper.getData)(event)) {
      return;
    }
    var data = parseIfNeeded((0, _eventHelper.getData)(event));
    if (!data || !data['sentinel']) {
      return;
    }

    var listenForEvents = getListenForEvents(parentWin, data['sentinel'], event.origin, event.source);
    if (!listenForEvents) {
      return;
    }

    var listeners = listenForEvents[data['type']];
    if (!listeners) {
      return;
    }

    // We slice to avoid issues with adding another listener or unlistening
    // during iteration. We could move to a Doubly Linked List with
    // backtracking, but that's overly complicated.
    listeners = listeners.slice();
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener(data, event.source, event.origin);
    }
  };

  parentWin.addEventListener('message', listenForListener);
}

/**
 * Allows listening for message from the iframe. Returns an unlisten
 * function to remove the listener.
 *
 * @param {?Element} iframe
 * @param {string} typeOfMessage
 * @param {?function(!JsonObject, !Window, string)} callback Called when a
 *     message of this type arrives for this iframe.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 * @param {boolean=} opt_includingNestedWindows set to true if a messages from
 *     nested frames should also be accepted.
 * @return {!UnlistenDef}
 */
function listenFor(iframe, typeOfMessage, callback, opt_is3P, opt_includingNestedWindows) {
  (0, _log.dev)().assert(iframe.src, 'only iframes with src supported');
  (0, _log.dev)().assert(!iframe.parentNode, 'cannot register events on an attached ' + 'iframe. It will cause hair-pulling bugs like #2942');
  (0, _log.dev)().assert(callback);
  var parentWin = iframe.ownerDocument.defaultView;

  registerGlobalListenerIfNeeded(parentWin);

  var listenForEvents = getOrCreateListenForEvents(parentWin, iframe, opt_is3P);

  var events = listenForEvents[typeOfMessage] || (listenForEvents[typeOfMessage] = []);

  var unlisten = void 0;
  var listener = function listener(data, source, origin) {
    // Exclude nested frames if necessary.
    // Note that the source was already verified to be either the contentWindow
    // of the iframe itself or a descendant window within it.
    if (!opt_includingNestedWindows && source != iframe.contentWindow) {
      return;
    }

    if (data.sentinel == UNLISTEN_SENTINEL) {
      unlisten();
      return;
    }
    callback(data, source, origin);
  };

  events.push(listener);

  return unlisten = function unlisten() {
    if (listener) {
      var index = events.indexOf(listener);
      if (index > -1) {
        events.splice(index, 1);
      }
      // Make sure references to the unlisten function do not keep
      // alive too much.
      listener = null;
      events = null;
      callback = null;
    }
  };
}

/**
 * Returns a promise that resolves when one of given messages has been observed
 * for the first time. And remove listener for all other messages.
 * @param {!Element} iframe
 * @param {string|!Array<string>} typeOfMessages
 * @param {boolean=} opt_is3P
 * @return {!Promise<!{data: !JsonObject, source: !Window, origin: string}>}
 */
function listenForOncePromise(iframe, typeOfMessages, opt_is3P) {
  var unlistenList = [];
  if (typeof typeOfMessages == 'string') {
    typeOfMessages = [typeOfMessages];
  }
  return new Promise(function (resolve) {
    for (var i = 0; i < typeOfMessages.length; i++) {
      var message = typeOfMessages[i];
      var unlisten = listenFor(iframe, message, function (data, source, origin) {
        for (var _i = 0; _i < unlistenList.length; _i++) {
          unlistenList[_i]();
        }
        resolve({ data: data, source: source, origin: origin });
      }, opt_is3P);
      unlistenList.push(unlisten);
    }
  });
}

/**
 * Posts a message to the iframe.
 * @param {!Element} iframe The iframe.
 * @param {string} type Type of the message.
 * @param {!JsonObject} object Message payload.
 * @param {string} targetOrigin origin of the target.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 */
function postMessage(iframe, type, object, targetOrigin, opt_is3P) {
  postMessageToWindows(iframe, [{ win: iframe.contentWindow, origin: targetOrigin }], type, object, opt_is3P);
}

/**
 * Posts an identical message to multiple target windows with the same
 * sentinel.
 * The message is serialized only once.
 * @param {!Element} iframe The iframe.
 * @param {!Array<{win: !Window, origin: string}>} targets to send the message
 *     to, pairs of window and its origin.
 * @param {string} type Type of the message.
 * @param {!JsonObject} object Message payload.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 */
function postMessageToWindows(iframe, targets, type, object, opt_is3P) {
  if (!iframe.contentWindow) {
    return;
  }
  object['type'] = type;
  object['sentinel'] = getSentinel_(iframe, opt_is3P);
  var payload = object;
  if (opt_is3P) {
    // Serialize ourselves because that is much faster in Chrome.
    payload = 'amp-' + JSON.stringify(object);
  }
  for (var i = 0; i < targets.length; i++) {
    var target = targets[i];
    target.win. /*OK*/postMessage(payload, target.origin);
  }
}

/**
 * Gets the sentinel string.
 * @param {!Element} iframe The iframe.
 * @param {boolean=} opt_is3P set to true if the iframe is 3p.
 * @return {string} Sentinel string.
 * @private
 */
function getSentinel_(iframe, opt_is3P) {
  return opt_is3P ? iframe.getAttribute('data-amp-3p-sentinel') : 'amp';
}

/**
 * JSON parses event.data if it needs to be
 * @param {*} data
 * @return {?JsonObject} object message
 * @private
 * @visibleForTesting
 */
function parseIfNeeded(data) {
  if (typeof data == 'string') {
    if (data.charAt(0) == '{') {
      data = (0, _json.tryParseJson)(data, function (e) {
        (0, _log.dev)().warn('IFRAME-HELPER', 'Postmessage could not be parsed. ' + 'Is it in a valid JSON format?', e);
      }) || null;
    } else if ((0, _pFrameMessaging.isAmpMessage)(data)) {
      data = (0, _pFrameMessaging.deserializeMessage)(data);
    } else {
      data = null;
    }
  }
  return (/** @type {?JsonObject} */data
  );
}

/**
 * Manages a postMessage API for an iframe with a subscription message and
 * a way to broadcast messages to all subscribed windows, which
 * in turn must all be descendants of the contentWindow of the iframe.
 */

var SubscriptionApi = exports.SubscriptionApi = function () {
  /**
   * @param {!Element} iframe The iframe.
   * @param {string} type Type of the subscription message.
   * @param {boolean} is3p set to true if the iframe is 3p.
   * @param {function(!JsonObject, !Window, string)} requestCallback Callback
   *     invoked whenever a new window subscribes.
   */
  function SubscriptionApi(iframe, type, is3p, requestCallback) {
    var _this = this;

    _classCallCheck(this, SubscriptionApi);

    /** @private @const {!Element} */
    this.iframe_ = iframe;
    /** @private @const {boolean} */
    this.is3p_ = is3p;
    /** @private @const {!Array<{win: !Window, origin: string}>} */
    this.clientWindows_ = [];

    /** @private @const {!UnlistenDef} */
    this.unlisten_ = listenFor(this.iframe_, type, function (data, source, origin) {
      // This message might be from any window within the iframe, we need
      // to keep track of which windows want to be sent updates.
      if (!_this.clientWindows_.some(function (entry) {
        return entry.win == source;
      })) {
        _this.clientWindows_.push({ win: source, origin: origin });
      }
      requestCallback(data, source, origin);
    }, this.is3p_,
    // For 3P frames we also allow nested frames within them to subscribe..
    this.is3p_ /* opt_includingNestedWindows */);
  }

  /**
   * Sends a message to all subscribed windows.
   * @param {string} type Type of the message.
   * @param {!JsonObject} data Message payload.
   */


  _createClass(SubscriptionApi, [{
    key: 'send',
    value: function send(type, data) {
      // Remove clients that have been removed from the DOM.
      (0, _array.filterSplice)(this.clientWindows_, function (client) {
        return !!client.win.parent;
      });
      postMessageToWindows(this.iframe_, this.clientWindows_, type, data, this.is3p_);
    }

    /**
     * Destroys iframe.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.unlisten_();
      this.clientWindows_.length = 0;
    }
  }]);

  return SubscriptionApi;
}();

/**
 * @param {!Element} element
 * @return {boolean}
 */


function looksLikeTrackingIframe(element) {
  var box = element.getLayoutBox();
  // This heuristic is subject to change.
  if (box.width > 10 || box.height > 10) {
    return false;
  }
  // Iframe is not tracking iframe if open with user interaction
  return !(0, _dom.closestBySelector)(element, '.i-amphtml-overlay');
}

// Most common ad sizes
// Array of [width, height] pairs.
var adSizes = [[300, 250], [320, 50], [300, 50], [320, 100]];

/**
 * Guess whether this element might be an ad.
 * @param {!Element} element An amp-iframe element.
 * @return {boolean}
 * @visibleForTesting
 */
function isAdLike(element) {
  var box = element.getLayoutBox();
  var height = box.height,
      width = box.width;

  for (var i = 0; i < adSizes.length; i++) {
    var refWidth = adSizes[i][0];
    var refHeight = adSizes[i][1];
    if (refHeight > height) {
      continue;
    }
    if (refWidth > width) {
      continue;
    }
    // Fuzzy matching to account for padding.
    if (height - refHeight <= 20 && width - refWidth <= 20) {
      return true;
    }
  }
  return false;
}

/**
 * @param {!Element} iframe
 * @private
 */
function disableScrollingOnIframe(iframe) {
  (0, _dom.addAttributesToElement)(iframe, (0, _object.dict)({ 'scrolling': 'no' }));

  // This shouldn't work, but it does on Firefox.
  // https://stackoverflow.com/a/15494969
  (0, _style.setStyle)(iframe, 'overflow', 'hidden');

  return iframe;
}

},{"./3p-frame-messaging":21,"./dom":27,"./event-helper":30,"./json":35,"./log":38,"./style":56,"./url":60,"./utils/array":61,"./utils/object":65}],34:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntersectionObserverPolyfill = exports.IntersectionObserverApi = exports.DEFAULT_THRESHOLD = exports.DOMRect = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

exports.getIntersectionChangeEntry = getIntersectionChangeEntry;
exports.nativeIntersectionObserverSupported = nativeIntersectionObserverSupported;
exports.getThresholdSlot = getThresholdSlot;

var _iframeHelper = require('./iframe-helper');

var _log = require('./log');

var _object = require('./utils/object');

var _types = require('./types');

var _layoutRect = require('./layout-rect');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The structure that defines the rectangle used in intersection observers.
 *
 * @typedef {{
 *   top: number,
 *   bottom: number,
 *   left: number,
 *   right: number,
 *   width: number,
 *   height: number,
 *   x: number,
 *   y: number,
 * }}
 */
var DOMRect = exports.DOMRect = void 0;

var DEFAULT_THRESHOLD = exports.DEFAULT_THRESHOLD = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1];

/** @typedef {{
 *    element: !Element,
 *    currentThresholdSlot: number,
 *  }}
 */
var ElementIntersectionStateDef = void 0;

/** @const @private */
var TAG = 'INTERSECTION-OBSERVER';

/** @const @private */
var INIT_TIME = Date.now();

/**
 * A function to get the element's current IntersectionObserverEntry
 * regardless of the intersetion ratio. Only available when element is not
 * nested in a container iframe.
 * TODO: support opt_iframe if there's valid use cases.
 * @param {!./layout-rect.LayoutRectDef} element element's rect
 * @param {?./layout-rect.LayoutRectDef} owner element's owner rect
 * @param {!./layout-rect.LayoutRectDef} hostViewport hostViewport's rect
 * @return {!IntersectionObserverEntry} A change entry.
 */
function getIntersectionChangeEntry(element, owner, hostViewport) {
  var intersection = (0, _layoutRect.rectIntersection)(element, owner, hostViewport) || (0, _layoutRect.layoutRectLtwh)(0, 0, 0, 0);
  var ratio = intersectionRatio(intersection, element);
  return calculateChangeEntry(element, hostViewport, intersection, ratio);
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function nativeIntersectionObserverSupported(win) {
  return 'IntersectionObserver' in win && 'IntersectionObserverEntry' in win && 'intersectionRatio' in win.IntersectionObserverEntry.prototype;
}

/**
 * A class to help amp-iframe and amp-ad nested iframe listen to intersection
 * change.
 */

var IntersectionObserverApi = exports.IntersectionObserverApi = function () {
  /**
   * @param {!AMP.BaseElement} baseElement
   * @param {!Element} iframe
   * @param {boolean=} opt_is3p
   */
  function IntersectionObserverApi(baseElement, iframe, opt_is3p) {
    var _this = this;

    _classCallCheck(this, IntersectionObserverApi);

    /** @private @const {!AMP.BaseElement} */
    this.baseElement_ = baseElement;

    /** @private {?IntersectionObserverPolyfill} */
    this.intersectionObserver_ = null;

    /** @private {boolean} */
    this.shouldObserve_ = false;

    /** @private {boolean} */
    this.isInViewport_ = false;

    /** @private {?function()} */
    this.unlistenOnDestroy_ = null;

    /** @private @const {!./service/viewport/viewport-impl.Viewport} */
    this.viewport_ = baseElement.getViewport();

    /** @private {?SubscriptionApi} */
    this.subscriptionApi_ = new _iframeHelper.SubscriptionApi(iframe, 'send-intersections', opt_is3p || false, function () {
      _this.startSendingIntersection_();
    });

    this.intersectionObserver_ = new IntersectionObserverPolyfill(function (entries) {
      // Remove target info from cross origin iframe.
      for (var i = 0; i < entries.length; i++) {
        delete entries[i]['target'];
      }
      _this.subscriptionApi_.send('intersection', (0, _object.dict)({ 'changes': entries }));
    }, { threshold: DEFAULT_THRESHOLD });
    this.intersectionObserver_.tick(this.viewport_.getRect());

    /** @const {function()} */
    this.fire = function () {
      if (!_this.shouldObserve_ || !_this.isInViewport_) {
        return;
      }
      _this.intersectionObserver_.tick(_this.viewport_.getRect());
    };
  }

  /**
   * Function to start listening to viewport event. and observer intersection
   * change on the element.
   */


  _createClass(IntersectionObserverApi, [{
    key: 'startSendingIntersection_',
    value: function startSendingIntersection_() {
      var _this2 = this;

      this.shouldObserve_ = true;
      this.intersectionObserver_.observe(this.baseElement_.element);
      this.baseElement_.getVsync().measure(function () {
        _this2.isInViewport_ = _this2.baseElement_.isInViewport();
        _this2.fire();
      });

      var unlistenViewportScroll = this.viewport_.onScroll(this.fire);
      var unlistenViewportChange = this.viewport_.onChanged(this.fire);
      this.unlistenOnDestroy_ = function () {
        unlistenViewportScroll();
        unlistenViewportChange();
      };
    }

    /**
     * Enable to the PositionObserver to listen to viewport events
     * @param {boolean} inViewport
     */

  }, {
    key: 'onViewportCallback',
    value: function onViewportCallback(inViewport) {
      this.isInViewport_ = inViewport;
    }

    /**
     * Clean all listenrs
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.shouldObserve_ = false;
      this.intersectionObserver_ = null;
      if (this.unlistenOnDestroy_) {
        this.unlistenOnDestroy_();
        this.unlistenOnDestroy_ = null;
      }
      this.subscriptionApi_.destroy();
      this.subscriptionApi_ = null;
    }
  }]);

  return IntersectionObserverApi;
}();

/**
 * The IntersectionObserverPolyfill class lets any element receive its
 * intersection data with the viewport. It acts like native browser supported
 * IntersectionObserver.
 * The IntersectionObserver receives a callback function and an optional option
 * as params. Whenever the element intersection ratio cross a threshold value,
 * IntersectionObserverPolyfill will call the provided callback function with
 * the change entry.
 * @visibleForTesting
 */


var IntersectionObserverPolyfill = exports.IntersectionObserverPolyfill = function () {
  /**
   * @param {function(!Array<!IntersectionObserverEntry>)} callback
   * @param {Object=} opt_option
   */
  function IntersectionObserverPolyfill(callback, opt_option) {
    _classCallCheck(this, IntersectionObserverPolyfill);

    /** @private @const {function(!Array<!IntersectionObserverEntry>)} */
    this.callback_ = callback;

    // The input threshold can be a number or an array of numbers.
    var threshold = opt_option && opt_option.threshold;
    if (threshold) {
      threshold = (0, _types.isArray)(threshold) ? threshold : [threshold];
    } else {
      threshold = [0];
    }

    for (var i = 0; i < threshold.length; i++) {
      (0, _log.dev)().assert((0, _types.isFiniteNumber)(threshold[i]), 'Threshold should be a ' + 'finite number or an array of finite numbers');
    }

    /**
     * A list of threshold, sorted in increasing numeric order
     * @private @const {!Array}
     */
    this.threshold_ = threshold.sort();
    (0, _log.dev)().assert(this.threshold_[0] >= 0 && this.threshold_[this.threshold_.length - 1] <= 1, 'Threshold should be in the range from "[0, 1]"');

    /** @private {?./layout-rect.LayoutRectDef} */
    this.lastViewportRect_ = null;

    /** @private {./layout-rect.LayoutRectDef|undefined} */
    this.lastIframeRect_ = undefined;

    /**
     * Store a list of observed elements and their current threshold slot which
     * their intersection ratio fills, range from [0, this.threshold_.length]
     * @private {Array<!ElementIntersectionStateDef>}
     */
    this.observeEntries_ = [];
  }

  /**
   */


  _createClass(IntersectionObserverPolyfill, [{
    key: 'disconnect',
    value: function disconnect() {
      this.observeEntries_.length = 0;
    }

    /**
     * Provide a way to observe the intersection change for a specific element
     * Please note IntersectionObserverPolyfill only support AMP element now
     * TODO: Support non AMP element
     * @param {!Element} element
     */

  }, {
    key: 'observe',
    value: function observe(element) {
      // Check the element is an AMP element.
      (0, _log.dev)().assert(element.getLayoutBox);

      // If the element already exists in current observeEntries, do nothing
      for (var i = 0; i < this.observeEntries_.length; i++) {
        if (this.observeEntries_[i].element === element) {
          (0, _log.dev)().warn(TAG, 'should observe same element once');
          return;
        }
      }

      var newState = {
        element: element,
        currentThresholdSlot: 0
      };

      // Get the new observed element's first changeEntry based on last viewport
      if (this.lastViewportRect_) {
        var change = this.getValidIntersectionChangeEntry_(newState, this.lastViewportRect_, this.lastIframeRect_);
        if (change) {
          this.callback_([change]);
        }
      }

      // push new observed element
      this.observeEntries_.push(newState);
    }

    /**
     * Provide a way to unobserve intersection change for a specified element
     * @param {!Element} element
     */

  }, {
    key: 'unobserve',
    value: function unobserve(element) {
      // find the unobserved element in observeEntries
      for (var i = 0; i < this.observeEntries_.length; i++) {
        if (this.observeEntries_[i].element === element) {
          this.observeEntries_.splice(i, 1);
          return;
        }
      }
      (0, _log.dev)().warn(TAG, 'unobserve non-observed element');
    }

    /**
     * Tick function that update the DOMRect of the root of observed elements.
     * Caller needs to make sure to pass in the correct container.
     * Note: the opt_iframe param is the iframe position relative to the host doc,
     * The iframe must be a non-scrollable iframe.
     * @param {!./layout-rect.LayoutRectDef} hostViewport
     * @param {./layout-rect.LayoutRectDef=} opt_iframe
     */

  }, {
    key: 'tick',
    value: function tick(hostViewport, opt_iframe) {

      if (opt_iframe) {
        // If element inside an iframe. Adjust origin to the iframe.left/top.
        hostViewport = (0, _layoutRect.moveLayoutRect)(hostViewport, -opt_iframe.left, -opt_iframe.top);
        opt_iframe = (0, _layoutRect.moveLayoutRect)(opt_iframe, -opt_iframe.left, -opt_iframe.top);
      }

      this.lastViewportRect_ = hostViewport;
      this.lastIframeRect_ = opt_iframe;

      var changes = [];

      for (var i = 0; i < this.observeEntries_.length; i++) {
        var change = this.getValidIntersectionChangeEntry_(this.observeEntries_[i], hostViewport, opt_iframe);
        if (change) {
          changes.push(change);
        }
      }

      if (changes.length) {
        this.callback_(changes);
      }
    }

    /**
     * Return a change entry for one element that should be compatible with
     * IntersectionObserverEntry if it's valid with current config.
     * When the new intersection ratio doesn't cross one of a threshold value,
     * the function will return null.
     *
     * @param {!ElementIntersectionStateDef} state
     * @param {!./layout-rect.LayoutRectDef} hostViewport hostViewport's rect
     * @param {./layout-rect.LayoutRectDef=} opt_iframe iframe container rect
     * @return {?IntersectionObserverEntry} A valid change entry or null if ratio
     * @private
     */

  }, {
    key: 'getValidIntersectionChangeEntry_',
    value: function getValidIntersectionChangeEntry_(state, hostViewport, opt_iframe) {
      var element = state.element;

      // Normalize container LayoutRect to be relative to page

      var ownerRect = null;

      // If opt_iframe is provided, all LayoutRect has position relative to
      // the iframe.
      // If opt_iframe is not provided, all LayoutRect has position relative to
      // the host document.
      var elementRect = element.getLayoutBox();
      var owner = element.getOwner();
      ownerRect = owner && owner.getLayoutBox();

      // calculate intersectionRect. that the element intersects with hostViewport
      // and intersects with owner element and container iframe if exists.
      var intersectionRect = (0, _layoutRect.rectIntersection)(elementRect, ownerRect, hostViewport, opt_iframe) || (0, _layoutRect.layoutRectLtwh)(0, 0, 0, 0);
      // calculate ratio, call callback based on new ratio value.
      var ratio = intersectionRatio(intersectionRect, elementRect);
      var newThresholdSlot = getThresholdSlot(this.threshold_, ratio);

      if (newThresholdSlot == state.currentThresholdSlot) {
        return null;
      }
      state.currentThresholdSlot = newThresholdSlot;

      // To get same behavior as native IntersectionObserver set hostViewport null
      // if inside an iframe
      var changeEntry = calculateChangeEntry(elementRect, opt_iframe ? null : hostViewport, intersectionRect, ratio);
      changeEntry.target = element;
      return changeEntry;
    }
  }]);

  return IntersectionObserverPolyfill;
}();

/**
 * Returns the ratio of the smaller box's area to the larger box's area.
 * @param {!./layout-rect.LayoutRectDef} smaller
 * @param {!./layout-rect.LayoutRectDef} larger
 * @return {number}
 */


function intersectionRatio(smaller, larger) {
  return smaller.width * smaller.height / (larger.width * larger.height);
}

/**
 * Returns the slot number that the current ratio fills in.
 * @param {!Array} sortedThreshold valid sorted IoB threshold
 * @param {number} ratio Range from [0, 1]
 * @return {number} Range from [0, threshold.length]
 * @visibleForTesting
 */
function getThresholdSlot(sortedThreshold, ratio) {
  var startIdx = 0;
  var endIdx = sortedThreshold.length;
  // 0 is a special case that does not fit into [small, large) range
  if (ratio == 0) {
    return 0;
  }
  var mid = (startIdx + endIdx) / 2 | 0;
  while (startIdx < mid) {
    var midValue = sortedThreshold[mid];
    // In the range of [small, large)
    if (ratio < midValue) {
      endIdx = mid;
    } else {
      startIdx = mid;
    }
    mid = (startIdx + endIdx) / 2 | 0;
  }
  return endIdx;
}

/**
 * Helper function to calculate the IntersectionObserver change entry.
 * @param {!./layout-rect.LayoutRectDef} element element's rect
 * @param {?./layout-rect.LayoutRectDef} hostViewport hostViewport's rect
 * @param {!./layout-rect.LayoutRectDef} intersection
 * @param {number} ratio
 * @return {!IntersectionObserverEntry}}
 */
function calculateChangeEntry(element, hostViewport, intersection, ratio) {
  // If element not in an iframe.
  // adjust all LayoutRect to hostViewport Origin.
  var boundingClientRect = element;
  var rootBounds = hostViewport;
  // If no hostViewport is provided, element is inside an non-scrollable iframe.
  // Every Layoutrect has already adjust their origin according to iframe
  // rect origin. LayoutRect position is relative to iframe origin,
  // thus relative to iframe's viewport origin because the viewport is at the
  // iframe origin. No need to adjust position here.

  if (hostViewport) {
    // If element not in an iframe.
    // adjust all LayoutRect to hostViewport Origin.
    rootBounds = /** @type {!./layout-rect.LayoutRectDef} */rootBounds;
    intersection = (0, _layoutRect.moveLayoutRect)(intersection, -hostViewport.left, -hostViewport.top);
    // The element is relative to (0, 0), while the viewport moves. So, we must
    // adjust.
    boundingClientRect = (0, _layoutRect.moveLayoutRect)(boundingClientRect, -hostViewport.left, -hostViewport.top);
    // Now, move the viewport to (0, 0)
    rootBounds = (0, _layoutRect.moveLayoutRect)(rootBounds, -hostViewport.left, -hostViewport.top);
  }

  return (/** @type {!IntersectionObserverEntry} */{
      time: typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now() - INIT_TIME,
      rootBounds: rootBounds,
      boundingClientRect: boundingClientRect,
      intersectionRect: intersection,
      intersectionRatio: ratio
    }
  );
}

},{"./iframe-helper":33,"./layout-rect":36,"./log":38,"./types":57,"./utils/object":65}],35:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
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
 * @fileoverview This module declares JSON types as defined in the
 * {@link http://json.org/}.
 */

exports.recreateNonProtoObject = recreateNonProtoObject;
exports.getValueForExpr = getValueForExpr;
exports.parseJson = parseJson;
exports.tryParseJson = tryParseJson;
exports.recursiveEquals = recursiveEquals;

var _types = require('./types');

// NOTE Type are changed to {*} because of
// https://github.com/google/closure-compiler/issues/1999

/**
 * JSON scalar. It's either string, number or boolean.
 * @typedef {*} should be string|number|boolean
 */
var JSONScalarDef = void 0;

/**
 * JSON object. It's a map with string keys and JSON values.
 * @typedef {*} should be !Object<string, ?JSONValueDef>
 */
var JSONObjectDef = void 0;

/**
 * JSON array. It's an array with JSON values.
 * @typedef {*} should be !Array<?JSONValueDef>
 */
var JSONArrayDef = void 0;

/**
 * JSON value. It's either a scalar, an object or an array.
 * @typedef {*} should be !JSONScalarDef|!JSONObjectDef|!JSONArrayDef
 */
var JSONValueDef = void 0;

/**
 * Recreates objects with prototype-less copies.
 * @param {!JsonObject} obj
 * @return {!JsonObject}
 */
function recreateNonProtoObject(obj) {
  var copy = Object.create(null);
  for (var k in obj) {
    if (!hasOwnProperty(obj, k)) {
      continue;
    }
    var v = obj[k];
    copy[k] = (0, _types.isObject)(v) ? recreateNonProtoObject(v) : v;
  }
  return (/** @type {!JsonObject} */copy
  );
}

/**
 * Returns a value from an object for a field-based expression. The expression
 * is a simple nested dot-notation of fields, such as `field1.field2`. If any
 * field in a chain does not exist or is not an object or array, the returned
 * value will be `undefined`.
 *
 * @param {!JsonObject} obj
 * @param {string} expr
 * @return {*}
 */
function getValueForExpr(obj, expr) {
  // The `.` indicates "the object itself".
  if (expr == '.') {
    return obj;
  }
  // Otherwise, navigate via properties.
  var parts = expr.split('.');
  var value = obj;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part && value && value[part] !== undefined && hasOwnProperty(value, part)) {
      value = value[part];
      continue;
    }
    value = undefined;
    break;
  }
  return value;
}

/**
 * Simple wrapper around JSON.parse that casts the return value
 * to JsonObject.
 * Create a new wrapper if an array return value is desired.
 * @param {*} json JSON string to parse
 * @return {?JsonObject} May be extend to parse arrays.
 */
function parseJson(json) {
  return (/** @type {?JsonObject} */JSON.parse( /** @type {string} */json)
  );
}

/**
 * Parses the given `json` string without throwing an exception if not valid.
 * Returns `undefined` if parsing fails.
 * Returns the `Object` corresponding to the JSON string when parsing succeeds.
 * @param {*} json JSON string to parse
 * @param {function(!Error)=} opt_onFailed Optional function that will be called
 *     with the error if parsing fails.
 * @return {?JsonObject|undefined} May be extend to parse arrays.
 */
function tryParseJson(json, opt_onFailed) {
  try {
    return parseJson(json);
  } catch (e) {
    if (opt_onFailed) {
      opt_onFailed(e);
    }
    return undefined;
  }
}

/**
 * Recursively checks strict equality of items in nested arrays and objects.
 *
 * @param {JSONValueDef} a
 * @param {JSONValueDef} b
 * @param {number} depth The maximum recursion depth. Must be finite.
 * @return {boolean}
 * @throws {Error} If depth argument is not finite.
 */
function recursiveEquals(a, b) {
  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  if (!isFinite(depth)) {
    throw new Error('depth arg must be finite: ' + depth);
  }
  if (a === b) {
    return true;
  }
  // Only check shallow equality for depth < 1.
  if (depth < 1) {
    return false;
  }
  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
    return false;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!recursiveEquals(a[i], b[i], depth - 1)) {
        return false;
      }
    }
    return true;
  }
  if (a && b && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && (typeof b === 'undefined' ? 'undefined' : _typeof(b)) === 'object') {
    var keysA = Object.keys( /** @type {!Object} */a);
    var keysB = Object.keys( /** @type {!Object} */b);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (var _i = 0; _i < keysA.length; _i++) {
      var keyA = keysA[_i];
      var valueA = a[keyA];
      var valueB = b[keyA];
      if (!recursiveEquals(valueA, valueB, depth - 1)) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * @param {*} obj
 * @param {string} key
 * @return {boolean}
 */
function hasOwnProperty(obj, key) {
  if (obj == null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) != 'object') {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(
  /** @type {!Object} */obj, key);
}

},{"./types":57}],36:[function(require,module,exports){
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

},{}],37:[function(require,module,exports){
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

},{"./log":38,"./static-template":54,"./string":55,"./style":56,"./types":57}],38:[function(require,module,exports){
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

},{"./mode":40,"./mode-object":39,"./types":57}],39:[function(require,module,exports){
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

},{"./mode":40}],40:[function(require,module,exports){
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

},{"./url-parse-query-string":58}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPixel = createPixel;

var _dom = require('../src/dom');

var _object = require('../src/utils/object');

var _log = require('../src/log');

/** @const {string} */
var TAG = 'pixel';

/**
 * @param {!Window} win
 * @param {string} src
 * @param {?string=} referrerPolicy
 * @return {!Element}
 */
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

function createPixel(win, src, referrerPolicy) {
  if (referrerPolicy && referrerPolicy !== 'no-referrer') {
    (0, _log.user)().error(TAG, 'Unsupported referrerPolicy: ' + referrerPolicy);
  }

  return referrerPolicy === 'no-referrer' ? createNoReferrerPixel(win, src) : createImagePixel(win, src);
}

/**
 * @param {!Window} win
 * @param {string} src
 * @return {!Element}
 */
function createNoReferrerPixel(win, src) {
  if (isReferrerPolicySupported()) {
    return createImagePixel(win, src, true);
  } else {
    // if "referrerPolicy" is not supported, use iframe wrapper
    // to scrub the referrer.
    var iframe = (0, _dom.createElementWithAttributes)(
    /** @type {!Document} */win.document, 'iframe', (0, _object.dict)({
      'src': 'about:blank',
      'style': 'display:none'
    }));
    win.document.body.appendChild(iframe);
    createImagePixel(iframe.contentWindow, src);
    return iframe;
  }
}

/**
 * @param {!Window} win
 * @param {string} src
 * @param {boolean=} noReferrer
 * @return {!Image}
 */
function createImagePixel(win, src) {
  var noReferrer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var image = new win.Image();
  if (noReferrer) {
    image.referrerPolicy = 'no-referrer';
  }
  image.src = src;
  return image;
}

/**
 * Check if element attribute "referrerPolicy" is supported by the browser.
 * Safari 11.1 does not support it yet.
 *
 * @return {boolean}
 */
function isReferrerPolicySupported() {
  return 'referrerPolicy' in Image.prototype;
}

},{"../src/dom":27,"../src/log":38,"../src/utils/object":65}],43:[function(require,module,exports){
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

},{"./experiments":31,"./mode":40,"./polyfills/array-includes":44,"./polyfills/custom-elements":45,"./polyfills/document-contains":46,"./polyfills/domtokenlist-toggle":47,"./polyfills/math-sign":48,"./polyfills/object-assign":49,"./polyfills/promise":50,"document-register-element/build/document-register-element.patched":19}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
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

},{}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
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

},{}],50:[function(require,module,exports){
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

},{"promise-pjs/promise":20}],51:[function(require,module,exports){
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

},{"./log":38,"./polyfills":43,"./types":57,"./utils/promise":66}],52:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JankMeter = undefined;

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

var _templateObject = _taggedTemplateLiteral(['\n      <div class="i-amphtml-jank-meter"></div>'], ['\n      <div class="i-amphtml-jank-meter"></div>']);

exports.isLongTaskApiSupported = isLongTaskApiSupported;

var _services = require('../services');

var _log = require('../log');

var _staticTemplate = require('../static-template');

var _experiments = require('../experiments');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const {number} */
var NTH_FRAME = 200;

var JankMeter = exports.JankMeter = function () {

  /**
   * @param {!Window} win
   */
  function JankMeter(win) {
    _classCallCheck(this, JankMeter);

    /** @private {!Window} */
    this.win_ = win;
    /** @private {number} */
    this.badFrameCnt_ = 0;
    /** @private {number} */
    this.totalFrameCnt_ = 0;
    /** @private {number} */
    this.longTaskChild_ = 0;
    /** @private {number} */
    this.longTaskSelf_ = 0;
    /** @private {?number} */
    this.scheduledTime_ = null;
    /** @private {?./performance-impl.Performance} */
    this.perf_ = _services.Services.performanceForOrNull(win);

    /** @private {?BatteryManager} */
    this.batteryManager_ = null;
    /** @private {?number} */
    this.batteryLevelStart_ = null;
    this.initializeBatteryManager_();

    /** @private {?PerformanceObserver} */
    this.longTaskObserver_ = null;
    this.initializeLongTaskObserver_();
  }

  /**
   * Callback for scheduled.
   */


  _createClass(JankMeter, [{
    key: 'onScheduled',
    value: function onScheduled() {
      if (!this.isEnabled_()) {
        return;
      }
      // only take the first schedule for the current frame.
      if (this.scheduledTime_ == null) {
        this.scheduledTime_ = this.win_.Date.now();
      }
    }

    /**
     * Callback for run.
     */

  }, {
    key: 'onRun',
    value: function onRun() {
      if (!this.isEnabled_() || this.scheduledTime_ == null) {
        return;
      }
      var paintLatency = this.win_.Date.now() - this.scheduledTime_;
      this.scheduledTime_ = null;
      this.totalFrameCnt_++;
      if (paintLatency > 16) {
        this.badFrameCnt_++;
        (0, _log.dev)().info('JANK', 'Paint latency: ' + paintLatency + 'ms');
      }

      // Report metrics on Nth frame, so we have sort of normalized numbers.
      if (this.perf_ && this.totalFrameCnt_ == NTH_FRAME) {
        // gfp: Good Frame Probability
        var gfp = this.calculateGfp_();
        this.perf_.tickDelta('gfp', gfp);
        // bf: Bad Frames
        this.perf_.tickDelta('bf', this.badFrameCnt_);
        if (this.longTaskObserver_) {
          // lts: Long Tasks of Self frame
          this.perf_.tickDelta('lts', this.longTaskSelf_);
          // ltc: Long Tasks of Child frames
          this.perf_.tickDelta('ltc', this.longTaskChild_);
          this.longTaskObserver_.disconnect();
          this.longTaskObserver_ = null;
        }
        var batteryDrop = 0;
        if (this.batteryManager_ && this.batteryLevelStart_ != null) {
          batteryDrop = this.win_.Math.max(0, this.win_.Math.floor(this.batteryManager_.level * 100 - this.batteryLevelStart_));
          // bd: Battery Drop
          this.perf_.tickDelta('bd', batteryDrop);
        }
        this.perf_.flush();
        if (isJankMeterEnabled(this.win_)) {
          this.displayMeterDisplay_(batteryDrop);
        }
      }
    }

    /**
     * Returns if is enabled
     *
     * @return {?boolean}
     */

  }, {
    key: 'isEnabled_',
    value: function isEnabled_() {
      return isJankMeterEnabled(this.win_) || this.perf_ && this.perf_.isPerformanceTrackingOn() && this.totalFrameCnt_ < NTH_FRAME;
    }

    /**
     * @param {number} batteryDrop
     * @private
     */

  }, {
    key: 'displayMeterDisplay_',
    value: function displayMeterDisplay_(batteryDrop) {
      var doc = this.win_.document;
      var display = (0, _staticTemplate.htmlFor)(doc)(_templateObject);
      display.textContent = 'bf:' + this.badFrameCnt_ + ', lts: ' + this.longTaskSelf_ + ', ' + ('ltc:' + this.longTaskChild_ + ', bd:' + batteryDrop);
      doc.body.appendChild(display);
    }

    /**
     * Calculate Good Frame Probability, which is a value range from 0 to 100.
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateGfp_',
    value: function calculateGfp_() {
      return this.win_.Math.floor((this.totalFrameCnt_ - this.badFrameCnt_) / this.totalFrameCnt_ * 100);
    }

    /**
     * Initializes long task observer.
     */

  }, {
    key: 'initializeLongTaskObserver_',
    value: function initializeLongTaskObserver_() {
      var _this = this;

      if (!this.isEnabled_() || !isLongTaskApiSupported(this.win_)) {
        return;
      }
      this.longTaskObserver_ = new this.win_.PerformanceObserver(function (entryList) {
        var entries = entryList.getEntries();
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].entryType == 'longtask') {
            // longtask is any task with duration of bigger than 50ms
            // we sum up the number of 50ms a task spans.
            var span = _this.win_.Math.floor(entries[i].duration / 50);
            if (entries[i].name == 'cross-origin-descendant') {
              _this.longTaskChild_ += span;
              (0, _log.user)().info('LONGTASK', 'from child frame ' + entries[i].duration + 'ms');
            } else {
              _this.longTaskSelf_ += span;
              (0, _log.dev)().info('LONGTASK', 'from self frame ' + entries[i].duration + 'ms');
            }
          }
        }
      });
      this.longTaskObserver_.observe({ entryTypes: ['longtask'] });
    }

    /**
     * Initializes battery manager.
     */

  }, {
    key: 'initializeBatteryManager_',
    value: function initializeBatteryManager_() {
      var _this2 = this;

      if (isBatteryApiSupported(this.win_)) {
        this.win_.navigator.getBattery().then(function (battery) {
          _this2.batteryManager_ = battery;
          _this2.batteryLevelStart_ = battery.level * 100;
        });
      }
    }
  }]);

  return JankMeter;
}();

/**
 * @param {!Window} win
 * @return {boolean}
 */


function isJankMeterEnabled(win) {
  return (0, _experiments.isExperimentOn)(win, 'jank-meter');
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function isLongTaskApiSupported(win) {
  return !!win.PerformanceObserver && !!win.TaskAttributionTiming && 'containerName' in win.TaskAttributionTiming.prototype;
}

/**
 * @param {!Window} unusedWin
 * @return {boolean}
 */
function isBatteryApiSupported(unusedWin) {
  // TODO: (@lannka, #9749)
  return false;
}

},{"../experiments":31,"../log":38,"../services":53,"../static-template":54}],53:[function(require,module,exports){
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

},{"./element-service":28,"./service":51}],54:[function(require,module,exports){
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

},{"./log":38,"./utils/object.js":65}],55:[function(require,module,exports){
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

},{}],56:[function(require,module,exports){
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

},{"./string":55,"./utils/object.js":65}],57:[function(require,module,exports){
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

},{}],58:[function(require,module,exports){
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

},{"./url-try-decode-uri-component":59}],59:[function(require,module,exports){
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

},{}],60:[function(require,module,exports){
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

},{"./config":24,"./log":38,"./mode":40,"./string":55,"./types":57,"./url-parse-query-string":58,"./url-try-decode-uri-component":59,"./utils/lru-cache":64,"./utils/object":65}],61:[function(require,module,exports){
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

},{}],62:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64UrlDecodeToBytes = base64UrlDecodeToBytes;
exports.base64DecodeToBytes = base64DecodeToBytes;
exports.base64UrlEncodeFromBytes = base64UrlEncodeFromBytes;
exports.base64UrlEncodeFromString = base64UrlEncodeFromString;
exports.base64EncodeFromBytes = base64EncodeFromBytes;

var _bytes = require('./bytes');

/**
 * Character mapping from base64url to base64.
 * @const {!Object<string, string>}
 */
var base64UrlDecodeSubs = { '-': '+', '_': '/', '.': '=' };

/**
 * Character mapping from base64 to base64url.
 * @const {!Object<string, string>}
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

var base64UrlEncodeSubs = { '+': '-', '/': '_', '=': '.' };

/**
 * Converts a string which is in base64url encoding into a Uint8Array
 * containing the decoded value.
 * @param {string} str
 * @return {!Uint8Array}
 */
function base64UrlDecodeToBytes(str) {
  var encoded = atob(str.replace(/[-_.]/g, function (ch) {
    return base64UrlDecodeSubs[ch];
  }));
  return (0, _bytes.stringToBytes)(encoded);
}

/**
 * Converts a string which is in base64 encoding into a Uint8Array
 * containing the decoded value.
 * @param {string} str
 * @return {!Uint8Array}
 */
function base64DecodeToBytes(str) {
  return (0, _bytes.stringToBytes)(atob(str));
}

/**
 * Converts a bytes array into base64url encoded string.
 * base64url is defined in RFC 4648. It is sometimes referred to as "web safe".
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function base64UrlEncodeFromBytes(bytes) {
  var str = (0, _bytes.bytesToString)(bytes);
  return btoa(str).replace(/[+/=]/g, function (ch) {
    return base64UrlEncodeSubs[ch];
  });
}

/**
 * Converts a string into base64url encoded string.
 * base64url is defined in RFC 4648. It is sometimes referred to as "web safe".
 * @param {string} str
 * @return {string}
 */
function base64UrlEncodeFromString(str) {
  var bytes = (0, _bytes.utf8Encode)(str);
  return base64UrlEncodeFromBytes(bytes);
}

/**
 * Converts a bytes array into base64 encoded string.
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function base64EncodeFromBytes(bytes) {
  return btoa((0, _bytes.bytesToString)(bytes));
}

},{"./bytes":63}],63:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utf8Decode = utf8Decode;
exports.utf8Encode = utf8Encode;
exports.stringToBytes = stringToBytes;
exports.bytesToString = bytesToString;
exports.bytesToUInt32 = bytesToUInt32;
exports.getCryptoRandomBytesArray = getCryptoRandomBytesArray;

var _log = require('../log');

/**
 * Interpret a byte array as a UTF-8 string.
 * @param {!BufferSource} bytes
 * @return {string}
 */
function utf8Decode(bytes) {
  if (typeof TextDecoder !== 'undefined') {
    return new TextDecoder('utf-8').decode(bytes);
  }
  var asciiString = bytesToString(new Uint8Array(bytes.buffer || bytes));
  return decodeURIComponent(escape(asciiString));
}

/**
 * Turn a string into UTF-8 bytes.
 * @param {string} string
 * @return {!Uint8Array}
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

function utf8Encode(string) {
  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder('utf-8').encode(string);
  }
  return stringToBytes(unescape(encodeURIComponent(string)));
}

/**
 * Converts a string which holds 8-bit code points, such as the result of atob,
 * into a Uint8Array with the corresponding bytes.
 * If you have a string of characters, you probably want to be using utf8Encode.
 * @param {string} str
 * @return {!Uint8Array}
 */
function stringToBytes(str) {
  var bytes = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    (0, _log.dev)().assert(charCode <= 255, 'Characters must be in range [0,255]');
    bytes[i] = charCode;
  }
  return bytes;
}

/**
 * Converts a 8-bit bytes array into a string
 * @param {!Uint8Array} bytes
 * @return {string}
 */
function bytesToString(bytes) {
  // Intentionally avoids String.fromCharCode.apply so we don't suffer a
  // stack overflow. #10495, https://jsperf.com/bytesToString-2
  var array = new Array(bytes.length);
  for (var i = 0; i < bytes.length; i++) {
    array[i] = String.fromCharCode(bytes[i]);
  }
  return array.join('');
}

/**
 * Converts a 4-item byte array to an unsigned integer.
 * Assumes bytes are big endian.
 * @param {!Uint8Array} bytes
 * @return {number}
 */
function bytesToUInt32(bytes) {
  if (bytes.length != 4) {
    throw new Error('Received byte array with length != 4');
  }
  var val = (bytes[0] & 0xFF) << 24 | (bytes[1] & 0xFF) << 16 | (bytes[2] & 0xFF) << 8 | bytes[3] & 0xFF;
  // Convert to unsigned.
  return val >>> 0;
}

/**
 * Generate a random bytes array with specific length using
 * win.crypto.getRandomValues. Return null if it is not available.
 * @param {!Window} win
 * @param {number} length
 * @return {?Uint8Array}
 */
function getCryptoRandomBytesArray(win, length) {
  if (!win.crypto || !win.crypto.getRandomValues) {
    return null;
  }

  // Widely available in browsers we support:
  // http://caniuse.com/#search=getRandomValues
  var uint8array = new Uint8Array(length);
  win.crypto.getRandomValues(uint8array);
  return uint8array;
}

},{"../log":38}],64:[function(require,module,exports){
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

},{"../log":38}],65:[function(require,module,exports){
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

},{"../types":57}],66:[function(require,module,exports){
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

},{}],67:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signals = undefined;

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

var _promise2 = require('./promise');

var _object = require('./object');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This object tracts signals and allows blocking until a signal has been
 * received.
 */
var Signals = exports.Signals = function () {

  /**
   * Creates an instance of Signals.
   */
  function Signals() {
    _classCallCheck(this, Signals);

    /**
     * A mapping from a signal name to the signal response: either time or
     * an error.
     * @private @const {!Object<string, (time|!Error)>}
     */
    this.map_ = (0, _object.map)();

    /**
     * A mapping from a signal name to the signal promise, resolve and reject.
     * Only allocated when promise has been requested.
     * @private {?Object<string, {
     *   promise: !Promise,
     *   resolve: (function(time)|undefined),
     *   reject: (function(!Error)|undefined)
     * }>}
     */
    this.promiseMap_ = null;
  }

  /**
   * Returns the current known value of the signal. If signal is not yet
   * available, `null` is returned.
   * @param {string} name
   * @return {number|!Error|null}
   */


  _createClass(Signals, [{
    key: 'get',
    value: function get(name) {
      return this.map_[name] || null;
    }

    /**
     * Returns the promise that's resolved when the signal is triggered. The
     * resolved value is the time of the signal.
     * @param {string} name
     * @return {!Promise<time>}
     */

  }, {
    key: 'whenSignal',
    value: function whenSignal(name) {
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (!promiseStruct) {
        var result = this.map_[name];
        if (result != null) {
          // Immediately resolve signal.
          var promise = typeof result == 'number' ? Promise.resolve(result) : Promise.reject(result);
          promiseStruct = { promise: promise };
        } else {
          // Allocate the promise/resolver for when the signal arrives in the
          // future.
          var deferred = new _promise2.Deferred();
          var _promise = deferred.promise,
              resolve = deferred.resolve,
              reject = deferred.reject;


          promiseStruct = { promise: _promise, resolve: resolve, reject: reject };
        }
        if (!this.promiseMap_) {
          this.promiseMap_ = (0, _object.map)();
        }
        this.promiseMap_[name] = promiseStruct;
      }
      return promiseStruct.promise;
    }

    /**
     * Triggers the signal with the specified name on the element. The time is
     * optional; if not provided, the current time is used. The associated
     * promise is resolved with the resulting time.
     * @param {string} name
     * @param {time=} opt_time
     */

  }, {
    key: 'signal',
    value: function signal(name, opt_time) {
      if (this.map_[name] != null) {
        // Do not duplicate signals.
        return;
      }
      var time = opt_time || Date.now();
      this.map_[name] = time;
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (promiseStruct && promiseStruct.resolve) {
        promiseStruct.resolve(time);
        promiseStruct.resolve = undefined;
        promiseStruct.reject = undefined;
      }
    }

    /**
     * Rejects the signal. Indicates that the signal will never succeed. The
     * associated signal is rejected.
     * @param {string} name
     * @param {!Error} error
     */

  }, {
    key: 'rejectSignal',
    value: function rejectSignal(name, error) {
      if (this.map_[name] != null) {
        // Do not duplicate signals.
        return;
      }
      this.map_[name] = error;
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (promiseStruct && promiseStruct.reject) {
        promiseStruct.reject(error);
        promiseStruct.resolve = undefined;
        promiseStruct.reject = undefined;
      }
    }

    /**
     * Resets all signals.
     * @param {string} name
     */

  }, {
    key: 'reset',
    value: function reset(name) {
      if (this.map_[name]) {
        delete this.map_[name];
      }
      // Reset promise it has already been resolved.
      var promiseStruct = this.promiseMap_ && this.promiseMap_[name];
      if (promiseStruct && !promiseStruct.resolve) {
        delete this.promiseMap_[name];
      }
    }
  }]);

  return Signals;
}();

},{"./object":65,"./promise":66}],68:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var MIN_VISIBILITY_RATIO_FOR_AUTOPLAY = exports.MIN_VISIBILITY_RATIO_FOR_AUTOPLAY = 0.5;

/**
 * VideoInterface defines a common video API which any AMP component that plays
 * videos is expected to implement.
 *
 * AMP runtime uses this common API to provide consistent video experience and
 * analytics across all video players.
 *
 * Components implementing this interface must also extend
 * {@link ./base-element.BaseElement} and register with the
 * Video Manager {@link ./service/video-manager-impl.VideoManager} during
 * their `builtCallback`.
 *
 * @interface
 */

var VideoInterface = exports.VideoInterface = function () {
  function VideoInterface() {
    _classCallCheck(this, VideoInterface);
  }

  _createClass(VideoInterface, [{
    key: 'supportsPlatform',


    /**
     * Whether the component supports video playback in the current platform.
     * If false, component will be not treated as a video component.
     * @return {boolean}
     */
    value: function supportsPlatform() {}

    /**
     * Whether users can interact with the video such as pausing it.
     * Example of non-interactive videos include design background videos where
     * all controls are hidden from the user.
     *
     * @return {boolean}
     */

  }, {
    key: 'isInteractive',
    value: function isInteractive() {}

    /**
     * Current playback time in seconds at time of trigger
     * @return {number}
     */

  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {}

    /**
     * Total duration of the video in seconds
     * @return {number}
     */

  }, {
    key: 'getDuration',
    value: function getDuration() {}

    /**
     * Get a 2d array of start and stop times that the user has watched.
     * @return {!Array<Array<number>>}
     */

  }, {
    key: 'getPlayedRanges',
    value: function getPlayedRanges() {}

    /**
     * Plays the video..
     *
     * @param {boolean} unusedIsAutoplay Whether the call to the `play` method is
     * triggered by the autoplay functionality. Video players can use this hint
     * to make decisions such as not playing pre-roll video ads.
     */

  }, {
    key: 'play',
    value: function play(unusedIsAutoplay) {}

    /**
     * Pauses the video.
     */

  }, {
    key: 'pause',
    value: function pause() {}

    /**
     * Mutes the video.
     */

  }, {
    key: 'mute',
    value: function mute() {}

    /**
     * Unmutes the video.
     */

  }, {
    key: 'unmute',
    value: function unmute() {}

    /**
     * Makes the video UI controls visible.
     *
     * AMP will not call this method if `controls` attribute is not set.
     */

  }, {
    key: 'showControls',
    value: function showControls() {}

    /**
     * Hides the video UI controls.
     *
     * AMP will not call this method if `controls` attribute is not set.
     */

  }, {
    key: 'hideControls',
    value: function hideControls() {}

    /**
     * Returns video's meta data (artwork, title, artist, album, etc.) for use
     * with the Media Session API
     * artwork (Array): URL to the poster image (preferably a 512x512 PNG)
     * title (string): Name of the video
     * artist (string): Name of the video's author/artist
     * album (string): Name of the video's album if it exists
     * @return {!./mediasession-helper.MetadataDef|undefined} metadata
     */

  }, {
    key: 'getMetadata',
    value: function getMetadata() {}

    /**
     * If this returns true then it will be assumed that the player implements
     * a feature to enter fullscreen on device rotation internally, so that the
     * video manager does not override it. If not, the video manager will
     * implement this feature automatically for videos with the attribute
     * `rotate-to-fullscreen`.
     *
     * @return {boolean}
     */

  }, {
    key: 'preimplementsAutoFullscreen',
    value: function preimplementsAutoFullscreen() {}

    /**
     * If this returns true then it will be assumed that the player implements
     * the MediaSession API internally so that the video manager does not override
     * it. If not, the video manager will use the metadata variable as well as
     * inferred meta-data to update the video's Media Session notification.
     *
     * @return {boolean}
     */

  }, {
    key: 'preimplementsMediaSessionAPI',
    value: function preimplementsMediaSessionAPI() {}

    /**
     * Enables fullscreen on the internal video element
     * NOTE: While implementing, keep in mind that Safari/iOS do not allow taking
     * any element other than <video> to fullscreen, if the player has an internal
     * implementation of fullscreen (flash for example) then check
     * if Services.platformFor(this.win).isSafari is true and use the internal
     * implementation instead. If not, it is recommended to take the iframe
     * to fullscreen using fullscreenEnter from dom.js
     */

  }, {
    key: 'fullscreenEnter',
    value: function fullscreenEnter() {}

    /**
     * Quits fullscreen mode
     */

  }, {
    key: 'fullscreenExit',
    value: function fullscreenExit() {}

    /**
     * Returns whether the video is currently in fullscreen mode or not
     * @return {boolean}
     */

  }, {
    key: 'isFullscreen',
    value: function isFullscreen() {}
  }]);

  return VideoInterface;
}();

/**
 * Attributes
 *
 * Components implementing the VideoInterface are expected to support
 * the following attributes.
 *
 * @constant {!Object<string, string>}
 */


var VideoAttributes = exports.VideoAttributes = {
  /**
   * autoplay
   *
   * Whether the developer has configured autoplay on the component.
   * This is normally done by setting `autoplay` attribute on the component.
   *
   * AMP runtime manages autoplay behaviour itself using methods such as `play`,
   * `pause`, `showControls`, `hideControls`, `mute`, etc.. therefore components
   * should not propagate the autoplay attribute to the underlying player
   * implementation.
   *
   * When a video is requested to autoplay, AMP will automatically
   * mute and hide the controls for the video, when video is 75% visible in
   * the viewport, AMP will play the video and later pauses it when 25%
   * or more of the video exits the viewport. If an auto-playing video also has
   * controls, AMP will install a tap
   * handler on the video, and when an end-user taps the video, AMP will show
   * the controls.
   *
   */
  AUTOPLAY: 'autoplay',
  /**
   * dock
   *
   * Setting the `dock` attribute on the component makes the video minimize
   * to the corner when scrolled out of view and has been interacted with.
   */
  DOCK: 'dock',
  /**
   * rotate-to-fullscreen
   *
   * If enabled, this automatically expands the currently visible video and
   * playing to fullscreen when the user changes the device's orientation to
   * landscape if the video was started following a user interaction
   * (not autoplay)
   *
   * Dependent upon browser support of
   * http://caniuse.com/#feat=screen-orientation
   * and http://caniuse.com/#feat=fullscreen
   */
  ROTATE_TO_FULLSCREEN: 'rotate-to-fullscreen',
  /**
   * noaudio
   *
   * If set and autoplay, the equalizer icon will not be displayed.
   */
  NO_AUDIO: 'noaudio'
};

/**
 * Events
 *
 * Components implementing the VideoInterface are expected to dispatch
 * the following DOM events.
 *
 * @constant {!Object<string, string>}
 */
var VideoEvents = exports.VideoEvents = {
  /**
   * registered
   *
   * Fired when the video player element is built and has been registered with
   * the video manager.
   *
   * @event registered
   */
  REGISTERED: 'registered',

  /**
   * load
   *
   * Fired when the video player is loaded and calls to methods such as `play()`
   * are allowed.
   *
   * @event load
   */
  LOAD: 'load',

  /**
   * playing
   *
   * Fired when the video begins playing.
   *
   * @event playing
   */
  PLAYING: 'playing',

  /**
   * pause
   *
   * Fired when the video pauses.
   *
   * @event pause
   */
  PAUSE: 'pause',

  /**
   * ended
   *
   * Fired when the video ends.
   *
   * This event should be fired in addition to `pause` when video ends.
   *
   * @event ended
   */
  ENDED: 'ended',

  /**
   * muted
   *
   * Fired when the video is muted.
   *
   * @event muted
   */
  MUTED: 'muted',

  /**
   * unmuted
   *
   * Fired when the video is unmuted.
   *
   * @event unmuted
   */
  UNMUTED: 'unmuted',

  /**
   * amp:video:visibility
   *
   * Fired when the video's visibility changes. Normally fired
   * from `viewportCallback`.
   *
   * @event amp:video:visibility
   * @property {boolean} visible Whether the video player is visible or not.
   */
  VISIBILITY: 'amp:video:visibility',

  /**
   * reload
   *
   * Fired when the video's src changes.
   *
   * @event reloaded
   */
  RELOAD: 'reloaded',

  /**
   * pre/mid/post Ad start
   *
   * Fired when an Ad starts playing.
   *
   * This is used to remove any overlay shims during Ad play during autoplay
   * or minimized-to-corner version of the player.
   *
   * @event ad_start
   */
  AD_START: 'ad_start',

  /**
   * pre/mid/post Ad ends
   *
   * Fired when an Ad ends playing.
   *
   * This is used to restore any overlay shims during Ad play during autoplay
   * or minimized-to-corner version of the player.
   *
   * @event ad_end
   */
  AD_END: 'ad_end'
};

/**
 * Playing States
 *
 * Internal playing states used to distinguish between video playing on user's
 * command and videos playing automatically
 *
 * @constant {!Object<string, string>}
 */
var PlayingStates = exports.PlayingStates = {
  /**
   * playing_manual
   *
   * When the video user manually interacted with the video and the video
   * is now playing
   *
   * @event playing_manual
   */
  PLAYING_MANUAL: 'playing_manual',

  /**
   * playing_auto
   *
   * When the video has autoplay and the user hasn't interacted with it yet
   *
   * @event playing_auto
   */
  PLAYING_AUTO: 'playing_auto',

  /**
   * paused
   *
   * When the video is paused.
   *
   * @event paused
   */
  PAUSED: 'paused'
};

/** @enum {string} */
var VideoAnalyticsEvents = exports.VideoAnalyticsEvents = {
  /**
   * video-ended
   *
   * Indicates that a video ended.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-ended
   */
  ENDED: 'video-ended',

  /**
   * video-pause
   *
   * Indicates that a video paused.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-pause
   */
  PAUSE: 'video-pause',

  /**
   * video-play
   *
   * Indicates that a video began to play.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-play
   */
  PLAY: 'video-play',

  /**
   * video-session
   *
   * Indicates that some segment of the video played.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-session
   */
  SESSION: 'video-session',

  /**
   * video-session-visible
   *
   * Indicates that some segment of the video played in the viewport.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-session-visible
   */
  SESSION_VISIBLE: 'video-session-visible',

  /**
   * video-seconds-played
   *
   * Indicates that a video was playing when the
   * video-seconds-played interval fired.
   * @property {!VideoAnalyticsDetailsDef} details
   * @event video-session-visible
   */
  SECONDS_PLAYED: 'video-seconds-played'
};

/**
 * @typedef {{
 *   autoplay: boolean,
 *   currentTime: number,
 *   duration: number,
 *   height: number,
 *   id: string,
 *   playedRangesJson: string,
 *   playedTotal: number,
 *   muted: boolean,
 *   state: string,
 *   width: number
 * }}
 */
var VideoAnalyticsDetailsDef = exports.VideoAnalyticsDetailsDef = void 0;

/**
 * Helper union type to be used internally, so that the compiler treats
 * `VideoInterface` objects as `BaseElement`s, which they should be anyway.
 *
 * WARNING: Don't use this at the service level. Its `register` method should
 * only allow `VideoInterface` as a guarding measure.
 *
 * @typedef {!VideoInterface|!./base-element.BaseElement}
 */
var VideoOrBaseElementDef = exports.VideoOrBaseElementDef = void 0;

},{}],69:[function(require,module,exports){
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


})});//# sourceMappingURL=amp-analytics-0.1.max.js.map
