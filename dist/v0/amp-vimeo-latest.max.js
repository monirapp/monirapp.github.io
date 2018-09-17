(self.AMP=self.AMP||[]).push({n:"amp-vimeo",v:"1537222846916",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cssText = exports.cssText = "i-amphtml-video-mask{z-index:1}.amp-video-eq{display:none}.i-amphtml-video-component:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-webkit-box;display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq .amp-video-eq-col{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq .amp-video-eq-col div{-webkit-animation-name:amp-video-eq-animation;animation-name:amp-video-eq-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;-webkit-animation-play-state:paused;animation-play-state:paused}.amp-video-eq[unpausable] .amp-video-eq-col div{-webkit-animation-name:none;animation-name:none}.amp-video-eq[unpausable].amp-video-eq-play .amp-video-eq-col div{-webkit-animation-name:amp-video-eq-animation;animation-name:amp-video-eq-animation}.amp-video-eq.amp-video-eq-play .amp-video-eq-col div{-webkit-animation-play-state:running;animation-play-state:running}.amp-video-eq-1-1{-webkit-animation-duration:0.3s;animation-duration:0.3s}.amp-video-eq-1-1,.amp-video-eq-1-2{-webkit-transform:translateY(60%);transform:translateY(60%)}.amp-video-eq-1-2{-webkit-animation-duration:0.45s;animation-duration:0.45s}.amp-video-eq-2-1{-webkit-animation-duration:0.5s;animation-duration:0.5s}.amp-video-eq-2-1,.amp-video-eq-2-2{-webkit-transform:translateY(30%);transform:translateY(30%)}.amp-video-eq-2-2{-webkit-animation-duration:0.4s;animation-duration:0.4s}.amp-video-eq-3-1{-webkit-animation-duration:0.3s;animation-duration:0.3s}.amp-video-eq-3-1,.amp-video-eq-3-2{-webkit-transform:translateY(70%);transform:translateY(70%)}.amp-video-eq-3-2{-webkit-animation-duration:0.35s;animation-duration:0.35s}.amp-video-eq-4-1{-webkit-animation-duration:0.4s;animation-duration:0.4s}.amp-video-eq-4-1,.amp-video-eq-4-2{-webkit-transform:translateY(50%);transform:translateY(50%)}.amp-video-eq-4-2{-webkit-animation-duration:0.25s;animation-duration:0.25s}@-webkit-keyframes amp-video-eq-animation{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes amp-video-eq-animation{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";

},{}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var cssText = exports.cssText = ".amp-video-docked-controls{opacity:0;pointer-events:none!important;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;height:120px}.amp-video-docked-main-button-group{height:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:-20px 0 0 -60px}.amp-video-docked-controls-shown{opacity:1;pointer-events:initial!important}.amp-video-docked-button-group{margin:0}.amp-video-docked-button-dismiss-group,.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button]{min-width:40px;height:40px;border-radius:40px}.amp-video-docked-button-dismiss-group:active,.amp-video-docked-button-group:active{background-color:hsla(0,0%,100%,0.7)}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group,.amp-video-docked-button-group>div[role=button],.amp-video-docked-controls,.i-amphtml-video-docked-overlay{-webkit-tap-highlight-color:rgba(0,0,0,0)!important}.amp-video-docked-button-dismiss-group>div[role=button],.amp-video-docked-button-group>div[role=button]{background-repeat:no-repeat;background-position:50%}.amp-video-docked-shadow{box-shadow:0px 0 20px 6px rgba(0,0,0,0.2)}.amp-video-docked-controls-bg{background:hsla(0,0%,90.2%,0.6)}.amp-video-docked-mute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-unmute{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-pause{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-play{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M8 5v14l11-7z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-fullscreen{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z'/%3E%3C/svg%3E\")}.amp-video-docked-dismiss{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\")}.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{margin:0!important}.amp-video-docked-controls,.amp-video-docked-shadow,.i-amphtml-video-docked,.i-amphtml-video-docked-overlay{position:fixed!important;top:0!important;left:0!important;right:auto!important;bottom:auto!important;padding:0!important;min-width:0!important;min-height:0!important;max-width:auto!important;max-height:auto!important;-webkit-transform-origin:left top!important;transform-origin:left top!important;will-change:width,height,transition,transform,opacity}.i-amphtml-video-docked-overlay{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;contain:strict!important}.amp-video-docked-controls-bg{opacity:1}.i-amphtml-video-docked-overlay.amp-video-docked-almost-dismissed{opacity:1;background:hsla(0,0%,39.2%,0.1)}.i-amphtml-video-docked-shadow.amp-video-docked-almost-dismissed,.i-amphtml-video-docked.amp-video-docked-almost-dismissed{opacity:0.3}.amp-video-docked-button-dismiss-group{position:absolute;top:-40px}.amp-video-docked-controls{z-index:2147483646!important}.i-amphtml-video-docked-overlay{z-index:2147483645!important}.i-amphtml-video-docked{z-index:2147483644!important}.amp-video-docked-shadow{z-index:2147483643!important}\n/*# sourceURL=/css/video-docking.css*/";

},{}],3:[function(require,module,exports){
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _services = require('../../../src/services');

var _videoInterface = require('../../../src/video-interface');

var _video = require('../../../src/utils/video');

var _url = require('../../../src/url');

var _iframeVideo = require('../../../src/iframe-video');

var _object = require('../../../src/utils/object');

var _eventHelper = require('../../../src/event-helper');

var _mode = require('../../../src/mode');

var _videoManagerImpl = require('../../../src/service/video-manager-impl');

var _layout = require('../../../src/layout');

var _function = require('../../../src/utils/function');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

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
 * Get the name of the method for a given getter or setter.
 * See https://developer.vimeo.com/player/js-api
 * @param {string} prop The name of the property.
 * @param {?string} optType Either “get” or “set”.
 * @return {string}
 */
function getMethodName(prop) {
  var optType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!optType) {
    return prop;
  }
  return optType.toLowerCase() + prop.substr(0, 1).toUpperCase() + prop.substr(1);
}

/**
 * Maps events coming from the Vimeo frame to events to be dispatched from the
 * component element.
 *
 * If the item does not have a value, the event will not be forwarded 1:1, but
 * it will be listened to.
 *
 * @private {!Object<string, ?string>}
 */
var VIMEO_EVENTS = {
  'play': _videoInterface.VideoEvents.PLAYING,
  'pause': _videoInterface.VideoEvents.PAUSE,
  'ended': _videoInterface.VideoEvents.ENDED,
  'volumechange': null
};

/** @implements {../../../src/video-interface.VideoInterface} */

var AmpVimeo = function (_AMP$BaseElement) {
  _inherits(AmpVimeo, _AMP$BaseElement);

  /** @param {!AmpElement} element */
  function AmpVimeo(element) {
    _classCallCheck(this, AmpVimeo);

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (AmpVimeo.__proto__ || Object.getPrototypeOf(AmpVimeo)).call(this, element));

    _this.iframe_ = null;

    /** @private {function():string} */
    _this.setVolumeMethod_ = (0, _function.once)(function () {
      return getMethodName('volume', 'set');
    });

    /** @private {function()} */
    _this.onReadyOnce_ = (0, _function.once)(function () {
      return _this.onReady_();
    });

    /** @private {boolean} */
    _this.muted_ = false;

    /**
     * @param {!Event} e
     * @private
     */
    _this.boundOnMessage_ = function (e) {
      return _this.onMessage_(e);
    };

    /** @private {!UnlistenDef|null} */
    _this.unlistenFrame_ = null;
    return _this;
  }

  /** @override */


  _createClass(AmpVimeo, [{
    key: 'preconnectCallback',
    value: function preconnectCallback() {
      var onLayout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var preconnect = this.preconnect;

      preconnect.url('https://player.vimeo.com', onLayout);
      // Host that Vimeo uses to serve poster frames needed by player.
      preconnect.url('https://i.vimeocdn.com', onLayout);
      // Host that Vimeo uses to serve JS, CSS and other assets needed.
      preconnect.url('https://f.vimeocdn.com', onLayout);
    }

    /** @override */

  }, {
    key: 'isLayoutSupported',
    value: function isLayoutSupported(layout) {
      return (0, _layout.isLayoutSizeDefined)(layout);
    }

    /** @override */

  }, {
    key: 'buildCallback',
    value: function buildCallback() {
      (0, _videoManagerImpl.installVideoManagerForDoc)(this.getAmpDoc());
    }

    /** @override */

  }, {
    key: 'layoutCallback',
    value: function layoutCallback() {
      var _this2 = this;

      return this.isAutoplay_().then(function (isAutoplay) {
        return _this2.buildIframe_(isAutoplay);
      });
    }

    /**
     * @param {boolean} isAutoplay
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'buildIframe_',
    value: function buildIframe_(isAutoplay) {
      var element = this.element;

      var vidId = (0, _log.user)().assert(element.getAttribute('data-videoid'), 'The data-videoid attribute is required for <amp-vimeo> %s', element);

      // See
      // https://developer.vimeo.com/player/embedding

      var src = 'https://player.vimeo.com/video/' + encodeURIComponent(vidId);

      if (isAutoplay) {
        // Only muted videos are allowed to autoplay
        this.muted_ = true;
        src = (0, _url.addParamToUrl)(src, 'muted', '1');
      }

      var iframe = (0, _iframeVideo.createFrameFor)(this, src);

      this.iframe_ = iframe;
      this.unlistenFrame_ = (0, _eventHelper.listen)(this.win, 'message', this.boundOnMessage_);

      this.sendCommand_('ping');

      return this.loadPromise(iframe);
    }

    /** @override */

  }, {
    key: 'unlayoutCallback',
    value: function unlayoutCallback() {
      this.removeIframe_();
      return true; // layout again.
    }

    /** @private */

  }, {
    key: 'removeIframe_',
    value: function removeIframe_() {
      if (this.iframe_) {
        (0, _dom.removeElement)(this.iframe_);
        this.iframe_ = null;
      }
      if (this.unlistenFrame_) {
        this.unlistenFrame_();
        this.unlistenFrame_ = null;
      }
    }

    /**
     * @return {!Promise<boolean>}
     * @private
     */

  }, {
    key: 'isAutoplay_',
    value: function isAutoplay_() {
      if (!this.element.hasAttribute(_videoInterface.VideoAttributes.AUTOPLAY)) {
        return Promise.resolve(false);
      }
      var win = this.win;

      return _video.VideoUtils.isAutoplaySupported(win, (0, _mode.getMode)(win).lite);
    }

    /** @private */

  }, {
    key: 'onReady_',
    value: function onReady_() {
      var _this3 = this;

      var element = this.element;


      Object.keys(VIMEO_EVENTS).forEach(function (event) {
        _this3.sendCommand_('addEventListener', event);
      });

      _services.Services.videoManagerForDoc(element).register(this);

      element.dispatchCustomEvent(_videoInterface.VideoEvents.LOAD);
    }

    /**
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'onMessage_',
    value: function onMessage_(event) {
      if (!(0, _iframeVideo.originMatches)(event, this.iframe_, /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/)) {
        return;
      }

      var eventData = (0, _eventHelper.getData)(event);
      if (!(0, _iframeVideo.isJsonOrObj)(eventData)) {
        return;
      }

      var data = (0, _iframeVideo.objOrParseJson)(eventData);

      if (data['event'] == 'ready' || data['method'] == 'ping') {
        this.onReadyOnce_();
        return;
      }

      var element = this.element;


      if ((0, _iframeVideo.redispatch)(element, data['event'], VIMEO_EVENTS)) {
        return;
      }

      if (data['event'] == 'volumechange') {
        var volume = data['data'] && data['data']['volume'];
        if (!volume) {
          return;
        }
        var muted = volume <= 0;
        if (muted == this.muted_) {
          return;
        }
        this.muted_ = muted;
        element.dispatchCustomEvent((0, _iframeVideo.mutedOrUnmutedEvent)(muted));
        return;
      }
    }

    /** @override */

  }, {
    key: 'pauseCallback',
    value: function pauseCallback() {
      this.pause();
    }

    /** @override */

  }, {
    key: 'pause',
    value: function pause() {
      this.sendCommand_('pause');
    }

    /** @override */

  }, {
    key: 'play',
    value: function play() {
      this.sendCommand_('play');
    }

    /** @override */

  }, {
    key: 'mute',
    value: function mute() {
      if (this.muted_) {
        // We need to check if already muted to prevent an initial mute() call
        // that would disable autoplay on iOS.
        return;
      }
      this.sendCommand_(this.setVolumeMethod_(), '0');
    }

    /** @override */

  }, {
    key: 'unmute',
    value: function unmute() {
      // TODO(alanorozco): Set based on volume before unmuting.
      this.sendCommand_(this.setVolumeMethod_(), '1');
    }

    /** @override */

  }, {
    key: 'isInteractive',
    value: function isInteractive() {
      return true;
    }

    /** @override */

  }, {
    key: 'supportsPlatform',
    value: function supportsPlatform() {
      return true;
    }

    /** @override */

  }, {
    key: 'preimplementsMediaSessionAPI',
    value: function preimplementsMediaSessionAPI() {
      // The Vimeo player embedded in the frame hooks into the API directly.
      return true;
    }

    /** @override */

  }, {
    key: 'preimplementsAutoFullscreen',
    value: function preimplementsAutoFullscreen() {
      return false;
    }

    /** @override */

  }, {
    key: 'fullscreenEnter',
    value: function fullscreenEnter() {}
    // NOOP. Not implemented by Vimeo.


    /** @override */

  }, {
    key: 'fullscreenExit',
    value: function fullscreenExit() {}
    // NOOP. Not implemented by Vimeo.


    /** @override */

  }, {
    key: 'isFullscreen',
    value: function isFullscreen() {
      return false;
    }

    /** @override */

  }, {
    key: 'showControls',
    value: function showControls() {}
    // NOOP. Not implemented by Vimeo.


    /** @override */

  }, {
    key: 'hideControls',
    value: function hideControls() {}
    // NOOP. Not implemented by Vimeo.


    /** @override */

  }, {
    key: 'getMetadata',
    value: function getMetadata() {}
    // TODO(alanorozco)


    /** @override */

  }, {
    key: 'getDuration',
    value: function getDuration() {
      // TODO(alanorozco)
      return 0;
    }

    /** @override */

  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      // TODO(alanorozco)
      return 0;
    }

    /** @override */

  }, {
    key: 'getPlayedRanges',
    value: function getPlayedRanges() {
      // TODO(alanorozco)
      return [];
    }

    /**
     * @param {string} method
     * @param {?Object|string=} optParams
     * @private
     */

  }, {
    key: 'sendCommand_',
    value: function sendCommand_(method) {
      var optParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // See
      // https://developer.vimeo.com/player/js-api
      if (!this.iframe_) {
        return;
      }
      var contentWindow = this.iframe_.contentWindow;

      if (!contentWindow) {
        return;
      }
      contentWindow. /*OK*/postMessage(JSON.stringify((0, _object.dict)({
        'method': method,
        'value': optParams || ''
      })), '*');
    }
  }]);

  return AmpVimeo;
}(AMP.BaseElement);

AMP.extension('amp-vimeo', '0.1', function (AMP) {
  AMP.registerElement('amp-vimeo', AmpVimeo);
});

},{"../../../src/dom":9,"../../../src/event-helper":12,"../../../src/iframe-video":14,"../../../src/layout":17,"../../../src/log":18,"../../../src/mode":21,"../../../src/service/video-manager-impl":35,"../../../src/services":42,"../../../src/url":50,"../../../src/utils/function":51,"../../../src/utils/object":54,"../../../src/utils/video":57,"../../../src/video-interface":58}],4:[function(require,module,exports){
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


},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{"./config":7,"./string":44,"./url":50}],9:[function(require,module,exports){
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

},{"../third_party/css-escape/css-escape":59,"./log":18,"./string":44,"./types":47,"./utils/object":54,"./utils/promise":55}],10:[function(require,module,exports){
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

},{"./dom":9,"./log":18,"./service":32,"./types":47}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"./event-helper-listen":11,"./log":18}],13:[function(require,module,exports){
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

},{"./cookies":8,"./url":50,"./utils/object":54}],14:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SandboxOptions = undefined;

var _templateObject = _taggedTemplateLiteral(['<iframe frameborder=0 allowfullscreen></iframe>'], ['<iframe frameborder=0 allowfullscreen></iframe>']);

exports.originMatches = originMatches;
exports.redispatch = redispatch;
exports.createFrameFor = createFrameFor;
exports.isJsonOrObj = isJsonOrObj;
exports.objOrParseJson = objOrParseJson;
exports.mutedOrUnmutedEvent = mutedOrUnmutedEvent;

var _services = require('./services');

var _videoInterface = require('./video-interface');

var _log = require('./log');

var _staticTemplate = require('./static-template');

var _types = require('./types');

var _string = require('./string');

var _json = require('./json');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
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


/** @enum {string} */
var SandboxOptions = exports.SandboxOptions = {
  ALLOW_SCRIPTS: 'allow-scripts',
  ALLOW_SAME_ORIGIN: 'allow-same-origin'
};

/**
 * @param {!Event} event
 * @param {?Element} iframe
 * @param {string|!RegExp} host
 * @return {boolean}
 */
function originMatches(event, iframe, host) {
  if (!iframe || event.source != iframe.contentWindow) {
    return false;
  }
  if (typeof host === 'string') {
    return host == event.origin;
  }
  return host.test(event.origin);
}

/**
 * Re-dispatches an event received from postMessage as an event in the host
 * document.
 *
 * @param {!AmpElement} element
 * @param {string} event
 * @param {!Object<string, (string|?Array<string>)>} events
 * @return {boolean}
 */
function redispatch(element, event, events) {
  if (events[event] == null) {
    return false;
  }
  var dispatchEvent = events[event];
  ((0, _types.isArray)(dispatchEvent) ? dispatchEvent : [dispatchEvent]).forEach(function (e) {
    element.dispatchCustomEvent((0, _log.dev)().assertString(e));
  });
  return true;
}

/**
 * @param {!./base-element.BaseElement} video
 * @param {string} src
 * @param {string=} opt_name
 * @param {!Array<!SandboxOptions>=} opt_sandbox
 * @return {!Element}
 */
function createFrameFor(video, src, opt_name, opt_sandbox) {
  var element = video.element;

  var frame = (0, _staticTemplate.htmlFor)(element)(_templateObject);

  if (opt_name) {
    frame.setAttribute('name', opt_name);
  }

  if (opt_sandbox) {
    frame.setAttribute('sandbox', opt_sandbox.join(' '));
  }

  frame.src = _services.Services.urlForDoc(element).assertHttpsUrl(src, element);

  video.applyFillContent(frame);
  element.appendChild(frame);

  return frame;
}

/**
 * @param {?} anything
 * @return {boolean}
 */
function isJsonOrObj(anything) {
  if (!anything) {
    return false;
  }
  return (0, _types.isObject)(anything) || (0, _string.startsWith)( /** @type {string} */anything, '{');
}

/**
 * @param {?JsonObject|string|undefined} objOrStr
 * @return {?JsonObject|undefined}
 */
function objOrParseJson(objOrStr) {
  if ((0, _types.isObject)(objOrStr)) {
    return (/** @type {!JsonObject} */objOrStr
    );
  }
  return (0, _json.tryParseJson)(objOrStr);
}

/**
 * @param {boolean} isMuted
 * @return {string}
 */
function mutedOrUnmutedEvent(isMuted) {
  return isMuted ? _videoInterface.VideoEvents.MUTED : _videoInterface.VideoEvents.UNMUTED;
}

},{"./json":15,"./log":18,"./services":42,"./static-template":43,"./string":44,"./types":47,"./video-interface":58}],15:[function(require,module,exports){
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

},{"./types":47}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"./log":18,"./static-template":43,"./string":44,"./style":46,"./types":47}],18:[function(require,module,exports){
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

},{"./mode":21,"./mode-object":20,"./types":47}],19:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMPTY_METADATA = exports.MetadataDef = undefined;
exports.setMediaSession = setMediaSession;
exports.parseSchemaImage = parseSchemaImage;
exports.parseOgImage = parseOgImage;
exports.parseFavicon = parseFavicon;

var _services = require('./services');

var _log = require('./log');

var _types = require('./types');

var _json = require('./json');

/**
 * @typedef {{
 *   artwork: Array,
 *   title: string,
 *   album: string,
 *   artist: string,
 * }}
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
var MetadataDef = exports.MetadataDef = void 0;

/** @const {MetadataDef} Dummy metadata used to fix a bug */
var EMPTY_METADATA = exports.EMPTY_METADATA = {
  'title': '',
  'artist': '',
  'album': '',
  'artwork': [{ 'src': '' }]
};

/**
 * Updates the Media Session API's metadata
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @param {!MetadataDef} metadata
 * @param {function()=} playHandler
 * @param {function()=} pauseHandler
 */
function setMediaSession(ampdoc, metadata, playHandler, pauseHandler) {
  var win = ampdoc.win;
  var navigator = win.navigator;

  if ('mediaSession' in navigator && win.MediaMetadata) {
    // Clear mediaSession (required to fix a bug when switching between two
    // videos)
    navigator.mediaSession.metadata = new win.MediaMetadata(EMPTY_METADATA);

    // Add metadata
    validateMetadata(ampdoc, metadata);
    navigator.mediaSession.metadata = new win.MediaMetadata(metadata);

    navigator.mediaSession.setActionHandler('play', playHandler);
    navigator.mediaSession.setActionHandler('pause', pauseHandler);

    // TODO(@wassgha) Implement seek & next/previous
  }
}

/**
 * Parses the schema.org json-ld formatted meta-data, looks for the page's
 * featured image and returns it
 * @param {!Document} doc
 * @return {string|undefined}
 */
function parseSchemaImage(doc) {
  var schema = doc.querySelector('script[type="application/ld+json"]');
  if (!schema) {
    // No schema element found
    return;
  }
  var schemaJson = (0, _json.tryParseJson)(schema.textContent);
  if (!schemaJson || !schemaJson['image']) {
    // No image found in the schema
    return;
  }

  // Image definition in schema could be one of :
  if (typeof schemaJson['image'] === 'string') {
    // 1. "image": "http://..",
    return schemaJson['image'];
  } else if (schemaJson['image']['@list'] && typeof schemaJson['image']['@list'][0] === 'string') {
    // 2. "image": {.., "@list": ["http://.."], ..}
    return schemaJson['image']['@list'][0];
  } else if (typeof schemaJson['image']['url'] === 'string') {
    // 3. "image": {.., "url": "http://..", ..}
    return schemaJson['image']['url'];
  } else if (typeof schemaJson['image'][0] === 'string') {
    // 4. "image": ["http://.. "]
    return schemaJson['image'][0];
  } else {
    return;
  }
}

