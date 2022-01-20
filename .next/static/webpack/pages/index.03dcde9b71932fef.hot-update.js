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

/***/ "./components/layouts/doughnut-shop.js":
/*!*********************************************!*\
  !*** ./components/layouts/doughnut-shop.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar DoughnutShop = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            //8 ->6\n            var scale = scH * 0.005 + 8.9;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/kitty_donut_shop/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 0;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-0px',\n            '0px'\n        ],\n        pt: [\n            '85px',\n            '50px',\n            '40px'\n        ],\n        mb: [\n            '-20px',\n            '-140px',\n            '-200px'\n        ],\n        ml: [\n            '40px',\n            '56px',\n            '-15px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\doughnut-shop.js\",\n            lineNumber: 111,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\doughnut-shop.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(DoughnutShop, \"DexddHUgesbeMO6Qxo3IwVdRK5s=\");\n_c = DoughnutShop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoughnutShop);\nvar _c;\n$RefreshReg$(_c, \"DoughnutShop\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pIckMsT0FBTyx5RUFDSFoscURBQU87WUFBRWtGLElBQUksRUFBQyxDQUFJO1lBQUNqQyxRQUFRLEVBQUMsQ0FBVTtZQUFDa0MsSUFBSSxFQUFDLENBQUs7WUFBQ0MsR0FBRyxFQUFDLENBQUs7WUFBQ0wsRUFBRSxFQUFDLENBQXFDO1lBQ3JHSCxFQUFFLEVBQUMsQ0FBK0I7Ozs7Ozs7OztBQUlsRCxDQUFDO0dBM0dLbEUsWUFBWTtLQUFaQSxZQUFZO0FBNkdsQiwrREFBZUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvZG91Z2hudXQtc2hvcC5qcz85YzRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydHtCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQge2xvYWRHTFRGTW9kZWwgIH0gZnJvbSAnLi4vLi4vbGlicy9tb2RlbCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0xLDQpKVxyXG59XHJcblxyXG5jb25zdCBEb3VnaG51dFNob3AgPSAoKT0+e1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZW5kZXJlcixzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbX2NhbWVyYSxzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF09IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAqTWF0aC5zaW4oMC4yKk1hdGguUEkpLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMjAqTWF0aC5jb3MoMC4yKk1hdGguUEkpXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG4gICAgY29uc3QgW3NjZW5lXT0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdCBbX2NvbnRyb2xzLHNldENvbnRyb2xzXT0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gIHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiggY29udGFpbmVyICYmIHJlbmRlcmVyICl7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICB9XHJcbiAgICB9LFtyZW5kZXJlcl0pXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0e2N1cnJlbnQ6Y29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBzY1c9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0g9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcclxuICAgICAgICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAgICAgICAvLzggLT42XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA4LjlcclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAwLjAxLFxyXG4gICAgICAgICAgICAgICAgNTAwMDBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG4gICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSxyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcclxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsJy9raXR0eV9kb251dF9zaG9wL3NjZW5lLmdsdGYnLHtcclxuICAgICAgICAgICAgICAgIHJldmVpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlPSAoKSAgPT57XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lPD0xMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8xMjApKk1hdGguUEkqIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnoqTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCktIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsaGFuZGxlV2luZG93UmVzaXplLGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sW3JlbmRlcmVyLGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94ICByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1kb2cnIG09XCJhdXRvXCIgIG10PXtbJy0yMHB4JywnLTBweCcsJzBweCddfSBwdD17Wyc4NXB4JywnNTBweCcsJzQwcHgnXX1cclxuICAgICAgICBtYj17WyctMjBweCcsJy0xNDBweCcsJy0yMDBweCddfSAgbWw9e1snNDBweCcsJzU2cHgnLCctMTVweCddfSB3PXtbMjgwLDQ4MCw2NDBdfSBoPXtbMjgwLDQ4MCw2NDBdfSBwb3NpdGlvbj0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHgtIHZhci0tc3Bpbm5lci1zaXplKSlcIi8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0U2hvcFxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwicmVuZGVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJEb3VnaG51dFNob3AiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJldmVpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwibXQiLCJwdCIsIm1iIiwibWwiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layouts/doughnut-shop.js\n");

/***/ })

});