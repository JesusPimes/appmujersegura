"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_contactos_contactos_module_ts"],{

/***/ 6793:
/*!*******************************************************!*\
  !*** ./src/app/contactos/contactos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPageRoutingModule": () => (/* binding */ ContactosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _contactos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactos.page */ 2316);




const routes = [
    {
        path: '',
        component: _contactos_page__WEBPACK_IMPORTED_MODULE_0__.ContactosPage
    }
];
let ContactosPageRoutingModule = class ContactosPageRoutingModule {
};
ContactosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactosPageRoutingModule);



/***/ }),

/***/ 4308:
/*!***********************************************!*\
  !*** ./src/app/contactos/contactos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPageModule": () => (/* binding */ ContactosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _contactos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactos-routing.module */ 6793);
/* harmony import */ var _contactos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactos.page */ 2316);







let ContactosPageModule = class ContactosPageModule {
};
ContactosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactosPageRoutingModule
        ],
        declarations: [_contactos_page__WEBPACK_IMPORTED_MODULE_1__.ContactosPage]
    })
], ContactosPageModule);



/***/ }),

/***/ 2316:
/*!*********************************************!*\
  !*** ./src/app/contactos/contactos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactosPage": () => (/* binding */ ContactosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contactos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contactos.page.html */ 7238);
/* harmony import */ var _contactos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactos.page.scss */ 5580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_services_user_servise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.servise */ 1972);
/* harmony import */ var _services_conexiones_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/conexiones.service */ 8285);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 6204);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 5732);








let ContactosPage = class ContactosPage {
    constructor(userS, db, androidPermissions, geolocation) {
        this.userS = userS;
        this.db = db;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.logCorreo = "";
        this.logPassword = "";
        this.nombre = "";
        this.correo = "";
        this.telefono = "";
        this.password = "";
        this.nombre1 = "";
        this.telefono1 = "";
        this.parentesco1 = "";
        this.nombre2 = "";
        this.telefono2 = "";
        this.parentesco2 = "";
        this.logeado = false;
        this.registrar = false;
        this.correoUser = "";
    }
    ngOnInit() {
        this.userS.isLoggedIn().then((user) => {
            if (user) {
                this.logeado = true;
                this.correoUser = user['email'];
                this.db.getContactos(this.correoUser).then((data) => {
                    if (data.length == 1) {
                        this.telefono1 = data[0].telefono;
                        this.parentesco1 = data[0].parentesco;
                        this.nombre1 = data[0].nombre;
                    }
                    else {
                        if (data.length == 2) {
                            this.telefono2 = data[0].telefono;
                            this.parentesco2 = data[0].parentesco;
                            this.nombre2 = data[0].nombre;
                            this.nombre1 = data[1].nombre;
                            this.telefono1 = data[1].telefono;
                            this.parentesco1 = data[1].parentesco;
                        }
                    }
                });
            }
        });
    }
    registra() {
        this.registrar = true;
    }
    registrarme() {
        if (this.nombre == "" || this.correo == "" || this.password == "" || this.telefono == "") {
            alert("Completar Datos");
        }
        else {
            let user = {
                correo: this.correo,
                password: this.password
            };
            this.userS.register(user).then((resp) => {
                this.registrar = false;
                let user = {
                    nombre: this.nombre,
                    correo: this.correo,
                    password: this.password,
                    telefono: this.telefono
                };
                this.db.addUser(user).then((resp) => {
                    console.log(resp);
                });
            }).catch((err) => {
                alert("Pruebe con otra contraseña");
            });
        }
    }
    guardar() {
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]).then(() => {
            this.geolocation.getCurrentPosition().then((resp) => {
                if (this.nombre1 == "" || this.telefono1 == "" || this.parentesco1 == "") {
                    alert("Completar Datos Contacto1");
                    return false;
                }
                else {
                    if (this.nombre2 != "" || this.parentesco2 != "") {
                        if (this.telefono2 == "") {
                            alert("Completar Datos Contacto2");
                            return false;
                        }
                        if (this.telefono2 != "") {
                            this.agrega();
                        }
                    }
                    else {
                        if (this.nombre2 == "" || this.telefono2 == "" || this.parentesco2 == "") {
                            this.agrega();
                        }
                    }
                }
            });
        });
    }
    agrega() {
        let contacto = {
            nombre1: this.nombre1,
            telefono1: this.telefono1,
            parentesco1: this.parentesco1,
            nombre2: this.nombre2,
            telefono2: this.telefono2,
            parentesco2: this.parentesco2,
            correoUser: this.correoUser
        };
        this.db.addContactos(contacto).then((resp) => {
            console.log(resp);
            if (true) {
                alert("Actualizado Correctamente");
                this.ngOnInit();
            }
        });
    }
    logearse() {
        let user = {
            correo: this.logCorreo,
            password: this.logPassword
        };
        this.userS.login(user).then((resp) => {
            this.logeado = true;
        }).catch((err) => {
            alert("Verificar correo o contraseña");
        });
    }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
};
ContactosPage.ctorParameters = () => [
    { type: src_services_user_servise__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _services_conexiones_service__WEBPACK_IMPORTED_MODULE_3__.ConexionesService },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__.AndroidPermissions },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation }
];
ContactosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contactos',
        template: _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contactos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contactos_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContactosPage);



