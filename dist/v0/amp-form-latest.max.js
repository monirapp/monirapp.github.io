(self.AMP=self.AMP||[]).push({n:"amp-form",v:"1537224222059",f:(function(AMP,_){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = exports.CSS = "form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}.i-amphtml-validation-bubble{-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:none;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:\" \";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{display:none;color:red}[visible-when-invalid].visible{display:initial}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/";

},{}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmpFormService = exports.AmpForm = undefined;

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

exports.checkUserValidityAfterInteraction_ = checkUserValidityAfterInteraction_;

var _actionConstants = require('../../../src/action-constants');

var _ampEvents = require('../../../src/amp-events');

var _ampForm = require('../../../build/amp-form-0.1.css');

var _promise = require('../../../src/utils/promise');

var _formVerifiers = require('./form-verifiers');

var _formDataWrapper = require('../../../src/form-data-wrapper');

var _formEvents = require('./form-events');

var _url = require('../../../src/url');

var _services = require('../../../src/services');

var _ssrTemplateHelper = require('../../../src/ssr-template-helper');

var _dom = require('../../../src/dom');

var _eventHelper = require('../../../src/event-helper');

var _object = require('../../../src/utils/object');

var _log = require('../../../src/log');

var _form = require('../../../src/form');

var _formValidators = require('./form-validators');

var _mode = require('../../../src/mode');

var _formProxy = require('./form-proxy');

var _styleInstaller = require('../../../src/style-installer');

var _types = require('../../../src/types');

var _analytics = require('../../../src/analytics');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @type {string} */
var TAG = 'amp-form';

/**
 * A list of external dependencies that can be included in forms.
 * @type {!Array<string>}
 */
var EXTERNAL_DEPS = ['amp-selector'];

/** @const @enum {string} */
var FormState = {
  INITIAL: 'initial',
  VERIFYING: 'verifying',
  VERIFY_ERROR: 'verify-error',
  SUBMITTING: 'submitting',
  SUBMIT_ERROR: 'submit-error',
  SUBMIT_SUCCESS: 'submit-success'
};

/** @const @enum {string} */
var UserValidityState = {
  NONE: 'none',
  USER_VALID: 'valid',
  USER_INVALID: 'invalid'
};

/** @private @const {string} */
var REDIRECT_TO_HEADER = 'AMP-Redirect-To';

var AmpForm = exports.AmpForm = function () {

  /**
   * Adds functionality to the passed form element and listens to submit event.
   * @param {!HTMLFormElement} element
   * @param {string} id
   */
  function AmpForm(element, id) {
    var _this = this;

    _classCallCheck(this, AmpForm);

    //TODO(dvoytenko, #7063): Remove the try catch.
    try {
      (0, _formProxy.installFormProxy)(element);
    } catch (e) {
      (0, _log.dev)().error(TAG, 'form proxy failed to install', e);
    }

    (0, _form.setFormForElement)(element, this);

    /** @private @const {string} */
    this.id_ = id;

    /** @const @private {!Window} */
    this.win_ = (0, _types.toWin)(element.ownerDocument.defaultView);

    /** @const @private {!../../../src/service/timer-impl.Timer} */
    this.timer_ = _services.Services.timerFor(this.win_);

    /** @const @private {!../../../src/service/url-replacements-impl.UrlReplacements} */
    this.urlReplacement_ = _services.Services.urlReplacementsForDoc(element);

    /** @private {?Promise} */
    this.dependenciesPromise_ = null;

    /** @const @private {!HTMLFormElement} */
    this.form_ = element;

    /** @const @private {!../../../src/service/template-impl.Templates} */
    this.templates_ = _services.Services.templatesFor(this.win_);

    /** @const @private {!../../../src/service/xhr-impl.Xhr} */
    this.xhr_ = _services.Services.xhrFor(this.win_);

    /** @const @private {!../../../src/service/action-impl.ActionService} */
    this.actions_ = _services.Services.actionServiceForDoc(this.form_);

    /** @const @private {!../../../src/service/resources-impl.Resources} */
    this.resources_ = _services.Services.resourcesForDoc(this.form_);

    /** @const @private {!../../../src/service/viewer-impl.Viewer}  */
    this.viewer_ = _services.Services.viewerForDoc(this.form_);

    /**
     * @const {!../../../src/ssr-template-helper.SsrTemplateHelper}
     * @private
     */
    this.ssrTemplateHelper_ = new _ssrTemplateHelper.SsrTemplateHelper(TAG, this.viewer_, this.templates_);

    /** @const @private {string} */
    this.method_ = (this.form_.getAttribute('method') || 'GET').toUpperCase();

    /** @const @private {string} */
    this.target_ = this.form_.getAttribute('target');

    /** @const @private {?string} */
    this.xhrAction_ = this.getXhrUrl_('action-xhr');

    /** @const @private {?string} */
    this.xhrVerify_ = this.getXhrUrl_('verify-xhr');

    /** @const @private {boolean} */
    this.shouldValidate_ = !this.form_.hasAttribute('novalidate');
    // Need to disable browser validation in order to allow us to take full
    // control of this. This allows us to trigger validation APIs and reporting
    // when we need to.
    this.form_.setAttribute('novalidate', '');
    if (!this.shouldValidate_) {
      this.form_.setAttribute('amp-novalidate', '');
    }
    this.form_.classList.add('i-amphtml-form');

    var submitButtons = this.form_.querySelectorAll('[type="submit"]');
    /** @const @private {!Array<!Element>} */
    this.submitButtons_ = (0, _types.toArray)(submitButtons);

    /** @private {!FormState} */
    this.state_ = FormState.INITIAL;

    var inputs = this.form_.elements;
    for (var i = 0; i < inputs.length; i++) {
      var name = inputs[i].name;

      (0, _log.user)().assert(name != _url.SOURCE_ORIGIN_PARAM && name != _formVerifiers.FORM_VERIFY_PARAM, 'Illegal input name, %s found: %s', name, inputs[i]);
    }

    /** @const @private {!./form-validators.FormValidator} */
    this.validator_ = (0, _formValidators.getFormValidator)(this.form_);

    /** @const @private {!./form-verifiers.FormVerifier} */
    this.verifier_ = (0, _formVerifiers.getFormVerifier)(this.form_, function () {
      return _this.handleXhrVerify_();
    });

    this.actions_.installActionHandler(this.form_, this.actionHandler_.bind(this), _actionConstants.ActionTrust.HIGH);
    this.installEventHandlers_();

    /** @private {?Promise} */
    this.xhrSubmitPromise_ = null;

    /** @private {?Promise} */
    this.renderTemplatePromise_ = null;
  }

  /**
   * Gets and validates an attribute for form request URLs.
   * @param {string} attribute
   * @return {?string}
   * @private
   */


  _createClass(AmpForm, [{
    key: 'getXhrUrl_',
    value: function getXhrUrl_(attribute) {
      var url = this.form_.getAttribute(attribute);
      if (url) {
        var urlService = _services.Services.urlForDoc(this.form_);
        urlService.assertHttpsUrl(url, this.form_, attribute);
        (0, _log.user)().assert(!urlService.isProxyOrigin(url), 'form ' + attribute + ' should not be on AMP CDN: %s', this.form_);
      }
      return url;
    }

    /**
     * Handle actions that require at least high trust.
     * @param {!../../../src/service/action-impl.ActionInvocation} invocation
     * @return {?Promise}
     * @private
     */

  }, {
    key: 'actionHandler_',
    value: function actionHandler_(invocation) {
      var _this2 = this;

      if (invocation.method == 'submit') {
        this.whenDependenciesReady_().then(function () {
          _this2.handleSubmitAction_(invocation);
        });
      } else if (invocation.method === 'clear') {
        this.handleClearAction_();
      }
      return null;
    }

    /**
     * Returns a promise that will be resolved when all dependencies used inside
     * the form tag are loaded and built (e.g. amp-selector) or 2 seconds timeout
     * - whichever is first.
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'whenDependenciesReady_',
    value: function whenDependenciesReady_() {
      if (this.dependenciesPromise_) {
        return this.dependenciesPromise_;
      }
      var depElements = this.form_. /*OK*/querySelectorAll(EXTERNAL_DEPS.join(','));
      // Wait for an element to be built to make sure it is ready.
      var promises = (0, _types.toArray)(depElements).map(function (el) {
        return el.whenBuilt();
      });
      return this.dependenciesPromise_ = this.waitOnPromisesOrTimeout_(promises, 2000);
    }

    /** @private */

  }, {
    key: 'installEventHandlers_',
    value: function installEventHandlers_() {
      var _this3 = this;

      this.viewer_.whenNextVisible().then(function () {
        var autofocus = _this3.form_.querySelector('[autofocus]');
        if (autofocus) {
          (0, _dom.tryFocus)(autofocus);
        }
      });

      this.form_.addEventListener('submit', this.handleSubmitEvent_.bind(this), true);

      this.form_.addEventListener('blur', function (e) {
        checkUserValidityAfterInteraction_((0, _log.dev)().assertElement(e.target));
        _this3.validator_.onBlur(e);
      }, true);

      // If the viewer can render templates, then form verifier is not applicable.
      if (!this.ssrTemplateHelper_.isSupported()) {
        this.form_.addEventListener('change', function (e) {
          _this3.verifier_.onCommit().then(function (_ref) {
            var updatedElements = _ref.updatedElements,
                errors = _ref.errors;

            updatedElements.forEach(checkUserValidityAfterInteraction_);
            // Tell the validation to reveal any input.validationMessage added
            // by the form verifier.
            _this3.validator_.onBlur(e);

            // Only make the verify XHR if the user hasn't pressed submit.
            if (_this3.state_ === FormState.VERIFYING) {
              if (errors.length) {
                _this3.setState_(FormState.VERIFY_ERROR);
                _this3.renderTemplate_(
                /** @type {!JsonObject} */{ verifyErrors: errors }).then(function () {
                  _this3.triggerAction_(_formEvents.FormEvents.VERIFY_ERROR, errors);
                });
              } else {
                _this3.setState_(FormState.INITIAL);
              }
            }
          });
        });
      }

      this.form_.addEventListener('input', function (e) {
        checkUserValidityAfterInteraction_((0, _log.dev)().assertElement(e.target));
        _this3.validator_.onInput(e);
      });
    }

    /**
     * Triggers 'amp-form-submit' event in 'amp-analytics' and
     * generates variables for form fields to be accessible in analytics
     *
     * @param {string} eventType
     * @private
     */

  }, {
    key: 'triggerFormSubmitInAnalytics_',
    value: function triggerFormSubmitInAnalytics_(eventType) {
      this.assertSsrTemplate_(false, 'Form analytics not supported');
      var formDataForAnalytics = {};
      var formObject = this.getFormAsObject_();

      for (var k in formObject) {
        if (Object.prototype.hasOwnProperty.call(formObject, k)) {
          formDataForAnalytics['formFields[' + k + ']'] = formObject[k].join(',');
        }
      }
      formDataForAnalytics['formId'] = this.form_.id;

      this.analyticsEvent_(eventType, formDataForAnalytics);
    }

    /**
     * Handles submissions through action service invocations.
     *   e.g. <img on=tap:form.submit>
     * @param {!../../../src/service/action-impl.ActionInvocation} invocation
     * @private
     */

  }, {
    key: 'handleSubmitAction_',
    value: function handleSubmitAction_(invocation) {
      if (this.state_ == FormState.SUBMITTING || !this.checkValidity_()) {
        return;
      }
      // `submit` has the same trust level as the AMP Action that caused it.
      this.submit_(invocation.trust);
      if (this.method_ == 'GET' && !this.xhrAction_) {
        this.form_.submit();
      }
    }

    /**
     * Handles clearing the form through action service invocations.
     * @private
     */

  }, {
    key: 'handleClearAction_',
    value: function handleClearAction_() {
      this.form_.reset();
      this.setState_(FormState.INITIAL);
      this.form_.classList.remove('user-valid');
      this.form_.classList.remove('user-invalid');

      var validityElements = this.form_.querySelectorAll('.user-valid, .user-invalid');
      (0, _dom.iterateCursor)(validityElements, function (element) {
        element.classList.remove('user-valid');
        element.classList.remove('user-invalid');
      });

      var messageElements = this.form_.querySelectorAll('.visible[validation-for]');
      (0, _dom.iterateCursor)(messageElements, function (element) {
        element.classList.remove('visible');
      });

      removeValidityStateClasses(this.form_);
    }

    /**
     * Note on stopImmediatePropagation usage here, it is important to emulate
     * native browser submit event blocking. Otherwise any other submit listeners
     * would get the event.
     *
     * For example, action service shouldn't trigger 'submit' event if form is
     * actually invalid. stopImmediatePropagation allows us to make sure we don't
     * trigger it.
     *
     * This prevents the default submission event in any of following cases:
     *   - The form is still finishing a previous submission.
     *   - The form is invalid.
     *   - Handling an XHR submission.
     *   - It's a non-XHR POST submission (unsupported).
     *
     * @param {!Event} event
     * @private
     */

  }, {
    key: 'handleSubmitEvent_',
    value: function handleSubmitEvent_(event) {
      if (this.state_ == FormState.SUBMITTING || !this.checkValidity_()) {
        event.stopImmediatePropagation();
        event.preventDefault();
        return;
      }
      if (this.xhrAction_ || this.method_ == 'POST') {
        event.preventDefault();
      }
      // Submits caused by user input have high trust.
      this.submit_(_actionConstants.ActionTrust.HIGH);
    }

    /**
     * Helper method that actual handles the different cases (post, get, xhr...).
     * @param {ActionTrust} trust
     * @private
     */

  }, {
    key: 'submit_',
    value: function submit_(trust) {
      var varSubsFields = this.getVarSubsFields_();
      if (this.xhrAction_) {
        this.handleXhrSubmit_(varSubsFields, trust);
      } else if (this.method_ == 'POST') {
        this.handleNonXhrPost_();
      } else if (this.method_ == 'GET') {
        this.handleNonXhrGet_(varSubsFields);
      }
    }

    /**
     * Get form fields that require variable substitutions
     * @return {!IArrayLike<!HTMLInputElement>}
     * @private
     */

  }, {
    key: 'getVarSubsFields_',
    value: function getVarSubsFields_() {
      // Fields that support var substitutions.
      return this.form_.querySelectorAll('[type="hidden"][data-amp-replace]');
    }

    /**
     * Send the verify request and control the VERIFYING state.
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'handleXhrVerify_',
    value: function handleXhrVerify_() {
      var _this4 = this;

      if (this.state_ === FormState.SUBMITTING) {
        return Promise.resolve();
      }
      this.setState_(FormState.VERIFYING);
      this.triggerAction_(_formEvents.FormEvents.VERIFY, null);

      return this.doVarSubs_(this.getVarSubsFields_()).then(function () {
        return _this4.doVerifyXhr_();
      });
    }

    /**
     * @param {!IArrayLike<!HTMLInputElement>} varSubsFields
     * @param {ActionTrust} trust
     * @private
     */

  }, {
    key: 'handleXhrSubmit_',
    value: function handleXhrSubmit_(varSubsFields, trust) {
      var _this5 = this;

      this.setState_(FormState.SUBMITTING);
      var varSubPromise = this.doVarSubs_(varSubsFields);
      var p = void 0;
      if (this.ssrTemplateHelper_.isSupported()) {
        p = varSubPromise.then(function () {
          _this5.actions_.trigger(_this5.form_, _formEvents.FormEvents.SUBMIT, /* event */null, trust);
          // Note that we do not render templates for the submitting state
          // and only deal with submit-success or submit-error.
          return _this5.ssrTemplateHelper_.fetchAndRenderTemplate(_this5.form_);
        }).then(function (resp) {
          return _this5.handleSsrTemplateSuccess_(resp);
        }, function (error) {
          return _this5.handleSsrTemplateFailure_( /** @type {!JsonObject} */error);
        });
      } else {
        p = varSubPromise.then(function () {
          _this5.submittingWithTrust_(trust);
          return _this5.doActionXhr_();
        }).then(function (response) {
          return _this5.handleXhrSubmitSuccess_(
          /* !../../../src/service/xhr-impl.FetchResponse */response);
        }, function (error) {
          return _this5.handleXhrSubmitFailure_( /** @type {!Error} */error);
        });
      }
      if ((0, _mode.getMode)().test) {
        this.xhrSubmitPromise_ = p;
      }
    }

    /**
     * Handles viewer render template failure.
     * @param {!JsonObject} error
     */

  }, {
    key: 'handleSsrTemplateFailure_',
    value: function handleSsrTemplateFailure_(error) {
      var _this6 = this;

      this.setState_(FormState.SUBMIT_ERROR);
      (0, _log.user)().error(TAG, 'Form submission failed: ' + error);
      return (0, _promise.tryResolve)(function () {
        _this6.renderTemplate_(error || {}).then(function () {
          _this6.triggerAction_(_formEvents.FormEvents.SUBMIT_ERROR, error); // do we need this?
        });
      });
    }

    /**
     * Triggers the analytics and renders any template for submitting state.
     * @param {ActionTrust} trust
     */

  }, {
    key: 'submittingWithTrust_',
    value: function submittingWithTrust_(trust) {
      var _this7 = this;

      this.triggerFormSubmitInAnalytics_('amp-form-submit');
      // After variable substitution
      var values = this.getFormAsObject_();
      // At the form submitting state, we want to display any template
      // messages with the submitting attribute.
      this.renderTemplate_(values).then(function () {
        _this7.actions_.trigger(_this7.form_, _formEvents.FormEvents.SUBMIT, /* event */null, trust);
      });
    }

    /**
     * Perform asynchronous variable substitution on the fields that require it.
     * @param {!IArrayLike<!HTMLInputElement>} varSubsFields
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'doVarSubs_',
    value: function doVarSubs_(varSubsFields) {
      var varSubPromises = [];
      for (var i = 0; i < varSubsFields.length; i++) {
        varSubPromises.push(this.urlReplacement_.expandInputValueAsync(varSubsFields[i]));
      }
      return this.waitOnPromisesOrTimeout_(varSubPromises, 100);
    }

    /**
     * Send a request to the form's action endpoint.
     * @return {!Promise<!../../../src/utils/xhr-utils.FetchResponse>}
     * @private
     */

  }, {
    key: 'doActionXhr_',
    value: function doActionXhr_() {
      return this.doXhr_((0, _log.dev)().assertString(this.xhrAction_), this.method_);
    }

    /**
     * Send a request to the form's verify endpoint.
     * @return {!Promise<!../../../src/utils/xhr-utils.FetchResponse>}
     * @private
     */

  }, {
    key: 'doVerifyXhr_',
    value: function doVerifyXhr_() {
      return this.doXhr_((0, _log.dev)().assertString(this.xhrVerify_), this.method_, _defineProperty({}, _formVerifiers.FORM_VERIFY_PARAM, true));
    }

    /**
     * Send a request to a form endpoint.
     * @param {string} url
     * @param {string} method
     * @param {!Object<string, string>=} opt_extraFields
     * @return {!Promise<!../../../src/utils/xhr-utils.FetchResponse>}
     * @private
     */

  }, {
    key: 'doXhr_',
    value: function doXhr_(url, method, opt_extraFields) {
      this.assertSsrTemplate_(false, 'XHRs should be proxied.');
      var xhrUrl = void 0,
          body = void 0;
      var isHeadOrGet = method == 'GET' || method == 'HEAD';

      if (isHeadOrGet) {
        this.assertNoSensitiveFields_();
        var values = this.getFormAsObject_();
        if (opt_extraFields) {
          (0, _object.deepMerge)(values, opt_extraFields);
        }
        xhrUrl = (0, _url.addParamsToUrl)(url, values);
      } else {
        xhrUrl = url;
        body = new _formDataWrapper.FormDataWrapper(this.form_);
        for (var key in opt_extraFields) {
          body.append(key, opt_extraFields[key]);
        }
      }

      return this.xhr_.fetch(xhrUrl, {
        body: body,
        method: method,
        credentials: 'include',
        headers: (0, _object.dict)({
          'Accept': 'application/json'
        })
      });
    }

    /**
     * Transition the form to the submit success state.
     * @param {!JsonObject} response
     * @return {!Promise}
     * @private visible for testing
     */

  }, {
    key: 'handleSsrTemplateSuccess_',
    value: function handleSsrTemplateSuccess_(response) {
      return this.handleSubmitSuccess_(Promise.resolve(response['data']));
    }

    /**
     * Transition the form to the submit success state.
     * @param {!../../../src/utils/xhr-utils.FetchResponse} response
     * @return {!Promise}
     * @private visible for testing
     */

  }, {
    key: 'handleXhrSubmitSuccess_',
    value: function handleXhrSubmitSuccess_(response) {
      var _this8 = this;

      return this.handleSubmitSuccess_(response.json()).then(function () {
        _this8.triggerFormSubmitInAnalytics_('amp-form-submit-success');
        _this8.maybeHandleRedirect_(response);
      });
    }

    /**
     * Transition the form to the submit success state.
     * @param {!Promise<!JsonObject>} jsonPromise
     * @return {!Promise}
     * @private visible for testing
     */

  }, {
    key: 'handleSubmitSuccess_',
    value: function handleSubmitSuccess_(jsonPromise) {
      var _this9 = this;

      return jsonPromise.then(function (json) {
        _this9.setState_(FormState.SUBMIT_SUCCESS);
        _this9.renderTemplate_(json || {}).then(function () {
          _this9.triggerAction_(_formEvents.FormEvents.SUBMIT_SUCCESS, json);
        });
      }, function (error) {
        (0, _log.user)().error(TAG, 'Failed to parse response JSON: ' + error);
      });
    }

    /**
     * Transition the form the the submit error state.
     * @param {!Error} error
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'handleXhrSubmitFailure_',
    value: function handleXhrSubmitFailure_(error) {
      var _this10 = this;

      var promise = void 0;
      if (error && error.response) {
        promise = error.response.json().catch(function () {
          return null;
        });
      } else {
        promise = Promise.resolve(null);
      }
      return promise.then(function (responseJson) {

        _this10.triggerFormSubmitInAnalytics_('amp-form-submit-error');
        _this10.setState_(FormState.SUBMIT_ERROR);
        _this10.renderTemplate_(responseJson || {}).then(function () {
          _this10.triggerAction_(_formEvents.FormEvents.SUBMIT_ERROR, responseJson);
        });
        _this10.maybeHandleRedirect_(error.response);
        (0, _log.user)().error(TAG, 'Form submission failed: ' + error);
      });
    }

    /** @private */

  }, {
    key: 'handleNonXhrPost_',
    value: function handleNonXhrPost_() {
      // non-XHR POST requests are not supported.
      (0, _log.user)().assert(false, 'Only XHR based (via action-xhr attribute) submissions are supported ' + 'for POST requests. %s', this.form_);
    }

    /**
     * Executes variable substitutions on the passed fields.
     * @param {IArrayLike<!HTMLInputElement>} varSubsFields
     * @private
     */

  }, {
    key: 'handleNonXhrGet_',
    value: function handleNonXhrGet_(varSubsFields) {
      this.assertSsrTemplate_(false, 'Non-XHR GETs not supported.');
      this.assertNoSensitiveFields_();
      // Non-xhr GET requests replacement should happen synchronously.
      for (var i = 0; i < varSubsFields.length; i++) {
        this.urlReplacement_.expandInputValueSync(varSubsFields[i]);
      }
      this.triggerFormSubmitInAnalytics_('amp-form-submit');
    }

    /**
     * Throws an error related to viewer render template handling.
     * supported.
     * @param {boolean} value
     * @param {string} msg
     * @private
     */

  }, {
    key: 'assertSsrTemplate_',
    value: function assertSsrTemplate_(value, msg) {
      var supported = this.ssrTemplateHelper_.isSupported();
      (0, _log.user)().assert(supported === value, '[' + TAG + ']: viewerRenderTemplate | ' + msg);
    }

    /**
     * Fail if there are password or file fields present when the function
     * is called.
     * @private
     */

  }, {
    key: 'assertNoSensitiveFields_',
    value: function assertNoSensitiveFields_() {
      var fields = this.form_.querySelectorAll('input[type=password],input[type=file]');
      (0, _log.user)().assert(fields.length == 0, 'input[type=password] or input[type=file] ' + 'may only appear in form[method=post]');
    }

    /**
     * @return {boolean} False if the form is invalid.
     * @private
     */

  }, {
    key: 'checkValidity_',
    value: function checkValidity_() {
      if ((0, _formValidators.isCheckValiditySupported)(this.win_.document)) {
        // Validity checking should always occur, novalidate only circumvent
        // reporting and blocking submission on non-valid forms.
        var isValid = checkUserValidityOnSubmission(this.form_);
        if (this.shouldValidate_) {
          this.validator_.report();
          return isValid;
        }
      }
      return true;
    }

    /**
     * Handles response redirect throught the AMP-Redirect-To response header.
     * Not applicable if viewer can render templates.
     * @param {!../../../src/utils/xhr-utils.FetchResponse} response
     * @private
     */

  }, {
    key: 'maybeHandleRedirect_',
    value: function maybeHandleRedirect_(response) {
      this.assertSsrTemplate_(false, 'Redirects not supported.');
      if (!response || !response.headers) {
        return;
      }
      var redirectTo = response.headers.get(REDIRECT_TO_HEADER);
      if (redirectTo) {
        (0, _log.user)().assert(this.target_ != '_blank', 'Redirecting to target=_blank using AMP-Redirect-To is currently ' + 'not supported, use target=_top instead. %s', this.form_);
        try {
          var urlService = _services.Services.urlForDoc(this.form_);
          urlService.assertAbsoluteHttpOrHttpsUrl(redirectTo);
          urlService.assertHttpsUrl(redirectTo, 'AMP-Redirect-To', 'Url');
        } catch (e) {
          (0, _log.user)().assert(false, 'The `AMP-Redirect-To` header value must be an ' + 'absolute URL starting with https://. Found %s', redirectTo);
        }
        var navigator = _services.Services.navigationForDoc(this.form_);
        navigator.navigateTo(this.win_, redirectTo, REDIRECT_TO_HEADER);
      }
    }

    /**
     * Triggers either a submit-success or submit-error action with response data.
     * @param {!FormEvents} name
     * @param {?Object} detail
     * @private
     */

  }, {
    key: 'triggerAction_',
    value: function triggerAction_(name, detail) {
      var event = (0, _eventHelper.createCustomEvent)(this.win_, TAG + '.' + name, (0, _object.dict)({ 'response': detail }));
      this.actions_.trigger(this.form_, name, event, _actionConstants.ActionTrust.HIGH);
    }

    /**
     * Returns a race promise between resolving all promises or timing out.
     * @param {!Array<!Promise>} promises
     * @param {number} timeout
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'waitOnPromisesOrTimeout_',
    value: function waitOnPromisesOrTimeout_(promises, timeout) {
      return Promise.race([Promise.all(promises), this.timer_.promise(timeout)]);
    }

    /**
     * @param {string} eventType
     * @param {!Object<string, string>=} opt_vars A map of vars and their values.
     * @private
     */

  }, {
    key: 'analyticsEvent_',
    value: function analyticsEvent_(eventType, opt_vars) {
      (0, _analytics.triggerAnalyticsEvent)(this.form_, eventType, opt_vars);
    }

    /**
     * Returns form data as an object.
     * @return {!JsonObject}
     * @private
     */

  }, {
    key: 'getFormAsObject_',
    value: function getFormAsObject_() {
      return (0, _form.getFormAsObject)(this.form_);
    }

    /**
     * Adds proper classes for the state passed.
     * @param {!FormState} newState
     * @private
     */

  }, {
    key: 'setState_',
    value: function setState_(newState) {
      var previousState = this.state_;
      this.form_.classList.remove('amp-form-' + previousState);
      this.form_.classList.add('amp-form-' + newState);
      this.cleanupRenderedTemplate_(previousState);
      this.state_ = newState;
      this.submitButtons_.forEach(function (button) {
        if (newState == FormState.SUBMITTING) {
          button.setAttribute('disabled', '');
        } else {
          button.removeAttribute('disabled');
        }
      });
    }

    /**
     * Renders a template based on the form state and its presence in the form.
     * @param {!JsonObject} data
     * @return {!Promise}
     */

  }, {
    key: 'renderTemplate_',
    value: function renderTemplate_(data) {
      var _this11 = this;

      var container = this.form_. /*OK*/querySelector('[' + this.state_ + ']');
      var p = Promise.resolve();
      if (container) {
        var messageId = 'rendered-message-' + this.id_;
        container.setAttribute('role', 'alert');
        container.setAttribute('aria-labeledby', messageId);
        container.setAttribute('aria-live', 'assertive');
        if (this.templates_.hasTemplate(container)) {
          p = this.templates_.findAndRenderTemplate(container, data).then(function (rendered) {
            rendered.id = messageId;
            rendered.setAttribute('i-amphtml-rendered', '');
            container.appendChild(rendered);
            var renderedEvent = (0, _eventHelper.createCustomEvent)(_this11.win_, _ampEvents.AmpEvents.DOM_UPDATE,
            /* detail */null, { bubbles: true });
            container.dispatchEvent(renderedEvent);
          });
        } else {
          // TODO(vializ): This is to let AMP know that the AMP elements inside
          // this container are now visible so they get scheduled for layout.
          // This will be unnecessary when the AMP Layers implementation is
          // complete. We call mutateElement here and not where the template is
          // made visible so that we don't do redundant layout work when a
          // template is rendered too.
          this.resources_.mutateElement(container, function () {});
        }
      }

      if ((0, _mode.getMode)().test) {
        this.renderTemplatePromise_ = p;
      }

      return p;
    }

    /**
     * Removes the template for the passed state.
     * @param {!FormState} state
     * @private
     */

  }, {
    key: 'cleanupRenderedTemplate_',
    value: function cleanupRenderedTemplate_(state) {
      var container = this.form_. /*OK*/querySelector('[' + state + ']');
      if (!container) {
        return;
      }
      var previousRender = (0, _dom.childElementByAttr)(container, 'i-amphtml-rendered');
      if (previousRender) {
        (0, _dom.removeElement)(previousRender);
      }
    }

    /**
     * Returns a promise that resolves when tempalte render finishes. The promise
     * will be null if the template render has not started.
     * @visibleForTesting
     */

  }, {
    key: 'renderTemplatePromiseForTesting',
    value: function renderTemplatePromiseForTesting() {
      return this.renderTemplatePromise_;
    }

    /**
     * Returns a promise that resolves when xhr submit finishes. The promise
     * will be null if xhr submit has not started.
     * @visibleForTesting
     */

  }, {
    key: 'xhrSubmitPromiseForTesting',
    value: function xhrSubmitPromiseForTesting() {
      return this.xhrSubmitPromise_;
    }
  }]);

  return AmpForm;
}();

/**
 * Checks user validity for all inputs, fieldsets and the form.
 * @param {!HTMLFormElement} form
 * @return {boolean} Whether the form is currently valid or not.
 */


function checkUserValidityOnSubmission(form) {
  var elements = form.querySelectorAll('input,select,textarea,fieldset');
  (0, _dom.iterateCursor)(elements, function (element) {
    return checkUserValidity(element);
  });
  return checkUserValidity(form);
}

/**
 * Returns the user validity state of the element.
 * @param {!Element} element
 * @return {string}
 */
function getUserValidityStateFor(element) {
  if (element.classList.contains('user-valid')) {
    return UserValidityState.USER_VALID;
  } else if (element.classList.contains('user-invalid')) {
    return UserValidityState.USER_INVALID;
  }

  return UserValidityState.NONE;
}

/**
 * Updates class names on the element to reflect the active invalid types on it.
 *
 * @param {!Element} element
 */
function updateInvalidTypesClasses(element) {
  if (!element.validity) {
    return;
  }
  for (var validationType in element.validity) {
    element.classList.toggle(validationType, element.validity[validationType]);
  }
}

/**
 * Removes all validity classes from elements in the given form.
 * @param {!Element} form
 */
function removeValidityStateClasses(form) {
  var dummyInput = document.createElement('input');

  var _loop = function _loop(validityState) {
    var elements = form.querySelectorAll('.' + (0, _dom.escapeCssSelectorIdent)(validityState));
    (0, _dom.iterateCursor)(elements, function (element) {
      return element.classList.remove(validityState);
    });
  };

  for (var validityState in dummyInput.validity) {
    _loop(validityState);
  }
}

/**
 * Checks user validity which applies .user-valid and .user-invalid AFTER the
 * user interacts with the input by moving away from the input (blur) or by
 * changing its value (input).
 *
 * See :user-invalid spec for more details:
 *   https://drafts.csswg.org/selectors-4/#user-pseudos
 *
 * The specs are still not fully specified. The current solution tries to follow
 * a common sense approach for when to apply these classes. As the specs gets
 * clearer, we should strive to match it as much as possible.
 *
 * @param {!Element} element
 * @param {boolean=} propagate Whether to propagate the user validity to
 * ancestors.
 * @return {boolean} Whether the element is valid or not.
 */
function checkUserValidity(element) {
  var propagate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // TODO(mkhatib, #6930): Implement basic validation for custom inputs like
  // amp-selector.
  // If this is not a field type with checkValidity don't do anything.
  if (!element.checkValidity) {
    return true;
  }
  var shouldPropagate = false;
  var previousValidityState = getUserValidityStateFor(element);
  var isCurrentlyValid = element.checkValidity();
  if (previousValidityState != UserValidityState.USER_VALID && isCurrentlyValid) {
    element.classList.add('user-valid');
    element.classList.remove('user-invalid');
    // Don't propagate user-valid unless it was marked invalid before.
    shouldPropagate = previousValidityState == UserValidityState.USER_INVALID;
  } else if (previousValidityState != UserValidityState.USER_INVALID && !isCurrentlyValid) {
    element.classList.add('user-invalid');
    element.classList.remove('user-valid');
    // Always propagate an invalid state change. One invalid input field is
    // guaranteed to make the fieldset and form invalid as well.
    shouldPropagate = true;
  }
  updateInvalidTypesClasses(element);

  if (propagate && shouldPropagate) {
    // Propagate user validity to ancestor fieldsets.
    var ancestors = (0, _dom.ancestorElementsByTag)(element, 'fieldset');
    for (var i = 0; i < ancestors.length; i++) {
      checkUserValidity(ancestors[i]);
    }
    // Also update the form user validity.
    if (element.form) {
      checkUserValidity(element.form);
    }
  }

  return isCurrentlyValid;
}

/**
 * Responds to user interaction with an input by checking user validity of the
 * input and possibly its input-related ancestors (e.g. feildset, form).
 * @param {!Element} input
 * @private visible for testing.
 */
function checkUserValidityAfterInteraction_(input) {
  checkUserValidity(input, /* propagate */true);
}

/**
 * Bootstraps the amp-form elements
 */

var AmpFormService = exports.AmpFormService = function () {
  /**
   * @param  {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   */
  function AmpFormService(ampdoc) {
    var _this12 = this;

    _classCallCheck(this, AmpFormService);

    /** @const @private {!Promise} */
    this.whenInitialized_ = this.installStyles_(ampdoc).then(function () {
      return _this12.installHandlers_(ampdoc);
    });

    // Dispatch a test-only event for integration tests.
    if ((0, _mode.getMode)().test) {
      this.whenInitialized_.then(function () {
        var win = ampdoc.win;

        var event = (0, _eventHelper.createCustomEvent)(win, _formEvents.FormEvents.SERVICE_INIT, null, { bubbles: true });
        win.dispatchEvent(event);
      });
    }
  }

  /**
   * Returns a promise that resolves when all form implementations (if any)
   * have been upgraded.
   * @return {!Promise}
   */


  _createClass(AmpFormService, [{
    key: 'whenInitialized',
    value: function whenInitialized() {
      return this.whenInitialized_;
    }

    /**
     * Install the amp-form CSS
     * @param  {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'installStyles_',
    value: function installStyles_(ampdoc) {
      var deferred = new _promise.Deferred();
      (0, _styleInstaller.installStylesForDoc)(ampdoc, _ampForm.CSS, deferred.resolve, false, TAG);
      return deferred.promise;
    }

    /**
     * Install the event handlers
     * @param  {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
     * @return {!Promise}
     * @private
     */

  }, {
    key: 'installHandlers_',
    value: function installHandlers_(ampdoc) {
      var _this13 = this;

      return ampdoc.whenReady().then(function () {
        _this13.installSubmissionHandlers_(ampdoc.getRootNode().querySelectorAll('form'));
        _this13.installGlobalEventListener_(ampdoc.getRootNode());
      });
    }

    /**
     * Install submission handler on all forms in the document.
     * @param {?IArrayLike<T>} forms
     * @template T
     * @private
     */

  }, {
    key: 'installSubmissionHandlers_',
    value: function installSubmissionHandlers_(forms) {
      if (!forms) {
        return;
      }

      (0, _dom.iterateCursor)(forms, function (form, index) {
        var existingAmpForm = (0, _form.formOrNullForElement)(form);
        if (!existingAmpForm) {
          new AmpForm(form, 'amp-form-' + index);
        }
      });
    }

    /**
     * Listen for DOM updated messages sent to the document.
     * @param {!Document|!ShadowRoot} doc
     * @private
     */

  }, {
    key: 'installGlobalEventListener_',
    value: function installGlobalEventListener_(doc) {
      var _this14 = this;

      doc.addEventListener(_ampEvents.AmpEvents.DOM_UPDATE, function () {
        _this14.installSubmissionHandlers_(doc.querySelectorAll('form'));
      });
    }
  }]);

  return AmpFormService;
}();

AMP.extension(TAG, '0.1', function (AMP) {
  AMP.registerServiceForDoc(TAG, AmpFormService);
});

},{"../../../build/amp-form-0.1.css":1,"../../../src/action-constants":10,"../../../src/amp-events":11,"../../../src/analytics":12,"../../../src/dom":15,"../../../src/event-helper":19,"../../../src/form":23,"../../../src/form-data-wrapper":22,"../../../src/log":24,"../../../src/mode":26,"../../../src/services":39,"../../../src/ssr-template-helper":40,"../../../src/style-installer":42,"../../../src/types":44,"../../../src/url":47,"../../../src/utils/object":50,"../../../src/utils/promise":51,"./form-events":3,"./form-proxy":4,"./form-validators":5,"./form-verifiers":6}],3:[function(require,module,exports){
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

/** @enum {string} */
var FormEvents = exports.FormEvents = {
  INVALID: 'invalid',
  SERVICE_INIT: 'amp:form-service:initialize', // Dispatched by the window when AmpFormService initializes.
  SUBMIT_ERROR: 'submit-error',
  SUBMIT_SUCCESS: 'submit-success',
  SUBMIT: 'submit',
  VALID: 'valid',
  VERIFY_ERROR: 'verify-error',
  VERIFY: 'verify'
};

},{}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBlacklistedPropertiesForTesting = setBlacklistedPropertiesForTesting;
exports.installFormProxy = installFormProxy;

var _services = require('../../../src/services');

var _log = require('../../../src/log');

var _string = require('../../../src/string');

var _types = require('../../../src/types');

/**
 * Blacklisted properties. Used mainly fot testing.
 * @type {?Array<string>}
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

var blacklistedProperties = null;

/**
 * @param {?Array<string>} properties
 * @visibleForTesting
 */
function setBlacklistedPropertiesForTesting(properties) {
  blacklistedProperties = properties;
}

/**
 * Creates a proxy object `form.$p` that proxies all of the methods and
 * properties to the original DOM APIs. This is to work around the problematic
 * forms feature where inputs mask DOM APIs.
 *
 * E.g. a `<input id="id">` will override `form.id` from the original DOM API.
 * Form proxy will give access to the original `id` value via `form.$p.id`.
 *
 * See https://medium.com/@dvoytenko/solving-conflicts-between-form-inputs-and-dom-api-535c45333ae4
 *
 * @param {!HTMLFormElement} form
 * @return {!Object}
 */
function installFormProxy(form) {
  var constr = getFormProxyConstr((0, _types.toWin)(form.ownerDocument.defaultView));
  var proxy = new constr(form);
  if (!('action' in proxy)) {
    setupLegacyProxy(form, proxy);
  }
  form['$p'] = proxy;
  return proxy;
}

/**
 * @param {!Window} win
 * @return {function(new:Object, !HTMLFormElement)}
 */
function getFormProxyConstr(win) {
  if (!win.FormProxy) {
    win.FormProxy = createFormProxyConstr(win);
  }
  return win.FormProxy;
}

/**
 * @param {!Window} win
 * @return {function(new:Object, !HTMLFormElement)}
 */
function createFormProxyConstr(win) {

  /**
   * @param {!HTMLFormElement} form
   * @constructor
   */
  function FormProxy(form) {
    /** @private @const {!HTMLFormElement} */
    this.form_ = form;
  }

  var FormProxyProto = FormProxy.prototype;
  var Object = win.Object;

  var ObjectProto = Object.prototype;

  // Hierarchy:
  //   Node  <==  Element <== HTMLElement <== HTMLFormElement
  //   EventTarget  <==  HTMLFormElement
  var baseClasses = [win.HTMLFormElement, win.EventTarget];
  var inheritance = baseClasses.reduce(function (all, klass) {
    var proto = klass && klass.prototype;
    while (proto && proto !== ObjectProto) {
      if (all.indexOf(proto) >= 0) {
        break;
      }
      all.push(proto);
      proto = Object.getPrototypeOf(proto);
    }

    return all;
  }, []);

  inheritance.forEach(function (proto) {
    var _loop = function _loop(name) {
      var property = win.Object.getOwnPropertyDescriptor(proto, name);
      if (!property ||
      // Exclude constants.
      name.toUpperCase() == name ||
      // Exclude on-events.
      (0, _string.startsWith)(name, 'on') ||
      // Exclude properties that already been created.
      ObjectProto.hasOwnProperty.call(FormProxyProto, name) ||
      // Exclude some properties. Currently only used for testing.
      blacklistedProperties && blacklistedProperties.includes(name)) {
        return 'continue';
      }
      if (typeof property.value == 'function') {
        // A method call. Call the original prototype method via `call`.
        var method = property.value;
        FormProxyProto[name] = function () {
          return method.apply( /** @type {!FormProxy} */this.form_, arguments);
        };
      } else {
        // A read/write property. Call the original prototype getter/setter.
        var spec = {};
        if (property.get) {
          spec.get = function () {
            return property.get.call( /** @type {!FormProxy} */this.form_);
          };
        }
        if (property.set) {
          spec.set = function (v) {
            return property.set.call( /** @type {!FormProxy} */this.form_, v);
          };
        }
        win.Object.defineProperty(FormProxyProto, name, spec);
      }
    };

    for (var name in proto) {
      var _ret = _loop(name);

      if (_ret === 'continue') continue;
    }
  });

  return FormProxy;
}

/**
 * This is a very heavy-handed way to support browsers that do not have
 * properties defined in the prototype chain. Specifically, this is necessary
 * for Chrome 45 and under.
 *
 * See https://developers.google.com/web/updates/2015/04/DOM-attributes-now-on-the-prototype-chain
 * for more info.
 *
 * @param {!HTMLFormElement} form
 * @param {!Object} proxy
 */
function setupLegacyProxy(form, proxy) {
  var win = form.ownerDocument.defaultView;
  var proto = win.HTMLFormElement.prototype.cloneNode.call(form, /* deep */false);

  var _loop2 = function _loop2(name) {
    if (name in proxy ||
    // Exclude constants.
    name.toUpperCase() == name ||
    // Exclude on-events.
    (0, _string.startsWith)(name, 'on')) {
      return 'continue';
    }
    var desc = LEGACY_PROPS[name];
    var current = form[name];
    if (desc) {
      if (desc.access == LegacyPropAccessType.READ_ONCE) {
        // A property such as `style`. The only way is to read this value
        // once and use it for all subsequent calls.
        var actual = void 0;
        if (current && current.nodeType) {
          // The overriding input, if present, has to be removed and re-added
          // (renaming does NOT work). Completely insane, I know.
          var element = (0, _log.dev)().assertElement(current);
          var nextSibling = element.nextSibling,
              parent = element.parentNode;

          parent.removeChild(element);
          try {
            actual = form[name];
          } finally {
            parent.insertBefore(element, nextSibling);
          }
        } else {
          actual = current;
        }
        Object.defineProperty(proxy, name, {
          get: function get() {
            return actual;
          }
        });
      } else if (desc.access == LegacyPropAccessType.ATTR) {
        // An attribute-based property. We can use DOM API to read and write
        // with a minimal type conversion.
        var attr = desc.attr || name;
        Object.defineProperty(proxy, name, {
          get: function get() {
            var value = proxy.getAttribute(attr);
            if (value == null && desc.def !== undefined) {
              return desc.def;
            }
            if (desc.type == LegacyPropDataType.BOOL) {
              return value === 'true';
            }
            if (desc.type == LegacyPropDataType.TOGGLE) {
              return value != null;
            }
            if (desc.type == LegacyPropDataType.URL) {
              // URLs, e.g. in `action` attribute are resolved against the
              // document's base.
              var str = /** @type {string} */value || '';
              return _services.Services.urlForDoc(form).parse(str).href;
            }
            return value;
          },
          set: function set(value) {
            if (desc.type == LegacyPropDataType.TOGGLE) {
              if (value) {
                value = '';
              } else {
                value = null;
              }
            }
            if (value != null) {
              proxy.setAttribute(attr, value);
            } else {
              proxy.removeAttribute(attr);
            }
          }
        });
      } else {
        (0, _log.dev)().assert(false, 'unknown property access type: %s', desc.access);
      }
    } else {
      // Not a known property - proxy directly.
      Object.defineProperty(proxy, name, {
        get: function get() {
          return form[name];
        },
        set: function set(value) {
          form[name] = value;
        }
      });
    }
  };

  for (var name in proto) {
    var _ret2 = _loop2(name);

    if (_ret2 === 'continue') continue;
  }
}

/**
 * @enum {number}
 */
var LegacyPropAccessType = {
  ATTR: 1,
  READ_ONCE: 2
};

/**
 * @enum {number}
 */
var LegacyPropDataType = {
  URL: 1,
  BOOL: 2,
  TOGGLE: 3
};

/**
 * @const {!Object<string, {
 *   access: !LegacyPropAccessType,
 *   attr: (string|undefined),
 *   type: (LegacyPropDataType|undefined),
 *   def: *,
 * }>}
 */
var LEGACY_PROPS = {
  'acceptCharset': {
    access: LegacyPropAccessType.ATTR,
    attr: 'accept-charset'
  },
  'accessKey': {
    access: LegacyPropAccessType.ATTR,
    attr: 'accesskey'
  },
  'action': {
    access: LegacyPropAccessType.ATTR,
    type: LegacyPropDataType.URL
  },
  'attributes': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'autocomplete': {
    access: LegacyPropAccessType.ATTR,
    def: 'on'
  },
  'children': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'dataset': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'dir': {
    access: LegacyPropAccessType.ATTR
  },
  'draggable': {
    access: LegacyPropAccessType.ATTR,
    type: LegacyPropDataType.BOOL,
    def: false
  },
  'elements': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'encoding': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'enctype': {
    access: LegacyPropAccessType.ATTR
  },
  'hidden': {
    access: LegacyPropAccessType.ATTR,
    type: LegacyPropDataType.TOGGLE,
    def: false
  },
  'id': {
    access: LegacyPropAccessType.ATTR,
    def: ''
  },
  'lang': {
    access: LegacyPropAccessType.ATTR
  },
  'localName': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'method': {
    access: LegacyPropAccessType.ATTR,
    def: 'get'
  },
  'name': {
    access: LegacyPropAccessType.ATTR
  },
  'noValidate': {
    access: LegacyPropAccessType.ATTR,
    attr: 'novalidate',
    type: LegacyPropDataType.TOGGLE,
    def: false
  },
  'prefix': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'spellcheck': {
    access: LegacyPropAccessType.ATTR
  },
  'style': {
    access: LegacyPropAccessType.READ_ONCE
  },
  'target': {
    access: LegacyPropAccessType.ATTR,
    def: ''
  },
  'title': {
    access: LegacyPropAccessType.ATTR
  },
  'translate': {
    access: LegacyPropAccessType.ATTR
  }
};

},{"../../../src/log":24,"../../../src/services":39,"../../../src/string":41,"../../../src/types":44}],5:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractAndSubmitValidator = exports.AsYouGoValidator = exports.ShowAllOnSubmitValidator = exports.ShowFirstOnSubmitValidator = exports.AbstractCustomValidator = exports.PolyfillDefaultValidator = exports.DefaultValidator = exports.FormValidator = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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


