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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/model */ \"./libs/model.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar SmolAme = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_5__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            // 640 -> 240\n            //8 ->6\n            var scale = scH * 0.005;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 1000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf', {\n                reveiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 5;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener('resize', handleWindowResize, false);\n        return function() {\n            window.removeEventListener('resize', handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        mt: [\n            '-20px',\n            '-0px',\n            '0px'\n        ],\n        pt: [\n            '85px',\n            '50px',\n            '20px'\n        ],\n        mb: [\n            '-20px',\n            '-140px',\n            '-200px'\n        ],\n        ml: [\n            '40px',\n            '70px',\n            '20px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\smol-holomyth.js\",\n            lineNumber: 111,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) / 2)\",\n            mt: \"calc(0px- var--spinner-size))\",\n            __source: {\n                fileName: \"D:\\\\portfolio\\\\components\\\\layouts\\\\smol-holomyth.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            },\n            __self: _this\n        })\n    }));\n};\n_s(SmolAme, \"DexddHUgesbeMO6Qxo3IwVdRK5s=\");\n_c = SmolAme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SmolAme);\nvar _c;\n$RefreshReg$(_c, \"SmolAme\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvc21vbC1ob2xvbXl0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ2pCO0FBQ2Y7QUFDMkM7QUFDekI7QUFDZDs7O1NBRXpCVSxXQUFXLENBQUNDLENBQUMsRUFBQyxDQUFDO0lBQ3BCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLEdBQUcsQ0FBQ0gsQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxHQUFLLENBQUNJLE9BQU8sR0FBRyxRQUNmLEdBRG1CLENBQUM7O0lBQ2pCLEdBQUssQ0FBQ0MsWUFBWSxHQUFHZCw2Q0FBTTtJQUMzQixHQUFLLENBQXdCRixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFuQ2lCLE9BQU8sR0FBZWpCLEdBQWMsS0FBNUJrQixVQUFVLEdBQUlsQixHQUFjO0lBQzNDLEdBQUssQ0FBMEJBLElBQVUsR0FBVkEsK0NBQVEsSUFBaENtQixRQUFRLEdBQWdCbkIsSUFBVSxLQUF6Qm9CLFdBQVcsR0FBSXBCLElBQVU7SUFDekMsR0FBSyxDQUF1QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUE3QnFCLE9BQU8sR0FBY3JCLElBQVUsS0FBdkJzQixTQUFTLEdBQUl0QixJQUFVO0lBQ3RDLEdBQUssQ0FBV0EsSUFBb0MsR0FBcENBLCtDQUFRLENBQUMsR0FBRyxDQUFDTSwwQ0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUEzQ2tCLE1BQU0sR0FBR3hCLElBQW9DO0lBQ3BELEdBQUssQ0FBMkJBLElBTS9CLEdBTitCQSwrQ0FBUSxDQUNwQyxHQUFHLENBQUNNLDBDQUFhLENBQ2IsRUFBRSxHQUFDTSxJQUFJLENBQUNhLEdBQUcsQ0FBQyxHQUFHLEdBQUNiLElBQUksQ0FBQ2MsRUFBRSxHQUN2QixFQUFFLEVBQ0YsRUFBRSxHQUFDZCxJQUFJLENBQUNlLEdBQUcsQ0FBQyxHQUFHLEdB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eUVBQ0haLHFEQUFPO1lBQUVrRixJQUFJLEVBQUMsQ0FBSTtZQUFDakMsUUFBUSxFQUFDLENBQVU7WUFBQ2tDLElBQUksRUFBQyxDQUFLO1lBQUNDLEdBQUcsRUFBQyxDQUFLO1lBQUNMLEVBQUUsRUFBQyxDQUFxQztZQUNyR0gsRUFBRSxFQUFDLENBQStCOzs7Ozs7Ozs7QUFJbEQsQ0FBQztHQTNHS2xFLE9BQU87S0FBUEEsT0FBTztBQTZHYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dHMvc21vbC1ob2xvbXl0aC5qcz9kNmYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXHJcbmltcG9ydHtCb3gsIFNwaW5uZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xyXG5pbXBvcnQge2xvYWRHTFRGTW9kZWwgIH0gZnJvbSAnLi4vLi4vbGlicy9tb2RlbCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCl7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0xLDQpKVxyXG59XHJcblxyXG5jb25zdCBTbW9sQW1lID0gKCk9PntcclxuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXHJcbiAgICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW19jYW1lcmEsc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFt0YXJnZXRdPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKSlcclxuICAgIGNvbnN0IFtpbml0aWFsQ2FtZXJhUG9zaXRpb25dID0gdXNlU3RhdGUoXHJcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICAgICAgIDIwKk1hdGguc2luKDAuMipNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwKk1hdGguY29zKDAuMipNYXRoLlBJKVxyXG4gICAgICAgIClcclxuICAgIClcclxuICAgIGNvbnN0IFtzY2VuZV09IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxyXG4gICAgY29uc3QgW19jb250cm9scyxzZXRDb250cm9sc109IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9ICB1c2VDYWxsYmFjaygoKT0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyXHJcbiAgICAgICAgaWYoIGNvbnRhaW5lciAmJiByZW5kZXJlciApe1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXHJcbiAgICAgICAgfVxyXG4gICAgfSxbcmVuZGVyZXJdKVxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdHtjdXJyZW50OmNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZihjb250YWluZXIgJiYgIXJlbmRlcmVyKXtcclxuICAgICAgICAgICAgY29uc3Qgc2NXPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csc2NIKVxyXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXHJcbiAgICAgICAgICAgIC8vIDY0MCAtPiAyNDBcclxuICAgICAgICAgICAgLy84IC0+NlxyXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1IFxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZSxcclxuICAgICAgICAgICAgICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgICAgIDAuMDEsXHJcbiAgICAgICAgICAgICAgICAxMDAwIFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLDEpXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXHJcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxyXG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcclxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwnL3Ntb2xfYW1lX2luX2FuX3VwY3ljbGVkX3RlcnJhcml1bV9ob2xvbGl2ZWVuL3NjZW5lLmdsdGYnLHtcclxuICAgICAgICAgICAgICAgIHJldmVpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2VcclxuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlPSAoKSAgPT57XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lPD0xMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8xMjApKk1hdGguUEkqIDIwXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSA1XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnoqTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCktIHAueCAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLGhhbmRsZVdpbmRvd1Jlc2l6ZSwgZmFsc2UpXHJcbiAgICAgICAgcmV0dXJuKCk9PntcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsaGFuZGxlV2luZG93UmVzaXplLGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sW3JlbmRlcmVyLGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94ICByZWY9e3JlZkNvbnRhaW5lcn0gY2xhc3NOYW1lPSd2b3hlbC1kb2cnIG09XCJhdXRvXCIgIG10PXtbJy0yMHB4JywnLTBweCcsJzBweCddfSBwdD17Wyc4NXB4JywnNTBweCcsJzIwcHgnXX1cclxuICAgICAgICBtYj17WyctMjBweCcsJy0xNDBweCcsJy0yMDBweCddfSAgbWw9e1snNDBweCcsJzcwcHgnLCcyMHB4J119IHc9e1syODAsNDgwLDY0MF19IGg9e1syODAsNDgwLDY0MF19IHBvc2l0aW9uPSdyZWxhdGl2ZSc+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyICBzaXplPVwieGxcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgbGVmdD1cIjUwJVwiIHRvcD1cIjUwJVwiIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8gMilcIlxyXG4gICAgICAgICAgICAgICAgbXQ9XCJjYWxjKDBweC0gdmFyLS1zcGlubmVyLXNpemUpKVwiLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU21vbEFtZVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIkJveCIsIlNwaW5uZXIiLCJUSFJFRSIsIk9yYml0Q29udHJvbHMiLCJsb2FkR0xURk1vZGVsIiwicmVuZGVyIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJTbW9sQW1lIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZXZlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsIm10IiwicHQiLCJtYiIsIm1sIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/smol-holomyth.js\n");

/***/ })

});