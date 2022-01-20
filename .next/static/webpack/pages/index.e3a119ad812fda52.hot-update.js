"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/strawberry-kitty.js":
/*!****************************************!*\
  !*** ./components/strawberry-kitty.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar StrawberryKitty = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(1.2, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(10 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/kitty_donut_shop/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 0;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-0px',\n            '0px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\strawberry-kitty.js\",\n            lineNumber: 110,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\strawberry-kitty.js\",\n                lineNumber: 113,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(StrawberryKitty, \"0sjm1+73Y6h7UZSbqw5wEnpatc4=\");\n_c = StrawberryKitty;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StrawberryKitty);\nvar _c;\n$RefreshReg$(_c, \"StrawberryKitty\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBK0I7Ozs7Ozs7OztBQUlsRCxDQUFDO0dBMUdLbEUsZUFBZTtLQUFmQSxlQUFlO0FBNEdyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3N0cmF3YmVycnkta2l0dHkuanM/OGFhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnR7Qm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHtsb2FkR0xURk1vZGVsICB9IGZyb20gJy4uL2xpYnMvbW9kZWwnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpe1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtMSw0KSlcclxufVxyXG5cclxuY29uc3QgU3RyYXdiZXJyeUtpdHR5ID0gKCk9PntcclxuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW19jYW1lcmEsc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0YXJnZXRdPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygxLjIsIDAsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMTAqTWF0aC5zaW4oMC4yKk1hdGguUEkpLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMjAqTWF0aC5jb3MoMC4yKk1hdGguUEkpXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG4gICAgY29uc3QgW3NjZW5lXT0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdCBbX2NvbnRyb2xzLHNldENvbnRyb2xzXT0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gIHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiggY29udGFpbmVyICYmIHJlbmRlcmVyICl7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICB9XHJcbiAgICB9LFtyZW5kZXJlcl0pXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0e2N1cnJlbnQ6Y29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBzY1c9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0g9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDhcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAwLjAxLFxyXG4gICAgICAgICAgICAgICAgNTAwMDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSxyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsJy9raXR0eV9kb251dF9zaG9wL3NjZW5lLmdsdGYnLHtcclxuICAgICAgICAgICAgICAgIHJldmVpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlPSAoKSAgPT57XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lPD0xMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8xMjApKk1hdGguUEkqIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnoqTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCktIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsaGFuZGxlV2luZG93UmVzaXplLGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sW3JlbmRlcmVyLGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94ICByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1kb2cnIG09XCJhdXRvXCIgIG10PXtbJy0yMHB4JywnLTBweCcsJzBweCddfVxyXG4gICAgICAgIG1iPXtbJy00MHB4JywnLTE0MHB4JywnLTIwMHB4J119IHc9e1syODAsNDgwLDY0MF19IGg9e1syODAsNDgwLDY0MF19IHBvc2l0aW9uPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyICBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKDBweC0gdmFyLS1zcGlubmVyLXNpemUpKVwiLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RyYXdiZXJyeUtpdHR5XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJyZW5kZXIiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlN0cmF3YmVycnlLaXR0eSIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmV2ZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJtdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/strawberry-kitty.js\n");

/***/ })

});