exports.setReportValiditySupportedForTesting = setReportValiditySupportedForTesting;
exports.setCheckValiditySupportedForTesting = setCheckValiditySupportedForTesting;
exports.getFormValidator = getFormValidator;
exports.isCheckValiditySupported = isCheckValiditySupported;

var _formEvents = require('./form-events');

var _services = require('../../../src/services');

var _validationBubble = require('./validation-bubble');

var _eventHelper = require('../../../src/event-helper');

var _log = require('../../../src/log');

var _types = require('../../../src/types');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @type {boolean|undefined} */
var reportValiditySupported = void 0;

/** @type {boolean|undefined} */
var checkValiditySupported = void 0;

/** @type {number} */
var validationBubbleCount = 0;

/**
 * @param {boolean} isSupported
 * @private visible for testing.
 */
function setReportValiditySupportedForTesting(isSupported) {
  reportValiditySupported = isSupported;
}

/**
 * @param {boolean} isSupported
 * @private visible for testing.
 */
function setCheckValiditySupportedForTesting(isSupported) {
  checkValiditySupported = isSupported;
}

/** @const @enum {string} */
var CustomValidationTypes = {
  AsYouGo: 'as-you-go',
  ShowAllOnSubmit: 'show-all-on-submit',
  InteractAndSubmit: 'interact-and-submit',
  ShowFirstOnSubmit: 'show-first-on-submit'
};