/**
 * Parses the og:image if it exists and returns it
 * @param {!Document} doc
 * @return {string|undefined}
 */
function parseOgImage(doc) {
  var metaTag = doc.querySelector('meta[property="og:image"]');
  if (metaTag) {
    return metaTag.getAttribute('content');
  } else {
    return;
  }
}

/**
 * Parses the website's Favicon and returns it
 * @param {!Document} doc
 * @return {string|undefined}
 */
function parseFavicon(doc) {
  var linkTag = doc.querySelector('link[rel="shortcut icon"]') || doc.querySelector('link[rel="icon"]');
  if (linkTag) {
    return linkTag.getAttribute('href');
  } else {
    return;
  }
}

/**
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc
 * @param {!MetadataDef} metadata
 * @private
 */
function validateMetadata(ampdoc, metadata) {
  var urlService = _services.Services.urlForDoc(ampdoc);
  // Ensure src of artwork has valid protocol
  if (metadata && metadata.artwork) {
    var artwork = metadata.artwork;

    (0, _log.dev)().assert((0, _types.isArray)(artwork));
    artwork.forEach(function (item) {
      if (item) {
        var src = (0, _types.isObject)(item) ? item.src : item;
        (0, _log.user)().assert(urlService.isProtocolValid(src));
      }
    });
  }
}

},{"./json":15,"./log":18,"./services":42,"./types":47}],20:[function(require,module,exports){
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

},{"./url-parse-query-string":48}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"./experiments":13,"./mode":21,"./polyfills/array-includes":24,"./polyfills/custom-elements":25,"./polyfills/document-contains":26,"./polyfills/domtokenlist-toggle":27,"./polyfills/math-sign":28,"./polyfills/object-assign":29,"./polyfills/promise":30,"document-register-element/build/document-register-element.patched":4}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{"promise-pjs/promise":5}],31:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitForServices = waitForServices;
exports.hasRenderDelayingServices = hasRenderDelayingServices;
exports.includedServices = includedServices;

var _services = require('./services');

var _log = require('./log');

var _service = require('./service');

/**
 * A map of services that delay rendering. The key is the name of the service
 * and the value is a DOM query which is used to check if the service is needed
 * in the current document.
 * Do not add a service unless absolutely necessary.
 *
 * \   \  /  \  /   / /   \     |   _  \     |  \ |  | |  | |  \ |  |  / _____|
 *  \   \/    \/   / /  ^  \    |  |_)  |    |   \|  | |  | |   \|  | |  |  __
 *   \            / /  /_\  \   |      /     |  . `  | |  | |  . `  | |  | |_ |
 *    \    /\    / /  _____  \  |  |\  \----.|  |\   | |  | |  |\   | |  |__| |
 *     \__/  \__/ /__/     \__\ | _| `._____||__| \__| |__| |__| \__|  \______|
 *
 * The equivalent of this list is used for server-side rendering (SSR) and any
 * changes made to it must be made in coordination with caches that implement
 * SSR. For more information on SSR see bit.ly/amp-ssr.
 *
 * @const {!Object<string, string>}
 */
var SERVICES = {
  'amp-dynamic-css-classes': '[custom-element=amp-dynamic-css-classes]',
  'variant': 'amp-experiment',
  'amp-story': 'amp-story[standalone]'
};

/**
 * Maximum milliseconds to wait for all extensions to load before erroring.
 * @const
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

var LOAD_TIMEOUT = 3000;

/**
 * Detects any render delaying services that are required on the page, and
 * returns a promise with a timeout.
 * @param {!Window} win
 * @return {!Promise<!Array<*>>} resolves to an Array that has the same length
 *     as the detected render delaying services
 */
function waitForServices(win) {
  var promises = includedServices(win).map(function (service) {
    return _services.Services.timerFor(win).timeoutPromise(LOAD_TIMEOUT, (0, _service.getServicePromise)(win, service), 'Render timeout waiting for service ' + service + ' to be ready.');
  });
  return Promise.all(promises);
}

/**
 * Returns true if the page has a render delaying service.
 * @param {!Window} win
 * @return {boolean}
 */
function hasRenderDelayingServices(win) {
  return includedServices(win).length > 0;
}

/**
 * Detects which, if any, render-delaying extensions are included on the page.
 * @param {!Window} win
 * @return {!Array<string>}
 */
function includedServices(win) {
  /** @const {!Document} */
  var doc = win.document;
  (0, _log.dev)().assert(doc.body);

  return Object.keys(SERVICES).filter(function (service) {
    return doc.querySelector(SERVICES[service]);
  });
}

},{"./log":18,"./service":32,"./services":42}],32:[function(require,module,exports){
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

},{"./log":18,"./polyfills":23,"./types":47,"./utils/promise":55}],33:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PositionObserver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use baseInstance file except in compliance with the License.
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

exports.installPositionObserverServiceForDoc = installPositionObserverServiceForDoc;

var _positionObserverWorker = require('./position-observer-worker');

var _services = require('../../services');

var _rateLimit = require('../../utils/rate-limit');

var _log = require('../../log');

var _service = require('../../service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @const @private */
var TAG = 'POSITION_OBSERVER';

/** @const @private */
var SCROLL_TIMEOUT = 500;

var PositionObserver = exports.PositionObserver = function () {
  /**
   * @param {!../ampdoc-impl.AmpDoc} ampdoc
   */
  function PositionObserver(ampdoc) {
    var _this = this;

    _classCallCheck(this, PositionObserver);

    /** @private {!../ampdoc-impl.AmpDoc} */
    this.ampdoc_ = ampdoc;

    /** @private {!Window} */
    this.win_ = ampdoc.win;

    /** @private {!Array<!PositionObserverWorker>} */
    this.workers_ = [];

    /** @private {!../vsync-impl.Vsync} */
    this.vsync_ = _services.Services.vsyncFor(this.win_);

    /** @private {!../viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(ampdoc);

    /** @private {Array<function()>} */
    this.unlisteners_ = [];

    /** @private {boolean} */
    this.inScroll_ = false;

    /** @private {boolean} */
    this.measure_ = false;

    /** @private {boolean} */
    this.callbackStarted_ = false;

    /** @private {function()} */
    this.boundStopScroll_ = (0, _rateLimit.debounce)(this.win_, function () {
      _this.inScroll_ = false;
    }, SCROLL_TIMEOUT);
  }

  /**
   * @param {!Element} element
   * @param {!PositionObserverFidelity} fidelity
   * @param {function(?./position-observer-worker.PositionInViewportEntryDef)} handler
   * @return {!UnlistenDef}
   */


  _createClass(PositionObserver, [{
    key: 'observe',
    value: function observe(element, fidelity, handler) {
      var _this2 = this;

      var worker = new _positionObserverWorker.PositionObserverWorker(this.ampdoc_, element, fidelity, handler);

      this.workers_.push(worker);

      if (!this.callbackStarted_) {
        this.startCallback_();
      }

      worker.update();

      return function () {
        for (var i = 0; i < _this2.workers_.length; i++) {
          if (_this2.workers_[i] == worker) {
            _this2.removeWorker_(i);
            return;
          }
        }
      };
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'unobserve',
    value: function unobserve(element) {
      for (var i = 0; i < this.workers_.length; i++) {
        if (this.workers_[i].element == element) {
          this.removeWorker_(i);
          return;
        }
      }
      (0, _log.dev)().error(TAG, 'cannot unobserve unobserved element');
    }

    /**
     * @param {number} index
     * @private
     */

  }, {
    key: 'removeWorker_',
    value: function removeWorker_(index) {
      this.workers_.splice(index, 1);
      if (this.workers_.length == 0) {
        this.stopCallback_();
      }
    }

    /**
     * Callback function that gets called when start to observe the first element.
     * @private
     */

  }, {
    key: 'startCallback_',
    value: function startCallback_() {
      var _this3 = this;

      this.callbackStarted_ = true;
      // listen to viewport scroll event to help pass determine if need to
      this.unlisteners_.push(this.viewport_.onScroll(function () {
        _this3.onScrollHandler_();
      }));
      this.unlisteners_.push(this.viewport_.onResize(function () {
        _this3.onResizeHandler_();
      }));
    }

    /**
     * Callback function that gets called when unobserve last observed element.
     * @private
     */

  }, {
    key: 'stopCallback_',
    value: function stopCallback_() {
      this.callbackStarted_ = false;
      while (this.unlisteners_.length) {
        var unlisten = this.unlisteners_.pop();
        unlisten();
      }
    }

    /**
     * This should always be called in vsync.
     * @param {boolean=} opt_force
     * @visibleForTesting
    */

  }, {
    key: 'updateAllEntries',
    value: function updateAllEntries(opt_force) {
      for (var i = 0; i < this.workers_.length; i++) {
        var worker = this.workers_[i];
        worker.update(opt_force);
      }
    }

    /**
     * Handle viewport scroll event
     * @private
     */

  }, {
    key: 'onScrollHandler_',
    value: function onScrollHandler_() {
      this.boundStopScroll_();
      this.inScroll_ = true;
      if (!this.measure_) {
        this.schedulePass_();
      }
    }

    /**
     * Handle viewport resize event
     * @private
     */

  }, {
    key: 'onResizeHandler_',
    value: function onResizeHandler_() {
      this.updateAllEntries(true);
    }

    /**
     * Update all entries during scroll
     * @private
     */

  }, {
    key: 'schedulePass_',
    value: function schedulePass_() {
      var _this4 = this;

      // TODO (@zhouyx, #9208):
      // P1: account for effective fidelity using this.effectiveFidelity
      // P2: do passes on onDomMutation (if available using MutationObserver
      // mostly for in-a-box host, since most DOM mutations are constraint to the
      // AMP elements).
      this.updateAllEntries();
      this.measure_ = true;
      if (!this.inScroll_) {
        // Stop measure if viewport is no longer scrolling
        this.measure_ = false;
        return;
      }
      this.vsync_.measure(function () {
        _this4.schedulePass_();
      });
    }
  }]);

  return PositionObserver;
}();

/**
 * @param {!../ampdoc-impl.AmpDoc} ampdoc
 */


function installPositionObserverServiceForDoc(ampdoc) {
  (0, _service.registerServiceBuilderForDoc)(ampdoc, 'position-observer', function () {
    return new PositionObserver(ampdoc);
  });
}

},{"../../log":18,"../../service":32,"../../services":42,"../../utils/rate-limit":56,"./position-observer-worker":34}],34:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PositionObserverWorker = exports.PositionInViewportEntryDef = exports.PositionObserverFidelity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use baseInstance file except in compliance with the License.
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

var _services = require('../../services');

var _log = require('../../log');

var _layoutRect = require('../../layout-rect');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @enum {number} */
var PositionObserverFidelity = exports.PositionObserverFidelity = {
  HIGH: 1,
  LOW: 0
};

/** @const @private */
var LOW_FIDELITY_FRAME_COUNT = 4;

/**
 * TODO (@zhouyx): rename relativePos to relativePositions
 * The positionObserver returned position value which includes the position rect
 * relative to viewport. And viewport rect which always has top 0, left 0, and
 * viewport width and height.
 * @typedef {{
 *  positionRect: ?../../layout-rect.LayoutRectDef,
 *  viewportRect: !../../layout-rect.LayoutRectDef,
 *  relativePos: string,
 * }}
 */
var PositionInViewportEntryDef = exports.PositionInViewportEntryDef = void 0;

var PositionObserverWorker = exports.PositionObserverWorker = function () {
  /**
   * @param {!../ampdoc-impl.AmpDoc} ampdoc
   * @param {!Element} element
   * @param {!PositionObserverFidelity} fidelity
   * @param {function(?PositionInViewportEntryDef)} handler
   */
  function PositionObserverWorker(ampdoc, element, fidelity, handler) {
    _classCallCheck(this, PositionObserverWorker);

    /** @const {!Element} */
    this.element = element;

    /** @const {function(?PositionInViewportEntryDef)} */
    this.handler_ = handler;

    /** @type {!PositionObserverFidelity} */
    this.fidelity = fidelity;

    /** @type {number} */
    this.turn = fidelity == PositionObserverFidelity.LOW ? Math.floor(Math.random() * LOW_FIDELITY_FRAME_COUNT) : 0;

    /** @type {?PositionInViewportEntryDef} */
    this.prevPosition_ = null;

    /** @private {!../viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(ampdoc);
  }

  /**
   * Call to trigger an entry handler
   * @param {!PositionInViewportEntryDef} position
   * @private
   */


  _createClass(PositionObserverWorker, [{
    key: 'trigger_',
    value: function trigger_(position) {
      var prevPos = this.prevPosition_;
      if (prevPos && (0, _layoutRect.layoutRectEquals)(prevPos.positionRect, position.positionRect) && (0, _layoutRect.layoutRectEquals)(prevPos.viewportRect, position.viewportRect)) {
        // position didn't change, do nothing.
        return;
      }

      (0, _log.dev)().assert(position.positionRect, 'PositionObserver should always trigger entry with clientRect');
      var positionRect =
      /** @type {!../../layout-rect.LayoutRectDef} */position.positionRect;
      // Add the relative position of the element to its viewport
      position.relativePos = (0, _layoutRect.layoutRectsRelativePos)(positionRect, position.viewportRect);

      if ((0, _layoutRect.layoutRectsOverlap)(positionRect, position.viewportRect)) {
        // Update position
        this.prevPosition_ = position;
        // Only call handler if entry element overlap with viewport.
        this.handler_(position);
      } else if (this.prevPosition_) {
        // Need to notify that element gets outside viewport
        // NOTE: This is required for inabox position observer.
        this.prevPosition_ = null;
        position.positionRect = null;
        this.handler_(position);
      }
    }

    /**
     * To update the position of entry element when it is ready.
     * Called when updateAllEntries, or when first observe an element.
     * @param {boolean=} opt_force
     */

  }, {
    key: 'update',
    value: function update(opt_force) {
      var _this = this;

      if (!opt_force) {
        if (this.turn != 0) {
          this.turn--;
          return;
        }

        if (this.fidelity == PositionObserverFidelity.LOW) {
          this.turn = LOW_FIDELITY_FRAME_COUNT;
        }
      }

      var viewportSize = this.viewport_.getSize();
      var viewportBox = (0, _layoutRect.layoutRectLtwh)(0, 0, viewportSize.width, viewportSize.height);
      this.viewport_.getClientRectAsync(this.element).then(function (elementBox) {
        _this.trigger_(
        /** @type {./position-observer-worker.PositionInViewportEntryDef}*/{
          positionRect: elementBox,
          viewportRect: viewportBox,
          relativePos: ''
        });
      });
    }
  }]);

  return PositionObserverWorker;
}();

},{"../../layout-rect":16,"../../log":18,"../../services":42}],35:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoFullscreenManager = exports.VideoManager = undefined;

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

exports.installVideoManagerForDoc = installVideoManagerForDoc;

var _actionConstants = require('../action-constants');

var _mediasessionHelper = require('../mediasession-helper');

var _videoInterface = require('../video-interface');

var _services = require('../services');

var _docking = require('./video/docking');

var _videoServiceInterface = require('./video-service-interface');

var _videoServiceSyncImpl = require('./video-service-sync-impl');

var _videoSessionManager = require('./video-session-manager');

var _video2 = require('../utils/video');

var _eventHelper = require('../event-helper');

var _log = require('../log');

var _object = require('../utils/object');

var _mode = require('../mode');

var _installAutoplayStyles = require('./video/install-autoplay-styles');

var _types = require('../types');

var _function = require('../utils/function');

var _service = require('../service');

var _dom = require('../dom');

var _autoplay = require('./video/autoplay');

var _style = require('../style');

var _string = require('../string');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @private @const {string} */
var TAG = 'video-manager';

/**
 * @private {number} The minimum number of milliseconds to wait between each
 * video-seconds-played analytics event.
 */
var SECONDS_PLAYED_MIN_DELAY = 1000;

/**
 * @param {!../video-interface.VideoOrBaseElementDef} video
 * @private
 */
function userInteractedWith(video) {
  video.signals().signal(_videoServiceInterface.VideoServiceSignals.USER_INTERACTED);
}

/**
 * VideoManager keeps track of all AMP video players that implement
 * the common Video API {@see ../video-interface.VideoInterface}.
 *
 * It is responsible for providing a unified user experience and analytics for
 * all videos within a document.
 *
 * @implements {VideoServiceInterface}
 */

var VideoManager = exports.VideoManager = function () {

  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   */
  function VideoManager(ampdoc) {
    var _this = this;

    _classCallCheck(this, VideoManager);

    /** @const {!./ampdoc-impl.AmpDoc}  */
    this.ampdoc = ampdoc;

    /** @const */
    this.installAutoplayStyles = (0, _function.once)(function () {
      return (0, _installAutoplayStyles.installAutoplayStylesForDoc)(_this.ampdoc);
    });

    /** @private {!../service/viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(this.ampdoc);

    /** @private {?Array<!VideoEntry>} */
    this.entries_ = null;

    /** @private {boolean} */
    this.scrollListenerInstalled_ = false;

    /** @private @const */
    this.timer_ = _services.Services.timerFor(ampdoc.win);

    /** @private @const */
    this.actions_ = _services.Services.actionServiceForDoc(ampdoc);

    /** @private @const */
    this.boundSecondsPlaying_ = function () {
      return _this.secondsPlaying_();
    };

    /** @private @const {function():!AutoFullscreenManager} */
    this.getAutoFullscreenManager_ = (0, _function.once)(function () {
      return new AutoFullscreenManager(_this.ampdoc, _this);
    });

    /** @private @const {function():!VideoDocking} */
    this.getDocking_ = (0, _function.once)(function () {
      return new _docking.VideoDocking(_this.ampdoc, _this);
    });

    // TODO(cvializ, #10599): It would be nice to only create the timer
    // if video analytics are present, since the timer is not needed if
    // video analytics are not present.
    this.timer_.delay(this.boundSecondsPlaying_, SECONDS_PLAYED_MIN_DELAY);
  }

  /**
   * Each second, trigger video-seconds-played for videos that are playing
   * at trigger time.
   * @private
   */


  _createClass(VideoManager, [{
    key: 'secondsPlaying_',
    value: function secondsPlaying_() {
      for (var i = 0; i < this.entries_.length; i++) {
        var entry = this.entries_[i];
        if (entry.getPlayingState() !== _videoInterface.PlayingStates.PAUSED) {
          analyticsEvent(entry, _videoInterface.VideoAnalyticsEvents.SECONDS_PLAYED);
          this.timeUpdateActionEvent_(entry);
        }
      }
      this.timer_.delay(this.boundSecondsPlaying_, SECONDS_PLAYED_MIN_DELAY);
    }

    /**
     * Triggers a LOW-TRUST timeupdate event consumable by AMP actions.
     * Frequency of this event is controlled by SECONDS_PLAYED_MIN_DELAY and is
     * every 1 second for now.
     * @param {!VideoEntry} entry
     * @private
     */

  }, {
    key: 'timeUpdateActionEvent_',
    value: function timeUpdateActionEvent_(entry) {
      var name = 'timeUpdate';
      var currentTime = entry.video.getCurrentTime();
      var duration = entry.video.getDuration();
      if ((0, _types.isFiniteNumber)(currentTime) && (0, _types.isFiniteNumber)(duration) && duration > 0) {
        var perc = currentTime / duration;
        var event = (0, _eventHelper.createCustomEvent)(this.ampdoc.win, TAG + '.' + name, (0, _object.dict)({ 'time': currentTime, 'percent': perc }));
        this.actions_.trigger(entry.video.element, name, event, _actionConstants.ActionTrust.LOW);
      }
    }

    /** @override */

  }, {
    key: 'register',
    value: function register(video) {
      (0, _log.dev)().assert(video);

      this.registerCommonActions_(video);

      if (!video.supportsPlatform()) {
        return;
      }

      this.entries_ = this.entries_ || [];
      var entry = new VideoEntry(this, video);
      this.maybeInstallVisibilityObserver_(entry);
      this.entries_.push(entry);

      var element = entry.video.element;

      element.dispatchCustomEvent(_videoInterface.VideoEvents.REGISTERED);

      (0, _videoServiceSyncImpl.setVideoComponentClassname)(element);

      // Unlike events, signals are permanent. We can wait for `REGISTERED` at any
      // moment in the element's lifecycle and the promise will resolve
      // appropriately each time.
      var signals = /** @type {!../base-element.BaseElement} */video.signals();

      signals.signal(_videoInterface.VideoEvents.REGISTERED);

      // Add a class to element to indicate it implements the video interface.
      element.classList.add('i-amphtml-video-interface');
    }

    /**
     * Register common actions such as play, pause, etc... on the video element
     * so they can be called using AMP Actions.
     * For example: <button on="tap:myVideo.play">
     *
     * @param {!../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'registerCommonActions_',
    value: function registerCommonActions_(video) {
      // Only require ActionTrust.LOW for video actions to defer to platform
      // specific handling (e.g. user gesture requirement for unmuted playback).
      var trust = _actionConstants.ActionTrust.LOW;

      registerAction('play', function () {
        return video.play( /* isAutoplay */false);
      });
      registerAction('pause', function () {
        return video.pause();
      });
      registerAction('mute', function () {
        return video.mute();
      });
      registerAction('unmute', function () {
        return video.unmute();
      });
      registerAction('fullscreen', function () {
        return video.fullscreenEnter();
      });

      /**
       * @param {string} action
       * @param {function()} fn
       */
      function registerAction(action, fn) {
        video.registerAction(action, function () {
          userInteractedWith(video);
          fn();
        }, trust);
      }
    }

    /**
     * Install the necessary listeners to be notified when a video becomes visible
     * in the viewport.
     *
     * Visibility of a video is defined by being in the viewport AND having
     * {@link MIN_VISIBILITY_RATIO_FOR_AUTOPLAY} of the video element visible.
     *
     * @param {VideoEntry} entry
     * @private
     */

  }, {
    key: 'maybeInstallVisibilityObserver_',
    value: function maybeInstallVisibilityObserver_(entry) {
      var _this2 = this;

      var element = entry.video.element;


      (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.VISIBILITY, function (details) {
        var data = (0, _eventHelper.getData)(details);
        if (data && data['visible'] == true) {
          entry.updateVisibility( /* opt_forceVisible */true);
        } else {
          entry.updateVisibility();
        }
      });

      (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.RELOAD, function () {
        entry.videoLoaded();
      });

      // TODO(aghassemi, #6425): Use IntersectionObserver
      if (!this.scrollListenerInstalled_) {
        var scrollListener = function scrollListener() {
          for (var i = 0; i < _this2.entries_.length; i++) {
            _this2.entries_[i].updateVisibility();
          }
        };
        this.viewport_.onScroll(scrollListener);
        this.viewport_.onChanged(scrollListener);
        this.scrollListenerInstalled_ = true;
      }
    }

    /**
     * Returns the entry in the video manager corresponding to the video
     * provided
     *
     * @param {!../video-interface.VideoInterface} video
     * @return {VideoEntry} entry
     * @private
     */

  }, {
    key: 'getEntryForVideo_',
    value: function getEntryForVideo_(video) {
      for (var i = 0; i < this.entries_.length; i++) {
        if (this.entries_[i].video === video) {
          return this.entries_[i];
        }
      }
      (0, _log.dev)().error(TAG, 'video is not registered to this video manager');
      return null;
    }

    /**
     * Returns the entry in the video manager corresponding to the element
     * provided
     *
     * @param {!AmpElement} element
     * @return {VideoEntry} entry
     * @private
     */

  }, {
    key: 'getEntryForElement_',
    value: function getEntryForElement_(element) {
      for (var i = 0; i < this.entries_.length; i++) {
        var entry = this.entries_[i];
        if (entry.video.element === element) {
          return entry;
        }
      }
      (0, _log.dev)().error(TAG, 'video is not registered to this video manager');
      return null;
    }

    /** @override */

  }, {
    key: 'getAnalyticsDetails',
    value: function getAnalyticsDetails(videoElement) {
      var entry = this.getEntryForElement_(videoElement);
      return entry ? entry.getAnalyticsDetails() : Promise.resolve();
    }

    /**
     * Returns whether the video is paused or playing after the user interacted
     * with it or playing through autoplay
     *
     * @param {!../video-interface.VideoInterface} video
     * @return {!../video-interface.VideoInterface} PlayingStates
     */

  }, {
    key: 'getPlayingState',
    value: function getPlayingState(video) {
      return this.getEntryForVideo_(video).getPlayingState();
    }

    /**
     * @param {!../video-interface.VideoInterface} video
     * @return {boolean}
     */

  }, {
    key: 'isMuted',
    value: function isMuted(video) {
      return this.getEntryForVideo_(video).isMuted();
    }

    /**
     * @param {!../video-interface.VideoInterface} video
     * @return {boolean}
     */

  }, {
    key: 'userInteracted',
    value: function userInteracted(video) {
      return this.getEntryForVideo_(video).userInteracted();
    }

    /** @param {!VideoEntry} entry */

  }, {
    key: 'registerForAutoFullscreen',
    value: function registerForAutoFullscreen(entry) {
      this.getAutoFullscreenManager_().register(entry);
    }

    /** @param {!VideoEntry} entry */

  }, {
    key: 'registerForDocking',
    value: function registerForDocking(entry) {
      this.getDocking_().register(entry.video);
    }

    /**
     * @return {!AutoFullscreenManager}
     * @visibleForTesting
     */

  }, {
    key: 'getAutoFullscreenManagerForTesting_',
    value: function getAutoFullscreenManagerForTesting_() {
      return this.getAutoFullscreenManager_();
    }
  }]);

  return VideoManager;
}();

