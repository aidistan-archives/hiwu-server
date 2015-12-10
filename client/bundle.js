webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(15);
	var Router = __webpack_require__(83);
	var Resource = __webpack_require__(116);

	// Install router
	Vue.use(Router);
	Vue.use(Resource);

	// Routing
	var router = new Router({
	  history: true
	});

	router.map({
	  '/': {
	    name: 'home',
	    component: __webpack_require__(124)
	  },
	  '/archive': {
	    name: 'archive',
	    component: __webpack_require__(130),
	    subRoutes: {
	      '/galleries/:gallery_id': {
	        name: 'archive_gallery',
	        component: __webpack_require__(145),
	        subRoutes: {
	          '/items/:item_id': {
	            name: 'archive_gallery_item',
	            component: __webpack_require__(155)
	          }
	        }
	      }
	    }
	  },
	  '/today': {
	    name: 'today',
	    component: __webpack_require__(163),
	    subRoutes: {
	      '/oauthlogin': {
	        name: 'today_oauthLogin',
	        component: __webpack_require__(173)
	      },
	      '/accountLogin': {
	        name: 'today_accountLogin',
	        component: __webpack_require__(178)
	      },
	      '/galleries/:gallery_id': {
	        name: 'today_gallery',
	        component: __webpack_require__(145),
	        subRoutes: {
	          '/items/:item_id': {
	            name: 'today_gallery_item',
	            component: __webpack_require__(155)
	          }
	        }
	      },
	      '/items/:item_id': {
	        name: 'today_item',
	        component: __webpack_require__(155)
	      },
	      '/me': {
	        name: 'today_me',
	        component: __webpack_require__(183)
	      }
	    }
	  },
	  '/galleries/:gallery_id': {
	    name: 'gallery',
	    component: __webpack_require__(145),
	    subRoutes: {
	      '/items/:item_id': {
	        name: 'gallery_item',
	        component: __webpack_require__(155)
	      }
	    }
	  },
	  '/items/:item_id': {
	    name: 'item',
	    component: __webpack_require__(155)
	  },
	  '/mine': {
	    name: 'mine',
	    component: __webpack_require__(188),
	    subRoutes: {
	      '/galleries/:gallery_id': {
	        name: 'mine_gallery',
	        component: __webpack_require__(145),
	        subRoutes: {
	          '/items/:item_id': {
	            name: 'mine_gallery_item',
	            component: __webpack_require__(155)
	          }
	        }
	      },
	      '/items/:item_id': {
	        name: 'mine_item',
	        component: __webpack_require__(155)
	      },
	      '/me': {
	        name: 'mine_me',
	        component: __webpack_require__(183)
	      }
	    }
	  }
	});

	router.beforeEach(function(transition) {
	  if (/^\/mine/.test(transition.to.path)) {
	    if (router.app.userId) {
	      transition.next();
	    } else {
	      transition.abort();
	    }
	  } else {
	    transition.next();
	  }
	});

	router.redirect({
	  '*': '/'
	});

	router.start(__webpack_require__(222), '#app');


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
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(125)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(129)
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#home {\n  max-width: 792px; }\n\n#home-content img {\n  margin-top: 150px;\n  margin-bottom: 80px; }\n\n#home-corner {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  right: 0;\n  width: 45px;\n  height: 45px;\n  border-left: solid 45px transparent;\n  border-top: solid 45px #3f3a39;\n  cursor: pointer; }\n  @media screen and (min-width: 481px) {\n    #home-corner {\n      display: none; } }\n", ""]);

	// exports


/***/ },
/* 127 */
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
/* 128 */
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
/* 129 */
/***/ function(module, exports) {

	module.exports = "<div id=\"home\" class=\"view am-container\"><div id=\"home-content\" class=\"am-text-center am-margin-sm\"><img src=\"/title.png\" alt=\"个人博物馆\" class=\"am-img-responsive am-center\"/><p>物的意义由人来完整，<br/>人的志趣由物来体现。</p><p>Wù『个人博物馆』是一个新型的博物馆，讲述个人与物品的情感故事。</p><p>人们建立自己的博物馆，浏览他人的博物馆。从而感知自身与他人的成长，了解物背后丰富的情感故事。</p><p>在这里，探索隐匿在时光里的珍贵物品，发现平凡中的感动，感受生活中的温热。</p></div><div id=\"home-corner\" v-link=\"{ name: 'today' }\"></div></div>";

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(131)
	module.exports = __webpack_require__(133)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(144)
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
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(132);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#archive {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n.archive-date {\n  color: #828383; }\n", ""]);

	// exports


/***/ },
/* 133 */
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

	    self.$http.get(self.$root.apiUrl + '/Today/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#archive').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(134),
	    gallery: __webpack_require__(139)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(135)
	module.exports = __webpack_require__(137)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(138)
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(136);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, ".topbar[_v-0e36c12e] {\n  position: relative; }\n  .topbar a[_v-0e36c12e] {\n    color: inherit; }\n  .topbar hr[_v-0e36c12e] {\n    margin: 0;\n    border-bottom: solid 2px #cccdce; }\n", ""]);

	// exports