/**
 * Form validator interface.
 * @abstract
 */

var FormValidator = exports.FormValidator = function () {

  /**
   * @param {!HTMLFormElement} form
   */
  function FormValidator(form) {
    _classCallCheck(this, FormValidator);

    /** @protected @const {!HTMLFormElement} */
    this.form = form;

    /** @protected @const {!../../../src/service/ampdoc-impl.AmpDoc} */
    this.ampdoc = _services.Services.ampdoc(form);

    /** @const @protected {!../../../src/service/resources-impl.Resources} */
    this.resources = _services.Services.resourcesForDoc(form);

    /** @protected @const {!Document|!ShadowRoot} */
    this.root = this.ampdoc.getRootNode();

    /**
     * Tribool indicating last known validity of form.
     * @private {boolean|null}
     */
    this.formValidity_ = null;
  }

  /**
   * Called to report validation errors.
   */


  _createClass(FormValidator, [{
    key: 'report',
    value: function report() {}

    /**
     * @param {!Event} unusedEvent
     */

  }, {
    key: 'onBlur',
    value: function onBlur(unusedEvent) {}

    /**
     * @param {!Event} unusedEvent
     */

  }, {
    key: 'onInput',
    value: function onInput(unusedEvent) {}

    /**
     * Fires a valid/invalid event from the form if its validity state
     * has changed since the last invocation of this function.
     * @visibleForTesting
     */

  }, {
    key: 'fireValidityEventIfNecessary',
    value: function fireValidityEventIfNecessary() {
      var previousValidity = this.formValidity_;
      this.formValidity_ = this.form.checkValidity();
      if (previousValidity !== this.formValidity_) {
        var win = (0, _types.toWin)(this.form.ownerDocument.defaultView);
        var type = this.formValidity_ ? _formEvents.FormEvents.VALID : _formEvents.FormEvents.INVALID;
        var event = (0, _eventHelper.createCustomEvent)(win, type, null, { bubbles: true });
        this.form.dispatchEvent(event);
      }
    }
  }]);

  return FormValidator;
}();

/** @private visible for testing */


var DefaultValidator = exports.DefaultValidator = function (_FormValidator) {
  _inherits(DefaultValidator, _FormValidator);

  function DefaultValidator() {
    _classCallCheck(this, DefaultValidator);

    return _possibleConstructorReturn(this, (DefaultValidator.__proto__ || Object.getPrototypeOf(DefaultValidator)).apply(this, arguments));
  }

  _createClass(DefaultValidator, [{
    key: 'report',


    /** @override */
    value: function report() {
      this.form.reportValidity();
      this.fireValidityEventIfNecessary();
    }
  }]);

  return DefaultValidator;
}(FormValidator);

/** @private visible for testing */


var PolyfillDefaultValidator = exports.PolyfillDefaultValidator = function (_FormValidator2) {
  _inherits(PolyfillDefaultValidator, _FormValidator2);

  /**
   * Creates an instance of PolyfillDefaultValidator.
   * @param {!HTMLFormElement} form
   */
  function PolyfillDefaultValidator(form) {
    _classCallCheck(this, PolyfillDefaultValidator);

    var _this2 = _possibleConstructorReturn(this, (PolyfillDefaultValidator.__proto__ || Object.getPrototypeOf(PolyfillDefaultValidator)).call(this, form));

    var bubbleId = 'i-amphtml-validation-bubble-' + validationBubbleCount++;
    /** @private @const {!./validation-bubble.ValidationBubble} */
    _this2.validationBubble_ = new _validationBubble.ValidationBubble(_this2.ampdoc, bubbleId);
    return _this2;
  }

  /** @override */


  _createClass(PolyfillDefaultValidator, [{
    key: 'report',
    value: function report() {
      var inputs = this.form.querySelectorAll('input,select,textarea');
      for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
          inputs[i]. /*REVIEW*/focus();
          this.validationBubble_.show(inputs[i], inputs[i].validationMessage);
          break;
        }
      }

      this.fireValidityEventIfNecessary();
    }

    /** @override */

  }, {
    key: 'onBlur',
    value: function onBlur(unusedEvent) {
      this.validationBubble_.hide();
    }

    /** @override */

  }, {
    key: 'onInput',
    value: function onInput(event) {
      var input = (0, _log.dev)().assertElement(event.target);
      if (!this.validationBubble_.isActiveOn(input)) {
        return;
      }

      if (input.checkValidity()) {
        input.removeAttribute('aria-invalid');
        this.validationBubble_.hide();
      } else {
        input.setAttribute('aria-invalid', 'true');
        this.validationBubble_.show(input, input.validationMessage);
      }
    }
  }]);

  return PolyfillDefaultValidator;
}(FormValidator);

/**
 * @abstract
 * @private visible for testing
 */


var AbstractCustomValidator = exports.AbstractCustomValidator = function (_FormValidator3) {
  _inherits(AbstractCustomValidator, _FormValidator3);

  /**
   * Creates an instance of AbstractCustomValidator.
   * @param {!HTMLFormElement} form
   */
  function AbstractCustomValidator(form) {
    _classCallCheck(this, AbstractCustomValidator);

    /** @private @const {!Object<string, ?Element>} */
    var _this3 = _possibleConstructorReturn(this, (AbstractCustomValidator.__proto__ || Object.getPrototypeOf(AbstractCustomValidator)).call(this, form));

    _this3.inputValidationsDict_ = {};

    /** @private @const {!Object<string, ?Element>} */
    _this3.inputVisibleValidationDict_ = {};
    return _this3;
  }

  /**
   * @param {!Element} input
   */


  _createClass(AbstractCustomValidator, [{
    key: 'reportInput',
    value: function reportInput(input) {
      var invalidType = getInvalidType(input);
      if (invalidType) {
        this.showValidationFor(input, invalidType);
      }
    }

    /**
     * Hides all validation messages.
     */

  }, {
    key: 'hideAllValidations',
    value: function hideAllValidations() {
      for (var id in this.inputVisibleValidationDict_) {
        var input = this.root.getElementById(id);
        this.hideValidationFor((0, _log.dev)().assertElement(input));
      }
    }

    /**
     * @param {!Element} input
     * @param {string} invalidType
     * @return {?Element}
     */

  }, {
    key: 'getValidationFor',
    value: function getValidationFor(input, invalidType) {
      if (!input.id) {
        return null;
      }
      var selector = '[visible-when-invalid=' + invalidType + ']' + ('[validation-for=' + input.id + ']');
      if (this.inputValidationsDict_[selector] === undefined) {
        this.inputValidationsDict_[selector] = this.root.querySelector(selector);
      }
      return this.inputValidationsDict_[selector];
    }

    /**
     * @param {!Element} input
     * @param {string} invalidType
     */

  }, {
    key: 'showValidationFor',
    value: function showValidationFor(input, invalidType) {
      var validation = this.getValidationFor(input, invalidType);
      if (!validation) {
        return;
      }

      if (!validation.textContent.trim()) {
        validation.textContent = input.validationMessage;
      }
      this.inputVisibleValidationDict_[input.id] = validation;

      this.resources.mutateElement(input, function () {
        return input.setAttribute('aria-invalid', 'true');
      });
      this.resources.mutateElement(validation, function () {
        return validation.classList.add('visible');
      });
    }

    /**
     * @param {!Element} input
     */

  }, {
    key: 'hideValidationFor',
    value: function hideValidationFor(input) {
      var visibleValidation = this.getVisibleValidationFor(input);
      if (!visibleValidation) {
        return;
      }
      delete this.inputVisibleValidationDict_[input.id];

      this.resources.mutateElement(input, function () {
        return input.removeAttribute('aria-invalid');
      });
      this.resources.mutateElement(visibleValidation, function () {
        return visibleValidation.classList.remove('visible');
      });
    }

    /**
     * @param {!Element} input
     * @return {?Element}
     */

  }, {
    key: 'getVisibleValidationFor',
    value: function getVisibleValidationFor(input) {
      if (!input.id) {
        return null;
      }
      return this.inputVisibleValidationDict_[input.id];
    }

    /**
     * Whether an input should validate after an interaction.
     * @param {!Element} unusedInput
     * @return {boolean}
     */

  }, {
    key: 'shouldValidateOnInteraction',
    value: function shouldValidateOnInteraction(unusedInput) {
      throw Error('Not Implemented');
    }

    /**
     * @param {!Event} event
     */

  }, {
    key: 'onInteraction',
    value: function onInteraction(event) {
      var input = (0, _log.dev)().assertElement(event.target);
      var shouldValidate = !!input.checkValidity && this.shouldValidateOnInteraction(input);

      this.hideValidationFor(input);
      if (shouldValidate && !input.checkValidity()) {
        this.reportInput(input);
      }
    }

    /** @override */

  }, {
    key: 'onBlur',
    value: function onBlur(event) {
      this.onInteraction(event);
    }

    /** @override */

  }, {
    key: 'onInput',
    value: function onInput(event) {
      this.onInteraction(event);
    }
  }]);

  return AbstractCustomValidator;
}(FormValidator);