/**
 * VideoEntry represents an entry in the VideoManager's list.
 */


var VideoEntry = function () {
  /**
   * @param {!VideoManager} manager
   * @param {!../video-interface.VideoOrBaseElementDef} video
   */
  function VideoEntry(manager, video) {
    var _this3 = this;

    _classCallCheck(this, VideoEntry);

    /** @private @const {!VideoManager} */
    this.manager_ = manager;

    /** @private @const {!./ampdoc-impl.AmpDoc}  */
    this.ampdoc_ = manager.ampdoc;

    /** @package @const {!../video-interface.VideoOrBaseElementDef} */
    this.video = video;

    /** @private {boolean} */
    this.allowAutoplay_ = true;

    /** @private {boolean} */
    this.loaded_ = false;

    /** @private {boolean} */
    this.isPlaying_ = false;

    /** @private {boolean} */
    this.isVisible_ = false;

    /** @private @const */
    this.actionSessionManager_ = new _videoSessionManager.VideoSessionManager();

    this.actionSessionManager_.onSessionEnd(function () {
      return analyticsEvent(_this3, _videoInterface.VideoAnalyticsEvents.SESSION);
    });

    /** @private @const */
    this.visibilitySessionManager_ = new _videoSessionManager.VideoSessionManager();

    this.visibilitySessionManager_.onSessionEnd(function () {
      return analyticsEvent(_this3, _videoInterface.VideoAnalyticsEvents.SESSION_VISIBLE);
    });

    /** @private @const {function(): !Promise<boolean>} */
    this.supportsAutoplay_ = function () {
      var win = _this3.ampdoc_.win;

      return _video2.VideoUtils.isAutoplaySupported(win, (0, _mode.getMode)(win).lite);
    };

    // Autoplay Variables

    /** @private {boolean} */
    this.playCalledByAutoplay_ = false;

    /** @private {boolean} */
    this.pauseCalledByAutoplay_ = false;

    /** @private {?Element} */
    this.internalElement_ = null;

    /** @private {boolean} */
    this.muted_ = false;

    this.hasAutoplay = video.element.hasAttribute(_videoInterface.VideoAttributes.AUTOPLAY);

    if (this.hasAutoplay) {
      this.manager_.installAutoplayStyles();
    }

    // Media Session API Variables

    /** @private {!../mediasession-helper.MetadataDef} */
    this.metadata_ = _mediasessionHelper.EMPTY_METADATA;

    (0, _eventHelper.listenOncePromise)(video.element, _videoInterface.VideoEvents.LOAD).then(function () {
      return _this3.videoLoaded();
    });
    (0, _eventHelper.listen)(video.element, _videoInterface.VideoEvents.PAUSE, function () {
      return _this3.videoPaused_();
    });
    (0, _eventHelper.listen)(video.element, _videoInterface.VideoEvents.PLAYING, function () {
      return _this3.videoPlayed_();
    });
    (0, _eventHelper.listen)(video.element, _videoInterface.VideoEvents.MUTED, function () {
      return _this3.muted_ = true;
    });
    (0, _eventHelper.listen)(video.element, _videoInterface.VideoEvents.UNMUTED, function () {
      return _this3.muted_ = false;
    });
    (0, _eventHelper.listen)(video.element, _videoInterface.VideoEvents.ENDED, function () {
      return _this3.videoEnded_();
    });

    video.signals().whenSignal(_videoInterface.VideoEvents.REGISTERED).then(function () {
      return _this3.onRegister_();
    });

    /**
     * Trigger event for first manual play.
     * @private @const {!function()}
     */
    this.firstPlayEventOrNoop_ = (0, _function.once)(function () {
      var firstPlay = 'firstPlay';
      var trust = _actionConstants.ActionTrust.LOW;
      var event = (0, _eventHelper.createCustomEvent)(_this3.ampdoc_.win, firstPlay,
      /* detail */(0, _object.dict)({}));
      var actions = _services.Services.actionServiceForDoc(_this3.ampdoc_);
      actions.trigger(_this3.video.element, firstPlay, event, trust);
    });

    this.listenForAutoplayDelegation_();
  }

  /** Listens for signals to delegate autoplay to a different module. */


  _createClass(VideoEntry, [{
    key: 'listenForAutoplayDelegation_',
    value: function listenForAutoplayDelegation_() {
      var _this4 = this;

      var signals = this.video.signals();
      signals.whenSignal(_videoServiceInterface.VideoServiceSignals.AUTOPLAY_DELEGATED).then(function () {
        _this4.allowAutoplay_ = false;

        if (_this4.isPlaying_) {
          _this4.video.pause();
        }
      });
    }

    /** @return {boolean} */

  }, {
    key: 'isMuted',
    value: function isMuted() {
      return this.muted_;
    }

    /** @private */

  }, {
    key: 'onRegister_',
    value: function onRegister_() {
      if (this.requiresAutoFullscreen_()) {
        this.manager_.registerForAutoFullscreen(this);
      }

      if (this.isDockable_()) {
        this.manager_.registerForDocking(this);
      }

      this.updateVisibility();
      if (this.hasAutoplay) {
        this.autoplayVideoBuilt_();
      }
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isDockable_',
    value: function isDockable_() {
      return this.video.element.hasAttribute(_videoInterface.VideoAttributes.DOCK);
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'requiresAutoFullscreen_',
    value: function requiresAutoFullscreen_() {
      var element = this.video.element;

      if (this.video.preimplementsAutoFullscreen() || !element.hasAttribute(_videoInterface.VideoAttributes.ROTATE_TO_FULLSCREEN)) {
        return false;
      }
      return (0, _log.user)().assert(this.video.isInteractive(), 'Only interactive videos are allowed to enter fullscreen on rotate. ' + 'Set the `controls` attribute on %s to enable.', element);
    }

    /**
     * Callback for when the video starts playing
     * @private
     */

  }, {
    key: 'videoPlayed_',
    value: function videoPlayed_() {
      var _this5 = this;

      this.isPlaying_ = true;

      if (this.getPlayingState() == _videoInterface.PlayingStates.PLAYING_MANUAL) {
        this.firstPlayEventOrNoop_();
      }

      if (!this.video.preimplementsMediaSessionAPI()) {
        var playHandler = function playHandler() {
          _this5.video.play( /*isAutoplay*/false);
        };
        var pauseHandler = function pauseHandler() {
          _this5.video.pause();
        };
        // Update the media session
        (0, _mediasessionHelper.setMediaSession)(this.ampdoc_, this.metadata_, playHandler, pauseHandler);
      }

      this.actionSessionManager_.beginSession();
      if (this.isVisible_) {
        this.visibilitySessionManager_.beginSession();
      }
      analyticsEvent(this, _videoInterface.VideoAnalyticsEvents.PLAY);
    }

    /**
     * Callback for when the video has been paused
     * @private
     */

  }, {
    key: 'videoPaused_',
    value: function videoPaused_() {
      analyticsEvent(this, _videoInterface.VideoAnalyticsEvents.PAUSE);
      this.isPlaying_ = false;

      // Prevent double-trigger of session if video is autoplay and the video
      // is paused by a the user scrolling the video out of view.
      if (!this.pauseCalledByAutoplay_) {
        this.actionSessionManager_.endSession();
      } else {
        // reset the flag
        this.pauseCalledByAutoplay_ = false;
      }
    }

    /**
     * Callback for when the video has ended
     * @private
     */

  }, {
    key: 'videoEnded_',
    value: function videoEnded_() {
      analyticsEvent(this, _videoInterface.VideoAnalyticsEvents.ENDED);
    }

    /**
     * Called when the video is loaded and can play.
     */

  }, {
    key: 'videoLoaded',
    value: function videoLoaded() {
      this.loaded_ = true;

      this.internalElement_ = (0, _video2.getInternalVideoElementFor)(this.video.element);

      this.fillMediaSessionMetadata_();

      this.updateVisibility();
      if (this.isVisible_) {
        // Handles the case when the video becomes visible before loading
        this.loadedVideoVisibilityChanged_();
      }
    }

    /**
     * Gets the provided metadata and fills in missing fields
     * @private
     */

  }, {
    key: 'fillMediaSessionMetadata_',
    value: function fillMediaSessionMetadata_() {
      if (this.video.preimplementsMediaSessionAPI()) {
        return;
      }

      if (this.video.getMetadata()) {
        this.metadata_ = (0, _object.map)(
        /** @type {!../mediasession-helper.MetadataDef} */
        this.video.getMetadata());
      }

      var doc = this.ampdoc_.win.document;

      if (!this.metadata_.artwork || this.metadata_.artwork.length == 0) {
        var posterUrl = (0, _mediasessionHelper.parseSchemaImage)(doc) || (0, _mediasessionHelper.parseOgImage)(doc) || (0, _mediasessionHelper.parseFavicon)(doc);

        if (posterUrl) {
          this.metadata_.artwork = [{
            'src': posterUrl
          }];
        }
      }

      if (!this.metadata_.title) {
        var title = this.video.element.getAttribute('title') || this.video.element.getAttribute('aria-label') || this.internalElement_.getAttribute('title') || this.internalElement_.getAttribute('aria-label') || doc.title;
        if (title) {
          this.metadata_.title = title;
        }
      }
    }

    /**
     * Called when visibility of a video changes.
     * @private
     */

  }, {
    key: 'videoVisibilityChanged_',
    value: function videoVisibilityChanged_() {
      if (this.loaded_) {
        this.loadedVideoVisibilityChanged_();
      }
    }

    /**
     * Only called when visibility of a loaded video changes.
     * @private
     */

  }, {
    key: 'loadedVideoVisibilityChanged_',
    value: function loadedVideoVisibilityChanged_() {
      var _this6 = this;

      if (!_services.Services.viewerForDoc(this.ampdoc_).isVisible()) {
        return;
      }
      this.supportsAutoplay_().then(function (supportsAutoplay) {
        var canAutoplay = _this6.hasAutoplay && !_this6.userInteracted();

        if (canAutoplay && supportsAutoplay) {
          _this6.autoplayLoadedVideoVisibilityChanged_();
        } else {
          _this6.nonAutoplayLoadedVideoVisibilityChanged_();
        }
      });
    }

    /* Autoplay Behaviour */

    /**
     * Called when an autoplay video is built.
     * @private
     */

  }, {
    key: 'autoplayVideoBuilt_',
    value: function autoplayVideoBuilt_() {
      var _this7 = this;

      // Hide controls until we know if autoplay is supported, otherwise hiding
      // and showing the controls quickly becomes a bad user experience for the
      // common case where autoplay is supported.
      if (this.video.isInteractive()) {
        this.video.hideControls();
      }

      this.supportsAutoplay_().then(function (supportsAutoplay) {
        if (!supportsAutoplay && _this7.video.isInteractive()) {
          // Autoplay is not supported, show the controls so user can manually
          // initiate playback.
          _this7.video.showControls();
          return;
        }

        // Only muted videos are allowed to autoplay
        _this7.video.mute();

        _this7.installAutoplayArtifacts_();
      });
    }

    /**
     * Installs autoplay animation and interaction mask when interactive.
     * The animated icon is appended always, but only displayed by CSS when
     * `controls` is set. See `video-autoplay.css`.
     * @private
     */

  }, {
    key: 'installAutoplayArtifacts_',
    value: function installAutoplayArtifacts_() {
      var _this8 = this;

      var video = this.video;
      var _video = this.video,
          element = _video.element,
          win = _video.win;


      if (element.hasAttribute(_videoInterface.VideoAttributes.NO_AUDIO) || element.signals().get(_videoServiceInterface.VideoServiceSignals.USER_INTERACTED)) {
        return;
      }

      var animation = (0, _autoplay.renderIcon)(win, element);

      /** @param {boolean} isPlaying */
      var toggleAnimation = function toggleAnimation(isPlaying) {
        video.mutateElement(function () {
          animation.classList.toggle('amp-video-eq-play', isPlaying);
        });
      };

      video.mutateElement(function () {
        element.appendChild(animation);
      });

      var unlisteners = [(0, _eventHelper.listen)(element, _videoInterface.VideoEvents.PAUSE, function () {
        return toggleAnimation(false);
      }), (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.PLAYING, function () {
        return toggleAnimation(true);
      })];

      video.signals().whenSignal(_videoServiceInterface.VideoServiceSignals.USER_INTERACTED).then(function () {
        var video = _this8.video;
        var element = video.element;

        _this8.firstPlayEventOrNoop_();
        if (video.isInteractive()) {
          video.showControls();
        }
        video.unmute();
        unlisteners.forEach(function (unlistener) {
          unlistener();
        });
        var animation = element.querySelector('.amp-video-eq');
        var mask = element.querySelector('i-amphtml-video-mask');
        if (animation) {
          (0, _dom.removeElement)(animation);
        }
        if (mask) {
          (0, _dom.removeElement)(mask);
        }
      });

      if (!video.isInteractive()) {
        return;
      }

      var mask = (0, _autoplay.renderInteractionOverlay)(win, element);

      /** @param {string} display */
      var setMaskDisplay = function setMaskDisplay(display) {
        video.mutateElement(function () {
          (0, _style.setStyle)(mask, 'display', display);
        });
      };

      video.hideControls();

      video.mutateElement(function () {
        element.appendChild(mask);
      });

      [(0, _eventHelper.listen)(mask, 'click', function () {
        return userInteractedWith(video);
      }), (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.AD_START, function () {
        return setMaskDisplay('none');
      }), (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.AD_END, function () {
        return setMaskDisplay('block');
      })].forEach(function (unlistener) {
        return unlisteners.push(unlistener);
      });
    }

    /**
     * Called when visibility of a loaded autoplay video changes.
     * @private
     */

  }, {
    key: 'autoplayLoadedVideoVisibilityChanged_',
    value: function autoplayLoadedVideoVisibilityChanged_() {
      if (!this.allowAutoplay_) {
        return;
      }
      if (this.isVisible_) {
        this.visibilitySessionManager_.beginSession();
        this.video.play( /*autoplay*/true);
        this.playCalledByAutoplay_ = true;
      } else {
        if (this.isPlaying_) {
          this.visibilitySessionManager_.endSession();
        }
        this.video.pause();
        this.pauseCalledByAutoplay_ = true;
      }
    }

    /**
     * Called when visibility of a loaded non-autoplay video changes.
     * @private
     */

  }, {
    key: 'nonAutoplayLoadedVideoVisibilityChanged_',
    value: function nonAutoplayLoadedVideoVisibilityChanged_() {
      if (this.isVisible_) {
        this.visibilitySessionManager_.beginSession();
      } else if (this.isPlaying_) {
        this.visibilitySessionManager_.endSession();
      }
    }

    /**
     * Called by all possible events that might change the visibility of the video
     * such as scrolling or {@link ../video-interface.VideoEvents#VISIBILITY}.
     * @param {?boolean=} opt_forceVisible
     * @package
     */

  }, {
    key: 'updateVisibility',
    value: function updateVisibility(opt_forceVisible) {
      var wasVisible = this.isVisible_;

      if (opt_forceVisible) {
        this.isVisible_ = true;
      } else {
        var element = this.video.element;

        var ratio = element.getIntersectionChangeEntry().intersectionRatio;
        this.isVisible_ = (!(0, _types.isFiniteNumber)(ratio) ? 0 : ratio) >= _videoInterface.MIN_VISIBILITY_RATIO_FOR_AUTOPLAY;
      }

      if (this.isVisible_ != wasVisible) {
        this.videoVisibilityChanged_();
      }
    }

    /**
     * Returns whether the video is paused or playing after the user interacted
     * with it or playing through autoplay
     * @return {!../video-interface.VideoInterface} PlayingStates
     */

  }, {
    key: 'getPlayingState',
    value: function getPlayingState() {
      if (!this.isPlaying_) {
        return _videoInterface.PlayingStates.PAUSED;
      }

      if (this.isPlaying_ && this.playCalledByAutoplay_ && !this.userInteracted()) {
        return _videoInterface.PlayingStates.PLAYING_AUTO;
      }

      return _videoInterface.PlayingStates.PLAYING_MANUAL;
    }

    /**
     * Returns whether the video was interacted with or not
     * @return {boolean}
     */

  }, {
    key: 'userInteracted',
    value: function userInteracted() {
      return this.video.signals().get(_videoServiceInterface.VideoServiceSignals.USER_INTERACTED) != null;
    }

    /**
     * Collects a snapshot of the current video state for video analytics
     * @return {!Promise<!../video-interface.VideoAnalyticsDetailsDef>}
     */

  }, {
    key: 'getAnalyticsDetails',
    value: function getAnalyticsDetails() {
      var _this9 = this;

      var video = this.video;

      return this.supportsAutoplay_().then(function (supportsAutoplay) {
        var _video$element$getLay = video.element.getLayoutBox(),
            width = _video$element$getLay.width,
            height = _video$element$getLay.height;

        var autoplay = _this9.hasAutoplay && supportsAutoplay;
        var playedRanges = video.getPlayedRanges();
        var playedTotal = playedRanges.reduce(function (acc, range) {
          return acc + range[1] - range[0];
        }, 0);

        return {
          'autoplay': autoplay,
          'currentTime': video.getCurrentTime(),
          'duration': video.getDuration(),
          // TODO(cvializ): add fullscreen
          'height': height,
          'id': video.element.id,
          'muted': _this9.muted_,
          'playedTotal': playedTotal,
          'playedRangesJson': JSON.stringify(playedRanges),
          'state': _this9.getPlayingState(),
          'width': width
        };
      });
    }
  }]);

  return VideoEntry;
}();

/**
 * @param {!AmpElement} video
 * @return {boolean}
 * @restricted
 */


function supportsFullscreenViaApi(video) {
  // TODO(alanorozco): Determine this via a flag in the component itself.
  return !!{
    'amp-dailymotion': true,
    'amp-ima-video': true
  }[video.tagName.toLowerCase()];
}

/** Manages rotate-to-fullscreen video. */

var AutoFullscreenManager = exports.AutoFullscreenManager = function () {

  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   * @param {!./video-service-interface.VideoServiceInterface} manager
   */
  function AutoFullscreenManager(ampdoc, manager) {
    var _this10 = this;

    _classCallCheck(this, AutoFullscreenManager);

    /** @private @const {!./video-service-interface.VideoServiceInterface} */
    this.manager_ = manager;

    /** @private @const {!./ampdoc-impl.AmpDoc} */
    this.ampdoc_ = ampdoc;

    /** @private {?../video-interface.VideoOrBaseElementDef} */
    this.currentlyInFullscreen_ = null;

    /** @private {?../video-interface.VideoOrBaseElementDef} */
    this.currentlyCentered_ = null;

    /** @private @const {!Array<!../video-interface.VideoOrBaseElementDef>} */
    this.entries_ = [];

    /** @private @const {function()} */
    this.boundSelectBestCentered_ = function () {
      return _this10.selectBestCenteredInPortrait_();
    };

    /**
     * @param {!../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     */
    this.boundIncludeOnlyPlaying_ = function (video) {
      return _this10.getPlayingState_(video) == _videoInterface.PlayingStates.PLAYING_MANUAL;
    };

    /**
     * @param {!../video-interface.VideoOrBaseElementDef} a
     * @param {!../video-interface.VideoOrBaseElementDef} b
     * @return {number}
     */
    this.boundCompareEntries_ = function (a, b) {
      return _this10.compareEntries_(a, b);
    };

    this.installOrientationObserver_();
    this.installFullscreenListener_();
  }

  /** @param {!VideoEntry} entry */


  _createClass(AutoFullscreenManager, [{
    key: 'register',
    value: function register(entry) {
      var video = entry.video;
      var element = video.element;


      if (!this.canFullscreen_(element)) {
        return;
      }

      this.entries_.push(video);

      (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.PAUSE, this.boundSelectBestCentered_);
      (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.PLAYING, this.boundSelectBestCentered_);
      (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.ENDED, this.boundSelectBestCentered_);

      video.signals().whenSignal(_videoServiceInterface.VideoServiceSignals.USER_INTERACTED).then(this.boundSelectBestCentered_);

      // Set always
      this.selectBestCenteredInPortrait_();
    }

    /** @private */

  }, {
    key: 'installFullscreenListener_',
    value: function installFullscreenListener_() {
      var _this11 = this;

      var root = this.ampdoc_.getRootNode();
      var exitHandler = function exitHandler() {
        return _this11.onFullscreenExit_();
      };
      (0, _eventHelper.listen)(root, 'webkitfullscreenchange', exitHandler);
      (0, _eventHelper.listen)(root, 'mozfullscreenchange', exitHandler);
      (0, _eventHelper.listen)(root, 'fullscreenchange', exitHandler);
      (0, _eventHelper.listen)(root, 'MSFullscreenChange', exitHandler);
    }

    /**
     * @return {boolean}
     * @visibleForTesting
     */

  }, {
    key: 'isInLandscape',
    value: function isInLandscape() {
      return isLandscape(this.ampdoc_.win);
    }

    /**
     * @param {!AmpElement} video
     * @return {boolean}
     * @private
     */

  }, {
    key: 'canFullscreen_',
    value: function canFullscreen_(video) {
      // Safari and iOS can only fullscreen <video> elements directly. In cases
      // where the player component is implemented via an <iframe>, we need to
      // rely on a postMessage API to fullscreen. Such an API is not necessarily
      // provided by every player.
      var internalElement = (0, _video2.getInternalVideoElementFor)(video);
      if (internalElement.tagName.toLowerCase() == 'video') {
        return true;
      }
      var platform = _services.Services.platformFor(this.ampdoc_.win);
      if (!(platform.isIos() || platform.isSafari())) {
        return true;
      }
      return supportsFullscreenViaApi(video);
    }

    /** @private */

  }, {
    key: 'onFullscreenExit_',
    value: function onFullscreenExit_() {
      this.currentlyInFullscreen_ = null;
    }

    /** @private */

  }, {
    key: 'installOrientationObserver_',
    value: function installOrientationObserver_() {
      var _this12 = this;

      // TODO(alanorozco) Update based on support
      var win = this.ampdoc_.win;
      var screen = win.screen;
      // Chrome considers 'orientationchange' to be an untrusted event, but
      // 'change' on screen.orientation is considered a user interaction.
      // We still need to listen to 'orientationchange' on Chrome in order to
      // exit fullscreen since 'change' does not fire in this case.

      if (screen && 'orientation' in screen) {
        var orient = /** @type {!ScreenOrientation} */screen.orientation;
        (0, _eventHelper.listen)(orient, 'change', function () {
          return _this12.onRotation_();
        });
      }
      // iOS Safari does not have screen.orientation but classifies
      // 'orientationchange' as a user interaction.
      (0, _eventHelper.listen)(win, 'orientationchange', function () {
        return _this12.onRotation_();
      });
    }

    /** @private */

  }, {
    key: 'onRotation_',
    value: function onRotation_() {
      if (this.isInLandscape()) {
        if (this.currentlyCentered_ != null) {
          this.enter_(this.currentlyCentered_);
        }
        return;
      }
      if (this.currentlyInFullscreen_) {
        this.exit_(this.currentlyInFullscreen_);
      }
    }

    /**
     * @param {!../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'enter_',
    value: function enter_(video) {
      var platform = _services.Services.platformFor(this.ampdoc_.win);

      this.currentlyInFullscreen_ = video;

      if (platform.isAndroid() && platform.isChrome()) {
        // Chrome on Android somehow knows what we're doing and executes a nice
        // transition by default. Delegating to browser.
        video.fullscreenEnter();
        return;
      }

      this.scrollIntoIfNotVisible_(video).then(function () {
        return video.fullscreenEnter();
      });
    }

    /**
     * @param {!../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'exit_',
    value: function exit_(video) {
      this.currentlyInFullscreen_ = null;

      this.scrollIntoIfNotVisible_(video, 'center').then(function () {
        return video.fullscreenExit();
      });
    }

    /**
     * Scrolls to a video if it's not in view.
     * @param {!../video-interface.VideoOrBaseElementDef} video
     * @param {?string=} optPos
     * @private
     */

  }, {
    key: 'scrollIntoIfNotVisible_',
    value: function scrollIntoIfNotVisible_(video) {
      var optPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var element = video.element;

      var viewport = this.getViewport_();

      var duration = 300;
      var curve = 'ease-in';

      return this.onceOrientationChanges_().then(function () {
        var _element$getIntersect = element.getIntersectionChangeEntry(),
            boundingClientRect = _element$getIntersect.boundingClientRect;

        var top = boundingClientRect.top,
            bottom = boundingClientRect.bottom;

        var vh = viewport.getSize().height;
        var fullyVisible = top >= 0 && bottom <= vh;
        if (fullyVisible) {
          return Promise.resolve();
        }
        var pos = optPos ? (0, _log.dev)().assertString(optPos) : bottom > vh ? 'bottom' : 'top';
        return viewport.animateScrollIntoView(element, duration, curve, pos);
      });
    }

    /** @private */

  }, {
    key: 'getViewport_',
    value: function getViewport_() {
      return _services.Services.viewportForDoc(this.ampdoc_);
    }

    /** @private @return {!Promise} */

  }, {
    key: 'onceOrientationChanges_',
    value: function onceOrientationChanges_() {
      var magicNumber = 330;
      return _services.Services.timerFor(this.ampdoc_.win).promise(magicNumber);
    }

    /** @private */

  }, {
    key: 'selectBestCenteredInPortrait_',
    value: function selectBestCenteredInPortrait_() {
      if (this.isInLandscape()) {
        return this.currentlyCentered_;
      }

      this.currentlyCentered_ = null;

      var selected = this.entries_.filter(this.boundIncludeOnlyPlaying_).sort(this.boundCompareEntries_)[0];

      if (selected) {
        var _selected$element$get = selected.element.getIntersectionChangeEntry(),
            intersectionRatio = _selected$element$get.intersectionRatio;

        if (intersectionRatio >= _videoInterface.MIN_VISIBILITY_RATIO_FOR_AUTOPLAY) {
          this.currentlyCentered_ = selected;
        }
      }

      return this.currentlyCentered_;
    }

    /**
     * Compares two videos in order to sort them by "best centered".
     * @param {!../video-interface.VideoOrBaseElementDef} a
     * @param {!../video-interface.VideoOrBaseElementDef} b
     * @return {number}
     */

  }, {
    key: 'compareEntries_',
    value: function compareEntries_(a, b) {
      var _a$element$getInterse = a.element.getIntersectionChangeEntry(),
          ratioA = _a$element$getInterse.intersectionRatio,
          rectA = _a$element$getInterse.boundingClientRect;

      var _b$element$getInterse = b.element.getIntersectionChangeEntry(),
          ratioB = _b$element$getInterse.intersectionRatio,
          rectB = _b$element$getInterse.boundingClientRect;

      // Prioritize by how visible they are, with a tolerance of 10%


      var ratioTolerance = 0.1;
      var ratioDelta = ratioA - ratioB;
      if (Math.abs(ratioDelta) > ratioTolerance) {
        return ratioDelta;
      }

      // Prioritize by distance from center.
      var viewport = _services.Services.viewportForDoc(this.ampdoc_);
      var centerA = centerDist(viewport, rectA);
      var centerB = centerDist(viewport, rectB);
      if (centerA < centerB || centerA > centerB) {
        return centerA - centerB;
      }

      // Everything else failing, choose the highest element.
      return rectA.top - rectB.top;
    }

    /**
     * @param {!../video-interface.VideoOrBaseElementDef} video
     * @return {!../video-interface.VideoInterface} PlayingStates
     * @private
     */

  }, {
    key: 'getPlayingState_',
    value: function getPlayingState_(video) {
      return this.manager_.getPlayingState(
      /** @type {!../video-interface.VideoInterface} */video);
    }
  }]);

  return AutoFullscreenManager;
}();

/**
 * @param {!./viewport/viewport-impl.Viewport} viewport
 * @param {{top: number, height: number}} rect
 * @return {number}
 */


function centerDist(viewport, rect) {
  var centerY = rect.top + rect.height / 2;
  var centerViewport = viewport.getSize().height / 2;
  return Math.abs(centerY - centerViewport);
}

/**
 * @param {!Window} win
 * @return {boolean}
 */
function isLandscape(win) {
  if (win.screen && 'orientation' in win.screen) {
    return (0, _string.startsWith)(win.screen.orientation.type, 'landscape');
  }
  return Math.abs(win.orientation) == 90;
}

/**
 * @param {!VideoEntry} entry
 * @param {!VideoAnalyticsEvents} eventType
 * @param {!Object<string, string>=} opt_vars A map of vars and their values.
 * @private
 */
function analyticsEvent(entry, eventType, opt_vars) {
  var video = entry.video;

  var detailsPromise = opt_vars ? Promise.resolve(opt_vars) : entry.getAnalyticsDetails();

  detailsPromise.then(function (details) {
    video.element.dispatchCustomEvent(eventType, details);
  });
}

/** @param {!Node|!./ampdoc-impl.AmpDoc} nodeOrDoc */
function installVideoManagerForDoc(nodeOrDoc) {
  // TODO(alanorozco, #13674): Rename to `installVideoServiceForDoc`
  // TODO(alanorozco, #13674): Rename to `video-service`
  (0, _service.registerServiceBuilderForDoc)(nodeOrDoc, 'video-manager', function (ampdoc) {
    var win = ampdoc.win;

    if (_videoServiceSyncImpl.VideoServiceSync.shouldBeUsedIn(win)) {
      return new _videoServiceSyncImpl.VideoServiceSync(ampdoc);
    }
    return new VideoManager(ampdoc);
  });
}

},{"../action-constants":6,"../dom":9,"../event-helper":12,"../log":18,"../mediasession-helper":19,"../mode":21,"../service":32,"../services":42,"../string":44,"../style":46,"../types":47,"../utils/function":51,"../utils/object":54,"../utils/video":57,"../video-interface":58,"./video-service-interface":36,"./video-service-sync-impl":37,"./video-session-manager":38,"./video/autoplay":39,"./video/docking":40,"./video/install-autoplay-styles":41}],36:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

