"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_submodulos_submodulos_module_ts"],{

/***/ 6941:
/*!*********************************************************!*\
  !*** ./src/app/submodulos/submodulos-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmodulosPageRoutingModule": () => (/* binding */ SubmodulosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _submodulos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submodulos.page */ 2593);




const routes = [
    {
        path: '',
        component: _submodulos_page__WEBPACK_IMPORTED_MODULE_0__.SubmodulosPage
    }
];
let SubmodulosPageRoutingModule = class SubmodulosPageRoutingModule {
};
SubmodulosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubmodulosPageRoutingModule);



/***/ }),

/***/ 1711:
/*!*************************************************!*\
  !*** ./src/app/submodulos/submodulos.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmodulosPageModule": () => (/* binding */ SubmodulosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _submodulos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submodulos-routing.module */ 6941);
/* harmony import */ var _submodulos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submodulos.page */ 2593);







let SubmodulosPageModule = class SubmodulosPageModule {
};
SubmodulosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _submodulos_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubmodulosPageRoutingModule
        ],
        declarations: [_submodulos_page__WEBPACK_IMPORTED_MODULE_1__.SubmodulosPage]
    })
], SubmodulosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_submodulos_submodulos_module_ts.js.map