/** @private visible for testing */


var ShowFirstOnSubmitValidator = exports.ShowFirstOnSubmitValidator = function (_AbstractCustomValida) {
  _inherits(ShowFirstOnSubmitValidator, _AbstractCustomValida);

  function ShowFirstOnSubmitValidator() {
    _classCallCheck(this, ShowFirstOnSubmitValidator);

    return _possibleConstructorReturn(this, (ShowFirstOnSubmitValidator.__proto__ || Object.getPrototypeOf(ShowFirstOnSubmitValidator)).apply(this, arguments));
  }

  _createClass(ShowFirstOnSubmitValidator, [{
    key: 'report',


    /** @override */
    value: function report() {
      this.hideAllValidations();
      var inputs = this.form.querySelectorAll('input,select,textarea');
      for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
          this.reportInput(inputs[i]);
          inputs[i]. /*REVIEW*/focus();
          break;
        }
      }

      this.fireValidityEventIfNecessary();
    }

    /** @override */

  }, {
    key: 'shouldValidateOnInteraction',
    value: function shouldValidateOnInteraction(input) {
      return !!this.getVisibleValidationFor(input);
    }
  }]);

  return ShowFirstOnSubmitValidator;
}(AbstractCustomValidator);

/** @private visible for testing */


var ShowAllOnSubmitValidator = exports.ShowAllOnSubmitValidator = function (_AbstractCustomValida2) {
  _inherits(ShowAllOnSubmitValidator, _AbstractCustomValida2);

  function ShowAllOnSubmitValidator() {
    _classCallCheck(this, ShowAllOnSubmitValidator);

    return _possibleConstructorReturn(this, (ShowAllOnSubmitValidator.__proto__ || Object.getPrototypeOf(ShowAllOnSubmitValidator)).apply(this, arguments));
  }

  _createClass(ShowAllOnSubmitValidator, [{
    key: 'report',


    /** @override */
    value: function report() {
      this.hideAllValidations();
      var firstInvalidInput = null;
      var inputs = this.form.querySelectorAll('input,select,textarea');
      for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
          firstInvalidInput = firstInvalidInput || inputs[i];
          this.reportInput(inputs[i]);
        }
      }

      if (firstInvalidInput) {
        firstInvalidInput. /*REVIEW*/focus();
      }

      this.fireValidityEventIfNecessary();
    }

    /** @override */

  }, {
    key: 'shouldValidateOnInteraction',
    value: function shouldValidateOnInteraction(input) {
      return !!this.getVisibleValidationFor(input);
    }
  }]);

  return ShowAllOnSubmitValidator;
}(AbstractCustomValidator);

/** @private visible for testing */


var AsYouGoValidator = exports.AsYouGoValidator = function (_AbstractCustomValida3) {
  _inherits(AsYouGoValidator, _AbstractCustomValida3);

  function AsYouGoValidator() {
    _classCallCheck(this, AsYouGoValidator);

    return _possibleConstructorReturn(this, (AsYouGoValidator.__proto__ || Object.getPrototypeOf(AsYouGoValidator)).apply(this, arguments));
  }

  _createClass(AsYouGoValidator, [{
    key: 'shouldValidateOnInteraction',

    /** @override */
    value: function shouldValidateOnInteraction(unusedInput) {
      return true;
    }

    /** @override */

  }, {
    key: 'onInteraction',
    value: function onInteraction(event) {
      _get(AsYouGoValidator.prototype.__proto__ || Object.getPrototypeOf(AsYouGoValidator.prototype), 'onInteraction', this).call(this, event);
      this.fireValidityEventIfNecessary();
    }
  }]);

  return AsYouGoValidator;
}(AbstractCustomValidator);

/** @private visible for testing */


var InteractAndSubmitValidator = exports.InteractAndSubmitValidator = function (_ShowAllOnSubmitValid) {
  _inherits(InteractAndSubmitValidator, _ShowAllOnSubmitValid);

  function InteractAndSubmitValidator() {
    _classCallCheck(this, InteractAndSubmitValidator);

    return _possibleConstructorReturn(this, (InteractAndSubmitValidator.__proto__ || Object.getPrototypeOf(InteractAndSubmitValidator)).apply(this, arguments));
  }

  _createClass(InteractAndSubmitValidator, [{
    key: 'shouldValidateOnInteraction',

    /** @override */
    value: function shouldValidateOnInteraction(unusedInput) {
      return true;
    }

    /** @override */

  }, {
    key: 'onInteraction',
    value: function onInteraction(event) {
      _get(InteractAndSubmitValidator.prototype.__proto__ || Object.getPrototypeOf(InteractAndSubmitValidator.prototype), 'onInteraction', this).call(this, event);
      this.fireValidityEventIfNecessary();
    }
  }]);

  return InteractAndSubmitValidator;
}(ShowAllOnSubmitValidator);

/**
 * Returns the form validator instance.
 *
 * @param {!HTMLFormElement} form
 * @return {!FormValidator}
 */


function getFormValidator(form) {
  var customValidation = form.getAttribute('custom-validation-reporting');
  switch (customValidation) {
    case CustomValidationTypes.AsYouGo:
      return new AsYouGoValidator(form);
    case CustomValidationTypes.ShowAllOnSubmit:
      return new ShowAllOnSubmitValidator(form);
    case CustomValidationTypes.InteractAndSubmit:
      return new InteractAndSubmitValidator(form);
    case CustomValidationTypes.ShowFirstOnSubmit:
      return new ShowFirstOnSubmitValidator(form);
  }

  if (isReportValiditySupported(form.ownerDocument)) {
    return new DefaultValidator(form);
  }

  return new PolyfillDefaultValidator(form);
}

/**
 * Returns whether reportValidity API is supported.
 * @param {?Document} doc
 * @return {boolean}
 */
function isReportValiditySupported(doc) {
  if (doc && reportValiditySupported === undefined) {
    reportValiditySupported = !!document.createElement('form').reportValidity;
  }
  return !!reportValiditySupported;
}

/**
 * Returns whether reportValidity API is supported.
 * @param {!Document} doc
 * @return {boolean}
 */
function isCheckValiditySupported(doc) {
  if (checkValiditySupported === undefined) {
    checkValiditySupported = !!doc.createElement('input').checkValidity;
  }
  return checkValiditySupported;
}

/**
 * Returns invalid error type on the input.
 * @param {!Element} input
 * @return {?string}
 */
function getInvalidType(input) {
  for (var invalidType in input.validity) {
    if (input.validity[invalidType]) {
      return invalidType;
    }
  }
  return null;
}

},{"../../../src/event-helper":19,"../../../src/log":24,"../../../src/services":39,"../../../src/types":44,"./form-events":3,"./validation-bubble":7}],6:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncVerifier = exports.DefaultVerifier = exports.FormVerifier = exports.FORM_VERIFY_PARAM = undefined;

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

exports.getFormVerifier = getFormVerifier;

var _promise = require('../../../src/utils/promise');

var _dom = require('../../../src/dom');

var _log = require('../../../src/log');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FORM_VERIFY_PARAM = exports.FORM_VERIFY_PARAM = '__amp_form_verify';

/**
 * @typedef {{
 *    name:string,
 *    message:string
 *  }}
 */
var VerificationErrorDef = void 0;

/**
 * @typedef {{
 *   updatedElements:!Array<!Element>,
 *   errors:!Array<!VerificationErrorDef>
 * }}
 */
var UpdatedErrorsDef = void 0;

/**
 * Construct the correct form verifier based on whether
 * a config block is present.
 * @param {!HTMLFormElement} form
 * @param {function():Promise<!../../../src/utils/xhr-utils.FetchResponse>} xhr
 */
function getFormVerifier(form, xhr) {
  if (form.hasAttribute('verify-xhr')) {
    return new AsyncVerifier(form, xhr);
  } else {
    return new DefaultVerifier(form);
  }
}

/**
 * An interface for a form verifier. Implementations could check for duplicate
 * usernames on a remote server, check against an in-memory cache to verify
 * data in ways not possible with standard form validation, or check
 * values against sets of data too large to fit in browser memory
 * e.g. ensuring zip codes match with cities.
 * @visibleForTesting
 * @abstract
 */

var FormVerifier = exports.FormVerifier = function () {
  /**
   * @param {!HTMLFormElement} form
   */
  function FormVerifier(form) {
    _classCallCheck(this, FormVerifier);

    /** @protected @const */
    this.form_ = form;
  }

  /**
   * Called when the user has fully set a value to be verified,
   * e.g. the input's 'change' event
   * @return {!Promise<!UpdatedErrorsDef>}
   */


  _createClass(FormVerifier, [{
    key: 'onCommit',
    value: function onCommit() {
      this.clearVerificationErrors_();
      if (this.isDirty_()) {
        return this.verify_();
      } else {
        return Promise.resolve( /** @type {UpdatedErrorsDef} */{
          updatedElements: [],
          errors: []
        });
      }
    }

    /**
     * Sends the verify request if any group is ready to verify.
     * @return {!Promise<!UpdatedErrorsDef>} The list of elements whose state
     *    must change
     * @protected
     */

  }, {
    key: 'verify_',
    value: function verify_() {
      return Promise.resolve( /** @type {UpdatedErrorsDef} */{
        updatedElements: [],
        errors: []
      });
    }

    /**
     * Checks if the form has been changed from its initial state.
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isDirty_',
    value: function isDirty_() {
      var elements = this.form_.elements;

      for (var i = 0; i < elements.length; i++) {
        var field = elements[i];
        if (field.disabled) {
          continue;
        }
        switch (field.type) {
          case 'select-multiple':
          case 'select-one':
            var options = field.options;

            for (var j = 0; j < options.length; j++) {
              if (options[j].selected !== options[j].defaultSelected) {
                return true;
              }
            }
            break;
          case 'checkbox':
          case 'radio':
            if (field.checked !== field.defaultChecked) {
              return true;
            }
            break;
          default:
            if (field.value !== field.defaultValue) {
              return true;
            }
            break;
        }
      }
      return false;
    }

    /**
     * Removes all custom verification errors from the elements.
     * @private
     */

  }, {
    key: 'clearVerificationErrors_',
    value: function clearVerificationErrors_() {
      var elements = this.form_.elements;

      if (elements) {
        (0, _dom.iterateCursor)(elements, function (e) {
          e.setCustomValidity('');
        });
      }
    }
  }]);

  return FormVerifier;
}();

/**
 * A no-op verifier.
 * @visibleForTesting
 */


var DefaultVerifier = exports.DefaultVerifier = function (_FormVerifier) {
  _inherits(DefaultVerifier, _FormVerifier);

  function DefaultVerifier() {
    _classCallCheck(this, DefaultVerifier);

    return _possibleConstructorReturn(this, (DefaultVerifier.__proto__ || Object.getPrototypeOf(DefaultVerifier)).apply(this, arguments));
  }

  return DefaultVerifier;
}(FormVerifier);

/**
 * A verifier that verifies values via an XHR
 * @visibleForTesting
 */


var AsyncVerifier = exports.AsyncVerifier = function (_FormVerifier2) {
  _inherits(AsyncVerifier, _FormVerifier2);

  /**
   * @param {!HTMLFormElement} form
   * @param {function():Promise<!../../../src/utils/xhr-utils.FetchResponse>} xhr
   */
  function AsyncVerifier(form, xhr) {
    _classCallCheck(this, AsyncVerifier);

    /** @protected @const*/
    var _this2 = _possibleConstructorReturn(this, (AsyncVerifier.__proto__ || Object.getPrototypeOf(AsyncVerifier)).call(this, form));

    _this2.doXhr_ = xhr;

    /** @protected {?LastAddedResolver} */
    _this2.xhrResolver_ = null;

    /** @private {!Array<!VerificationErrorDef>} */
    _this2.previousErrors_ = [];
    return _this2;
  }

  /** @override */


  _createClass(AsyncVerifier, [{
    key: 'verify_',
    value: function verify_() {
      var _this3 = this;

      var xhrConsumeErrors = this.doXhr_().then(function () {
        return [];
      }, function (error) {
        return getResponseErrorData_( /** @type {!Error} */error);
      });

      return this.addToResolver_(xhrConsumeErrors).then(function (errors) {
        return _this3.applyErrors_(errors);
      });
    }

    /**
     * Prevent race conditions from XHRs that arrive out of order by resolving
     * only the most recently initiated XHR.
     * TODO(cvializ): Replace this when the Fetch API adds cancelable fetches.
     * @param {!Promise} promise
     * @return {!Promise} The resolver result promise
     */

  }, {
    key: 'addToResolver_',
    value: function addToResolver_(promise) {
      var _this4 = this;

      if (!this.xhrResolver_) {
        this.xhrResolver_ = new _promise.LastAddedResolver();
        var cleanup = function cleanup() {
          return _this4.xhrResolver_ = null;
        };
        this.xhrResolver_.then(cleanup, cleanup);
      }
      return this.xhrResolver_.add(promise);
    }

    /**
     * Set errors on elements that failed verification, and clear any
     * verification state for elements that passed verification.
     * @param {!Array<!VerificationErrorDef>} errors
     * @return {!UpdatedErrorsDef} Updated elements e.g. elements with new errors,
     *    and elements that previously had errors but were fixed. The form will
     *    update their user-valid/user-invalid state.
     * @private
     */

  }, {
    key: 'applyErrors_',
    value: function applyErrors_(errors) {
      var _this5 = this;

      var errorElements = [];

      var previousErrors = this.previousErrors_;
      this.previousErrors_ = errors;

      // Set the error message on each element that caused an error.
      for (var i = 0; i < errors.length; i++) {
        var error = errors[i];
        var name = (0, _log.user)().assertString(error.name, 'Verification errors must have a name property');
        var message = (0, _log.user)().assertString(error.message, 'Verification errors must have a message property');
        // If multiple elements share the same name, the first should be selected.
        // This matches the behavior of HTML5 validation, e.g. with radio buttons.
        var element = (0, _log.user)().assertElement(this.form_. /*OK*/querySelector('[name="' + name + '"]'), 'Verification error name property must match a field name');

        // Only put verification errors on elements that are client-side valid.
        // This prevents errors from appearing on elements that have not been
        // filled out yet.
        if (element.checkValidity()) {
          element.setCustomValidity(message);
          errorElements.push(element);
        }
      }

      // Create a list of form elements that had an error, but are now fixed.
      var isFixed = function isFixed(previousError) {
        return errors.every(function (error) {
          return previousError.name !== error.name;
        });
      };
      var fixedElements = previousErrors.filter(isFixed).map(function (e) {
        return _this5.form_. /*OK*/querySelector('[name="' + e.name + '"]');
      });

      return (/** @type {!UpdatedErrorsDef} */{
          updatedElements: errorElements.concat(fixedElements),
          errors: errors
        }
      );
    }
  }]);

  return AsyncVerifier;
}(FormVerifier);

/**
 * @param {!Error} error
 * @return {!Promise<!Array<VerificationErrorDef>>}
 * @private
 */


function getResponseErrorData_(error) {
  var response = error.response;

  if (!response) {
    return Promise.resolve([]);
  }

  return response.json().then(function (json) {
    return json.verifyErrors || [];
  }, function () {
    return [];
  });
}

},{"../../../src/dom":15,"../../../src/log":24,"../../../src/utils/promise":51}],7:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationBubble = undefined;

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

var _services = require('../../../src/services');

var _dom = require('../../../src/dom');

var _style = require('../../../src/style');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** @type {string} */
var OBJ_PROP = '__BUBBLE_OBJ';

var ValidationBubble = exports.ValidationBubble = function () {

  /**
   * Creates a bubble component to display messages in.
   * @param {!../../../src/service/ampdoc-impl.AmpDoc} ampdoc
   * @param {string} id
   */
  function ValidationBubble(ampdoc, id) {
    _classCallCheck(this, ValidationBubble);

    /** @private @const {string} */
    this.id_ = id;

    /** @private @const {!../../../src/service/viewport/viewport-impl.Viewport} */
    this.viewport_ = _services.Services.viewportForDoc(ampdoc);

    /** @private @const {!../../../src/service/vsync-impl.Vsync} */
    this.vsync_ = _services.Services.vsyncFor(ampdoc.win);

    /** @private {?Element} */
    this.currentTargetElement_ = null;

    /** @private {string} */
    this.currentMessage_ = '';

    /** @private {boolean} */
    this.isVisible_ = false;

    /** @private @const {!Element} */
    this.bubbleElement_ = ampdoc.win.document.createElement('div');

    this.bubbleElement_.classList.add('i-amphtml-validation-bubble');
    this.bubbleElement_[OBJ_PROP] = this;
    ampdoc.getBody().appendChild(this.bubbleElement_);
  }

  /**
   * @param {!Element} element
   * @return {boolean}
   */


  _createClass(ValidationBubble, [{
    key: 'isActiveOn',
    value: function isActiveOn(element) {
      return this.isVisible_ && element == this.currentTargetElement_;
    }

    /**
     * Hides the bubble off screen.
     */

  }, {
    key: 'hide',
    value: function hide() {
      if (!this.isVisible_) {
        return;
      }

      this.isVisible_ = false;
      this.currentTargetElement_ = null;
      this.currentMessage_ = '';

      this.vsync_.run({
        measure: undefined,
        mutate: hideBubble
      }, {
        bubbleElement: this.bubbleElement_
      });
    }

    /**
     * Shows the bubble targeted to an element with the passed message.
     * @param {!Element} targetElement
     * @param {string} message
     */

  }, {
    key: 'show',
    value: function show(targetElement, message) {
      if (this.isActiveOn(targetElement) && message == this.currentMessage_) {
        return;
      }

      this.isVisible_ = true;
      this.currentTargetElement_ = targetElement;
      this.currentMessage_ = message;
      var state = {
        message: message,
        targetElement: targetElement,
        bubbleElement: this.bubbleElement_,
        viewport: this.viewport_,
        id: this.id_
      };
      this.vsync_.run({
        measure: measureTargetElement,
        mutate: showBubbleElement
      }, state);
    }
  }]);

  return ValidationBubble;
}();

