import normalizeWheel from 'normalize-wheel';
import { getValueByPath } from 'element-ui/src/utils/util';
import { Checkbox, Radio, TableColumn } from 'element-ui';

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$1;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

// 判断是否是滚动容器
function isScroller(el) {
  var style = window.getComputedStyle(el, null);
  var scrollValues = ['auto', 'scroll'];
  return scrollValues.includes(style.overflow) || scrollValues.includes(style['overflow-y']);
}

// 获取父层滚动容器
function getParentScroller(el) {
  var parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroller(parent)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent || window;
}

// 获取容器滚动位置
function getScrollTop(el) {
  return el === window ? window.pageYOffset : el.scrollTop;
}

// 获取容器高度
function getOffsetHeight(el) {
  return el === window ? window.innerHeight : el.offsetHeight;
}

// 滚动到某个位置
function scrollToY(el, y) {
  if (el === window) {
    window.scroll(0, y);
  } else {
    el.scrollTop = y;
  }
}

// 是否为空 undefine or null
function isEmpty(val) {
  return typeof val === 'undefined' || val === null;
}
var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

// 设置滚轮速度（完全参考 element-ui > table > handleFixedMousewheel方法）
function setMousewheelSlow(scroller, slow) {
  function handler(event) {
    var data = normalizeWheel(event);
    if (Math.abs(data.spinY) > 0) {
      var currentScrollTop = scroller.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && scroller.scrollHeight - scroller.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      scroller.scrollTop += Math.ceil(data.pixelY / slow);
    }
  }
  var throttleHandler = throttle_1(handler, 0);
  scroller.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', throttleHandler, {
    passive: false
  });
  return function destory() {
    scroller.removeEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', throttleHandler);
  };
}
var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};

