"use strict";
exports.id = 652;
exports.ids = [652];
exports.modules = {

/***/ 4652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
    global: (props)=>({
            body: {
                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#FFFAF7', '#202023')(props),
                fontFamily: "'Nunito'",
                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#453F3D', '#F3F3F3')(props)
            }
        })
};
const components = {
    Heading: {
        variants: {
            'section-title': (props)=>({
                    color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#FFA8A9', '#FFDAC4')(props),
                    textDecoration: 'underline',
                    fontSize: 24,
                    fontFamily: "'Asap Condensed'",
                    textUnderLineOffset: 10,
                    textDecorationColor: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#FFA8A9', '#FFDAC4')(props),
                    textDecorationThickness: 3,
                    marginTop: 3,
                    marginBottom: 4
                })
            ,
            'page-title': {
                textDecoration: 'none',
                fontSize: 20,
                fontFamily: "'Asap Condensed'",
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: (props)=>({
                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#ffaeb2', '#ffd2b8')(props),
                textUnderlineOffset: 3
            })
    },
    Button: {
        baseStyle: (props)=>({
                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#ffaeb2', '#ffd2b8')(props),
                outline: 'none'
            })
    }
};
const fonts = {
    heading: "'Asap Condensed'"
};
const colors = {
    glassTeal: '#'
};
const config = {
    initialColorMode: 'dark',
    useSystemClorMode: true
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    config,
    styles,
    components,
    colors,
    fonts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;