/**
 * Hides the bubble element passed through state object.
 * @param {!Object} state
 * @private
 */


function hideBubble(state) {
  state.bubbleElement.removeAttribute('aria-alert');
  state.bubbleElement.removeAttribute('role');
  (0, _dom.removeChildren)(state.bubbleElement);
  (0, _style.setStyles)(state.bubbleElement, {
    display: 'none'
  });
}

/**
 * Measures the layout for the target element passed through state object.
 * @param {!Object} state
 * @private
 */
function measureTargetElement(state) {
  state.targetRect = state.viewport.getLayoutRect(state.targetElement);
}

/**
 * Updates text content, positions and displays the bubble.
 * @param {!Object} state
 * @private
 */
function showBubbleElement(state) {
  (0, _dom.removeChildren)(state.bubbleElement);
  var messageDiv = state.bubbleElement.ownerDocument.createElement('div');
  messageDiv.id = 'bubble-message-' + state.id;
  messageDiv.textContent = state.message;
  state.bubbleElement.setAttribute('aria-labeledby', messageDiv.id);
  state.bubbleElement.setAttribute('role', 'alert');
  state.bubbleElement.setAttribute('aria-live', 'assertive');
  state.bubbleElement.appendChild(messageDiv);
  (0, _style.setStyles)(state.bubbleElement, {
    display: 'block',
    top: state.targetRect.top - 10 + 'px',
    left: state.targetRect.left + state.targetRect.width / 2 + 'px'
  });
}

},{"../../../src/dom":15,"../../../src/services":39,"../../../src/style":43}],8:[function(require,module,exports){
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


},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
 * Common AMP events.
 * @enum {string}
 */
var AmpEvents = exports.AmpEvents = {
  BUILT: 'amp:built',
  DOM_UPDATE: 'amp:dom-update',
  VISIBILITY_CHANGE: 'amp:visibilitychange', // https://github.com/ampproject/amphtml/blob/master/ads/README.md#page-visibility
  // The following codes are only used for testing.
  // TODO(choumx): Move these to a separate enum so they can be DCE'd.
  ATTACHED: 'amp:attached',
  STUBBED: 'amp:stubbed',
  LOAD_START: 'amp:load:start',
  LOAD_END: 'amp:load:end',
  ERROR: 'amp:error'
};

},{}],12:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerAnalyticsEvent = triggerAnalyticsEvent;

var _services = require('./services');

/**
 * Helper method to trigger analytics event if amp-analytics is available.
 * TODO: Do not expose this function
 * @param {!Element} target
 * @param {string} eventType
 * @param {!Object<string, string>=} opt_vars A map of vars and their values.
 */
function triggerAnalyticsEvent(target, eventType, opt_vars) {
  _services.Services.analyticsForDocOrNull(target).then(function (analytics) {
    if (!analytics) {
      return;
    }
    analytics.triggerEventForTarget(target, eventType, opt_vars);
  });
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

},{"./services":39}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"./config":13,"./string":41,"./url":47}],15:[function(require,module,exports){
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

},{"../third_party/css-escape/css-escape":53,"./log":24,"./string":41,"./types":44,"./utils/object":50,"./utils/promise":51}],16:[function(require,module,exports){
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

},{"./dom":15,"./log":24,"./service":37,"./types":44}],17:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportErrorForWin = reportErrorForWin;
exports.reportError = reportError;
exports.cancellation = cancellation;
exports.isCancellation = isCancellation;
exports.blockedByConsentError = blockedByConsentError;
exports.isBlockedByConsent = isBlockedByConsent;
exports.installErrorReporting = installErrorReporting;
exports.maybeReportErrorToViewer = maybeReportErrorToViewer;
exports.getErrorReportData = getErrorReportData;
exports.detectNonAmpJs = detectNonAmpJs;
exports.resetAccumulatedErrorMessagesForTesting = resetAccumulatedErrorMessagesForTesting;
exports.detectJsEngineFromStack = detectJsEngineFromStack;
exports.reportErrorToAnalytics = reportErrorToAnalytics;

var _ampEvents = require('./amp-events');

var _services = require('./services');

var _log = require('./log');

var _experiments = require('./experiments');

var _exponentialBackoff = require('./exponential-backoff');

var _mode = require('./mode');

var _eventHelper = require('./event-helper');

var _url = require('./url');

var _styleInstaller = require('./style-installer');

var _string = require('./string');

var _analytics = require('./analytics');

var _config = require('./config');

/**
 * @const {string}
 */
var CANCELLED = 'CANCELLED';

/**
 * @const {string}
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

var BLOCK_BY_CONSENT = 'BLOCK_BY_CONSENT';

/**
 * The threshold for errors throttled because nothing can be done about
 * them, but we'd still like to report the rough number.
 * @const {number}
 */
var NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD = 0.001;

/**
 * The threshold for errors throttled because nothing can be done about
 * them, but we'd still like to report the rough number.
 * @const {number}
 */
var USER_ERROR_THROTTLE_THRESHOLD = 0.1;

/**
 * Collects error messages, so they can be included in subsequent reports.
 * That allows identifying errors that might be caused by previous errors.
 */
var accumulatedErrorMessages = self.AMPErrors || [];
// Use a true global, to avoid multi-module inclusion issues.
self.AMPErrors = accumulatedErrorMessages;

/**
 * Pushes element into array, keeping at most the most recent limit elements
 *
 * @param {!Array<T>} array
 * @param {T} element
 * @param {number} limit
 * @template T
 */
function pushLimit(array, element, limit) {
  if (array.length >= limit) {
    array.splice(0, array.length - limit + 1);
  }
  array.push(element);
}

/**
 * A wrapper around our exponentialBackoff, to lazy initialize it to avoid an
 * un-DCE'able side-effect.
 * @param {function()} work the function to execute after backoff
 * @return {number} the setTimeout id
 */
var _reportingBackoff = function reportingBackoff(work) {
  // Set reportingBackoff as the lazy-created function. JS Vooodoooo.
  _reportingBackoff = (0, _exponentialBackoff.exponentialBackoff)(1.5);
  return _reportingBackoff(work);
};

/**
 * Attempts to stringify a value, falling back to String.
 * @param {*} value
 * @return {string}
 */
function tryJsonStringify(value) {
  try {
    // Cast is fine, because we really don't care here. Just trying.
    return JSON.stringify( /** @type {!JsonObject} */value);
  } catch (e) {
    return String(value);
  }
}

/**
 * The true JS engine, as detected by inspecting an Error stack. This should be
 * used with the userAgent to tell definitely. I.e., Chrome on iOS is really a
 * Safari JS engine.
 */
var detectedJsEngine = void 0;

/**
 * @param {!Window} win
 * @param {*} error
 * @param {!Element=} opt_associatedElement
 */
function reportErrorForWin(win, error, opt_associatedElement) {
  reportError(error, opt_associatedElement);
  if (error && !!win && (0, _log.isUserErrorMessage)(error.message) && !(0, _log.isUserErrorEmbed)(error.message)) {
    reportErrorToAnalytics( /** @type {!Error} */error, win);
  }
}

/**
 * Reports an error. If the error has an "associatedElement" property
 * the element is marked with the `i-amphtml-element-error` and displays
 * the message itself. The message is always send to the console.
 * If the error has a "messageArray" property, that array is logged.
 * This way one gets the native fidelity of the console for things like
 * elements instead of stringification.
 * @param {*} error
 * @param {!Element=} opt_associatedElement
 * @return {!Error}
 */
function reportError(error, opt_associatedElement) {
  try {
    // Convert error to the expected type.
    var isValidError = void 0;
    if (error) {
      if (error.message !== undefined) {
        error = (0, _log.duplicateErrorIfNecessary)( /** @type {!Error} */error);
        isValidError = true;
      } else {
        var origError = error;
        error = new Error(tryJsonStringify(origError));
        error.origError = origError;
      }
    } else {
      error = new Error('Unknown error');
    }
    // Report if error is not an expected type.
    if (!isValidError && (0, _mode.getMode)().localDev && !(0, _mode.getMode)().test) {
      setTimeout(function () {
        var rethrow = new Error('_reported_ Error reported incorrectly: ' + error);
        throw rethrow;
      });
    }

    if (error.reported) {
      return (/** @type {!Error} */error
      );
    }
    error.reported = true;

    // Update element.
    var element = opt_associatedElement || error.associatedElement;
    if (element && element.classList) {
      element.classList.add('i-amphtml-error');
      if ((0, _mode.getMode)().development) {
        element.classList.add('i-amphtml-element-error');
        element.setAttribute('error-message', error.message);
      }
    }

    // Report to console.
    if (self.console) {
      var output = console.error || console.log;
      if (error.messageArray) {
        output.apply(console, error.messageArray);
      } else {
        if (element) {
          output.call(console, error.message, element);
        } else if (!(0, _mode.getMode)().minified) {
          output.call(console, error.stack);
        } else {
          output.call(console, error.message);
        }
      }
    }
    if (element && element.dispatchCustomEventForTesting) {
      element.dispatchCustomEventForTesting(_ampEvents.AmpEvents.ERROR, error.message);
    }

    // 'call' to make linter happy. And .call to make compiler happy
    // that expects some @this.
    reportErrorToServer['call'](undefined, undefined, undefined, undefined, undefined, error);
  } catch (errorReportingError) {
    setTimeout(function () {
      throw errorReportingError;
    });
  }
  return (/** @type {!Error} */error
  );
}

/**
 * Returns an error for a cancellation of a promise.
 * @return {!Error}
 */
function cancellation() {
  return new Error(CANCELLED);
}

/**
 * @param {*} errorOrMessage
 * @return {boolean}
 */
function isCancellation(errorOrMessage) {
  if (!errorOrMessage) {
    return false;
  }
  if (typeof errorOrMessage == 'string') {
    return (0, _string.startsWith)(errorOrMessage, CANCELLED);
  }
  if (typeof errorOrMessage.message == 'string') {
    return (0, _string.startsWith)(errorOrMessage.message, CANCELLED);
  }
  return false;
}

/**
 * Returns an error for component blocked by consent
 * @return {!Error}
 */
function blockedByConsentError() {
  return new Error(BLOCK_BY_CONSENT);
}

/**
 * @param {*} errorOrMessage
 * @return {boolean}
 */
function isBlockedByConsent(errorOrMessage) {
  if (!errorOrMessage) {
    return false;
  }
  if (typeof errorOrMessage == 'string') {
    return (0, _string.startsWith)(errorOrMessage, BLOCK_BY_CONSENT);
  }
  if (typeof errorOrMessage.message == 'string') {
    return (0, _string.startsWith)(errorOrMessage.message, BLOCK_BY_CONSENT);
  }
  return false;
}

/**
 * Install handling of global unhandled exceptions.
 * @param {!Window} win
 */
function installErrorReporting(win) {
  win.onerror = /** @type {!Function} */reportErrorToServer;
  win.addEventListener('unhandledrejection', function (event) {
    if (event.reason && (event.reason.message === CANCELLED || event.reason.message === BLOCK_BY_CONSENT)) {
      event.preventDefault();
      return;
    }
    reportError(event.reason || new Error('rejected promise ' + event));
  });
}

/**
 * Signature designed, so it can work with window.onerror
 * @param {string|undefined} message
 * @param {string|undefined} filename
 * @param {string|undefined} line
 * @param {string|undefined} col
 * @param {*|undefined} error
 * @this {!Window|undefined}
 */
function reportErrorToServer(message, filename, line, col, error) {
  // Make an attempt to unhide the body.
  if (this && this.document) {
    (0, _styleInstaller.makeBodyVisible)(this.document);
  }
  if ((0, _mode.getMode)().localDev || (0, _mode.getMode)().development || (0, _mode.getMode)().test) {
    return;
  }
  var hasNonAmpJs = false;
  try {
    hasNonAmpJs = detectNonAmpJs(self);
  } catch (ignore) {
    // Ignore errors during error report generation.
  }
  if (hasNonAmpJs && Math.random() > 0.01) {
    // Only report 1% of errors on pages with non-AMP JS.
    // These errors can almost never be acted upon, but spikes such as
    // due to buggy browser extensions may be helpful to notify authors.
    return;
  }
  var data = getErrorReportData(message, filename, line, col, error, hasNonAmpJs);
  if (data) {
    // Report the error to viewer if it has the capability. The data passed
    // to the viewer is exactly the same as the data passed to the server
    // below.
    maybeReportErrorToViewer(this, data);
    _reportingBackoff(function () {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', _config.urls.errorReporting, true);
      xhr.send(JSON.stringify(data));
    });
  }
}

/**
 * Passes the given error data to the viewer if the following criteria is met:
 * - The viewer is a trusted viewer
 * - The viewer has the `errorReporter` capability
 * - The AMP doc is in single doc mode
 * - The AMP doc is opted-in for error interception (`<html>` tag has the
 *   `report-errors-to-viewer` attribute)
 *
 * @param {!Window} win
 * @param {!JsonObject} data Data from `getErrorReportData`.
 * @return {!Promise<boolean>} `Promise<True>` if the error was sent to the
 *     viewer, `Promise<False>` otherwise.
 * @visibleForTesting
 */
function maybeReportErrorToViewer(win, data) {
  var ampdocService = _services.Services.ampdocServiceFor(win);
  if (!ampdocService.isSingleDoc()) {
    return Promise.resolve(false);
  }
  var ampdocSingle = ampdocService.getAmpDoc();
  var htmlElement = ampdocSingle.getRootNode().documentElement;
  var docOptedIn = htmlElement.hasAttribute('report-errors-to-viewer');
  if (!docOptedIn) {
    return Promise.resolve(false);
  }

  var viewer = _services.Services.viewerForDoc(ampdocSingle);
  if (!viewer.hasCapability('errorReporter')) {
    return Promise.resolve(false);
  }

  return viewer.isTrustedViewer().then(function (viewerTrusted) {
    if (!viewerTrusted) {
      return false;
    }
    viewer.sendMessage('error', data);
    return true;
  });
}

/**
 * Signature designed, so it can work with window.onerror
 * @param {string|undefined} message
 * @param {string|undefined} filename
 * @param {string|undefined} line
 * @param {string|undefined} col
 * @param {*|undefined} error
 * @param {boolean} hasNonAmpJs
 * @return {!JsonObject|undefined} The data to post
 * visibleForTesting
 */
function getErrorReportData(message, filename, line, col, error, hasNonAmpJs) {
  var expected = false;
  if (error) {
    if (error.message) {
      message = error.message;
    } else {
      // This should never be a string, but sometimes it is.
      message = String(error);
    }
    // An "expected" error is still an error, i.e. some features are disabled
    // or not functioning fully because of it. However, it's an expected
    // error. E.g. as is the case with some browser API missing (storage).
    // Thus, the error can be classified differently by log aggregators.
    // The main goal is to monitor that an "expected" error doesn't deteriorate
    // over time. It's impossible to completely eliminate it.
    if (error.expected) {
      expected = true;
    }
  }
  if (!message) {
    message = 'Unknown error';
  }
  if (/_reported_/.test(message)) {
    return;
  }
  if (message == CANCELLED) {
    return;
  }

  var detachedWindow = !(self && self.window);
  var throttleBase = Math.random();

  // We throttle load errors and generic "Script error." errors
  // that have no information and thus cannot be acted upon.
  if ((0, _eventHelper.isLoadErrorMessage)(message) ||
  // See https://github.com/ampproject/amphtml/issues/7353
  // for context.
  message == 'Script error.' ||
  // Window has become detached, really anything can happen
  // at this point.
  detachedWindow) {
    expected = true;

    if (throttleBase > NON_ACTIONABLE_ERROR_THROTTLE_THRESHOLD) {
      return;
    }
  }

  var isUserError = (0, _log.isUserErrorMessage)(message);

  // Only report a subset of user errors.
  if (isUserError && throttleBase > USER_ERROR_THROTTLE_THRESHOLD) {
    return;
  }

  // This is the App Engine app in
  // https://github.com/ampproject/error-tracker
  // It stores error reports via https://cloud.google.com/error-reporting/
  // for analyzing production issues.
  var data = /** @type {!JsonObject} */Object.create(null);
  data['v'] = (0, _mode.getMode)().rtvVersion;
  data['noAmp'] = hasNonAmpJs ? '1' : '0';
  data['m'] = message.replace(_log.USER_ERROR_SENTINEL, '');
  data['a'] = isUserError ? '1' : '0';

  // Errors are tagged with "ex" ("expected") label to allow loggers to
  // classify these errors as benchmarks and not exceptions.
  data['ex'] = expected ? '1' : '0';
  data['dw'] = detachedWindow ? '1' : '0';

  var runtime = '1p';
  if (self.context && self.context.location) {
    data['3p'] = '1';
    runtime = '3p';
  } else if ((0, _mode.getMode)().runtime) {
    runtime = (0, _mode.getMode)().runtime;
  }
  data['rt'] = runtime;

  // TODO(erwinm): Remove ca when all systems read `bt` instead of `ca` to
  // identify js binary type.
  data['ca'] = (0, _experiments.isCanary)(self) ? '1' : '0';

  // Pass binary type.
  data['bt'] = (0, _experiments.getBinaryType)(self);

  if (self.location.ancestorOrigins && self.location.ancestorOrigins[0]) {
    data['or'] = self.location.ancestorOrigins[0];
  }
  if (self.viewerState) {
    data['vs'] = self.viewerState;
  }
  // Is embedded?
  if (self.parent && self.parent != self) {
    data['iem'] = '1';
  }

  if (self.AMP && self.AMP.viewer) {
    var resolvedViewerUrl = self.AMP.viewer.getResolvedViewerUrl();
    var messagingOrigin = self.AMP.viewer.maybeGetMessagingOrigin();
    if (resolvedViewerUrl) {
      data['rvu'] = resolvedViewerUrl;
    }
    if (messagingOrigin) {
      data['mso'] = messagingOrigin;
    }
  }

  if (!detectedJsEngine) {
    detectedJsEngine = detectJsEngineFromStack();
  }
  data['jse'] = detectedJsEngine;

  var exps = [];
  var experiments = (0, _experiments.experimentTogglesOrNull)(self);
  for (var exp in experiments) {
    var on = experiments[exp];
    exps.push(exp + '=' + (on ? '1' : '0'));
  }
  data['exps'] = exps.join(',');

  if (error) {
    var tagName = error.associatedElement ? error.associatedElement.tagName : 'u'; // Unknown
    data['el'] = tagName;

    if (error.args) {
      data['args'] = JSON.stringify(error.args);
    }

    if (!isUserError && !error.ignoreStack && error.stack) {
      data['s'] = error.stack;
    }

    error.message += ' _reported_';
  } else {
    data['f'] = filename || '';
    data['l'] = line || '';
    data['c'] = col || '';
  }
  data['r'] = self.document.referrer;
  data['ae'] = accumulatedErrorMessages.join(',');
  data['fr'] = self.location.originalHash || self.location.hash;

  pushLimit(accumulatedErrorMessages, message, 25);

  return data;
}

