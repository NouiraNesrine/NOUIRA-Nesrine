"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./components/layouts/cute-cat.js":
/*!****************************************!*\
  !*** ./components/layouts/cute-cat.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar CuteCat = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            //8 ->6\n            var scale = scH * 0.005 + 2.9;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1.1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/cute_cat_with_strawberries/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 0;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-30px',\n            '-85px'\n        ],\n        ml: [\n            '40px',\n            '10px',\n            '-60px'\n        ],\n        mb: [\n            '-100px',\n            '-180px',\n            '-250px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\cute-cat.js\",\n            lineNumber: 111,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\cute-cat.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(CuteCat, \"41nAIlIr17j+B2wqBQVcL9C+P1U=\");\n_c = CuteCat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CuteCat);\nvar _c;\n$RefreshReg$(_c, \"CuteCat\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvY3V0ZS1jYXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUNqQjtBQUNmO0FBQzJDO0FBQ3pCO0FBQ2Q7OztTQUV6QlUsV0FBVyxDQUFDQyxDQUFDLEVBQUMsQ0FBQztJQUNwQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxHQUFHLENBQUNILENBQUMsR0FBRSxDQUFDLEVBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsR0FBSyxDQUFDSSxPQUFPLEdBQUcsUUFDZixHQURtQixDQUFDOztJQUNqQixHQUFLLENBQUNDLFlBQVksR0FBR2QsNkNBQU07SUFDM0IsR0FBSyxDQUF3QkYsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBbkNpQixPQUFPLEdBQWVqQixHQUFjLEtBQTVCa0IsVUFBVSxHQUFJbEIsR0FBYztJQUMzQyxHQUFLLENBQTBCQSxJQUFVLEdBQVZBLCtDQUFRLElBQWhDbUIsUUFBUSxHQUFnQm5CLElBQVUsS0FBekJvQixXQUFXLEdBQUlwQixJQUFVO0lBQ3pDLEdBQUssQ0FBdUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBN0JxQixPQUFPLEdBQWNyQixJQUFVLEtBQXZCc0IsU0FBUyxHQUFJdEIsSUFBVTtJQUN0QyxHQUFLLENBQVdBLElBQXNDLEdBQXRDQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQ00sMENBQWEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBN0NrQixNQUFNLEdBQUd4QixJQUFzQztJQUN0RCxHQUFLLENBQTJCQSxJQU0vQixHQU4rQkEsK0NBQVEsQ0FDcEMsR0FBRyxDQUFDTSwwQ0FBYSxDQUNiLEVBQUUsR0FBQ00sSUFBSSxDQUFDYSxHQUFHLENBQUMsR0FBRyxHQUFDYixJQUFJLENBQUNjLEVBQUUsR0FDdkIsRUFBRSxFQUNGLEVBQUUsR0FBQ2QsSUFBSSxDQUFDZSxHQUFHLENBQUMsR0FBRyxHQUFDZixJQUFJLENBQUNjLEVBQUUsS0FKeEJFLHFCQUFxQixHQUFJNUIsSUFNL0I7SUFDRCxHQUFLLENBQVVBLElBQTJCLEdBQTNCQSwrQ0FBUSxDQUFDLEdBQUcsQ0FBQ00sd0NBQVcsS0FBaEN3QixLQUFLLEdBQUc5QixJQUEyQjtJQUMxQyxHQUFLLENBQTBCQSxJQUFVLEdBQVZBLCtDQUFRLElBQWhDK0IsU0FBUyxHQUFlL0IsSUFBVSxLQUF4QmdDLFdBQVcsR0FBR2hDLElBQVU7SUFDekMsR0FBSyxDQUFDaUMsa0JBQWtCLEdBQUk5QixrREFBVyxDQUFDLFFBQzVDLEdBRGlELENBQUM7UUFDMUMsR0FBSyxDQUFZK0IsU0FBUyxHQUFLbEIsWUFBWSxDQUFuQ21CLE9BQU87UUFDZixFQUFFLEVBQUVELFNBQVMsSUFBSWYsUUFBUSxFQUFFLENBQUM7WUFDeEIsR0FBSyxDQUFDaUIsR0FBRyxHQUFHRixTQUFTLENBQUNHLFdBQVc7WUFDakMsR0FBSyxDQUFDQyxHQUFHLEdBQUdKLFNBQVMsQ0FBQ0ssWUFBWTtZQUNsQ3BCLFFBQVEsQ0FBQ3FCLE9BQU8sQ0FBQ0osR0FBRyxFQUFDRSxHQUFHO1FBQzVCLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQ25CO1FBQUFBLFFBQVE7SUFBQSxDQUFDO0lBQ1osRUFBZ0QsK0NBQ2hEbEIsZ0RBQVMsQ0FBQyxRQUNiLEdBRGlCLENBQUM7UUFDWCxHQUF3QixDQUFWaUMsU0FBUyxHQUFJbEIsWUFBWSxDQUFqQ21CLE9BQU87UUFDYixFQUFFLEVBQUNELFNBQVMsS0FBS2YsUUFBUSxFQUFDLENBQUM7WUFDdkIsR0FBSyxDQUFDaUIsR0FBRyxHQUFFRixTQUFTLENBQUNHLFdBQVc7WUFDaEMsR0FBSyxDQUFDQyxHQUFHLEdBQUVKLFNBQVMsQ0FBQ0ssWUFBWTtZQUNqQyxHQUFLLENBQUNwQixTQUFRLEdBQUcsR0FBRyxDQUFDYixnREFBbUIsQ0FBQyxDQUFDO2dCQUN0Q29DLFNBQVMsRUFBRSxJQUFJO2dCQUNmQyxLQUFLLEVBQUUsSUFBSTtZQUNmLENBQUM7WUFDRHhCLFNBQVEsQ0FBQ3lCLGFBQWEsQ0FBQ0MsTUFBTSxDQUFDQyxnQkFBZ0I7WUFDOUMzQixTQUFRLENBQUNxQixPQUFPLENBQUNKLEdBQUcsRUFBQ0UsR0FBRztZQUN4Qm5CLFNBQVEsQ0FBQzRCLGNBQWMsR0FBR3pDLCtDQUFrQjtZQUM1QzRCLFNBQVMsQ0FBQ2UsV0FBVyxDQUFDOUIsU0FBUSxDQUFDK0IsVUFBVTtZQUN6QzlCLFdBQVcsQ0FBQ0QsU0FBUTtZQUNwQixFQUFhO1lBQ2IsRUFBTztZQUNQLEdBQUssQ0FBQ2dDLEtBQUssR0FBR2IsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHO1lBQy9CLEdBQUssQ0FBQ2MsTUFBTSxHQUFHLEdBQUcsQ0FBQzlDLHFEQUF3QixFQUN0QzZDLEtBQUssRUFDTkEsS0FBSyxFQUNMQSxLQUFLLEdBQ0pBLEtBQUssRUFDTixJQUFJLEVBQ0osS0FBSztZQUVUQyxNQUFNLENBQUNFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDM0IscUJBQXFCO1lBQzFDd0IsTUFBTSxDQUFDSSxNQUFNLENBQUNoQyxNQUFNO1lBQ3BCRixTQUFTLENBQUM4QixNQUFNO1lBRWhCLEdBQUssQ0FBQ0ssWUFBWSxHQUFHLEdBQUcsQ0FBQ25ELCtDQUFrQixDQUFDLFFBQVEsRUFBQyxHQUFHO1lBQ3hEd0IsS0FBSyxDQUFDNkIsR0FBRyxDQUFDRixZQUFZO1lBQ3RCLEdBQUssQ0FBQ0csUUFBUSxHQUFHLEdBQUcsQ0FBQ3JELG9GQUFhLENBQUM2QyxNQUFNLEVBQUNqQyxTQUFRLENBQUMrQixVQUFVO1lBQzdEVSxRQUFRLENBQUNDLFVBQVUsR0FBRyxJQUFJO1lBQzFCRCxRQUFRLENBQUNwQyxNQUFNLEdBQUdBLE1BQU07WUFDeEJRLFdBQVcsQ0FBQzRCLFFBQVE7WUFDcEJwRCwwREFBYSxDQUFDc0IsS0FBSyxFQUFDLENBQXdDLHlDQUFDLENBQUM7Z0JBQzFEZ0MsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCQyxVQUFVLEVBQUUsS0FBSztZQUNyQixDQUFDLEVBQUVDLElBQUksQ0FBQyxRQUNuQixHQUR1QixDQUFDO2dCQUNUQyxPQUFPO2dCQUNQL0MsVUFBVSxDQUFDLEtBQUs7WUFDcEIsQ0FBQztZQUVELEdBQUcsQ0FBQ2dELEdBQUcsR0FBRyxJQUFJO1lBQ2QsR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztZQUNiLEdBQUssQ0FBQ0YsT0FBTyxHQUFFLFFBQVEsR0FBRixDQUFDO2dCQUNsQkMsR0FBRyxHQUFHRSxxQkFBcUIsQ0FBQ0gsT0FBTztnQkFDbkNFLEtBQUssR0FBR0EsS0FBSyxJQUFJLEdBQUcsR0FBR0EsS0FBSyxHQUFHLENBQUMsR0FBR0EsS0FBSztnQkFDeEMsRUFBRSxFQUFDQSxLQUFLLElBQUUsR0FBRyxFQUFDLENBQUM7b0JBQ1gsR0FBSyxDQUFDRSxDQUFDLEdBQUd6QyxxQkFBcUI7b0JBQy9CLEdBQUssQ0FBQzBDLFFBQVEsSUFBSTVELFdBQVcsQ0FBQ3lELEtBQUssR0FBQyxHQUFHLElBQUV2RCxJQUFJLENBQUNjLEVBQUUsR0FBRSxFQUFFO29CQUNwRDBCLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDaUIsQ0FBQyxHQUFHLENBQUM7b0JBQ3JCbkIsTUFBTSxDQUFDRSxRQUFRLENBQUMzQyxDQUFDLEdBQUcwRCxDQUFDLENBQUMxRCxDQUFDLEdBQUdDLElBQUksQ0FBQ2UsR0FBRyxDQUFDMkMsUUFBUSxJQUFJRCxDQUFDLENBQUNHLENBQUMsR0FBQzVELElBQUksQ0FBQ2EsR0FBRyxDQUFDNkMsUUFBUTtvQkFDcEVsQixNQUFNLENBQUNFLFFBQVEsQ0FBQ2tCLENBQUMsR0FBR0gsQ0FBQyxDQUFDRyxDQUFDLEdBQUc1RCxJQUFJLENBQUNlLEdBQUcsQ0FBQzJDLFFBQVEsSUFBR0QsQ0FBQyxDQUFDMUQsQ0FBQyxHQUFHQyxJQUFJLENBQUNhLEdBQUcsQ0FBQzZDLFFBQVE7b0JBQ3JFbEIsTUFBTSxDQUFDSSxNQUFNLENBQUNoQyxNQUFNO2dCQUN4QixDQUFDLE1BQUksQ0FBQztvQkFDRm9DLFFBQVEsQ0FBQ2EsTUFBTTtnQkFDbkIsQ0FBQztnQkFDRHRELFNBQVEsQ0FBQ1YsTUFBTSxDQUFDcUIsS0FBSyxFQUFFc0IsTUFBTTtZQUNqQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLFFBQ2xCLEdBRHNCLENBQUM7Z0JBQ1JzQixvQkFBb0IsQ0FBQ1IsR0FBRztnQkFDeEIvQyxTQUFRLENBQUN3RCxPQUFPO1lBQ3BCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVKMUUsZ0RBQVMsQ0FBQyxRQUNiLEdBRGlCLENBQUM7UUFDWDRDLE1BQU0sQ0FBQytCLGdCQUFnQixDQUFDLENBQVEsU0FBQzNDLGtCQUFrQixFQUFFLEtBQUs7UUFDMUQsTUFBTSxTQUNiLEdBRGlCLENBQUM7WUFDUFksTUFBTSxDQUFDZ0MsbUJBQW1CLENBQUMsQ0FBUSxTQUFDNUMsa0JBQWtCLEVBQUMsS0FBSztRQUNoRSxDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUNkO1FBQUFBLFFBQVE7UUFBQ2Msa0JBQWtCO0lBQUEsQ0FBQztJQUUvQixNQUFNLHNFQUNEN0IsaURBQUc7UUFBRTBFLEdBQUcsRUFBRTlELFlBQVk7UUFBRStELFNBQVMsRUFBQyxDQUFXO1FBQUNDLENBQUMsRUFBQyxDQUFNO1FBQUVDLEVBQUUsRUFBRSxDQUFDO1lBQUEsQ0FBTztZQUFDLENBQU87WUFBQyxDQUFPO1FBQUEsQ0FBQztRQUFHQyxFQUFFLEVBQUUsQ0FBQztZQUFBLENBQU07WUFBQyxDQUFNO1lBQUMsQ0FBTztRQUFBLENBQUM7UUFDcEhDLEVBQUUsRUFBRSxDQUFDO1lBQUEsQ0FBUTtZQUFDLENBQVE7WUFBQyxDQUFRO1FBQUEsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztZQUFBLEdBQUc7WUFBQyxHQUFHO1lBQUMsR0FBRztRQUFBLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7WUFBQSxHQUFHO1lBQUMsR0FBRztZQUFDLEdBQUc7UUFBQSxDQUFDO1FBQUUvQixRQUFRLEVBQUMsQ0FBVTs7Ozs7OztrQkFDcEZyQyxPQUFPLHlFQUNIWixxREFBTztZQUFFaUYsSUFBSSxFQUFDLENBQUk7WUFBQ2hDLFFBQVEsRUFBQyxDQUFVO1lBQUNpQyxJQUFJLEVBQUMsQ0FBSztZQUFDQyxHQUFHLEVBQUMsQ0FBSztZQUFDTixFQUFFLEVBQUMsQ0FBcUM7WUFDckdELEVBQUUsRUFBQyxDQUErQjs7Ozs7Ozs7O0FBSWxELENBQUM7R0EzR0tsRSxPQUFPO0tBQVBBLE9BQU87QUE2R2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL2N1dGUtY2F0LmpzPzM4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0e0JveCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXHJcbmltcG9ydCB7bG9hZEdMVEZNb2RlbCAgfSBmcm9tICcuLi8uLi9saWJzL21vZGVsJ1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLTEsNCkpXHJcbn1cclxuXHJcbmNvbnN0IEN1dGVDYXQgPSAoKT0+e1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZW5kZXJlcixzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbX2NhbWVyYSxzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF09IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEuMiwgMCkpXHJcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgICAgICAyMCpNYXRoLnNpbigwLjIqTWF0aC5QSSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAyMCpNYXRoLmNvcygwLjIqTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICAgIGNvbnN0IFtfY29udHJvbHMsc2V0Q29udHJvbHNdPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAgdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKCBjb250YWluZXIgJiYgcmVuZGVyZXIgKXtcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csc2NIKVxyXG4gICAgICAgIH1cclxuICAgIH0sW3JlbmRlcmVyXSlcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3R7Y3VycmVudDpjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYoY29udGFpbmVyICYmICFyZW5kZXJlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVz0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSD0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG4gICAgICAgICAgICAvLyA2NDAgLT4gMjQwXHJcbiAgICAgICAgICAgIC8vOCAtPjZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDIuOVxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIDAuMDEsXHJcbiAgICAgICAgICAgICAgICA1MDAwMFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLDEuMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEscmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCcvY3V0ZV9jYXRfd2l0aF9zdHJhd2JlcnJpZXMvc2NlbmUuZ2x0Zicse1xyXG4gICAgICAgICAgICAgICAgcmV2ZWl2ZVNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGU9ICgpICA9PntcclxuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxyXG4gICAgICAgICAgICAgICAgaWYoZnJhbWU8PTEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lLzEyMCkqTWF0aC5QSSogMjBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueipNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKS0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICByZXR1cm4oKT0+e1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJyxoYW5kbGVXaW5kb3dSZXNpemUsZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbcmVuZGVyZXIsaGFuZGxlV2luZG93UmVzaXplXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggIHJlZj17cmVmQ29udGFpbmVyfSBjbGFzc05hbWU9J3ZveGVsLWRvZycgbT1cImF1dG9cIiAgbXQ9e1snLTIwcHgnLCctMzBweCcsJy04NXB4J119ICBtbD17Wyc0MHB4JywnMTBweCcsJy02MHB4J119XHJcbiAgICAgICAgbWI9e1snLTEwMHB4JywnLTE4MHB4JywnLTI1MHB4J119IHc9e1syODAsNDgwLDY0MF19IGg9e1syODAsNDgwLDY0MF19IHBvc2l0aW9uPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyICBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKDBweC0gdmFyLS1zcGlubmVyLXNpemUpKVwiLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3V0ZUNhdFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwicmVuZGVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJDdXRlQ2F0IiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZXZlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsIm10IiwibWwiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/cute-cat.js\n");

/***/ })

});