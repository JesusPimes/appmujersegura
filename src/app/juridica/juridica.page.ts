import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { ConexionesService } from '../../services/conexiones.service'


@Component({
  selector: 'app-juridica',
  templateUrl: './juridica.page.html',
  styleUrls: ['./juridica.page.scss'],
})

export class JuridicaPage implements OnInit {
  tipoReporte = "4";
  otro = "";
  nombre = "";
  telefono = "";
  correo = "";
  reporte = "";
  constructor(private toast: ToastController, private db: ConexionesService) { }

  ngOnInit() {
  }
  enviar() {
   
      let form = {
        tiporeporte: this.tipoReporte,
        nombre: this.nombre,
        telefono: this.telefono,
        correo: this.correo,
        reporte: this.reporte
      }
      this.db.addReporte2(form).then((resp) => {

        if (resp) {
          this.presentToast("Reporte Enviado Correctamente")
          this.nombre = "";
          this.telefono = "";
          this.correo = "";
          this.reporte = "";
          this.otro = "";
        }
      })
 

  }
  async presentToast(msj) {
    const toast = await this.toast.create({
      message: msj,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

}