/**
 * Returns true if it appears like there is non-AMP JS on the
 * current page.
 * @param {!Window} win
 * @return {boolean}
 * @visibleForTesting
 */
function detectNonAmpJs(win) {
  var scripts = win.document.querySelectorAll('script[src]');
  for (var i = 0; i < scripts.length; i++) {
    if (!(0, _url.isProxyOrigin)(scripts[i].src.toLowerCase())) {
      return true;
    }
  }
  return false;
}

/**
 * Resets accumulated error messages for testing
 */
function resetAccumulatedErrorMessagesForTesting() {
  accumulatedErrorMessages = [];
}

/**
 * Does a series of checks on the stack of an thrown error to determine the
 * JS engine that is currently running. This gives a bit more information than
 * just the UserAgent, since browsers often allow overriding it to "emulate"
 * mobile.
 * @return {string}
 * @visibleForTesting
 */
function detectJsEngineFromStack() {
  /** @constructor */
  function Fn() {}
  Fn.prototype.t = function () {
    throw new Error('message');
  };
  var object = new Fn();
  try {
    object.t();
  } catch (e) {
    var stack = e.stack;

    // Safari only mentions the method name.

    if ((0, _string.startsWith)(stack, 't@')) {
      return 'Safari';
    }

    // Firefox mentions "prototype".
    if (stack.indexOf('.prototype.t@') > -1) {
      return 'Firefox';
    }

    // IE looks like Chrome, but includes a context for the base stack line.
    // Explicitly, we're looking for something like:
    // "    at Global code (https://example.com/app.js:1:200)" or
    // "    at Anonymous function (https://example.com/app.js:1:200)"
    // vs Chrome which has:
    // "    at https://example.com/app.js:1:200"
    var last = stack.split('\n').pop();
    if (/\bat .* \(/i.test(last)) {
      return 'IE';
    }

    // Finally, chrome includes the error message in the stack.
    if ((0, _string.startsWith)(stack, 'Error: message')) {
      return 'Chrome';
    }
  }

  return 'unknown';
}

/**
 * @param {!Error} error
 * @param {!Window} win
 */
function reportErrorToAnalytics(error, win) {
  if ((0, _experiments.isExperimentOn)(win, 'user-error-reporting')) {
    var vars = {
      'errorName': error.name,
      'errorMessage': error.message
    };
    (0, _analytics.triggerAnalyticsEvent)(getRootElement_(win), 'user-error', vars);
  }
}

/**
 * @param {!Window} win
 * @return {!Element}
 * @private
 */
function getRootElement_(win) {
  var root = _services.Services.ampdocServiceFor(win).getAmpDoc().getRootNode();
  return (0, _log.dev)().assertElement(root.documentElement || root.body || root);
}

},{"./amp-events":11,"./analytics":12,"./config":13,"./event-helper":19,"./experiments":20,"./exponential-backoff":21,"./log":24,"./mode":26,"./services":39,"./string":41,"./style-installer":42,"./url":47}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{"./event-helper-listen":18,"./log":24}],20:[function(require,module,exports){
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

},{"./cookies":14,"./url":47,"./utils/object":50}],21:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exponentialBackoff = exponentialBackoff;
exports.exponentialBackoffClock = exponentialBackoffClock;
exports.getJitter = getJitter;
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
 * @param {number=} opt_base Exponential base. Defaults to 2.
 * @return {function(function()): number} Function that when invoked will
 *     call the passed in function. On every invocation the next
 *     invocation of the passed in function will be exponentially
 *     later. Returned function returns timeout id.
 */
function exponentialBackoff(opt_base) {
  var getTimeout = exponentialBackoffClock(opt_base);
  return function (work) {
    return setTimeout(work, getTimeout());
  };
}

/**
 * @param {number=} opt_base Exponential base. Defaults to 2.
 * @return {function(): number} Function that when invoked will return
 *    a number that exponentially grows per invocation.
 */
function exponentialBackoffClock(opt_base) {
  var base = opt_base || 2;
  var count = 0;
  return function () {
    var wait = Math.pow(base, count++);
    wait += getJitter(wait);
    return wait * 1000;
  };
}

/**
 * Add jitter to avoid the thundering herd. This can e.g. happen when
 * we poll a backend and it fails for everyone at the same time.
 * We add up to 30% (default) longer or shorter than the given time.
 *
 * @param {number} wait the amount if base milliseconds
 * @param {number=} opt_perc the min/max percentage to add or sutract
 * @return {number}
 */
function getJitter(wait, opt_perc) {
  opt_perc = opt_perc || .3;
  var jitter = wait * opt_perc * Math.random();
  if (Math.random() > .5) {
    jitter *= -1;
  }
  return jitter;
}

},{}],22:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDataWrapper = undefined;

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

exports.isFormDataWrapper = isFormDataWrapper;

var _log = require('./log');

var _form = require('./form');

var _object = require('./utils/object');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A wrapper for a native `FormData` object that allows the retrieval of entries
 * in the form data after construction even on browsers that don't natively
 * support `FormData.prototype.entries`.
 *
 * @final
 * @note Subclassing `FormData` doesn't work in this case as the transpiler
 *     generates code that calls the super constructor directly using
 *     `Function.prototype.call`. WebKit (Safari) doesn't allow this and
 *     enforces that constructors be called with the `new` operator.
 */
var FormDataWrapper = exports.FormDataWrapper = function () {
  /**
   * Creates a new wrapper for a `FormData` object.
   *
   * If there's no native `FormData#entries`, chances are there are no native
   * methods to read the content of the `FormData` after construction, so the
   * only way to implement `entries` in this class is to capture the fields in
   * the form passed to the constructor (and the arguments passed to the
   * `append` method).
   *
   * For more details on this, see http://mdn.io/FormData.
   *
   * @param {!HTMLFormElement=} opt_form An HTML `<form>` element — when
   *     specified, the `FormData` object will be populated with the form's
   *     current keys/values using the name property of each element for the
   *     keys and their submitted value for the values. It will also encode file
   *     input content.
   */
  function FormDataWrapper() {
    var opt_form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    _classCallCheck(this, FormDataWrapper);

    /** @private @const {!FormData} */
    this.formData_ = new FormData(opt_form);

    /** @private @const {?Object<string, !Array<string>>} */
    this.fieldValues_ = this.formData_['entries'] ? null : opt_form ? (0, _form.getFormAsObject)(opt_form) : (0, _object.map)();
  }

  /**
   * Appends a new value onto an existing key inside a `FormData` object, or
   * adds the key if it does not already exist.
   *
   * If there's no native `FormData#entries`, chances are there are no native
   * methods to read the content of the `FormData` after construction, so the
   * only way to implement `entries` in this class is to capture the arguments
   * passed to the `append` method (and the form passed to the constructor).
   *
   * Since AMP doesn't support `<input type="file">`, appending a `File` object
   * is not supported and the `filename` parameter is ignored for this wrapper.
   *
   * For more details on this, see http://mdn.io/FormData/append.
   *
   * @param {string} name The name of the field whose data is contained in
   *     `value`.
   * @param {string} value The field's value.
   */


  _createClass(FormDataWrapper, [{
    key: 'append',
    value: function append(name, value) {
      if (!this.formData_['entries']) {
        var nameString = String(name);
        this.fieldValues_[nameString] = this.fieldValues_[nameString] || [];
        this.fieldValues_[name].push(String(value));
      }

      return this.formData_.append(name, value);
    }

    /**
     * Returns an iterator of all key/value pairs contained in this object.
     *
     * For more details on this, see http://mdn.io/FormData/entries.
     *
     * @return {!Iterator<!Array<string>>}
     */

  }, {
    key: 'entries',
    value: function entries() {
      if (this.formData_['entries']) {
        return this.formData_['entries']();
      }

      var fieldEntries = [];
      var fieldValues = /** @type {!Object<string, !Array<string>>} */(0, _log.dev)().assert(this.fieldValues_);
      Object.keys(fieldValues).forEach(function (name) {
        var values = fieldValues[name];
        values.forEach(function (value) {
          return fieldEntries.push([name, value]);
        });
      });

      // Generator functions are not supported by the current Babel configuration,
      // so we must manually implement the iterator interface.
      var nextIndex = 0;
      return (/** @type {!Iterator<!Array<string>>} */{
          next: function next() {
            return nextIndex < fieldEntries.length ? { value: fieldEntries[nextIndex++], done: false } : { value: undefined, done: true };
          }
        }
      );
    }

    /**
     * Returns the wrapped native `FormData` object.
     *
     * @return {!FormData}
     */

  }, {
    key: 'getFormData',
    value: function getFormData() {
      return this.formData_;
    }
  }]);

  return FormDataWrapper;
}();

/**
 * Check if the given object is a FormDataWrapper instance
 * @param {*} o
 * @return {boolean} True if the object is a FormDataWrapper instance.
 */


function isFormDataWrapper(o) {
  // instanceof doesn't work as expected, so we detect with duck-typing.
  return !!o && typeof o.getFormData == 'function';
}

},{"./form":23,"./log":24,"./utils/object":50}],23:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formOrNullForElement = formOrNullForElement;
exports.setFormForElement = setFormForElement;
exports.getFormAsObject = getFormAsObject;

var _dom = require('./dom');

/** @const {string} */
var FORM_PROP_ = '__AMP_FORM';

/**
 * @param {!Element} element
 * @return {../extensions/amp-form/0.1/amp-form.AmpForm}
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

function formOrNullForElement(element) {
  return element[FORM_PROP_] || null;
}

/**
 * @param {!Element} element
 * @param {!../extensions/amp-form/0.1/amp-form.AmpForm} form
 */
function setFormForElement(element, form) {
  element[FORM_PROP_] = form;
}

/**
 * Returns form data in the passed-in form as an object.
 * @param {!HTMLFormElement} form
 * @return {!JsonObject}
 */
function getFormAsObject(form) {
  var data = /** @type {!JsonObject} */{};
  var inputs = form.elements;
  var submittableTagsRegex = /^(?:input|select|textarea)$/i;
  var unsubmittableTypesRegex = /^(?:button|image|file|reset)$/i;
  var checkableType = /^(?:checkbox|radio)$/i;
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (!input.name || isDisabled(input) || !submittableTagsRegex.test(input.tagName) || unsubmittableTypesRegex.test(input.type) || checkableType.test(input.type) && !input.checked) {
      continue;
    }

    if (data[input.name] === undefined) {
      data[input.name] = [];
    }
    data[input.name].push(input.value);
  }

  return data;
}

/**
 * Checks if a field is disabled.
 * @param {!Element} element
 * @private
 */
function isDisabled(element) {
  if (element.disabled) {
    return true;
  }

  var ancestors = (0, _dom.ancestorElementsByTag)(element, 'fieldset');
  for (var i = 0; i < ancestors.length; i++) {
    if (ancestors[i].disabled) {
      return true;
    }
  }
  return false;
}

},{"./dom":15}],24:[function(require,module,exports){
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

},{"./mode":26,"./mode-object":25,"./types":44}],25:[function(require,module,exports){
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

},{"./mode":26}],26:[function(require,module,exports){
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

},{"./url-parse-query-string":45}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{"./experiments":20,"./mode":26,"./polyfills/array-includes":29,"./polyfills/custom-elements":30,"./polyfills/document-contains":31,"./polyfills/domtokenlist-toggle":32,"./polyfills/math-sign":33,"./polyfills/object-assign":34,"./polyfills/promise":35,"document-register-element/build/document-register-element.patched":8}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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

},{}],35:[function(require,module,exports){
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

},{"promise-pjs/promise":9}],36:[function(require,module,exports){
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

},{"./log":24,"./service":37,"./services":39}],37:[function(require,module,exports){
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

},{"./log":24,"./polyfills":28,"./types":44,"./utils/promise":51}],38:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Viewer = exports.RequestResponder = exports.Capability = undefined;

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

exports.setViewerVisibilityState = setViewerVisibilityState;
exports.installViewerServiceForDoc = installViewerServiceForDoc;

var _promise = require('../utils/promise');

var _observable = require('../observable');

var _services = require('../services');

var _visibilityState = require('../visibility-state');

var _log = require('../log');

var _object = require('../utils/object');

var _array = require('../utils/array');

var _url = require('../url');

var _dom = require('../dom');

var _service = require('../service');

var _error = require('../error');

var _string = require('../string');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG_ = 'Viewer';
var SENTINEL_ = '__AMP__';

/** @enum {string} */
var Capability = exports.Capability = {
  VIEWER_RENDER_TEMPLATE: 'viewerRenderTemplate'
};

/**
 * Duration in milliseconds to wait for viewerOrigin to be set before an empty
 * string is returned.
 * @const
 * @private {number}
 */
var VIEWER_ORIGIN_TIMEOUT_ = 1000;

/**
 * Prefixes to remove when trimming a hostname for comparison.
 * @const
 * @private {!RegExp}
 */
var TRIM_ORIGIN_PATTERN_ = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;

/**
 * These domains are trusted with more sensitive viewer operations such as
 * propagating the referrer. If you believe your domain should be here,
 * file the issue on GitHub to discuss. The process will be similar
 * (but somewhat more stringent) to the one described in the [3p/README.md](
 * https://github.com/ampproject/amphtml/blob/master/3p/README.md)
 *
 * @export {!Array<!RegExp>}
 */
var TRUSTED_VIEWER_HOSTS = [
/**
 * Google domains, including country-codes and subdomains:
 * - google.com
 * - www.google.com
 * - google.co
 * - www.google.co
 * - google.az
 * - www.google.az
 * - google.com.az
 * - www.google.com.az
 * - google.co.az
 * - www.google.co.az
 * - google.cat
 * - www.google.cat
 */
/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/];

/**
 * These domains are trusted with more sensitive viewer operations such as
 * sending impression requests. If you believe your domain should be here,
 * file the issue on GitHub to discuss. The process will be similar
 * (but somewhat more stringent) to the one described in the [3p/README.md](
 * https://github.com/ampproject/amphtml/blob/master/3p/README.md)
 *
 * @export {!Array<!RegExp>}
 */
var TRUSTED_REFERRER_HOSTS = [
/**
 * Twitter's link wrapper domains:
 * - t.co
 */
/^t.co$/];

/**
 * @typedef {function(*):(!Promise<*>|undefined)}
 */
var RequestResponder = exports.RequestResponder = void 0;

/**
 * An AMP representation of the Viewer. This class doesn't do any work itself
 * but instead delegates everything to the actual viewer. This class and the
 * actual Viewer are connected via "AMP.viewer" using three methods:
 * {@link getParam}, {@link receiveMessage} and {@link setMessageDeliverer}.
 * @package Visible for type.
 */