// 排序（来源：element-ui/table/util的orderBy方法)
var orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  // eslint-disable-next-line no-mixed-operators
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return getValueByPath(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? getValueByPath(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};
var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

// 表格body class名称
var TableBodyClassNames = ['.el-table__body-wrapper',
// 主表格容器
'.el-table__fixed-right .el-table__fixed-body-wrapper',
// 右固定表格容器
'.el-table__fixed .el-table__fixed-body-wrapper' // 左固定表格容器
];
var script$2 = {
  name: 'el-table-virtual-scroll',
  props: {
    // 总数据
    data: {
      type: Array,
      required: true
    },
    // 每一行的预估高度
    itemSize: {
      type: Number,
      "default": 60
    },
    // 指定滚动容器
    scrollBox: {
      type: String
    },
    // 顶部和底部缓冲区域，值越大显示表格的行数越多
    buffer: {
      type: Number,
      "default": 200
    },
    // key值，data数据中的唯一id
    keyProp: {
      type: String,
      "default": 'id'
    },
    // 滚动事件的节流时间
    throttleTime: {
      type: Number,
      "default": 16
    },
    // 是否获取表格行动态高度
    dynamic: {
      type: Boolean,
      "default": true
    },
    // 是否开启虚拟滚动
    virtualized: {
      type: Boolean,
      "default": true
    },
    // 表格行合并时，合并在一起的行返回相同的key值
    rowSpanKey: {
      type: Function
    },
    warn: {
      type: Boolean,
      "default": true
    },
    // 禁用虚拟滚动
    disabled: {
      type: Boolean,
      "default": false
    },
    // 支持自定义选中数据的排序规则，传入false则可保留列表的排序规则，默认是按照选中顺序排序
    selectionSort: {
      type: [Function, Boolean],
      "default": true
    },
    // 获取el-table组件，默认 virtual-scroll 组件的第一个子组件
    getElTable: {
      type: Function,
      "default": function _default() {
        return this.$children[0];
      }
    },
    keepScroll: {
      type: Boolean,
      "default": true
    }
  },
  provide: function provide() {
    return {
      virtualScroll: this
    };
  },
  data: function data() {
    return {
      sizes: {},
      // 尺寸映射（依赖响应式）
      start: 0,
      // 渲染列表开始索引
      end: undefined,
      // 渲染列表结束索引
      curRow: null,
      // 表格单选：选中的行
      oldSelection: [],
      // 表格多选：选中的行
      isExpanding: false,
      // 列是否正在展开
      columnVms: [],
      // virtual-column 组件实例
      isHideAppend: false,
      // 是否隐藏append
      scrollPosition: '',
      // x轴滚动位置（左、中、右）
      hasFixedRight: false,
      // 是否有固定右边的列
      listData: [] // 未筛选为data源数据，筛选后则为筛选后的数据
    };
  },
  computed: {
    // 计算出每个item（的key值）到滚动容器顶部的距离
    offsetMap: function offsetMap(_ref) {
      var keyProp = _ref.keyProp,
        itemSize = _ref.itemSize,
        sizes = _ref.sizes,
        listData = _ref.listData;
      if (!this.dynamic) return {};
      var res = {};
      var total = 0;
      for (var i = 0; i < listData.length; i++) {
        var key = listData[i][keyProp];
        if (typeof key === 'undefined') {
          this.warn && console.warn("data[".concat(i, "][").concat(keyProp, "] \u4E3A undefined\uFF0C\u8BF7\u786E\u4FDD keyProp \u5BF9\u5E94\u7684\u503C\u4E0D\u4E3Aundefined"));
        }
        res[key] = total;
        var curSize = sizes[key];
        var size = typeof curSize === 'number' ? curSize : itemSize;
        total += size;
      }
      return res;
    }
  },
  methods: {
    // 初始化数据
    initData: function initData() {
      var _this = this;
      this.destory(); // 销毁，防止多次调用
      // 可视范围内显示数据
      this.renderData = [];
      // 页面可视范围顶端、底部
      this.top = undefined;
      this.bottom = undefined;
      // 截取页面可视范围内显示数据的开始和结尾索引
      this.start = 0;
      this.end = undefined;
      // 是否是表格内部滚动
      this.isInnerScroll = false;
      // 高亮的行
      this.highlightRow = null;
      // 滚动位置
      this.scrollPos = [0, 0];
      // 触发scroll
      this.triggleScroll = false;
      // 多选：记录多选选项的顺序
      this.checkOrder = 0;

      // 验证ElTable组件
      this.elTable = this.getElTable();
      if (!this.elTable || this.elTable.$options.name !== 'ElTable') {
        throw new Error('未找到 <el-table> 组件. 请确保 <el-table> 组件在虚拟组件内，且 getElTable 方法能获取到正确的 <el-table> 组件！');
      }
      if (!this.elTable.rowKey) {
        this.warn && console.warn('[el-table-virtual-scroll]: 建议设置 <el-table> 组件的 rowKey 属性');
      }
      this.scroller = this.getScroller();
      this.observeElTable();

      // 监听事件
      this.onScroll = !this.throttleTime ? this.handleScroll : throttle_1(this.handleScroll, this.throttleTime);
      this.scroller.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onScroll);
      this.bindTableExpandEvent();
      this.bindTableDragEvent();
      this.bindTableSortEvent();
      this.bindTableFilterEvent();
      this.bindTableDestory();
      this.hackRowHighlight();
      this.hackHighlightSelectionRow();

      // 初次执行 (固定高度的表格布局好后，会触发 bodyHeight 更改（已手动监听，位于 unWatch2代码处），从而触发 onScroll，所以无需手动执行onScroll)
      setTimeout(function () {
        !_this.triggleScroll && _this.onScroll();
      }, 100);
    },
    // 滚轮滚动速度减缓，减少快速滚动白屏
    // slowNum - 减速的值，值越大，滚动越慢
    slowOnMousewheel: function slowOnMousewheel() {
      var slowNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var scroller = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.scroller;
      this.removeMousewheelEvent && this.removeMousewheelEvent();
      this.removeMousewheelEvent = null;
      if (!slowNum) return;
      this.removeMousewheelEvent = setMousewheelSlow(scroller, slowNum);
    },
    // 获取滚动元素
    getScroller: function getScroller() {
      var el;
      if (this.scrollBox) {
        if (this.scrollBox === 'window' || this.scrollBox === window) return window;
        el = document.querySelector(this.scrollBox);
        if (!el) throw new Error(" scrollBox prop: '".concat(this.scrollBox, "' is not a valid selector"));
        if (!isScroller(el)) console.warn("Warning! scrollBox prop: '".concat(this.scrollBox, "' is not a scroll element"));
        return el;
      }
      // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
      if (this.elTable && (this.elTable.height || this.elTable.maxHeight)) {
        this.isInnerScroll = true;
        return this.$el.querySelector('.el-table__body-wrapper');
      } else {
        return getParentScroller(this.$el);
      }
    },
    // 设置表格到滚动容器的距离
    getToTop: function getToTop() {
      if (this.isInnerScroll) {
        return 0;
      } else {
        return this.$el.getBoundingClientRect().top - (this.scroller === window ? 0 : this.scroller.getBoundingClientRect().top) + getScrollTop(this.scroller);
      }
    },
    // 处理滚动事件
    handleScroll: function handleScroll() {
      var shouldUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.disabled) return;
      if (!this.scroller) return;
      this.triggleScroll = true;

      // 【修复】如果使用v-show 进行切换表格会特别卡顿 #30；
      // 【原因】v-show为false时，表格内滚动容器的高度为auto，没有滚动条限制，虚拟滚动计算渲染全部内容
      if (this.isInnerScroll && !this.scroller.style.height && !this.scroller.style.maxHeight) return;

      // 如果组件失活，则不再执行handleScroll；否则外部容器滚动情况下记录的scrollTop会是0
      if (this.isDeactivated) return;
      // 记录scrollPos
      // 需要判断表格没有隐藏（修复表格隐藏状态下更新绑定数组长度，显示后滚动条位置异常 #67）
      if (this.isInnerScroll && this.elTable.layout.bodyHeight) {
        this.scrollPos[0] = this.scroller.scrollTop;
        this.scrollPos[1] = this.scroller.scrollLeft;
      }
      if (!this.virtualized) return;
      this.removeHoverRows();
      // 更新当前尺寸（高度）
      this.updateSizes();
      // 计算renderData
      this.calcRenderData();
      // 计算位置
      this.calcPosition();
      shouldUpdate && this.updatePosition();
      // 触发事件
      this.$emit('change', this.renderData, this.start, this.end);
      // 设置表格行展开
      this.setRowsExpanded();
      // 同步表格行高亮
      this.syncRowsHighlight();
    },
    // 移除多个hover-row
    removeHoverRows: function removeHoverRows() {
      var hoverRows = this.$el.querySelectorAll('.el-table__row.hover-row');
      if (hoverRows.length > 1) {
        Array.from(hoverRows).forEach(function (row) {
          row.classList.remove('hover-row');
        });
      }
    },
    // 更新尺寸（高度）
    updateSizes: function updateSizes() {
      var _this2 = this;
      if (!this.dynamic) return;
      var rows = this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row');

      // 处理树形表格(修复树结构懒加载 如果有hasChildren=false的行 行可视区域高度异常 #45)
      var isTree = this.elTable.lazy;
      var noFirstLevelReg = /el-table__row--level-[1-9]\d*/; // 匹配树形表格非一级行
      if (isTree) {
        // 筛选出树形表格的一级行，一级行className含有el-table__row--level-0或者不存在层级className
        rows = Array.from(this.$el.querySelectorAll('.el-table__body > tbody > .el-table__row')).filter(function (row) {
          return !noFirstLevelReg.test(row.className);
        });
      }
      Array.from(rows).forEach(function (row, index) {
        var item = _this2.renderData[index];
        if (!item) return;

        // 计算表格行的高度
        var offsetHeight = row.offsetHeight;
        // 表格行如果有扩展行，需要加上扩展内容的高度
        if (!isTree && row.classList.contains('expanded')) {
          offsetHeight += row.nextSibling.offsetHeight;
        }
        // 表格行如果有子孙节点，需要加上子孙节点的高度
        if (isTree) {
          var next = row.nextSibling;
          while (next && next.tagName === 'TR' && noFirstLevelReg.test(next.className)) {
            offsetHeight += next.offsetHeight;
            next = next.nextSibling;
          }
        }
        var key = item[_this2.keyProp];
        if (offsetHeight && _this2.sizes[key] !== offsetHeight) {
          _this2.$set(_this2.sizes, key, offsetHeight);
        }
      });
    },
    // 获取某条数据offsetTop
    getItemOffsetTop: function getItemOffsetTop(index) {
      if (!this.dynamic) {
        return this.itemSize * index;
      }
      var item = this.listData[index];
      if (item) {
        return this.offsetMap[item[this.keyProp]] || 0;
      }
      return 0;
    },
    // 获取某条数据的尺寸
    getItemSize: function getItemSize(index) {
      if (index <= -1) return 0;
      var item = this.listData[index];
      if (item) {
        var key = item[this.keyProp];
        return this.sizes[key] || this.itemSize;
      }
      return this.itemSize;
    },
    // 计算只在视图上渲染的数据
    calcRenderData: function calcRenderData() {
      var scroller = this.scroller,
        listData = this.listData,
        buffer = this.buffer;
      // 计算可视范围顶部、底部
      var toTop = this.getToTop(); // 表格到滚动容器的距离
      var top = getScrollTop(scroller) - buffer - toTop;
      var bottom = getScrollTop(scroller) + getOffsetHeight(scroller) + buffer - toTop;
      var start;
      var end;
      if (!this.dynamic) {
        start = top <= 0 ? 0 : Math.floor(top / this.itemSize);
        end = bottom <= 0 ? 0 : Math.ceil(bottom / this.itemSize);
      } else {
        // 二分法计算可视范围内的开始的第一个内容
        var l = 0;
        var r = listData.length - 1;
        var mid = 0;
        while (l <= r) {
          mid = Math.floor((l + r) / 2);
          var midVal = this.getItemOffsetTop(mid);
          if (midVal < top) {
            var midNextVal = this.getItemOffsetTop(mid + 1);
            if (midNextVal > top) break;
            l = mid + 1;
          } else {
            r = mid - 1;
          }
        }
        start = mid;

        // 二分法计算可视范围内的结束的最后一个内容
        l = start;
        r = listData.length - 1;
        mid = 0;
        while (l <= r) {
          mid = Math.floor((l + r) / 2);
          var _midVal = this.getItemOffsetTop(mid);
          if (_midVal >= bottom) {
            var _midNextVal = this.getItemOffsetTop(mid - 1);
            if (_midNextVal < bottom) break;
            r = mid - 1;
          } else {
            l = mid + 1;
          }
        }
        end = mid;
      }
      if (this.isRowSpan()) {
        // 计算包含合并行的开始结束区间（⚠️注意：合并行不支持使用斑马纹，因为不能100%确定合并行的开始行是偶数，可能会向上找一直到第一行，导致渲染非常多行，浪费性能）
        var _this$calcRenderSpanD = this.calcRenderSpanData(start, end);
        var _this$calcRenderSpanD2 = _slicedToArray(_this$calcRenderSpanD, 2);
        start = _this$calcRenderSpanD2[0];
        end = _this$calcRenderSpanD2[1];
      } else {
        // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
        if (start % 2) start = start - 1;
      }
      this.top = top;
      this.bottom = bottom;
      this.start = start;
      this.end = end;
      this.renderData = listData.slice(start, end + 1);
      if (this.start === 0 && this.end > 30 && this.end === this.listData.length - 1) {
        this.warn && console.warn('[el-table-virtual-scroll] 表格数据全部渲染，渲染数量为:' + this.listData.length);
      }
    },
    // 是否是合并行
    isRowSpan: function isRowSpan() {
      return typeof this.rowSpanKey === 'function';
    },
    // 如果存在合并行的情况，渲染的数据范围扩大到包含合并行
    calcRenderSpanData: function calcRenderSpanData(start, end) {
      // 从开始节点向上查找是否有合并行
      var prevKey;
      while (start > 0) {
        var curRow = this.listData[start];
        var curkey = this.rowSpanKey(curRow, start);
        // 如果不存在key，说明当前行不属于合并行
        if (isEmpty(curkey)) break;

        // 如果当前行与后面一行的key不相同，说明则当前行不属于合并行，从后一行开始截断
        if (!isEmpty(prevKey) && prevKey !== curkey) {
          start++;
          break;
        }
        prevKey = curkey;
        start--;
      }

      // 从末端节点向下查找是否有合并行
      var len = this.listData.length;
      prevKey = undefined;
      while (end < len) {
        var _curRow = this.listData[end];
        var _curkey = this.rowSpanKey(_curRow, end);
        // 如果不存在key，说明当前行不属于合并行
        if (!_curkey) break;

        // 如果当前行与前面一行的key不相同，说明则当前行不属于合并行，从前一行开始截断
        if (prevKey && prevKey !== _curkey) {
          end--;
          break;
        }
        prevKey = _curkey;
        end++;
      }
      return [start, end];
    },
    // 计算位置
    calcPosition: function calcPosition() {
      var _this3 = this;
      var last = this.listData.length - 1;
      // 计算内容总高度
      var wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last);
      // 计算当前滚动位置需要撑起的高度
      var offsetTop = this.getItemOffsetTop(this.start);
      var tableWrapEl;
      // 设置dom位置
      TableBodyClassNames.forEach(function (className, index) {
        var el = _this3.$el.querySelector(className);
        if (!el) return;

        // 创建wrapEl、innerEl
        if (!el.wrapEl) {
          var wrapEl = document.createElement('div');
          var innerEl = document.createElement('div');
          wrapEl.appendChild(innerEl);
          innerEl.appendChild(el.children[0]);
          el.insertBefore(wrapEl, el.firstChild);
          el.wrapEl = wrapEl;
          el.innerEl = innerEl;

          // 修复 fixed 动态切换时，固定列不显示（scrollTop位置和非固定列滚动位置不一致导致的，需要同步scrollTop的值）
          if (index > 0 && tableWrapEl) {
            _this3.$nextTick(function () {
              el.scrollTop = tableWrapEl.scrollTop;
            });
          }
        }
        index === 0 && (tableWrapEl = el); // 记录非固定列的dom

        if (el.wrapEl) {
          // 设置高度
          el.wrapEl.style.height = wrapHeight + 'px';
          // 设置transform撑起高度
          el.innerEl.style.transform = "translateY(".concat(offsetTop, "px)");
          // 设置paddingTop撑起高度
          // el.innerEl.style.paddingTop = `${offsetTop}px`
        }
      });
    },
    // 监听el-table
    observeElTable: function observeElTable() {
      var _this4 = this;
      // 监听滚动位置
      var unWatch1 = this.$watch(function () {
        return [_this4.elTable.scrollPosition, _this4.elTable.layout.scrollX];
      }, function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          pos = _ref3[0],
          scrollX = _ref3[1];
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [],
          _ref5 = _slicedToArray(_ref4, 2);
          _ref5[0];
          var oldScrollX = _ref5[1];
        // 修复自定义固定列 所有列宽总宽度小于表格宽度时 固定列样式有问题 #65
        _this4.scrollPosition = _this4.elTable.layout.scrollX ? pos : 'none';

        // 修复element-ui原有bug：当窗口缩放时，x轴滚动条从无到到有，且x轴已滚动到最右侧，右侧固定列
        if (scrollX && !oldScrollX) {
          _this4.elTable.syncPostion && _this4.elTable.syncPostion();
        }
      }, {
        immediate: true
      });

      // 监听表格滚动高度变化（切换v-show时更新）
      var unWatch2 = this.$watch(function () {
        return _this4.elTable.layout.bodyHeight;
      }, function (val) {
        val > 0 && _this4.restoreScroll();
        val > 0 && _this4.onScroll();
      });
      this.unWatchs = [unWatch1, unWatch2];
    },
    // 执行update方法更新虚拟滚动，且每次nextTick只能执行一次【在数据大于100条开启虚拟滚动时，由于监听了data、virtualized会连续触发两次update方法：第一次update时，（updateSize）计算尺寸里的渲染数据（renderData）与表格行的dom是一一对应，之后会改变渲染数据（renderData）的值；而第二次执行update时，renderData改变了，而表格行dom未改变，导致renderData与dom不一一对应，从而位置计算错误，最终渲染的数据对应不上。因此使用每次nextTick只能执行一次来避免bug发生】
    doUpdate: function doUpdate() {
      var _this5 = this;
      if (this.hasDoUpdate) return; // nextTick内已经执行过一次就不执行
      if (!this.scroller) return; // scroller不存在说明未初始化完成，不执行

      // 启动虚拟滚动的瞬间，需要暂时隐藏el-table__append-wrapper里的内容，不然会导致滚动位置一直到append的内容处
      this.isHideAppend = true;
      this.onScroll();
      this.hasDoUpdate = true;
      this.$nextTick(function () {
        _this5.hasDoUpdate = false;
        _this5.isHideAppend = false;
      });
    },
    // 空闲时更新位置（触发时间：滚动停止后等待10ms执行）
    // 场景：固定表格fixed变化时、扩展行展开滑动时需要更新
    updatePosition: function updatePosition() {
      var _this6 = this;
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this6.timer && clearTimeout(_this6.timer);
        // 传入false，避免一直循环调用
        _this6.handleScroll(false);
      }, this.throttleTime + 10);
    },
    // 渲染全部数据
    renderAllData: function renderAllData() {
      var _this7 = this;
      this.renderData = this.listData;
      this.$emit('change', this.listData, 0, this.listData.length - 1);
      this.$nextTick(function () {
        // 清除撑起的高度和位置
        TableBodyClassNames.forEach(function (className) {
          var el = _this7.$el.querySelector(className);
          if (!el) return;
          if (el.wrapEl) {
            // 设置高度
            el.wrapEl.style.height = 'auto';
            // 设置transform撑起高度
            el.innerEl.style.transform = "translateY(".concat(0, "px)");
          }
        });
      });
    },
    // 恢复滚动位置（仅支持表格内部滚动）
    restoreScroll: function restoreScroll() {
      if (!this.scroller || !this.isInnerScroll) return;
      this.scroller.scrollLeft = this.keepScroll ? this.scrollPos[1] : 0;
      this.scroller.scrollTop = this.keepScroll ? this.scrollPos[0] : 0;
    },
    // 【外部调用】更新
    update: function update() {
      // console.log('update')
      this.handleScroll();
    },
    // 【外部调用】滚动到第几行
    // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
    // offsetY - 偏移量
    scrollTo: function scrollTo(index) {
      var _this8 = this;
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var stop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var item = this.listData[index];
      if (item && this.scroller) {
        this.updateSizes();
        this.calcRenderData();
        this.$nextTick(function () {
          var offsetTop = _this8.getItemOffsetTop(index) - offsetY;
          scrollToY(_this8.scroller, offsetTop);

          // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
          if (!stop) {
            setTimeout(function () {
              _this8.scrollTo(index, offsetY, true);
            }, 50);
          }
        });
      }
    },
    // 【外部调用】重置 (没用废弃)
    reset: function reset() {
      this.sizes = {};
      this.scrollTo(0, 0, false);
    },
    // 销毁
    destory: function destory() {
      if (this.scroller) {
        this.scroller.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.onScroll);
      }
      if (this.unWatchs) {
        this.unWatchs.forEach(function (unWatch) {
          return unWatch();
        });
      }
      if (this.removeMousewheelEvent) {
        this.removeMousewheelEvent();
      }
      this.oldSelection = [];
      this.elTable = null;
      this.scroller = null;
      this.unWatchs = [];
    },
    // 【VirtualColumn调用】更新数据
    updateData: function updateData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // 先存在list，通过$emit update更新data不是立即执行的（那么拿到的data就是最新），所以先存到list里，拿的就是最新数据
      this.list = data;
      this.$emit('update:data', this.list);
    },
    // 【VirtualColumn调用】获取列表全部数据】
    // origin - 源数据，非筛选后的数据
    getData: function getData() {
      var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return this.list || (origin ? this.data : this.listData);
    },
    // 【VirtualColumn调用】添加virtual-column实例
    addColumn: function addColumn(vm) {
      this.columnVms.push(vm);
    },
    // 【VirtualColumn调用】移除virtual-column实例
    removeColumn: function removeColumn(vm) {
      this.columnVms = this.columnVms.filter(function (item) {
        return item !== vm;
      });
    },
    // 【多选】选中所有列
    checkAll: function checkAll(val) {
      var _this9 = this;
      var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.listData;
      var byUser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var removedRows = [];
      rows.forEach(function (row) {
        if (row.$v_checked) {
          removedRows.push(row);
        }
        if (row.$v_checked !== val) {
          _this9.$set(row, '$v_checked', val);
          _this9.$set(row, '$v_checkedOrder', val ? _this9.checkOrder++ : undefined);
        }
      });
      var selection = this.emitSelectionChange(removedRows);
      if (byUser) {
        // 当用户手动勾选全选 Checkbox 时触发的事件
        this.$emit('select-all', selection, val);
      }
      if (val === false) {
        this.checkOrder = 0; // 取消全选，则重置checkOrder
      }
    },
    // 【多选】选中某一列
    checkRow: function checkRow(row, val) {
      var emit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var byUser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (row.$v_checked === val) return;
      this.$set(row, '$v_checked', val);
      this.$set(row, '$v_checkedOrder', val ? this.checkOrder++ : undefined);
      if (emit) {
        var selection = this.emitSelectionChange(val ? [] : [row]);
        if (byUser) {
          // 当用户手动勾选数据行的 Checkbox 时触发的事件
          this.$emit('select', selection, row, val);
        }
      }
    },
    // 【多选】兼容表格clearSelection方法
    clearSelection: function clearSelection() {
      var _this10 = this;
      // 清除旧的选中项
      this.oldSelection.forEach(function (row) {
        _this10.$set(row, '$v_checked', false);
      });
      this.oldSelection = [];

      // 清除所有选中项
      this.checkAll(false);
      this.columnVms.forEach(function (vm) {
        return vm.syncCheckStatus();
      });
    },
    // 【多选】兼容表格toggleRowSelection方法
    toggleRowSelection: function toggleRowSelection(row, selected) {
      if (!Array.isArray(row)) {
        row = [row];
      }
      this.toggleRowsSelection(row, selected);
    },
    // 【多选】表格切换多个row选中状态
    toggleRowsSelection: function toggleRowsSelection(rows, selected) {
      var _this11 = this;
      // reserve-selection 模式用到的变量
      var oldSelectedMap = {}; // 保留值map（旧的选中值）
      var curSelectedMap = {}; // 当前选中值map
      var toDeleteMap = null; // 需删除值map
      var isReserve = this.isReserveSelection();
      if (isReserve) {
        this.oldSelection.forEach(function (row) {
          oldSelectedMap[row[_this11.keyProp]] = true;
        });
        this.data.forEach(function (row) {
          curSelectedMap[row[_this11.keyProp]] = true;
        });
      }
      var removedRows = [];
      rows.forEach(function (row) {
        var val = typeof selected === 'boolean' ? selected : !row.$v_checked;
        !val && removedRows.push(row);
        _this11.$set(row, '$v_checked', val);
        _this11.$set(row, '$v_checkedOrder', val ? _this11.checkOrder++ : undefined);
        if (!isReserve) return;

        /* 处理reserve-selection 模式 */
        // 如果row在保留值oldSelection里，且取消选中，则需要将它移除
        var key = row[_this11.keyProp];
        if (key in oldSelectedMap && !val) {
          if (!toDeleteMap) toDeleteMap = {};
          toDeleteMap[key] = true;
        }
        // 如果row不在当前列表里，且为选中，则需要添加在保留值oldSelection里
        if (!(key in curSelectedMap) && val) {
          _this11.oldSelection.push(row);
        }
      });
      if (toDeleteMap) {
        this.oldSelection = this.oldSelection.filter(function (row) {
          return !(row[_this11.keyProp] in toDeleteMap);
        });
      }
      this.emitSelectionChange(removedRows);
      this.columnVms.forEach(function (vm) {
        return vm.syncCheckStatus();
      });
    },
    // 【多选】兼容表格selection-change事件
    emitSelectionChange: function emitSelectionChange(removedRows) {
      var isReserve = this.isReserveSelection(); // 是否保留旧的值
      var selection = isReserve ? _toConsumableArray(this.oldSelection) : [];
      this.data.forEach(function (row) {
        if (row.$v_checked) {
          selection.push(row);
        }
      });
      this.sortSelection(selection);
      this.$emit('selection-change', selection, removedRows);
      // 对于 reserve-selection 模式，oldSelection始终保留旧的选中值，不保留当前选中值
      // 对于 非 reserve-selection 模式，oldSelection始终保留当前选中值
      if (!isReserve) {
        this.oldSelection = _toConsumableArray(selection);
      }
      return selection;
    },
    // 【多选】兼容表格 reserve-selection，存储上次选中的值
    updateSelectionByRowKey: function updateSelectionByRowKey(data) {
      var _this12 = this;
      var oldData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (!this.elTable) return;

      // 将旧的选中值存储到oldSelection中
      oldData.forEach(function (row) {
        if (row.$v_checked) {
          _this12.oldSelection.push(row);
        }
      });
      var selectedMap = {};
      this.oldSelection.forEach(function (row) {
        selectedMap[row[_this12.keyProp]] = true;
      });
      var usedMap = {}; // 当前选中值的map
      data.forEach(function (row) {
        var key = row[_this12.keyProp];
        if (key in selectedMap) {
          _this12.$set(row, '$v_checked', true);
          usedMap[key] = true;
        }
      });

      // 从oldSelection中移除当前选中的值
      this.oldSelection = this.oldSelection.filter(function (row) {
        return !(row[_this12.keyProp] in usedMap);
      });
    },
    // 【多选】多选列是否设置了 reserve-selection
    isReserveSelection: function isReserveSelection() {
      return this.columnVms.some(function (vm) {
        return vm.reserveSelection && vm.isSelection();
      });
    },
    // 获取选中值
    getSelection: function getSelection() {
      if (this.isReserveSelection()) {
        var curSelection = this.data.filter(function (row) {
          return row.$v_checked;
        });
        return [].concat(_toConsumableArray(this.oldSelection), _toConsumableArray(curSelection));
      } else {
        return this.oldSelection;
      }
    },
    // 【多选】更新多选的值
    updateSelectionData: function updateSelectionData(data, oldData) {
      var _this13 = this;
      this.syncSelectionStatus();
      if (data !== oldData) {
        this.oldSelection = [];
        return;
      }

      // 新的选中项
      var selection = this.data.filter(function (row) {
        return row.$v_checked;
      });
      this.sortSelection(selection);
      // 新的选中项key map
      var selectionKeyMap = selection.reduce(function (map, dataItem) {
        map[dataItem[_this13.keyProp]] = true;
        return map;
      }, {});
      // 移除的项
      var removedRows = this.oldSelection.reduce(function (rows, row) {
        if (!(row[_this13.keyProp] in selectionKeyMap)) rows.push(row);
        return rows;
      }, []);
      // 手动删除选中项、新旧项不一致（正常不会发生），触发selection-change事件
      if (removedRows.length || selection.length !== this.oldSelection.length) {
        this.$emit('selection-change', selection, removedRows);
        this.oldSelection = _toConsumableArray(selection);
      }
    },
    // 【多选】多选排序
    sortSelection: function sortSelection(selection) {
      var _this14 = this;
      if (!this.selectionSort) return;
      if (typeof this.selectionSort === 'function') {
        selection.sort(function (a, b) {
          return _this14.selectionSort(a, b);
        });
      } else {
        selection.sort(function (a, b) {
          return a.$v_checkedOrder - b.$v_checkedOrder;
        });
      }
    },
    // 【多选】同步多选状态
    syncSelectionStatus: function syncSelectionStatus() {
      var selectionVm = this.columnVms.find(function (vm) {
        return vm.isSelection();
      });
      if (selectionVm) {
        selectionVm.syncCheckStatus();
      }
    },
    // 【radio单选】设置选中行
    setCurrentRow: function setCurrentRow(row) {
      this.curRow = row;
      this.$emit('current-change', row);
    },
    // 【单选高亮】兼容行高亮
    hackRowHighlight: function hackRowHighlight() {
      var _this15 = this;
      // 兼容el-table的setCurrentRow：重写setCurrentRow方法
      if (this.elTable.setCurrentRow.virtual) {
        var originSetCurrentRow = this.elTable.setCurrentRow.bind(this.elTable); // 原方法
        var setCurrentRow = function setCurrentRow(row) {
          // 重写setCurrentRow
          _this15.elTable.store.states.currentRow = _this15.highlightRow; // 同步表格行高亮的值
          if (_this15.highlightRow !== row) _this15.highlightRow = row; // 同步highlightRow的值
          originSetCurrentRow(row); // 执行原方法
        };
        this.elTable.setCurrentRow = setCurrentRow;
        setCurrentRow.virtual = true;
      }
      // 兼容el-table的currentRowKey属性
      var unWatch = this.$watch(function () {
        return _this15.elTable.currentRowKey;
      }, function (val) {
        if (_this15.elTable.rowKey) {
          var targetRow = _this15.listData.find(function (row) {
            return val === row[_this15.elTable.rowKey];
          });
          _this15.highlightRow = targetRow;
        }
      }, {
        immediate: true
      });
      this.unWatchs.push(unWatch);

      // 监听高亮的事件
      var onCurrentChange = function onCurrentChange(row) {
        _this15.highlightRow = row;
      };
      this.elTable.$on('current-change', onCurrentChange);
      this.unWatchs.push(function () {
        _this15.elTable.$off('current-change', onCurrentChange);
      });
    },
    // 【单选高亮】同步表格行高亮的值
    syncRowsHighlight: function syncRowsHighlight() {
      var _this16 = this;
      if (!this.elTable.highlightCurrentRow) return;
      // 必须使用nextTick，不然值同步不上
      this.$nextTick(function () {
        _this16.elTable.store.states.currentRow = _this16.highlightRow;
      });
    },
    // 【多选高亮】兼容多选选中行高亮
    hackHighlightSelectionRow: function hackHighlightSelectionRow() {
      var _this17 = this;
      var onFixedColumnsChange = function onFixedColumnsChange() {
        if (!_this17.elTable) return;
        var tableBodyVm = _this17.elTable.$children.filter(function (vm) {
          return vm.$options.name === 'ElTableBody';
        });
        tableBodyVm.forEach(function (vm) {
          if (vm.getRowClass.virtual) return;
          // 重写 table-body组件的 getRowClass 方法
          // 支持多选选中时高亮
          var originGetRowClass = vm.getRowClass.bind(_this17.elTable);
          vm.getRowClass = function (row, rowIndex) {
            var classes = originGetRowClass(row, rowIndex);
            if (_this17.elTable.highlightSelectionRow && row.$v_checked) {
              classes.push('selection-row');
            }
            return classes;
          };
          vm.getRowClass.virtual = true;
        });
      };
      var unWatch = this.$watch(function () {
        return [_this17.elTable.fixedColumns, _this17.elTable.rightFixedColumns];
      }, onFixedColumnsChange, {
        immediate: true
      });
      this.unWatchs.push(unWatch);
    },
    // 监听表格header-dragend事件
    bindTableDragEvent: function bindTableDragEvent() {
      var _this18 = this;
      var onHeaderDragend = function onHeaderDragend() {
        // 设置状态，用于自定义固定列
        _this18.hasHeadDrag = true;
        // #50 修复el-table原bug： 刷新布局，列放大缩小让高度变大，导致布局错乱
        _this18.elTable.doLayout();
        // 修复某一行内容很多时，将该行宽度拖拽成很宽，内容坍塌导致空白行(需要立即更新，因为要获取新行变化的高度)
        _this18.update();
      };
      this.elTable.$on('header-dragend', onHeaderDragend);
      this.unWatchs.push(function () {
        _this18.elTable.$off('header-dragend', onHeaderDragend);
      });
    },
    // 【展开行】监听表格expand-change事件
    bindTableExpandEvent: function bindTableExpandEvent() {
      var _this19 = this;
      // el-table-virtual-column 组件如果设置了type="expand"，则会将this.isExpandType设为true
      var onExpandChange = function onExpandChange(row, expandedRows) {
        if (_this19.isExpandType) {
          _this19.$set(row, '$v_expanded', expandedRows.includes(row));
        }

        // 当展开的内容或展开的树收起时，需要更新虚拟滚动组件，避免表格出现一段空白内容
        if (!row.$v_expanded || expandedRows === false) {
          setTimeout(function () {
            _this19.update();
          });
        }
      };
      this.elTable.$on('expand-change', onExpandChange);
      this.unWatchs.push(function () {
        _this19.elTable.$off('expand-change', onExpandChange);
      });
    },
    // 【展开行】设置表格行展开
    setRowsExpanded: function setRowsExpanded() {
      var _this20 = this;
      if (!this.isExpandType) return;
      this.$nextTick(function () {
        var expandRows = _this20.renderData.filter(function (item) {
          return item.$v_expanded;
        });
        if (expandRows.length === 0) return;
        expandRows.forEach(function (row) {
          _this20.elTable.toggleRowExpansion(row, true);
        });
        // 手动设置列展开时，禁止展开动画
        _this20.isExpanding = true;
        setTimeout(function () {
          _this20.isExpanding = false;
        }, 10);
      });
    },
    // 【展开行】切换某一行的展开状态
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      var hasVal = typeof expanded === 'boolean';
      this.$set(row, '$v_expanded', hasVal ? expanded : !row.$v_expanded);
      if (this.renderData.includes(row)) {
        this.elTable.toggleRowExpansion(row, expanded);
      }
    },
    // 【自定义固定列】设置固定左右样式
    headerCellFixedStyle: function headerCellFixedStyle(data) {
      return this.cellFixedStyle(data, true);
    },
    // 【自定义固定列】设置固定左右样式
    cellFixedStyle: function cellFixedStyle(_ref6) {
      var _this21 = this;
      var column = _ref6.column;
      var isHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var elTable = this.getElTable();
      if (!elTable) return;
      // 右边固定列头部需要加上滚动条宽度-gutterWidth
      var _elTable$layout = elTable.layout,
        _gutterWidth = _elTable$layout.gutterWidth,
        scrollY = _elTable$layout.scrollY,
        bodyWidth = _elTable$layout.bodyWidth;
      var gutterWidth = isHeader && scrollY ? _gutterWidth : 0;
      // 计算固定样式（当列宽度变化时重新计算，其余直接使用缓存值fixedMap）
      if (!this.fixedMap || this._isScrollY !== scrollY || this._bodyWidth !== bodyWidth || this.hasHeadDrag) {
        if (this.hasHeadDrag) this.hasHeadDrag = false;
        this._isScrollY = scrollY;
        this._bodyWidth = bodyWidth;
        this.fixedMap = {};
        this.totalLeft = 0; // 左边固定定位累加值
        this.totalRight = 0; // 右边固定定位累加值

        var columns = elTable.columns;
        var rightColumns = []; // 右边固定列集合
        var lastLeftColumn; // 左边固定列的最后一列
        var firstRightColumn; // 右边固定列的第一列
        for (var i = 0; i < columns.length; i++) {
          var _column = columns[i];
          var isLeft = _column.className && _column.className.includes('virtual-column__fixed-left');
          var isRight = _column.className && _column.className.includes('virtual-column__fixed-right');
          if (!isLeft && !isRight) continue;
          // 设置左边固定列定位样式
          if (isLeft) {
            lastLeftColumn = _column;
            this.fixedMap[_column.id] = {
              left: this.totalLeft
            };
            this.totalLeft += _column.realWidth || _column.width;
          }
          // 收集右边固定列
          if (isRight) {
            if (!firstRightColumn) firstRightColumn = _column;
            rightColumns.push(_column);
          }
        }
        // 设置固定列阴影classname
        var leftClass = ' is-last-column';
        var rightClass = ' is-first-column';

        // 设置左边、右边固定列class
        if (lastLeftColumn && !lastLeftColumn.className.includes(leftClass)) lastLeftColumn.className += leftClass;
        if (firstRightColumn && !firstRightColumn.className.includes(rightClass)) firstRightColumn.className += rightClass;

        // 设置右边固定列定位样式（从右往左依次）
        this.hasFixedRight = rightColumns.length > 0;
        rightColumns.reverse().forEach(function (column) {
          _this21.fixedMap[column.id] = {
            right: _this21.totalRight
          };
          _this21.totalRight += column.realWidth || column.width;
        });
      }
      var style = this.fixedMap[column.id];
      if (!style) return;
      var isFixedRight = ('right' in style);
      var curStyle = isFixedRight ? {
        right: style.right + gutterWidth + 'px'
      } : {
        left: style.left + 'px'
      };

      // 修复 #89 使用 <virtual-column> vfixed, 表尾合计行对应的列没有固定
      if (elTable.showSummary) {
        this.$nextTick(function () {
          var footTh = _this21.$el.querySelector(".el-table__footer-wrapper .".concat(column.id));
          if (footTh) {
            if (curStyle.left) footTh.style.left = curStyle.left;
            if (curStyle.right) footTh.style.right = curStyle.right;
          }
        });
      }
      return curStyle;
    },
    // 【自定义固定列】更新表头布局
    doHeaderLayout: function doHeaderLayout() {
      if (!this.elTable) return;
      this.fixedMap = null;
      this.elTable.$refs.tableHeader.$forceUpdate();
    },
    // 绑定排序事件
    bindTableSortEvent: function bindTableSortEvent() {
      var _this22 = this;
      this.onSortChange = function () {
        if (!_this22.elTable) return;
        var states = _this22.elTable.store.states;
        var sortingColumn = states.sortingColumn;
        var data = _this22.filterData || _this22.data; // 优先使用过滤后的数据进行排序
        if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
          _this22.listData = data;
        } else {
          _this22.listData = orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
        }
        // 触发更新
        _this22.doUpdate();
        _this22.$nextTick(function () {
          _this22.syncSelectionStatus();
        });
      };
      this.elTable.$on('sort-change', this.onSortChange);
      this.unWatchs.push(function () {
        _this22.elTable.$off('sort-change', _this22.onSortChange);
      });

      // clearSort不会触发sort-change，需要重写clearSort方法，手动触发
      var originClearSort = this.elTable.clearSort.bind(this.elTable);
      this.elTable.clearSort = function () {
        originClearSort.apply(void 0, arguments);
        _this22.onSortChange();
      };

      // 此处兼容 default-sort 属性
      if (this.elTable.defaultSort) {
        this.$nextTick(function () {
          _this22.onSortChange();
        });
      }
    },
    // 绑定筛选事件
    bindTableFilterEvent: function bindTableFilterEvent() {
      var _this23 = this;
      this.onFilterChange = function () {
        if (!_this23.elTable) return;
        var states = _this23.elTable.store.states;
        var filters = states.filters;

        // 使用原数据进行数据过滤
        var data = _this23.data;
        Object.keys(filters).forEach(function (columnId) {
          var values = states.filters[columnId];
          if (!values || values.length === 0) return;
          var column = getColumnById(states, columnId);
          if (column && column.filterMethod) {
            data = data.filter(function (row) {
              return values.some(function (value) {
                return column.filterMethod.call(null, value, row, column);
              });
            });
          }
        });

        // 过滤完之后，手动执行排序
        var hasFilter = _this23.data !== data;
        _this23.filterData = hasFilter ? data : null;
        _this23.onSortChange();
      };
      this.elTable.$on('filter-change', this.onFilterChange);
      this.unWatchs.push(function () {
        _this23.elTable.$off('filter-change', _this23.onFilterChange);
      });

      // clearFilter不会触发 filter-change，需要重写 clearFilter 方法，手动触发
      var originClearFilter = this.elTable.clearFilter.bind(this.elTable);
      this.elTable.clearFilter = function () {
        originClearFilter.apply(void 0, arguments);
        _this23.onFilterChange();
      };

      // init filters
      // 此处兼容列的 filtered-value 属性
      var states = this.elTable.store.states;
      states.columns.forEach(function (column) {
        if (column.filteredValue && column.filteredValue.length) {
          _this23.onFilterChange();
        }
      });
    },
    // 禁用原来的树结构（将children字段改为空）
    // 场景：row包含children会被当做的树结构，与 virtual-column 的树结构有冲突，所以需要禁用原来的
    disableOriginTree: function disableOriginTree() {
      var _this24 = this;
      this.$nextTick(function () {
        if (!_this24.elTable) return;
        var states = _this24.elTable.store.states;
        states.childrenColumnName = '';
      });
    },
    // 表格销毁事件
    bindTableDestory: function bindTableDestory() {
      var _this25 = this;
      var onTableDestory = function onTableDestory() {
        _this25.warn && console.warn('<el-table> 组件销毁时，建议将 <el-table-virtual-scroll> 组件一同销毁');
        _this25.destory();
        _this25.$nextTick(function () {
          _this25.initData();
        });
      };
      // 防止el-table绑定key时，重新渲染表格但没有重新初始化<virtual-scroll>组件
      this.elTable.$on('hook:beforeDestory', onTableDestory);
      this.unWatchs.push(function () {
        _this25.elTable.$off('hook:beforeDestory', onTableDestory);
      });
    }
  },
  watch: {
    data: function data(_data, oldData) {
      this.listData = _data;
      if (this.list && _data !== oldData) {
        this.list = _data;
      }
      if (!this.virtualized) {
        this.renderAllData();
      } else {
        this.onFilterChange && this.onFilterChange();
      }
      if (this.isReserveSelection()) {
        // 保留旧的选中值
        this.updateSelectionByRowKey(_data, oldData);
      } else {
        // 对比新旧值，移除删除的选中值
        this.updateSelectionData(_data, oldData);
      }
    },
    virtualized: {
      immediate: true,
      handler: function handler(val) {
        if (!val) {
          this.renderAllData();
        } else {
          this.doUpdate();
        }
      }
    },
    disabled: function disabled() {
      this.doUpdate();
    }
  },
  created: function created() {
    var _this26 = this;
    this.listData = this.data;
    this.$nextTick(function () {
      _this26.initData();
    });
  },
  activated: function activated() {
    var _this$elTable;
    this.isDeactivated = false;
    ((_this$elTable = this.elTable) === null || _this$elTable === void 0 ? void 0 : _this$elTable.fit) === false && this.restoreScroll();
  },
  deactivated: function deactivated() {
    this.isDeactivated = true;
  },
  beforeDestroy: function beforeDestroy() {
    this.destory();
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "el-table-virtual-scroll",
    "class": [_vm.isExpanding ? "is-expanding" : "", _vm.isHideAppend ? "hide-append" : "", _vm.scrollPosition ? "is-scrolling-" + _vm.scrollPosition : "", _vm.hasFixedRight ? "has-custom-fixed-right" : ""]
  }, [_vm._t("default", null, null, {
    headerCellFixedStyle: _vm.headerCellFixedStyle,
    cellFixedStyle: _vm.cellFixedStyle
  })], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