/***/ },
/* 137 */
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
/* 138 */
/***/ function(module, exports) {

	module.exports = "<div class=\"topbar\" _v-0e36c12e=\"\"><div class=\"am-text-center am-padding-sm\" _v-0e36c12e=\"\">{{ title }}<a v-show=\"leftLink\" v-link=\"leftLink\" :class=\"['am-icon-' + leftIcon]\" class=\"am-fl\" _v-0e36c12e=\"\"></a><a v-show=\"rightLink\" v-link=\"rightLink\" :class=\"['am-icon-' + rightIcon]\" class=\"am-fr\" _v-0e36c12e=\"\"></a></div><hr v-show=\"hasBorder\" _v-0e36c12e=\"\"></div>";

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(140)
	module.exports = __webpack_require__(142)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(143)
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
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(141);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, ".gallery-line {\n  background-color: #fff; }\n  .gallery-line > a {\n    color: inherit; }\n  .gallery-line header img {\n    max-height: 45px; }\n  .gallery-line header .am-fr {\n    color: #828383; }\n", ""]);

	// exports


/***/ },
/* 142 */
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
/* 143 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gallery-line am-padding-horizontal-sm am-padding-vertical-xs\"><a v-link=\"link\"><header class=\"am-cf\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle am-fl am-margin-right\"/><div style=\"height: 45px;\" class=\"am-vertical-align am-fr\"><div class=\"am-vertical-align-middle\">{{ data.items.length }}</div></div><div style=\"height: 45px;\" class=\"am-vertical-align\"><div class=\"am-vertical-align-middle\">{{ data.hiwuUser.nickname }} 『{{ data.name }}』</div></div></header></a></div>";

/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<div id=\"archive\" class=\"view\"><div id=\"archive-topbar\"><topbar title=\"往期博物展\" left-link=\"/today\" has-border=\"true\"></topbar></div><div id=\"archive-content\"><div class=\"archive-date am-text-sm am-margin-sm am-margin-bottom-xs\">2015年</div><gallery v-for=\"entry in data\" :data=\"entry.gallery\" :link=\"{ name: 'archive_gallery', params: { gallery_id: entry.gallery.id } }\" class=\"am-margin-sm\"></gallery></div><div id=\"archive-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(146)
	module.exports = __webpack_require__(148)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(154)
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#gallery {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n", ""]);

	// exports


/***/ },
/* 148 */
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
	  created: function created(done) {
	    var self = this;

	    self.$http.get(self.$root.apiUrl + '/Galleries/' + self.$route.params.gallery_id + '/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#gallery').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(134),
	    item: __webpack_require__(149)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(150)
	module.exports = __webpack_require__(152)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(153)
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(151);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, ".item-card {\n  background-color: #fff; }\n  .item-card > a {\n    color: inherit; }\n  .item-card img {\n    width: 9em;\n    height: 9em; }\n  .item-card div {\n    padding: 0.5em; }\n  .item-card .name {\n    font-size: 1.2em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n", ""]);

	// exports


