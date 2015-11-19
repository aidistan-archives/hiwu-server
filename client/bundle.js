webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(11);
	var Router = __webpack_require__(79);
	var Resource = __webpack_require__(112);

	// Install router
	Vue.use(Router);
	Vue.use(Resource);

	// Routing
	var router = new Router();

	router.map({
	  '/': {
	    name: 'home',
	    component: __webpack_require__(120)
	  },
	  '/archive': {
	    name: 'archive',
	    component: __webpack_require__(126),
	    subRoutes: {
	      '/galleries/:gallery_id': {
	        name: 'archive_gallery',
	        component: __webpack_require__(141),
	        subRoutes: {
	          '/items/:item_id': {
	            name: 'archive_gallery_item',
	            component: __webpack_require__(151)
	          }
	        }
	      }
	    }
	  },
	  '/today': {
	    name: 'today',
	    component: __webpack_require__(156),
	    subRoutes: {
	      '/galleries/:gallery_id': {
	        name: 'today_gallery',
	        component: __webpack_require__(141),
	        subRoutes: {
	          '/items/:item_id': {
	            name: 'today_gallery_item',
	            component: __webpack_require__(151)
	          }
	        }
	      },
	      '/items/:item_id': {
	        name: 'archive_item',
	        component: __webpack_require__(151)
	      }
	    }
	  },
	  '/galleries/:gallery_id': {
	    name: 'gallery',
	    component: __webpack_require__(141),
	    subRoutes: {
	      '/items/:item_id': {
	        name: 'gallery_item',
	        component: __webpack_require__(151)
	      }
	    }
	  },
	  '/items/:item_id': {
	    name: 'item',
	    component: __webpack_require__(151)
	  }
	});

	router.redirect({
	  '*': '/'
	});

	router.start(__webpack_require__(166), '#app');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(121)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(125)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Home.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Home.vue"], function () {
	var newOptions = null
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Home.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(122);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Home.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, "#home {\n  max-width: 792px; }\n\n#home-content img {\n  margin-top: 150px;\n  margin-bottom: 80px; }\n\n#home-corner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  right: 0;\n  width: 45px;\n  height: 45px;\n  border-left: solid 45px transparent;\n  border-top: solid 45px #3f3a39;\n  cursor: pointer; }\n  @media screen and (min-width: 481px) {\n    #home-corner {\n      display: none; } }\n", ""]);

	// exports


