import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { ConexionesService } from '../services/conexiones.service'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '', icon: 'home' },
    { title: 'Módulos de Atención', url: 'modulos', icon: 'heart' },
    { title: 'Directorio Telefónico', url: 'directorio', icon: 'call' },
    
    
  ];
  numWhatsapp:any;
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private navCtrl: NavController,
              private db: ConexionesService) {


             /*   this.db.getNumeros().then((data: any) => {

                    this.numWhatsapp = "+52" + data[0].whatsapp;

                })*/


              }

  abre(item){
      console.log(item)
      if(item.url=='modulos'){
        this.navCtrl.navigateForward('modulos')
      }
    if (item.url == 'directorio') {
      this.navCtrl.navigateForward('directorio')
    }
     
      
  }

  async whatt() {

    await Browser.open({ presentationStyle: 'fullscreen', toolbarColor: '#9E2342', url: 'https://wa.me/' + this.numWhatsapp + '?text=Gobierno%20de%20Nuevo%20Laredo%20Linea%20de%20Atencion%20las%2024%20Horas.' });
  }
}
