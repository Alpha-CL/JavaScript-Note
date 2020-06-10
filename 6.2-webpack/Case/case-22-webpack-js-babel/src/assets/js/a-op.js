"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("regenerator-runtime/runtime");

var _obj$foo, _obj$foo$bar, _obj$qux;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var a = 1;

var b = function b() {};

function test() {
  var _this = this;

  var c = function c() {};
}

var rep = new Promise(function (resolve) {
  resolve();
});
var arr = [1, 2, 3, 4, 5];

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var i = _arr[_i];
}

function Atest() {
  return _Atest.apply(this, arguments);
}

function _Atest() {
  _Atest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Atest.apply(this, arguments);
}

var A = function A() {
  _classCallCheck(this, A);

  this.a = 1;
  this.b = 3;
};

function Print() {}

var obj = {
  loginId: "abc"
};
Print.call(obj);
var obj1 = {
  foo: {
    bar: {
      bax: 42
    }
  }
}; // if (obj1 && obj1.foo && obj1.foo.bar && obj1.foo.bar.bax === 42) {}

var bax = obj === null || obj === void 0 ? void 0 : (_obj$foo = obj.foo) === null || _obj$foo === void 0 ? void 0 : (_obj$foo$bar = _obj$foo.bar) === null || _obj$foo$bar === void 0 ? void 0 : _obj$foo$bar.bax; // 42

var safe = obj === null || obj === void 0 ? void 0 : (_obj$qux = obj.qux) === null || _obj$qux === void 0 ? void 0 : _obj$qux.bax; // undefined