/***/ },
/* 123 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "<div id=\"home\" class=\"view am-container\"><div id=\"home-content\" class=\"am-text-center am-margin-sm\"><img src=\"/title.png\" alt=\"个人博物馆\" class=\"am-img-responsive am-center\"/><p>物的意义由人来完整，<br/>人的志趣由物来体现。</p><p>Wù『个人博物馆』是一个新型的博物馆，讲述个人与物品的情感故事。</p><p>人们建立自己的博物馆，浏览他人的博物馆。从而感知自身与他人的成长，了解物背后丰富的情感故事。</p><p>在这里，探索隐匿在时光里的珍贵物品，发现平凡中的感动，感受生活中的温热。</p></div><div id=\"home-corner\" v-link=\"{ name: 'today' }\"></div></div>";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(127)
	module.exports = __webpack_require__(129)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(140)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Archive.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Archive.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Archive.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Archive.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Archive.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Archive.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Archive.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, "#archive-content {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.archive-date {\n  color: #828383; }\n", ""]);

	// exports


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      data: {}
	    };
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get('http://palace.server.hiwu.ren/api/Today/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#archive-content').height($(window).height() - $('#archive-topbar').outerHeight(true));
	  },
	  components: {
	    topbar: __webpack_require__(130),
	    gallery: __webpack_require__(135)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(131)
	module.exports = __webpack_require__(133)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(134)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Topbar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Topbar.vue","-!vue-html!./../node_modules/vue-loader/lib/template-rewriter.js!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Topbar.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Topbar.vue")
	var newTemplate = require("-!vue-html!./../node_modules/vue-loader/lib/template-rewriter.js!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Topbar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(132);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Topbar.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Topbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, ".topbar[_v-0e36c12e] {\n  position: relative; }\n  .topbar a[_v-0e36c12e] {\n    color: inherit; }\n  .topbar hr[_v-0e36c12e] {\n    margin: 0;\n    border-bottom: solid 2px #cccdce; }\n", ""]);

	// exports


/***/ },
/* 133 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  props: {
	    title: {
	      type: String,
	      'default': ''
	    },
	    leftLink: {
	      'default': false
	    },
	    leftIcon: {
	      type: String,
	      'default': 'chevron-left'
	    },
	    rightLink: {
	      'default': false
	    },
	    rightIcon: {
	      type: String,
	      'default': 'chevron-right'
	    },
	    hasBorder: {
	      'default': false
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<div class=\"topbar\" _v-0e36c12e=\"\"><div class=\"am-text-center am-padding-sm\" _v-0e36c12e=\"\">{{ title }}<a v-show=\"leftLink\" v-link=\"leftLink\" :class=\"['am-icon-' + leftIcon]\" class=\"am-fl\" _v-0e36c12e=\"\"></a><a v-show=\"rightLink\" v-link=\"rightLink\" :class=\"['am-icon-' + rightIcon]\" class=\"am-fr\" _v-0e36c12e=\"\"></a></div><hr v-show=\"hasBorder\" _v-0e36c12e=\"\"></div>";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(136)
	module.exports = __webpack_require__(138)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(139)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./GalleryLine.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./GalleryLine.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./GalleryLine.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./GalleryLine.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./GalleryLine.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(137);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GalleryLine.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GalleryLine.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, ".gallery-line {\n  background-color: #fff; }\n  .gallery-line > a {\n    color: inherit; }\n  .gallery-line header img {\n    max-height: 45px; }\n  .gallery-line header .am-fr {\n    color: #828383; }\n", ""]);

	// exports


/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  props: ['data', 'link'],
	  computed: {
	    featureItems: function featureItems() {
	      return this.data.items.slice(0, 9);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gallery-line am-padding-horizontal-sm am-padding-vertical-xs\"><a v-link=\"link\"><header class=\"am-cf\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle am-fl am-margin-right\"/><div style=\"height: 45px;\" class=\"am-vertical-align am-fr\"><div class=\"am-vertical-align-middle\">{{ data.items.length }}</div></div><div style=\"height: 45px;\" class=\"am-vertical-align\"><div class=\"am-vertical-align-middle\">{{ data.hiwuUser.nickname }} 『{{ data.name }}』</div></div></header></a></div>";

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<div id=\"archive\" class=\"view\"><div id=\"archive-topbar\"><topbar title=\"往期博物展\" left-link=\"/today\" has-border=\"true\"></topbar></div><div id=\"archive-content\"><div class=\"archive-date am-text-sm am-margin-sm am-margin-bottom-xs\">2015年</div><gallery v-for=\"entry in data\" :data=\"entry.gallery\" :link=\"{ name: 'archive_gallery', params: { gallery_id: entry.gallery.id } }\" class=\"am-margin-sm\"></gallery></div><div id=\"archive-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142)
	module.exports = __webpack_require__(144)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(150)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Gallery.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Gallery.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Gallery.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Gallery.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Gallery.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Gallery.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Gallery.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, "#gallery {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n", ""]);

	// exports


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      data: {
	        name: '',
	        description: '',
	        items: [],
	        hiwuUser: { avatar: '' }
	      }
	    };
	  },
	  computed: {
	    leftLink: function leftLink() {
	      var matched = this.$route.matched;
	      if (matched.length > 1) {
	        matched = matched[matched.length - 2];
	        return { name: matched.handler.name, params: matched.params };
	      } else {
	        return '/';
	      }
	    }
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get('http://palace.server.hiwu.ren/api/Galleries/' + self.$route.params.gallery_id + '/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#gallery').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(130),
	    item: __webpack_require__(145)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(146)
	module.exports = __webpack_require__(148)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(149)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./ItemCard.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./ItemCard.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./ItemCard.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./ItemCard.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./ItemCard.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ItemCard.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ItemCard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, ".item-card {\n  background-color: #fff; }\n  .item-card > a {\n    color: inherit; }\n  .item-card img {\n    height: 9em; }\n  .item-card div {\n    padding: 0.5em; }\n  .item-card .name {\n    font-size: 1.2em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n", ""]);

	// exports


/***/ },
/* 148 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  props: ['data', 'link'],
	  data: function data() {
	    return {
	      textStyle: {
	        width: 0,
	        visibility: 'hidden'
	      }
	    };
	  },
	  computed: {
	    short_desc: function short_desc() {
	      var charNumPerLine = Math.floor(parseInt(this.textStyle.width) / 12);
	      var shortDescription = this.data.description.slice(0, charNumPerLine * 3 - 6);
	      return shortDescription.length < this.data.description.length ? shortDescription + '...' : shortDescription;
	    }
	  },
	  attached: function attached() {
	    var self = this;

	    setTimeout(function () {
	      self.textStyle.width = $('.item-card').width() - $('.item-card img').width() + 'px';
	      self.textStyle.visibility = 'visible';
	    }, 50);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item-card am-cf am-text-xs\"><a v-link=\"link\"><img :src=\"data.photos[0].url\" class=\"am-img-responsive am-fl\"/><div :style=\"textStyle\" class=\"name am-fl\">{{ data.name }}</div><div :style=\"textStyle\" class=\"desc am-fl\">{{ short_desc }}</div></a></div>";

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "<div id=\"gallery\" class=\"view\"><div id=\"gallery-topbar\"><topbar :left-link=\"leftLink\" class=\"am-margin-bottom\"></topbar></div><div id=\"gallery-header\" class=\"am-margin-sm\"><div class=\"am-g am-margin-bottom\"><div class=\"am-u-sm-3 am-u-sm-centered\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle am-center\"/></div></div><p class=\"am-text-lg am-text-center\">{{ data.hiwuUser.nickname }}『{{ data.name }}』</p><p class=\"am-text-xs\">{{ data.description }}</p></div><div id=\"gallery-items\"><item v-for=\"item in data.items\" :data=\"item\" :link=\"{ path: 'items/' + item.id, append: true }\" class=\"am-margin-sm\"></item></div><div id=\"gallery-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(152)
	module.exports = __webpack_require__(154)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(155)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Item.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Item.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Item.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Item.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Item.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(153);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Item.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, "#item {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n#item-photo {\n  position: relative; }\n\n#item-photo-above {\n  position: absolute;\n  bottom: 0; }\n  #item-photo-above .am-text-sm {\n    color: #cccdce;\n    background-color: rgba(63, 58, 57, 0.4); }\n\n#item-desc {\n  background-color: #A0E7EB; }\n  #item-desc span {\n    color: #828383; }\n", ""]);

	// exports


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      data: {
	        name: '',
	        description: '',
	        photos: [{ url: '' }],
	        comments: [],
	        hiwuUser: { avatar: '' }
	      }
	    };
	  },
	  computed: {
	    leftLink: function leftLink() {
	      var matched = this.$route.matched;
	      if (matched.length > 1) {
	        matched = matched[matched.length - 2];
	        return { name: matched.handler.name, params: matched.params };
	      } else {
	        return '/';
	      }
	    },
	    date: function date() {
	      var date = '';
	      if (this.data.date_y > 0) date += this.data.date_y;
	      // if (this.data.date_m > 0)
	      //   date += '.' + this.data.date_m;
	      // if (this.data.date_d > 0)
	      //   date += '.' + this.data.date_d;
	      return date;
	    }
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get('http://palace.server.hiwu.ren/api/Items/' + self.$route.params.item_id + '/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#item').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(130)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = "<div id=\"item\" class=\"view\"><div id=\"item-topbar\"><topbar :title=\"data.name\" :left-link=\"leftLink\"></topbar></div><div id=\"item-photo\" class=\"am-margin-horizontal-sm\"><img :src=\"data.photos[0].url\" class=\"am-img-responsive am-center\"/><div id=\"item-photo-above\" class=\"am-g am-margin-bottom-sm\"><div class=\"am-u-sm-2\"><div class=\"am-text-sm am-text-center\">{{ date }} <br/> {{ data.city }}</div></div><div class=\"am-u-sm-2\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-center\"/></div></div></div><div id=\"item-desc\" class=\"am-margin-horizontal-sm am-padding\"><h3>{{ data.name }}</h3><p class=\"am-text-xs\">{{ data.description }}</p><span class=\"am-icon-heart-o am-margin-right-sm\"></span><span class=\"am-margin-right\">{{ data.likes  }}</span><span class=\"am-icon-comment-o am-margin-right-sm\"></span><span>{{ data.comments.length }}</span><span class=\"am-icon-ellipsis-h am-fr\"></span></div><div id=\"item-comments\"><template v-for=\"comment in data.comments\">{{ comment | json }}</template></div></div>";

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(157)
	module.exports = __webpack_require__(159)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(165)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Today.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Today.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Today.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Today.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Today.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Today.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Today.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, "#today-galleries {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n", ""]);

	// exports


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      data: {}
	    };
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get('http://palace.server.hiwu.ren/api/Today/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#today-galleries').height($(window).height() - $('#today-topbar').outerHeight(true));
	  },
	  components: {
	    topbar: __webpack_require__(130),
	    gallery: __webpack_require__(160)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(161)
	module.exports = __webpack_require__(163)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(164)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./GalleryCard.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./GalleryCard.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./GalleryCard.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./GalleryCard.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./GalleryCard.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GalleryCard.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GalleryCard.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, ".gallery-card {\n  background-color: #fff; }\n  .gallery-card > a {\n    color: inherit; }\n  .gallery-card header img {\n    max-height: 45px; }\n  .gallery-card header .am-fr {\n    color: #828383; }\n", ""]);

	// exports


/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  props: ['data'],
	  computed: {
	    featureItems: function featureItems() {
	      return this.data.items.slice(0, 9);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gallery-card am-padding-sm\"><a v-link=\"{ path: 'galleries/' + data.id, append: true }\"><header class=\"am-cf am-margin-bottom-sm\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle am-fl am-margin-right\"/><div style=\"height: 45px;\" class=\"am-vertical-align am-fr\"><div class=\"am-vertical-align-middle\">{{ data.items.length }}</div></div><div style=\"height: 45px;\" class=\"am-vertical-align\"><div class=\"am-vertical-align-middle\">{{ data.hiwuUser.nickname }} 『{{ data.name }}』</div></div></header><div class=\"am-g am-g-collapse\"><div v-for=\"item in featureItems\" class=\"am-u-sm-4\"><a v-link=\"{ path: 'items/' + item.id, append: true }\"><img :src=\"item.photos[0].url\" style=\"padding: 1px;\" class=\"am-img-responsive\"/></a></div></div></a></div>";

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "<div id=\"today\" class=\"view\"><div id=\"today-topbar\"><topbar title=\"今日博物展\" left-link=\"/archive\" left-icon=\"bars\" has-border=\"true\"></topbar></div><div id=\"today-galleries\"><gallery v-for=\"entry in data\" :data=\"entry.gallery\" class=\"am-margin-sm am-margin-bottom\"></gallery></div><div id=\"today-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(167)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(169)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./App.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./App.vue"], function () {
	var newOptions = null
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./App.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(168);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(124)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(123)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-color: #e8e9eb; }\n\n.view {\n  background-color: #e8e9eb; }\n\n.view-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 169 */
/***/ function(module, exports) {

	module.exports = "<router-view></router-view>";

/***/ }
]);