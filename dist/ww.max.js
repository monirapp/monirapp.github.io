(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BindEvaluator = undefined;

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

var _bindExpression = require('./bind-expression');

var _bindMacro = require('./bind-macro');

var _bindValidator = require('./bind-validator');

var _array = require('../../../src/utils/array');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Asynchronously evaluates a set of Bind expressions.
 */
var BindEvaluator = exports.BindEvaluator = function () {
  /**
   * Creates an instance of BindEvaluator.
   */
  function BindEvaluator() {
    _classCallCheck(this, BindEvaluator);

    /** @const @private {!Array<!BindBindingDef>} */
    this.bindings_ = [];

    /**
     * Maps `id` to parsed BindMacro objects for all <amp-bind-macro> on page.
     * @private @const {!Object<string, !./bind-macro.BindMacro>}
     */
    this.macros_ = Object.create(null);

    /** @const @private {!./bind-validator.BindValidator} */
    this.validator_ = new _bindValidator.BindValidator();

    /** @const @private {!Object<string, !BindExpression>} */
    this.expressions_ = Object.create(null);
  }

  /**
   * Parses and stores given bindings into expression objects and returns map
   * of expression string to parse errors.
   * @param {!Array<!BindBindingDef>} bindings
   * @return {!Object<string, !BindEvaluatorErrorDef>},
   */


  _createClass(BindEvaluator, [{
    key: 'addBindings',
    value: function addBindings(bindings) {
      var _this = this;

      var errors = Object.create(null);
      // Create BindExpression objects from expression strings.
      bindings.forEach(function (binding) {
        var parsed = _this.parse_(binding.expressionString);
        if (parsed.error) {
          errors[binding.expressionString] = parsed.error;
        } else {
          _this.bindings_.push(binding);
        }
      });
      return errors;
    }

    /**
     * Removes all parsed bindings for the provided expressions.
     * @param {!Array<string>} expressionStrings
     */

  }, {
    key: 'removeBindingsWithExpressionStrings',
    value: function removeBindingsWithExpressionStrings(expressionStrings) {
      var _this2 = this;

      var expressionsToRemove = Object.create(null);

      expressionStrings.forEach(function (expressionString) {
        delete _this2.expressions_[expressionString];
        expressionsToRemove[expressionString] = true;
      });

      (0, _array.filterSplice)(this.bindings_, function (binding) {
        return !expressionsToRemove[binding.expressionString];
      });
    }

    /**
     * Parses and stores the given macros and returns map of macro `id` to
     * parse errors.
     * @param {!Array<!BindMacroDef>} macros
     * @return {!Object<string, !BindEvaluatorErrorDef>}
     */

  }, {
    key: 'addMacros',
    value: function addMacros(macros) {
      var _this3 = this;

      var errors = [];
      // Create BindMacro objects from BindMacroDef.
      macros.forEach(function (macro, index) {
        // Only allow a macro to reference macros defined before it to prevent
        // cycles and recursion.
        // TODO(willchou): Would be better if cycle/recursion errors are thrown
        // at creation instead of evaluation.
        var referableMacros = Object.assign(Object.create(null), _this3.macros_);
        try {
          _this3.macros_[macro.id] = new _bindMacro.BindMacro(macro, referableMacros);
        } catch (e) {
          errors[index] = { message: e.message, stack: e.stack };
        }
      });
      return errors;
    }

    /**
     * Evaluates all expressions with the given `scope` data returns two maps:
     * expression strings to results and expression strings to errors.
     * @param {!Object} scope
     * @return {!BindEvaluateBindingsResultDef}
     */

  }, {
    key: 'evaluateBindings',
    value: function evaluateBindings(scope) {
      var _this4 = this;

      /** @type {!Object<string, BindExpressionResultDef>} */
      var cache = Object.create(null);
      /** @type {!Object<string, !BindEvaluatorErrorDef>} */
      var errors = Object.create(null);

      // First, evaluate all of the expression strings in the bindings.
      this.bindings_.forEach(function (binding) {
        var expressionString = binding.expressionString;
        // Skip if we've already evaluated this expression string.

        if (cache[expressionString] !== undefined || errors[expressionString]) {
          return;
        }
        var expression = _this4.expressions_[expressionString];
        if (!expression) {
          var _error = new Error('Expression "' + expressionString + '"" is not cached.');
          errors[expressionString] = { message: _error.message, stack: _error.stack };
          return;
        }

        var _evaluate_ = _this4.evaluate_(expression, scope),
            result = _evaluate_.result,
            error = _evaluate_.error;

        if (error) {
          errors[expressionString] = error;
          return;
        }
        cache[expressionString] = result;
      });

      // Then, validate each binding and delete invalid expression results.
      this.bindings_.forEach(function (binding) {
        var tagName = binding.tagName,
            property = binding.property,
            expressionString = binding.expressionString;

        var result = cache[expressionString];
        if (result === undefined) {
          return;
        }
        // IMPORTANT: We need to validate expression results on each binding
        // since validity depends on the `tagName` and `property` rather than
        // just the `result`.
        var resultString = _this4.stringValueOf_(property, result);
        if (!_this4.validator_.isResultValid(tagName, property, resultString)) {
          // TODO(choumx): If this expression string is used in another
          // tagName/property which is valid, we ought to allow it.
          delete cache[expressionString];
          var error = new Error('"' + result + '" is not a valid result for [' + property + '].');
          errors[expressionString] = { message: error.message, stack: error.stack };
        }
      });

      return { results: cache, errors: errors };
    }

    /**
     * Evaluates and returns a single expression string.
     * @param {string} expressionString
     * @param {!Object} scope
     * @return {!BindEvaluateExpressionResultDef}
     */

  }, {
    key: 'evaluateExpression',
    value: function evaluateExpression(expressionString, scope) {
      var parsed = this.parse_(expressionString);
      if (!parsed.expression) {
        return { result: null, error: parsed.error };
      }
      var evaluated = this.evaluate_(parsed.expression, scope);
      if (!evaluated.result) {
        return { result: null, error: evaluated.error };
      }
      return { result: evaluated.result, error: null };
    }

    /**
     * Parses a single expression string, caches and returns it.
     * @param {string} expressionString
     * @return {{expression: ?BindExpression, error: ?BindEvaluatorErrorDef}}
     * @private
     */

  }, {
    key: 'parse_',
    value: function parse_(expressionString) {
      var expression = this.expressions_[expressionString];
      var error = null;
      if (!expression) {
        try {
          expression = new _bindExpression.BindExpression(expressionString, this.macros_);
          this.expressions_[expressionString] = expression;
        } catch (e) {
          error = { message: e.message, stack: e.stack };
        }
      }
      return { expression: expression, error: error };
    }

    /**
     * Evaluate a single expression with the given scope.
     * @param {!BindExpression} expression
     * @param {!Object} scope
     * @return {{result: ?BindExpressionResultDef, error: ?BindEvaluatorErrorDef}}
     * @private
     */

  }, {
    key: 'evaluate_',
    value: function evaluate_(expression, scope) {
      var result = null;
      var error = null;
      try {
        result = expression.evaluate(scope);
      } catch (e) {
        error = { message: e.message, stack: e.stack };
      }
      return { result: result, error: error };
    }

    /**
     * Return parsed bindings for testing.
     * @return {!Array<!BindBindingDef>}
     * @visibleForTesting
     */

  }, {
    key: 'bindingsForTesting',
    value: function bindingsForTesting() {
      return this.bindings_;
    }

    /**
     * Returns the expression cache for testing.
     * @return {!Object<string, !BindExpression>}
     * @visibleForTesting
     */

  }, {
    key: 'expressionsForTesting',
    value: function expressionsForTesting() {
      return this.expressions_;
    }

    /**
     * Returns the expression result string for a binding to `property`.
     * @param {string} property
     * @param {BindExpressionResultDef} result
     * @return {?string}
     * @private
     */

  }, {
    key: 'stringValueOf_',
    value: function stringValueOf_(property, result) {
      if (result === null) {
        return null;
      }
      switch (property) {
        case 'text':
          break;
        case 'class':
          if (Array.isArray(result)) {
            return result.join(' ');
          }
          break;
        default:
          if (typeof result === 'boolean') {
            return result ? '' : null;
          }
          break;
      }
      return String(result);
    }
  }]);

  return BindEvaluator;
}();

},{"../../../src/utils/array":20,"./bind-expression":4,"./bind-macro":5,"./bind-validator":6}],2:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 * A single node in the AST of a `BindExpression`.
 * @struct
 */
var AstNode =
/**
 * @param {AstNodeType} type
 * @param {?Array<AstNode>} args
 * @param {(AstNodeValue|undefined)=} opt_value
 */
exports.AstNode = function AstNode(type, args, opt_value) {
  _classCallCheck(this, AstNode);

  /** @const {AstNodeType} */
  this.type = type;

  /** @const {?Array<AstNode>} */
  this.args = args;

  /** @const {(AstNodeValue|undefined)} */
  this.value = opt_value;
};

/**
 * Type of a node in the AST of a `BindExpression`.
 * @enum {number}
 */


var AstNodeType = exports.AstNodeType = {
  // Grammar rules.
  EXPRESSION: 0,
  INVOCATION: 1,
  ARGS: 2,
  MEMBER_ACCESS: 3,
  MEMBER: 4,
  VARIABLE: 5,
  LITERAL: 6,
  ARRAY_LITERAL: 7,
  ARRAY: 8,
  OBJECT_LITERAL: 9,
  OBJECT: 10,
  KEY_VALUE: 11,
  // Instead of using having an OPERATION type with subtypes, flatten and use
  // the operation types directly.
  NOT: 12,
  UNARY_MINUS: 13,
  UNARY_PLUS: 14,
  PLUS: 15,
  MINUS: 16,
  MULTIPLY: 17,
  DIVIDE: 18,
  MODULO: 19,
  LOGICAL_AND: 20,
  LOGICAL_OR: 21,
  LESS_OR_EQUAL: 22,
  LESS: 23,
  GREATER_OR_EQUAL: 24,
  GREATER: 25,
  NOT_EQUAL: 26,
  EQUAL: 27,
  TERNARY: 28,
  ARROW_FUNCTION: 29
};