var __vue_inject_styles__$2 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-352fab15_0", {
    source: ".el-table-virtual-scroll.has-custom-fixed-right .el-table__cell.gutter {\n  position: sticky;\n  right: 0;\n}\n",
    map: {
      "version": 3,
      "sources": ["el-table-virtual-scroll.vue"],
      "names": [],
      "mappings": "AAAA;EACE,gBAAgB;EAChB,QAAQ;AACV",
      "file": "el-table-virtual-scroll.vue",
      "sourcesContent": [".el-table-virtual-scroll.has-custom-fixed-right .el-table__cell.gutter {\n  position: sticky;\n  right: 0;\n}\n"]
    },
    media: undefined
  }), inject("data-v-352fab15_1", {
    source: ".is-expanding[data-v-352fab15] :deep(.el-table__expand-icon) {\n  transition: none;\n}\n.hide-append[data-v-352fab15] :deep(.el-table__append-wrapper) {\n  display: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["el-table-virtual-scroll.vue"],
      "names": [],
      "mappings": "AAAA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;AACf",
      "file": "el-table-virtual-scroll.vue",
      "sourcesContent": [".is-expanding :deep(.el-table__expand-icon) {\n  transition: none;\n}\n.hide-append :deep(.el-table__append-wrapper) {\n  display: none;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__$2 = "data-v-352fab15";
/* module identifier */
var __vue_module_identifier__$2 = undefined;
/* functional template */
var __vue_is_functional_template__$2 = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, createInjector, undefined, undefined);

// 此组件仅用于显示VNode
var script$1 = {
  name: 'el-table-virtual-column-formatter',
  props: {
    vNode: {
      type: Object
    }
  },
  render: function render() {
    return this.vNode;
  }
};

/* script */
var __vue_script__$1 = script$1;

/* template */

/* style */
var __vue_inject_styles__$1 = undefined;
/* scoped */
var __vue_scope_id__$1 = undefined;
/* module identifier */
var __vue_module_identifier__$1 = undefined;
/* functional template */
var __vue_is_functional_template__$1 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

// 用于获取formatter结果的临时对象，不可挂载到vue实例中，否则会导致循环更新的问题
var formatterTempObj = {
  scope: null,
  // 缓存键 当前scope参数
  result: null // 缓存值 formatter的调用结果
};
var script = {
  name: 'el-table-virtual-column',
  components: {
    ElCheckbox: Checkbox,
    ElRadio: Radio,
    ElTableVirtualColumnFormatter: __vue_component__$1
  },
  inject: ['virtualScroll'],
  props: {
    load: {
      type: Function,
      "default": function _default(row, resolve) {
        resolve([]);
      }
    },
    indent: {
      type: Number,
      "default": 16
    },
    selectable: {
      type: Function
    },
    reserveSelection: {
      type: Boolean,
      "default": false
    },
    treeProps: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isCheckedAll: false,
      // 全选
      isCheckedImn: false,
      // 控制半选样式
      isTree: false,
      // 树结构
      isNested: false // 是否列嵌套
    };
  },
  computed: {
    getClassName: function getClassName() {
      var classnames = [];
      var classname = this.$attrs['class-name'] || this.$attrs.className;
      classname && classnames.push(classname);
      this.isTree && classnames.push('el-table__row--level');
      var vfixed = this.$attrs.vfixed;
      if (vfixed === true || vfixed === '') vfixed = 'left';
      if (vfixed) classnames.push('virtual-column__fixed-' + vfixed);
      return classnames.join(' ');
    }
  },
  methods: {
    // 获取多选禁用状态
    getDisabled: function getDisabled(scope) {
      if (this.selectable) {
        var index = this.getIndex(scope, false);
        return !this.selectable(scope.row, index);
      }
      return false;
    },
    // 选择表格所有行
    onCheckAllRows: function onCheckAllRows(val) {
      var _this = this;
      var _this$virtualScroll$e = this.virtualScroll.elTable.selectOnIndeterminate,
        selectOnIndeterminate = _this$virtualScroll$e === void 0 ? true : _this$virtualScroll$e;
      if (selectOnIndeterminate) {
        val = this.isCheckedImn ? true : !this.isCheckedAll;
      } else {
        val = this.isCheckedImn ? false : !this.isCheckedAll;
      }
      if (this.selectable) {
        // 筛选出可选的行
        var selectableList = [];
        var list = this.virtualScroll.getData(false);
        list.forEach(function (row, index) {
          _this.selectable(row, index) && selectableList.push(row);
        });
        this.virtualScroll.checkAll(val, selectableList, true);
      } else {
        this.virtualScroll.checkAll(val);
      }
      var selection = this.virtualScroll.getSelection();
      this.isCheckedImn = !val && selection.length > 0;
      this.isCheckedAll = val;
    },
    // 选择表格某行
    onCheckRow: function onCheckRow(scope, val) {
      var index = this.getIndex(scope, false);
      if (this.selectable) {
        var isSelectable = this.selectable(scope.row, index);
        if (!isSelectable) return;
      }
      this.virtualScroll.checkRow(scope.row, val, true, true);
      this.syncCheckStatus();
    },
    // 是否自定义多选
    isSelection: function isSelection() {
      return this.$attrs.type !== 'v-selection';
    },
    // 同步全选、半选框状态
    syncCheckStatus: function syncCheckStatus() {
      var _this2 = this;
      var list = this.virtualScroll.getData(false); // 筛选后的列表或原列表
      var checkedLen = list.filter(function (row) {
        return row.$v_checked === true;
      }).length;
      var selection = this.virtualScroll.getSelection();
      if (checkedLen && checkedLen === list.length) {
        // 全部选中
        this.isCheckedAll = true;
      } else if (checkedLen && this.selectable) {
        // 可选的全部选中
        this.isCheckedAll = list.every(function (row, index) {
          var enable = _this2.selectable(row, index);
          if (!enable) return true;
          return row.$v_checked;
        });
      } else {
        // 没有选中
        this.isCheckedAll = false;
      }
      this.isCheckedImn = !this.isCheckedAll && selection.length > 0;
    },
    // 单选
    onRadioChange: function onRadioChange(row) {
      this.virtualScroll.setCurrentRow(row);
    },
    // 获取索引值; add1 - 是否加1
    getIndex: function getIndex(scope) {
      var add1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var index = this.virtualScroll.start + scope.$index;
      if (typeof this.$attrs.index === 'function') {
        return this.$attrs.index(index);
      }
      return index + (add1 ? 1 : 0);
    },
    // 设置正确索引值
    setScope: function setScope(scope) {
      scope.$index = this.virtualScroll.start + scope.$index;
      return scope;
    },
    // 展开收起事件，返回子节点
    onTreeNodeExpand: function onTreeNodeExpand(row) {
      var _arguments = arguments,
        _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var expanded, doLoad;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              expanded = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : !row.$v_expanded;
              doLoad = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : true;
              if (!(row.$v_expanded === expanded)) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", []);
            case 4:
              if (!expanded) {
                _context.next = 13;
                break;
              }
              if (!row.$v_loaded) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", _this3.loadOldChildNodes(row));
            case 9:
              if (!doLoad) {
                _context.next = 11;
                break;
              }
              return _context.abrupt("return", _this3.loadChildNodes(row));
            case 11:
              _context.next = 14;
              break;
            case 13:
              return _context.abrupt("return", _this3.hideChildNodes(row));
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    // 加载子节点
    // force - 强制执行load加载
    loadChildNodes: function loadChildNodes(row) {
      var _this4 = this;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new Promise(function (resolve) {
        // 获取子节点数据并显示
        _this4.$set(row, '$v_loading', true);
        _this4.$set(row, '$v_hasChildren', undefined);

        // 显示已有子节点
        if (!force) {
          var _this4$treeProps = _this4.treeProps,
            children = _this4$treeProps.children,
            hasChildren = _this4$treeProps.hasChildren;
          if (row[hasChildren] === false) {
            return resolveFn.call(_this4, []);
          }
          if (row[hasChildren]) {
            return resolveFn.call(_this4, row[children]);
          }
        }
        _this4.load && _this4.load(row, resolveFn.bind(_this4));
        function resolveFn(data) {
          if (!Array.isArray(data)) {
            this.$set(row, '$v_loading', false);
            this.$set(row, '$v_hasChildren', false);
            resolve();
            return;
          }

          // 如果当前节点有子节点，则删除子节点再插入新的子节点
          // 场景：连续触发两次reloadNode，第一次加载了子节点，第二次加载了新的子节点，需要删除旧的子节点，再插入新的子节点
          if (row.$v_hasChildren) {
            this.removeNode(row, true);
          }
          this.$set(row, '$v_loading', false);
          this.$set(row, '$v_expanded', true);
          this.$set(row, '$v_loaded', true);
          this.$set(row, '$v_hasChildren', !!data.length);
          data.forEach(function (item) {
            item.$v_level = typeof row.$v_level === 'number' ? row.$v_level + 1 : 2;
          });

          // 所有子节点插入到当前同级节点下
          var list = this.virtualScroll.getData();
          var index = list.findIndex(function (item) {
            return item === row;
          });
          if (index > -1) {
            this.virtualScroll.updateData([].concat(_toConsumableArray(list.slice(0, index + 1)), _toConsumableArray(data), _toConsumableArray(list.slice(index + 1))));
          }
          resolve(data);
        }
      });
    },
    // 加载已经加载的子节点
    loadOldChildNodes: function loadOldChildNodes(row) {
      this.$set(row, '$v_expanded', true);
      var list = this.virtualScroll.getData();
      var index = list.findIndex(function (item) {
        return item === row;
      });
      if (index > -1) {
        this.virtualScroll.updateData([].concat(_toConsumableArray(list.slice(0, index + 1)), _toConsumableArray(row.$v_hideNodes || []), _toConsumableArray(list.slice(index + 1))));
        var hideNodes = row.$v_hideNodes;
        delete row.$v_hideNodes;
        return hideNodes;
      }
      return [];
    },
    // 隐藏子节点
    hideChildNodes: function hideChildNodes(row) {
      this.$set(row, '$v_expanded', false);

      // 查找所有子孙节点
      var _this$virtualScroll = this.virtualScroll,
        getData = _this$virtualScroll.getData,
        keyProp = _this$virtualScroll.keyProp;
      var list = getData();
      var childNodes = this.getChildNodes(row, true, true);
      if (!childNodes.length) return;
      var map = {};
      childNodes.forEach(function (row) {
        map[row[keyProp]] = true;
      });

      // 隐藏所有子孙节点
      this.$set(row, '$v_hideNodes', childNodes);
      var newList = list.filter(function (row) {
        return !(row[keyProp] in map);
      });
      this.virtualScroll.updateData(newList);
      this.virtualScroll.update();
      return [];
    },
    // 展开节点
    // expandKeys - 展开节点的keys值
    // expanded - 展开/收起
    // doLoad - 未加载子节点则执行load函数去加载，已加载则展开
    expand: function expand(expandKeys) {
      var _this5 = this;
      var expanded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var doLoad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      if (!Array.isArray(expandKeys)) return;
      var _this$virtualScroll2 = this.virtualScroll,
        getData = _this$virtualScroll2.getData,
        keyProp = _this$virtualScroll2.keyProp;
      var data = getData();
      var plist = [];
      data.forEach(function (row) {
        if (row[keyProp] && expandKeys.includes(row[keyProp])) {
          plist.push(_this5.onTreeNodeExpand(row, expanded, doLoad));
        }
      });
      return Promise.all(plist);
    },
    // 展开路径
    expandPath: function expandPath(keyPath) {
      var _this6 = this;
      if (!Array.isArray(keyPath)) return;

      // 递归路径，逐层展开节点
      var expand = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(rows, n) {
          var targetRow;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(n === keyPath.length)) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return", keyPath[n - 1]);
              case 2:
                if (!(!Array.isArray(rows) || !rows.length)) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", keyPath[n - 1]);
              case 4:
                targetRow = rows.find(function (row) {
                  return row[keyProp] === keyPath[n];
                });
                if (!targetRow) {
                  _context2.next = 13;
                  break;
                }
                if (targetRow.$v_expanded) {
                  _context2.next = 10;
                  break;
                }
                _context2.next = 9;
                return _this6.onTreeNodeExpand(targetRow, true);
              case 9:
                rows = _context2.sent;
              case 10:
                return _context2.abrupt("return", expand(rows, n + 1));
              case 13:
                console.warn("[expandPath] \u6CA1\u6709\u627E\u5230 ".concat(keyPath[n], " key\u503C\u5BF9\u5E94\u7684\u884C"));
                return _context2.abrupt("return", keyPath[n - 1]);
              case 15:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function expand(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
      var _this$virtualScroll3 = this.virtualScroll,
        getData = _this$virtualScroll3.getData,
        keyProp = _this$virtualScroll3.keyProp;
      var data = getData();
      return expand(data, 0);
    },
    // 展开所有存在的节点
    expandAll: function expandAll() {
      var _this7 = this;
      // 展开节点（递归）
      var expandRows = function expandRows(data) {
        if (Array.isArray(data) && data.length) {
          data.forEach(function (row) {
            _this7.onTreeNodeExpand(row, true, false);
            expandRows(row.$v_hideNodes);
          });
        }
      };
      var getData = this.virtualScroll.getData;
      var data = getData();
      expandRows(data);
    },
    // 收起所有节点
    unexpandAll: function unexpandAll() {
      var _this8 = this;
      var getData = this.virtualScroll.getData;
      var data = getData();
      var levelMap = [];
      data.forEach(function (row) {
        var level = row.$v_level || 1;
        !levelMap[level] && (levelMap[level] = []);
        levelMap[level].push(row);
      });
      for (var i = levelMap.length - 1; i >= 0; i--) {
        if (!levelMap[i]) continue;
        levelMap[i].forEach(function (row) {
          _this8.onTreeNodeExpand(row, false);
        });
      }
    },
    // 删除节点
    // onlyChild：为false是删除传入的row节点，为 true 时只删除row的所有子节点
    removeNode: function removeNode(row) {
      var onlyChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // 没有子节点，无需删除
      if (onlyChild && !row.$v_hasChildren) return;
      var getData = this.virtualScroll.getData;
      var list = getData().slice();
      var targetLevel = row.$v_level || 1;

      // 查找子节点
      // match - 是否找到目标节点
      function find(list) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          match: false,
          stop: false
        };
        for (var i = 0; i < list.length; i++) {
          if (data.stop) return;
          var curRow = list[i];
          var curLevel = curRow.$v_level || 1;
          var isChild = curLevel > targetLevel;

          // 找到子节点，并删除
          if (data.match && isChild) {
            list.splice(i, 1);
            i--;
            continue;
          }
          // 已经找完子节点，结束
          if (data.match && !isChild) return data.stop = true;
          // 找到目标节点后，开始查找它的子节点
          if (curRow === row) {
            // 直接删除目标节点
            if (!onlyChild) {
              list.splice(i, 1);
              i--;
            }
            // 往下允许查找它的子节点
            data.match = true;
          }

          // 如果子节点隐藏了，则从隐藏节点里查找
          var hideNodes = curRow.$v_hideNodes || [];
          if (hideNodes.length) {
            find(hideNodes, data, true);
          }
        }
      }
      find(list);
      if (onlyChild) row.$v_hasChildren = false;
      this.virtualScroll.updateData(list);
    },
    // 重新加载节点
    // 删除原来子节点，并触发load函数重新加载
    reloadNode: function reloadNode(row) {
      this.removeNode(row, true);
      this.loadChildNodes(row, true);
    },
    /*
     * 获取子孙节点
     * soon - 是否获取所有子孙节点，否则只获取直属子节点
     * visible - 只获取可见的
     */
    getChildNodes: function getChildNodes(row) {
      var soon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var visible = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var res = [];
      var getData = this.virtualScroll.getData;
      var list = getData();
      var targetLevel = row.$v_level || 1;

      // 查找子节点
      // match - 是否找到目标节点
      function find(list) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          match: false,
          stop: false
        };
        for (var i = 0; i < list.length; i++) {
          if (data.stop) return;
          var curRow = list[i];
          var curLevel = curRow.$v_level || 1;
          var isChild = soon ? curLevel > targetLevel : curLevel - targetLevel === 1;

          // 找到子节点
          if (data.match && isChild) {
            res.push(curRow);
          }
          // 已经找完子节点，结束
          if (data.match && !isChild) return data.stop = true;
          // 找到目标节点后，开始查找它的子节点
          if (curRow === row) data.match = true;

          // 如果子节点隐藏了，则从隐藏节点里查找
          var hideNodes = curRow.$v_hideNodes || [];
          if (!visible && hideNodes.length) {
            find(hideNodes, data);
          }
        }
      }
      find(list);
      return res;
    },
    // 获取父节点
    getParentNodes: function getParentNodes(row) {
      var getData = this.virtualScroll.getData;
      var list = getData().slice();
      var res = [];

      // 查找方案：从父节点向子节点一级一级查找，并记录查找路径，找到目标节点后，返回路径上的所有节点
      function find(list) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          stop: false
        };
        var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        for (var i = 0; i < list.length; i++) {
          if (data.stop) return;
          var curRow = list[i];
          var curLevel = curRow.$v_level || 1;
          if (curLevel > level) {
            level = curLevel;
          } else {
            // 层级与数组的索引有关联的，相差1
            res.splice(curLevel - 1);
          }

          // 找到目标节点后，停止
          if (curRow === row) {
            data.stop = true;
            return;
          }
          // 添加当前节点
          res.push(curRow);

          // 如果子节点隐藏了，则从隐藏节点里查找
          var hideNodes = curRow.$v_hideNodes || [];
          if (hideNodes.length) {
            find(hideNodes, data, level);
          }
        }
      }
      find(list);
      return res;
    },
    // 获取所有节点，包含隐藏的节点
    getAllNodes: function getAllNodes() {
      var getData = this.virtualScroll.getData;
      var list = getData();
      var res = [];
      list.forEach(function (item) {
        res.push(item);
        if (item.$v_hideNodes && item.$v_hideNodes.length) {
          res.push.apply(res, _toConsumableArray(item.$v_hideNodes));
        }
      });
      return res;
    },
    // 判断内容是否为VNode
    isVNode: function isVNode(vNode) {
      return this._vnode.constructor === (vNode === null || vNode === void 0 ? void 0 : vNode.constructor);
    },
    // 获取formatter结果，相同的scope使用缓存的结果，避免重复调用formatter函数
    // 当前与formatter有关的template的写法会使同一个scope参数被formatter连续使用两次
    // 后续的formatter调用参数都是一个全新的scope对象
    // 因此，只需判断当前scope与上一个scope是否相同即可决定是否需要使用缓存
    getFormatterResult: function getFormatterResult(scope) {
      if (formatterTempObj.scope === scope) {
        // 获取缓存的formatter调用结果
        return formatterTempObj.result;
      } else {
        // scope不匹配，更新缓存键scope与值result
        formatterTempObj.scope = scope;
        formatterTempObj.result = scope.column.formatter(scope.row, scope.column, scope.row[scope.column.property], scope.$index);
        return formatterTempObj.result;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var globalComponents = this.$root.$options.components;
    // 当全局有引入ElTableColumn，就不用局部再引入了(修复Duplicate keys detected: 'el-table_1_column_1'. This may cause an update error. #63)
    if (!globalComponents.ElTableColumn) {
      this.$options.components.ElTableColumn = TableColumn;
    }
    var type = this.$attrs.type;
    if (['index', 'selection', 'radio', 'tree'].includes(type)) {
      this.$attrs.type = 'v-' + type;
    }
  },
  created: function created() {
    this.isNested = !!this.$slots["default"]; // 是否列嵌套
    this.virtualScroll.addColumn(this);
    var type = this.$attrs.type;
    if (type === 'expand') {
      this.virtualScroll.isExpandType = true;
    } else if (type === 'v-tree') {
      this.isTree = true;
      this.virtualScroll.disableOriginTree();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.virtualScroll.removeColumn(this);
    // 清除formatter相关的缓存
    formatterTempObj.scope = null;
    formatterTempObj.result = null;
  }
};

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-table-column", _vm._g(_vm._b({
    attrs: {
      "class-name": _vm.getClassName
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn(scope) {
        return [_vm.$scopedSlots["header"] ? _vm._t("header", null, null, scope) : [scope.column.type === "v-selection" ? _c("el-checkbox", {
          attrs: {
            value: _vm.isCheckedAll,
            indeterminate: _vm.isCheckedImn
          },
          on: {
            change: _vm.onCheckAllRows
          }
        }) : [_vm._v("\n        " + _vm._s(scope.column.label) + "\n      ")]]];
      }
    }, {
      key: "default",
      fn: function fn(scope) {
        return [scope.column && scope.column.type === "v-tree" ? [_c("span", {
          staticClass: "el-table__indent",
          style: {
            paddingLeft: (scope.row.$v_level - 1) * _vm.indent + "px"
          }
        }), _vm._v(" "), !(scope.row.$v_hasChildren === false || scope.row[_vm.treeProps.hasChildren] === false) ? _c("div", {
          staticClass: "el-table__expand-icon",
          "class": scope.row.$v_expanded ? "el-table__expand-icon--expanded" : "",
          on: {
            click: function click($event) {
              return _vm.onTreeNodeExpand(scope.row);
            }
          }
        }, [scope.row.$v_loading ? _c("i", {
          staticClass: "el-icon-loading"
        }) : _c("i", {
          staticClass: "el-icon-arrow-right"
        })]) : _c("span", {
          staticClass: "el-table__placeholder"
        })] : _vm._e(), _vm._v(" "), _vm.$scopedSlots["default"] ? _vm._t("default", null, null, _vm.setScope(scope)) : [scope.column.type === "v-selection" ? _c("el-checkbox", {
          attrs: {
            value: scope.row.$v_checked || false,
            disabled: _vm.getDisabled(scope)
          },
          on: {
            change: function change($event) {
              return _vm.onCheckRow(scope, !scope.row.$v_checked);
            }
          },
          nativeOn: {
            click: function click($event) {
              $event.stopPropagation();
            }
          }
        }) : _vm._e(), _vm._v(" "), scope.column.type === "v-radio" ? _c("el-radio", {
          attrs: {
            label: true,
            value: _vm.virtualScroll.curRow === scope.row
          },
          on: {
            change: function change($event) {
              return _vm.onRadioChange(scope.row);
            }
          }
        }, [_c("span")]) : scope.column.type === "v-index" ? _c("span", [_vm._v("\n        " + _vm._s(_vm.getIndex(scope)) + "\n      ")]) : scope.column.formatter ? [_vm.isVNode(_vm.getFormatterResult(scope)) ? _c("el-table-virtual-column-formatter", {
          attrs: {
            "v-node": _vm.getFormatterResult(scope)
          }
        }) : [_vm._v(_vm._s(_vm.getFormatterResult(scope)))]] : [_vm._v("\n        " + _vm._s(scope.row[scope.column.property]) + "\n      ")]]];
      }
    }], null, true)
  }, "el-table-column", _vm.$attrs, false), _vm.$listeners), [_vm._v(" "), _vm.isNested ? [_vm._t("default")] : _vm._e()], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-77c884a6_0", {
    source: ".el-table-virtual-scroll .virtual-column__fixed-left,\n.el-table-virtual-scroll .virtual-column__fixed-right {\n  position: sticky !important;\n  z-index: 2 !important;\n  background: #fff;\n}\n.el-table-virtual-scroll.is-scrolling-left .is-last-column:before {\n  box-shadow: none;\n}\n.el-table-virtual-scroll.is-scrolling-right .is-last-column,\n.el-table-virtual-scroll.is-scrolling-middle .is-last-column {\n  border-right: none;\n}\n.el-table-virtual-scroll.is-scrolling-right .is-first-column:before {\n  box-shadow: none;\n}\n.el-table-virtual-scroll.is-scrolling-left .is-first-column,\n.el-table-virtual-scroll.is-scrolling-middle .is-first-column {\n  border-left: none;\n}\n.el-table-virtual-scroll .is-last-column,\n.el-table-virtual-scroll .is-first-column {\n  overflow: visible !important;\n}\n.el-table-virtual-scroll .is-last-column:before,\n.el-table-virtual-scroll .is-first-column:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  width: 10px;\n  bottom: -1px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  touch-action: none;\n  pointer-events: none;\n}\n.el-table-virtual-scroll .is-last-column:before {\n  right: -10px;\n  box-shadow: inset 10px 0 10px -10px rgba(0, 0, 0, 0.12);\n}\n.el-table-virtual-scroll .is-first-column:before {\n  left: -10px;\n  box-shadow: inset -10px 0 10px -10px rgba(0, 0, 0, 0.12);\n}\n.el-table-virtual-scroll.is-scrolling-none .is-last-column:before,\n.el-table-virtual-scroll.is-scrolling-none .is-first-column:before {\n  content: none;\n}\n",
    map: {
      "version": 3,
      "sources": ["el-table-virtual-column.vue"],
      "names": [],
      "mappings": "AAAA;;EAEE,2BAA2B;EAC3B,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;;EAEE,iBAAiB;AACnB;AACA;;EAEE,4BAA4B;AAC9B;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,YAAY;EACZ,uDAAuD;AACzD;AACA;EACE,WAAW;EACX,wDAAwD;AAC1D;AACA;;EAEE,aAAa;AACf",
      "file": "el-table-virtual-column.vue",
      "sourcesContent": [".el-table-virtual-scroll .virtual-column__fixed-left,\n.el-table-virtual-scroll .virtual-column__fixed-right {\n  position: sticky !important;\n  z-index: 2 !important;\n  background: #fff;\n}\n.el-table-virtual-scroll.is-scrolling-left .is-last-column:before {\n  box-shadow: none;\n}\n.el-table-virtual-scroll.is-scrolling-right .is-last-column,\n.el-table-virtual-scroll.is-scrolling-middle .is-last-column {\n  border-right: none;\n}\n.el-table-virtual-scroll.is-scrolling-right .is-first-column:before {\n  box-shadow: none;\n}\n.el-table-virtual-scroll.is-scrolling-left .is-first-column,\n.el-table-virtual-scroll.is-scrolling-middle .is-first-column {\n  border-left: none;\n}\n.el-table-virtual-scroll .is-last-column,\n.el-table-virtual-scroll .is-first-column {\n  overflow: visible !important;\n}\n.el-table-virtual-scroll .is-last-column:before,\n.el-table-virtual-scroll .is-first-column:before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  width: 10px;\n  bottom: -1px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  touch-action: none;\n  pointer-events: none;\n}\n.el-table-virtual-scroll .is-last-column:before {\n  right: -10px;\n  box-shadow: inset 10px 0 10px -10px rgba(0, 0, 0, 0.12);\n}\n.el-table-virtual-scroll .is-first-column:before {\n  left: -10px;\n  box-shadow: inset -10px 0 10px -10px rgba(0, 0, 0, 0.12);\n}\n.el-table-virtual-scroll.is-scrolling-none .is-last-column:before,\n.el-table-virtual-scroll.is-scrolling-none .is-first-column:before {\n  content: none;\n}\n"]
    },
    media: undefined
  });
};
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = undefined;
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

export { __vue_component__ as VirtualColumn, __vue_component__$2 as VirtualScroll, __vue_component__$2 as default };