/** @typedef {../video-interface.VideoAnalyticsDetailsDef} */
var VideoAnalyticsDetailsDef = void 0; // alias for line length


/** @interface */

var VideoServiceInterface = exports.VideoServiceInterface = function () {
  function VideoServiceInterface() {
    _classCallCheck(this, VideoServiceInterface);
  }

  _createClass(VideoServiceInterface, [{
    key: 'register',


    /** @param {!../video-interface.VideoInterface} unusedVideo */
    value: function register(unusedVideo) {}

    /**
     * Gets the current analytics details for the given video.
     * Fails silently if the video is not registered.
     * @param {!AmpElement} unusedVideo
     * @return {!Promise<!VideoAnalyticsDetailsDef>|!Promise<void>}
     */

  }, {
    key: 'getAnalyticsDetails',
    value: function getAnalyticsDetails(unusedVideo) {}

    /**
     * @param {!../video-interface.VideoInterface} unusedVideo
     * @return {boolean}
     */

  }, {
    key: 'isMuted',
    value: function isMuted(unusedVideo) {}

    /**
     * @param {!../video-interface.VideoInterface} unusedVideo
     * @return {!../video-interface.VideoInterface} PlayingStates
     */

  }, {
    key: 'getPlayingState',
    value: function getPlayingState(unusedVideo) {}
  }]);

  return VideoServiceInterface;
}();

/** @enum {string} */


var VideoServiceSignals = exports.VideoServiceSignals = {
  USER_INTERACTED: 'user-interacted',
  AUTOPLAY_DELEGATED: 'autoplay-delegated'
};

},{}],37:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoEntry = exports.VideoServiceSync = undefined;

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

exports.setVideoComponentClassname = setVideoComponentClassname;

var _autoplay = require('./video/autoplay');

var _videoInterface = require('../video-interface');

var _services = require('../services');

var _videoServiceInterface = require('./video-service-interface');

var _log = require('../log');

var _service = require('../service');

var _elementService = require('../element-service');

var _experiments = require('../experiments');

var _eventHelper = require('../event-helper');

var _function = require('../utils/function');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @private @const {string} */
var EXTENSION = 'amp-video-service';

/** @private @const {string} */
var TAG = 'video-service';

/**
 * @typedef
 * {../../extensions/amp-video-service/0.1/amp-video-service.VideoService}
 */
var VideoServiceDef = void 0; // alias for line length.


/**
 * Provides unified behavior for all videos regardless of implementation.
 *
 * This service is a façade around an async-loaded implementation.
 * See {@link AmpVideoService} for the underlying service.
 *
 * This co-eexists with `VideoManager` (deprecated) while the implementation
 * is migrated.
 *
 * @implements {./video-service-interface.VideoServiceInterface}
 */

var VideoServiceSync = exports.VideoServiceSync = function () {

  /** @param {!./ampdoc-impl.AmpDoc} ampdoc */
  function VideoServiceSync(ampdoc) {
    var _this = this;

    _classCallCheck(this, VideoServiceSync);

    var win = ampdoc.win;

    /** @private @const {!./ampdoc-impl.AmpDoc} */

    this.ampdoc_ = ampdoc;

    /** @private @const {!Promise<!VideoServiceDef>}  */
    this.asyncImpl_ = VideoServiceSync.videoServiceFor(win, ampdoc);

    /**
     * @return {!Autoplay}
     * @private
     */
    this.getAutoplay_ = (0, _function.once)(function () {
      return new _autoplay.Autoplay(_this.ampdoc_);
    });
  }

  /**
   * @param {!Window} win
   * @return {boolean}
   * @visibleForTesting
   */


  _createClass(VideoServiceSync, [{
    key: 'register',


    /** @override */
    value: function register(video) {
      this.asyncImpl_.then(function (impl) {
        return impl.register(video);
      });

      this.maybeInstallAutoplay_(video);

      new VideoEntry(video);
    }

    /**
     * @param  {!../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'maybeInstallAutoplay_',
    value: function maybeInstallAutoplay_(video) {
      var _this2 = this;

      if (!video.element.hasAttribute(_videoInterface.VideoAttributes.AUTOPLAY)) {
        return;
      }

      this.getAutoplay_().register(video);

      var autoplayDelegated = _videoServiceInterface.VideoServiceSignals.AUTOPLAY_DELEGATED;
      video.signals().whenSignal(autoplayDelegated).then(function () {
        _this2.getAutoplay_().delegate(video.element);
      });
    }

    /**
     * @param {!AmpElement|!../base-element.BaseElement} video
     */

  }, {
    key: 'getAnalyticsDetails',


    /** @override */
    value: function getAnalyticsDetails(video) {
      return this.asyncImpl_.then(function (impl) {
        return impl.getAnalyticsDetails(video);
      });
    }

    /** @override */

  }, {
    key: 'isMuted',
    value: function isMuted(unusedVideo) {
      (0, _log.dev)().warn(TAG, 'isMuted is not implemented');
      return false;
    }

    /** @override */

  }, {
    key: 'getPlayingState',
    value: function getPlayingState(unusedVideo) {
      (0, _log.dev)().warn(TAG, 'getPlayingState is not implemented');
      return _videoInterface.PlayingStates.PAUSED;
    }
  }], [{
    key: 'shouldBeUsedIn',
    value: function shouldBeUsedIn(win) {
      return (0, _experiments.isExperimentOn)(win, 'video-service');
    }

    /**
     * @param {!Window} win
     * @param {!Node|!./ampdoc-impl.AmpDoc} nodeOrDoc
     * @return {!Promise<!VideoServiceDef>}
     * @visibleForTesting
     */

  }, {
    key: 'videoServiceFor',
    value: function videoServiceFor(win, nodeOrDoc) {
      // Not exposed in ../services.js since we don't want other modules to
      // instantiate or access the service.
      var extensions = _services.Services.extensionsFor(win);
      var ampdoc = (0, _service.getAmpdoc)(nodeOrDoc);
      return extensions.installExtensionForDoc(ampdoc, EXTENSION).then(function () {
        return (/** @type {!Promise<!VideoServiceDef>} */(0, _elementService.getElementServiceForDoc)(ampdoc, 'video-service', EXTENSION)
        );
      });
    }
  }, {
    key: 'delegateAutoplay',
    value: function delegateAutoplay(video) {
      video.signals().signal(_videoServiceInterface.VideoServiceSignals.AUTOPLAY_DELEGATED);
    }
  }]);

  return VideoServiceSync;
}();

/** @visibleForTesting */


var VideoEntry = exports.VideoEntry = function () {

  /** @param {!../video-interface.VideoOrBaseElementDef} video */
  function VideoEntry(video) {
    _classCallCheck(this, VideoEntry);

    /** @private @const {!../video-interface.VideoOrBaseElementDef} */
    this.video_ = video;

    /** @private @const {!AmpElement} */
    this.element_ = video.element;

    /** @private @const {!Promise} */
    this.loadPromise_ = (0, _eventHelper.listenOncePromise)(this.element_, _videoInterface.VideoEvents.LOAD);

    this.listenToAutoplayEvents_();

    setVideoComponentClassname(this.element_);
  }

  /**
   * @param {string} event
   * @param {function(!Event)} handler
   * @private
   */


  _createClass(VideoEntry, [{
    key: 'listenOnLoad_',
    value: function listenOnLoad_(event, handler) {
      var _this3 = this;

      (0, _eventHelper.listen)(this.element_, event, function (e) {
        _this3.loadPromise_.then(function () {
          handler(e);
        });
      });
    }

    /** @private */

  }, {
    key: 'listenToAutoplayEvents_',
    value: function listenToAutoplayEvents_() {
      var _this4 = this;

      // TODO(alanorozco): Keep track of session
      this.listenOnLoad_(_autoplay.AutoplayEvents.PLAY, function () {
        _this4.video_.play( /* auto */true);
      });

      this.listenOnLoad_(_autoplay.AutoplayEvents.PAUSE, function () {
        _this4.video_.pause();
      });
    }
  }]);

  return VideoEntry;
}();

/**
 * @param {!Element} element
 */


function setVideoComponentClassname(element) {
  element.classList.add('i-amphtml-video-component');
}

},{"../element-service":10,"../event-helper":12,"../experiments":13,"../log":18,"../service":32,"../services":42,"../utils/function":51,"../video-interface":58,"./video-service-interface":36,"./video/autoplay":39}],38:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoSessionManager = undefined;

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

var _observable = require('../observable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoSessionManager = exports.VideoSessionManager = function () {
  /**
   * Creates an instance of VideoSessionManager.
   */
  function VideoSessionManager() {
    _classCallCheck(this, VideoSessionManager);

    /** @private */
    this.isSessionActive_ = false;

    /** @private */
    this.endSessionObservable_ = new _observable.Observable();
  }

  /**
   * Register a listener to be notified when a session has ended
   * @param {!Function} listener
   */


  _createClass(VideoSessionManager, [{
    key: 'onSessionEnd',
    value: function onSessionEnd(listener) {
      this.endSessionObservable_.add(listener);
    }

    /**
     * Begin a session.
     */

  }, {
    key: 'beginSession',
    value: function beginSession() {
      this.isSessionActive_ = true;
    }

    /**
     * End a session.
     */

  }, {
    key: 'endSession',
    value: function endSession() {
      if (this.isSessionActive_) {
        this.endSessionObservable_.fire();
      }
      this.isSessionActive_ = false;
    }

    /**
     * Get the current session state.
     */

  }, {
    key: 'isSessionActive',
    value: function isSessionActive() {
      return this.isSessionActive_;
    }
  }]);

  return VideoSessionManager;
}();

},{"../observable":22}],39:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoplayEntry = exports.Autoplay = exports.AutoplayEvents = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['<i-amphtml-video-mask class="i-amphtml-fill-content" role=button>\n    </i-amphtml-video-mask>'], ['<i-amphtml-video-mask class="i-amphtml-fill-content" role=button>\n    </i-amphtml-video-mask>']),
    _templateObject2 = _taggedTemplateLiteral(['<i-amphtml-video-icon class="amp-video-eq">\n    <div class="amp-video-eq-col">\n      <div class="amp-video-eq-filler"></div>\n      <div class="amp-video-eq-filler"></div>\n    </div>\n  </i-amphtml-video-icon>'], ['<i-amphtml-video-icon class="amp-video-eq">\n    <div class="amp-video-eq-col">\n      <div class="amp-video-eq-filler"></div>\n      <div class="amp-video-eq-filler"></div>\n    </div>\n  </i-amphtml-video-icon>']);

exports.renderInteractionOverlay = renderInteractionOverlay;
exports.renderIcon = renderIcon;

var _videoInterface = require('../../video-interface');

var _positionObserverWorker = require('../position-observer/position-observer-worker');

var _services = require('../../services');

var _videoServiceInterface = require('../video-service-interface');

var _video = require('../../utils/video');

var _log = require('../../log');

var _eventHelper = require('../../event-helper');

var _mode = require('../../mode');

