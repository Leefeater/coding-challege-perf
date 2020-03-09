module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/Blog/BlogPostPreview.js":
/*!*************************************!*\
  !*** ./app/Blog/BlogPostPreview.js ***!
  \*************************************/
/*! exports provided: BlogPostPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostPreview", function() { return BlogPostPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./app/Blog/Content.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nhargitt/Documents/convertly/janky2/app/Blog/BlogPostPreview.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BlogPostPreview__PostWrapper",
  componentId: "q0b8oa-0"
})(["border:1px solid #f1f1f1;border-radius:3px;position:relative;background-image:url(https://convertlyimguploadeast.s3.amazonaws.com/", "/", ");background-size:cover;overflow:hidden;"], ({
  siteId
}) => siteId, ({
  img
}) => img);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BlogPostPreview__ContentWrapper",
  componentId: "q0b8oa-1"
})(["position:absolute;bottom:-100%;transition:all 1s ease;width:100%;background:#fff;"]);
const ContentModal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "BlogPostPreview__ContentModal",
  componentId: "q0b8oa-2"
})(["height:80vh;width:80vw;position:fixed;transition:all 1s ease;background:#fff;border:1px solid #f1f1f1;border-radius:5px;z-index:1;", " & span{position:absolute;top:5px;right:5px;cursor:pointer;}"], ({
  active
}) => active ? `left:10vw;
    top:10vh;` : `left:-100vw;
    top:-100vh;
    `);
const BlogPostPreview = ({
  id,
  fetchBlogPost,
  index,
  siteId,
  activeId,
  updateActiveId
}) => {
  const {
    0: blogData,
    1: updateBlogData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  let slider;
  fetchBlogPost(id).then(res => {
    updateBlogData(res);
  });

  const slideUp = () => {
    if (slider) slider.style.bottom = "0";
  };

  const slideDown = () => {
    if (slider) slider.style.bottom = "-100%";
  };

  return __jsx(PostWrapper, {
    siteId: siteId,
    onMouseOver: slideUp,
    onMouseOut: slideDown,
    img: blogData.featureImage ? blogData.featureImage.src : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, (blogData === null || blogData === void 0 ? void 0 : blogData.itemType) ? __jsx(ContentWrapper, {
    ref: el => slider = el,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx(_Content__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    title: blogData.postTitle,
    author: blogData.author,
    id: id,
    updateActiveId: updateActiveId,
    shortDescription: blogData.shortDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Loading...."), __jsx(ContentModal, {
    active: activeId === id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("span", {
    onClick: () => {
      updateActiveId(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "X"), react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(blogData.postContent)));
}; //url(https://convertlyimguploadeast.s3.amazonaws.com//xyz.jpg})

/***/ }),

/***/ "./app/Blog/Content.js":
/*!*****************************!*\
  !*** ./app/Blog/Content.js ***!
  \*****************************/
/*! exports provided: Content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nhargitt/Documents/convertly/janky2/app/Blog/Content.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Content__Wrapper",
  componentId: "sc-1qjm4df-0"
})(["padding:10px;& h1{font-size:25px;margin:0;}& small{font-size:8px;}& p{font-size:12px;}"]);
const Content = props => {
  return __jsx(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, props.title), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "By ", props.author && props.author.name, " - "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.shortDescription)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => {
      props.updateActiveId(props.id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "View More")));
};

/***/ }),

/***/ "./app/Blog/index.js":
/*!***************************!*\
  !*** ./app/Blog/index.js ***!
  \***************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/graph */ "./app/utils/graph.js");
/* harmony import */ var _BlogPostPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogPostPreview */ "./app/Blog/BlogPostPreview.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/nhargitt/Documents/convertly/janky2/app/Blog/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "Blog__BlogWrapper",
  componentId: "cpre2j-0"
})(["display:grid;grid-auto-rows:400px;grid-template-columns:repeat(3,30%);grid-gap:40px 40px;width:100vw;padding:40px;"]);
class Blog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPostsIds: [],
      siteId: "a402fab0-dfc9-11e9-815b-41f22eba7175",
      activeId: false
    };
    this.fetchBlogPost = this.fetchBlogPost.bind(this);
    this.updateActiveId = this.updateActiveId.bind(this);
  }

  getBlogPostsIds() {
    Object(_utils_graph__WEBPACK_IMPORTED_MODULE_1__["getAllGraphPosts"])().then(res => {
      this.setState({
        blogPostsIds: res.blogPosts
      });
    });
  }

  async fetchBlogPost(id) {
    return await Object(_utils_graph__WEBPACK_IMPORTED_MODULE_1__["getGraphPost"])(id);
  }

  updateActiveId(id) {
    this.setState({
      activeId: id
    });
  }

  componentDidMount() {
    this.getBlogPostsIds();
  }

  render() {
    return __jsx(BlogWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, this.state.blogPostsIds.map((id, index) => {
      return __jsx(_BlogPostPreview__WEBPACK_IMPORTED_MODULE_2__["BlogPostPreview"], {
        id: id,
        siteId: this.state.siteId,
        activeId: this.state.activeId,
        updateActiveId: this.updateActiveId,
        index: index,
        fetchBlogPost: this.fetchBlogPost,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      });
    }));
  }

}

/***/ }),

/***/ "./app/utils/graph.js":
/*!****************************!*\
  !*** ./app/utils/graph.js ***!
  \****************************/
/*! exports provided: getAllGraphPosts, getGraphPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllGraphPosts", function() { return getAllGraphPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphPost", function() { return getGraphPost; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getAllGraphPosts = async () => {
  const params = {
    url: "api/getAllBlogPosts",
    method: "post"
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(params);
  return response.data;
};
const getGraphPost = async id => {
  console.log('calling');
  const params = {
    url: "api/getBlogPost",
    method: "post",
    headers: {
      "post-id": id
    }
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(params);
  return response.data.blogPost;
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/Blog */ "./app/Blog/index.js");
var _jsxFileName = "/Users/nhargitt/Documents/convertly/janky2/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function page() {
  return __jsx(_app_Blog__WEBPACK_IMPORTED_MODULE_1__["Blog"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nhargitt/Documents/convertly/janky2/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map