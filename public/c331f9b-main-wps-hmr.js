"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatenetlify_cms_markdown_columns_widget"]("main",{

/***/ "./dev/index.js":
/*!**********************!*\
  !*** ./dev/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! ./bootstrap.js */ \"./dev/bootstrap.js\");\n\nvar _netlifyCms = __webpack_require__(/*! netlify-cms */ \"./node_modules/netlify-cms/dist/netlify-cms.js\");\n\nvar _netlifyCms2 = _interopRequireDefault(_netlifyCms);\n\n__webpack_require__(/*! netlify-cms/dist/cms.css */ \"./node_modules/netlify-cms/dist/cms.css\");\n\nvar _src = __webpack_require__(/*! ../src */ \"./src/index.js\");\n\n__webpack_require__(/*! bulma/css/bulma.min.css */ \"./node_modules/bulma/css/bulma.min.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar config = {\n  backend: {\n    name: 'test-repo',\n    login: false\n  },\n  media_folder: 'assets',\n  collections: [{\n    name: 'test',\n    label: 'Test',\n    files: [{\n      file: 'test.yml',\n      name: 'test',\n      label: 'Test',\n      fields: [{ label: \"Body\", name: \"body\", widget: \"markdown\", editor_components: ['image', 'code-block', 'columns-layout'] }]\n    }]\n  }]\n};\n\n_netlifyCms2.default.registerEditorComponent({\n  // Internal id of the component\n  id: \"columns-layout\",\n  // Visible label\n  label: \"Columns\",\n  name: 'columns',\n  // Fields the user need to fill out when adding an instance of the component\n  fields: [{\n    name: 'class',\n    label: 'Class',\n    widget: 'string',\n    default: 'column'\n  }, {\n    name: 'content',\n    label: 'Content',\n    widget: 'markdown',\n    default: 'Lorem Ipsum...'\n  }, {\n    name: 'class2',\n    label: 'Class2',\n    widget: 'string',\n    default: 'column'\n  }, {\n    name: 'content2',\n    label: 'Content2',\n    widget: 'markdown',\n    default: 'Lorem Ipsum...'\n  }],\n  // Regex pattern used to search for instances of this block in the markdown document.\n  // Patterns are run in a multline environment (against the entire markdown document),\n  // and so generally should make use of the multiline flag (`m`). If you need to capture\n  // newlines in your capturing groups, you can either use something like\n  // `([\\S\\s]*)`, or you can additionally enable the \"dot all\" flag (`s`),\n  // which will cause `(.*)` to match newlines as well.\n  //\n  // Additionally, it's recommended that you use non-greedy capturing groups (e.g.\n  // `(.*?)` vs `(.*)`), especially if matching against newline characters.\n  pattern: /^<columns>$\\s(.*?)<\\/columns>\\n\\n/ms,\n  // Given a RegExp Match object\n  // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match#return_value),\n  // return an object with one property for each field defined in `fields`.\n  //\n  // This is used to populate the custom widget in the markdown editor in the CMS.\n  fromBlock: function fromBlock(match) {\n    return {\n      class: match[1],\n      content: match[2],\n      class2: match[3],\n      content2: match[4]\n    };\n  },\n  // Given an object with one property for each field defined in `fields`,\n  // return the string you wish to be inserted into your markdown.\n  //\n  // This is used to serialize the data from the custom widget to the\n  // markdown document\n  toBlock: function toBlock(data) {\n    return '\\n<columns>\\n<div class=\"columns\">\\n<div class=\"' + data.class + '\">' + data.content + '</div>\\n<div class=\"' + data.class2 + '\">' + data.content2 + '</div>\\n</div>\\n</columns>\\n';\n  },\n  // Preview output for this component. Can either be a string or a React component\n  // (component gives better render performance)\n  toPreview: function toPreview(data) {\n    return '\\n<columns>\\n<div class=\"columns\">\\n  <div class=\"' + data.class + '\">' + data.content + '</div>\\n  <div class=\"' + data.class2 + '\">' + data.content2 + '</div>\\n</div>\\n</columns>\\n';\n  }\n});\n\n(0, _netlifyCms.init)({ config: config });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kZXYvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUztBQUNmQyxXQUFTO0FBQ1JDLFVBQU0sV0FERTtBQUVSQyxXQUFPO0FBRkMsR0FETTtBQUtmQyxnQkFBYyxRQUxDO0FBTWZDLGVBQWEsQ0FBQztBQUNiSCxVQUFNLE1BRE87QUFFYkksV0FBTyxNQUZNO0FBR2JDLFdBQU8sQ0FBQztBQUNOQyxZQUFNLFVBREE7QUFFTk4sWUFBTSxNQUZBO0FBR05JLGFBQU8sTUFIRDtBQUlORyxjQUFRLENBQ04sRUFBQ0gsT0FBTyxNQUFSLEVBQWdCSixNQUFNLE1BQXRCLEVBQThCUSxRQUFRLFVBQXRDLEVBQWlEQyxtQkFBa0IsQ0FBQyxPQUFELEVBQVMsWUFBVCxFQUFzQixnQkFBdEIsQ0FBbkUsRUFETTtBQUpGLEtBQUQ7QUFITSxHQUFEO0FBTkUsQ0FBZjs7QUFvQkFDLHFCQUFJQyx1QkFBSixDQUE0QjtBQUMxQjtBQUNBQyxNQUFJLGdCQUZzQjtBQUcxQjtBQUNBUixTQUFPLFNBSm1CO0FBSzFCSixRQUFNLFNBTG9CO0FBTTFCO0FBQ0FPLFVBQVEsQ0FDTjtBQUNFUCxVQUFNLE9BRFI7QUFFRUksV0FBTyxPQUZUO0FBR0VJLFlBQVEsUUFIVjtBQUlFSyxhQUFRO0FBSlYsR0FETSxFQU9OO0FBQ0ViLFVBQU0sU0FEUjtBQUVFSSxXQUFPLFNBRlQ7QUFHRUksWUFBUSxVQUhWO0FBSUVLLGFBQVE7QUFKVixHQVBNLEVBYU47QUFDRWIsVUFBTSxRQURSO0FBRUVJLFdBQU8sUUFGVDtBQUdFSSxZQUFRLFFBSFY7QUFJRUssYUFBUTtBQUpWLEdBYk0sRUFtQk47QUFDRWIsVUFBTSxVQURSO0FBRUVJLFdBQU8sVUFGVDtBQUdFSSxZQUFRLFVBSFY7QUFJRUssYUFBUTtBQUpWLEdBbkJNLENBUGtCO0FBaUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsV0FBUyxxQ0ExQ2lCO0FBMkMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQVcsbUJBQVNDLEtBQVQsRUFBZ0I7QUFDekIsV0FBTztBQUNMQyxhQUFPRCxNQUFNLENBQU4sQ0FERjtBQUVMRSxlQUFTRixNQUFNLENBQU4sQ0FGSjtBQUdMRyxjQUFRSCxNQUFNLENBQU4sQ0FISDtBQUlMSSxnQkFBVUosTUFBTSxDQUFOO0FBSkwsS0FBUDtBQU1ELEdBdkR5QjtBQXdEMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSyxXQUFTLGlCQUFTQyxJQUFULEVBQWU7QUFDdEIsZ0VBR1VBLEtBQUtMLEtBSGYsVUFHeUJLLEtBQUtKLE9BSDlCLDRCQUlVSSxLQUFLSCxNQUpmLFVBSTBCRyxLQUFLRixRQUovQjtBQVFELEdBdEV5QjtBQXVFMUI7QUFDQTtBQUNBRyxhQUFXLG1CQUFTRCxJQUFULEVBQWU7QUFDeEIsa0VBR1lBLEtBQUtMLEtBSGpCLFVBRzJCSyxLQUFLSixPQUhoQyw4QkFJWUksS0FBS0gsTUFKakIsVUFJNEJHLEtBQUtGLFFBSmpDO0FBUUQ7QUFsRnlCLENBQTVCOztBQXNGQSxzQkFBSyxFQUFFdEIsY0FBRixFQUFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0bGlmeS1jbXMtbWFya2Rvd24tY29sdW1ucy13aWRnZXQvLi9kZXYvaW5kZXguanM/MjAwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJ1xuaW1wb3J0IENNUywgeyBpbml0IH0gZnJvbSAnbmV0bGlmeS1jbXMnXG5pbXBvcnQgJ25ldGxpZnktY21zL2Rpc3QvY21zLmNzcydcbmltcG9ydCB7IENvbnRyb2wsIFByZXZpZXcgfSBmcm9tICcuLi9zcmMnXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xuXG5jb25zdCBjb25maWcgPSB7XG5iYWNrZW5kOiB7XG4gbmFtZTogJ3Rlc3QtcmVwbycsXG4gbG9naW46IGZhbHNlLFxufSxcbm1lZGlhX2ZvbGRlcjogJ2Fzc2V0cycsXG5jb2xsZWN0aW9uczogW3tcbiBuYW1lOiAndGVzdCcsXG4gbGFiZWw6ICdUZXN0JyxcbiBmaWxlczogW3tcbiAgIGZpbGU6ICd0ZXN0LnltbCcsXG4gICBuYW1lOiAndGVzdCcsXG4gICBsYWJlbDogJ1Rlc3QnLFxuICAgZmllbGRzOiBbXG4gICAgIHtsYWJlbDogXCJCb2R5XCIsIG5hbWU6IFwiYm9keVwiLCB3aWRnZXQ6IFwibWFya2Rvd25cIixlZGl0b3JfY29tcG9uZW50czpbJ2ltYWdlJywnY29kZS1ibG9jaycsJ2NvbHVtbnMtbGF5b3V0J119LFxuICAgXSxcbiB9XSxcbn1dLFxufVxuXG5DTVMucmVnaXN0ZXJFZGl0b3JDb21wb25lbnQoe1xuICAvLyBJbnRlcm5hbCBpZCBvZiB0aGUgY29tcG9uZW50XG4gIGlkOiBcImNvbHVtbnMtbGF5b3V0XCIsXG4gIC8vIFZpc2libGUgbGFiZWxcbiAgbGFiZWw6IFwiQ29sdW1uc1wiLFxuICBuYW1lOiAnY29sdW1ucycsXG4gIC8vIEZpZWxkcyB0aGUgdXNlciBuZWVkIHRvIGZpbGwgb3V0IHdoZW4gYWRkaW5nIGFuIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnRcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2NsYXNzJyxcbiAgICAgIGxhYmVsOiAnQ2xhc3MnLFxuICAgICAgd2lkZ2V0OiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6J2NvbHVtbidcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb250ZW50JyxcbiAgICAgIGxhYmVsOiAnQ29udGVudCcsXG4gICAgICB3aWRnZXQ6ICdtYXJrZG93bicsXG4gICAgICBkZWZhdWx0OidMb3JlbSBJcHN1bS4uLidcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjbGFzczInLFxuICAgICAgbGFiZWw6ICdDbGFzczInLFxuICAgICAgd2lkZ2V0OiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6J2NvbHVtbidcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjb250ZW50MicsXG4gICAgICBsYWJlbDogJ0NvbnRlbnQyJyxcbiAgICAgIHdpZGdldDogJ21hcmtkb3duJyxcbiAgICAgIGRlZmF1bHQ6J0xvcmVtIElwc3VtLi4uJ1xuICAgIH1cbiAgXSxcbiAgLy8gUmVnZXggcGF0dGVybiB1c2VkIHRvIHNlYXJjaCBmb3IgaW5zdGFuY2VzIG9mIHRoaXMgYmxvY2sgaW4gdGhlIG1hcmtkb3duIGRvY3VtZW50LlxuICAvLyBQYXR0ZXJucyBhcmUgcnVuIGluIGEgbXVsdGxpbmUgZW52aXJvbm1lbnQgKGFnYWluc3QgdGhlIGVudGlyZSBtYXJrZG93biBkb2N1bWVudCksXG4gIC8vIGFuZCBzbyBnZW5lcmFsbHkgc2hvdWxkIG1ha2UgdXNlIG9mIHRoZSBtdWx0aWxpbmUgZmxhZyAoYG1gKS4gSWYgeW91IG5lZWQgdG8gY2FwdHVyZVxuICAvLyBuZXdsaW5lcyBpbiB5b3VyIGNhcHR1cmluZyBncm91cHMsIHlvdSBjYW4gZWl0aGVyIHVzZSBzb21ldGhpbmcgbGlrZVxuICAvLyBgKFtcXFNcXHNdKilgLCBvciB5b3UgY2FuIGFkZGl0aW9uYWxseSBlbmFibGUgdGhlIFwiZG90IGFsbFwiIGZsYWcgKGBzYCksXG4gIC8vIHdoaWNoIHdpbGwgY2F1c2UgYCguKilgIHRvIG1hdGNoIG5ld2xpbmVzIGFzIHdlbGwuXG4gIC8vXG4gIC8vIEFkZGl0aW9uYWxseSwgaXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2Ugbm9uLWdyZWVkeSBjYXB0dXJpbmcgZ3JvdXBzIChlLmcuXG4gIC8vIGAoLio/KWAgdnMgYCguKilgKSwgZXNwZWNpYWxseSBpZiBtYXRjaGluZyBhZ2FpbnN0IG5ld2xpbmUgY2hhcmFjdGVycy5cbiAgcGF0dGVybjogL148Y29sdW1ucz4kXFxzKC4qPyk8XFwvY29sdW1ucz5cXG5cXG4vbXMsXG4gIC8vIEdpdmVuIGEgUmVnRXhwIE1hdGNoIG9iamVjdFxuICAvLyAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL21hdGNoI3JldHVybl92YWx1ZSksXG4gIC8vIHJldHVybiBhbiBvYmplY3Qgd2l0aCBvbmUgcHJvcGVydHkgZm9yIGVhY2ggZmllbGQgZGVmaW5lZCBpbiBgZmllbGRzYC5cbiAgLy9cbiAgLy8gVGhpcyBpcyB1c2VkIHRvIHBvcHVsYXRlIHRoZSBjdXN0b20gd2lkZ2V0IGluIHRoZSBtYXJrZG93biBlZGl0b3IgaW4gdGhlIENNUy5cbiAgZnJvbUJsb2NrOiBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzczogbWF0Y2hbMV0sXG4gICAgICBjb250ZW50OiBtYXRjaFsyXSxcbiAgICAgIGNsYXNzMjogbWF0Y2hbM10sXG4gICAgICBjb250ZW50MjogbWF0Y2hbNF1cbiAgICB9O1xuICB9LFxuICAvLyBHaXZlbiBhbiBvYmplY3Qgd2l0aCBvbmUgcHJvcGVydHkgZm9yIGVhY2ggZmllbGQgZGVmaW5lZCBpbiBgZmllbGRzYCxcbiAgLy8gcmV0dXJuIHRoZSBzdHJpbmcgeW91IHdpc2ggdG8gYmUgaW5zZXJ0ZWQgaW50byB5b3VyIG1hcmtkb3duLlxuICAvL1xuICAvLyBUaGlzIGlzIHVzZWQgdG8gc2VyaWFsaXplIHRoZSBkYXRhIGZyb20gdGhlIGN1c3RvbSB3aWRnZXQgdG8gdGhlXG4gIC8vIG1hcmtkb3duIGRvY3VtZW50XG4gIHRvQmxvY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gYFxuPGNvbHVtbnM+XG48ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuPGRpdiBjbGFzcz1cIiR7ZGF0YS5jbGFzc31cIj4ke2RhdGEuY29udGVudH08L2Rpdj5cbjxkaXYgY2xhc3M9XCIke2RhdGEuY2xhc3MyfVwiPiR7ZGF0YS5jb250ZW50Mn08L2Rpdj5cbjwvZGl2PlxuPC9jb2x1bW5zPlxuYDtcbiAgfSxcbiAgLy8gUHJldmlldyBvdXRwdXQgZm9yIHRoaXMgY29tcG9uZW50LiBDYW4gZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGEgUmVhY3QgY29tcG9uZW50XG4gIC8vIChjb21wb25lbnQgZ2l2ZXMgYmV0dGVyIHJlbmRlciBwZXJmb3JtYW5jZSlcbiAgdG9QcmV2aWV3OiBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIGBcbjxjb2x1bW5zPlxuPGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cbiAgPGRpdiBjbGFzcz1cIiR7ZGF0YS5jbGFzc31cIj4ke2RhdGEuY29udGVudH08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIiR7ZGF0YS5jbGFzczJ9XCI+JHtkYXRhLmNvbnRlbnQyfTwvZGl2PlxuPC9kaXY+XG48L2NvbHVtbnM+XG5gO1xuICB9XG59KTtcblxuXG5pbml0KHsgY29uZmlnIH0pXG4iXSwibmFtZXMiOlsiY29uZmlnIiwiYmFja2VuZCIsIm5hbWUiLCJsb2dpbiIsIm1lZGlhX2ZvbGRlciIsImNvbGxlY3Rpb25zIiwibGFiZWwiLCJmaWxlcyIsImZpbGUiLCJmaWVsZHMiLCJ3aWRnZXQiLCJlZGl0b3JfY29tcG9uZW50cyIsIkNNUyIsInJlZ2lzdGVyRWRpdG9yQ29tcG9uZW50IiwiaWQiLCJkZWZhdWx0IiwicGF0dGVybiIsImZyb21CbG9jayIsIm1hdGNoIiwiY2xhc3MiLCJjb250ZW50IiwiY2xhc3MyIiwiY29udGVudDIiLCJ0b0Jsb2NrIiwiZGF0YSIsInRvUHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./dev/index.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/bulma/css/bulma.min.css":
/*!**********************************************!*\
  !*** ./node_modules/bulma/css/bulma.min.css ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./bulma.min.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../css-loader/dist/cjs.js!./bulma.min.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./bulma.min.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/bulma/css/bulma.min.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _css_loader_dist_cjs_js_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBcUY7QUFDckYsTUFBMkU7QUFDM0UsTUFBa0Y7QUFDbEYsTUFBcUc7QUFDckcsTUFBOEY7QUFDOUYsTUFBOEY7QUFDOUYsTUFBNkY7QUFDN0Y7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsd0ZBQW1CO0FBQy9DLHdCQUF3QixxR0FBYTs7QUFFckMsdUJBQXVCLDBGQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLGtGQUFNO0FBQ3ZCLDZCQUE2Qix5RkFBa0I7O0FBRS9DLGFBQWEsNkZBQUcsQ0FBQyw2RUFBTzs7O0FBR3hCLElBQUksSUFBVTtBQUNkLE9BQU8sb0ZBQWMsSUFBSSxVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG9GQUFjO0FBQ3ZDLG9DQUFvQyxrRUFBVyxHQUFHLG9GQUFjOztBQUVoRSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG9JQUFnRDtBQUN0RCxNQUFNO0FBQUE7QUFDTixzREFBc0Qsa0VBQVcsR0FBRyxvRkFBYztBQUNsRixnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsa0VBQVcsR0FBRyxvRkFBYzs7QUFFdEUscUJBQXFCLDZFQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHK0Q7QUFDL0QsT0FBTyxpRUFBZSw2RUFBTyxJQUFJLG9GQUFjLEdBQUcsb0ZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV0bGlmeS1jbXMtbWFya2Rvd24tY29sdW1ucy13aWRnZXQvLi9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLm1pbi5jc3M/OWQ2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idWxtYS5taW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnVsbWEubWluLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idWxtYS5taW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bulma/css/bulma.min.css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("560cec9cbfdce4852d3a")
/******/ })();
/******/ 
/******/ }
);