var _service = require('../../service');

var _staticTemplate = require('../../static-template');

var _installAutoplayStyles = require('./install-autoplay-styles');

var _positionObserverImpl = require('../position-observer/position-observer-impl');

var _types = require('../../types');

var _function = require('../../utils/function');

var _dom = require('../../dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
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

/** @private @enum {string} */
var AutoplayEvents = exports.AutoplayEvents = {
  PLAY: 'amp:autoplay',
  PAUSE: 'amp:autopause'
};

/**
 * @param {!Element} node
 * @return {!Element}
 */
function cloneDeep(node) {
  return (0, _log.dev)().assertElement(node.cloneNode( /* deep */true));
}

/**
 * @param {function(!Window, !Element):!Element} renderFn
 * @return {function(!Window, !Element):!Element}
 */
function renderOrClone(renderFn) {
  var seedFn = (0, _function.once)(renderFn);
  return function (win, doc) {
    return cloneDeep(seedFn(win, doc));
  };
}

/**
 * @param {!Window} unusedWin
 * @param {!Element|!Document} elOrDoc
 * @return {!Element}
 */
function renderInteractionOverlay(unusedWin, elOrDoc) {
  var html = (0, _staticTemplate.htmlFor)(elOrDoc);
  return html(_templateObject);
}

/**
 * @param {!Window} win
 * @param {!Element|!Document} elOrDoc
 * @return {!Element}
 */
function renderIcon(win, elOrDoc) {
  var icon = (0, _staticTemplate.htmlFor)(elOrDoc)(_templateObject2);

  // Copy equalizer column 4x and annotate filler positions for animation.
  var firstCol = (0, _log.dev)().assertElement(icon.firstElementChild);
  for (var i = 0; i < 4; i++) {
    var col = cloneDeep(firstCol);
    var fillers = col.children;
    for (var j = 0; j < fillers.length; j++) {
      var filler = fillers[j];
      filler.classList.add('amp-video-eq-' + (i + 1) + '-' + (j + 1));
    }
    icon.appendChild(col);
  }

  // Remove seed column.
  (0, _dom.removeElement)(firstCol);

  if (_services.Services.platformFor(win).isIos()) {
    // iOS is unable to pause hardware accelerated animations.
    icon.setAttribute('unpausable', '');
  }

  return icon;
}

/**
 * @param {!Window} unusedWin
 * @param {!Element|!Document} elOrDoc
 * @return {!Element}
 */
var renderOrCloneInteractionOverlay = renderOrClone(renderInteractionOverlay);

/**
 * @param {!Window} unusedWin
 * @param {!Element|!Document} elOrDoc
 * @return {!Element}
 */
var renderOrCloneIcon = renderOrClone(renderIcon);

/** Manages autoplay video. */

var Autoplay = exports.Autoplay = function () {

  /** @param {!../ampdoc-impl.AmpDoc} ampdoc */
  function Autoplay(ampdoc) {
    var _this = this;

    _classCallCheck(this, Autoplay);

    /** @private @const {!../ampdoc-impl.AmpDoc} */
    this.ampdoc_ = ampdoc;

    /**
     * @return {!../position-observer/position-observer-impl.PositionObserver}
     * @restricted
     */
    this.getPositionObserver_ = (0, _function.once)(function () {
      return _this.installPositionObserver_();
    });

    /** @private @const {!Array<!AutoplayEntry>} */
    this.entries_ = [];

    /**
     * @return {!Promise<boolean>}
     * @private
     */
    this.isSupported_ = (0, _function.once)(function () {
      // Can't destructure as the compiler expects direct member access for
      // `getMode`.
      var win = _this.ampdoc_.win;

      var isLite = (0, _mode.getMode)(win).lite;
      return _video.VideoUtils.isAutoplaySupported(win, /* isLiteMode */isLite);
    });

    (0, _installAutoplayStyles.installAutoplayStylesForDoc)(this.ampdoc_);
  }

  /** @private */


  _createClass(Autoplay, [{
    key: 'installPositionObserver_',
    value: function installPositionObserver_() {
      (0, _positionObserverImpl.installPositionObserverServiceForDoc)(this.ampdoc_);
      // No getter in services.js.
      return (
        /** @type {
         *   !../position-observer/position-observer-impl.PositionObserver
         * } */(0, _service.getServiceForDoc)(this.ampdoc_, 'position-observer')
      );
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @return {!Promise<?AutoplayEntry>} `null` when unsupported.
     */

  }, {
    key: 'register',
    value: function register(video) {
      var _this2 = this;

      // Controls are hidden before support is determined to prevent visual jump
      // for the common case where autoplay is supported.
      if (video.isInteractive()) {
        video.hideControls();
      }

      return this.isSupported_().then(function (isSupported) {
        if (!isSupported) {
          // Disable autoplay
          if (video.isInteractive()) {
            video.showControls();
          }
          return null;
        }
        var entry = AutoplayEntry.create(_this2, video);
        _this2.entries_.push(entry);
        return entry;
      });
    }

    /**
     * @param {!Element} element
     */

  }, {
    key: 'delegate',
    value: function delegate(element) {
      var entry = this.getEntryFor_(element);
      if (!entry) {
        return;
      }
      entry.delegate();
    }

    /**
     * @param {!Element} element
     * @return {?AutoplayEntry}
     * @private
     */

  }, {
    key: 'getEntryFor_',
    value: function getEntryFor_(element) {
      for (var i = 0; i < this.entries_.length; i++) {
        var entry = this.entries_[i];
        if (entry.video.element == element) {
          return entry;
        }
      }
      return null;
    }
  }]);

  return Autoplay;
}();

/** @visibleForTesting */


var AutoplayEntry = exports.AutoplayEntry = function () {

  /**
   * @param {!../ampdoc-impl.AmpDoc} ampdoc
   * @param {
   *   !../position-observer/position-observer-impl.PositionObserver
   * } positionObserver
   * @param {!../../video-interface.VideoOrBaseElementDef} video
   */
  function AutoplayEntry(ampdoc, positionObserver, video) {
    _classCallCheck(this, AutoplayEntry);

    /** @const {!../../video-interface.VideoOrBaseElementDef} */
    this.video = video;

    /** @private {!../ampdoc-impl.AmpDoc} ampdoc} */
    this.ampdoc_ = ampdoc;

    /** @private @const {!AmpElement}  */
    this.element_ = video.element;

    /** @private {boolean} */
    this.isVisible_ = false;

    /** @private {?Array<!UnlistenDef>} */
    this.visibilityUnlisteners_ = [this.observeOn_(positionObserver), this.listenToVisibilityChange_()];

    // Only muted videos are allowed to autoplay
    video.mute();
    video.hideControls();

    this.attachArtifacts_();
  }

  /**
   * @param {!Autoplay} manager
   * @param {!../../video-interface.VideoOrBaseElementDef} video
   */


  _createClass(AutoplayEntry, [{
    key: 'observeOn_',


    /**
     * @param {
     *   !../position-observer/position-observer-impl.PositionObserver
     * } positionObserver
     * @return {!UnlistenDef}
     * @private
     */
    value: function observeOn_(positionObserver) {
      var _this3 = this;

      return positionObserver.observe(this.element_, _positionObserverWorker.PositionObserverFidelity.HIGH, function () {
        return _this3.onPositionChange_();
      });
    }

    /**
     * @return {!UnlistenDef}
     * @private
     */

  }, {
    key: 'listenToVisibilityChange_',
    value: function listenToVisibilityChange_() {
      var _this4 = this;

      return (0, _eventHelper.listen)(this.element_, _videoInterface.VideoEvents.VISIBILITY, function (e) {
        var data = (0, _eventHelper.getData)(e);
        var enforcedByEvent = data && data['visible'];
        if (enforcedByEvent && !_this4.isVisible_) {
          _this4.isVisible_ = enforcedByEvent;
          _this4.trigger_( /* isPlaying */enforcedByEvent);
          return;
        }
        _this4.triggerByVisibility_();
      });
    }

    /**
     * Delegates autoplay so that it's triggered by a different module.
     * @public
     */

  }, {
    key: 'delegate',
    value: function delegate() {
      this.disableTriggerByVisibility_();
      this.video.pause();
    }

    /** @private */

  }, {
    key: 'onPositionChange_',
    value: function onPositionChange_() {
      this.triggerByVisibility_();
    }

    /** @private */

  }, {
    key: 'triggerByVisibility_',
    value: function triggerByVisibility_() {
      var ratio = this.element_.getIntersectionChangeEntry().intersectionRatio;
      var isVisible = (!(0, _types.isFiniteNumber)(ratio) ? 0 : ratio) >= _videoInterface.MIN_VISIBILITY_RATIO_FOR_AUTOPLAY;
      if (this.isVisible_ == isVisible) {
        return;
      }
      this.isVisible_ = isVisible;
      this.trigger_( /* isPlaying */isVisible);
    }

    /**
     * @param {boolean} isPlaying
     * @private
     */

  }, {
    key: 'trigger_',
    value: function trigger_(isPlaying) {
      this.element_.dispatchCustomEvent(isPlaying ? AutoplayEvents.PLAY : AutoplayEvents.PAUSE);
    }

    /** @private */

  }, {
    key: 'attachArtifacts_',
    value: function attachArtifacts_() {
      var _this5 = this;

      // TODO(alanorozco): AD_START, AD_END
      var video = this.video;

      var signals = video.signals();
      var userInteracted = _videoServiceInterface.VideoServiceSignals.USER_INTERACTED;

      if (signals.get(userInteracted) != null) {
        return;
      }

      var win = this.ampdoc_.win;


      var icon = renderOrCloneIcon(win, this.element_);

      video.mutateElement(function () {
        _this5.element_.appendChild(icon);
      });

      var element = video.element;

      var playOrPauseIconAnim = this.playOrPauseIconAnim_.bind(this, icon);

      var unlisteners = [(0, _eventHelper.listen)(element, _videoInterface.VideoEvents.PLAYING, function () {
        return playOrPauseIconAnim(true);
      }), (0, _eventHelper.listen)(element, _videoInterface.VideoEvents.PAUSE, function () {
        return playOrPauseIconAnim(false);
      })];

      signals.whenSignal(userInteracted).then(function () {
        unlisteners.forEach(function (unlisten) {
          return unlisten();
        });
        _this5.onInteraction_();
      });

      if (!this.video.isInteractive()) {
        return;
      }

      var overlay = renderOrCloneInteractionOverlay(win, this.element_);

      (0, _eventHelper.listenOnce)(overlay, 'click', function () {
        return signals.signal(userInteracted);
      });

      video.mutateElement(function () {
        _this5.element_.appendChild(overlay);
      });
    }

    /** @private */

  }, {
    key: 'onInteraction_',
    value: function onInteraction_() {
      var mask = this.element_.querySelector('i-amphtml-video-mask');
      this.disableTriggerByVisibility_();
      if (mask) {
        (0, _dom.removeElement)(mask);
      }
      if (this.video.isInteractive()) {
        this.video.showControls();
      }
      this.video.unmute();
    }

    /** @private */

  }, {
    key: 'disableTriggerByVisibility_',
    value: function disableTriggerByVisibility_() {
      if (!this.visibilityUnlisteners_) {
        return;
      }
      this.visibilityUnlisteners_.forEach(function (unlistener) {
        return unlistener();
      });
      this.visibilityUnlisteners_ = null; // GC
    }

    /**
     * @param {!Element} icon
     * @param {boolean} isPlaying
     * @private
     */

  }, {
    key: 'playOrPauseIconAnim_',
    value: function playOrPauseIconAnim_(icon, isPlaying) {
      this.video.mutateElement(function () {
        return icon.classList.toggle('amp-video-eq-play', isPlaying);
      });
    }
  }], [{
    key: 'create',
    value: function create(manager, video) {
      return new AutoplayEntry(manager.ampdoc_, manager.getPositionObserver_(), video);
    }
  }]);

  return AutoplayEntry;
}();

},{"../../dom":9,"../../event-helper":12,"../../log":18,"../../mode":21,"../../service":32,"../../services":42,"../../static-template":43,"../../types":47,"../../utils/function":51,"../../utils/video":57,"../../video-interface":58,"../position-observer/position-observer-impl":33,"../position-observer/position-observer-worker":34,"../video-service-interface":36,"./install-autoplay-styles":41}],40:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoDocking = exports.Actions = exports.Direction = exports.RelativeY = exports.RelativeX = undefined;

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

// Source for this constant is css/video-docking.css:


var _templateObject = _taggedTemplateLiteral(['\n      <div class="amp-video-docked-shadow" hidden></div>'], ['\n      <div class="amp-video-docked-shadow" hidden></div>']),
    _templateObject2 = _taggedTemplateLiteral(['\n      <div class="i-amphtml-video-docked-overlay" hidden></div>'], ['\n      <div class="i-amphtml-video-docked-overlay" hidden></div>']),
    _templateObject3 = _taggedTemplateLiteral(['\n          <div class="amp-video-docked-controls" hidden>\n            <div class="amp-video-docked-main-button-group">\n              <div class="amp-video-docked-button-group">\n                <div role="button" ref="playButton"\n                    class="amp-video-docked-play"></div>\n                <div role="button" ref="pauseButton"\n                    class="amp-video-docked-pause"></div>\n              </div>\n              <div class="amp-video-docked-button-group">\n                <div role="button" ref="muteButton"\n                    class="amp-video-docked-mute"></div>\n                <div role="button" ref="unmuteButton"\n                    class="amp-video-docked-unmute">\n                </div>\n              </div>\n              <div class="amp-video-docked-button-group">\n                <div role="button" ref="fullscreenButton"\n                    class="amp-video-docked-fullscreen">\n                </div>\n              </div>\n            </div>\n            <div class="amp-video-docked-button-dismiss-group"\n                ref="dismissContainer">\n              <div role="button" ref="dismissButton"\n                  class="amp-video-docked-dismiss"></div>\n            </div>\n          </div>'], ['\n          <div class="amp-video-docked-controls" hidden>\n            <div class="amp-video-docked-main-button-group">\n              <div class="amp-video-docked-button-group">\n                <div role="button" ref="playButton"\n                    class="amp-video-docked-play"></div>\n                <div role="button" ref="pauseButton"\n                    class="amp-video-docked-pause"></div>\n              </div>\n              <div class="amp-video-docked-button-group">\n                <div role="button" ref="muteButton"\n                    class="amp-video-docked-mute"></div>\n                <div role="button" ref="unmuteButton"\n                    class="amp-video-docked-unmute">\n                </div>\n              </div>\n              <div class="amp-video-docked-button-group">\n                <div role="button" ref="fullscreenButton"\n                    class="amp-video-docked-fullscreen">\n                </div>\n              </div>\n            </div>\n            <div class="amp-video-docked-button-dismiss-group"\n                ref="dismissContainer">\n              <div role="button" ref="dismissButton"\n                  class="amp-video-docked-dismiss"></div>\n            </div>\n          </div>']);

exports.isElement = isElement;

var _actionConstants = require('../../action-constants');

var _videoInterface = require('../../video-interface');

var _positionObserverImpl = require('../position-observer/position-observer-impl');

var _positionObserverWorker = require('../position-observer/position-observer-worker');

var _services = require('../../services');

var _dom = require('../../dom');

var _eventHelper = require('../../event-helper');

var _videoDockingCss = require('../../../build/video-docking.css.js');

var _log = require('../../log');

var _object = require('../../utils/object');

var _video = require('../../utils/video');

var _service = require('../../service');

var _staticTemplate = require('../../static-template');

var _styleInstaller = require('../../style-installer');

var _types = require('../../types');

var _math = require('../../utils/math');

var _layoutRect = require('../../layout-rect');

var _function = require('../../utils/function');

var _style = require('../../style');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @private @const {number} */
var MARGIN_MAX = 30;

/** @private {number} */
var MARGIN_AREA_WIDTH_PERC = 0.04;

/** @private @const {number} */
var MIN_WIDTH = 180;

/** @private @const {number} */
var MIN_VIEWPORT_WIDTH = 320;

/** @private @const {number} */
var DOCKING_TIMEOUT = 200;

/** @private @const {number} */
var CONTROLS_TIMEOUT = 1600;

/** @private @const {number} */
var CONTROLS_TIMEOUT_AFTER_IX = 1000;

/** @private @const {number} */
var FLOAT_TOLERANCE = 0.02;

/** @private @const {string} */
var BASE_CLASS_NAME = 'i-amphtml-video-docked';

/** @private @const {number} */
var REVERT_TO_INLINE_RATIO = 0.7;

/** @enum */
var RelativeX = exports.RelativeX = { LEFT: 0, RIGHT: 1 };

/** @enum */
var RelativeY = exports.RelativeY = { TOP: 0, BOTTOM: 1 };

/** @enum */
var Direction = exports.Direction = { UP: 1, DOWN: -1 };

/** @enum {string} */
var Actions = exports.Actions = { DOCK: 'dock', UNDOCK: 'undock' };

/**
 * @struct @typedef {{
 *   video: !../../video-interface.VideoOrBaseElementDef,
 *   target: !DockTargetDef,
 *   step: number,
 *   triggeredDock: boolean,
 * }}
 */
var DockedDef = void 0;

/**
 * @struct @typedef {{
 *   container: !Element,
 *   dismissButton: !Element,
 *   playButton: !Element,
 *   pauseButton: !Element,
 *   muteButton: !Element,
 *   unmuteButton: !Element,
 *   fullscreenButton: !Element,
 *   dismissContainer: !Element,
 * }}
 */
var ControlsDef = void 0;

/** @typedef {{posX: !RelativeX, posY: !RelativeY}|!Element} */
var DockTargetDef = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number,
 *   targetWidth: number,
 *   targetHeight: number,
 *   initialY: number
 * }}
 */
var TargetAreaDef = void 0;

/**
 * @param {number} x
 * @param {number} y
 * @param {number} scale
 * @return {string}
 */
var transform = function transform(x, y, scale) {
  return 'translate(' + x + 'px, ' + y + 'px) scale(' + scale + ')';
};

/**
 * @param {!Element} a
 * @param {!Element} b
 * @private
 */
function swap(a, b) {
  a.setAttribute('hidden', '');
  b.removeAttribute('hidden');
}

/**
 * @param {!Window} win
 * @param {function(...*)} fn
 * @return {function(...*)}
 */
function throttleByAnimationFrame(win, fn) {
  var running = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (running) {
      return;
    }
    running = true;
    win.requestAnimationFrame(function () {
      fn.apply(null, args);
      running = false;
    });
  };
}

/**
 * @param {!MouseEvent|!TouchEvent} e
 * @return {{x: number, y: number}}
 * @private
 */
function pointerCoords(e) {
  var coords = e.touches ? e.touches[0] : e;
  return {
    x: (0, _log.dev)().assertNumber('x' in coords ? coords.x : coords.clientX),
    y: (0, _log.dev)().assertNumber('y' in coords ? coords.y : coords.clientY)
  };
}

/**
 * Maps an interpolation step in [0..1] to its position in a range.
 * @param {number} step
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function mapStep(step, min, max) {
  return (0, _math.mapRange)(step, 0, 1, min, max);
}

/**
 * @param {!Element} element
 * @restricted
 */
function complainAboutPortrait(element) {
  // Constant named `TAG` per lint rules.
  var TAG = element.tagName.toUpperCase();
  var attr = _videoInterface.VideoAttributes.DOCK;
  (0, _log.user)().error(TAG, 'Minimize-to-corner (`' + attr + '`) does not support portrait video.', element);
}

// Function should ideally be in `dom.js`, but moving it causes a bunch of ads
// tests to fail, for some reason.
// TODO(alanorozco): Move.
/**
 * @param {!Object} obj
 * @return {boolean}
 */
function isElement(obj) {
  return obj.nodeType == /* ELEMENT */1;
}

/** Timeout that can be postponed, repeated or cancelled. */

var Timeout = function () {
  /**
   * @param {!Window} win
   * @param {!Function} handler
   */
  function Timeout(win, handler) {
    _classCallCheck(this, Timeout);

    /** @private @const {!../timer-impl.Timer} */
    this.timer_ = _services.Services.timerFor(win);

    /** @private @const {!Function} */
    this.handler_ = handler;

    /** @private {?number|?string} */
    this.id_ = null;
  }

  /**
   * @param {number} time
   * @param {...*} args
   */


  _createClass(Timeout, [{
    key: 'trigger',
    value: function trigger(time) {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this.cancel();
      this.id_ = this.timer_.delay(function () {
        return _this.handler_.apply(null, args);
      }, time);
    }

    /** @public */

  }, {
    key: 'cancel',
    value: function cancel() {
      if (this.id_ !== null) {
        this.timer_.cancel(this.id_);
        this.id_ = null;
      }
    }

    /** @return {boolean} */

  }, {
    key: 'isWaiting',
    value: function isWaiting() {
      return this.id_ !== null;
    }
  }]);

  return Timeout;
}();

/**
 * Manages docking (a.k.a. minimize to corner) for videos that satisfy the
 * {@see ../../video-interface.VideoInterface}.
 */


