"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 3949);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 7464);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/android-permissions/ngx */ 6204);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 5732);
/* harmony import */ var _awesome_cordova_plugins_sms_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/sms/ngx */ 1261);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/browser */ 9337);
/* harmony import */ var _services_conexiones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/conexiones.service */ 8285);
/* harmony import */ var src_services_user_servise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/user.servise */ 1972);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1119);













const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;
let HomePage = class HomePage {
    constructor(sanitizer, menuCtrl, navCtrl, platform, db, toast, androidPermissions, geolocation, sms, userService) {
        this.sanitizer = sanitizer;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.db = db;
        this.toast = toast;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.sms = sms;
        this.userService = userService;
        this.slidesOptions = {
            slidesPerView: 1.2
        };
        this.web = false;
        this.habilitanoticias = false;
        this.habilitadif = false;
        this.habilitainmujer = false;
        this.habilitarvideo = false;
        this.logeado = false;
        this.contactos = false;
        this.time = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('00:00');
        this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(100);
        this.state = 'stop';
        this.startDuration = 1;
        this.inicia = false;
        this.circleR = 80;
        this.circleDasharray = 2 * Math.PI * circleR;
        this.enviado = false;
    }
    ngOnInit() {
        this.userService.isLoggedIn().then((user) => {
            if (user) {
                this.logeado = true;
                this.email = user['email'];
                this.db.getContactos(user['email']).then((data) => {
                    console.log(data);
                    if (data.length >= 1) {
                        this.contactos = true;
                        if (data.length == 1) {
                            this.telefono1 = data[0].telefono;
                            this.totalContactos = 1;
                        }
                        else {
                            if (data.length == 2) {
                                this.telefono1 = data[0].telefono;
                                this.telefono2 = data[1].telefono;
                                this.totalContactos = 2;
                            }
                        }
                    }
                });
            }
        });
        if (this.platform.is("mobileweb") || this.platform.is("pwa")) {
            this.web = true;
        }
        this.trustedDashboardUrl =
            this.sanitizer.bypassSecurityTrustResourceUrl("https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDIFNLD%2Fvideos%2F434785294774168%2F&show_text=false&width=560&t=0");
        this.db.getNoticiasLimit(1).then((data) => {
            this.noticias = data;
        });
        this.db.getMasNoticias().then((data) => {
            this.masnoticias = data;
        });
        this.db.getBanner().then((data) => {
            this.banner = data;
        });
        this.db.getDif().then((data) => {
            this.dif = data;
        });
        this.db.getInmujer().then((data) => {
            this.inmujer = data;
        });
        this.db.getNumeros().then((data) => {
            this.emergencia = data[1].numero;
            this.numWhatsapp = data[0].numero;
        });
        this.db.getVideo().then((data) => {
            this.video = data[0].url;
            this.trustedDashboardUrl =
                this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
            if (data[0].habilitanoticias == "1") {
                this.habilitanoticias = true;
            }
            if (data[0].habilitadif == "1") {
                this.habilitadif = true;
            }
            if (data[0].habilitainmujer == "1") {
                this.habilitainmujer = true;
            }
            if (data[0].habilitavideo == "1") {
                this.habilitarvideo = true;
            }
        });
        this.db.getClima().then((resp) => {
            this.clima = resp['main'];
            this.icon = resp['weather'][0].icon;
            this.temp = Math.round(this.clima.temp);
        });
    }
    startTimer(duration) {
        this.state = 'start';
        clearInterval(this.interval);
        this.timer = duration * 5;
        this.updateTimeValue();
        this.interval = setInterval(() => {
            this.updateTimeValue();
        }, 1000);
    }
    stopTimer() {
        clearInterval(this.interval);
        this.time.next('00:00');
        this.state = 'stop';
        this.inicia = false;
    }
    percentageOffset(percent) {
        const persentFloat = percent / 100;
        return circleDasharray * (1 - persentFloat);
    }
    updateTimeValue() {
        let minutes = this.timer / 60;
        let seconds = this.timer % 60;
        minutes = String('0' + Math.floor(minutes)).slice(-2);
        seconds = String('0' + Math.floor(seconds)).slice(-2);
        const text = minutes + ':' + seconds;
        this.time.next(text);
        const totalTime = this.startDuration * 5;
        const percentage = ((totalTime - this.timer) / totalTime) * 100;
        this.percent.next(percentage);
        --this.timer;
        if (this.timer < -1) {
            // this.startTimer(this.startDuration)
            this.inicia = false;
            this.stopTimer();
            this.enviaMsj();
        }
    }
    enviaMsj() {
        if (this.contactos =  true && this.logeado == true) {
            const mapsGeoloc = "http://www.google.com/maps/place/";
            this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]).then(() => {
                this.geolocation.getCurrentPosition().then((resp) => {
                    var URLparameter = resp.coords.latitude + "," + resp.coords.longitude + "/";
                    if (this.totalContactos == 1) {
                        var phoneNumber = "+52" + this.telefono1;
                    }
                    if (this.totalContactos == 2) {
                        var phoneNumber = "+52" + this.telefono1;
                        var phoneNumber2 = "+52" + this.telefono2;
                    }
                    let textMessage = "Estoy en Peligro!!" + "\n" + mapsGeoloc + URLparameter;
                    const options = {
                        replaceLineBreaks: false,
                        android: {
                            intent: '' // send SMS with the native android SMS messaging
                        }
                    };
                    if (this.totalContactos == 1) {
                        this.sms.send(phoneNumber, textMessage, options).then((resp) => {
                            //   alert(JSON.stringify(resp))
                            alert("Enviada Correctamente");
                        }).catch(error => {
                            //   alert(JSON.stringify(error))
                        });
                    }
                    if (this.totalContactos == 2) {
                        this.sms.send(phoneNumber, textMessage, options).then((resp) => {
                            // alert(JSON.stringify(resp))
                            this.sms.send(phoneNumber2, textMessage, options).then((resp) => {
                                alert("Enviada Correctamente");
                            }).catch(error => {
                                alert(JSON.stringify(error));
                            });
                        }).catch(error => {
                            alert(JSON.stringify(error));
                        });
                    }
                    this.enviado = true;
                });
            });
        }
        else {
            alert("Iniciar Sesion y agregar contactos");
        }
    }
    agregaContactos() {
        this.navCtrl.navigateForward('/contactos');
    }
    toggleMenu() {
        this.menuCtrl.toggle(); //Add this method to your button click function
    }
    modulos() {
        this.navCtrl.navigateForward('/modulos');
    }
    contactoss() {
        this.navCtrl.navigateForward('/contactos');
    }
    denuncia() {
        this.navCtrl.navigateForward('denuncia');
    }
    abreNoticia(item) {
        let navigationExtras = {
            queryParams: {
                noticia: JSON.stringify(item)
            }
        };
        this.navCtrl.navigateForward(['noticiaid'], navigationExtras);
    }
    call() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.numWhatsapp != '') {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://wa.me/' + this.numWhatsapp + '' });
            }
            else {
                this.presentToast("En proceso de actualización");
            }
        });
    }
    llamar() {
        if (this.platform.is("ios") || this.platform.is("android") || this.platform.is("cordova") || this.platform.is("capacitor")) {
            window['plugins'].CallNumber.callNumber(onSuccess, onError, this.emergencia, false);
        }
        else {
        }
    }
    face() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://www.facebook.com/gobiernodenuevolaredo' });
        });
    }
    face2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://www.instagram.com/carmenliliacrv/?fbclid=IwAR11a5DKTqlzNEf7mL6a4mA0zCvQdP_zbzG02teuKDqEZMXpyKHBL9hplfo' });
        });
    }
    insta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://www.instagram.com/gob_nuevolaredo/' });
        });
    }
    abreCiga() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'http://072.mx/nuevolaredo/' });
        });
    }
    abrePagina(pagina) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: pagina });
        });
    }
    alerta() {
        if (this.logeado == true) {
            this.db.getContactos(this.email).then((data) => {
                if (data.length >= 1) {
                    this.startTimer(this.startDuration);
                    this.inicia = true;
                }
            });
        }
        else {
            this.navCtrl.navigateForward('/contactos');
        }
    }
    presentToast(msj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: msj,
                duration: 2000,
                color: 'dark'
            });
            toast.present();
        });
    }
    salir() {
        this.userService.salir().then((resp) => {
            this.ngOnInit();
            this.logeado = false;
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _services_conexiones_service__WEBPACK_IMPORTED_MODULE_6__.ConexionesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _awesome_cordova_plugins_sms_ngx__WEBPACK_IMPORTED_MODULE_4__.SMS },
    { type: src_services_user_servise__WEBPACK_IMPORTED_MODULE_7__.UserService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _C_Node_ionic_appnldmujersegura_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);

function onSuccess(result) {
    console.log("Success:" + result);
}
function onError(result) {
    console.log("Error:" + result);
}


/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"toggleMenu()\">\n        <ion-icon name=\"apps\" class=\"colorr\" size=\"medium\" ></ion-icon>\n      </ion-button>\n     \n      <ion-button (click)=\"face()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-facebook\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\" />\n        </svg>\n      </ion-button>\n      <ion-button (click)=\"insta()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" fill=\"#9E2342\" class=\"bi bi-instagram\"\n          viewBox=\"0 0 16 16\">\n          <path\n            d=\"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z\" />\n        </svg>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n     \n      <ion-button (click)=\"contactoss()\">\n        <ion-icon class=\"icon-big\" name=\"options-outline\" style=\"zoom:1.3;\"></ion-icon>\n      </ion-button>\n      \n      <ion-button (click)=\"salir()\" *ngIf=\"logeado\">\n        <ion-icon name=\"log-out-outline\" class=\"icon-big\" style=\"zoom:1.3;\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"agregaContactos()\" *ngIf=\"!logeado\">\n        <ion-icon name=\"log-in-outline\" class=\"icon-big\" style=\"zoom:1.3;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n    \n \n   \n  <ion-item lines=\"none\" class=\"py-1\">\n\n    <ion-avatar slot=\"start\">\n      <img src=\"assets/img/logo.png\">\n    </ion-avatar>\n    <ion-label>\n      <p>@gobiernodenuevolaredo</p>\n      <h3>Gobierno de Nuevo Laredo</h3>\n    </ion-label>\n\n  </ion-item>\n\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-grid style=\"background-color: #f1f5f8;\"  class=\"py-2\">\n   <ion-row >\n      <ion-col size=\"7\">\n    \n      </ion-col>\n      <ion-col size=\"2\" >\n        <div class=\"center2\">\n              <!--  <ion-icon class=\"icon-big2\" name=\"partly-sunny-outline\"></ion-icon>-->\n              <img  src=\"https://openweathermap.org/img/w/{{icon}}.png\" />\n      </div>\n      </ion-col>\n        <ion-col size=\"3\" >\n        <div class=\"center\">\n          <h4>{{temp}}°C</h4>\n         \n        </div>\n        </ion-col>\n    </ion-row>\n\n   <ion-row>\n\n     <!--<ion-col *ngIf=\"!web\" size=\"5\" class=\"ion-text-center\">\n     \n      <ion-button size=\"medium\" color=\"favorite\" (click)=\"llamar()\">\n        <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n      Emergencia\n      </ion-button>\n    \n     </ion-col>-->\n        <ion-col  size=\"5\" class=\"ion-text-center\">\n        <a [href]=\"'tel:'+emergencia\">\n          <ion-button size=\"medium\" color=\"favorite\" >\n            <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon>\n            Emergencia\n          </ion-button>\n        </a>\n        </ion-col>\n      <ion-col size=\"7\" class=\"ion-text-center\">\n      \n        <ion-button size=\"medium\" color=\"favorite2\" (click)=\"modulos()\">\n          <ion-icon slot=\"start\" name=\"list-outline\"></ion-icon>\n          Modulos de Atención\n        </ion-button>\n      \n      </ion-col>\n    \n   </ion-row>\n  \n  </ion-grid>\n<ion-grid style=\"background-color: #f1f5f8;\"  class=\"py-2\">\n  <ion-row>\n    <ion-col size=\"12\" class=\"ion-text-center\" >\n\n      <img *ngIf=\"!inicia\" src=\"assets/img/alerta.png\" style=\"max-width:200px\" (click)=\"alerta()\"/>\n     <!-- <p style=\"font-size:12px ;color:#b41471\" *ngIf=\"!logeado\" (click)=\"agregaContactos()\"><strong>INICIAR SESIÓN</strong></p>-->\n     <!-- <p style=\"font-size:12px ;color:#b41471\" *ngIf=\"!contactos && logeado\" (click)=\"agregaContactos()\"><strong>AGREGA TUS CONTACTOS</strong></p>-->\n     \n      <p style=\"font-size:12px ;color:#b41471\" ><strong>CONECTADAS ESTAMOS MEJOR</strong></p>\n    <!--  <p style=\"font-size:12px ;color:rgb(60, 180, 0)\" *ngIf=\"enviado\"><strong>ALERTA ENVIADA CORRECTAMENTE A TUS CONTACTOS!</strong></p>-->\n\n\n\n      <br>\n    <!--  <h1 *ngIf=\"inicia\">{{time | async }}</h1>-->\n    <!--  <p (click)=\"startTimer(startDuration)\">Start</p>-->\n      <p *ngIf=\"inicia\" (click)=\"stopTimer()\">Detener</p>\n      <svg *ngIf=\"inicia\"\n        id=\"progress-circle\"\n        width=\"40vh\"\n        height=\"40vh\"\n        viewBox=\"0 0 300 300\"\n      >\n          <linearGradient id=\"linearColors1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n            <stop offset=\"0%\" stop-color=\"#ddd6f3\"></stop>\n            <stop offset=\"100%\" stop-color=\"#faaca8\"></stop>\n          </linearGradient>\n\n          <circle \n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"#f3f3f3\"\n            stroke-width=\"12\"\n          />\n          <circle\n            cx=\"50%\"\n            cy=\"50%\"\n            [attr.r]=\"circleR\"\n            fill=\"none\"\n            stroke=\"url(#linearColors1)\"\n            stroke-width=\"12\"\n            stroke-linecap=\"round\"\n            [attr.stroke-dasharray]=\"circleDasharray\"\n            [attr.stroke-dashoffset]=\"percentageOffset(percent | async)\"\n          />\n          <text x=\"50%\" y=\"55%\" class=\"timer-text\">{{time | async }}</text>\n      </svg>\n    \n    </ion-col>\n  </ion-row>\n</ion-grid>\n  \n  <div class=\"slides\" >\n  \n      <ion-slides [options]=\"slidesOptions\">\n        <ion-slide class=\"mx-2 my-2\" *ngFor=\"let item of banner\" >\n      \n          <div class=\"row\">\n            <div class=\"col-12\">\n                <img src=\"{{item.img}}\" class=\"w-100 rounded\">\n            </div>\n            <div class=\"col-12\">\n              <a style=\"font-size: small;color: mediumpurple;\"  (click)=\"abrePagina(item.pagina)\">{{item.pagina}}</a>\n            </div>\n          </div>\n          \n         \n          \n          \n      \n      \n        </ion-slide>\n        \n      \n      </ion-slides>\n      \n  </div>\n\n\n  <div class=\"container\">\n\n   \n    \n    <ion-item lines=\"none\">\n      <ion-grid>\n        <!--(click)=\"denuncia()\"-->\n        <ion-row class=\"ion-align-items-center\"   (click)=\"denuncia()\">\n          <ion-col size=\"2\" class=\"text-start\">\n            <div class=\"ion-text-start\">\n\n              <ion-icon size=\"large\"  slot=\"icon-only\" name=\"megaphone-outline\"></ion-icon>\n           \n            </div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-label>\n              <h3 style=\"font-size: 17px;\">Reporta</h3>\n              <h6 style=\"font-size: 15px;\">Denuncia una incidencia</h6>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button color=\"light\" fill=\"clear\">\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </ion-item>\n     \n    \n  \n  </div>\n  <div class=\"divRedondo\">\n    <ion-grid>\n      <ion-row class=\"mt-2\" *ngIf=\"habilitarvideo\">\n        <ion-col>\n         \n          <div class=\"fb-wrapper\">\n        <iframe\n          [src]=\"trustedDashboardUrl\" style=\"border:none;overflow:hidden;\" width=\"100%\" height=\"170px\" scrolling=\"no\" frameborder=\"0\" \n           ></iframe>\n          </div>\n        </ion-col>\n      </ion-row>\n        <div *ngIf=\"habilitanoticias\">\n        <ion-row class=\"\" *ngFor=\"let item of noticias\" (click)=\"abreNoticia(item)\" >\n          <ion-col size=\"5\" style=\"text-align: center;\">\n            <img src=\"{{item.archivo}}\"\n              style=\"object-fit: cover;height: 130px;max-height: 130px;\" class=\"img-fluid rounded w-100\" alt=\"...\">\n          </ion-col>\n          <ion-col size=\"7\">\n            <h6 class=\"card-title colorr\" style=\"font-size: 13px;margin-top: 0px;\">{{item.titulo}}</h6>\n            <p class=\"card-text module line-clamp\" style=\"-webkit-user-modify: read-write-plaintext-only;color:darkslategray;\">\n              {{item.descripcion}}\n            </p>\n        \n          </ion-col>\n        \n        </ion-row>\n        </div>\n        <div *ngIf=\"habilitadif\">\n        <ion-row class=\"\" *ngFor=\"let item of dif\" (click)=\"abreNoticia(item)\">\n          <ion-col size=\"5\" style=\"text-align: center;\">\n            <img src=\"{{item.archivo}}\" style=\"object-fit: cover;height: 130px;max-height: 130px;\" class=\"img-fluid rounded w-100\"\n              alt=\"...\">\n          </ion-col>\n          <ion-col size=\"7\">\n            <h6 class=\"card-title colorr\" style=\"font-size: 13px;margin-top: 0px;\">{{item.titulo}}</h6>\n            <p class=\"card-text module line-clamp\" style=\"-webkit-user-modify: read-write-plaintext-only;color:darkslategray;\">\n              {{item.descripcion}}\n            </p>\n        \n          </ion-col>\n        \n        </ion-row>\n        </div>\n        <div *ngIf=\"habilitainmujer\">\n        <ion-row class=\"\" *ngFor=\"let item of inmujer\" (click)=\"abreNoticia(item)\">\n          <ion-col size=\"5\" style=\"text-align: center;\">\n            <img src=\"{{item.archivo}}\" style=\"object-fit: cover;height: 130px;max-height: 130px;\" class=\"img-fluid rounded w-100\"\n              alt=\"...\">\n          </ion-col>\n          <ion-col size=\"7\">\n            <h6 class=\"card-title colorr\" style=\"font-size: 13px;margin-top: 0px;\">{{item.titulo}}</h6>\n            <p class=\"card-text module line-clamp\" style=\"-webkit-user-modify: read-write-plaintext-only;color:darkslategray;\">\n              {{item.descripcion}}\n            </p>\n        \n          </ion-col>\n        \n        </ion-row>\n        </div>\n         \n       \n    </ion-grid>\n    <ion-grid class=\"my-3\">\n      <ion-row (click)=\"abreCiga()\">\n        <ion-col>\n          <img src=\"assets/img/ciga.png\" class=\"rounded w-100\" />\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n      <ion-grid *ngIf=\"habilitanoticias\">\n        <ion-row >\n          <ion-col *ngFor=\"let item of masnoticias\" size=\"12\">\n            <img src=\"{{item.img}}\" class=\"rounded w-100\" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    \n \n    \n\n  </div>\n<!--\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"call()\">\n  <ion-fab-button color=\"success\">\n    <ion-icon name=\"logo-whatsapp\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>-->\n</ion-content>\n<ion-footer  class=\"ion-no-border\" > \n  <ion-toolbar >\n  \n  <div class=\"w-100 px-4\" (click)=\"face2()\">\n      <div   style=\"border-radius: 25px;background-color: rgba(0, 0, 0, 0.746);\">\n\n        <ion-row class=\"ion-justify-content-center  my-2\" >\n        <ion-item lines=\"none\" style=\"background-color: transparent;\">\n        \n          <ion-avatar slot=\"start\">\n            <img src=\"assets/img/carmen2.jpg\">\n          </ion-avatar>\n          <ion-label>\n            <p style=\"color: darkgrey;\">@CarmenLiliaCanturosasVillarreal</p>\n            <h3 style=\"color: white;\">Carmen Lilia Canturosas</h3>\n          </ion-label>\n        \n        </ion-item>\n          \n        </ion-row>\n        \n      </div>\n  </div>\n </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = ".colorr {\n  color: #9E2342;\n}\n\n.colorr2 {\n  color: #BB955E;\n}\n\n.divRedondo {\n  background: #f1f5f8;\n  padding: 10px 10px 10px 10px;\n  border-radius: 28px 28px 5px 5px;\n}\n\n.module {\n  overflow: hidden;\n}\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  font-size: small;\n  font-weight: 300;\n}\n\n.fuenteTitulo {\n  font-weight: 800;\n  font-size: x-large;\n}\n\n#line {\n  background-color: #b38e5d;\n  bottom: -10px;\n  width: 50px;\n  height: 5px;\n  margin-bottom: 20px;\n}\n\nion-title {\n  font-size: smaller;\n}\n\nion-header ion-toolbar, ion-header ion-item {\n  --background: #f1f5f8;\n  background: #f1f5f8;\n  padding: 0 10px;\n}\n\nion-header ion-toolbar .bordered {\n  --border-radius: 10px;\n  --box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #FFFFFF;\n}\n\nion-header ion-item h3 {\n  font-weight: 700;\n  font-size: 14px;\n  color: black;\n}\n\nion-header ion-item p {\n  font-weight: 500;\n  font-size: 14px;\n}\n\nion-header ion-item ion-avatar {\n  --border-radius: 40%;\n}\n\nion-button {\n  text-transform: none;\n}\n\nion-content {\n  --background: linear-gradient(90deg, #dc35a2 0%, rgb(237 9 125) 35%, rgb(231 113 143) 100%);\n  font-family: \"Gotham\";\n}\n\nion-content .slides {\n  background: #f1f5f8;\n  padding: 10px 10px 10px 10px;\n  border-radius: 0 0 28px 28px;\n}\n\nion-content ion-card {\n  width: 100%;\n  box-shadow: none;\n  border-radius: 14px;\n  padding: 14px;\n  background: rgba(255, 255, 255, 0.8);\n}\n\nion-content ion-card .main {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 7px 7px 20px #dbdfe2, -7px -7px 20px #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nion-content ion-card .main img {\n  width: 30px;\n}\n\nion-content ion-card .files {\n  padding-top: 14px;\n}\n\nion-content .container {\n  padding: 6px 20px;\n  color: #FFFFFF;\n}\n\nion-content .container ion-item {\n  --background: rgba(255,255,255,.1);\n  padding: 0;\n  margin: 14px 0;\n  --border-radius: 14px;\n  color: #FFFFFF;\n  font-weight: 600;\n}\n\nion-content .container ion-item ion-label {\n  padding: 6px 0;\n}\n\nion-content .container ion-item ion-label h4 {\n  font-weight: 600;\n  font-size: 16px;\n}\n\nion-content .container ion-item ion-label h6 {\n  color: rgba(255, 255, 255, 0.66);\n}\n\nion-content .container h2 {\n  padding-bottom: 8px;\n}\n\nion-footer {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-footer ion-toolbar, ion-footer ion-item {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  padding: 0 10px;\n}\n\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n\nion-avatar {\n  width: 42px;\n  height: 42px;\n}\n\n.icon-big {\n  color: #9E2342;\n  margin-top: 2px;\n}\n\n.icon-big2 {\n  color: #9dad09;\n  margin-top: 2px;\n  zoom: 2;\n}\n\n.center {\n  align-items: left;\n  text-align: left;\n  color: #b44f14;\n}\n\n.center2 {\n  padding-top: 4px;\n  align-items: right;\n  text-align: right;\n}\n\n.timer-text {\n  font-size: 36px;\n  text-anchor: middle;\n  font-weight: 600;\n  fill: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssY0FBQTtBQUNMOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ssbUJBQUE7RUFDQyw0QkFBQTtFQUNBLGdDQUFBO0FBR047O0FBQ0E7RUFFSSxnQkFBQTtBQUNKOztBQUNJO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ08sZ0JBQUE7RUFDQSxrQkFBQTtBQUdQOztBQUNBO0VBRUkseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNDO0VBQ0csa0JBQUE7QUFFSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0k7RUFDRSxxQkFBQTtFQUNBLDBEQUFBO0FBRE47O0FBT0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBTE47O0FBUUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFOTjs7QUFTSTtFQUNFLG9CQUFBO0FBUE47O0FBWUE7RUFDQyxvQkFBQTtBQVREOztBQVlBO0VBQ0MsMkZBQUE7RUFDQyxxQkFBQTtBQVRGOztBQVVFO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBUko7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQVRKOztBQVVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0RBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZOOztBQVlNO0VBQ0UsV0FBQTtBQVZSOztBQWlCSTtFQUNJLGlCQUFBO0FBZlI7O0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBbEJKOztBQXFCSTtFQUNFLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5CTjs7QUFxQk07RUFDRSxjQUFBO0FBbkJSOztBQXFCUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQW5CVjs7QUFxQlE7RUFDRSxnQ0FBQTtBQW5CVjs7QUF5Qkk7RUFDRSxtQkFBQTtBQXZCTjs7QUE4QkE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBM0JBOztBQTZCRTtFQUNDLHlCQUFBO0VBQ0gsd0NBQUE7RUFDSSxlQUFBO0FBM0JKOztBQStCQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7QUE1QkE7O0FBOEJBO0VBQ0UsV0FBQTtFQUNFLFlBQUE7QUEzQko7O0FBK0JBO0VBQVksY0FBQTtFQUFlLGVBQUE7QUExQjNCOztBQTRCQTtFQUFhLGNBQUE7RUFBZSxlQUFBO0VBQWdCLE9BQUE7QUF0QjVDOztBQXVCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBcEJGOztBQXNCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUE0QkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUF6QkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Jye1xyXG4gICAgIGNvbG9yOiM5RTIzNDJcclxufVxyXG4uY29sb3JyMntcclxuICAgIGNvbG9yOiNCQjk1NUVcclxufVxyXG4uZGl2UmVkb25kb3tcclxuICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyOHB4IDI4cHggNXB4IDVweDtcclxuICAgIFxyXG59XHJcblxyXG4ubW9kdWxlIHtcclxuICAgIFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5saW5lLWNsYW1wIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgIFxyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbi5mdWVudGVUaXR1bG97XHJcbiAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBcclxufVxyXG5cclxuI2xpbmUge1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzOGU1ZDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4gaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuaW9uLWhlYWRlciB7XHJcbiBcclxuICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjFmNWY4O1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmODtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC5ib3JkZXJlZCB7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgLS1ib3gtc2hhZG93OiA1cHggNXB4IDEwcHggI2QxZDFkMSwgLTVweCAtNXB4IDEwcHggI0ZGRkZGRjtcclxuICAgIH1cclxuIFxyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZGMzNWEyIDAlLCByZ2IoMjM3IDkgMTI1KSAzNSUsIHJnYigyMzEgMTEzIDE0MykgMTAwJSk7XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoYW0nOyBcclxuICAuc2xpZGVzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWY1Zjg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDI4cHggMjhweDtcclxuICB9XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOCk7XHJcbiAgICAubWFpbiB7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgIGJveC1zaGFkb3c6ICA3cHggN3B4IDIwcHggI2RiZGZlMiwgXHJcbiAgICAgICAgICAgICAtN3B4IC03cHggMjBweCAjZmZmZmZmO1xyXG4gICAgICAgICAgICBcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZpbGVzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgXHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDE0cHggMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDA7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC42Nik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gIGlvbi10b29sYmFyLCBpb24taXRlbSB7XHJcbiAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbi0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWF2YXRhcntcclxuICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxufVxyXG5cclxuXHJcbi5pY29uLWJpZyB7IGNvbG9yOiM5RTIzNDI7IG1hcmdpbi10b3A6IDJweDsgfVxyXG5cclxuLmljb24tYmlnMiB7IGNvbG9yOiM5ZGFkMDk7IG1hcmdpbi10b3A6IDJweDt6b29tOjI7IH1cclxuLmNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjojYjQ0ZjE0O1xyXG59XHJcbi5jZW50ZXIye1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cclxufVxyXG5cclxuXHJcbiNwcm9ncmVzcy1jaXJjbGV7XHJcblxyXG59XHJcblxyXG4udGltZXItdGV4dHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbmNob3I6bWlkZGxlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZmlsbDojMzMzO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map