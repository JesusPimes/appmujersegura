import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform, ToastController } from '@ionic/angular';
import { ConexionesService } from '../../services/conexiones.service'


@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.page.html',
  styleUrls: ['./denuncia.page.scss'],
})
export class DenunciaPage implements OnInit {
  tipoReporte="4";
  otro="";
  nombre="";
  telefono="";
  correo="";
  reporte="";
  constructor(private toast: ToastController, private db: ConexionesService) { }

  ngOnInit() {
  }
  cambia(){
    
  }
  enviar(){
    if(this.tipoReporte=="5"){
      if(this.otro==""){
        this.presentToast("Capturar Tipo de Reporte")
      }else{
          let form ={
              tipoReporte:this.otro,
              nombre:this.nombre,
              telefono: this.telefono,
              correo:this.correo,
              reporte:this.reporte
          }

          this.db.addReporte(form).then((resp)=>{
                
                if(resp){
                  this.presentToast("Reporte Enviado Correctamente")
                  this.nombre="";
                  this.telefono="";
                  this.correo="";
                  this.reporte="";
                  this.otro="";
                }
          })


      }
    }else{
          let form = {
            tiporeporte: this.tipoReporte,
            nombre: this.nombre,
            telefono: this.telefono,
            correo: this.correo,
            reporte: this.reporte
          }
      this.db.addReporte(form).then((resp) => {

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