var Viewer = exports.Viewer = function () {

  /**
   * @param {!./ampdoc-impl.AmpDoc} ampdoc
   * @param {!Object<string, string>=} opt_initParams
   */
  function Viewer(ampdoc, opt_initParams) {
    var _this = this;

    _classCallCheck(this, Viewer);

    /** @const {!./ampdoc-impl.AmpDoc} */
    this.ampdoc = ampdoc;

    /** @const {!Window} */
    this.win = ampdoc.win;

    /** @private @const {boolean} */
    this.isIframed_ = (0, _dom.isIframed)(this.win);

    /** @const {!./document-state.DocumentState} */
    this.docState_ = _services.Services.documentStateFor(this.win);

    /** @private {boolean} */
    this.isRuntimeOn_ = true;

    /** @private {boolean} */
    this.overtakeHistory_ = false;

    /** @private {!VisibilityState} */
    this.visibilityState_ = _visibilityState.VisibilityState.VISIBLE;

    /** @private {string} */
    this.viewerVisibilityState_ = this.visibilityState_;

    /** @private {number} */
    this.prerenderSize_ = 1;

    /** @private {!Object<string, !Observable<!JsonObject>>} */
    this.messageObservables_ = (0, _object.map)();

    /** @private {!Object<string, !RequestResponder>} */
    this.messageResponders_ = (0, _object.map)();

    /** @private {!Observable<boolean>} */
    this.runtimeOnObservable_ = new _observable.Observable();

    /** @private {!Observable} */
    this.visibilityObservable_ = new _observable.Observable();

    /** @private {!Observable<!JsonObject>} */
    this.broadcastObservable_ = new _observable.Observable();

    /**
     * @private {?function(string, (?JsonObject|string|undefined), boolean):
     *     (Promise<*>|undefined)}
     */
    this.messageDeliverer_ = null;

    /** @private {?string} */
    this.messagingOrigin_ = null;

    /**
     * @private {!Array<!{
     *   eventType: string,
     *   data: (?JsonObject|string|undefined),
     *   awaitResponse: boolean,
     *   responsePromise: (Promise<*>|undefined),
     *   responseResolver: function(*)
     * }>}
     */
    this.messageQueue_ = [];

    /** @const @private {!Object<string, string>} */
    this.params_ = {};

    /**
     * Subset of this.params_ that only contains parameters in the URL hash,
     * e.g. "#foo=bar".
     * @const @private {!Object<string, string>}
     */
    this.hashParams_ = {};

    /** @private {?Promise} */
    this.nextVisiblePromise_ = null;

    /** @private {?function()} */
    this.nextVisibleResolve_ = null;

    /** @private {?time} */
    this.firstVisibleTime_ = null;

    /** @private {?time} */
    this.lastVisibleTime_ = null;

    /** @private {?Function} */
    this.messagingReadyResolver_ = null;

    /** @private {?Function} */
    this.viewerOriginResolver_ = null;

    /** @private {?Function} */
    this.trustedViewerResolver_ = null;

    var deferred = new _promise.Deferred();
    /**
     * This promise might be resolved right away if the current
     * document is already visible. See end of this constructor where we call
     * `this.onVisibilityChange_()`.
     * @private @const {!Promise}
     */
    this.whenFirstVisiblePromise_ = deferred.promise;

    /** @private {?function()} */
    this.whenFirstVisibleResolve_ = deferred.resolve;

    // Params can be passed either directly in multi-doc environment or via
    // iframe hash/name with hash taking precedence.
    if (opt_initParams) {
      Object.assign(this.params_, opt_initParams);
    } else {
      if (this.win.name && this.win.name.indexOf(SENTINEL_) == 0) {
        parseParams_(this.win.name.substring(SENTINEL_.length), this.params_);
      }
      if (this.win.location.hash) {
        parseParams_(this.win.location.hash, this.hashParams_);
        Object.assign(this.params_, this.hashParams_);
      }
    }

    (0, _log.dev)().fine(TAG_, 'Viewer params:', this.params_);

    this.isRuntimeOn_ = !parseInt(this.params_['off'], 10);
    (0, _log.dev)().fine(TAG_, '- runtimeOn:', this.isRuntimeOn_);

    this.overtakeHistory_ = !!(parseInt(this.params_['history'], 10) || this.overtakeHistory_);
    (0, _log.dev)().fine(TAG_, '- history:', this.overtakeHistory_);

    this.setVisibilityState_(this.params_['visibilityState']);
    (0, _log.dev)().fine(TAG_, '- visibilityState:', this.getVisibilityState());

    this.prerenderSize_ = parseInt(this.params_['prerenderSize'], 10) || this.prerenderSize_;
    (0, _log.dev)().fine(TAG_, '- prerenderSize:', this.prerenderSize_);

    var isCctEmbedded = false;
    if (!this.isIframed_) {
      var queryParams = (0, _url.parseQueryString)(this.win.location.search);
      isCctEmbedded = queryParams['amp_gsa'] === '1' && (0, _string.startsWith)(queryParams['amp_js_v'] || '', 'a');
    }
    /**
     * Whether the AMP document is embedded in a Chrome Custom Tab.
     * @private @const {boolean}
     */
    this.isCctEmbedded_ = isCctEmbedded;

    /**
     * Whether the AMP document is embedded in a webview.
     * @private @const {boolean}
     */
    this.isWebviewEmbedded_ = !this.isIframed_ && this.params_['webview'] == '1';

    /**
     * Whether the AMP document is embedded in a viewer, such as an iframe, or
     * a web view, or a shadow doc in PWA.
     * @private @const {boolean}
     */
    this.isEmbedded_ = !!(this.isIframed_ && !this.win.AMP_TEST_IFRAME
    // Checking param "origin", as we expect all viewers to provide it.
    // See https://github.com/ampproject/amphtml/issues/4183
    // There appears to be a bug under investigation where the
    // origin is sometimes failed to be detected. Since failure mode
    // if we fail to initialize communication is very bad, we also check
    // for visibilityState.
    // After https://github.com/ampproject/amphtml/issues/6070
    // is fixed we should probably only keep the amp_js_v check here.
    && (this.params_['origin'] || this.params_['visibilityState']
    // Parent asked for viewer JS. We must be embedded.
    || this.win.location.search.indexOf('amp_js_v') != -1) || this.isWebviewEmbedded_ || this.isCctEmbedded_ || !ampdoc.isSingleDoc());

    var url = (0, _url.parseUrlDeprecated)(this.ampdoc.win.location.href);
    /**
     * Whether the AMP document was served by a proxy.
     * @private @const {boolean}
     */
    this.isProxyOrigin_ = (0, _url.isProxyOrigin)(url);

    /** @private {boolean} */
    this.hasBeenVisible_ = this.isVisible();

    // Wait for document to become visible.
    this.docState_.onVisibilityChanged(this.recheckVisibilityState_.bind(this));

    var messagingDeferred = new _promise.Deferred();
    this.messagingReadyResolver_ = messagingDeferred.resolve;

    /**
     * This promise will resolve when communications channel has been
     * established or timeout in 20 seconds. The timeout is needed to avoid
     * this promise becoming a memory leak with accumulating undelivered
     * messages. The promise is only available when the document is embedded.
     * @private @const {?Promise}
     */
    this.messagingReadyPromise_ = this.isEmbedded_ ? _services.Services.timerFor(this.win).timeoutPromise(20000, messagingDeferred.promise).catch(function (reason) {
      throw getChannelError( /** @type {!Error|string|undefined} */reason);
    }) : null;

    /**
     * A promise for non-essential messages. These messages should not fail
     * if there's no messaging channel set up. But ideally viewer would try to
     * deliver if at all possible. This promise is only available when the
     * document is embedded.
     * @private @const {?Promise}
     */
    this.messagingMaybePromise_ = this.isEmbedded_ ? this.messagingReadyPromise_.catch(function (reason) {
      // Don't fail promise, but still report.
      (0, _error.reportError)(getChannelError(
      /** @type {!Error|string|undefined} */reason));
    }) : null;

    // Trusted viewer and referrer.
    var trustedViewerResolved = void 0;
    var trustedViewerPromise = void 0;
    if (!this.isEmbedded_) {
      // Not embedded in IFrame - can't trust the viewer.
      trustedViewerResolved = false;
      trustedViewerPromise = Promise.resolve(false);
    } else if (this.win.location.ancestorOrigins && !this.isWebviewEmbedded_ && !this.isCctEmbedded_) {
      // Ancestors when available take precedence. This is the main API used
      // for this determination. Fallback is only done when this API is not
      // supported by the browser.
      trustedViewerResolved = this.win.location.ancestorOrigins.length > 0 && this.isTrustedViewerOrigin_(this.win.location.ancestorOrigins[0]);
      trustedViewerPromise = Promise.resolve(trustedViewerResolved);
    } else {
      // Wait for comms channel to confirm the origin.
      var _deferred = new _promise.Deferred();
      trustedViewerPromise = _deferred.promise;
      this.trustedViewerResolver_ = _deferred.resolve;
    }

    /** @const @private {!Promise<boolean>} */
    this.isTrustedViewer_ = trustedViewerPromise;

    /** @const @private {!Promise<string>} */
    this.viewerOrigin_ = new Promise(function (resolve) {
      if (!_this.isEmbedded()) {
        // Viewer is only determined for iframed documents at this time.
        resolve('');
      } else if (_this.win.location.ancestorOrigins && _this.win.location.ancestorOrigins.length > 0) {
        resolve(_this.win.location.ancestorOrigins[0]);
      } else {
        // Race to resolve with a timer.
        _services.Services.timerFor(_this.win).delay(function () {
          return resolve('');
        }, VIEWER_ORIGIN_TIMEOUT_);
        _this.viewerOriginResolver_ = resolve;
      }
    });

    /** @private {string} */
    this.unconfirmedReferrerUrl_ = this.isEmbedded() && 'referrer' in this.params_ && trustedViewerResolved !== false ? this.params_['referrer'] : this.win.document.referrer;

    /** @const @private {!Promise<string>} */
    this.referrerUrl_ = new Promise(function (resolve) {
      if (_this.isEmbedded() && 'referrer' in _this.params_) {
        // Viewer override, but only for whitelisted viewers. Only allowed for
        // iframed documents.
        _this.isTrustedViewer_.then(function (isTrusted) {
          if (isTrusted) {
            resolve(_this.params_['referrer']);
          } else {
            resolve(_this.win.document.referrer);
            if (_this.unconfirmedReferrerUrl_ != _this.win.document.referrer) {
              (0, _log.dev)().expectedError(TAG_, 'Untrusted viewer referrer override: ' + _this.unconfirmedReferrerUrl_ + ' at ' + _this.messagingOrigin_);
              _this.unconfirmedReferrerUrl_ = _this.win.document.referrer;
            }
          }
        });
      } else {
        resolve(_this.win.document.referrer);
      }
    });

    /** @private {string} */
    this.resolvedViewerUrl_ = (0, _url.removeFragment)(this.win.location.href || '');

    /** @const @private {!Promise<string>} */
    this.viewerUrl_ = new Promise(function (resolve) {
      /** @const {string} */
      var viewerUrlOverride = _this.params_['viewerUrl'];
      if (_this.isEmbedded() && viewerUrlOverride) {
        // Viewer override, but only for whitelisted viewers. Only allowed for
        // iframed documents.
        _this.isTrustedViewer_.then(function (isTrusted) {
          if (isTrusted) {
            _this.resolvedViewerUrl_ = viewerUrlOverride;
          } else {
            (0, _log.dev)().error(TAG_, 'Untrusted viewer url override: ' + viewerUrlOverride + ' at ' + _this.messagingOrigin_);
          }
          resolve(_this.resolvedViewerUrl_);
        });
      } else {
        resolve(_this.resolvedViewerUrl_);
      }
    });

    // Remove hash when we have an incoming click tracking string
    // (see impression.js).
    if (this.params_['click']) {
      var newUrl = (0, _url.removeFragment)(this.win.location.href);
      if (newUrl != this.win.location.href && this.win.history.replaceState) {
        // Persist the hash that we removed has location.originalHash.
        // This is currently used by mode.js to infer development mode.
        if (!this.win.location.originalHash) {
          this.win.location.originalHash = this.win.location.hash;
        }
        this.win.history.replaceState({}, '', newUrl);
        delete this.hashParams_['click'];
        (0, _log.dev)().fine(TAG_, 'replace fragment:' + this.win.location.href);
      }
    }

    // Check if by the time the `Viewer`
    // instance is constructed, the document is already `visible`.
    this.recheckVisibilityState_();
    this.onVisibilityChange_();

    // This fragment may get cleared by impression tracking. If so, it will be
    // restored afterward.
    this.whenFirstVisible().then(function () {
      _this.maybeUpdateFragmentForCct();
    });
  }

  /**
   * Handler for visibility change.
   * @private
   */


  _createClass(Viewer, [{
    key: 'onVisibilityChange_',
    value: function onVisibilityChange_() {
      if (this.isVisible()) {
        var now = Date.now();
        if (!this.firstVisibleTime_) {
          this.firstVisibleTime_ = now;
        }
        this.lastVisibleTime_ = now;
        this.hasBeenVisible_ = true;
        this.whenFirstVisibleResolve_();
        this.whenNextVisibleResolve_();
      }
      this.visibilityObservable_.fire();
    }

    /**
     * Returns the value of a viewer's startup parameter with the specified
     * name or "undefined" if the parameter wasn't defined at startup time.
     * @param {string} name
     * @return {string|undefined}
     * @export
     */

  }, {
    key: 'getParam',
    value: function getParam(name) {
      return this.params_[name];
    }

    /**
     * Viewers can communicate their "capabilities" and this method allows
     * checking them.
     * @param {string} name Of the capability.
     * @return {boolean}
     */

  }, {
    key: 'hasCapability',
    value: function hasCapability(name) {
      var capabilities = this.params_['cap'];
      if (!capabilities) {
        return false;
      }
      // TODO(@cramforce): Consider caching the split.
      return capabilities.split(',').indexOf(name) != -1;
    }

    /**
     * Whether the viewer can render templates.
     * @return {boolean}
     */

  }, {
    key: 'canRenderTemplates',
    value: function canRenderTemplates() {
      return this.hasCapability(Capability.VIEWER_RENDER_TEMPLATE);
    }

    /**
     * Requests A2A navigation to the given destination. If the viewer does
     * not support this operation, does nothing.
     * The URL is assumed to be in AMP Cache format already.
     * @param {string} url An AMP article URL.
     * @param {string} requestedBy Informational string about the entity that
     *     requested the navigation.
     * @return {boolean} Returns true if navigation message was sent to viewer.
     *     Otherwise, returns false.
     */

  }, {
    key: 'navigateToAmpUrl',
    value: function navigateToAmpUrl(url, requestedBy) {
      if (this.hasCapability('a2a')) {
        this.sendMessage('a2aNavigate', (0, _object.dict)({
          'url': url,
          'requestedBy': requestedBy
        }));
        return true;
      }
      return false;
    }

    /**
     * Whether the document is embedded in a viewer.
     * @return {boolean}
     */

  }, {
    key: 'isEmbedded',
    value: function isEmbedded() {
      return this.isEmbedded_;
    }

    /**
     * Whether the document is embedded in a webview.
     * @return {boolean}
     */

  }, {
    key: 'isWebviewEmbedded',
    value: function isWebviewEmbedded() {
      return this.isWebviewEmbedded_;
    }

    /**
     * Whether the document is embedded in a Chrome Custom Tab.
     * @return {boolean}
     */

  }, {
    key: 'isCctEmbedded',
    value: function isCctEmbedded() {
      return this.isCctEmbedded_;
    }

    /**
     * Whether the document was served by a proxy.
     * @return {boolean}
     */

  }, {
    key: 'isProxyOrigin',
    value: function isProxyOrigin() {
      return this.isProxyOrigin_;
    }

    /**
     * Update the URL fragment with data needed to support custom tabs. This will
     * not clear query string parameters, but will clear the fragment.
     */

  }, {
    key: 'maybeUpdateFragmentForCct',
    value: function maybeUpdateFragmentForCct() {
      if (!this.isCctEmbedded_) {
        return;
      }
      // CCT only works with versions of Chrome that support the history API.
      if (!this.win.history.replaceState) {
        return;
      }
      var sourceOrigin = (0, _url.getSourceOrigin)(this.win.location.href);

      var _Services$documentInf = _services.Services.documentInfoForDoc(this.ampdoc),
          canonicalUrl = _Services$documentInf.canonicalUrl;

      var canonicalSourceOrigin = (0, _url.getSourceOrigin)(canonicalUrl);
      if (this.hasRoughlySameOrigin_(sourceOrigin, canonicalSourceOrigin)) {
        this.hashParams_['ampshare'] = canonicalUrl;
        this.win.history.replaceState({}, '', '#' + (0, _url.serializeQueryString)(
        /** @type {!JsonObject} */this.hashParams_));
      }
    }

    /**
     * Compares URLs to determine if they match once common subdomains are
     * removed. Everything else must match.
     * @param {string} first Origin to compare.
     * @param {string} second Origin to compare.
     * @return {boolean} Whether the origins match without subdomains.
     * @private
     */

  }, {
    key: 'hasRoughlySameOrigin_',
    value: function hasRoughlySameOrigin_(first, second) {
      var trimOrigin = function trimOrigin(origin) {
        if (origin.split('.').length > 2) {
          return origin.replace(TRIM_ORIGIN_PATTERN_, '$1');
        }
        return origin;
      };
      return trimOrigin(first) == trimOrigin(second);
    }

    /**
     * @return {boolean}
     */

  }, {
    key: 'isRuntimeOn',
    value: function isRuntimeOn() {
      return this.isRuntimeOn_;
    }

    /**
     */

  }, {
    key: 'toggleRuntime',
    value: function toggleRuntime() {
      this.isRuntimeOn_ = !this.isRuntimeOn_;
      (0, _log.dev)().fine(TAG_, 'Runtime state:', this.isRuntimeOn_);
      this.runtimeOnObservable_.fire(this.isRuntimeOn_);
    }

    /**
     * @param {function(boolean)} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onRuntimeState',
    value: function onRuntimeState(handler) {
      return this.runtimeOnObservable_.add(handler);
    }

    /**
     * Whether the viewer overtakes the history for AMP document. If yes,
     * the viewer must implement history messages "pushHistory" and "popHistory"
     * and emit message "historyPopped"
     * @return {boolean}
     */

  }, {
    key: 'isOvertakeHistory',
    value: function isOvertakeHistory() {
      return this.overtakeHistory_;
    }

    /**
     * Returns visibility state configured by the viewer.
     * See {@link isVisible}.
     * @return {!VisibilityState}
     * TODO(dvoytenko, #5285): Move public API to AmpDoc.
     */

  }, {
    key: 'getVisibilityState',
    value: function getVisibilityState() {
      return this.visibilityState_;
    }

    /** @private */

  }, {
    key: 'recheckVisibilityState_',
    value: function recheckVisibilityState_() {
      this.setVisibilityState_(this.viewerVisibilityState_);
    }

    /**
     * Sets the viewer defined visibility state.
     * @param {string|undefined} state
     * @private
     */

  }, {
    key: 'setVisibilityState_',
    value: function setVisibilityState_(state) {
      if (!state) {
        return;
      }
      var oldState = this.visibilityState_;
      state = (0, _log.dev)().assertEnumValue(_visibilityState.VisibilityState, state, 'VisibilityState');

      // The viewer is informing us we are not currently active because we are
      // being pre-rendered, or the user swiped to another doc (or closed the
      // viewer). Unfortunately, the viewer sends HIDDEN instead of PRERENDER or
      // INACTIVE, though we know better.
      if (state === _visibilityState.VisibilityState.HIDDEN) {
        state = this.hasBeenVisible_ ? _visibilityState.VisibilityState.INACTIVE : _visibilityState.VisibilityState.PRERENDER;
      }

      this.viewerVisibilityState_ = state;

      if (this.docState_.isHidden() && (state === _visibilityState.VisibilityState.VISIBLE || state === _visibilityState.VisibilityState.PAUSED)) {
        state = _visibilityState.VisibilityState.HIDDEN;
      }

      this.visibilityState_ = state;

      (0, _log.dev)().fine(TAG_, 'visibilitychange event:', this.getVisibilityState());

      if (oldState !== state) {
        this.onVisibilityChange_();
      }
    }

    /**
     * Whether the AMP document currently visible. The reasons why it might not
     * be visible include user switching to another tab, browser running the
     * document in the prerender mode or viewer running the document in the
     * prerender mode.
     * @return {boolean}
     */

  }, {
    key: 'isVisible',
    value: function isVisible() {
      return this.getVisibilityState() == _visibilityState.VisibilityState.VISIBLE;
    }

    /**
     * Whether the AMP document has been ever visible before. Since the visiblity
     * state of a document can be flipped back and forth we sometimes want to know
     * if a document has ever been visible.
     * @return {boolean}
     */

  }, {
    key: 'hasBeenVisible',
    value: function hasBeenVisible() {
      return this.hasBeenVisible_;
    }

    /**
     * Returns a Promise that only ever resolved when the current
     * AMP document first becomes visible.
     * @return {!Promise}
     */

  }, {
    key: 'whenFirstVisible',
    value: function whenFirstVisible() {
      return this.whenFirstVisiblePromise_;
    }

    /**
     * Returns a Promise that resolve when current doc becomes visible.
     * The promise resolves immediately if doc is already visible.
     * @return {!Promise}
     */

  }, {
    key: 'whenNextVisible',
    value: function whenNextVisible() {
      if (this.isVisible()) {
        return Promise.resolve();
      }

      if (this.nextVisiblePromise_) {
        return this.nextVisiblePromise_;
      }

      var deferred = new _promise.Deferred();
      this.nextVisibleResolve_ = deferred.resolve;
      return this.nextVisiblePromise_ = deferred.promise;
    }

    /**
     * Helper method to be called on visiblity change
     * @private
     */

  }, {
    key: 'whenNextVisibleResolve_',
    value: function whenNextVisibleResolve_() {
      if (this.nextVisibleResolve_) {
        this.nextVisibleResolve_();
        this.nextVisibleResolve_ = null;
        this.nextVisiblePromise_ = null;
      }
    }

    /**
     * Returns the time when the document has become visible for the first time.
     * If document has not yet become visible, the returned value is `null`.
     * @return {?time}
     */

  }, {
    key: 'getFirstVisibleTime',
    value: function getFirstVisibleTime() {
      return this.firstVisibleTime_;
    }

    /**
     * Returns the time when the document has become visible for the last time.
     * If document has not yet become visible, the returned value is `null`.
     * @return {?time}
     */

  }, {
    key: 'getLastVisibleTime',
    value: function getLastVisibleTime() {
      return this.lastVisibleTime_;
    }

    /**
     * How much the viewer has requested the runtime to prerender the document.
     * The values are in number of screens.
     * @return {number}
     */

  }, {
    key: 'getPrerenderSize',
    value: function getPrerenderSize() {
      return this.prerenderSize_;
    }

    /**
     * Returns the resolved viewer URL value. It's by default the current page's
     * URL. The trusted viewers are allowed to override this value.
     * @return {string}
     */

  }, {
    key: 'getResolvedViewerUrl',
    value: function getResolvedViewerUrl() {
      return this.resolvedViewerUrl_;
    }

    /**
     * Returns the promise that will yield the viewer URL value. It's by default
     * the current page's URL. The trusted viewers are allowed to override this
     * value.
     * @return {!Promise<string>}
     */

  }, {
    key: 'getViewerUrl',
    value: function getViewerUrl() {
      return this.viewerUrl_;
    }

    /**
     * Possibly return the messaging origin if set. This would be the origin
     * of the parent viewer.
     * @return {?string}
     */

  }, {
    key: 'maybeGetMessagingOrigin',
    value: function maybeGetMessagingOrigin() {
      return this.messagingOrigin_;
    }

    /**
     * @param {string} referrer
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isTrustedReferrer_',
    value: function isTrustedReferrer_(referrer) {
      var url = (0, _url.parseUrlDeprecated)(referrer);
      if (url.protocol != 'https:') {
        return false;
      }
      return TRUSTED_REFERRER_HOSTS.some(function (th) {
        return th.test(url.hostname);
      });
    }

    /**
     * Returns an unconfirmed "referrer" URL that can be optionally customized by
     * the viewer. Consider using `getReferrerUrl()` instead, which returns the
     * promise that will yield the confirmed "referrer" URL.
     * @return {string}
     */

  }, {
    key: 'getUnconfirmedReferrerUrl',
    value: function getUnconfirmedReferrerUrl() {
      return this.unconfirmedReferrerUrl_;
    }

    /**
     * Returns the promise that will yield the confirmed "referrer" URL. This
     * URL can be optionally customized by the viewer, but viewer is required
     * to be a trusted viewer.
     * @return {!Promise<string>}
     */

  }, {
    key: 'getReferrerUrl',
    value: function getReferrerUrl() {
      return this.referrerUrl_;
    }

    /**
     * Whether the viewer has been whitelisted for more sensitive operations
     * such as customizing referrer.
     * @return {!Promise<boolean>}
     */

  }, {
    key: 'isTrustedViewer',
    value: function isTrustedViewer() {
      return this.isTrustedViewer_;
    }

    /**
     * Whether the referrer has been whitelisted for CORS impression
     * @return {!Promise<boolean>}
     */

  }, {
    key: 'isTrustedReferrer',
    value: function isTrustedReferrer() {
      var _this2 = this;

      return this.referrerUrl_.then(function (referrer) {
        return _this2.isTrustedReferrer_(referrer);
      });
    }

    /**
     * Returns the promise that resolves to URL representing the origin of the
     * viewer. If the document is not embedded or if a viewer origin can't be
     * found, empty string is returned.
     * @return {!Promise<string>}
     */

  }, {
    key: 'getViewerOrigin',
    value: function getViewerOrigin() {
      return this.viewerOrigin_;
    }

    /**
     * @param {string} urlString
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isTrustedViewerOrigin_',
    value: function isTrustedViewerOrigin_(urlString) {
      /** @const {!Location} */
      var url = (0, _url.parseUrlDeprecated)(urlString);
      if (url.protocol != 'https:') {
        // Non-https origins are never trusted.
        return false;
      }
      return TRUSTED_VIEWER_HOSTS.some(function (th) {
        return th.test(url.hostname);
      });
    }

    /**
     * Adds a "visibilitychange" event listener for viewer events. The
     * callback can check {@link isVisible} and {@link getPrefetchCount}
     * methods for more info.
     * @param {function()} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onVisibilityChanged',
    value: function onVisibilityChanged(handler) {
      return this.visibilityObservable_.add(handler);
    }

    /**
     * Adds a eventType listener for viewer events.
     * @param {string} eventType
     * @param {function(!JsonObject)} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onMessage',
    value: function onMessage(eventType, handler) {
      var observable = this.messageObservables_[eventType];
      if (!observable) {
        observable = new _observable.Observable();
        this.messageObservables_[eventType] = observable;
      }
      return observable.add(handler);
    }

    /**
     * Adds a eventType listener for viewer events.
     * @param {string} eventType
     * @param {!RequestResponder} responder
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onMessageRespond',
    value: function onMessageRespond(eventType, responder) {
      var _this3 = this;

      this.messageResponders_[eventType] = responder;
      return function () {
        if (_this3.messageResponders_[eventType] === responder) {
          delete _this3.messageResponders_[eventType];
        }
      };
    }

    /**
     * Requests AMP document to receive a message from Viewer.
     * @param {string} eventType
     * @param {!JsonObject} data
     * @param {boolean} unusedAwaitResponse
     * @return {(!Promise<*>|undefined)}
     * @export
     */

  }, {
    key: 'receiveMessage',
    value: function receiveMessage(eventType, data, unusedAwaitResponse) {
      if (eventType == 'visibilitychange') {
        if (data['prerenderSize'] !== undefined) {
          this.prerenderSize_ = data['prerenderSize'];
          (0, _log.dev)().fine(TAG_, '- prerenderSize change:', this.prerenderSize_);
        }
        this.setVisibilityState_(data['state']);
        return Promise.resolve();
      }
      if (eventType == 'broadcast') {
        this.broadcastObservable_.fire(
        /** @type {!JsonObject|undefined} */data);
        return Promise.resolve();
      }
      var observable = this.messageObservables_[eventType];
      if (observable) {
        observable.fire(data);
      }
      var responder = this.messageResponders_[eventType];
      if (responder) {
        return responder(data);
      } else if (observable) {
        return Promise.resolve();
      }
      (0, _log.dev)().fine(TAG_, 'unknown message:', eventType);
      return undefined;
    }

    /**
     * Provides a message delivery mechanism by which AMP document can send
     * messages to the viewer.
     * @param {function(string, (?JsonObject|string|undefined), boolean):
     *     (!Promise<*>|undefined)} deliverer
     * @param {string} origin
     * @export
     */

  }, {
    key: 'setMessageDeliverer',
    value: function setMessageDeliverer(deliverer, origin) {
      var _this4 = this;

      if (this.messageDeliverer_) {
        throw new Error('message channel can only be initialized once');
      }
      if (origin == null) {
        throw new Error('message channel must have an origin');
      }
      (0, _log.dev)().fine(TAG_, 'message channel established with origin: ', origin);
      this.messageDeliverer_ = deliverer;
      this.messagingOrigin_ = origin;
      if (this.messagingReadyResolver_) {
        this.messagingReadyResolver_();
      }
      if (this.trustedViewerResolver_) {
        this.trustedViewerResolver_(origin ? this.isTrustedViewerOrigin_(origin) : false);
      }
      if (this.viewerOriginResolver_) {
        this.viewerOriginResolver_(origin || '');
      }

      if (this.messageQueue_.length > 0) {
        var queue = this.messageQueue_.slice(0);
        this.messageQueue_ = [];
        queue.forEach(function (message) {
          var responsePromise = _this4.messageDeliverer_(message.eventType, message.data, message.awaitResponse);

          if (message.awaitResponse) {
            message.responseResolver(responsePromise);
          }
        });
      }
    }

    /**
     * Sends the message to the viewer without waiting for any response.
     * If cancelUnsent is true, the previous message of the same message type will
     * be canceled.
     *
     * This is a restricted API.
     *
     * @param {string} eventType
     * @param {?JsonObject|string|undefined} data
     * @param {boolean=} cancelUnsent
     */

  }, {
    key: 'sendMessage',
    value: function sendMessage(eventType, data) {
      var cancelUnsent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this.sendMessageInternal_(eventType, data, cancelUnsent, false);
    }

    /**
     * Sends the message to the viewer and wait for response.
     * If cancelUnsent is true, the previous message of the same message type will
     * be canceled.
     *
     * This is a restricted API.
     *
     * @param {string} eventType
     * @param {?JsonObject|string|undefined} data
     * @param {boolean=} cancelUnsent
     * @return {!Promise<(?JsonObject|string|undefined)>} the response promise
     */

  }, {
    key: 'sendMessageAwaitResponse',
    value: function sendMessageAwaitResponse(eventType, data) {
      var cancelUnsent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return this.sendMessageInternal_(eventType, data, cancelUnsent, true);
    }

    /**
     * Sends the message to the viewer.
     *
     * @param {string} eventType
     * @param {?JsonObject|string|undefined} data
     * @param {boolean} cancelUnsent
     * @param {boolean} awaitResponse
     * @return {!Promise<(?JsonObject|string|undefined)>} the response promise
     */

  }, {
    key: 'sendMessageInternal_',
    value: function sendMessageInternal_(eventType, data, cancelUnsent, awaitResponse) {
      var _this5 = this;

      if (this.messageDeliverer_) {
        // Certain message deliverers return fake "Promise" instances called
        // "Thenables". Convert from these values into trusted Promise instances,
        // assimilating with the resolved (or rejected) internal value.
        return (/** @type {!Promise<?JsonObject|string|undefined>} */(0, _promise.tryResolve)(function () {
            return _this5.messageDeliverer_(eventType,
            /** @type {?JsonObject|string|undefined} */data, awaitResponse);
          })
        );
      }

      if (!this.messagingReadyPromise_) {
        if (awaitResponse) {
          return Promise.reject(getChannelError());
        } else {
          return Promise.resolve();
        }
      }

      if (!cancelUnsent) {
        return this.messagingReadyPromise_.then(function () {
          return _this5.messageDeliverer_(eventType, data, awaitResponse);
        });
      }

      var found = (0, _array.findIndex)(this.messageQueue_, function (m) {
        return m.eventType == eventType;
      });

      var message = void 0;
      if (found != -1) {
        message = this.messageQueue_.splice(found, 1)[0];
        message.data = data;
        message.awaitResponse = message.awaitResponse || awaitResponse;
      } else {
        var deferred = new _promise.Deferred();
        var responsePromise = deferred.promise,
            responseResolver = deferred.resolve;


        message = {
          eventType: eventType,
          data: data,
          awaitResponse: awaitResponse,
          responsePromise: responsePromise,
          responseResolver: responseResolver
        };
      }
      this.messageQueue_.push(message);
      return message.responsePromise;
    }

    /**
     * Broadcasts a message to all other AMP documents under the same viewer. It
     * will attempt to deliver messages when the messaging channel has been
     * established, but it will not fail if the channel is timed out.
     *
     * @param {!JsonObject} message
     */

  }, {
    key: 'broadcast',
    value: function broadcast(message) {
      if (!this.messagingMaybePromise_) {
        // Messaging is not expected.
        return;
      }

      this.sendMessage('broadcast', message);
    }

    /**
     * Registers receiver for the broadcast events.
     * @param {function(!JsonObject)} handler
     * @return {!UnlistenDef}
     */

  }, {
    key: 'onBroadcast',
    value: function onBroadcast(handler) {
      return this.broadcastObservable_.add(handler);
    }

    /**
     * Resolves when there is a messaging channel established with the viewer.
     * Will be null if no messaging is needed like in an non-embedded document.
     * @return {?Promise}
     */

  }, {
    key: 'whenMessagingReady',
    value: function whenMessagingReady() {
      return this.messagingMaybePromise_;
    }

    /**
     * Replace the document url with the viewer provided new replaceUrl.
     * @param {?string} newUrl
     */

  }, {
    key: 'replaceUrl',
    value: function replaceUrl(newUrl) {
      if (!newUrl || !this.ampdoc.isSingleDoc() || !this.win.history.replaceState) {
        return;
      }

      try {
        // The origin and source origin must match.
        var url = (0, _url.parseUrlDeprecated)(this.win.location.href);
        var replaceUrl = (0, _url.parseUrlDeprecated)((0, _url.removeFragment)(newUrl) + this.win.location.hash);
        if (url.origin == replaceUrl.origin && (0, _url.getSourceOrigin)(url) == (0, _url.getSourceOrigin)(replaceUrl)) {
          this.win.history.replaceState({}, '', replaceUrl.href);
          this.win.location.originalHref = url.href;
          (0, _log.dev)().fine(TAG_, 'replace url:' + replaceUrl.href);
        }
      } catch (e) {
        (0, _log.dev)().error(TAG_, 'replaceUrl failed', e);
      }
    }
  }]);

  return Viewer;
}();