/**
 * Value of a primitive or variable node.
 * @typedef {(boolean|string|number|null)}
 */
var AstNodeValue = exports.AstNodeValue = void 0;

},{}],3:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindParser = undefined;

var _bindExprDefines = require("./bind-expr-defines");

/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = function () {
    var o = function o(k, v, _o, l) {
        for (_o = _o || {}, l = k.length; l--; _o[k[l]] = v) {}return _o;
    },
        $V0 = [1, 7],
        $V1 = [1, 10],
        $V2 = [1, 11],
        $V3 = [1, 12],
        $V4 = [1, 13],
        $V5 = [1, 23],
        $V6 = [1, 17],
        $V7 = [1, 18],
        $V8 = [1, 19],
        $V9 = [1, 20],
        $Va = [1, 21],
        $Vb = [1, 22],
        $Vc = [1, 26],
        $Vd = [1, 25],
        $Ve = [1, 27],
        $Vf = [1, 28],
        $Vg = [1, 29],
        $Vh = [1, 30],
        $Vi = [1, 31],
        $Vj = [1, 32],
        $Vk = [1, 33],
        $Vl = [1, 34],
        $Vm = [1, 35],
        $Vn = [1, 36],
        $Vo = [1, 37],
        $Vp = [1, 38],
        $Vq = [1, 39],
        $Vr = [1, 41],
        $Vs = [5, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 33, 38, 39, 49],
        $Vt = [2, 40],
        $Vu = [1, 47],
        $Vv = [1, 52],
        $Vw = [1, 54],
        $Vx = [5, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49],
        $Vy = [1, 75],
        $Vz = [33, 49],
        $VA = [10, 33, 39],
        $VB = [5, 10, 14, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49],
        $VC = [5, 10, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 33, 39, 49],
        $VD = [5, 10, 19, 20, 25, 26, 27, 28, 33, 39, 49],
        $VE = [10, 33];
    var parser = { trace: function trace() {},
        yy: {},
        symbols_: { "error": 2, "result": 3, "expr": 4, "EOF": 5, "operation": 6, "invocation": 7, "member_access": 8, "(": 9, ")": 10, "variable": 11, "literal": 12, "!": 13, "-": 14, "+": 15, "*": 16, "/": 17, "%": 18, "&&": 19, "||": 20, "<=": 21, "<": 22, ">=": 23, ">": 24, "!=": 25, "==": 26, "?": 27, ":": 28, "NAME": 29, "args": 30, ".": 31, "arrow_function": 32, ",": 33, "=>": 34, "params": 35, "array": 36, "member": 37, "[": 38, "]": 39, "primitive": 40, "object_literal": 41, "array_literal": 42, "STRING": 43, "NUMBER": 44, "TRUE": 45, "FALSE": 46, "NULL": 47, "{": 48, "}": 49, "object": 50, "key_value": 51, "key": 52, "$accept": 0, "$end": 1 },
        terminals_: { 2: "error", 5: "EOF", 9: "(", 10: ")", 13: "!", 14: "-", 15: "+", 16: "*", 17: "/", 18: "%", 19: "&&", 20: "||", 21: "<=", 22: "<", 23: ">=", 24: ">", 25: "!=", 26: "==", 27: "?", 28: ":", 29: "NAME", 31: ".", 33: ",", 34: "=>", 38: "[", 39: "]", 43: "STRING", 44: "NUMBER", 45: "TRUE", 46: "FALSE", 47: "NULL", 48: "{", 49: "}" },
        productions_: [0, [3, 2], [3, 1], [4, 1], [4, 1], [4, 1], [4, 3], [4, 1], [4, 1], [6, 2], [6, 2], [6, 2], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 3], [6, 5], [7, 2], [7, 4], [7, 6], [7, 8], [32, 4], [32, 3], [32, 5], [35, 3], [35, 3], [30, 2], [30, 3], [8, 2], [37, 2], [37, 3], [11, 1], [12, 1], [12, 1], [12, 1], [40, 1], [40, 1], [40, 1], [40, 1], [40, 1], [42, 2], [42, 3], [42, 4], [36, 1], [36, 3], [41, 2], [41, 3], [41, 4], [50, 1], [50, 3], [51, 3], [52, 1], [52, 1], [52, 3]],
        performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
            /* this == yyval */

            var $0 = $$.length - 1;
            switch (yystate) {
                case 1:
                    return $$[$0 - 1];
                    break;
                case 2:
                    return '';
                    break;
                case 3:case 4:case 5:case 7:case 8:
                    this.$ = $$[$0];
                    break;
                case 6:
                    this.$ = $$[$0 - 1];
                    break;
                case 9:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.NOT, [$$[$0]]);

                    break;
                case 10:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.UNARY_MINUS, [$$[$0]]);

                    break;
                case 11:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.UNARY_PLUS, [$$[$0]]);

                    break;
                case 12:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.PLUS, [$$[$0 - 2], $$[$0]]);

                    break;
                case 13:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.MINUS, [$$[$0 - 2], $$[$0]]);

                    break;
                case 14:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.MULTIPLY, [$$[$0 - 2], $$[$0]]);

                    break;
                case 15:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.DIVIDE, [$$[$0 - 2], $$[$0]]);

                    break;
                case 16:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.MODULO, [$$[$0 - 2], $$[$0]]);

                    break;
                case 17:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LOGICAL_AND, [$$[$0 - 2], $$[$0]]);

                    break;
                case 18:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LOGICAL_OR, [$$[$0 - 2], $$[$0]]);

                    break;
                case 19:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LESS_OR_EQUAL, [$$[$0 - 2], $$[$0]]);

                    break;
                case 20:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LESS, [$$[$0 - 2], $$[$0]]);

                    break;
                case 21:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.GREATER_OR_EQUAL, [$$[$0 - 2], $$[$0]]);

                    break;
                case 22:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.GREATER, [$$[$0 - 2], $$[$0]]);

                    break;
                case 23:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.NOT_EQUAL, [$$[$0 - 2], $$[$0]]);

                    break;
                case 24:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.EQUAL, [$$[$0 - 2], $$[$0]]);

                    break;
                case 25:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.TERNARY, [$$[$0 - 4], $$[$0 - 2], $$[$0]]);

                    break;
                case 26:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.INVOCATION, [undefined, $$[$0]], $$[$0 - 1]);

                    break;
                case 27:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.INVOCATION, [$$[$0 - 3], $$[$0]], $$[$0 - 1]);

                    break;
                case 28:

                    {
                        var array = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARRAY, [$$[$0 - 1]]);
                        this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.INVOCATION, [$$[$0 - 5], array], $$[$0 - 3]);
                    }

                    break;
                case 29:

                    {
                        var _array = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARRAY, [$$[$0 - 3], $$[$0 - 1]]);
                        this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.INVOCATION, [$$[$0 - 7], _array], $$[$0 - 5]);
                    }

                    break;
                case 30:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARROW_FUNCTION, [undefined, $$[$0]]);

                    break;
                case 31:

                    var param = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, [$$[$0 - 2]]);
                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARROW_FUNCTION, [param, $$[$0]]);

                    break;
                case 32:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARROW_FUNCTION, [$$[$0 - 3], $$[$0]]);

                    break;
                case 33:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, [$$[$0 - 2], $$[$0]]);

                    break;
                case 34:

                    this.$ = $$[$0 - 2];
                    this.$.value.push($$[$0]);

                    break;
                case 35:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARGS, []);

                    break;
                case 36:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARGS, [$$[$0 - 1]]);

                    break;
                case 37:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.MEMBER_ACCESS, [$$[$0 - 1], $$[$0]]);

                    break;
                case 38:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.MEMBER, null, $$[$0]);

                    break;
                case 39:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.MEMBER, [$$[$0 - 1]]);

                    break;
                case 40:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.VARIABLE, null, $$[$0]);

                    break;
                case 41:case 42:case 43:case 61:

                    this.$ = $$[$0];

                    break;
                case 44:

                    var string = yytext.substr(1, yyleng - 2);
                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, string);

                    break;
                case 45:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, Number(yytext));

                    break;
                case 46:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, true);

                    break;
                case 47:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, false);

                    break;
                case 48:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, null);

                    break;
                case 49:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARRAY_LITERAL, []);

                    break;
                case 50:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARRAY_LITERAL, [$$[$0 - 1]]);

                    break;
                case 51:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARRAY_LITERAL, [$$[$0 - 2]]);

                    break;
                case 52:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.ARRAY, [$$[$0]]);

                    break;
                case 53:case 58:

                    this.$ = $$[$0 - 2];
                    this.$.args.push($$[$0]);

                    break;
                case 54:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.OBJECT_LITERAL, []);

                    break;
                case 55:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.OBJECT_LITERAL, [$$[$0 - 1]]);

                    break;
                case 56:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.OBJECT_LITERAL, [$$[$0 - 2]]);

                    break;
                case 57:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.OBJECT, [$$[$0]]);

                    break;
                case 59:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.KEY_VALUE, [$$[$0 - 2], $$[$0]]);

                    break;
                case 60:

                    this.$ = new _bindExprDefines.AstNode(_bindExprDefines.AstNodeType.LITERAL, null, $$[$0]);

                    break;
                case 62:

                    this.$ = $$[$0 - 1];

                    break;
            }
        },
        table: [{ 3: 1, 4: 2, 5: [1, 3], 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 1: [3] }, { 5: [1, 24], 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 37: 40, 38: $Vr }, { 1: [2, 2] }, o($Vs, [2, 3]), o($Vs, [2, 4]), o($Vs, [2, 5]), { 4: 42, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, [2, 7]), o($Vs, [2, 8]), { 4: 43, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 44, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 45, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, $Vt, { 30: 46, 9: $Vu }), o($Vs, [2, 41]), o($Vs, [2, 42]), o($Vs, [2, 43]), o($Vs, [2, 44]), o($Vs, [2, 45]), o($Vs, [2, 46]), o($Vs, [2, 47]), o($Vs, [2, 48]), { 29: $Vv, 38: $Vw, 40: 53, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 49: [1, 48], 50: 49, 51: 50, 52: 51 }, { 4: 57, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 36: 56, 38: $V5, 39: [1, 55], 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 1: [2, 1] }, { 4: 58, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 59, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 60, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 61, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 62, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 63, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 64, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 65, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 66, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 67, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 68, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 69, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 70, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 71, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 29: [1, 72] }, o($Vs, [2, 37]), { 4: 73, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 10: [1, 74], 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 37: 40, 38: $Vr }, o($Vx, [2, 9], { 37: 40, 31: $Vq, 38: $Vr }), o($Vx, [2, 10], { 37: 40, 31: $Vq, 38: $Vr }), o($Vx, [2, 11], { 37: 40, 31: $Vq, 38: $Vr }), o($Vs, [2, 26]), { 4: 57, 6: 4, 7: 5, 8: 6, 9: $V0, 10: $Vy, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 36: 76, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, [2, 54]), { 33: [1, 78], 49: [1, 77] }, o($Vz, [2, 57]), { 28: [1, 79] }, { 28: [2, 60] }, { 28: [2, 61] }, { 4: 80, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, [2, 49]), { 33: [1, 82], 39: [1, 81] }, o($VA, [2, 52], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr }), o($VB, [2, 12], { 37: 40, 16: $Ve, 17: $Vf, 18: $Vg, 31: $Vq, 38: $Vr }), o($VB, [2, 13], { 37: 40, 16: $Ve, 17: $Vf, 18: $Vg, 31: $Vq, 38: $Vr }), o($Vx, [2, 14], { 37: 40, 31: $Vq, 38: $Vr }), o($Vx, [2, 15], { 37: 40, 31: $Vq, 38: $Vr }), o($Vx, [2, 16], { 37: 40, 31: $Vq, 38: $Vr }), o([5, 10, 19, 20, 27, 28, 33, 39, 49], [2, 17], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 31: $Vq, 38: $Vr }), o([5, 10, 20, 27, 28, 33, 39, 49], [2, 18], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 31: $Vq, 38: $Vr }), o($VC, [2, 19], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 31: $Vq, 38: $Vr }), o($VC, [2, 20], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 31: $Vq, 38: $Vr }), o($VC, [2, 21], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 31: $Vq, 38: $Vr }), o($VC, [2, 22], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 31: $Vq, 38: $Vr }), o($VD, [2, 23], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 31: $Vq, 38: $Vr }), o($VD, [2, 24], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 31: $Vq, 38: $Vr }), { 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 28: [1, 83], 31: $Vq, 37: 40, 38: $Vr }, o($Vs, [2, 38], { 30: 84, 9: [1, 85] }), { 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 37: 40, 38: $Vr, 39: [1, 86] }, o($Vs, [2, 6]), o($Vs, [2, 35]), { 10: [1, 87], 33: [1, 88] }, o($Vs, [2, 55]), { 29: $Vv, 38: $Vw, 40: 53, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 49: [1, 89], 51: 90, 52: 51 }, { 4: 91, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 37: 40, 38: $Vr, 39: [1, 92] }, o($Vs, [2, 50]), { 4: 94, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 39: [1, 93], 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 4: 95, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, [2, 27]), { 4: 57, 6: 4, 7: 5, 8: 6, 9: [1, 97], 10: $Vy, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: [1, 98], 32: 96, 36: 76, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, [2, 39]), o($Vs, [2, 36]), { 4: 94, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($Vs, [2, 56]), o($Vz, [2, 58]), o($Vz, [2, 59], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr }), { 28: [2, 62] }, o($Vs, [2, 51]), o($VA, [2, 53], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr }), o([5, 10, 28, 33, 39, 49], [2, 25], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr }), { 10: [1, 99], 33: [1, 100] }, { 4: 42, 6: 4, 7: 5, 8: 6, 9: $V0, 10: [1, 101], 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: [1, 103], 35: 102, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o([10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 33, 38], $Vt, { 30: 46, 9: $Vu, 34: [1, 104] }), o($Vs, [2, 28]), { 4: 105, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 34: [1, 106] }, { 10: [1, 107], 33: [1, 108] }, o([10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 31, 38], $Vt, { 30: 46, 9: $Vu, 33: [1, 109] }), { 4: 110, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 10: [1, 111], 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 37: 40, 38: $Vr }, { 4: 112, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, { 34: [1, 113] }, { 29: [1, 114] }, { 29: [1, 115] }, o($VE, [2, 31], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr }), o($Vs, [2, 29]), o($VE, [2, 30], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr }), { 4: 116, 6: 4, 7: 5, 8: 6, 9: $V0, 11: 8, 12: 9, 13: $V1, 14: $V2, 15: $V3, 29: $V4, 38: $V5, 40: 14, 41: 15, 42: 16, 43: $V6, 44: $V7, 45: $V8, 46: $V9, 47: $Va, 48: $Vb }, o($VE, [2, 34]), o($VE, [2, 33]), o($VE, [2, 32], { 37: 40, 14: $Vc, 15: $Vd, 16: $Ve, 17: $Vf, 18: $Vg, 19: $Vh, 20: $Vi, 21: $Vj, 22: $Vk, 23: $Vl, 24: $Vm, 25: $Vn, 26: $Vo, 27: $Vp, 31: $Vq, 38: $Vr })],
        defaultActions: { 3: [2, 2], 24: [2, 1], 52: [2, 60], 53: [2, 61], 92: [2, 62] },
        parseError: function parseError(str, hash) {
            if (hash.recoverable) {
                this.trace(str);
            } else {
                var error = new Error(str);
                error.hash = hash;
                throw error;
            }
        },
        parse: function parse(input) {
            var self = this,
                stack = [0],
                tstack = [],
                vstack = [null],
                lstack = [],
                table = this.table,
                yytext = '',
                yylineno = 0,
                yyleng = 0,
                recovering = 0,
                TERROR = 2,
                EOF = 1;
            var args = lstack.slice.call(arguments, 1);
            var lexer = Object.create(this.lexer);
            var sharedState = { yy: {} };
            for (var k in this.yy) {
                if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
                    sharedState.yy[k] = this.yy[k];
                }
            }
            lexer.setInput(input, sharedState.yy);
            sharedState.yy.lexer = lexer;
            sharedState.yy.parser = this;
            if (typeof lexer.yylloc == 'undefined') {
                lexer.yylloc = {};
            }
            var yyloc = lexer.yylloc;
            lstack.push(yyloc);
            var ranges = lexer.options && lexer.options.ranges;
            if (typeof sharedState.yy.parseError === 'function') {
                this.parseError = sharedState.yy.parseError;
            } else {
                this.parseError = Object.getPrototypeOf(this).parseError;
            }
            function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
            }
            _token_stack: var lex = function lex() {
                var token;
                token = lexer.lex() || EOF;
                if (typeof token !== 'number') {
                    token = self.symbols_[token] || token;
                }
                return token;
            };
            var symbol,
                preErrorSymbol,
                state,
                action,
                a,
                r,
                yyval = {},
                p,
                len,
                newState,
                expected;
            while (true) {
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) {
                    action = this.defaultActions[state];
                } else {
                    if (symbol === null || typeof symbol == 'undefined') {
                        symbol = lex();
                    }
                    action = table[state] && table[state][symbol];
                }
                if (typeof action === 'undefined' || !action.length || !action[0]) {
                    var errStr = '';
                    expected = [];
                    for (p in table[state]) {
                        if (this.terminals_[p] && p > TERROR) {
                            expected.push('\'' + this.terminals_[p] + '\'');
                        }
                    }
                    if (lexer.showPosition) {
                        errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                    } else {
                        errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                    }
                    this.parseError(errStr, {
                        text: lexer.match,
                        token: this.terminals_[symbol] || symbol,
                        line: lexer.yylineno,
                        loc: yyloc,
                        expected: expected
                    });
                }
                if (action[0] instanceof Array && action.length > 1) {
                    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                }
                switch (action[0]) {
                    case 1:
                        stack.push(symbol);
                        vstack.push(lexer.yytext);
                        lstack.push(lexer.yylloc);
                        stack.push(action[1]);
                        symbol = null;
                        if (!preErrorSymbol) {
                            yyleng = lexer.yyleng;
                            yytext = lexer.yytext;
                            yylineno = lexer.yylineno;
                            yyloc = lexer.yylloc;
                            if (recovering > 0) {
                                recovering--;
                            }
                        } else {
                            symbol = preErrorSymbol;
                            preErrorSymbol = null;
                        }
                        break;
                    case 2:
                        len = this.productions_[action[1]][1];
                        yyval.$ = vstack[vstack.length - len];
                        yyval._$ = {
                            first_line: lstack[lstack.length - (len || 1)].first_line,
                            last_line: lstack[lstack.length - 1].last_line,
                            first_column: lstack[lstack.length - (len || 1)].first_column,
                            last_column: lstack[lstack.length - 1].last_column
                        };
                        if (ranges) {
                            yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                        }
                        r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));
                        if (typeof r !== 'undefined') {
                            return r;
                        }
                        if (len) {
                            stack = stack.slice(0, -1 * len * 2);
                            vstack = vstack.slice(0, -1 * len);
                            lstack = lstack.slice(0, -1 * len);
                        }
                        stack.push(this.productions_[action[1]][0]);
                        vstack.push(yyval.$);
                        lstack.push(yyval._$);
                        newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                        stack.push(newState);
                        break;
                    case 3:
                        return true;
                }
            }
            return true;
        } };
    /* generated by jison-lex 0.3.4 */
    var lexer = function () {
        var lexer = {

            EOF: 1,

            parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                    this.yy.parser.parseError(str, hash);
                } else {
                    throw new Error(str);
                }
            },

            // resets the lexer, sets new input
            setInput: function setInput(input, yy) {
                this.yy = yy || this.yy || {};
                this._input = input;
                this._more = this._backtrack = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                    first_line: 1,
                    first_column: 0,
                    last_line: 1,
                    last_column: 0
                };
                if (this.options.ranges) {
                    this.yylloc.range = [0, 0];
                }
                this.offset = 0;
                return this;
            },

            // consumes and returns one char from the input
            input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno++;
                    this.yylloc.last_line++;
                } else {
                    this.yylloc.last_column++;
                }
                if (this.options.ranges) {
                    this.yylloc.range[1]++;
                }

                this._input = this._input.slice(1);
                return ch;
            },

            // unshifts one char (or a string) into the input
            unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);

                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len);
                //this.yyleng -= len;
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);

                if (lines.length - 1) {
                    this.yylineno -= lines.length - 1;
                }
                var r = this.yylloc.range;

                this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };

                if (this.options.ranges) {
                    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                this.yyleng = this.yytext.length;
                return this;
            },

            // When called from action, caches matched text and appends it on next action
            more: function more() {
                this._more = true;
                return this;
            },

            // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
            reject: function reject() {
                if (this.options.backtrack_lexer) {
                    this._backtrack = true;
                } else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
                return this;
            },

            // retain first n characters of the match
            less: function less(n) {
                this.unput(this.match.slice(n));
            },

            // displays already matched input, i.e. for error messages
            pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
            },

            // displays upcoming input, i.e. for error messages
            upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) {
                    next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
            },

            // displays the character position where the lexing error occurred, i.e. for error messages
            showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
            },

            // test the lexed token: return FALSE when not a match, otherwise return token
            test_match: function test_match(match, indexed_rule) {
                var token, lines, backup;

                if (this.options.backtrack_lexer) {
                    // save context
                    backup = {
                        yylineno: this.yylineno,
                        yylloc: {
                            first_line: this.yylloc.first_line,
                            last_line: this.last_line,
                            first_column: this.yylloc.first_column,
                            last_column: this.yylloc.last_column
                        },
                        yytext: this.yytext,
                        match: this.match,
                        matches: this.matches,
                        matched: this.matched,
                        yyleng: this.yyleng,
                        offset: this.offset,
                        _more: this._more,
                        _input: this._input,
                        yy: this.yy,
                        conditionStack: this.conditionStack.slice(0),
                        done: this.done
                    };
                    if (this.options.ranges) {
                        backup.yylloc.range = this.yylloc.range.slice(0);
                    }
                }

                lines = match[0].match(/(?:\r\n?|\n).*/g);
                if (lines) {
                    this.yylineno += lines.length;
                }
                this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                };
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                }
                this._more = false;
                this._backtrack = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                if (this.done && this._input) {
                    this.done = false;
                }
                if (token) {
                    return token;
                } else if (this._backtrack) {
                    // recover context
                    for (var k in backup) {
                        this[k] = backup[k];
                    }
                    return false; // rule action called reject() implying the next rule should be tested instead.
                }
                return false;
            },

            // return next match in input
            next: function next() {
                if (this.done) {
                    return this.EOF;
                }
                if (!this._input) {
                    this.done = true;
                }

                var token, match, tempMatch, index;
                if (!this._more) {
                    this.yytext = '';
                    this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                    tempMatch = this._input.match(this.rules[rules[i]]);
                    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                        match = tempMatch;
                        index = i;
                        if (this.options.backtrack_lexer) {
                            token = this.test_match(tempMatch, rules[i]);
                            if (token !== false) {
                                return token;
                            } else if (this._backtrack) {
                                match = false;
                                continue; // rule action called reject() implying a rule MISmatch.
                            } else {
                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                return false;
                            }
                        } else if (!this.options.flex) {
                            break;
                        }
                    }
                }
                if (match) {
                    token = this.test_match(match, rules[index]);
                    if (token !== false) {
                        return token;
                    }
                    // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                    return false;
                }
                if (this._input === "") {
                    return this.EOF;
                } else {
                    return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    });
                }
            },

            // return next match that has a token
            lex: function lex() {
                var r = this.next();
                if (r) {
                    return r;
                } else {
                    return this.lex();
                }
            },

            // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
            begin: function begin(condition) {
                this.conditionStack.push(condition);
            },

            // pop the previously active lexer condition state off the condition stack
            popState: function popState() {
                var n = this.conditionStack.length - 1;
                if (n > 0) {
                    return this.conditionStack.pop();
                } else {
                    return this.conditionStack[0];
                }
            },

            // produce the lexer rule set which is active for the currently active lexer condition state
            _currentRules: function _currentRules() {
                if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                } else {
                    return this.conditions["INITIAL"].rules;
                }
            },

            // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
            topState: function topState(n) {
                n = this.conditionStack.length - 1 - Math.abs(n || 0);
                if (n >= 0) {
                    return this.conditionStack[n];
                } else {
                    return "INITIAL";
                }
            },

            // alias for begin(condition)
            pushState: function pushState(condition) {
                this.begin(condition);
            },

            // return the number of states currently on the stack
            stateStackSize: function stateStackSize() {
                return this.conditionStack.length;
            },
            options: {},
            performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
                var YYSTATE = YY_START;
                switch ($avoiding_name_collisions) {
                    case 0:
                        /* skip whitespace */
                        break;
                    case 1:
                        return 47;
                        break;
                    case 2:
                        return 45;
                        break;
                    case 3:
                        return 46;
                        break;
                    case 4:
                        return 44;
                        break;
                    case 5:
                        return 29;
                        break;
                    case 6:
                        return 43;
                        break;
                    case 7:
                        return 43;
                        break;
                    case 8:
                        return 34;
                        break;
                    case 9:
                        return 15;
                        break;
                    case 10:
                        return 14;
                        break;
                    case 11:
                        return 16;
                        break;
                    case 12:
                        return 17;
                        break;
                    case 13:
                        return 19;
                        break;
                    case 14:
                        return 20;
                        break;
                    case 15:
                        return 25;
                        break;
                    case 16:
                        return 26;
                        break;
                    case 17:
                        return 21;
                        break;
                    case 18:
                        return 22;
                        break;
                    case 19:
                        return 23;
                        break;
                    case 20:
                        return 24;
                        break;
                    case 21:
                        return 13;
                        break;
                    case 22:
                        return 27;
                        break;
                    case 23:
                        return 28;
                        break;
                    case 24:
                        return 18;
                        break;
                    case 25:
                        return 38;
                        break;
                    case 26:
                        return 39;
                        break;
                    case 27:
                        return 48;
                        break;
                    case 28:
                        return 49;
                        break;
                    case 29:
                        return 9;
                        break;
                    case 30:
                        return 10;
                        break;
                    case 31:
                        return 33;
                        break;
                    case 32:
                        return 31;
                        break;
                    case 33:
                        return 'INVALID';
                        break;
                    case 34:
                        return 5;
                        break;
                }
            },
            rules: [/^(?:\s+)/, /^(?:null\b)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:[0-9]+(\.[0-9]+)?\b)/, /^(?:[a-zA-Z_][a-zA-Z0-9_]*)/, /^(?:'[^\']*')/, /^(?:"[^\"]*")/, /^(?:=>)/, /^(?:\+)/, /^(?:-)/, /^(?:\*)/, /^(?:\/)/, /^(?:&&)/, /^(?:\|\|)/, /^(?:!=)/, /^(?:==)/, /^(?:<=)/, /^(?:<)/, /^(?:>=)/, /^(?:>)/, /^(?:!)/, /^(?:\?)/, /^(?::)/, /^(?:%)/, /^(?:\[)/, /^(?:\])/, /^(?:\{)/, /^(?:\})/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:\.)/, /^(?:.)/, /^(?:$)/],
            conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "inclusive": true } }
        };
        return lexer;
    }();
    parser.lexer = lexer;
    function Parser() {
        this.yy = {};
    }
    Parser.prototype = parser;parser.Parser = Parser;
    return new Parser();
}(); /**
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

/** @fileoverview @suppress {checkTypes, suspiciousCode, uselessCode} */