var VideoDocking = exports.VideoDocking = function () {

  /**
   * @param {!../ampdoc-impl.AmpDoc} ampdoc
   * @param {!../video-service-interface.VideoServiceInterface} manager
   */
  function VideoDocking(ampdoc, manager) {
    var _this2 = this;

    _classCallCheck(this, VideoDocking);

    /** @private @const {!../ampdoc-impl.AmpDoc} */
    this.ampdoc_ = ampdoc;

    /** @private @const */
    this.manager_ = manager;

    /** @private @const {!../viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(ampdoc);

    /** @private {?DockedDef} */
    this.currentlyDocked_ = null;

    /** @private @const {function():!Timeout} */
    this.getDockingTimeout_ = this.lazyTimeout_(function (video) {
      return _this2.onDockingTimeout_(
      /** @type {!../../video-interface.VideoOrBaseElementDef} */video);
    });

    /** @private @const {function():!Timeout} */
    this.getHideControlsTimeout_ = this.lazyTimeout_(function () {
      return _this2.hideControls_( /* respectSticky */true);
    });

    /** @private @const {function():!Timeout} */
    this.getUndockingTimeout_ = this.lazyTimeout_(function (video) {
      return _this2.undock_(
      /** @type {!../../video-interface.VideoOrBaseElementDef} */video);
    });

    /** @private {!RelativeX} */
    // Overriden when user drags the video to a corner.
    // Y-corner is determined based on scroll direction.
    this.preferredCornerX_ = (0, _dom.isRTL)(this.getDoc_()) ? RelativeX.LEFT : RelativeX.RIGHT;

    /**
     * Returns an element representing a shadow under the docked video.
     * Alternatively, we could use box-shadow on the video element, but in
     * order to animate it without jank we have to use an opacity transition.
     * A separate layer also has the 1d benefit that authors can override its
     * box-shadow value or any other styling without handling the transition
     * themselves.
     * @private @const {function():!Element}
     */
    this.getShadowLayer_ = (0, _function.once)(function () {
      return _this2.append_((0, _staticTemplate.htmlFor)(_this2.getDoc_())(_templateObject));
    });

    /**
     * Returns an overlay to be used to capture different user events.
     * @private @const {function():!Element}
     */
    this.getOverlay_ = (0, _function.once)(function () {
      return _this2.installOverlay_((0, _staticTemplate.htmlFor)(_this2.getDoc_())(_templateObject2));
    });

    /** @private @const {function():!ControlsDef} */
    this.getControls_ = (0, _function.once)(function () {
      return _this2.installControls_(
      // This currently bloats the resulting binary with
      // 1. some whitespace and 2. duplicate declarations of equal strings.
      // Upcoming fixes: #14657, #14658.
      // TODO(alanorozco): Cleanup markup for readability once fixes land.
      (0, _staticTemplate.htmlFor)(_this2.getDoc_())(_templateObject3));
    });

    /** @private {?../../video-interface.VideoOrBaseElementDef} */
    this.lastDismissed_ = null;

    /** @private {?RelativeY} */
    this.lastDismissedPosY_ = null;

    /**
     * Unlisteners for the currently minimized video.
     * @private {!Array<!UnlistenDef>}
     */
    this.videoUnlisteners_ = [];

    /**
     * Memoizes x, y and scale to prevent useless mutations.
     * @private {?{x: number, y: number, scale: number}}
     */
    this.placedAt_ = null;

    /** @private {?{width: number, height: number}} */
    this.sizedAt_ = null;

    /** @private {?Direction} */
    this.scrollDirection_ = null;

    /** @private {number} */
    this.lastScrollTop_ = this.viewport_.getScrollTop();

    /** @private {boolean} */
    this.stickyControls_ = false;

    /** @private {boolean} */
    this.isDragging_ = false;

    /** @private {!Array<!../../video-interface.VideoOrBaseElementDef>} */
    this.observed_ = [];

    /** @private @const {!function()} */
    // Lazily invoked.
    this.install_ = (0, _function.once)(function () {
      _this2.viewport_.onScroll(throttleByAnimationFrame(_this2.ampdoc_.win, function () {
        return _this2.updateScroll_();
      }));

      _this2.viewport_.onResize(function () {
        return _this2.updateAllOnResize_();
      });

      _this2.installStyles_();
    });

    /** @private @const {function():?Element} */
    this.getSlot_ = (0, _function.once)(function () {
      return _this2.querySlot_();
    });

    /** @private */
    this.hideControlsOnTapOutsideOnce_ = (0, _function.once)(function () {
      return _this2.hideControlsOnTapOutside_();
    });
  }

  /**
   * @return {?Element}
   * @private
   */


  _createClass(VideoDocking, [{
    key: 'querySlot_',
    value: function querySlot_() {
      var root = this.ampdoc_.getRootNode();

      // For consistency always honor the dock attribute on the first el in page.
      var video = root.querySelector('[dock]');

      (0, _log.dev)().assertElement(video);

      (0, _log.user)().assert(video.signals().get(_videoInterface.VideoEvents.REGISTERED), '`dock` attribute can only be set on video components.');

      var slotSelector = video.getAttribute('dock').trim();

      if (slotSelector == '') {
        return null;
      }

      var el = root.querySelector(slotSelector);

      if (el) {
        (0, _log.user)().assert(el.tagName.toLowerCase() == 'amp-layout', 'Dock slot must be an <amp-layout> element.');
      }

      return el;
    }

    /** @private */

  }, {
    key: 'installStyles_',
    value: function installStyles_() {
      (0, _styleInstaller.installStylesForDoc)(this.ampdoc_, _videoDockingCss.cssText,
      /* callback */null,
      /* opt_isRuntimeCss */false,
      /* opt_ext */'amp-video-docking');
    }

    /**
     * @param {function(...*)} fn
     * @return {function():!Timeout}
     * @private
     */

  }, {
    key: 'lazyTimeout_',
    value: function lazyTimeout_(fn) {
      var _this3 = this;

      return (0, _function.once)(function () {
        return new Timeout(_this3.ampdoc_.win, fn);
      });
    }

    /** @private */

  }, {
    key: 'updateAllOnResize_',
    value: function updateAllOnResize_() {
      var _this4 = this;

      this.observed_.forEach(function (video) {
        return _this4.updateOnResize_(video);
      });
    }

    /** @param {!../../video-interface.VideoOrBaseElementDef} video */

  }, {
    key: 'register',
    value: function register(video) {
      var _this5 = this;

      this.install_();

      var element = video.element;

      var fidelity = _positionObserverWorker.PositionObserverFidelity.HIGH;
      this.getPositionObserver_().observe(element, fidelity, function () {
        return _this5.updateOnPositionChange_(video);
      });
      this.observed_.push(video);
    }

    /** @private */

  }, {
    key: 'updateScroll_',
    value: function updateScroll_() {
      var scrollTop = this.viewport_.getScrollTop();
      var scrollDirection = scrollTop > this.lastScrollTop_ ? Direction.UP : Direction.DOWN;
      this.scrollDirection_ = scrollDirection;
      this.lastScrollTop_ = scrollTop;
    }

    /**
     * @return {!Document}
     * @private
     */

  }, {
    key: 'getDoc_',
    value: function getDoc_() {
      return (/** @type {!Document} */this.ampdoc_.getRootNode()
      );
    }

    /**
     * @param {!Element} element
     * @return {!Element}
     * @private
     */

  }, {
    key: 'append_',
    value: function append_(element) {
      var root = this.getDoc_().body || this.getDoc_();
      return (0, _log.dev)().assertElement(root.appendChild(element));
    }

    /**
     * @param {!Element} overlay
     * * @return {!Element}
     * @private
     */

  }, {
    key: 'installOverlay_',
    value: function installOverlay_(overlay) {
      this.append_(overlay);
      return this.showControlsOnTap_(this.addDragListeners_(overlay));
    }

    /** @private */

  }, {
    key: 'enterFullscreen_',
    value: function enterFullscreen_() {
      var video = this.getDockedVideo_();
      video.fullscreenEnter();
    }

    /**
     * @param {!Element} element
     * @return {!Element}
     * @private
     */

  }, {
    key: 'showControlsOnTap_',
    value: function showControlsOnTap_(element) {
      var _this6 = this;

      (0, _eventHelper.listen)(element, 'mouseup', function () {
        if (_this6.isDragging_) {
          return;
        }
        var video = _this6.getDockedVideo_();

        var _getControls_ = _this6.getControls_(),
            container = _getControls_.container,
            playButton = _getControls_.playButton,
            pauseButton = _getControls_.pauseButton,
            muteButton = _getControls_.muteButton,
            unmuteButton = _getControls_.unmuteButton;

        var overlay = _this6.getOverlay_();

        container.removeAttribute('hidden');
        container.classList.add('amp-video-docked-controls-shown');
        overlay.classList.add('amp-video-docked-controls-bg');

        if (_this6.isPlaying_()) {
          swap(playButton, pauseButton);
        } else {
          swap(pauseButton, playButton);
        }

        if (_this6.manager_.isMuted(
        /** @type {!../../video-interface.VideoInterface} */video)) {
          swap(muteButton, unmuteButton);
        } else {
          swap(unmuteButton, muteButton);
        }

        _this6.hideControlsOnTimeout_();
      });
      return element;
    }

    /** @private */

  }, {
    key: 'hideControlsOnTapOutside_',
    value: function hideControlsOnTapOutside_() {
      var _this7 = this;

      (0, _eventHelper.listen)(this.ampdoc_.getRootNode(), 'mousedown', function (e) {
        if (!_this7.currentlyDocked_) {
          return;
        }
        if (_this7.isControlsEventTarget_((0, _log.dev)().assertElement(e.target))) {
          return;
        }
        _this7.hideControls_( /* respectSticky */true);
      });
    }

    /**
     * @param {!Element} element
     * @return {!Element}
     * @private
     */

  }, {
    key: 'addDragListeners_',
    value: function addDragListeners_(element) {
      var _this8 = this;

      var handler = function handler(e) {
        return _this8.drag_( /** @type {!TouchEvent} */e);
      };

      (0, _eventHelper.listen)(element, 'touchstart', handler);
      (0, _eventHelper.listen)(element, 'mousedown', handler);

      return element;
    }

    /**
     * @param {!Element} container
     * @return {!ControlsDef}
     * @private
     */

  }, {
    key: 'installControls_',
    value: function installControls_(container) {
      var _this9 = this;

      var controls = (0, _staticTemplate.htmlRefs)(container);

      var dismissButton = controls.dismissButton,
          playButton = controls.playButton,
          pauseButton = controls.pauseButton,
          unmuteButton = controls.unmuteButton,
          muteButton = controls.muteButton,
          fullscreenButton = controls.fullscreenButton;


      Object.assign(controls, { container: container });

      this.listenWhenNotDragging_(dismissButton, 'click', function () {
        _this9.dismissOnTap_();
      });

      this.listenWhenNotDragging_(playButton, 'click', function () {
        _this9.getDockedVideo_().play( /* auto */false);
      });

      this.listenWhenNotDragging_(pauseButton, 'click', function () {
        _this9.getDockedVideo_().pause();
      });

      this.listenWhenNotDragging_(muteButton, 'click', function () {
        _this9.getDockedVideo_().mute();
      });

      this.listenWhenNotDragging_(unmuteButton, 'click', function () {
        _this9.getDockedVideo_().unmute();
      });

      this.listenWhenNotDragging_(fullscreenButton, 'click', function () {
        _this9.enterFullscreen_();
      });

      (0, _eventHelper.listen)(container, 'mouseup', function () {
        return _this9.hideControlsOnTimeout_(CONTROLS_TIMEOUT_AFTER_IX);
      });

      this.addDragListeners_(container);
      this.append_(container);

      return (/** @type {!ControlsDef} */controls
      );
    }

    /**
     * @param {!Element} element
     * @param {string} eventType
     * @param {function(!Event)} handler
     */

  }, {
    key: 'listenWhenNotDragging_',
    value: function listenWhenNotDragging_(element, eventType, handler) {
      var _this10 = this;

      (0, _eventHelper.listen)(element, eventType, function (e) {
        if (_this10.isDragging_) {
          return;
        }
        handler(e);
      });
    }

    /** @private */

  }, {
    key: 'dismissOnTap_',
    value: function dismissOnTap_() {
      this.undock_(this.getDockedVideo_());
    }

    /**
     * @return {!../../video-interface.VideoOrBaseElementDef}
     * @private
     */

  }, {
    key: 'getDockedVideo_',
    value: function getDockedVideo_() {
      return (0, _log.dev)().assert(this.currentlyDocked_).video;
    }

    /**
     * @return {!PositionObserver}
     * @private
     */

  }, {
    key: 'getPositionObserver_',
    value: function getPositionObserver_() {
      (0, _positionObserverImpl.installPositionObserverServiceForDoc)(this.ampdoc_);

      // No getter in services.js.
      return (/** @type {!PositionObserver} */(0, _service.getServiceForDoc)(this.ampdoc_, 'position-observer')
      );
    }

    /**
     * Reconciles the state of a docked or potentially dockable video when
     * the viewport/position changes.
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @return {?DockTargetDef}
     * @private
     */

  }, {
    key: 'getTargetFor_',
    value: function getTargetFor_(video) {
      if (this.isDragging_ || this.ignoreDueToSize_(video) || this.ignoreBecauseAnotherDocked_(video) || this.ignoreDueToNotPlayingManually_(video) || this.undockBecauseVisible_(video)) {
        return null;
      }
      if (this.canUpdateFromSlot_(video)) {
        return this.getSlot_();
      }
      var posY = this.maybeGetRelativeY_(video);
      if (posY === null) {
        return posY;
      }
      return { posY: posY, posX: this.getRelativeX_() };
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     * @private
     */

  }, {
    key: 'canUpdateFromSlot_',
    value: function canUpdateFromSlot_(video) {
      if (!this.slotHasDimensions_()) {
        return false;
      }
      var relativeY = this.getSlotRelativeY_();
      var element = video.element;
      var _element$getIntersect = element.getIntersectionChangeEntry().intersectionRect,
          top = _element$getIntersect.top,
          bottom = _element$getIntersect.bottom;

      var _getFixedSlotLayoutBo = this.getFixedSlotLayoutBox_(),
          slotTop = _getFixedSlotLayoutBo.top,
          slotHeight = _getFixedSlotLayoutBo.height;

      var slotBottom = this.viewport_.getSize().height - slotHeight - slotTop;
      if (relativeY == RelativeY.TOP) {
        return top <= slotTop;
      }
      return bottom >= slotBottom;
    }

    /**
     * @return {!../../layout-rect.LayoutRectDef}
     * @private
     */

  }, {
    key: 'getFixedSlotLayoutBox_',
    value: function getFixedSlotLayoutBox_() {
      var rect = (0, _log.dev)().assertElement(this.getSlot_()).getLayoutBox();
      var dy = -this.viewport_.getScrollTop();
      return (0, _layoutRect.moveLayoutRect)(rect, /* dx */0, dy);
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'slotHasDimensions_',
    value: function slotHasDimensions_() {
      var el = this.getSlot_();
      if (!el) {
        return false;
      }

      var _getFixedSlotLayoutBo2 = this.getFixedSlotLayoutBox_(),
          width = _getFixedSlotLayoutBo2.width,
          height = _getFixedSlotLayoutBo2.height;

      return width > 0 && height > 0;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'updateOnResize_',
    value: function updateOnResize_(video) {
      var target = this.getTargetFor_(video);
      if (!target) {
        return;
      }
      this.dock_(video, target);
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'updateOnPositionChange_',
    value: function updateOnPositionChange_(video) {
      var target = this.getTargetFor_(video);
      if (!target) {
        return;
      }
      this.dockOnPositionChange_(video, target);
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {number=} ratio
     * @param {number=} timeout
     * @return {boolean}
     */

  }, {
    key: 'undockBecauseVisible_',
    value: function undockBecauseVisible_(video) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      var element = video.element;

      if (this.currentlyDocked_ && this.isVisible_(element, ratio)) {
        if (!this.getUndockingTimeout_().isWaiting()) {
          this.getUndockingTimeout_().trigger(timeout, video);
        }
        return true;
      }
      this.getUndockingTimeout_().cancel();
      return false;
    }

    /**
     * @param  {!../../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     */

  }, {
    key: 'ignoreDueToNotPlayingManually_',
    value: function ignoreDueToNotPlayingManually_(video) {
      return !this.currentlyDocked_ && !this.isPlaying_(video);
    }

    /**
     * @param  {!../../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     */

  }, {
    key: 'ignoreBecauseAnotherDocked_',
    value: function ignoreBecauseAnotherDocked_(video) {
      return !!this.currentlyDocked_ && !this.isCurrentlyDocked_(video);
    }

    /**
     * @param  {!../../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     */

  }, {
    key: 'ignoreDueToSize_',
    value: function ignoreDueToSize_(video) {
      var _video$getLayoutBox = video.getLayoutBox(),
          width = _video$getLayoutBox.width,
          height = _video$getLayoutBox.height;

      if (width / height < 1) {
        complainAboutPortrait(video.element);
        return true;
      }
      if (this.getAreaWidth_() < MIN_VIEWPORT_WIDTH) {
        return true;
      }
      return false;
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getTopEdge_',
    value: function getTopEdge_() {
      return 0;
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getBottomEdge_',
    value: function getBottomEdge_() {
      return this.viewport_.getSize().height;
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getLeftEdge_',
    value: function getLeftEdge_() {
      return 0;
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getRightEdge_',
    value: function getRightEdge_() {
      return this.viewport_.getSize().width;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @return {?RelativeY}
     * @private
     */

  }, {
    key: 'maybeGetRelativeY_',
    value: function maybeGetRelativeY_(video) {
      if (this.slotHasDimensions_()) {
        return null;
      }
      if (this.isCurrentlyDocked_(video)) {
        var posY = (0, _log.dev)().assert(this.currentlyDocked_).target.posY;

        return (/** @type {!RelativeY} */(0, _log.dev)().assertNumber(posY)
        );
      }
      var element = video.element;
      var _element$getIntersect2 = element.getIntersectionChangeEntry().intersectionRect,
          top = _element$getIntersect2.top,
          bottom = _element$getIntersect2.bottom;

      if (top <= this.getTopEdge_() && this.scrollDirection_ == Direction.UP) {
        return RelativeY.TOP;
      }
      if (bottom >= this.getBottomEdge_() && this.scrollDirection_ == Direction.DOWN) {
        return RelativeY.BOTTOM;
      }
      return null;
    }

    /**
     * @return {!RelativeX}
     * @private
     */

  }, {
    key: 'getRelativeX_',
    value: function getRelativeX_() {
      return this.preferredCornerX_;
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getMargin_',
    value: function getMargin_() {
      return Math.min(MARGIN_MAX, MARGIN_AREA_WIDTH_PERC * this.getAreaWidth_());
    }

    /**
     * @return {number}
     * @private
     */

  }, {
    key: 'getAreaWidth_',
    value: function getAreaWidth_() {
      return this.getRightEdge_() - this.getLeftEdge_();
    }

    /**
     * @param {?../../video-interface.VideoOrBaseElementDef} optVideo
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isPlaying_',
    value: function isPlaying_() {
      var optVideo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var video = /** @type {!../../video-interface.VideoInterface} */optVideo || this.getDockedVideo_();
      return this.manager_.getPlayingState(video) == _videoInterface.PlayingStates.PLAYING_MANUAL;
    }

    /**
     * @param {number} dirX
     * @param {number} dirY
     * @private
     */

  }, {
    key: 'dismiss_',
    value: function dismiss_() {
      var dirX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var dirY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var video = this.getDockedVideo_();
      var posY = this.currentlyDocked_.target.posY;

      video.pause();
      this.lastDismissed_ = video;
      this.lastDismissedPosY_ = posY || null;
      this.undock_(video, dirX, dirY);
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'currentPositionMatchesScroll_',
    value: function currentPositionMatchesScroll_() {
      if (!this.currentlyDocked_) {
        return false;
      }
      if (this.isDockedToSlot_()) {
        return this.positionMatchesScroll_(this.getSlotRelativeY_());
      }
      if (this.currentlyDocked_.target.posY == null) {
        return false;
      }
      return this.positionMatchesScroll_(this.currentlyDocked_.target.posY);
    }

    /**
     * @return {!RelativeY}
     * @private
     */

  }, {
    key: 'getSlotRelativeY_',
    value: function getSlotRelativeY_() {
      var _getFixedSlotLayoutBo3 = this.getFixedSlotLayoutBox_(),
          top = _getFixedSlotLayoutBo3.top,
          height = _getFixedSlotLayoutBo3.height;

      var vh = this.viewport_.getSize().height;
      var bottom = vh - height - top;
      return bottom > top ? RelativeY.TOP : RelativeY.BOTTOM;
    }

    /**
     * @param {!RelativeY} posY
     * @return {boolean}
     * @private
     */

  }, {
    key: 'positionMatchesScroll_',
    value: function positionMatchesScroll_(posY) {
      var direction = this.scrollDirection_;
      return posY == RelativeY.TOP && direction == Direction.UP || posY == RelativeY.BOTTOM && direction == Direction.DOWN;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!DockTargetDef} target
     * @private
     */

  }, {
    key: 'dockOnPositionChange_',
    value: function dockOnPositionChange_(video, target) {
      if (this.ignoreDueToDismissal_(video)) {
        return;
      }

      var step = this.calculateStep_(video.element, target);
      if (this.ignoreDueToTransitionEnd_(step)) {
        return;
      }

      this.dock_(video, target, step);

      this.getDockingTimeout_().trigger(DOCKING_TIMEOUT, video);
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!DockTargetDef} target
     * @param {?number=} opt_step
     * @private
     */

  }, {
    key: 'dock_',
    value: function dock_(video, target) {
      var opt_step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var step = (0, _types.isFiniteNumber)(opt_step) ? (0, _log.dev)().assertNumber(opt_step) : this.calculateStep_(video.element, target);

      if (step < 0.01) {
        return;
      }

      if (step >= REVERT_TO_INLINE_RATIO && this.currentlyDocked_ && !this.currentlyDocked_.triggeredDock) {
        this.trigger_(video, Actions.DOCK);
        this.currentlyDocked_.triggeredDock = true;
      }

      // Component background is now visible, so hide the poster for the Android
      // workaround so authors can style the component container as they like.
      // (see `AmpVideo#createPosterForAndroidBug_`).
      this.removePosterForAndroidBug_(video.element);

      var _getDims_ = this.getDims_(video, target, step),
          x = _getDims_.x,
          y = _getDims_.y,
          scale = _getDims_.scale;

      video.hideControls();
      this.placeAt_(video, x, y, scale, step);
      this.setCurrentlyDocked_(video, target, step);
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!Actions} action
     * @private
     */

  }, {
    key: 'trigger_',
    value: function trigger_(video, action) {
      var trust = _actionConstants.ActionTrust.LOW;
      var event = (0, _eventHelper.createCustomEvent)(this.ampdoc_.win,
      /** @type {string} */action, /* detail */(0, _object.dict)({}));
      var actions = _services.Services.actionServiceForDoc(this.ampdoc_);
      actions.trigger(video.element, action, event, trust);
    }

    /**
     * @param  {!../../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     * @private
     */

  }, {
    key: 'ignoreDueToDismissal_',
    value: function ignoreDueToDismissal_(video) {
      if (this.lastDismissed_ != video) {
        return false;
      }
      if (this.lastDismissedPosY_ !== null && !this.positionMatchesScroll_(this.lastDismissedPosY_)) {
        return false;
      }
      if (this.isVisible_(video.element, FLOAT_TOLERANCE)) {
        this.resetDismissed_();
      }
      return true;
    }

    /** @private */

  }, {
    key: 'resetDismissed_',
    value: function resetDismissed_() {
      this.lastDismissed_ = null;
      this.lastDismissedPosY_ = null;
    }

    /**
     * Prevents jump when the transition was timed out before user finished
     * scrolling component out of view.
     * @param {number} step
     * @return {boolean}
     */

  }, {
    key: 'ignoreDueToTransitionEnd_',
    value: function ignoreDueToTransitionEnd_(step) {
      return this.hasTransitionCompleted_(step) && this.currentPositionMatchesScroll_();
    }

    /**
     * @param {!AmpElement} element
     * @param {!DockTargetDef} target
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateStep_',
    value: function calculateStep_(element, target) {
      // Aggressively reduce ratio to prevent covering vertical space.
      var ratio = this.calculateIntersectionRatio_(element, target);
      return 1 - Math.pow(ratio, 3);
    }

    /**
     * @param {!AmpElement} element
     * @param {?DockTargetDef=} target
     * @return {number}
     * @private
     */

  }, {
    key: 'calculateIntersectionRatio_',
    value: function calculateIntersectionRatio_(element) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (target == null || !isElement(target)) {
        return element.getIntersectionChangeEntry().intersectionRatio;
      }

      var _element$getLayoutBox = element.getLayoutBox(),
          top = _element$getLayoutBox.top,
          bottom = _element$getLayoutBox.bottom,
          height = _element$getLayoutBox.height;

      var _getSlot_$getLayoutBo = this.getSlot_().getLayoutBox(),
          slotTop = _getSlot_$getLayoutBo.top,
          slotBottom = _getSlot_$getLayoutBo.bottom;

      if (this.getSlotRelativeY_() == RelativeY.TOP) {
        return (bottom - Math.max(top, slotTop)) / height;
      } else {
        return (slotBottom - top) / height;
      }
    }

    /**
     * @param {number} step
     * @return {number}
     */

  }, {
    key: 'calculateTransitionDuration_',
    value: function calculateTransitionDuration_(step) {
      var maxAutoTransitionDurationMs = 500;
      if (!this.currentlyDocked_) {
        // Don't animate first frame. Browsers sometimes behave weirdly and use
        // a stale transform value, thus causing it to visually jump.
        return 0;
      }
      var remaining = Math.abs(step - this.currentlyDocked_.step);
      return remaining * maxAutoTransitionDurationMs;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @param {number} scale
     * @return {boolean}
     */

  }, {
    key: 'alreadyPlacedAt_',
    value: function alreadyPlacedAt_(x, y, scale) {
      return !!this.placedAt_ && this.placedAt_.x == x && this.placedAt_.y == y && this.placedAt_.scale == scale;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {number} x
     * @param {number} y
     * @param {number} scale
     * @param {number} step in [0..1]
     * @param {?number} optTransitionDurationMs
     * @private
     */

  }, {
    key: 'placeAt_',
    value: function placeAt_(video, x, y, scale, step) {
      var optTransitionDurationMs = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

      if (this.alreadyPlacedAt_(x, y, scale)) {
        return;
      }

      var transitionDurationMs = optTransitionDurationMs ? (0, _log.dev)().assertNumber(optTransitionDurationMs) : this.calculateTransitionDuration_(step);

      var _video$getLayoutBox2 = video.getLayoutBox(),
          width = _video$getLayoutBox2.width,
          height = _video$getLayoutBox2.height;

      this.placedAt_ = { x: x, y: y, scale: scale };

      var transitionTiming =
      // Auto-transitions are supposed to smooth-out PositionObserver
      // frequency, so it makes sense to use 'linear'. When the transition
      // duration is otherwise larger, 'ease-in' looks much nicer.
      transitionDurationMs > 200 ? 'ease-in' : 'linear';

      var positioningStyles = {
        'transform': transform(x, y, scale),
        'transition-duration': transitionDurationMs + 'ms',
        'transition-timing-function': transitionTiming
      };

      if (this.boxNeedsSizing_(width, height)) {
        // Setting explicit dimensions is needed to match the video's aspect
        // ratio. However, we only do this once to prevent jank in subsequent
        // frames.
        Object.assign(positioningStyles, {
          'width': (0, _style.px)(width),
          'height': (0, _style.px)(height)
        });
      }

      var internalElement = (0, _video.getInternalVideoElementFor)(video.element);
      var shadowLayer = this.getShadowLayer_();
      var overlay = this.getOverlay_();

      var _getControls_2 = this.getControls_(),
          controls = _getControls_2.container,
          dismissContainer = _getControls_2.dismissContainer;

      video.mutateElement(function () {
        internalElement.classList.add(BASE_CLASS_NAME);
        shadowLayer.removeAttribute('hidden');
        overlay.removeAttribute('hidden');
        (0, _style.setImportantStyles)(internalElement, positioningStyles);
        (0, _style.setImportantStyles)(shadowLayer, positioningStyles);
        (0, _style.setImportantStyles)(overlay, positioningStyles);
        (0, _style.setImportantStyles)(shadowLayer, {
          'opacity': step
        });
        var halfScale = scale / 2;
        var centerX = x + width * halfScale;
        var centerY = y + height * halfScale;
        (0, _style.setImportantStyles)(controls, {
          'transform': (0, _style.translate)(centerX, centerY)
        });
        var dismissMargin = 8;
        var dismissWidth = 40;
        var dismissX = width * halfScale - dismissMargin - dismissWidth;
        var dismissY = -(height * halfScale - dismissMargin - dismissWidth);
        (0, _style.setImportantStyles)(dismissContainer, {
          'transform': (0, _style.translate)(dismissX, dismissY)
        });
      });
    }

    /**
     * @param  {number} width
     * @param  {number} height
     * @return {boolean}
     * @private
     */

  }, {
    key: 'boxNeedsSizing_',
    value: function boxNeedsSizing_(width, height) {
      var needsSizing = !this.sizedAt_ || this.sizedAt_.width != width || this.sizedAt_.height != height;
      if (needsSizing) {
        this.sizedAt_ = { width: width, height: height };
      }
      return needsSizing;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @return {boolean}
     */

  }, {
    key: 'isCurrentlyDocked_',
    value: function isCurrentlyDocked_(video) {
      return !!this.currentlyDocked_ && this.currentlyDocked_.video == video;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!DockTargetDef} target
     * @param {number} step
     */

  }, {
    key: 'setCurrentlyDocked_',
    value: function setCurrentlyDocked_(video, target, step) {
      if (!this.isCurrentlyDocked_(video)) {
        this.updateControlsBasedOn_(video.element);
      }

      var _ref = this.currentlyDocked_ || { triggeredDock: false },
          triggeredDock = _ref.triggeredDock;

      this.currentlyDocked_ = { video: video, target: target, step: step, triggeredDock: triggeredDock };

      this.hideControlsOnTapOutsideOnce_();
    }

    /**
     * @param {!Element} video
     * @private
     */

  }, {
    key: 'updateControlsBasedOn_',
    value: function updateControlsBasedOn_(video) {
      var _this11 = this;

      while (this.videoUnlisteners_.length) {
        this.videoUnlisteners_.pop().call();
      }
      this.videoUnlisteners_ = [(0, _eventHelper.listen)(video, _videoInterface.VideoEvents.PLAYING, function () {
        return _this11.onPlay_();
      }), (0, _eventHelper.listen)(video, _videoInterface.VideoEvents.PAUSE, function () {
        return _this11.onPause_();
      }), (0, _eventHelper.listen)(video, _videoInterface.VideoEvents.MUTED, function () {
        return _this11.onMute_();
      }), (0, _eventHelper.listen)(video, _videoInterface.VideoEvents.UNMUTED, function () {
        return _this11.onUnmute_();
      })];
    }

    /** @private */

  }, {
    key: 'onPlay_',
    value: function onPlay_() {
      var _getControls_3 = this.getControls_(),
          playButton = _getControls_3.playButton,
          pauseButton = _getControls_3.pauseButton;

      this.stickyControls_ = false;
      swap(playButton, pauseButton);
    }

    /** @private */

  }, {
    key: 'onPause_',
    value: function onPause_() {
      var _getControls_4 = this.getControls_(),
          pauseButton = _getControls_4.pauseButton,
          playButton = _getControls_4.playButton;

      this.stickyControls_ = true;
      swap(pauseButton, playButton);
    }

    /** @private */

  }, {
    key: 'onMute_',
    value: function onMute_() {
      var _getControls_5 = this.getControls_(),
          muteButton = _getControls_5.muteButton,
          unmuteButton = _getControls_5.unmuteButton;

      swap(muteButton, unmuteButton);
    }

    /** @private */

  }, {
    key: 'onUnmute_',
    value: function onUnmute_() {
      var _getControls_6 = this.getControls_(),
          unmuteButton = _getControls_6.unmuteButton,
          muteButton = _getControls_6.muteButton;

      swap(unmuteButton, muteButton);
    }

    /**
     * @param {number} offsetX
     * @param {number} offsetY
     * @private
     */

  }, {
    key: 'offset_',
    value: function offset_(offsetX, offsetY) {
      var video = this.getDockedVideo_();
      var target = this.currentlyDocked_.target;


      var step = 1;

      var _getDims_2 = this.getDims_(video, target, step),
          x = _getDims_2.x,
          y = _getDims_2.y,
          scale = _getDims_2.scale;

      this.placeAt_(video, x + offsetX, y + offsetY, scale, step,
      /* transitionDurationMs */0);
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @private
     */

  }, {
    key: 'onDockingTimeout_',
    value: function onDockingTimeout_(video) {
      if (this.isDragging_ || this.ignoreBecauseAnotherDocked_(video) || !this.currentlyDocked_ || !this.currentPositionMatchesScroll_() && this.undockBecauseVisible_(video, REVERT_TO_INLINE_RATIO, /* timeout */50)) {
        return;
      }

      var _dev$assert = (0, _log.dev)().assert(this.currentlyDocked_),
          target = _dev$assert.target;

      this.dock_(video, target, /* step */1);
    }

    /**
     * @param {!AmpElement} element
     * @param {number=} minRatio
     * @return {boolean}
     */

  }, {
    key: 'isVisible_',
    value: function isVisible_(element) {
      var minRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var target = this.slotHasDimensions_() ? this.getSlot_() : null;
      var intersectionRatio = this.calculateIntersectionRatio_(element, target);
      return intersectionRatio > minRatio - FLOAT_TOLERANCE;
    }

    /**
     * @param {number} amount
     * @return {boolean}
     * @private
     */

  }, {
    key: 'hasTransitionCompleted_',
    value: function hasTransitionCompleted_() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      return !!this.currentlyDocked_ && this.currentlyDocked_.step >= amount - FLOAT_TOLERANCE;
    }

    /**
     * @param {!MouseEvent|!TouchEvent} e
     * @private
     */

  }, {
    key: 'drag_',
    value: function drag_(e) {
      var _this12 = this;

      if (!this.currentlyDocked_) {
        return;
      }

      if (this.isDockedToSlot_()) {
        return;
      }

      // Don't allow dragging videos that are too early in their transition phase.
      // This allows the user to keep scrolling while touching the inline/almost
      // inline video area.
      if (!this.hasTransitionCompleted_(0.75)) {
        return;
      }

      var _pointerCoords = pointerCoords(e),
          initialX = _pointerCoords.x,
          initialY = _pointerCoords.y;

      var offset = { x: 0, y: 0 };
      var _currentlyDocked_$tar = this.currentlyDocked_.target,
          currentPosX = _currentlyDocked_$tar.posX,
          currentPosY = _currentlyDocked_$tar.posY;


      var onDragMove = throttleByAnimationFrame(this.ampdoc_.win, function (e) {
        return _this12.onDragMove_(
        /** @type {!TouchEvent|!MouseEvent} */e, currentPosX, currentPosY, initialX, initialY, offset);
      });

      var onDragEnd = function onDragEnd() {
        return _this12.onDragEnd_(unlisteners, offset);
      };

      var root = this.ampdoc_.getRootNode();
      var unlisteners = [this.disableScroll_(), this.disableUserSelect_(), this.workaroundWebkitDragAndScrollIssue_(), (0, _eventHelper.listen)(root, 'touchmove', onDragMove), (0, _eventHelper.listen)(root, 'mousemove', onDragMove), (0, _eventHelper.listenOnce)(root, 'touchend', onDragEnd), (0, _eventHelper.listenOnce)(root, 'mouseup', onDragEnd)];
    }

    /**
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isDockedToSlot_',
    value: function isDockedToSlot_() {
      if (!this.currentlyDocked_) {
        return false;
      }
      return isElement(this.currentlyDocked_.target);
    }

    /**
     * @return {!UnlistenDef}
     * @private
     */

  }, {
    key: 'disableUserSelect_',
    value: function disableUserSelect_() {
      var docEl = (0, _log.dev)().assertElement(this.getDoc_().documentElement);
      var disabledClassName = 'i-amphtml-select-disabled';
      docEl.classList.add(disabledClassName);
      return function () {
        return docEl.classList.remove(disabledClassName);
      };
    }

    /**
     * @return {!UnlistenDef}
     * @private
     */

  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.viewport_.disableScroll();
      return this.viewport_.resetScroll.bind(this.viewport_);
    }

    /**
     * @param {!MouseEvent|!TouchEvent} e
     * @param {!RelativeX} startPosX
     * @param {!RelativeY} startPosY
     * @param {number} startX
     * @param {number} startY
     * @param {{x: number, y: number}} offset
     * @private
     */

  }, {
    key: 'onDragMove_',
    value: function onDragMove_(e, startPosX, startPosY, startX, startY, offset) {
      var _currentlyDocked_$tar2 = this.currentlyDocked_.target,
          posX = _currentlyDocked_$tar2.posX,
          posY = _currentlyDocked_$tar2.posY;

      if (posX !== startPosX || posY !== startPosY) {
        // stale event
        return;
      }

      var _pointerCoords2 = pointerCoords(e),
          x = _pointerCoords2.x,
          y = _pointerCoords2.y;

      offset.x = x - startX;
      offset.y = y - startY;

      // Prevents dragging misfires.
      var offsetDist = Math.sqrt(Math.pow(offset.x, 2) + Math.pow(offset.y, 2));
      if (offsetDist <= 10) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      this.hideControls_();
      this.isDragging_ = true;
      this.offset_(offset.x, offset.y);
      this.updateDismissalAreaStyling_(offset.x, offset.y);
    }

    /**
     * @param {number} offsetX
     * @param {number} offsetY
     * @private
     */

  }, {
    key: 'updateDismissalAreaStyling_',
    value: function updateDismissalAreaStyling_(offsetX, offsetY) {
      var _this13 = this;

      var video = this.getDockedVideo_();
      var element = video.element;

      var internalElement = (0, _video.getInternalVideoElementFor)(element);
      var inDismissalArea = this.inDismissalArea_(offsetX, offsetY);

      video.mutateElement(function () {
        var className = 'amp-video-docked-almost-dismissed';
        internalElement.classList.toggle(className, inDismissalArea);
        _this13.getOverlay_().classList.toggle(className, inDismissalArea);
      });
    }

    /**
     * Works around https://bugs.webkit.org/show_bug.cgi?id=184250
     * @return {!UnlistenDef}
     * @private
     */

  }, {
    key: 'workaroundWebkitDragAndScrollIssue_',
    value: function workaroundWebkitDragAndScrollIssue_() {
      var win = this.ampdoc_.win;

      if (!_services.Services.platformFor(win).isIos()) {
        return function () {/* NOOP */};
      }
      var handler = function handler(e) {
        return e.preventDefault();
      };
      win.addEventListener('touchmove', handler, { passive: false });
      return function () {
        return win.removeEventListener('touchmove', handler);
      };
    }

    /**
     * @param {!Array<!UnlistenDef>} unlisteners
     * @param {{x: number, y: number}} offset
     * @private
     */

  }, {
    key: 'onDragEnd_',
    value: function onDragEnd_(unlisteners, offset) {
      unlisteners.forEach(function (unlisten) {
        return unlisten.call();
      });

      this.isDragging_ = false;

      if (this.dismissOnDragEnd_(offset.x, offset.y)) {
        return;
      }

      this.snapToCorner_(offset.x, offset.y);
    }

    /**
     * @param {number} offsetX
     * @param {number} offsetY
     * @private
     */

  }, {
    key: 'dismissOnDragEnd_',
    value: function dismissOnDragEnd_(offsetX, offsetY) {
      var inDimissalArea = this.inDismissalArea_(offsetX, offsetY);
      if (inDimissalArea) {
        this.dismiss_();
      }
      return inDimissalArea;
    }

    /**
     * @param {number} offsetX
     * @param {number} offsetY
     * @return {boolean}
     */

  }, {
    key: 'inDismissalArea_',
    value: function inDismissalArea_(offsetX, offsetY) {
      // TODO: Use topEdge/bottomEdge
      var dismissToleranceFromCenterPx = 20;

      var _viewport_$getSize = this.viewport_.getSize(),
          vw = _viewport_$getSize.width,
          vh = _viewport_$getSize.height;

      var _getCenter_ = this.getCenter_(offsetX, offsetY),
          centerX = _getCenter_.centerX,
          centerY = _getCenter_.centerY;

      return centerX >= vw - dismissToleranceFromCenterPx || centerX <= dismissToleranceFromCenterPx || centerY >= vh - dismissToleranceFromCenterPx || centerY <= dismissToleranceFromCenterPx;
    }

    /**
     * Gets the center of the currently docked video, offset by (x, y).
     * @param {number} offsetX
     * @param {number} offsetY
     * @return {{centerX: number, centerY: number}}
     * @private
     */

  }, {
    key: 'getCenter_',
    value: function getCenter_(offsetX, offsetY) {
      var _currentlyDocked_ = this.currentlyDocked_,
          target = _currentlyDocked_.target,
          step = _currentlyDocked_.step;

      var video = this.getDockedVideo_();

      var _video$getLayoutBox3 = video.getLayoutBox(),
          width = _video$getLayoutBox3.width,
          height = _video$getLayoutBox3.height;

      var _getDims_3 = this.getDims_(video, target, step),
          x = _getDims_3.x,
          y = _getDims_3.y,
          scale = _getDims_3.scale;

      var centerX = x + offsetX + width * scale / 2;
      var centerY = y + offsetY + height * scale / 2;

      return { centerX: centerX, centerY: centerY };
    }

    /**
     * @param {number} offsetX
     * @param {number} offsetY
     * @private
     */

  }, {
    key: 'snapToCorner_',
    value: function snapToCorner_(offsetX, offsetY) {
      var _this14 = this;

      var video = this.getDockedVideo_();
      var step = this.currentlyDocked_.step;

      var _getCenter_2 = this.getCenter_(offsetX, offsetY),
          centerX = _getCenter_2.centerX,
          centerY = _getCenter_2.centerY;

      var minDistance = null;
      var closestCornerX = null;
      var closestCornerY = null;

      [RelativeX.LEFT, RelativeX.RIGHT].forEach(function (posX) {
        [RelativeY.TOP, RelativeY.BOTTOM].forEach(function (posY) {
          var cornerX = posX == RelativeX.LEFT ? _this14.getLeftEdge_() : _this14.getRightEdge_();
          var cornerY = posY == RelativeY.TOP ? _this14.getTopEdge_() : _this14.getBottomEdge_();
          var distance = Math.sqrt(Math.pow(cornerX - centerX, 2) + Math.pow(cornerY - centerY, 2));
          if (minDistance === null || distance < minDistance) {
            minDistance = distance;
            closestCornerY = posY;
            closestCornerX = posX;
          }
        });
      });

      var target = {
        posX: closestCornerX,
        posY: closestCornerY
      };

      this.currentlyDocked_.target = target;

      this.preferredCornerX_ = closestCornerX;

      var _getDims_4 = this.getDims_(video, target, step),
          x = _getDims_4.x,
          y = _getDims_4.y,
          scale = _getDims_4.scale;

      this.placeAt_(video, x, y, scale, step, /* optTransitionDurationMs */200);
    }

    /**
     * @param {!Element} target
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isControlsEventTarget_',
    value: function isControlsEventTarget_(target) {
      return !!(0, _dom.closestBySelector)(target, '.amp-video-docked-controls');
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!DockTargetDef} target
     * @return {!TargetAreaDef}
     * @private
     */

  }, {
    key: 'getTargetArea_',
    value: function getTargetArea_(video, target) {
      return isElement(target) ? this.getTargetAreaFromSlot_(video, (0, _log.dev)().assertElement(target)) : this.getTargetAreaFromPos_(video, target.posX, target.posY);
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!RelativeX} posX
     * @param {!RelativeY} posY
     * @return {!TargetAreaDef}
     * @private
     */

  }, {
    key: 'getTargetAreaFromPos_',
    value: function getTargetAreaFromPos_(video, posX, posY) {
      var _video$getLayoutBox4 = video.getLayoutBox(),
          width = _video$getLayoutBox4.width,
          height = _video$getLayoutBox4.height;

      var margin = this.getMargin_();
      var aspectRatio = width / height;
      var targetWidth = Math.max(MIN_WIDTH, this.getAreaWidth_() * 0.3);
      var targetHeight = targetWidth / aspectRatio;

      var x = posX == RelativeX.RIGHT ? this.getRightEdge_() - margin - targetWidth : this.getLeftEdge_() + margin;

      var y = posY == RelativeY.TOP ? this.getTopEdge_() + margin : this.getBottomEdge_() - margin - targetHeight;

      var initialY = this.calculateInitialY_(posY, this.getTopEdge_(), this.getBottomEdge_(), height);

      return { x: x, y: y, targetWidth: targetWidth, targetHeight: targetHeight, initialY: initialY };
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!AmpElement} slot
     * @return {!TargetAreaDef}
     * @private
     */

  }, {
    key: 'getTargetAreaFromSlot_',
    value: function getTargetAreaFromSlot_(video, slot) {
      var _video$getLayoutBox5 = video.getLayoutBox(),
          naturalWidth = _video$getLayoutBox5.width,
          naturalHeight = _video$getLayoutBox5.height;

      var _slot$getLayoutBox = slot.getLayoutBox(),
          slotWidth = _slot$getLayoutBox.width,
          slotHeight = _slot$getLayoutBox.height,
          left = _slot$getLayoutBox.left;

      var _getFixedSlotLayoutBo4 = this.getFixedSlotLayoutBox_(),
          top = _getFixedSlotLayoutBo4.top,
          bottom = _getFixedSlotLayoutBo4.bottom;

      var slotAspect = slotWidth / slotHeight;
      var naturalAspect = naturalWidth / naturalHeight;

      var x = void 0,
          y = void 0,
          scale = void 0;

      if (naturalAspect > slotAspect) {
        scale = slotWidth / naturalWidth;
        y = top + slotHeight / 2 - naturalHeight * scale / 2;
        x = left;
      } else {
        scale = slotHeight / naturalHeight;
        x = left + slotWidth / 2 - naturalWidth * scale / 2;
        y = top;
      }

      var initialY = this.calculateInitialY_(this.getSlotRelativeY_(), top, bottom, naturalHeight);

      var targetWidth = naturalWidth * scale;
      var targetHeight = naturalHeight * scale;

      return { x: x, y: y, targetWidth: targetWidth, targetHeight: targetHeight, initialY: initialY };
    }

    /**
     * @param {!RelativeY} pos
     * @param {number} targetTop
     * @param {number} targetBottom
     * @param {number} naturalHeight
     * @return {number}
     */

  }, {
    key: 'calculateInitialY_',
    value: function calculateInitialY_(pos, targetTop, targetBottom, naturalHeight) {
      return pos == RelativeY.TOP ? targetTop : targetBottom - naturalHeight;
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {!DockTargetDef} target
     * @param {number} step in [0..1]
     * @return {{x: number, y: number, scale: number}}
     */

  }, {
    key: 'getDims_',
    value: function getDims_(video, target, step) {
      var _video$getLayoutBox6 = video.getLayoutBox(),
          left = _video$getLayoutBox6.left,
          width = _video$getLayoutBox6.width;

      var _getTargetArea_ = this.getTargetArea_(video, target),
          x = _getTargetArea_.x,
          y = _getTargetArea_.y,
          targetWidth = _getTargetArea_.targetWidth,
          initialY = _getTargetArea_.initialY;

      var currentX = mapStep(step, left, x);
      var currentWidth = mapStep(step, width, targetWidth);
      var currentY = mapStep(step, initialY, y);
      var scale = currentWidth / width;
      return { x: currentX, y: currentY, scale: scale };
    }

    /**
     * @param {!../../video-interface.VideoOrBaseElementDef} video
     * @param {number=} unusedDismissDirX
     * @param {number=} unusedDismissDirY
     * @private
     */

  }, {
    key: 'undock_',
    value: function undock_(video) {
      var _this15 = this;

      var unusedDismissDirX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var unusedDismissDirY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      // TODO(alanorozco): animate dismissal
      var internalElement = (0, _video.getInternalVideoElementFor)(video.element);

      this.trigger_(video, Actions.UNDOCK);

      video.mutateElement(function () {
        _this15.hideControls_();
        video.showControls();
        _this15.placedAt_ = null;
        _this15.sizedAt_ = null;
        internalElement.classList.remove(BASE_CLASS_NAME);
        var shadowLayer = _this15.getShadowLayer_();
        var overlay = _this15.getOverlay_();
        var almostDismissed = 'amp-video-docked-almost-dismissed';
        internalElement.classList.remove(almostDismissed);
        overlay.classList.remove(almostDismissed);
        var stylesToReset = ['transform', 'transition', 'width', 'height', 'opacity'];
        shadowLayer.setAttribute('hidden', '');
        overlay.setAttribute('hidden', '');
        (0, _style.resetStyles)(internalElement, stylesToReset);
        (0, _style.resetStyles)(shadowLayer, stylesToReset);
        (0, _style.resetStyles)(overlay, stylesToReset);
        _this15.currentlyDocked_ = null;
      });
    }

    /**
     * @param {boolean=} respectSticky
     * @private
     */

  }, {
    key: 'hideControls_',
    value: function hideControls_() {
      var respectSticky = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (respectSticky && this.stickyControls_) {
        return;
      }

      var _getControls_7 = this.getControls_(),
          container = _getControls_7.container;

      var overlay = this.getOverlay_();
      overlay.classList.remove('amp-video-docked-controls-bg');
      container.classList.remove('amp-video-docked-controls-shown');
    }

    /**
     * @param {number=} time
     * @private
     */

  }, {
    key: 'hideControlsOnTimeout_',
    value: function hideControlsOnTimeout_() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CONTROLS_TIMEOUT;

      this.getHideControlsTimeout_().trigger(time);
    }

    /**
     * @param {!Element} parent
     * @private
     */

  }, {
    key: 'removePosterForAndroidBug_',
    value: function removePosterForAndroidBug_(parent) {
      var el = parent.querySelector('.i-amphtml-android-poster-bug');
      if (!el) {
        return;
      }
      (0, _dom.removeElement)(el);
    }
  }]);

  return VideoDocking;
}();

},{"../../../build/video-docking.css.js":2,"../../action-constants":6,"../../dom":9,"../../event-helper":12,"../../layout-rect":16,"../../log":18,"../../service":32,"../../services":42,"../../static-template":43,"../../style":46,"../../style-installer":45,"../../types":47,"../../utils/function":51,"../../utils/math":53,"../../utils/object":54,"../../utils/video":57,"../../video-interface":58,"../position-observer/position-observer-impl":33,"../position-observer/position-observer-worker":34}],41:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installAutoplayStylesForDoc = installAutoplayStylesForDoc;

var _styleInstaller = require('../../style-installer');

var _videoAutoplayCss = require('../../../build/video-autoplay.css.js');

/**
 * @param  {!../ampdoc-impl.AmpDoc} ampdoc
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

function installAutoplayStylesForDoc(ampdoc) {
  (0, _styleInstaller.installStylesForDoc)(ampdoc, _videoAutoplayCss.cssText,
  /* callback */null,
  /* opt_isRuntimeCss */false,
  /* opt_ext */'amp-video-autoplay');
}
// Source for this constant is css/video-autoplay.css

},{"../../../build/video-autoplay.css.js":1,"../../style-installer":45}],42:[function(require,module,exports){
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

},{"./element-service":10,"./service":32}],43:[function(require,module,exports){
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

},{"./log":18,"./utils/object.js":54}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installStylesForDoc = installStylesForDoc;
exports.installStylesLegacy = installStylesLegacy;
exports.installCssTransformer = installCssTransformer;
exports.makeBodyVisible = makeBodyVisible;
exports.bodyAlwaysVisible = bodyAlwaysVisible;

var _services = require('./services');

var _log = require('./log');

var _dom = require('./dom');

var _object = require('./utils/object');

var _style = require('./style');

var _renderDelayingServices = require('./render-delaying-services');

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

var TRANSFORMER_PROP = '__AMP_CSS_TR';
var STYLE_MAP_PROP = '__AMP_CSS_SM';
var bodyVisibleSentinel = '__AMP_BODY_VISIBLE';

/**
 * Adds the given css text to the given ampdoc.
 *
 * The style tags will be at the beginning of the head before all author
 * styles. One element can be the main runtime CSS. This is guaranteed
 * to always be the first stylesheet in the doc.
 *
 * @param {!./service/ampdoc-impl.AmpDoc} ampdoc The ampdoc that should get the new styles.
 * @param {string} cssText
 * @param {?function(!Element)|undefined} cb Called when the new styles are available.
 *     Not using a promise, because this is synchronous when possible.
 *     for better performance.
 * @param {boolean=} opt_isRuntimeCss If true, this style tag will be inserted
 *     as the first element in head and all style elements will be positioned
 *     after.
 * @param {string=} opt_ext
 * @return {!Element}
 */
function installStylesForDoc(ampdoc, cssText, cb, opt_isRuntimeCss, opt_ext) {
  var cssRoot = ampdoc.getHeadNode();
  var style = insertStyleElement(cssRoot, maybeTransform(cssRoot, cssText), opt_isRuntimeCss || false, opt_ext || null);

  if (cb) {
    var rootNode = ampdoc.getRootNode();
    // Styles aren't always available synchronously. E.g. if there is a
    // pending style download, it will have to finish before the new
    // style is visible.
    // For this reason we poll until the style becomes available.
    // Sync case.
    if (styleLoaded(rootNode, style)) {
      cb(style);
      return style;
    }
    // Poll until styles are available.
    var interval = setInterval(function () {
      if (styleLoaded(rootNode, style)) {
        clearInterval(interval);
        cb(style);
      }
    }, 4);
  }
  return style;
}

/**
 * Adds the given css text to the given document.
 * TODO(dvoytenko, #10705): Remove this method once FIE/ampdoc migration is
 * done.
 *
 * @param {!Document} doc The document that should get the new styles.
 * @param {string} cssText
 * @param {?function(!Element)|undefined} cb Called when the new styles are
 *     available. Not using a promise, because this is synchronous when
 *     possible. for better performance.
 * @param {boolean=} opt_isRuntimeCss If true, this style tag will be inserted
 *     as the first element in head and all style elements will be positioned
 *     after.
 * @param {string=} opt_ext
 * @return {!Element}
 */
function installStylesLegacy(doc, cssText, cb, opt_isRuntimeCss, opt_ext) {
  var style = insertStyleElement((0, _log.dev)().assertElement(doc.head), cssText, opt_isRuntimeCss || false, opt_ext || null);

  if (cb) {
    // Styles aren't always available synchronously. E.g. if there is a
    // pending style download, it will have to finish before the new
    // style is visible.
    // For this reason we poll until the style becomes available.
    // Sync case.
    if (styleLoaded(doc, style)) {
      cb(style);
      return style;
    }
    // Poll until styles are available.
    var interval = setInterval(function () {
      if (styleLoaded(doc, style)) {
        clearInterval(interval);
        cb(style);
      }
    }, 4);
  }
  return style;
}

/**
 * Creates the properly configured style element.
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {string} cssText
 * @param {boolean} isRuntimeCss
 * @param {?string} ext
 * @return {!Element}
 */
function insertStyleElement(cssRoot, cssText, isRuntimeCss, ext) {
  var styleMap = cssRoot[STYLE_MAP_PROP];
  if (!styleMap) {
    styleMap = cssRoot[STYLE_MAP_PROP] = (0, _object.map)();
  }

  var isExtCss = !isRuntimeCss && ext && ext != 'amp-custom' && ext != 'amp-keyframes';
  var key = isRuntimeCss ? 'amp-runtime' : isExtCss ? 'amp-extension=' + ext : null;

  // Check if it has already been created or discovered.
  if (key) {
    var existing = getExistingStyleElement(cssRoot, styleMap, key);
    if (existing) {
      return existing;
    }
  }

  // Create the new style element and append to cssRoot.
  var doc = cssRoot.ownerDocument || cssRoot;
  var style = doc.createElement('style');
  style. /*OK*/textContent = cssText;
  var afterElement = null;
  // Make sure that we place style tags after the main runtime CSS. Otherwise
  // the order is random.
  if (isRuntimeCss) {
    style.setAttribute('amp-runtime', '');
  } else if (isExtCss) {
    style.setAttribute('amp-extension', ext || '');
    afterElement = (0, _log.dev)().assertElement(getExistingStyleElement(cssRoot, styleMap, 'amp-runtime'));
  } else {
    if (ext) {
      style.setAttribute(ext, '');
    }
    afterElement = cssRoot.lastChild;
  }
  (0, _dom.insertAfterOrAtStart)(cssRoot, style, afterElement);
  if (key) {
    styleMap[key] = style;
  }
  return style;
}

/**
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {!Object<string, !Element>} styleMap
 * @param {string} key
 * @return {?Element}
 */
function getExistingStyleElement(cssRoot, styleMap, key) {
  // Already cached.
  if (styleMap[key]) {
    return styleMap[key];
  }
  // Check if the style has already been added by the server layout.
  var existing = cssRoot. /*OK*/querySelector('style[' + key + ']');
  if (existing) {
    styleMap[key] = existing;
    return existing;
  }
  // Nothing found.
  return null;
}

/**
 * Applies a transformer to the CSS text if it has been registered.
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {function(string):string} transformer
 */
function installCssTransformer(cssRoot, transformer) {
  cssRoot[TRANSFORMER_PROP] = transformer;
}

/**
 * Applies a transformer to the CSS text if it has been registered.
 * @param {!Element|!ShadowRoot} cssRoot
 * @param {string} cssText
 * @return {string}
 */
function maybeTransform(cssRoot, cssText) {
  var transformer = cssRoot[TRANSFORMER_PROP];
  return transformer ? transformer(cssText) : cssText;
}

/**
 * Sets the document's body opacity to 1.
 * If the body is not yet available (because our script was loaded
 * synchronously), polls until it is.
 * @param {!Document} doc The document who's body we should make visible.
 * @param {boolean=} opt_waitForServices Whether the body visibility should
 *     be blocked on key services being loaded.
 */
function makeBodyVisible(doc, opt_waitForServices) {
  (0, _log.dev)().assert(doc.defaultView, 'Passed in document must have a defaultView');
  var win = /** @type {!Window} */doc.defaultView;
  if (win[bodyVisibleSentinel]) {
    return;
  }
  var set = function set() {
    win[bodyVisibleSentinel] = true;
    (0, _style.setStyles)((0, _log.dev)().assertElement(doc.body), {
      opacity: 1,
      visibility: 'visible',
      'animation': 'none'
    });
    renderStartedNoInline(doc);
  };
  try {
    (0, _dom.waitForBody)(doc, function () {
      if (win[bodyVisibleSentinel]) {
        return;
      }
      win[bodyVisibleSentinel] = true;
      if (opt_waitForServices) {
        (0, _renderDelayingServices.waitForServices)(win).catch(function (reason) {
          (0, _log.rethrowAsync)(reason);
          return [];
        }).then(function (services) {
          set();
          if (services.length > 0) {
            _services.Services.resourcesForDoc(doc). /*OK*/schedulePass(1, /* relayoutAll */true);
          }
          try {
            var perf = _services.Services.performanceFor(win);
            perf.tick('mbv');
            perf.flush();
          } catch (e) {}
        });
      } else {
        set();
      }
    });
  } catch (e) {
    // If there was an error during the logic above (such as service not
    // yet installed, definitely try to make the body visible.
    set();
    // Avoid errors in the function to break execution flow as this is
    // often called as a last resort.
    (0, _log.rethrowAsync)(e);
  }
}

/**
 * @param {!Document} doc
 */
function renderStartedNoInline(doc) {
  try {
    _services.Services.resourcesForDoc(doc).renderStarted();
  } catch (e) {
    // `makeBodyVisible` is called in the error-processing cycle and thus
    // could be triggered when runtime's initialization is incomplete which
    // would cause unrelated errors to be thrown here.
  }
}

/**
 * Indicates that the body is always visible. For instance, in case of PWA.
 * @param {!Window} win
 */
function bodyAlwaysVisible(win) {
  win[bodyVisibleSentinel] = true;
}

/**
 * Checks whether a style element was registered in the DOM.
 * @param {!Document|!ShadowRoot} doc
 * @param {!Element} style
 * @return {boolean}
 */
function styleLoaded(doc, style) {
  var sheets = doc.styleSheets;
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    if (sheet.ownerNode == style) {
      return true;
    }
  }
  return false;
}

},{"./dom":9,"./log":18,"./render-delaying-services":31,"./services":42,"./style":46,"./utils/object":54}],46:[function(require,module,exports){
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

},{"./string":44,"./utils/object.js":54}],47:[function(require,module,exports){
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

},{}],48:[function(require,module,exports){
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

},{"./url-try-decode-uri-component":49}],49:[function(require,module,exports){
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

},{}],50:[function(require,module,exports){
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

},{"./config":7,"./log":18,"./mode":21,"./string":44,"./types":47,"./url-parse-query-string":48,"./url-try-decode-uri-component":49,"./utils/lru-cache":52,"./utils/object":54}],51:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.once = once;
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

// TODO(rsimha, #15334): Enable this rule.
/* eslint jsdoc/check-types: 0 */

/**
 * Creates a function that is evaluated only once and returns the cached result
 * subsequently.
 *
 * Please note that `once` only takes the function definition into account,
 * so it will return the same cached value even when the arguments are
 * different.
 *
 * @param {function(...):T} fn
 * @return {function(...):T}
 * @template T
 */
function once(fn) {
  var evaluated = false;
  var retValue = null;
  var callback = fn;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!evaluated) {
      retValue = callback.apply(self, args);
      evaluated = true;
      callback = null; // GC
    }
    return retValue;
  };
}

},{}],52:[function(require,module,exports){
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

},{"../log":18}],53:[function(require,module,exports){
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

},{}],54:[function(require,module,exports){
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

},{"../types":47}],55:[function(require,module,exports){
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

},{}],56:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;
exports.debounce = debounce;
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
 * Wraps a given callback and applies a rate limit.
 * It throttles the calls so that no consequent calls have time interval
 * smaller than the given minimal interval.
 *
 * @param {!Window} win
 * @param {function(...*)} callback
 * @param {number} minInterval the minimum time interval in millisecond
 * @return {function(...*)}
 */
