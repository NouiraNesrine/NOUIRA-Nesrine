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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar StrawberryKitty = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            //8 ->6\n            var scale = scH * 0.005 + 10.9;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/kitty_donut_shop/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 0;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-0px',\n            '0px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\strawberry-kitty.js\",\n            lineNumber: 111,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\strawberry-kitty.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(StrawberryKitty, \"DexddHUgesbeMO6Qxo3IwVdRK5s=\");\n_c = StrawberryKitty;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StrawberryKitty);\nvar _c;\n$RefreshReg$(_c, \"StrawberryKitty\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBcUM7WUFDckdQLEVBQUUsRUFBQyxDQUErQjs7Ozs7Ozs7O0FBSWxELENBQUM7R0EzR0tsRSxlQUFlO0tBQWZBLGVBQWU7QUE2R3JCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3RyYXdiZXJyeS1raXR0eS5qcz84YWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydHtCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQge2xvYWRHTFRGTW9kZWwgIH0gZnJvbSAnLi4vbGlicy9tb2RlbCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0xLDQpKVxyXG59XHJcblxyXG5jb25zdCBTdHJhd2JlcnJ5S2l0dHkgPSAoKT0+e1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZW5kZXJlcixzZXRSZW5kZXJlcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbX2NhbWVyYSxzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF09IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAqTWF0aC5zaW4oMC4yKk1hdGguUEkpLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMjAqTWF0aC5jb3MoMC4yKk1hdGguUEkpXHJcbiAgICAgICAgKVxyXG4gICAgKVxyXG4gICAgY29uc3QgW3NjZW5lXT0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdCBbX2NvbnRyb2xzLHNldENvbnRyb2xzXT0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gIHVzZUNhbGxiYWNrKCgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiggY29udGFpbmVyICYmIHJlbmRlcmVyICl7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLHNjSClcclxuICAgICAgICB9XHJcbiAgICB9LFtyZW5kZXJlcl0pXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0e2N1cnJlbnQ6Y29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpe1xyXG4gICAgICAgICAgICBjb25zdCBzY1c9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0g9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcclxuICAgICAgICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAgICAgICAvLzggLT42XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyAxMC45XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgMC4wMSxcclxuICAgICAgICAgICAgICAgIDUwMDAwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEscmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0XHJcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxyXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCcva2l0dHlfZG9udXRfc2hvcC9zY2VuZS5nbHRmJyx7XHJcbiAgICAgICAgICAgICAgICByZXZlaXZlU2hhZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoKVxyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCByZXEgPSBudWxsXHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZT0gKCkgID0+e1xyXG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXHJcbiAgICAgICAgICAgICAgICBpZihmcmFtZTw9MTAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUvMTIwKSpNYXRoLlBJKiAyMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56Kk1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIHJldHVybigpPT57XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLGhhbmRsZVdpbmRvd1Jlc2l6ZSxmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9LFtyZW5kZXJlcixoYW5kbGVXaW5kb3dSZXNpemVdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCAgcmVmPXtyZWZDb250YWluZXJ9IGNsYXNzTmFtZT0ndm94ZWwtZG9nJyBtPVwiYXV0b1wiICBtdD17WyctMjBweCcsJy0wcHgnLCcwcHgnXX1cclxuICAgICAgICBtYj17WyctNDBweCcsJy0xNDBweCcsJy0yMDBweCddfSB3PXtbMjgwLDQ4MCw2NDBdfSBoPXtbMjgwLDQ4MCw2NDBdfSBwb3NpdGlvbj0ncmVsYXRpdmUnPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciAgc2l6ZT1cInhsXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGxlZnQ9XCI1MCVcIiB0b3A9XCI1MCVcIiBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvIDIpXCJcclxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHgtIHZhci0tc3Bpbm5lci1zaXplKSlcIi8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0cmF3YmVycnlLaXR0eVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwicmVuZGVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJTdHJhd2JlcnJ5S2l0dHkiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0Iiwic2V0U2l6ZSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJldmVpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJkaXNwb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwibXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/strawberry-kitty.js\n");

/***/ })

});