/***/ }),

/***/ 7238:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/contactos/contactos.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header class=\"ion-no-border\" style=\"background-color: crimson;\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Contactos</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-facebook\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" />\n        </svg>\n      </ion-button>\n      <ion-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-instagram\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" />\n        </svg>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-item lines=\"none\">\n\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <p>@gobiernodenuevolaredo</p>\n      <h3>Gobierno de Nuevo Laredo</h3>\n    </ion-label>\n\n  </ion-item>\n  \n</ion-header>\n\n<ion-content>\n  <ion-grid *ngIf=\"!logeado && !registrar\">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n        <p style=\"color:rgb(220, 29, 111);\">Inicia Sesión para agregar tus contactos</p>\n        </ion-item>\n       \n        <ion-item>\n          <ion-label position=\"floating\">Tu Correo electronico</ion-label>\n          <ion-input [(ngModel)]=\"logCorreo\" placeholder=\"Correo electronico\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Tu Contraseña</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"logPassword\" placeholder=\"Contraseña\"></ion-input>\n        </ion-item>\n      \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"logearse()\">Iniciar sesión</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n          <ion-col class=\"text-center\">\n          \n            <p style=\"color:rgb(220, 29, 111);\" (click)=\"registra()\">¿No tienes ninguna cuenta?  Crea una.</p>\n          </ion-col>\n    </ion-row>\n      \n      \n   \n  </ion-grid>\n  <ion-grid *ngIf=\"registrar\">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Tu nombre Completo</ion-label>\n            <ion-input [(ngModel)]=\"nombre\" placeholder=\"\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Tu Correo electronico</ion-label>\n            <ion-input [(ngModel)]=\"correo\" placeholder=\"Correo para Inicio de Sesion\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Contraseña</ion-label>\n            <ion-input [(ngModel)]=\"password\" placeholder=\"Contraseña para Inicio de Sesion\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">Numero de Celular</ion-label>\n            <ion-input type=\"tel\" maxlength=\"10\"  [(ngModel)]=\"telefono\" placeholder=\"\" (keypress)=\"numericOnly($event)\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"text-center\">\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"registrarme()\">Registrarme</ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"logeado\">\n\n    <ion-row>\n      <ion-col>\n            <ion-item>\n              <h3 style=\"color:#9E2342\">Agrega tus Contactos</h3>\n              \n            </ion-item>\n        <ion-item class=\"\">\n          <ion-label position=\"floating\">Nombre Completo(1er Contacto)</ion-label>\n          <ion-input [(ngModel)]=\"nombre1\" placeholder=\"Nombre de tu primer contacto\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Numero de Celular</ion-label>\n          <ion-input type=\"tel\" maxlength=\"10\" [(ngModel)]=\"telefono1\"  placeholder=\"Celular de tu primer contacto\" (keypress)=\"numericOnly($event)\">\n          </ion-input>\n        </ion-item>\n        <ion-item class=\"\">\n          <ion-label position=\"floating\">Parentesco</ion-label>\n          <ion-input [(ngModel)]=\"parentesco1\" placeholder=\"Parentesco\"></ion-input>\n        </ion-item>\n        <br>\n        <br>\n        <ion-item class=\"\">\n          <ion-label position=\"floating\">Nombre Completo(2do Contacto)</ion-label>\n          <ion-input [(ngModel)]=\"nombre2\" placeholder=\"Nombre de tu primer contacto\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Numero de Celular</ion-label>\n          <ion-input type=\"tel\" maxlength=\"10\" [(ngModel)]=\"telefono2\" placeholder=\"Celular de tu primer contacto\"\n            (keypress)=\"numericOnly($event)\">\n          </ion-input>\n        </ion-item>\n        <ion-item class=\"\">\n          <ion-label position=\"floating\">Parentesco</ion-label>\n          <ion-input [(ngModel)]=\"parentesco2\" placeholder=\"Parentesco\"></ion-input>\n        </ion-item>\n       \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <ion-button expand=\"block\" shape=\"round\" (click)=\"guardar()\">Guardar Contactos</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 5580:
/*!***********************************************!*\
  !*** ./src/app/contactos/contactos.page.scss ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-background-color, #f1f5f8) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3Rvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtREFBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3Rvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZjFmNWY4KVxyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_contactos_contactos_module_ts.js.map