function throttle(win, callback, minInterval) {
  var locker = 0;
  var nextCallArgs = null;

  /**
   * @param {!Object} args
   */
  function fire(args) {
    nextCallArgs = null;
    // Lock the fire for minInterval milliseconds
    locker = win.setTimeout(waiter, minInterval);

    callback.apply(null, args);
  }

  /**
   * Waiter function
   */
  function waiter() {
    locker = 0;
    // If during the period there're invocations queued up, fire once.
    if (nextCallArgs) {
      fire(nextCallArgs);
    }
  }

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locker) {
      nextCallArgs = args;
    } else {
      fire(args);
    }
  };
}

/**
 * Wraps a given callback and applies a wait timer, so that minInterval
 * milliseconds must pass since the last call before the callback is actually
 * invoked.
 *
 * @param {!Window} win
 * @param {function(...*)} callback
 * @param {number} minInterval the minimum time interval in millisecond
 * @return {function(...*)}
 */
function debounce(win, callback, minInterval) {
  var locker = 0;
  var timestamp = 0;
  var nextCallArgs = null;

  /**
   * @param {?Array} args
   */
  function fire(args) {
    nextCallArgs = null;
    callback.apply(null, args);
  }

  /**
   * Wait function for debounce
   */
  function waiter() {
    locker = 0;
    var remaining = minInterval - (win.Date.now() - timestamp);
    if (remaining > 0) {
      locker = win.setTimeout(waiter, remaining);
    } else {
      fire(nextCallArgs);
    }
  }

  return function () {
    timestamp = win.Date.now();

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    nextCallArgs = args;
    if (!locker) {
      locker = win.setTimeout(waiter, minInterval);
    }
  };
}

},{}],57:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoUtils = undefined;

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