var bindParser = exports.bindParser = parser;

},{"./bind-expr-defines":2}],4:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BindExpression = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

var _bindExprDefines = require('./bind-expr-defines');

var _log = require('../../../src/log');

var _object = require('../../../src/utils/object');

var _mode = require('../../../src/mode');

var _types = require('../../../src/types');

var _bindExprImpl = require('./bind-expr-impl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'amp-bind';

/**
 * Maximum number of nodes in an expression AST.
 * @const @private {number}
 */
var MAX_AST_SIZE = 100;

/** @const @private {string} */
var CUSTOM_FUNCTIONS = 'custom-functions';

/**
 * Map of object type to function name to whitelisted function.
 * @private {!Object<string, !Object<string, Function>>}
 */
var FUNCTION_WHITELIST = void 0;

/**
 * @return {!Object<string, !Object<string, Function>>}
 * @private
 */
function generateFunctionWhitelist() {
  /**
   * Deprecated. Static, not-in-place variant of Array#splice.
   * @param {!Array} array
   * @param {number=} unusedStart
   * @param {number=} unusedDeleteCount
   * @param {...?} unusedItems
   * @return {!Array}
   */
  function splice(array, unusedStart, unusedDeleteCount, unusedItems) {
    if (!(0, _types.isArray)(array)) {
      throw new Error('splice: ' + array + ' is not an array.');
    }
    var copy = Array.prototype.slice.call(array);
    var args = Array.prototype.slice.call(arguments, 1);
    Array.prototype.splice.apply(copy, args);
    return copy;
  }

  /**
   * Needs to be wrapped to avoid a duplicate name conflict with the deprecated
   * splice function above.
   * @return {!Function}
   */
  function instanceSplice() {
    /**
     * @param {number=} unusedStart
     * @param {number=} unusedDeleteCount
     * @param {...?} unusedItems
     * @return {!Array}
     * @this {!Array}
     */
    function splice(unusedStart, unusedDeleteCount, unusedItems) {
      var copy = Array.prototype.slice.call(this);
      Array.prototype.splice.apply(copy, arguments);
      return copy;
    }
    return splice;
  }

  /**
   * Deprecated. Static, not-in-place variant of Array#sort.
   * @param {!Array} array
   * @return {!Array}
   */
  function sort(array) {
    if (!(0, _types.isArray)(array)) {
      throw new Error('sort: ' + array + ' is not an array.');
    }
    var copy = Array.prototype.slice.call(array);
    Array.prototype.sort.call(copy);
    return copy;
  }

  /**
   * Needs to be wrapped to avoid a duplicate name conflict with the deprecated
   * sort function above.
   * @return {!Function}
   */
  function instanceSort() {
    /**
     * @param {!Function} compareFunction
     * @return {!Array}
     * @this {!Array}
     */
    function sort(compareFunction) {
      var copy = Array.prototype.slice.call(this);
      Array.prototype.sort.call(copy, compareFunction);
      return copy;
    }
    return sort;
  }

  /**
   * Polyfills Object.values for IE.
   * @param {!Object} object
   * @return {!Array}
   * @see https://github.com/es-shims/Object.values
   */
  function values(object) {
    var v = [];
    for (var key in object) {
      if ((0, _object.hasOwn)(object, key)) {
        v.push(object[key]);
      }
    }
    return v;
  }

  // Prototype functions.
  var whitelist = (0, _object.dict)({
    '[object Array]': {
      // TODO(choumx): Polyfill Array#find and Array#findIndex for IE.
      'concat': Array.prototype.concat,
      'filter': Array.prototype.filter,
      'indexOf': Array.prototype.indexOf,
      'join': Array.prototype.join,
      'lastIndexOf': Array.prototype.lastIndexOf,
      'map': Array.prototype.map,
      'reduce': Array.prototype.reduce,
      'slice': Array.prototype.slice,
      'some': Array.prototype.some,
      'sort': instanceSort(),
      'splice': instanceSplice(),
      'includes': Array.prototype.includes
    },
    '[object Number]': {
      'toExponential': Number.prototype.toExponential,
      'toFixed': Number.prototype.toFixed,
      'toPrecision': Number.prototype.toPrecision,
      'toString': Number.prototype.toString
    },
    '[object String]': {
      'charAt': String.prototype.charAt,
      'charCodeAt': String.prototype.charCodeAt,
      'concat': String.prototype.concat,
      'indexOf': String.prototype.indexOf,
      'lastIndexOf': String.prototype.lastIndexOf,
      'slice': String.prototype.slice,
      'split': String.prototype.split,
      'substr': String.prototype.substr,
      'substring': String.prototype.substring,
      'toLowerCase': String.prototype.toLowerCase,
      'toUpperCase': String.prototype.toUpperCase
    }
  });

  // Un-namespaced static functions.
  whitelist[CUSTOM_FUNCTIONS] = {
    'encodeURI': encodeURI,
    'encodeURIComponent': encodeURIComponent,
    'abs': Math.abs,
    'ceil': Math.ceil,
    'floor': Math.floor,
    'max': Math.max,
    'min': Math.min,
    'random': Math.random,
    'round': Math.round,
    'sign': Math.sign,
    'keys': Object.keys // Object.values is polyfilled below.
  };

  // Creates a map of function name to the function itself.
  // This makes function lookups faster (compared to Array.indexOf).
  var out = (0, _object.map)();
  Object.keys(whitelist).forEach(function (type) {
    out[type] = (0, _object.map)();

    var functionsForType = whitelist[type];
    Object.keys(functionsForType).forEach(function (name) {
      var func = functionsForType[name];
      if (func) {
        (0, _log.dev)().assert(!func.name || name === func.name, 'Listed function name ' + ('"' + name + '" doesn\'t match name property "' + func.name + '".'));
        out[type][name] = func;
      } else {
        // This can happen if a browser doesn't support a built-in function.
        throw new Error('Unsupported function: ' + type + '.' + name);
      }
    });
  });

  // Custom functions (non-JS-built-ins) must be added manually as their names
  // will be minified at compile time.
  out[CUSTOM_FUNCTIONS]['copyAndSplice'] = splice; // Deprecated.
  out[CUSTOM_FUNCTIONS]['sort'] = sort; // Deprecated.
  out[CUSTOM_FUNCTIONS]['splice'] = splice; // Deprecated.
  out[CUSTOM_FUNCTIONS]['values'] = typeof Object.values == 'function' ? Object.values : values;

  return out;
}

/**
 * A single Bind expression.
 */

var BindExpression = exports.BindExpression = function () {
  /**
   * @param {string} expressionString
   * @param {!Object<string, !./bind-macro.BindMacro>} macros
   * @param {number=} opt_maxAstSize
   * @throws {Error} On malformed expressions.
   */
  function BindExpression(expressionString, macros, opt_maxAstSize) {
    _classCallCheck(this, BindExpression);

    if (!FUNCTION_WHITELIST) {
      FUNCTION_WHITELIST = generateFunctionWhitelist();
    }

    /** @const {string} */
    this.expressionString = expressionString;

    /** @private @const {!Object<string, !./bind-macro.BindMacro>} */
    this.macros_ = macros;

    /** @const @private {!./bind-expr-defines.AstNode} */
    this.ast_ = _bindExprImpl.bindParser.parse(this.expressionString);

    /** @const {number} */
    this.expressionSize = this.numberOfNodesInAst_(this.ast_);

    // Check if this expression string is too large (for performance).
    var maxSize = opt_maxAstSize || MAX_AST_SIZE;
    var skipConstraint = (0, _mode.getMode)().localDev && !(0, _mode.getMode)().test;
    if (this.expressionSize > maxSize && !skipConstraint) {
      throw new Error('Expression size (' + this.expressionSize + ') exceeds max ' + ('(' + maxSize + '). Please reduce number of operands.'));
    }
  }

  /**
   * Evaluates the expression given a scope.
   * @param {!Object} scope
   * @throws {Error} On illegal function invocation.
   * @return {BindExpressionResultDef}
   */


  _createClass(BindExpression, [{
    key: 'evaluate',
    value: function evaluate(scope) {
      return this.eval_(this.ast_, scope);
    }

    /**
     * @param {!./bind-expr-defines.AstNode} ast
     * @return {number}
     * @private
     */

  }, {
    key: 'numberOfNodesInAst_',
    value: function numberOfNodesInAst_(ast) {
      var _this = this;

      // Include the node count of any nested macros in the expression.
      if (this.isMacroInvocationNode_(ast)) {
        var macro = this.macros_[String(ast.value)];
        var nodes = macro.getExpressionSize();
        this.argumentsForInvocation_(ast).forEach(function (arg) {
          if (arg) {
            nodes += _this.numberOfNodesInAst_(arg) - 1;
          }
        });
        return nodes;
      } else {
        var _nodes = 1;
        if (ast.args) {
          ast.args.forEach(function (arg) {
            if (arg) {
              _nodes += _this.numberOfNodesInAst_(arg);
            }
          });
        }
        return _nodes;
      }
    }

    /**
     * @param {!./bind-expr-defines.AstNode} ast
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isMacroInvocationNode_',
    value: function isMacroInvocationNode_(ast) {
      var isInvocationWithNoCaller = ast.type === _bindExprDefines.AstNodeType.INVOCATION && !ast.args[0];
      if (isInvocationWithNoCaller) {
        var macroExistsWithValue = this.macros_[String(ast.value)] != null;
        return macroExistsWithValue;
      }
      return false;
    }

    /**
     * Given an INVOCATION node, returns an array containing its arguments.
     * Also unwraps its ARGS child, if it has one.
     * @param {!./bind-expr-defines.AstNode} ast
     * @return {!Array<./bind-expr-defines.AstNode>}
     * @private
     */

  }, {
    key: 'argumentsForInvocation_',
    value: function argumentsForInvocation_(ast) {
      // The INVOCATION node may or may not contain an ARGS child node.
      var argsNode = ast.args.length === 2 && ast.args[1].type === _bindExprDefines.AstNodeType.ARGS ? ast.args[1] : null;
      if (argsNode) {
        // An ARGS node can either have an empty array or an ARRAY child.
        var args = argsNode.args;

        if (args.length === 0) {
          return [];
        } else if (args.length === 1 && args[0].type === _bindExprDefines.AstNodeType.ARRAY) {
          // An ARRAY node contains an actual array.
          var arrayNode = args[0];
          return arrayNode.args || [];
        }
      }
      // Otherwise, just return the array of its non-ARGS arguments.
      return ast.args || [];
    }

    /**
     * Recursively evaluates and returns value of `node` and its children.
     * @param {./bind-expr-defines.AstNode} node
     * @param {!Object} scope
     * @throws {Error}
     * @return {BindExpressionResultDef}
     * @private
     */

  }, {
    key: 'eval_',
    value: function eval_(node, scope) {
      var _this2 = this;

      if (!node) {
        return null;
      }

      var type = node.type,
          args = node.args,
          value = node.value;

      // `value` should always exist for literals.

      if (type === _bindExprDefines.AstNodeType.LITERAL && value !== undefined) {
        return value;
      }

      switch (type) {
        case _bindExprDefines.AstNodeType.EXPRESSION:
          return this.eval_(args[0], scope);

        case _bindExprDefines.AstNodeType.INVOCATION:
          // Built-in functions and macros don't have a caller object.
          var isBuiltInOrMacro = args[0] === undefined;

          var caller = this.eval_(args[0], scope);
          var params = this.eval_(args[1], scope);
          var method = String(value);

          var validFunction = void 0;
          var unsupportedError = void 0;

          if (isBuiltInOrMacro) {
            var macro = this.macros_[method];
            if (macro) {
              validFunction = function validFunction() {
                return macro.evaluate(scope, Array.prototype.slice.call(arguments));
              };
            } else {
              validFunction = FUNCTION_WHITELIST[CUSTOM_FUNCTIONS][method];
            }
            if (!validFunction) {
              unsupportedError = method + ' is not a supported function.';
            }
          } else {
            if (caller === null) {
              (0, _log.user)().warn(TAG, 'Cannot invoke method ' + method + ' on null; ' + 'returning null.');
              return null;
            }
            var callerType = Object.prototype.toString.call(caller);
            var whitelist = FUNCTION_WHITELIST[callerType];
            if (whitelist) {
              var f = caller[method];
              if (f && f === whitelist[method]) {
                validFunction = f;
              } else if (this.isCustomInstanceFunction_(method)) {
                validFunction = whitelist[method];
              }
            }
            if (!validFunction) {
              unsupportedError = callerType + '.' + method + ' is not a supported function.';
            }
          }

          if (validFunction) {
            if (Array.isArray(params)) {
              if (this.containsInvalidArgument_(method, params)) {
                throw new Error('Unexpected argument type in ' + method + '().');
              }
              return validFunction.apply(caller, params);
            }
          }

          throw new Error(unsupportedError);

        case _bindExprDefines.AstNodeType.MEMBER_ACCESS:
          var target = this.eval_(args[0], scope);
          var member = this.eval_(args[1], scope);

          if (target === null || member === null) {
            return null;
          }
          var targetType = typeof target === 'undefined' ? 'undefined' : _typeof(target);
          if (targetType !== 'string' && targetType !== 'object') {
            return null;
          }
          var memberType = typeof member === 'undefined' ? 'undefined' : _typeof(member);
          if (memberType !== 'string' && memberType !== 'number') {
            return null;
          }
          // Ignore Closure's type constraint for `hasOwnProperty`.
          if (Object.prototype.hasOwnProperty.call(
          /** @type {Object} */target, member)) {
            return target[member];
          }
          return null;

        case _bindExprDefines.AstNodeType.MEMBER:
          return value || this.eval_(args[0], scope);

        case _bindExprDefines.AstNodeType.VARIABLE:
          var variable = value;
          if (Object.prototype.hasOwnProperty.call(scope, variable)) {
            return scope[variable];
          }
          return null;

        case _bindExprDefines.AstNodeType.ARGS:
        case _bindExprDefines.AstNodeType.ARRAY_LITERAL:
          return args.length > 0 ? this.eval_(args[0], scope) : [];

        case _bindExprDefines.AstNodeType.ARRAY:
          return args.map(function (element) {
            return _this2.eval_(element, scope);
          });

        case _bindExprDefines.AstNodeType.OBJECT_LITERAL:
          return args.length > 0 ? this.eval_(args[0], scope) : (0, _object.map)();

        case _bindExprDefines.AstNodeType.OBJECT:
          var object = (0, _object.map)();
          args.forEach(function (keyValue) {
            var _eval_ = _this2.eval_(keyValue, scope),
                k = _eval_.k,
                v = _eval_.v;

            object[k] = v;
          });
          return object;

        case _bindExprDefines.AstNodeType.KEY_VALUE:
          return {
            k: this.eval_(args[0], scope),
            v: this.eval_(args[1], scope)
          };

        case _bindExprDefines.AstNodeType.NOT:
          return !this.eval_(args[0], scope);

        case _bindExprDefines.AstNodeType.UNARY_MINUS:
          return -Number(this.eval_(args[0], scope));

        case _bindExprDefines.AstNodeType.UNARY_PLUS:
          return +Number(this.eval_(args[0], scope));

        case _bindExprDefines.AstNodeType.PLUS:
          return this.eval_(args[0], scope) + this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.MINUS:
          return Number(this.eval_(args[0], scope)) - Number(this.eval_(args[1], scope));

        case _bindExprDefines.AstNodeType.MULTIPLY:
          return Number(this.eval_(args[0], scope)) * Number(this.eval_(args[1], scope));

        case _bindExprDefines.AstNodeType.DIVIDE:
          return Number(this.eval_(args[0], scope)) / Number(this.eval_(args[1], scope));

        case _bindExprDefines.AstNodeType.MODULO:
          return Number(this.eval_(args[0], scope)) % Number(this.eval_(args[1], scope));

        case _bindExprDefines.AstNodeType.LOGICAL_AND:
          return this.eval_(args[0], scope) && this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.LOGICAL_OR:
          return this.eval_(args[0], scope) || this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.LESS_OR_EQUAL:
          return this.eval_(args[0], scope) <= this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.LESS:
          return this.eval_(args[0], scope) < this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.GREATER_OR_EQUAL:
          return this.eval_(args[0], scope) >= this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.GREATER:
          return this.eval_(args[0], scope) > this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.NOT_EQUAL:
          return this.eval_(args[0], scope) != this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.EQUAL:
          return this.eval_(args[0], scope) == this.eval_(args[1], scope);

        case _bindExprDefines.AstNodeType.TERNARY:
          return this.eval_(args[0], scope) ? this.eval_(args[1], scope) : this.eval_(args[2], scope);

        case _bindExprDefines.AstNodeType.ARROW_FUNCTION:
          var functionScope = (0, _object.map)(scope);
          return function () {
            for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
              values[_key] = arguments[_key];
            }

            // Support parameters in arrow functions by forwarding their values
            // into the function's scope. For example, in this function call:
            //
            //     const f = (x, y) => x + y;
            //     f(2, 7);
            //
            // `names` == ['x', 'y'] and `values` == [2, 7], so we include
            // {x: 2, y: 7} in the scope when evaluating `x + y`.

            var names = _this2.eval_(args[0], scope);
            if (names) {
              names.forEach(function (name, i) {
                functionScope[name] = values[i];
              });
            }
            return _this2.eval_(args[1], functionScope);
          };

        default:
          throw new Error('Unexpected AstNodeType: ' + type + '.');
      }
    }

    /**
     * Returns true if `method` is a non-standard instance function.
     * We alter certain functions e.g. Array.sort to modify and return a copy
     * instead of operating in-place.
     * @param {string} method
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isCustomInstanceFunction_',
    value: function isCustomInstanceFunction_(method) {
      return method === 'sort' || method === 'splice';
    }

    /**
     * @param {string} method
     * @param {!Array} params
     * @return {boolean}
     * @private
     */

  }, {
    key: 'containsInvalidArgument_',
    value: function containsInvalidArgument_(method, params) {
      // Don't allow objects as parameters except for certain functions.
      if (method == 'keys' || method == 'values' || method == 'splice') {
        return false;
      }
      return this.containsObject_(params);
    }

    /**
     * Returns true if input array contains a plain object.
     * @param {!Array} array
     * @return {boolean}
     * @private
     */

  }, {
    key: 'containsObject_',
    value: function containsObject_(array) {
      for (var i = 0; i < array.length; i++) {
        if ((0, _types.isObject)(array[i])) {
          return true;
        }
      }
      return false;
    }
  }]);

  return BindExpression;
}();

},{"../../../src/log":9,"../../../src/mode":11,"../../../src/types":17,"../../../src/utils/object":21,"./bind-expr-defines":2,"./bind-expr-impl":3}],5:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BindMacro = undefined;

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

