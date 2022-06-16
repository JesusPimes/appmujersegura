import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { SMS } from '@awesome-cordova-plugins/sms/ngx';


import { Browser } from '@capacitor/browser';
import { ConexionesService } from '../../services/conexiones.service'
import { NavigationExtras } from '@angular/router';

import { UserService } from 'src/services/user.servise';
import { Alert } from 'selenium-webdriver';

import { BehaviorSubject } from 'rxjs';

const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slidesOptions = {
    slidesPerView: 1.2
  }
  trustedDashboardUrl: SafeUrl;
  noticias:any;
  numeros:any;
  emergencia:any;
  numWhatsapp:any;
  video:any;
  web=false;
  banner:any;
  clima:any;
  temp:any;
  icon:any;
  masnoticias:any;
  dif:any;
  inmujer:any
  habilitanoticias=false;
  habilitadif = false;
  habilitainmujer = false;
  habilitarvideo= false;
  logeado = false;
  contactos = false;

  telefono1:any;
  telefono2:any;
  totalContactos:any;

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');
  percent: BehaviorSubject<number> = new BehaviorSubject(100);
  timer:number;
  interval;
  state: 'start' | 'stop' = 'stop';
  startDuration = 1;
  inicia= false;
  circleR = 80;
  circleDasharray = 2 * Math.PI * circleR;
  enviado = false;
  email:any;
  constructor(private sanitizer: DomSanitizer, 
              public menuCtrl: MenuController, 
              private navCtrl: NavController,
              public platform: Platform,
              private db: ConexionesService,
              private toast:ToastController,
              private androidPermissions: AndroidPermissions,
              private geolocation: Geolocation,
              private sms: SMS,
              private userService:UserService
   
     ) { }
  
  ngOnInit() {

    this.userService.isLoggedIn().then((user)=>{
      if(user){
          this.logeado = true;
        this.email = user['email'];
       
        this.db.getContactos(user['email']).then((data: any) => {
            console.log(data)
          if (data.length >= 1) {
              this.contactos = true



            if (data.length == 1) {

              this.telefono1 = data[0].telefono;
              this.totalContactos = 1;
            
            } else {
              if (data.length == 2) {
                this.telefono1 = data[0].telefono;
                this.telefono2 = data[1].telefono;
                this.totalContactos = 2;
              
               
              }
            }





          }

        })
      }
    })


    if (this.platform.is("mobileweb") || this.platform.is("pwa")) {
      this.web = true;
    }
    this.trustedDashboardUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl("https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FDIFNLD%2Fvideos%2F434785294774168%2F&show_text=false&width=560&t=0");


    this.db.getNoticiasLimit(1).then((data: any) => {
    
      this.noticias = data;
    })
    this.db.getMasNoticias().then((data: any) => {

      this.masnoticias = data;
    })
    this.db.getBanner().then((data: any) => {

      this.banner = data;
    })
    this.db.getDif().then((data: any) => {

      this.dif = data;
    })
    this.db.getInmujer().then((data: any) => {

      this.inmujer = data;
    })
    this.db.getNumeros().then((data: any) => {
    
     
      this.emergencia = data[1].numero;
      this.numWhatsapp =  data[0].numero;
    
     
     
    })
    this.db.getVideo().then((data: any) => {

    this.video = data[0].url;

    
      this.trustedDashboardUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.video);


        if(data[0].habilitanoticias=="1"){
          this.habilitanoticias=true;
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
        
   
    })
    this.db.getClima().then((resp)=>{
          this.clima = resp['main'];
          this.icon = resp['weather'][0].icon;
          this.temp = Math.round(this.clima.temp)
        

    })




    




  }
  startTimer(duration: number) {
    this.state = 'start';
    clearInterval(this.interval)
    this.timer = duration * 5;

    this.updateTimeValue()


   this.interval = setInterval(()=>{
      this.updateTimeValue()
    },1000)
  }
  stopTimer(){
    clearInterval(this.interval);
    this.time.next('00:00')
    this.state = 'stop';
    this.inicia = false;
  }
  percentageOffset(percent){
    const persentFloat = percent / 100;
    return circleDasharray * (1 - persentFloat);
  }
  updateTimeValue(){
    let minutes:any = this.timer / 60;
    let seconds:any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2)
    seconds = String('0' + Math.floor(seconds)).slice(-2)

    const text = minutes + ':' + seconds;
    this.time.next(text);

    const totalTime = this.startDuration * 5;
    const percentage = ((totalTime - this.timer) / totalTime) * 100;
    this.percent.next(percentage)

    --this.timer;

    if(this.timer < -1){
     // this.startTimer(this.startDuration)
       this.inicia = false;
       this.stopTimer()
       this.enviaMsj()
    }

  }
  enviaMsj(){
  
    
          if(this.contactos=true && this.logeado==true){
          const mapsGeoloc = "http://www.google.com/maps/place/";
          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]).then(() => {
                this.geolocation.getCurrentPosition().then((resp) => {
                  var URLparameter = resp.coords.latitude + "," + resp.coords.longitude + "/";
                

                  if(this.totalContactos==1){
                    var phoneNumber = "+52" + this.telefono1;
                  }
                  if (this.totalContactos == 2) {
                    var phoneNumber = "+52" + this.telefono1;
                    var phoneNumber2 = "+52" + this.telefono2;
                  }
                  
                  let textMessage = "Estoy en Peligro!!" + "\n" + mapsGeoloc + URLparameter


                  const options = { 
                    replaceLineBreaks: false, // true to replace \n by a new line, false by default
                    android: {
                      intent: ''  // send SMS with the native android SMS messaging
                    }
                  };


                  if (this.totalContactos == 1) {
                        this.sms.send(phoneNumber, textMessage, options).then((resp) => {
                       //   alert(JSON.stringify(resp))
                       alert("Enviada Correctamente")
                        }).catch(error => {
                         //   alert(JSON.stringify(error))
                        });
                  }
                  if (this.totalContactos == 2) {
                    this.sms.send(phoneNumber, textMessage, options).then((resp) => {
                    // alert(JSON.stringify(resp))
                      this.sms.send(phoneNumber2, textMessage, options).then((resp) => {
                        alert("Enviada Correctamente")
                      }).catch(error => {
                        alert(JSON.stringify(error))
                      });
                    }).catch(error => {
                      alert(JSON.stringify(error))
                    });
                  
                  }


                  this.enviado = true;

                });
          });
          }else{
          alert("Iniciar Sesion y agregar contactos")
          }
  }
 
  agregaContactos(){
    this.navCtrl.navigateForward('/contactos')
  }
  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
  }
  modulos(){
      this.navCtrl.navigateForward('/modulos')
  }
  contactoss() {
    this.navCtrl.navigateForward('/contactos')
  }

  denuncia(){
    this.navCtrl.navigateForward('denuncia')
  }
  abreNoticia(item){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        noticia: JSON.stringify(item)
      }
    };
    this.navCtrl.navigateForward(['noticiaid'],  navigationExtras);
  }
 async call() {
   
  if(this.numWhatsapp!=''){
    await Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://wa.me/' + this.numWhatsapp + '' });
  }else{
    this.presentToast("En proceso de actualización")
  }
   
  }
  llamar(){
   
    if (this.platform.is("ios") || this.platform.is("android") || this.platform.is("cordova") || this.platform.is("capacitor")) {
      window['plugins'].CallNumber.callNumber(onSuccess, onError, this.emergencia, false);
    }
    else{

    }
     
  }

  async face(){
    await Browser.open({ presentationStyle:'fullscreen', toolbarColor:'#9E2342', url: 'https://www.facebook.com/gobiernodenuevolaredo' });         
  }
  async face2() {
    await Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://www.instagram.com/carmenliliacrv/?fbclid=IwAR11a5DKTqlzNEf7mL6a4mA0zCvQdP_zbzG02teuKDqEZMXpyKHBL9hplfo' });
  }
  async insta(){
    
    await Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://www.instagram.com/gob_nuevolaredo/' });

  }
  async abreCiga() {

    await Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'http://072.mx/nuevolaredo/' });

  }
async abrePagina(pagina){
  await Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: pagina });
}
  alerta(){
    if(this.logeado==true){
      this.db.getContactos(this.email).then((data: any) => {
       
        if (data.length >= 1) {
          this.startTimer(this.startDuration)
          this.inicia = true;
        }
      })
        
     
    }else{
      this.navCtrl.navigateForward('/contactos')
    }
    
   
  }
  


  async presentToast(msj) {
    const toast = await this.toast.create({
      message: msj,
      duration: 2000,
      color:'dark'
    });
    toast.present();
  }
  salir(){
    this.userService.salir().then((resp)=>{
      this.ngOnInit()
      this.logeado= false

    });
  }
}
function onSuccess(result) {
  console.log("Success:" + result);
}

function onError(result) {
  console.log("Error:" + result);
}