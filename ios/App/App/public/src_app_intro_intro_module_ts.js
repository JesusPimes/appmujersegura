"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_intro_intro_module_ts"],{

/***/ 6068:
/*!***********************************************!*\
  !*** ./src/app/intro/intro-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageRoutingModule": () => (/* binding */ IntroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 8315);




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ 2467:
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": () => (/* binding */ IntroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro-routing.module */ 6068);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page */ 8315);







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_0__.IntroPageRoutingModule
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_1__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 8315:
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": () => (/* binding */ IntroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./intro.page.html */ 9285);
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss */ 1674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_services_user_servise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.servise */ 1972);






let IntroPage = class IntroPage {
    constructor(navCtrl, userS) {
        this.navCtrl = navCtrl;
        this.userS = userS;
    }
    ngOnInit() {
        this.userS.isLoggedIn().then((user) => {
            if (user) {
                this.navCtrl.navigateRoot('home');
            }
        });
    }
    iniciar() {
        this.navCtrl.navigateRoot('home');
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_services_user_servise__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-intro',
        template: _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_intro_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], IntroPage);



/***/ }),

/***/ 9285:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/intro/intro.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content >\n  <div class=\"centro\">\n\n<br>\n  <br>\n  <br>\n  <br>\n  <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n    \n     <!-- <ion-col size=\"4\" >\n        <div class=\"ion-justify-content-between ion-justify-content-end ion-text-center\" >\n            <img src=\"assets/img/logo3.png\" style=\"border-radius: 10%; width: 110px;\" />\n        </div>\n        \n      </ion-col>-->\n      <ion-col size=\"12\">\n        <div class=\"ion-text-end\">\n          <h1  style=\"color: rgb(255, 88, 144);font-size: 40px;font-style: italic;margin-top: 57px;\">Mujer Segura</h1>\n          <p style=\"font-weight: 200;color: white;font-size: x-large;\">Gobierno de Nuevo Laredo</p>\n        </div>\n    \n      </ion-col>\n    \n    \n    \n    </ion-row>\n   \n    <br>\n    \n\n \n    <ion-row>\n      <ion-col size=\"4\"></ion-col>\n      <ion-col size=\"8\">\n          <div class=\"ion-text-end\">\n            <p style=\"font-weight: 200;color: white;font-size: x-large;font-style: italic\">Conectadas estamos Mejor</p>\n          </div>\n      </ion-col>\n    </ion-row><ion-row>\n      <ion-col class=\"text-center\" (click)=\"iniciar()\">\n        <ion-button expand=\"block\" shape=\"round\">Iniciar</ion-button>\n      </ion-col>\n    </ion-row>\n    \n  </ion-grid>\n    </div>\n</ion-content>\n\n");

/***/ }),

/***/ 1674:
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  font-family: \"Gotham\";\n  --background: url(\"/assets/img/fondoCarmen.png\") no-repeat center center / cover;\n  background-size: cover;\n}\n\n.centro {\n  margin-top: 50%;\n  text-align: center;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtFQUNELGtCQUFBO0VBRUMsYUFBQTtBQUFGIiwiZmlsZSI6ImludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnR290aGFtJztcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9mb25kb0Nhcm1lbi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNlbnRybyB7XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG4gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gXHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_intro_intro_module_ts.js.map