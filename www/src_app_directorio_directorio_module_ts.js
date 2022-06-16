"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_directorio_directorio_module_ts"],{

/***/ 8367:
/*!*********************************************************!*\
  !*** ./src/app/directorio/directorio-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectorioPageRoutingModule": () => (/* binding */ DirectorioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _directorio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directorio.page */ 3362);




const routes = [
    {
        path: '',
        component: _directorio_page__WEBPACK_IMPORTED_MODULE_0__.DirectorioPage
    }
];
let DirectorioPageRoutingModule = class DirectorioPageRoutingModule {
};
DirectorioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DirectorioPageRoutingModule);



/***/ }),

/***/ 375:
/*!*************************************************!*\
  !*** ./src/app/directorio/directorio.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectorioPageModule": () => (/* binding */ DirectorioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _directorio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directorio-routing.module */ 8367);
/* harmony import */ var _directorio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directorio.page */ 3362);







let DirectorioPageModule = class DirectorioPageModule {
};
DirectorioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _directorio_routing_module__WEBPACK_IMPORTED_MODULE_0__.DirectorioPageRoutingModule
        ],
        declarations: [_directorio_page__WEBPACK_IMPORTED_MODULE_1__.DirectorioPage]
    })
], DirectorioPageModule);



/***/ }),

/***/ 3362:
/*!***********************************************!*\
  !*** ./src/app/directorio/directorio.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectorioPage": () => (/* binding */ DirectorioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_directorio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./directorio.page.html */ 3210);
/* harmony import */ var _directorio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directorio.page.scss */ 299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_conexiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/conexiones.service */ 8285);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 8099);






let DirectorioPage = class DirectorioPage {
    constructor(db, platform) {
        this.db = db;
        this.platform = platform;
        this.web = false;
    }
    ngOnInit() {
        if (this.platform.is("mobileweb") || this.platform.is("pwa")) {
            this.web = true;
        }
        this.db.getDirectorio().then((data) => {
            this.modulos = data;
            console.log(data);
        });
    }
    llamar(numero) {
        let num = parseInt(numero);
        if (this.platform.is("cordova")) {
            window['plugins'].CallNumber.callNumber(onSuccess, onError, num, false);
        }
    }
};
DirectorioPage.ctorParameters = () => [
    { type: _services_conexiones_service__WEBPACK_IMPORTED_MODULE_2__.ConexionesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform }
];
DirectorioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-directorio',
        template: _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_directorio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_directorio_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DirectorioPage);

function onSuccess(result) {
    console.log("Success:" + result);
}
function onError(result) {
    console.log("Error:" + result);
}


/***/ }),

/***/ 3210:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/directorio/directorio.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" style=\"background-color: crimson;\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size:initial;\">Directorio</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-facebook\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" />\n        </svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-instagram\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" />\n        </svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n<ion-item lines=\"none\" >\n\n  <ion-avatar slot=\"start\">\n    <img src=\"assets/img/logo.png\">\n  </ion-avatar>\n  <ion-label>\n    <p>@gobiernodenuevolaredo</p>\n    <h3>Gobierno de Nuevo Laredo</h3>\n  </ion-label>\n\n</ion-item>\n  <!--\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <h2 style=\"font-weight: bold;\">Modulos de Atencion</h2>\n      <p style=\"color: cadetblue;\">Atencion Directa</p>\n    </ion-col>\n    </ion-row>\n  -->\n  \n</ion-header>\n\n<ion-content >\n    \n\n    <ion-grid>\n    <!--  <div class=\"divRedondo\" >\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col class=\"text-center\">\n            <h3 class=\"h33\">Modulos de Atención</h3>\n          </ion-col>\n            \n        </ion-row>\n          \n      </div>-->\n      <ion-row>\n        <ion-col>\n         \n          <div >\n            <ion-grid>\n              <ion-row class=\"redondoIzq2 my-3\" *ngFor=\"let item of modulos\">\n                <ion-col size=\"2\" class=\"redondoIzq\" class=\"ion-align-self-center\"> \n\n                  <div *ngIf=\"!web\" class=\"text-center\" (click)=\"llamar(item.numero)\">\n                    <ion-icon size=\"large\" slot=\"start\" name=\"call\" color=\"light\"></ion-icon>\n                  </div>\n\n                  <div *ngIf=\"web\" class=\"text-center\" >\n                    <a [href]=\"'tel:'+item.numero\">\n                      <ion-icon size=\"large\" slot=\"start\" name=\"call\" color=\"light\"></ion-icon>\n                      </a>\n                  </div>\n                    \n                </ion-col>\n                <ion-col size=\"10\" class=\"redondoDer\">\n                      <div>\n                      <ion-item lines=\"none\">\n                      \n                        <ion-avatar slot=\"start\">\n                          <img src=\"{{item.logo}}\">\n                        </ion-avatar>\n                        <ion-label>\n                         \n                          <h2 style=\"font-weight: bolder;\">{{item.titulo}}</h2>\n                          <p>{{item.descripcion}}</p>\n                        </ion-label>\n                      \n                      </ion-item>\n                      </div>\n                </ion-col>\n              </ion-row>\n             \n            </ion-grid>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 299:
/*!*************************************************!*\
  !*** ./src/app/directorio/directorio.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-background-color, #f1f5f8) ;\n}\n\nion-avatar {\n  --border-radius:5px;\n  height: 60px;\n  width: 60px;\n}\n\n.divRedondo {\n  background: white;\n  padding: 10px 10px 10px 10px;\n  border-radius: 10px 10px 10px 10px;\n  margin-top: 5px;\n}\n\n.redondoIzq {\n  background: #af116d;\n  padding: 10px 10px 10px 10px;\n  border-radius: 10px 0px 0px 10px;\n  margin-top: 5px;\n}\n\n.redondoIzq2 {\n  background: #af116d;\n  padding: 0px 0px 0px 0px;\n  border-radius: 10px 10px 10px 10px;\n  margin-top: 5px;\n}\n\n.redondoDer {\n  background-color: white;\n  border-radius: 10px 10px 10px 10px;\n}\n\n.h33 {\n  font-family: monospace;\n  font-weight: bolder;\n  color: chocolate;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdG9yaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbURBQUE7QUFDSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFHQTtFQUNPLGlCQUFBO0VBQ0QsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFBTjs7QUFHQTtFQUNLLG1CQUFBO0VBQ0MsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFBTjs7QUFJQTtFQUNLLG1CQUFBO0VBQ0Msd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFETjs7QUFLQTtFQUNLLHVCQUFBO0VBRUMsa0NBQUE7QUFITjs7QUFRQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUxKIiwiZmlsZSI6ImRpcmVjdG9yaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWY4KVxyXG59XHJcblxyXG5cclxuaW9uLWF2YXRhcntcclxuICAgIC0tYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmRpdlJlZG9uZG97XHJcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgXHJcbn1cclxuLnJlZG9uZG9JenF7IFxyXG4gICAgIGJhY2tncm91bmQ6IHJnYigxNzUsIDE3LCAxMDkpO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4ucmVkb25kb0l6cTJ7IFxyXG4gICAgIGJhY2tncm91bmQ6IHJnYigxNzUsIDE3LCAxMDkpO1xyXG4gICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLnJlZG9uZG9EZXJ7IFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG4uaDMze1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogY2hvY29sYXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_directorio_directorio_module_ts.js.map