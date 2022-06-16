"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_noticiaid_noticiaid_module_ts"],{

/***/ 4830:
/*!*******************************************************!*\
  !*** ./src/app/noticiaid/noticiaid-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaidPageRoutingModule": () => (/* binding */ NoticiaidPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _noticiaid_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticiaid.page */ 2932);




const routes = [
    {
        path: '',
        component: _noticiaid_page__WEBPACK_IMPORTED_MODULE_0__.NoticiaidPage
    }
];
let NoticiaidPageRoutingModule = class NoticiaidPageRoutingModule {
};
NoticiaidPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoticiaidPageRoutingModule);



/***/ }),

/***/ 4363:
/*!***********************************************!*\
  !*** ./src/app/noticiaid/noticiaid.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaidPageModule": () => (/* binding */ NoticiaidPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _noticiaid_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticiaid-routing.module */ 4830);
/* harmony import */ var _noticiaid_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticiaid.page */ 2932);







let NoticiaidPageModule = class NoticiaidPageModule {
};
NoticiaidPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _noticiaid_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoticiaidPageRoutingModule
        ],
        declarations: [_noticiaid_page__WEBPACK_IMPORTED_MODULE_1__.NoticiaidPage]
    })
], NoticiaidPageModule);



/***/ }),

/***/ 2932:
/*!*********************************************!*\
  !*** ./src/app/noticiaid/noticiaid.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaidPage": () => (/* binding */ NoticiaidPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Node_ionic_appMujer_node_modules_ngtools_webpack_src_loaders_direct_resource_js_noticiaid_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./noticiaid.page.html */ 7616);
/* harmony import */ var _noticiaid_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticiaid.page.scss */ 6348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);





let NoticiaidPage = class NoticiaidPage {
    constructor(route) {
        this.route = route;
        this.route.queryParams.subscribe(params => {
            let noticia = JSON.parse(params['noticia']);
            this.titulo = noticia.titulo;
            this.descripcion = noticia.descripcion;
            this.fecha2 = noticia.fecha2;
            this.img = noticia.archivo;
            this.pagina = noticia.pagina;
        });
    }
    ngOnInit() {
    }
};
NoticiaidPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
NoticiaidPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-noticiaid',
        template: _C_Node_ionic_appMujer_node_modules_ngtools_webpack_src_loaders_direct_resource_js_noticiaid_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_noticiaid_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoticiaidPage);



/***/ }),

/***/ 7616:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/noticiaid/noticiaid.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" style=\"background-color: crimson;\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Noticias</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-facebook\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" />\n        </svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-instagram\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" />\n        </svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <p>@gobiernodenuevolaredo</p>\n      <h3>Gobierno de Nuevo Laredo</h3>\n    </ion-label>\n\n  </ion-item>\n  <!--\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <h2 style=\"font-weight: bold;\">Modulos de Atencion</h2>\n      <p style=\"color: cadetblue;\">Atencion Directa</p>\n    </ion-col>\n    </ion-row>\n  -->\n\n</ion-header>\n\n\n<ion-content>\n    <div class=\"divRedondo\">\n        <ion-grid>\n          <ion-row >\n            <ion-col>\n              <img src=\"{{img}}\" class=\"rounded w-100\" />\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-end\">\n                  <p style=\"color: gray;\">{{fecha2}}</p>\n              </div>\n              \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-justify\">\n                  <h5 style=\"font-size: 16px;margin-top: 0px;color:#9E2342;font-weight: bold;\">{{titulo}}</h5>\n              </div>\n              \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n                <div class=\"ion-text-justify\">\n                    <p style=\"color: darkslategray;\">{{descripcion}}</p>\n                </div>\n              \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-end\" >\n                <h5 style=\"font-size: 13px;margin-top: 0px;color:#f65789;font-weight: bold;\">{{pagina}}</h5>\n              </div>\n          \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 6348:
/*!***********************************************!*\
  !*** ./src/app/noticiaid/noticiaid.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-background-color, #f1f5f8) ;\n}\n\n.divRedondo {\n  background: white;\n  padding: 10px 10px 10px 10px;\n  border-radius: 10px 10px 10px 10px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljaWFpZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtREFBQTtBQUNKOztBQUNBO0VBQ08saUJBQUE7RUFDRCw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUVOIiwiZmlsZSI6Im5vdGljaWFpZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmMWY1ZjgpXHJcbn1cclxuLmRpdlJlZG9uZG97XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgXHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_noticiaid_noticiaid_module_ts.js.map