/***/ },
/* 152 */
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
/* 153 */
/***/ function(module, exports) {

	module.exports = "<div class=\"item-card am-cf am-text-xs\"><a v-link=\"link\"><img :src=\"data.photos[0].url\" class=\"am-img-responsive am-fl\"/><div :style=\"textStyle\" class=\"name am-fl\">{{ data.name }}</div><div :style=\"textStyle\" class=\"desc am-fl\">{{ short_desc }}</div></a></div>";

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "<div id=\"gallery\" class=\"view\"><div id=\"gallery-topbar\"><topbar :left-link=\"{ path: '..' }\" class=\"am-margin-bottom\"></topbar></div><div id=\"gallery-header\" class=\"am-margin-sm\"><div class=\"am-g am-margin-bottom\"><div class=\"am-u-sm-3 am-u-sm-centered\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle am-center\"/></div></div><p class=\"am-text-lg am-text-center\">{{ data.hiwuUser.nickname }}『{{ data.name }}』</p><p class=\"am-text-xs\">{{ data.description }}</p></div><div id=\"gallery-items\"><item v-for=\"item in data.items\" :data=\"item\" :link=\"{ path: 'items/' + item.id, append: true }\" class=\"am-margin-sm\"></item></div><div id=\"gallery-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(156)
	module.exports = __webpack_require__(158)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(162)
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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(157);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#item {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n#item-photo {\n  position: relative; }\n  #item-photo header {\n    position: absolute;\n    top: 0; }\n  #item-photo footer {\n    position: absolute;\n    bottom: 0; }\n    #item-photo footer .am-text-sm {\n      color: #cccdce;\n      background-color: rgba(63, 58, 57, 0.4); }\n\n#item-desc {\n  background-color: #A0E7EB; }\n  #item-desc span {\n    color: #828383;\n    cursor: pointer; }\n\n#item-box {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n#item-box-holder {\n  height: 33px; }\n", ""]);

	// exports


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var qs = __webpack_require__(159);

	exports['default'] = {
	  data: function data() {
	    return {
	      data: {
	        name: '',
	        description: '',
	        hiwuUser: { avatar: '' },
	        photos: [{ url: '' }],
	        comments: []
	      },
	      box: false,
	      comment: ''
	    };
	  },
	  computed: {
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
	  created: function created() {
	    this.refresh();
	  },
	  ready: function ready() {
	    $('#item').height($(window).height());
	  },
	  methods: {
	    refresh: function refresh() {
	      var self = this;

	      self.$http.get(self.$root.apiUrl + '/Items/' + self.$route.params.item_id + '/publicView?' + qs.stringify({
	        access_token: self.$root.accessToken
	      }), function (data, status, request) {
	        self.data = data;
	      });
	    },
	    like: function like() {
	      var self = this;

	      if (self.$root.userId) {
	        (self.data.liked ? self.$http['delete'] : self.$http.put).apply(self.$http, [self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '/likes/rel/' + self.data.id + '/?' + qs.stringify({
	          access_token: self.$root.accessToken
	        }), self.refresh]);
	      }
	    },
	    toggle: function toggle() {
	      this.box = !this.box;
	    },
	    submit: function submit() {
	      var self = this;
	      if (self.$root.userId) {
	        console.log(self.comment);

	        self.$http.post(self.$root.apiUrl + '/Items/' + self.data.id + '/comments?' + qs.stringify({
	          access_token: self.$root.accessToken
	        }), {
	          content: self.comment
	        }, self.refresh);

	        self.box = false;
	        self.comment = '';
	      }
	    }
	  },
	  components: {
	    topbar: __webpack_require__(134)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(160);
	exports.encode = exports.stringify = __webpack_require__(161);


/***/ },
/* 160 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },
/* 161 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return map(objectKeys(obj), function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (isArray(obj[k])) {
	        return map(obj[k], function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var isArray = Array.isArray || function (xs) {
	  return Object.prototype.toString.call(xs) === '[object Array]';
	};

	function map (xs, f) {
	  if (xs.map) return xs.map(f);
	  var res = [];
	  for (var i = 0; i < xs.length; i++) {
	    res.push(f(xs[i], i));
	  }
	  return res;
	}

	var objectKeys = Object.keys || function (obj) {
	  var res = [];
	  for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
	  }
	  return res;
	};


/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<div id=\"item\" class=\"view\"><div id=\"item-photo\" class=\"am-margin-horizontal-sm am-margin-top-sm\"><img :src=\"data.photos[0].url\" class=\"am-img-responsive am-center\"/><header class=\"am-g am-margin-top-sm\"><div class=\"am-u-sm-2\"><a v-link=\"{ path: '..' }\" class=\"am-icon-chevron-left am-link-muted\"></a></div></header><footer class=\"am-g am-margin-bottom-sm\"><div class=\"am-u-sm-2\"><div class=\"am-text-sm am-text-center\">{{ date }} <br/> {{ data.city }}</div></div><div class=\"am-u-sm-2\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle\"/></div></footer></div><div id=\"item-desc\" class=\"am-margin-horizontal-sm am-padding\"><h3>{{ data.name }}</h3><p class=\"am-text-xs\">{{ data.description }}</p><span id=\"item-desc-like\" @click=\"like\"><i v-show=\"data.liked\" class=\"am-icon-heart am-text-danger am-margin-right-sm\"></i><i v-show=\"!data.liked\" class=\"am-icon-heart-o am-margin-right-sm\"></i><span>{{ data.likes  }}</span></span><span class=\"am-margin-right\"></span><span id=\"item-desc-comment\" @click=\"toggle\"><i class=\"am-icon-comment-o am-margin-right-sm\"></i><span>{{ data.comments.length }}</span></span><span class=\"am-icon-ellipsis-h am-fr\"></span></div><div id=\"item-comments\" class=\"am-margin-sm am-text-sm\"><template v-for=\"comment in data.comments\"><div class=\"am-magrin-sm\"><strong>{{ comment.hiwuUser.nickname }}</strong>：{{ comment.content }}</div></template></div><div id=\"item-box\" v-show=\"box\" class=\"am-padding-bottom-xs am-padding-horizontal-sm\"><input v-model=\"comment\" placeHolder=\"请输入评论内容\" @keyup.enter=\"submit\" class=\"am-form-field am-input-sm\"/></div><div id=\"item-box-holder\" v-show=\"box\"></div></div>";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(164)
	module.exports = __webpack_require__(166)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(172)
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#today {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n#today-topbar {\n  position: relative; }\n  #today-topbar a:last-child {\n    background: #F4D137;\n    position: absolute;\n    top: 0;\n    right: 0; }\n", ""]);

	// exports


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      data: {}
	    };
	  },
	  computed: {
	    rightLink: function rightLink() {
	      return { name: this.$root.userId ? 'today_me' : 'today_oauthLogin' };
	    }
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get(self.$root.apiUrl + '/Today/publicView', function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#today').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(134),
	    gallery: __webpack_require__(167)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(168)
	module.exports = __webpack_require__(170)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(171)
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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, ".gallery-card {\n  background-color: #fff; }\n  .gallery-card > a {\n    color: inherit; }\n  .gallery-card header img {\n    max-height: 45px; }\n  .gallery-card header .am-fr {\n    color: #828383; }\n", ""]);

	// exports


/***/ },
/* 170 */
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
/* 171 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gallery-card am-padding-sm\"><a v-link=\"{ path: 'galleries/' + data.id, append: true }\"><header class=\"am-cf am-margin-bottom-sm\"><img :src=\"data.hiwuUser.avatar\" class=\"am-img-responsive am-circle am-fl am-margin-right\"/><div style=\"height: 45px;\" class=\"am-vertical-align am-fr\"><div class=\"am-vertical-align-middle\">{{ data.items.length }}</div></div><div style=\"height: 45px;\" class=\"am-vertical-align\"><div class=\"am-vertical-align-middle\">{{ data.hiwuUser.nickname }} 『{{ data.name }}』</div></div></header><div class=\"am-g am-g-collapse\"><div v-for=\"item in featureItems\" class=\"am-u-sm-4\"><a v-link=\"{ path: 'items/' + item.id, append: true }\"><img :src=\"item.photos[0].url\" style=\"padding: 1px;\" class=\"am-img-responsive\"/></a></div></div></a></div>";

/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<div id=\"today\" class=\"view\"><div id=\"today-topbar\"><topbar title=\"每日博物展\" left-link=\"/archive\" left-icon=\"bars\" has-border=\"true\"></topbar><a v-link=\"rightLink\" class=\"am-round am-margin-sm\"><img src=\"/logo-48.png\" alt=\"登陆\" width=\"25.6\" height=\"25.6\"/></a></div><div id=\"today-galleries\"><gallery v-for=\"entry in data\" :data=\"entry.gallery\" class=\"am-margin-sm am-margin-bottom\"></gallery></div><div id=\"today-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(174)
	module.exports = __webpack_require__(176)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(177)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./OauthLogin.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./OauthLogin.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./OauthLogin.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./OauthLogin.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./OauthLogin.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(175);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./OauthLogin.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./OauthLogin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#login {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  #login .am-g:last-child {\n    position: absolute;\n    bottom: 0; }\n", ""]);

	// exports


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var qs = __webpack_require__(159);

	exports['default'] = {
	  data: function data() {
	    return {
	      username: '',
	      password: ''
	    };
	  },
	  computed: {
	    weixinLink: function weixinLink() {
	      return 'https://open.weixin.qq.com/connect/qrconnect?' + qs.stringify({
	        appid: this.$root.oauth2.weixin,
	        redirect_uri: window.location.href.split('?')[0],
	        response_type: 'code',
	        scope: 'snsapi_login',
	        state: 'weixin'
	      }) + '#wechat_redirect';
	    },
	    weiboLink: function weiboLink() {
	      return 'https://api.weibo.com/oauth2/authorize?' + qs.stringify({
	        client_id: this.$root.oauth2.weibo,
	        redirect_uri: window.location.href.split('?')[0],
	        state: 'weibo'
	      });
	    }
	  },
	  created: function created() {
	    var self = this;
	    var params = qs.parse(window.location.hash.split('?')[1]);
	    if (params.state === 'weixin' && params.code) {
	      self.$http.post(self.$root.apiUrl + '/HiwuUsers/weixinLogin?code=' + params.code, function (data, status, request) {
	        self.$root.login(data);
	        self.$route.router.go({ name: 'today' });
	      });
	    } else if (params.state === 'weibo' && params.code) {
	      self.$http.post(self.$root.apiUrl + '/HiwuUsers/weiboLogin?code=' + params.code, function (data, status, request) {
	        self.$root.login(data);
	        self.$route.router.go({ name: 'today' });
	      });
	    }
	  },
	  ready: function ready() {
	    $('#login').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(134)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<div id=\"login\" class=\"view\"><div id=\"login-topbar\"><topbar :left-link=\"{ path: '.' }\" left-icon=\"times\"></topbar></div><div class=\"am-g am-margin-top-xl am-padding-xl\"><div class=\"am-u-sm-6 am-u-sm-centered\"><img src=\"/logo-1024.png\" alt=\"物境未觉\" class=\"am-img-responsive am-center\"/></div></div><div class=\"am-g\"><div class=\"am-u-sm-10 am-u-sm-centered\"><a :href=\"weixinLink\" class=\"am-btn am-btn-success am-btn-lg am-btn-block am-margin-bottom-lg\"><i class=\"am-icon-weixin am-margin-right-sm\"></i><span>微信登陆</span></a><a :href=\"weiboLink\" class=\"am-btn am-btn-danger am-btn-lg am-btn-block am-margin-bottom-lg\"><i class=\"am-icon-weibo am-margin-right-sm\"></i><span>微博登陆</span></a></div></div><div class=\"am-g\"><div class=\"am-u-sm-10 am-u-sm-centered am-margin-bottom am-text-center\"><a v-link=\"{ name: 'today_accountLogin' }\" class=\"am-link-muted am-text-sm\">受邀用户登陆 &gt;</a></div></div></div>";

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(179)
	module.exports = __webpack_require__(181)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(182)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./AccountLogin.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./AccountLogin.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./AccountLogin.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./AccountLogin.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./AccountLogin.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(180);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AccountLogin.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AccountLogin.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#login {\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  #login .am-g:last-child {\n    position: absolute;\n    bottom: 0; }\n", ""]);

	// exports


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      username: '',
	      password: ''
	    };
	  },
	  ready: function ready() {
	    $('#login').height($(window).height());
	  },
	  methods: {
	    login: function login() {
	      if (this.username === '') return;

	      var self = this;
	      self.$http.post(self.$root.apiUrl + '/HiwuUsers/simpleLogin?username=' + self.username, function (data, status, request) {
	        self.$root.login(data);
	        self.$route.router.go({ name: 'today' });
	      });
	    }
	  },
	  components: {
	    topbar: __webpack_require__(134)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = "<div id=\"login\" class=\"view\"><div id=\"login-topbar\"><topbar :left-link=\"{ path: '.' }\" left-icon=\"times\"></topbar></div><div class=\"am-g am-margin-top-xl am-padding-xl\"><div class=\"am-u-sm-6 am-u-sm-centered\"><img src=\"/logo-1024.png\" alt=\"物境未觉\" class=\"am-img-responsive am-center\"/></div></div><div class=\"am-g\"><div class=\"am-u-sm-10 am-u-sm-centered\"><form class=\"am-form\"><div class=\"am-form-group\"><input type=\"text\" v-model=\"username\" placeholder=\"用户名\"/></div><div class=\"am-form-group\"><input type=\"password\" v-model=\"password\" placeholder=\"密码\"/><a v-link=\"{ path: '.' }\"><div class=\"am-form-help am-text-right\">忘记密码</div></a></div><div class=\"am-form-group\"><a @click=\"login\" class=\"am-btn am-btn-primary am-btn-block\">登陆</a></div></form></div></div><div class=\"am-g\"><div class=\"am-u-sm-10 am-u-sm-centered am-margin-bottom am-text-center\"><a v-link=\"{ name: 'today_oauthLogin' }\" class=\"am-link-muted am-text-sm\">社交账号登陆 &gt;</a></div></div></div>";

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(184)
	module.exports = __webpack_require__(186)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(187)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Me.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Me.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Me.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Me.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Me.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Me.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Me.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#me {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n  #me a.am-link-muted {\n    cursor: pointer; }\n\n#me-basic a:first-child .am-vertical-align,\n#me-basic a:first-child .am-vertical-align-middle {\n  position: relative;\n  width: 100%; }\n\n#me-basic a:first-child img {\n  position: absolute;\n  top: 0;\n  right: 0; }\n", ""]);

	// exports


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	var querystring = __webpack_require__(159);

	exports['default'] = {
	  data: function data() {
	    return {
	      data: {},
	      modalTitle: '',
	      modalInput: ''
	    };
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get(self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
	      access_token: self.$root.accessToken
	    }), function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#me').height($(window).height());
	  },
	  methods: {
	    prompt: function prompt(property) {
	      var self = this;

	      // Use relatedTarget to pass the property name, since onConfirm is only
	      // binded at the first time.
	      $('#me-prompt').modal({
	        relatedTarget: property,
	        onConfirm: function onConfirm() {
	          var data = {};
	          data[this.relatedTarget] = self.modalInput;

	          self.$http.put(self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
	            access_token: self.$root.accessToken
	          }), data, function (data, status, request) {
	            self.data = data;
	          });
	        }
	      });
	    },
	    promptNickname: function promptNickname() {
	      this.modalTitle = '更新昵称';
	      this.modalInput = this.data.nickname;
	      this.prompt('nickname');
	    },
	    promptDescription: function promptDescription() {
	      this.modalTitle = '更新简介';
	      this.modalInput = this.data.description;
	      this.prompt('description');
	    },
	    logout: function logout() {
	      this.$root.logout();
	      this.$route.router.go({ name: 'today' });
	    }
	  },
	  components: {
	    topbar: __webpack_require__(134),
	    gallery: __webpack_require__(167)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports) {

	module.exports = "<div id=\"me\" class=\"view\"><div id=\"me-topbar\"><topbar title=\"馆长设置\" :left-link=\"{ path: '.' }\" has-border=\"true\"></topbar></div><div id=\"me-basic\" class=\"am-panel am-margin-sm\"><div class=\"am-panel-bd\"><a class=\"am-link-muted\"><div style=\"height:48px\" class=\"am-vertical-align\"><div class=\"am-vertical-align-middle\"><span class=\"am-fl\">头像</span><i class=\"am-fr am-icon-angle-right am-icon-sm\"></i></div><img :src=\"data.avatar\" height=\"48\" width=\"48\" class=\"am-fr am-circle am-margin-right-xl\"/></div></a><hr/><a @click=\"promptNickname\" class=\"am-link-muted\"><div class=\"am-cf\"><span class=\"am-fl\">昵称</span><i class=\"am-fr am-icon-angle-right am-icon-sm\"></i><span class=\"am-fr am-margin-right-lg\">{{ data.nickname }}</span></div></a><hr/><a @click=\"promptDescription\" class=\"am-link-muted\"><div class=\"am-cf\"><span class=\"am-fl\">简介</span><i class=\"am-fr am-icon-angle-right am-icon-sm\"></i><span class=\"am-fr am-margin-right-lg\">{{ data.description }}</span></div></a></div></div><div id=\"me-more\" class=\"am-panel am-margin-sm\"><div class=\"am-panel-bd\"><a @click=\"logout\" class=\"am-link-muted\"><div>注销登陆</div></a></div></div><div id=\"me-prompt\" tabindex=\"-1\" class=\"am-modal am-modal-prompt\"><div class=\"am-modal-dialog\"><div class=\"am-modal-hd\">{{ modalTitle }}</div><div class=\"am-modal-bd\"><input type=\"text\" v-model=\"modalInput\" class=\"am-modal-prompt-input\"/></div><div class=\"am-modal-footer\"><span data-am-modal-cancel=\"data-am-modal-cancel\" class=\"am-modal-btn\">取消</span><span data-am-modal-confirm=\"data-am-modal-confirm\" class=\"am-modal-btn\">提交</span></div></div></div></div>";

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189)
	module.exports = __webpack_require__(191)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(221)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Mine.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Mine.vue","-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Mine.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Mine.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Mine.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Mine.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Mine.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "#mine {\n  overflow-x: hidden;\n  overflow-y: scroll; }\n\n#mine-topbar {\n  position: relative; }\n  #mine-topbar > a {\n    position: absolute;\n    top: 0;\n    right: 0; }\n    #mine-topbar > a > img {\n      background: #F4D137; }\n\n#mine-info {\n  cursor: pointer; }\n\n#mine-stat > span {\n  background-color: #fff; }\n", ""]);

	// exports


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator = __webpack_require__(192)['default'];

	exports.__esModule = true;
	var querystring = __webpack_require__(159);

	exports['default'] = {
	  data: function data() {
	    return {
	      data: {
	        nickname: '',
	        description: '',
	        avatar: '',
	        galleries: []
	      }
	    };
	  },
	  computed: {
	    itemNum: function itemNum() {
	      var num = 0;
	      for (var _iterator = this.data.galleries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var gallery = _ref;

	        num += gallery.items.length;
	      }
	      return num;
	    }
	  },
	  created: function created(done) {
	    var self = this;

	    self.$http.get(self.$root.apiUrl + '/HiwuUsers/' + self.$root.userId + '?' + querystring.stringify({
	      access_token: self.$root.accessToken,
	      filter: JSON.stringify({
	        include: {
	          galleries: [{ items: ['photos'] }, 'hiwuUser']
	        }
	      })
	    }), function (data, status, request) {
	      self.data = data;
	    });
	  },
	  ready: function ready() {
	    $('#mine').height($(window).height());
	  },
	  components: {
	    topbar: __webpack_require__(134),
	    gallery: __webpack_require__(167)
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(193), __esModule: true };

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194);
	__webpack_require__(214);
	module.exports = __webpack_require__(217);

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(195);
	var Iterators = __webpack_require__(198);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(196)
	  , step       = __webpack_require__(197)
	  , Iterators  = __webpack_require__(198)
	  , toIObject  = __webpack_require__(199);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(202)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(200)
	  , defined = __webpack_require__(107);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(201);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(203)
	  , $def            = __webpack_require__(97)
	  , $redef          = __webpack_require__(204)
	  , hide            = __webpack_require__(205)
	  , has             = __webpack_require__(208)
	  , SYMBOL_ITERATOR = __webpack_require__(209)('iterator')
	  , Iterators       = __webpack_require__(198)
	  , $iterCreate     = __webpack_require__(212)
	  , setTag          = __webpack_require__(213)
	  , getProto        = __webpack_require__(110).getProto
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if((!LIBRARY || FORCE) && (BUGGY || !(SYMBOL_ITERATOR in proto))){
	    hide(proto, SYMBOL_ITERATOR, _default);
	  }
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEFAULT == VALUES ? _default : getMethod(VALUES),
	      keys:    IS_SET            ? _default : getMethod(KEYS),
	      entries: DEFAULT != VALUES ? _default : getMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(205);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(110)
	  , createDesc = __webpack_require__(206);
	module.exports = __webpack_require__(207) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(100)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 208 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(210)('wks')
	  , uid    = __webpack_require__(211)
	  , Symbol = __webpack_require__(98).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(98)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 211 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(110)
	  , descriptor = __webpack_require__(206)
	  , setTag     = __webpack_require__(213)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(205)(IteratorPrototype, __webpack_require__(209)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(110).setDesc
	  , has = __webpack_require__(208)
	  , TAG = __webpack_require__(209)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(215)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(202)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(216)
	  , defined   = __webpack_require__(107);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(218)
	  , get      = __webpack_require__(219);
	module.exports = __webpack_require__(99).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(95);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(220)
	  , ITERATOR  = __webpack_require__(209)('iterator')
	  , Iterators = __webpack_require__(198);
	module.exports = __webpack_require__(99).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(201)
	  , TAG = __webpack_require__(209)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<div id=\"mine\" class=\"view\"><div id=\"mine-topbar\" class=\"am-padding-sm\"><a v-link=\"{ name: 'today' }\"><img src=\"/logo-48.png\" alt=\"今日博物展\" width=\"25.6\" height=\"25.6\" class=\"am-margin-sm am-round\"/></a><div id=\"mine-info\" v-link=\"{ path: 'me', append: true }\" class=\"am-cf\"><img :src=\"data.avatar\" height=\"48\" class=\"am-circle am-fl am-margin-right\"/><div class=\"am-text-lg\">{{ data.nickname }}</div><div class=\"am-text-xs\">{{ data.description }}</div></div><div id=\"mine-stat\" class=\"am-margin-top\"><span class=\"am-margin-vertical am-padding-xs am-padding-horizontal am-round am-text-sm\"><span>{{ data.galleries.length }} 长廊</span><span class=\"am-margin-right-lg\"></span><span>{{ itemNum }} 物品</span></span></div></div><div id=\"mine-galleries\"><gallery v-for=\"gallery in data.galleries\" :data=\"gallery\" class=\"am-margin-sm am-margin-bottom\"></gallery></div><div id=\"mine-child\" class=\"view-wrapper\"><router-view></router-view></div></div>";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)
	module.exports = __webpack_require__(225)
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(226)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel?optional[]=runtime&loose=all&nonStandard=false!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./App.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel?optional[]=runtime&loose=all&nonStandard=false!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./App.vue","-!vue-html!template-html?raw&engine=jade!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./App.vue"], function () {
	var newOptions = require("-!babel?optional[]=runtime&loose=all&nonStandard=false!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./App.vue")
	var newTemplate = require("-!vue-html!template-html?raw&engine=jade!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./App.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(224);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(128)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-rewriter.js!./node_modules/sass-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-rewriter.js!./node_modules/sass-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=style&index=0!./App.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(127)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-color: #e8e9eb; }\n\n.view {\n  background-color: #e8e9eb; }\n\n.view-wrapper {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  left: 0; }\n", ""]);

	// exports


/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = {
	  data: function data() {
	    return {
	      userId: null,
	      accessToken: null,
	      oauth2: {
	        weixin: 'wx92f55323cbadd8e8',
	        weibo: '3167931574'
	      }
	    };
	  },
	  computed: {
	    apiUrl: function apiUrl() {
	      // Extract the api url from window.location or give it directly
	      if (false) {
	        return window.location.protocol + '//' + window.location.host + '/api';
	      } else {
	        return 'http://palace.server.hiwu.ren/api';
	      }
	    }
	  },
	  ready: function ready() {
	    this.userId = this.getCookie('userId');
	    this.accessToken = this.getCookie('accessToken');
	  },
	  methods: {
	    login: function login(accessToken) {
	      this.userId = accessToken.userId;
	      this.setCookie('userId', accessToken.userId, 30);
	      this.accessToken = accessToken.id;
	      this.setCookie('accessToken', accessToken.id, 30);
	    },
	    logout: function logout() {
	      this.userId = null;
	      this.setCookie('userId', '', 0);
	      this.accessToken = null;
	      this.setCookie('accessToken', '', 0);
	    },
	    setCookie: function setCookie(name, value, expireDate) {
	      var exdate = new Date();
	      exdate.setDate(exdate.getDate() + expireDate);
	      document.cookie = name + '=' + escape(value) + (expireDate == null ? '' : ';expires=' + exdate.toGMTString());
	    },
	    getCookie: function getCookie(name) {
	      if (document.cookie.length > 0) {
	        var start = document.cookie.indexOf(name + '=');
	        if (start !== -1) {
	          start = start + name.length + 1;
	          var end = document.cookie.indexOf(';', start);
	          if (end === -1) end = document.cookie.length;
	          return unescape(document.cookie.substring(start, end));
	        }
	      }
	      return null;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports) {

	module.exports = "<router-view></router-view>";

/***/ }
]);