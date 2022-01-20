"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work",{

/***/ "./components/layouts/smol-holomyth.js":
/*!*********************************************!*\
  !*** ./components/layouts/smol-holomyth.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar SmolAme = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 2, -3)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            //8 ->6\n            var scale = scH * 0.005;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 0;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-0px',\n            '0px'\n        ],\n        pt: [\n            '85px',\n            '50px',\n            '40px'\n        ],\n        mb: [\n            '-20px',\n            '-140px',\n            '-200px'\n        ],\n        ml: [\n            '40px',\n            '70px',\n            '20px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\smol-holomyth.js\",\n            lineNumber: 111,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\smol-holomyth.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(SmolAme, \"+UMlji1nBYYxUJ4SxWQitWbkeY4=\");\n_c = SmolAme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmolAme);\nvar _c;\n$RefreshReg$(_c, \"SmolAme\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvc21vbC1ob2xvbXl0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ2pCO0FBQ2Y7QUFDMkM7QUFDekI7QUFDZDs7O1NBRXpCVSxXQUFXLENBQUNDLENBQUMsRUFBQyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNmLEdBRG1CLENBQUM7O0lBQ2pCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHZCw2Q0FBTTtJQUMzQixHQUFLLENBQXdCRixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuQ2lCLE9BQU8sR0FBZWpCLEdBQWMsS0FBNUJrQixVQUFVLEdBQUlsQixHQUFjO0lBQzNDLEdBQUssQ0FBMEJBLElBQVUsR0FBVkEsK0NBQVEsSUFBaENtQixRQUFRLEdBQWdCbkIsSUFBVSxLQUF6Qm9CLFdBQVcsR0FBSXBCLElBQVU7SUFDekMsR0FBSyxDQUF1QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUE3QnFCLE9BQU8sR0FBY3JCLElBQVUsS0FBdkJzQixTQUFTLEdBQUl0QixJQUFVO0lBQ3RDLEdBQUssQ0FBV0EsSUFBcUMsR0FBckNBLCtDQUFRLENBQUMsR0FBRyxDQUFDTSwwQ0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUE1Q2tCLE1BQU0sR0FBR3hCLElBQXFDO0lBQ3JELEdBQUssQ0FBMkJBLElBTS9CLEdBTitCQSwrQ0FBUSxDQUNwQyxHQUFHLENBQUNNLDBDQUFhLENBQ2IsRUFBRSxHQUFDTSxJQUFJLENBQUNhLEdBQUcsQ0FBQyxHQUFHLEdBQUNiLElBQUksQ0FBQ2MsRUFBRSxHQUN2QixFQUFFLEVBQ0YsRUFBRSxHQUFDZCxJQUFJLENBQUNlLEdBQUcsQ0FBQyxHQUFHLEdBQUNmLElBQUksQ0FBQ2MsRUFBRSxLQUp4QkUscUJBQXFCLEdBQUk1QixJQU0vQjtJQUNELEdBQUssQ0FBVUEsSUFBMkIsR0FBM0JBLCtDQUFRLENBQUMsR0FBRyxDQUFDTSx3Q0FBVyxLQUFoQ3dCLEtBQUssR0FBRzlCLElBQTJCO0lBQzFDLEdBQUssQ0FBMEJBLElBQVUsR0FBVkEsK0NBQVEsSUFBaEMrQixTQUFTLEdBQWUvQixJQUFVLEtBQXhCZ0MsV0FBVyxHQUFHaEMsSUFBVTtJQUN6QyxHQUFLLENBQUNpQyxrQkFBa0IsR0FBSTlCLGtEQUFXLENBQUMsUUFDNUMsR0FEaUQsQ0FBQztRQUMxQyxHQUFLLENBQVkrQixTQUFTLEdBQUtsQixZQUFZLENBQW5DbUIsT0FBTztRQUNmLEVBQUUsRUFBRUQsU0FBUyxJQUFJZixRQUFRLEVBQUUsQ0FBQztZQUN4QixHQUFLLENBQUNpQixHQUFHLEdBQUdGLFNBQVMsQ0FBQ0csV0FBVztZQUNqQyxHQUFLLENBQUNDLEdBQUcsR0FBR0osU0FBUyxDQUFDSyxZQUFZO1lBQ2xDcEIsUUFBUSxDQUFDcUIsT0FBTyxDQUFDSixHQUFHLEVBQUNFLEdBQUc7UUFDNUIsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDbkI7UUFBQUEsUUFBUTtJQUFBLENBQUM7SUFDWixFQUFnRCwrQ0FDaERsQixnREFBUyxDQUFDLFFBQ2IsR0FEaUIsQ0FBQztRQUNYLEdBQXdCLENBQVZpQyxTQUFTLEdBQUlsQixZQUFZLENBQWpDbUIsT0FBTztRQUNiLEVBQUUsRUFBQ0QsU0FBUyxLQUFLZixRQUFRLEVBQUMsQ0FBQztZQUN2QixHQUFLLENBQUNpQixHQUFHLEdBQUVGLFNBQVMsQ0FBQ0csV0FBVztZQUNoQyxHQUFLLENBQUNDLEdBQUcsR0FBRUosU0FBUyxDQUFDSyxZQUFZO1lBQ2pDLEdBQUssQ0FBQ3BCLFNBQVEsR0FBRyxHQUFHLENBQUNiLGdEQUFtQixDQUFDLENBQUM7Z0JBQ3RDb0MsU0FBUyxFQUFFLElBQUk7Z0JBQ2ZDLEtBQUssRUFBRSxJQUFJO1lBQ2YsQ0FBQztZQUNEeEIsU0FBUSxDQUFDeUIsYUFBYSxDQUFDQyxNQUFNLENBQUNDLGdCQUFnQjtZQUM5QzNCLFNBQVEsQ0FBQ3FCLE9BQU8sQ0FBQ0osR0FBRyxFQUFDRSxHQUFHO1lBQ3hCbkIsU0FBUSxDQUFDNEIsY0FBYyxHQUFHekMsK0NBQWtCO1lBQzVDNEIsU0FBUyxDQUFDZSxXQUFXLENBQUM5QixTQUFRLENBQUMrQixVQUFVO1lBQ3pDOUIsV0FBVyxDQUFDRCxTQUFRO1lBQ3BCLEVBQWE7WUFDYixFQUFPO1lBQ1AsR0FBSyxDQUFDZ0MsS0FBSyxHQUFHYixHQUFHLEdBQUcsS0FBSztZQUN6QixHQUFLLENBQUNjLE1BQU0sR0FBRyxHQUFHLENBQUM5QyxxREFBd0IsRUFDdEM2QyxLQUFLLEVBQ05BLEtBQUssRUFDTEEsS0FBSyxHQUNKQSxLQUFLLEVBQ04sSUFBSSxFQUNKLEtBQUs7WUFFVEMsTUFBTSxDQUFDRSxRQUFRLENBQUNDLElBQUksQ0FBQzNCLHFCQUFxQjtZQUMxQ3dCLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDaEMsTUFBTTtZQUNwQkYsU0FBUyxDQUFDOEIsTUFBTTtZQUVoQixHQUFLLENBQUNLLFlBQVksR0FBRyxHQUFHLENBQUNuRCwrQ0FBa0IsQ0FBQyxRQUFRLEVBQUMsQ0FBQztZQUN0RHdCLEtBQUssQ0FBQzZCLEdBQUcsQ0FBQ0YsWUFBWTtZQUN0QixHQUFLLENBQUNHLFFBQVEsR0FBRyxHQUFHLENBQUNyRCxvRkFBYSxDQUFDNkMsTUFBTSxFQUFDakMsU0FBUSxDQUFDK0IsVUFBVTtZQUM3RFUsUUFBUSxDQUFDQyxVQUFVLEdBQUcsSUFBSTtZQUMxQkQsUUFBUSxDQUFDcEMsTUFBTSxHQUFHQSxNQUFNO1lBQ3hCUSxXQUFXLENBQUM0QixRQUFRO1lBQ3BCcEQsMERBQWEsQ0FBQ3NCLEtBQUssRUFBQyxDQUEwRCwyREFBQyxDQUFDO2dCQUM1RWdDLGFBQWEsRUFBRSxLQUFLO2dCQUNwQkMsVUFBVSxFQUFFLEtBQUs7WUFDckIsQ0FBQyxFQUFFQyxJQUFJLENBQUMsUUFDbkIsR0FEdUIsQ0FBQztnQkFDVEMsT0FBTztnQkFDUC9DLFVBQVUsQ0FBQyxLQUFLO1lBQ3BCLENBQUM7WUFFRCxHQUFHLENBQUNnRCxHQUFHLEdBQUcsSUFBSTtZQUNkLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQUM7WUFDYixHQUFLLENBQUNGLE9BQU8sR0FBRSxRQUFRLEdBQUYsQ0FBQztnQkFDbEJDLEdBQUcsR0FBR0UscUJBQXFCLENBQUNILE9BQU87Z0JBQ25DRSxLQUFLLEdBQUdBLEtBQUssSUFBSSxHQUFHLEdBQUdBLEtBQUssR0FBRyxDQUFDLEdBQUdBLEtBQUs7Z0JBQ3hDLEVBQUUsRUFBQ0EsS0FBSyxJQUFFLEdBQUcsRUFBQyxDQUFDO29CQUNYLEdBQUssQ0FBQ0UsQ0FBQyxHQUFHekMscUJBQXFCO29CQUMvQixHQUFLLENBQUMwQyxRQUFRLElBQUk1RCxXQUFXLENBQUN5RCxLQUFLLEdBQUMsR0FBRyxJQUFFdkQsSUFBSSxDQUFDYyxFQUFFLEdBQUUsRUFBRTtvQkFDcEQwQixNQUFNLENBQUNFLFFBQVEsQ0FBQ2lCLENBQUMsR0FBRyxDQUFDO29CQUNyQm5CLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDM0MsQ0FBQyxHQUFHMEQsQ0FBQyxDQUFDMUQsQ0FBQyxHQUFHQyxJQUFJLENBQUNlLEdBQUcsQ0FBQzJDLFFBQVEsSUFBSUQsQ0FBQyxDQUFDRyxDQUFDLEdBQUM1RCxJQUFJLENBQUNhLEdBQUcsQ0FBQzZDLFFBQVE7b0JBQ3BFbEIsTUFBTSxDQUFDRSxRQUFRLENBQUNrQixDQUFDLEdBQUdILENBQUMsQ0FBQ0csQ0FBQyxHQUFHNUQsSUFBSSxDQUFDZSxHQUFHLENBQUMyQyxRQUFRLElBQUdELENBQUMsQ0FBQzFELENBQUMsR0FBR0MsSUFBSSxDQUFDYSxHQUFHLENBQUM2QyxRQUFRO29CQUNyRWxCLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDaEMsTUFBTTtnQkFDeEIsQ0FBQyxNQUFJLENBQUM7b0JBQ0ZvQyxRQUFRLENBQUNhLE1BQU07Z0JBQ25CLENBQUM7Z0JBQ0R0RCxTQUFRLENBQUNWLE1BQU0sQ0FBQ3FCLEtBQUssRUFBRXNCLE1BQU07WUFDakMsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUNsQixHQURzQixDQUFDO2dCQUNSc0Isb0JBQW9CLENBQUNSLEdBQUc7Z0JBQ3hCL0MsU0FBUSxDQUFDd0QsT0FBTztZQUNwQixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSjFFLGdEQUFTLENBQUMsUUFDYixHQURpQixDQUFDO1FBQ1g0QyxNQUFNLENBQUMrQixnQkFBZ0IsQ0FBQyxDQUFRLFNBQUMzQyxrQkFBa0IsRUFBRSxLQUFLO1FBQzFELE1BQU0sU0FDYixHQURpQixDQUFDO1lBQ1BZLE1BQU0sQ0FBQ2dDLG1CQUFtQixDQUFDLENBQVEsU0FBQzVDLGtCQUFrQixFQUFDLEtBQUs7UUFDaEUsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDZDtRQUFBQSxRQUFRO1FBQUNjLGtCQUFrQjtJQUFBLENBQUM7SUFFL0IsTUFBTSxzRUFDRDdCLGlEQUFHO1FBQUUwRSxHQUFHLEVBQUU5RCxZQUFZO1FBQUUrRCxTQUFTLEVBQUMsQ0FBVztRQUFDQyxDQUFDLEVBQUMsQ0FBTTtRQUFFQyxFQUFFLEVBQUUsQ0FBQztZQUFBLENBQU87WUFBQyxDQUFNO1lBQUMsQ0FBSztRQUFBLENBQUM7UUFBRUMsRUFBRSxFQUFFLENBQUM7WUFBQSxDQUFNO1lBQUMsQ0FBTTtZQUFDLENBQU07UUFBQSxDQUFDO1FBQy9HQyxFQUFFLEVBQUUsQ0FBQztZQUFBLENBQU87WUFBQyxDQUFRO1lBQUMsQ0FBUTtRQUFBLENBQUM7UUFBR0MsRUFBRSxFQUFFLENBQUM7WUFBQSxDQUFNO1lBQUMsQ0FBTTtZQUFDLENBQU07UUFBQSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1lBQUEsR0FBRztZQUFDLEdBQUc7WUFBQyxHQUFHO1FBQUEsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztZQUFBLEdBQUc7WUFBQyxHQUFHO1lBQUMsR0FBRztRQUFBLENBQUM7UUFBRWhDLFFBQVEsRUFBQyxDQUFVOzs7Ozs7O2tCQUNoSHJDLE9BQU8seUVBQ0haLHFEQUFPO1lBQUVrRixJQUFJLEVBQUMsQ0FBSTtZQUFDakMsUUFBUSxFQUFDLENBQVU7WUFBQ2tDLElBQUksRUFBQyxDQUFLO1lBQUNDLEdBQUcsRUFBQyxDQUFLO1lBQUNMLEVBQUUsRUFBQyxDQUFxQztZQUNyR0gsRUFBRSxFQUFDLENBQStCOzs7Ozs7Ozs7QUFJbEQsQ0FBQztHQTNHS2xFLE9BQU87S0FBUEEsT0FBTztBQTZHYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvc21vbC1ob2xvbXl0aC5qcz9kNmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydHtCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQge2xvYWRHTFRGTW9kZWwgIH0gZnJvbSAnLi4vLi4vbGlicy9tb2RlbCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0xLDQpKVxyXG59XHJcblxyXG5jb25zdCBTbW9sQW1lID0gKCk9PntcclxuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW19jYW1lcmEsc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0YXJnZXRdPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygwLCAyLCAtMykpXHJcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgICAgICAyMCpNYXRoLnNpbigwLjIqTWF0aC5QSSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAyMCpNYXRoLmNvcygwLjIqTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICAgIGNvbnN0IFtfY29udHJvbHMsc2V0Q29udHJvbHNdPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAgdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKCBjb250YWluZXIgJiYgcmVuZGVyZXIgKXtcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csc2NIKVxyXG4gICAgICAgIH1cclxuICAgIH0sW3JlbmRlcmVyXSlcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3R7Y3VycmVudDpjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYoY29udGFpbmVyICYmICFyZW5kZXJlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVz0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSD0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG4gICAgICAgICAgICAvLyA2NDAgLT4gMjQwXHJcbiAgICAgICAgICAgIC8vOCAtPjZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSBcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAwLjAxLFxyXG4gICAgICAgICAgICAgICAgNTAwMDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSxyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsJy9zbW9sX2FtZV9pbl9hbl91cGN5Y2xlZF90ZXJyYXJpdW1faG9sb2xpdmVlbi9zY2VuZS5nbHRmJyx7XHJcbiAgICAgICAgICAgICAgICByZXZlaXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZT0gKCkgID0+e1xyXG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXHJcbiAgICAgICAgICAgICAgICBpZihmcmFtZTw9MTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUvMTIwKSpNYXRoLlBJKiAyMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56Kk1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIHJldHVybigpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLGhhbmRsZVdpbmRvd1Jlc2l6ZSxmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9LFtyZW5kZXJlcixoYW5kbGVXaW5kb3dSZXNpemVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCAgcmVmPXtyZWZDb250YWluZXJ9IGNsYXNzTmFtZT0ndm94ZWwtZG9nJyBtPVwiYXV0b1wiICBtdD17WyctMjBweCcsJy0wcHgnLCcwcHgnXX0gcHQ9e1snODVweCcsJzUwcHgnLCc0MHB4J119XHJcbiAgICAgICAgbWI9e1snLTIwcHgnLCctMTQwcHgnLCctMjAwcHgnXX0gIG1sPXtbJzQwcHgnLCc3MHB4JywnMjBweCddfSB3PXtbMjgwLDQ4MCw2NDBdfSBoPXtbMjgwLDQ4MCw2NDBdfSBwb3NpdGlvbj0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHgtIHZhci0tc3Bpbm5lci1zaXplKSlcIi8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNtb2xBbWVcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsInJlbmRlciIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiU21vbEFtZSIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmV2ZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJtdCIsInB0IiwibWIiLCJtbCIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layouts/smol-holomyth.js\n");

/***/ })

});