exports.getInternalVideoElementFor = getInternalVideoElementFor;

var _log = require('../log');

var _function = require('./function');

var _style = require('../style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @param {!Window} win
 * @param {boolean} isLiteViewer
 * @return {!Promise<boolean>}
 */
function isAutoplaySupportedImpl(win, isLiteViewer) {
  // We do not support autoplay in amp-lite viewer regardless of platform.
  if (isLiteViewer) {
    return Promise.resolve(false);
  }

  // To detect autoplay, we create a video element and call play on it, if
  // `paused` is true after `play()` call, autoplay is supported. Although
  // this is unintuitive, it works across browsers and is currently the lightest
  // way to detect autoplay without using a data source.
  var detectionElement = win.document.createElement('video');

  // NOTE(aghassemi): We need both attributes and properties due to Chrome and
  // Safari differences when dealing with non-attached elements.
  detectionElement.setAttribute('muted', '');
  detectionElement.setAttribute('playsinline', '');
  detectionElement.setAttribute('webkit-playsinline', '');
  detectionElement.setAttribute('height', '0');
  detectionElement.setAttribute('width', '0');

  detectionElement.muted = true;
  detectionElement.playsinline = true;
  detectionElement.webkitPlaysinline = true;

  (0, _style.setStyles)(detectionElement, {
    position: 'fixed',
    top: '0',
    width: '0',
    height: '0',
    opacity: '0'
  });

  // Promise wrapped this way to catch both sync throws and async rejections.
  // More info: https://github.com/tc39/proposal-promise-try
  new Promise(function (resolve) {
    return resolve(detectionElement.play());
  }).catch(function () {
    // Suppress any errors, useless to report as they are expected.
  });

  return Promise.resolve(!detectionElement.paused);
}

/** @private {?(function(Window, boolean):!Promise<boolean>)} */
var _isAutoplaySupported = null;

/**
 * Sets if autoplay is supported.
 */
function setIsAutoplaySupported() {
  _isAutoplaySupported =
  /** @type {function(Window, boolean):!Promise<boolean>} */(0, _function.once)(isAutoplaySupportedImpl);
}

/**
 * Wrapper around static utilities for testability.
 */

var VideoUtils = exports.VideoUtils = function () {
  function VideoUtils() {
    _classCallCheck(this, VideoUtils);
  }

  _createClass(VideoUtils, null, [{
    key: 'isAutoplaySupported',

    /**
     * Determines autoplay support.
     *
     * Note that even if platfrom supports autoplay, users or browsers can disable
     * autoplay to save data / battery. This detects both platfrom support and
     * when autoplay has been disabled by the user.
     *
     * @param {!Window} win
     * @param {boolean} isLiteViewer
     * @return {!Promise<boolean>}
     */
    value: function isAutoplaySupported(win, isLiteViewer) {
      if (!_isAutoplaySupported) {
        setIsAutoplaySupported();
      }
      return _isAutoplaySupported(win, isLiteViewer);
    }

    /** @visibleForTesting */

  }, {
    key: 'resetIsAutoplaySupported',
    value: function resetIsAutoplaySupported() {
      setIsAutoplaySupported();
    }
  }]);

  return VideoUtils;
}();

/**
 * @param {!Element} element
 * @return {!Element}
 * Note: Not included in `VideoUtils` as we don't need to test a
 * static selector.
 */


function getInternalVideoElementFor(element) {
  return (0, _log.dev)().assertElement(element.querySelector('video, iframe'));
}

},{"../log":18,"../style":46,"./function":51}],58:[function(require,module,exports){
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

},{}],59:[function(require,module,exports){
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

},{}]},{},[3])


})});//# sourceMappingURL=amp-vimeo-0.1.max.js.map