var _bindExpression = require('./bind-expression');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A single parsed Bind macro.
 */
var BindMacro = exports.BindMacro = function () {
  /**
   * @param {!BindMacroDef} data
   * @param {!Object<string, !BindMacro>} referableMacros
   */
  function BindMacro(data, referableMacros) {
    _classCallCheck(this, BindMacro);

    /** @const @private {!Array<string>} */
    this.argumentNames_ = data.argumentNames || [];

    /** @const @private {!BindExpression} */
    this.expression_ = new _bindExpression.BindExpression(data.expressionString, referableMacros);
  }

  /**
   * @param {!Object} state
   * @param {!Array} args
   * @throws {Error} On illegal function invocation.
   * @return {BindExpressionResultDef}
   */


  _createClass(BindMacro, [{
    key: 'evaluate',
    value: function evaluate(state, args) {
      var scope = Object.assign({}, state);
      for (var i = 0; i < this.argumentNames_.length; i++) {
        scope[this.argumentNames_[i]] = args[i];
      }
      return this.expression_.evaluate(scope);
    }

    /**
     * @return {number}
     */

  }, {
    key: 'getExpressionSize',
    value: function getExpressionSize() {
      return this.expression_.expressionSize;
    }
  }]);

  return BindMacro;
}();

},{"./bind-expression":4}],6:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BindValidator = undefined;

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

