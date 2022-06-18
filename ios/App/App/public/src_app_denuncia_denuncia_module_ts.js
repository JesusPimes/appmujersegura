"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_denuncia_denuncia_module_ts"],{

/***/ 7732:
/*!*****************************************************!*\
  !*** ./src/app/denuncia/denuncia-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DenunciaPageRoutingModule": () => (/* binding */ DenunciaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _denuncia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./denuncia.page */ 7284);




const routes = [
    {
        path: '',
        component: _denuncia_page__WEBPACK_IMPORTED_MODULE_0__.DenunciaPage
    }
];
let DenunciaPageRoutingModule = class DenunciaPageRoutingModule {
};
DenunciaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DenunciaPageRoutingModule);



/***/ }),

/***/ 2658:
/*!*********************************************!*\
  !*** ./src/app/denuncia/denuncia.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DenunciaPageModule": () => (/* binding */ DenunciaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _denuncia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./denuncia-routing.module */ 7732);
/* harmony import */ var _denuncia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denuncia.page */ 7284);







let DenunciaPageModule = class DenunciaPageModule {
};
DenunciaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _denuncia_routing_module__WEBPACK_IMPORTED_MODULE_0__.DenunciaPageRoutingModule
        ],
        declarations: [_denuncia_page__WEBPACK_IMPORTED_MODULE_1__.DenunciaPage]
    })
], DenunciaPageModule);



/***/ }),

/***/ 7284:
/*!*******************************************!*\
  !*** ./src/app/denuncia/denuncia.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DenunciaPage": () => (/* binding */ DenunciaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_denuncia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./denuncia.page.html */ 3056);
/* harmony import */ var _denuncia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./denuncia.page.scss */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _services_conexiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/conexiones.service */ 8285);






let DenunciaPage = class DenunciaPage {
    constructor(toast, db) {
        this.toast = toast;
        this.db = db;
        this.tipoReporte = "4";
        this.otro = "";
        this.nombre = "";
        this.telefono = "";
        this.correo = "";
        this.reporte = "";
    }
    ngOnInit() {
    }
    cambia() {
    }
    enviar() {
        if (this.tipoReporte == "5") {
            if (this.otro == "") {
                this.presentToast("Capturar Tipo de Reporte");
            }
            else {
                let form = {
                    tipoReporte: this.otro,
                    nombre: this.nombre,
                    telefono: this.telefono,
                    correo: this.correo,
                    reporte: this.reporte
                };
                this.db.addReporte(form).then((resp) => {
                    if (resp) {
                        this.presentToast("Reporte Enviado Correctamente");
                        this.nombre = "";
                        this.telefono = "";
                        this.correo = "";
                        this.reporte = "";
                        this.otro = "";
                    }
                });
            }
        }
        else {
            let form = {
                tiporeporte: this.tipoReporte,
                nombre: this.nombre,
                telefono: this.telefono,
                correo: this.correo,
                reporte: this.reporte
            };
            this.db.addReporte(form).then((resp) => {
                if (resp) {
                    this.presentToast("Reporte Enviado Correctamente");
                    this.nombre = "";
                    this.telefono = "";
                    this.correo = "";
                    this.reporte = "";
                    this.otro = "";
                }
            });
        }
    }
    presentToast(msj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msj,
                duration: 2000,
                color: 'dark'
            });
            toast.present();
        });
    }
};
DenunciaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _services_conexiones_service__WEBPACK_IMPORTED_MODULE_2__.ConexionesService }
];
DenunciaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-denuncia',
        template: _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_denuncia_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_denuncia_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DenunciaPage);



/***/ }),

/***/ 3056:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/denuncia/denuncia.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" style=\"background-color: crimson;\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Reporta</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-facebook\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" />\n        </svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-instagram\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" />\n        </svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <p>@gobiernodenuevolaredo</p>\n      <h3>Gobierno de Nuevo Laredo</h3>\n    </ion-label>\n\n  </ion-item>\n  <!--\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <h2 style=\"font-weight: bold;\">Modulos de Atencion</h2>\n      <p style=\"color: cadetblue;\">Atencion Directa</p>\n    </ion-col>\n    </ion-row>\n  -->\n\n</ion-header>\n   \n<ion-content>\n    <ion-grid>\n      <ion-row class=\"mt-5\">\n        <ion-col class=\"text-center\">\n          <h5 style=\"font-weight: bold;color: darkslategrey;\">Favor de llenar la siguiente Forma</h5>\n          <p style=\"color: gray;\">Seleccionar Tipo de Reporte</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>Tipo de reporte *</ion-label>\n        <ion-select placeholder=\"Seleccionar\" [(ngModel)]=\"tipoReporte\" (ngModelChange)=\"cambia()\">\n        \n          <ion-select-option value=\"Incumplimiento de obligaciones alimentarias\" >Incumplimiento de obligaciones alimentarias</ion-select-option>\n          <ion-select-option value=\"Hostigamiento sexual\">Hostigamiento sexual</ion-select-option>\n          <ion-select-option value=\"Violencia Familiar\">Violencia Familiar</ion-select-option>\n          <ion-select-option value=\"Violencia Digital\">Violencia Digital</ion-select-option>\n          <ion-select-option value=\"5\">Otro</ion-select-option>\n        </ion-select>\n       \n      </ion-item>\n      <ion-item *ngIf=\"tipoReporte=='5'\">\n        <ion-input  [(ngModel)]=\"otro\" placeholder=\"Escribe Otro\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Nombre</ion-label>\n        <ion-input  [(ngModel)]=\"nombre\" placeholder=\"Opcional\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Telefono</ion-label>\n        <ion-input type=\"number\" [(ngModel)]=\"telefono\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Correo</ion-label>\n        <ion-input [(ngModel)]=\"correo\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Escribir denuncia o reporte *</ion-label>\n        <ion-textarea [(ngModel)]=\"reporte\"></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\">\n    <ion-button expand=\"block\" shape=\"round\" (click)=\"enviar()\">Enviar</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 8977:
/*!*********************************************!*\
  !*** ./src/app/denuncia/denuncia.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-background-color, #f1f5f8) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbnVuY2lhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1EQUFBO0FBQ0oiLCJmaWxlIjoiZGVudW5jaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWY4KVxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_denuncia_denuncia_module_ts.js.map