/**
 * Parses the viewer parameters as a string.
 *
 * Visible for testing only.
 *
 * @param {string} str
 * @param {!Object<string, string>} allParams
 * @private
 */


function parseParams_(str, allParams) {
  var params = (0, _url.parseQueryString)(str);
  for (var k in params) {
    allParams[k] = params[k];
  }
}

/**
 * Creates an error for the case where a channel cannot be established.
 * @param {*=} opt_reason
 * @return {!Error}
 */
function getChannelError(opt_reason) {
  if (opt_reason instanceof Error) {
    opt_reason = (0, _log.duplicateErrorIfNecessary)(opt_reason);
    opt_reason.message = 'No messaging channel: ' + opt_reason.message;
    return opt_reason;
  }
  return new Error('No messaging channel: ' + opt_reason);
}

/**
 * Sets the viewer visibility state. This calls is restricted to runtime only.
 * @param {!Viewer} viewer
 * @param {!VisibilityState} state
 * @restricted
 */
function setViewerVisibilityState(viewer, state) {
  viewer.setVisibilityState_(state);
}

/**
 * @param {!./ampdoc-impl.AmpDoc} ampdoc
 * @param {!Object<string, string>=} opt_initParams
 */
function installViewerServiceForDoc(ampdoc, opt_initParams) {
  (0, _service.registerServiceBuilderForDoc)(ampdoc, 'viewer', function () {
    return new Viewer(ampdoc, opt_initParams);
  },
  /* opt_instantiate */true);
}

},{"../dom":15,"../error":17,"../log":24,"../observable":27,"../service":37,"../services":39,"../string":41,"../url":47,"../utils/array":48,"../utils/object":50,"../utils/promise":51,"../visibility-state":52}],39:[function(require,module,exports){
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

},{"./element-service":16,"./service":37}],40:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SsrTemplateHelper = undefined;

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

var _viewerImpl = require('./service/viewer-impl');

var _object = require('./utils/object');

var _dom = require('./dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** The attributes we allow to be sent to the viewer. */
var ATTRS_TO_SEND_TO_VIEWER = {
  'amp-list': ['src', 'single-item', 'max-items'],
  'amp-form': ['action-xhr']
};

/**
 * Helper, that manages the proxying of template rendering to the viewer.
 */

var SsrTemplateHelper = exports.SsrTemplateHelper = function () {

  /**
   * @param {string} sourceComponent
   * @param {!./service/viewer-impl.Viewer} viewer
   * @param {!./service/template-impl.Templates} templates
   */
  function SsrTemplateHelper(sourceComponent, viewer, templates) {
    _classCallCheck(this, SsrTemplateHelper);

    /** @private @const */
    this.viewer_ = viewer;

    /** @private @const */
    this.templates_ = templates;

    /** @private @const {!XMLSerializer} */
    this.xmls_ = new XMLSerializer();

    /** @private @const */
    this.sourceComponent_ = sourceComponent;
  }

  /**
   * Whether the viewer can render templates.
   * @return {boolean}
   */


  _createClass(SsrTemplateHelper, [{
    key: 'isSupported',
    value: function isSupported() {
      return this.viewer_.canRenderTemplates();
    }

    /**
     * Proxies xhr and template rendering to the viewer and renders
     * the response.
     * @param {!Element} element
     * return {!Promise<{data:{?JsonObject|string|undefined}}>}
     */

  }, {
    key: 'fetchAndRenderTemplate',
    value: function fetchAndRenderTemplate(element) {
      var inputsAsJson = this.getElementInputsAsJson_(element);
      var elementAttrsAsJson = this.getElementAttributesAsJson_(element);
      elementAttrsAsJson['inputData'] = inputsAsJson;
      var template = this.templates_.maybeFindTemplate(element);
      var mustacheTemplate = void 0;
      if (template) {
        // The document fragment can't be used in the message channel API thus
        // serializeToString for a string representation of the dom tree.
        mustacheTemplate = this.xmls_.serializeToString(this.templates_.findTemplate(element));
      }
      var data = (0, _object.dict)({
        'data': elementAttrsAsJson,
        'mustacheTemplate': mustacheTemplate,
        'sourceAmpComponent': this.sourceComponent_
      });
      return this.viewer_.sendMessageAwaitResponse(_viewerImpl.Capability.VIEWER_RENDER_TEMPLATE, data);
    }

    /**
     * Returns the element's contained inputs and values in json format.
     * @param {!Element} element
     * @return {!JsonObject}
     */

  }, {
    key: 'getElementInputsAsJson_',
    value: function getElementInputsAsJson_(element) {
      var inputs = element.querySelectorAll('input');
      var inputsAsJson = (0, _object.map)();
      (0, _dom.iterateCursor)(inputs, function (input) {
        inputsAsJson[input.name] = input.value;
      });
      return inputsAsJson;
    }

    /**
     * Returns the element's attributes in json format.
     * @param {!Element} element
     * @return {!JsonObject}
     */

  }, {
    key: 'getElementAttributesAsJson_',
    value: function getElementAttributesAsJson_(element) {
      var attrsAsJson = (0, _object.map)();
      if (element.attributes.length > 0) {
        var attributes = element.attributes;
        /** {!Array} */

        var whiteList = ATTRS_TO_SEND_TO_VIEWER[this.sourceComponent_];
        (0, _dom.iterateCursor)(attributes, function (attribute) {
          if (whiteList.indexOf(attribute.name) != -1) {
            attrsAsJson[attribute.name] = attribute.value;
          }
        });
      }
      return attrsAsJson;
    }
  }]);

  return SsrTemplateHelper;
}();

},{"./dom":15,"./service/viewer-impl":38,"./utils/object":50}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
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

},{"./dom":15,"./log":24,"./render-delaying-services":36,"./services":39,"./style":43,"./utils/object":50}],43:[function(require,module,exports){
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

},{"./string":41,"./utils/object.js":50}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
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

},{"./url-try-decode-uri-component":46}],46:[function(require,module,exports){
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

},{}],47:[function(require,module,exports){
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

},{"./config":13,"./log":24,"./mode":26,"./string":41,"./types":44,"./url-parse-query-string":45,"./url-try-decode-uri-component":46,"./utils/lru-cache":49,"./utils/object":50}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
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

},{"../log":24}],50:[function(require,module,exports){
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

},{"../types":44}],51:[function(require,module,exports){
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

},{}],52:[function(require,module,exports){
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
 * Visibility state of the AMP document.
 * @enum {string}
 */
var VisibilityState = exports.VisibilityState = {
  /**
   * The AMP document is being pre-rendered before being shown.
   */
  PRERENDER: 'prerender',

  /**
   * The AMP document is currently active and visible.
   */
  VISIBLE: 'visible',

  /**
   * The AMP document is active but the browser tab or AMP app is not.
   */
  HIDDEN: 'hidden',

  /**
   * The AMP document is visible, but the user has started swiping away from
   * it. The runtime may stop active playback.
   */
  PAUSED: 'paused',

  /**
   * The AMP document is no longer active because the user swiped away or
   * closed the viewer. The document may become visible again later.
   */
  INACTIVE: 'inactive'
};

},{}],53:[function(require,module,exports){
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


})});//# sourceMappingURL=amp-form-0.1.max.js.map
