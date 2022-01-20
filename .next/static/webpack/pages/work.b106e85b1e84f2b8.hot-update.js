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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar SmolAme = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            //8 ->6\n            var scale = scH * 0.005 + 0.001;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 1000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 5;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-0px',\n            '0px'\n        ],\n        pt: [\n            '55px',\n            '50px',\n            '30px'\n        ],\n        mb: [\n            '-20px',\n            '-140px',\n            '-230px'\n        ],\n        ml: [\n            '40px',\n            '70px',\n            '20px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\smol-holomyth.js\",\n            lineNumber: 111,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\smol-holomyth.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(SmolAme, \"DexddHUgesbeMO6Qxo3IwVdRK5s=\");\n_c = SmolAme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmolAme);\nvar _c;\n$RefreshReg$(_c, \"SmolAme\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvc21vbC1ob2xvbXl0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ2pCO0FBQ2Y7QUFDMkM7QUFDekI7QUFDZDs7O1NBRXpCVSxXQUFXLENBQUNDLENBQUMsRUFBQyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNmLEdBRG1CLENBQUM7O0lBQ2pCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHZCw2Q0FBTTtJQUMzQixHQUFLLENBQXdCRixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuQ2lCLE9BQU8sR0FBZWpCLEdBQWMsS0FBNUJrQixVQUFVLEdBQUlsQixHQUFjO0lBQzNDLEdBQUssQ0FBMEJBLElBQVUsR0FBVkEsK0NBQVEsSUFBaENtQixRQUFRLEdBQWdCbkIsSUFBVSxLQUF6Qm9CLFdBQVcsR0FBSXBCLElBQVU7SUFDekMsR0FBSyxDQUF1QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUE3QnFCLE9BQU8sR0FBY3JCLElBQVUsS0FBdkJzQixTQUFTLEdBQUl0QixJQUFVO0lBQ3RDLEdBQUssQ0FBV0EsSUFBb0MsR0FBcENBLCtDQUFRLENBQUMsR0FBRyxDQUFDTSwwQ0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUEzQ2tCLE1BQU0sR0FBR3hCLElBQW9DO0lBQ3BELEdBQUssQ0FBMkJBLElBTS9CLEdBTitCQSwrQ0FBUSxDQUNwQyxHQUFHLENBQUNNLDBDQUFhLENBQ2IsRUFBRSxHQUFDTSxJQUFJLENBQUNhLEdBQUcsQ0FBQyxHQUFHLEdBQUNiLElBQUksQ0FBQ2MsRUFBRSxHQUN2QixFQUFFLEVBQ0YsRUFBRSxHQUFDZCxJQUFJLENBQUNlLEdBQUcsQ0FBQyxHQUFHLEdB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aEhyQyxPQUFPLHlFQUNIWixxREFBTztZQUFFa0YsSUFBSSxFQUFDLENBQUk7WUFBQ2pDLFFBQVEsRUFBQyxDQUFVO1lBQUNrQyxJQUFJLEVBQUMsQ0FBSztZQUFDQyxHQUFHLEVBQUMsQ0FBSztZQUFDTCxFQUFFLEVBQUMsQ0FBcUM7WUFDckdILEVBQUUsRUFBQyxDQUErQjs7Ozs7Ozs7O0FBSWxELENBQUM7R0EzR0tsRSxPQUFPO0tBQVBBLE9BQU87QUE2R2IsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3Ntb2wtaG9sb215dGguanM/ZDZmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnR7Qm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHtsb2FkR0xURk1vZGVsICB9IGZyb20gJy4uLy4uL2xpYnMvbW9kZWwnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpe1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtMSw0KSlcclxufVxyXG5cclxuY29uc3QgU21vbEFtZSA9ICgpPT57XHJcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW3JlbmRlcmVyLHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtfY2FtZXJhLHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdGFyZ2V0XT0gdXNlU3RhdGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpXHJcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgICAgICAyMCpNYXRoLnNpbigwLjIqTWF0aC5QSSksXHJcbiAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAyMCpNYXRoLmNvcygwLjIqTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcbiAgICBjb25zdCBbc2NlbmVdPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcclxuICAgIGNvbnN0IFtfY29udHJvbHMsc2V0Q29udHJvbHNdPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSAgdXNlQ2FsbGJhY2soKCk9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKCBjb250YWluZXIgJiYgcmVuZGVyZXIgKXtcclxuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csc2NIKVxyXG4gICAgICAgIH1cclxuICAgIH0sW3JlbmRlcmVyXSlcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3R7Y3VycmVudDpjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYoY29udGFpbmVyICYmICFyZW5kZXJlcil7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVz0gY29udGFpbmVyLmNsaWVudFdpZHRoXHJcbiAgICAgICAgICAgIGNvbnN0IHNjSD0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG4gICAgICAgICAgICAvLyA2NDAgLT4gMjQwXHJcbiAgICAgICAgICAgIC8vOCAtPjZcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDAuMDAxXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgMC4wMSxcclxuICAgICAgICAgICAgICAgIDEwMDAgXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEscmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCcvc21vbF9hbWVfaW5fYW5fdXBjeWNsZWRfdGVycmFyaXVtX2hvbG9saXZlZW4vc2NlbmUuZ2x0Zicse1xyXG4gICAgICAgICAgICAgICAgcmV2ZWl2ZVNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGU9ICgpICA9PntcclxuICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZVxyXG4gICAgICAgICAgICAgICAgaWYoZnJhbWU8PTEwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lLzEyMCkqTWF0aC5QSSogMjBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDVcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueipNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IHAueiAqIE1hdGguY29zKHJvdFNwZWVkKS0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICByZXR1cm4oKT0+e1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJyxoYW5kbGVXaW5kb3dSZXNpemUsZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbcmVuZGVyZXIsaGFuZGxlV2luZG93UmVzaXplXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggIHJlZj17cmVmQ29udGFpbmVyfSBjbGFzc05hbWU9J3ZveGVsLWRvZycgbT1cImF1dG9cIiAgbXQ9e1snLTIwcHgnLCctMHB4JywnMHB4J119IHB0PXtbJzU1cHgnLCc1MHB4JywnMzBweCddfVxyXG4gICAgICAgIG1iPXtbJy0yMHB4JywnLTE0MHB4JywnLTIzMHB4J119ICBtbD17Wyc0MHB4JywnNzBweCcsJzIwcHgnXX0gdz17WzI4MCw0ODAsNjQwXX0gaD17WzI4MCw0ODAsNjQwXX0gcG9zaXRpb249J3JlbGF0aXZlJz5cclxuICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgIHNpemU9XCJ4bFwiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBsZWZ0PVwiNTAlXCIgdG9wPVwiNTAlXCIgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkgLyAyKVwiXHJcbiAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4LSB2YXItLXNwaW5uZXItc2l6ZSkpXCIvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbW9sQW1lXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJyZW5kZXIiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlNtb2xBbWUiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJldmVpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwibXQiLCJwdCIsIm1iIiwibWwiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/smol-holomyth.js\n");

/***/ })

});