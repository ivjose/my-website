webpackHotUpdate(4,{

/***/ "./components/NavBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/joseivsantos/Documents/dev-work/sdg/myNextJs/components/NavBar.js";



var NavBar = function NavBar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "About")));
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_NavBar__ = __webpack_require__("./components/NavBar.js");
var _jsxFileName = "/Users/joseivsantos/Documents/dev-work/sdg/myNextJs/pages/index.js";



var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_NavBar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Home Page "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, " asda asdasdasd"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6f08a80d0caff9a003b9.hot-update.js.map