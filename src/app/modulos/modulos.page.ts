import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../../services/conexiones.service'
import {  Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SubmodulosPage } from '../submodulos/submodulos.page';
import { MenuController, NavController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})
export class ModulosPage implements OnInit {
  modulos:any;
  web=false;
  constructor(private db: ConexionesService,
    private platform: Platform, private modalCtrl: ModalController, private navCtrl:NavController) { }

  ngOnInit() {
    if (this.platform.is("mobileweb") || this.platform.is("pwa")) {
      this.web = true;
    }
    this.db.getModulos().then((data: any) => {

      this.modulos = data;
      console.log(data)
    })
  }
  directorio() {
    this.navCtrl.navigateForward('/directorio')
  }
  async presentModal(id,submodulo) {
    if(submodulo=="1"){
      const modal = await this.modalCtrl.create({
        component: SubmodulosPage,
        initialBreakpoint: 0.5,
        breakpoints: [0, 0.5, 1],
        componentProps: id,
        swipeToClose: true,
        presentingElement: await this.modalCtrl.getTop()
        
      });
      await modal.present();
    }else{
      this.navCtrl.navigateForward('/flayers/'+id+'/0')
    }
    
  }

  llamar(numero){
    let num = parseInt(numero)
    if (this.platform.is("cordova")) {
      window['plugins'].CallNumber.callNumber(onSuccess, onError, num, false);
    }
  }

}

function onSuccess(result) {
  console.log("Success:" + result);
}

function onError(result) {
  console.log("Error:" + result);
}