var _object = require('../../../src/utils/object');

var _srcset = require('../../../src/srcset');

var _string = require('../../../src/string');

var _log = require('../../../src/log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAG = 'amp-bind';

/**
 * @typedef {{
 *   allowedProtocols: (!Object<string,boolean>|undefined),
 *   alternativeName: (string|undefined),
 * }}
 */
var PropertyRulesDef = void 0;

/**
 * Property rules that apply to any and all tags.
 * @private {Object<string, ?PropertyRulesDef>}
 */
var GLOBAL_PROPERTY_RULES = {
  'class': {
    blacklistedValueRegex: '(^|\\W)i-amphtml-'
  },
  'hidden': null,
  'text': null
};

/**
 * Property rules that apply to all AMP elements.
 * @private {Object<string, ?PropertyRulesDef>}
 */
var AMP_PROPERTY_RULES = {
  'width': null,
  'height': null
};

/**
 * Maps tag names to property names to PropertyRulesDef.
 * If `ELEMENT_RULES[tag][property]` is null, then all values are valid
 * for that property in that tag.
 * @private {Object<string, Object<string, ?PropertyRulesDef>>}}
 */
var ELEMENT_RULES = createElementRules_();

/**
 * Map whose keys comprise all properties that contain URLs.
 * @private {Object<string, boolean>}
 */
var URL_PROPERTIES = {
  'src': true,
  'srcset': true,
  'href': true,
  'xlink:href': true
};

/**
 * BindValidator performs runtime validation of Bind expression results.
 *
 * For performance reasons, the validation rules enforced are a subset
 * of the AMP validator's, selected with a focus on security and UX.
 */

var BindValidator = exports.BindValidator = function () {
  function BindValidator() {
    _classCallCheck(this, BindValidator);
  }

  _createClass(BindValidator, [{
    key: 'canBind',

    /**
     * Returns true if (tag, property) binding is allowed.
     * Otherwise, returns false.
     * NOTE: `tag` and `property` are case-sensitive.
     * @param {string} tag
     * @param {string} property
     * @return {boolean}
     */
    value: function canBind(tag, property) {
      return this.rulesForTagAndProperty_(tag, property) !== undefined;
    }

    /**
     * Returns true if `value` is a valid result for a (tag, property) binding.
     * Otherwise, returns false.
     * @param {string} tag
     * @param {string} property
     * @param {?string} value
     * @return {boolean}
     */

  }, {
    key: 'isResultValid',
    value: function isResultValid(tag, property, value) {
      var rules = this.rulesForTagAndProperty_(tag, property);

      // `alternativeName` is a reference to another property's rules.
      if (rules && rules.alternativeName) {
        rules = this.rulesForTagAndProperty_(tag, rules.alternativeName);
      }

      // If binding to (tag, property) is not allowed, return false.
      if (rules === undefined) {
        return false;
      }

      // If binding is allowed but have no specific rules, return true.
      if (rules === null) {
        return true;
      }

      // Validate URL(s) if applicable.
      if (value && (0, _object.ownProperty)(URL_PROPERTIES, property)) {
        var urls = void 0;
        if (property === 'srcset') {
          var srcset = void 0;
          try {
            srcset = (0, _srcset.parseSrcset)(value);
          } catch (e) {
            (0, _log.user)().error(TAG, 'Failed to parse srcset: ', e);
            return false;
          }
          urls = srcset.getUrls();
        } else {
          urls = [value];
        }

        for (var i = 0; i < urls.length; i++) {
          if (!this.isUrlValid_(urls[i], rules)) {
            return false;
          }
        }
      }

      // @see validator/engine/validator.ParsedTagSpec.validateAttributes()
      var _rules = rules,
          blacklistedValueRegex = _rules.blacklistedValueRegex;

      if (value && blacklistedValueRegex) {
        var re = new RegExp(blacklistedValueRegex, 'i');
        if (re.test(value)) {
          return false;
        }
      }

      return true;
    }

    /**
     * Returns true if a url's value is valid within a property rules spec.
     * @param {string} url
     * @param {!PropertyRulesDef} rules
     * @return {boolean}
     * @private
     */

  }, {
    key: 'isUrlValid_',
    value: function isUrlValid_(url, rules) {
      // @see validator/engine/validator.ParsedUrlSpec.validateUrlAndProtocol()
      var allowedProtocols = rules.allowedProtocols;

      if (allowedProtocols && url) {
        var re = /^([^:\/?#.]+):[\s\S]*$/;
        var match = re.exec(url);
        if (match !== null) {
          var protocol = match[1].toLowerCase().trim();
          // hasOwnProperty() needed since nested objects are not prototype-less.
          if (!(0, _object.hasOwn)(allowedProtocols, protocol)) {
            return false;
          }
        }
      }

      return true;
    }

    /**
     * Returns the property rules object for (tag, property), if it exists.
     * Returns null if binding is allowed without constraints.
     * Returns undefined if binding is not allowed.
     * @param {string} tag
     * @param {string} property
     * @return {(?PropertyRulesDef|undefined)}
     * @private
     */

  }, {
    key: 'rulesForTagAndProperty_',
    value: function rulesForTagAndProperty_(tag, property) {
      // Allow binding to all ARIA attributes.
      if ((0, _string.startsWith)(property, 'aria-')) {
        return null;
      }
      var globalRules = (0, _object.ownProperty)(GLOBAL_PROPERTY_RULES, property);
      if (globalRules !== undefined) {
        return (/** @type {PropertyRulesDef} */globalRules
        );
      }
      var ampPropertyRules = (0, _object.ownProperty)(AMP_PROPERTY_RULES, property);
      if ((0, _string.startsWith)(tag, 'AMP-') && ampPropertyRules !== undefined) {
        return (/** @type {PropertyRulesDef} */ampPropertyRules
        );
      }
      var tagRules = (0, _object.ownProperty)(ELEMENT_RULES, tag);
      if (tagRules) {
        return tagRules[property];
      }
      return undefined;
    }
  }]);

  return BindValidator;
}();

/**
 * @return {Object<string, Object<string, ?PropertyRulesDef>>}}
 * @private
 */


function createElementRules_() {
  // Initialize `rules` with tag-specific constraints.
  var rules = {
    'AMP-BRIGHTCOVE': {
      'data-account': null,
      'data-embed': null,
      'data-player': null,
      'data-player-id': null,
      'data-playlist-id': null,
      'data-video-id': null
    },
    'AMP-CAROUSEL': {
      'slide': null
    },
    'AMP-GOOGLE-DOCUMENT-EMBED': {
      'src': null,
      'title': null
    },
    'AMP-IFRAME': {
      'src': null
    },
    'AMP-IMG': {
      'alt': null,
      'attribution': null,
      'src': {
        'allowedProtocols': {
          'data': true,
          'http': true,
          'https': true
        }
      },
      'srcset': {
        'alternativeName': 'src'
      }
    },
    'AMP-LIGHTBOX': {
      'open': null
    },
    'AMP-LIST': {
      'src': {
        'allowedProtocols': {
          'https': true
        }
      },
      'state': null
    },
    'AMP-SELECTOR': {
      'disabled': null,
      'selected': null
    },
    'AMP-STATE': {
      'src': {
        'allowedProtocols': {
          'https': true
        }
      }
    },
    'AMP-VIDEO': {
      'alt': null,
      'attribution': null,
      'controls': null,
      'loop': null,
      'poster': null,
      'preload': null,
      'src': {
        'allowedProtocols': {
          'https': true
        }
      }
    },
    'AMP-YOUTUBE': {
      'data-videoid': null
    },
    'A': {
      'href': {
        'allowedProtocols': {
          'ftp': true,
          'http': true,
          'https': true,
          'mailto': true,
          'fb-messenger': true,
          'intent': true,
          'skype': true,
          'sms': true,
          'snapchat': true,
          'tel': true,
          'tg': true,
          'threema': true,
          'twitter': true,
          'viber': true,
          'whatsapp': true
        }
      }
    },
    'BUTTON': {
      'disabled': null,
      'type': null,
      'value': null
    },
    'FIELDSET': {
      'disabled': null
    },
    'IMAGE': {
      'xlink:href': {
        'allowedProtocols': {
          'http': true,
          'https': true
        }
      }
    },
    'INPUT': {
      'accept': null,
      'accesskey': null,
      'autocomplete': null,
      'checked': null,
      'disabled': null,
      'height': null,
      'inputmode': null,
      'max': null,
      'maxlength': null,
      'min': null,
      'minlength': null,
      'multiple': null,
      'pattern': null,
      'placeholder': null,
      'readonly': null,
      'required': null,
      'selectiondirection': null,
      'size': null,
      'spellcheck': null,
      'step': null,
      'type': {
        blacklistedValueRegex: '(^|\\s)(button|image|)(\\s|$)'
      },
      'value': null,
      'width': null
    },
    'OPTION': {
      'disabled': null,
      'label': null,
      'selected': null,
      'value': null
    },
    'OPTGROUP': {
      'disabled': null,
      'label': null
    },
    'SELECT': {
      'autofocus': null,
      'disabled': null,
      'multiple': null,
      'required': null,
      'size': null
    },
    'SOURCE': {
      'src': {
        'allowedProtocols': {
          'https': true
        }
      },
      'type': null
    },
    'TRACK': {
      'label': null,
      'src': {
        'allowedProtocols': {
          'https': true
        }
      },
      'srclang': null
    },
    'TEXTAREA': {
      'autocomplete': null,
      'autofocus': null,
      'cols': null,
      'disabled': null,
      'maxlength': null,
      'minlength': null,
      'placeholder': null,
      'readonly': null,
      'required': null,
      'rows': null,
      'selectiondirection': null,
      'selectionend': null,
      'selectionstart': null,
      'spellcheck': null,
      'wrap': null
    }
  };
  return rules;
}

},{"../../../src/log":9,"../../../src/srcset":15,"../../../src/string":16,"../../../src/utils/object":21}],7:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{"./mode":11,"./mode-object":10,"./types":17}],10:[function(require,module,exports){
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

},{"./mode":11}],11:[function(require,module,exports){
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

},{"./url-parse-query-string":18}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Srcset = undefined;

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

exports.srcsetFromElement = srcsetFromElement;
exports.srcsetFromSrc = srcsetFromSrc;
exports.parseSrcset = parseSrcset;

var _log = require('./log');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A single source within a srcset. Only one: width or DPR can be specified at
 * a time.
 * @typedef {{
 *   url: string,
 *   width: (number|undefined),
 *   dpr: (number|undefined)
 * }}
 */
var SrcsetSourceDef = void 0;

/**
 * General grammar: (URL [NUM[w|x]],)*
 * Example 1: "image1.png 100w, image2.png 50w"
 * Example 2: "image1.png 2x, image2.png"
 * Example 3: "image1,100w.png 100w, image2.png 50w"
 */
var srcsetRegex = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;

/**
 * Extracts `srcset` and fallbacks to `src` if not available.
 * @param {!Element} element
 * @return {!Srcset}
 */
function srcsetFromElement(element) {
  var srcsetAttr = element.getAttribute('srcset');
  if (srcsetAttr) {
    return parseSrcset(srcsetAttr);
  }
  // We can't push `src` via `parseSrcset` because URLs in `src` are not always
  // RFC compliant and can't be easily parsed as an `srcset`. For instance,
  // they sometimes contain space characters.
  var srcAttr = (0, _log.user)().assert(element.getAttribute('src'), 'Either non-empty "srcset" or "src" attribute must be specified: %s', element);
  return srcsetFromSrc(srcAttr);
}

/**
 * Creates a Srcset from a `src` attribute value.
 * @param {string} src
 * @return {!Srcset}
 */
function srcsetFromSrc(src) {
  return new Srcset([{ url: src, width: undefined, dpr: 1 }]);
}

/**
 * Parses the text representation of srcset into Srcset object.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes.
 * See http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset.
 * @param {string} s
 * @return {!Srcset}
 */
function parseSrcset(s) {
  var sources = [];
  var match = void 0;
  while (match = srcsetRegex.exec(s)) {
    var url = match[1];
    var width = void 0,
        dpr = void 0;
    if (match[2]) {
      var type = match[3].toLowerCase();
      if (type == 'w') {
        width = parseInt(match[2], 10);
      } else if (type == 'x') {
        dpr = parseFloat(match[2]);
      } else {
        continue;
      }
    } else {
      // If no "w" or "x" specified, we assume it's "1x".
      dpr = 1;
    }
    sources.push({ url: url, width: width, dpr: dpr });
  }
  return new Srcset(sources);
}

/**
 * A srcset object contains one or more sources.
 *
 * There are two types of sources: width-based and DPR-based. Only one type
 * of sources allowed to be specified within a single srcset. Depending on a
 * usecase, the components are free to choose any source that best corresponds
 * to the required rendering quality and network and CPU conditions. See
 * "select" method for details on how this selection is performed.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes
 */

var Srcset = exports.Srcset = function () {

  /**
   * @param {!Array<!SrcsetSourceDef>} sources
   */
  function Srcset(sources) {
    _classCallCheck(this, Srcset);

    (0, _log.user)().assert(sources.length > 0, 'Srcset must have at least one source');
    /** @private @const {!Array<!SrcsetSourceDef>} */
    this.sources_ = sources;

    // Only one type of source specified can be used - width or DPR.
    var hasWidth = false;
    var hasDpr = false;
    for (var i = 0; i < sources.length; i++) {
      var source = sources[i];
      hasWidth = hasWidth || !!source.width;
      hasDpr = hasDpr || !!source.dpr;
    }
    (0, _log.user)().assert(!!(hasWidth ^ hasDpr), 'Srcset must have width or dpr sources, but not both');

    // Source and assert duplicates.
    sources.sort(hasWidth ? sortByWidth : sortByDpr);

    /** @private @const {boolean} */
    this.widthBased_ = hasWidth;
  }

  /**
   * Performs selection for specified width and DPR. Here, width is the width
   * in screen pixels and DPR is the device-pixel-ratio or pixel density of
   * the device. Depending on the circumstances, such as low network conditions,
   * it's possible to manipulate the result of this method by passing a lower
   * DPR value.
   *
   * The source selection depends on whether this is width-based or DPR-based
   * srcset.
   *
   * In a width-based source, the source's width is the physical width of a
   * resource (e.g. an image). Depending on the provided DPR, this width is
   * converted to the screen pixels as following:
   *   pixelWidth = sourceWidth / DPR
   *
   * Then, the source closest to the requested "width" is selected using
   * the "pixelWidth". The slight preference is given to the bigger sources to
   * ensure the most optimal quality.
   *
   * In a DPR-based source, the source's DPR is used to return the source that
   * is closest to the requested DPR.
   *
   * Based on
   * http://www.w3.org/html/wg/drafts/html/master/semantics.html#attr-img-srcset.
   * @param {number} width
   * @param {number} dpr
   * @return {string}
   */


  _createClass(Srcset, [{
    key: 'select',
    value: function select(width, dpr) {
      (0, _log.dev)().assert(width, 'width=%s', width);
      (0, _log.dev)().assert(dpr, 'dpr=%s', dpr);
      var index = 0;
      if (this.widthBased_) {
        index = this.selectByWidth_(width * dpr);
      } else {
        index = this.selectByDpr_(dpr);
      }
      return this.sources_[index].url;
    }

    /**
     * @param {number} width
     * @return {number}
     * @private
     */

  }, {
    key: 'selectByWidth_',
    value: function selectByWidth_(width) {
      var sources = this.sources_;
      var minIndex = 0;
      var minScore = Infinity;
      var minWidth = Infinity;

      for (var i = 0; i < sources.length; i++) {
        var sWidth = sources[i].width;
        var score = Math.abs(sWidth - width);

        // Select the one that is closer with a slight preference toward larger
        // widths. If smaller size is closer, enforce minimum ratio to ensure
        // image isn't too distorted.
        if (score <= minScore * 1.1 || width / minWidth > 1.2) {
          minIndex = i;
          minScore = score;
          minWidth = sWidth;
        } else {
          break;
        }
      }
      return minIndex;
    }

    /**
     * @param {number} dpr
     * @return {number}
     * @private
     */

  }, {
    key: 'selectByDpr_',
    value: function selectByDpr_(dpr) {
      var sources = this.sources_;
      var minIndex = 0;
      var minScore = Infinity;

      for (var i = 0; i < sources.length; i++) {
        var score = Math.abs(sources[i].dpr - dpr);
        if (score <= minScore) {
          minIndex = i;
          minScore = score;
        } else {
          break;
        }
      }
      return minIndex;
    }

    /**
     * Returns all URLs in the srcset.
     * @return {!Array<string>}
     */

  }, {
    key: 'getUrls',
    value: function getUrls() {
      return this.sources_.map(function (s) {
        return s.url;
      });
    }

    /**
     * Reconstructs the string expression for this srcset.
     * @param {function(string):string=} opt_mapper
     * @return {string}
     */

  }, {
    key: 'stringify',
    value: function stringify(opt_mapper) {
      var res = [];
      var sources = this.sources_;
      for (var i = 0; i < sources.length; i++) {
        var source = sources[i];
        var src = source.url;
        if (opt_mapper) {
          src = opt_mapper(src);
        }
        if (this.widthBased_) {
          src += ' ' + source.width + 'w';
        } else {
          src += ' ' + source.dpr + 'x';
        }
        res.push(src);
      }
      return res.join(', ');
    }
  }]);

  return Srcset;
}();

/**
 * Sorts by width
 *
 * @param {number} s1
 * @param {number} s2
 * @return {number}
 */


function sortByWidth(s1, s2) {
  (0, _log.user)().assert(s1.width != s2.width, 'Duplicate width: %s', s1.width);
  return s1.width - s2.width;
}

/**
 * Sorts by dpr
 *
 * @param {!Object} s1
 * @param {!Object} s2
 * @return {number}
 */
function sortByDpr(s1, s2) {
  (0, _log.user)().assert(s1.dpr != s2.dpr, 'Duplicate dpr: %s', s1.dpr);
  return s1.dpr - s2.dpr;
}

},{"./log":9}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{"./url-try-decode-uri-component":19}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{"../types":17}],22:[function(require,module,exports){
var _arrayIncludes = require('../polyfills/array-includes');

var _mathSign = require('../polyfills/math-sign');

var _objectAssign = require('../polyfills/object-assign');

(0, _arrayIncludes.install)(self); /**
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
 * @fileoverview Directly imported into web-worker.js entry point so polyfills
 *     can be used in top-level scope in module dependencies.
 */

(0, _objectAssign.install)(self);
(0, _mathSign.install)(self);

},{"../polyfills/array-includes":12,"../polyfills/math-sign":13,"../polyfills/object-assign":14}],23:[function(require,module,exports){
require('./web-worker-polyfills');

var _bindEvaluator = require('../../extensions/amp-bind/0.1/bind-evaluator');

var _exponentialBackoff = require('../exponential-backoff');

var _log = require('../log');

var _config = require('../config');

(0, _log.initLogConstructor)();

/**
 * Exponential backoff for error reports to avoid any given
 * worker from generating a very large number of errors.
 * @const {function(function()): number}
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

/**
 * @fileoverview Web worker entry point. Currently only used by a single
 *   extension (amp-bind), so dependencies are directly imported.
 *   Eventually, each extension that uses this worker will bundle its own
 *   "lib" JS files and loaded at runtime via `importScripts()`.
 */

var backoff_ = (0, _exponentialBackoff.exponentialBackoff)(1.5);

/**
 * @param {!Event} event
 */
function errorHandler_(event) {
  backoff_(function () {
    return report_(event.reason);
  });
}

/**
 * Element `i` contains the evaluator for scope `i`.
 * @private {!Array<!BindEvaluator>}
 */
var evaluators_ = [];

// Install error reporting on the `self` global. Error requests contain a
// URL param "ww=1" that identifies the originating worker.
self.addEventListener('unhandledrejection', errorHandler_);
self.addEventListener('error', errorHandler_);

self.addEventListener('message', function (event) {
  var _event$data =
  /** @type {ToWorkerMessageDef} */event.data,
      method = _event$data.method,
      args = _event$data.args,
      id = _event$data.id,
      scope = _event$data.scope;


  var returnValue = void 0;

  if (!evaluators_[scope]) {
    evaluators_[scope] = new _bindEvaluator.BindEvaluator();
  }
  var evaluator = evaluators_[scope];

  switch (method) {
    case 'bind.addBindings':
      returnValue = evaluator.addBindings.apply(evaluator, args);
      break;
    case 'bind.removeBindingsWithExpressionStrings':
      var removeBindings = evaluator.removeBindingsWithExpressionStrings;
      returnValue = removeBindings.apply(evaluator, args);
      break;
    case 'bind.addMacros':
      returnValue = evaluator.addMacros.apply(evaluator, args);
      break;
    case 'bind.evaluateBindings':
      returnValue = evaluator.evaluateBindings.apply(evaluator, args);
      break;
    case 'bind.evaluateExpression':
      returnValue = evaluator.evaluateExpression.apply(evaluator, args);
      break;
    default:
      throw new Error('Unrecognized method: ' + method);
  }

  var message =
  /** @type {FromWorkerMessageDef} */{ method: method, returnValue: returnValue, id: id };
  // `message` may only contain values or objects handled by the
  // structured clone algorithm.
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
  self. /*OK*/postMessage(message);
});

/**
 * Report error to AMP's error reporting frontend.
 * @param {*} e
 */
function report_(e) {
  // Don't report local dev errors.
  if (_config.urls.localhostRegex.test(self.location.origin)) {
    return;
  }
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  var config = self.AMP_CONFIG || {};
  var url = _config.urls.errorReporting + '?' + 'ww=1' + // Tags request as coming from a worker.
  '&v=' + encodeURIComponent(config.v) + '&m=' + encodeURIComponent(e.message) + '&ca=' + (config.canary ? 1 : 0) + '&s=' + encodeURIComponent(e.stack || '');
  fetch(url, /** @type {!RequestInit} */{
    // We don't care about the response.
    mode: 'no-cors'
  }).catch(function (reason) {
    console. /*OK*/error(reason);
  });
}

},{"../../extensions/amp-bind/0.1/bind-evaluator":1,"../config":7,"../exponential-backoff":8,"../log":9,"./web-worker-polyfills":22}]},{},[23])
//# sourceMappingURL=ww.max.js.map
