import { Component, OnInit } from '@angular/core';
import { ConexionesService } from '../../services/conexiones.service'
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage implements OnInit {
  modulos: any;
  web = false;
  constructor(private db: ConexionesService,
    private platform: Platform) { }

  ngOnInit() {
    if (this.platform.is("mobileweb") || this.platform.is("pwa")) {
      this.web = true;
    }
    this.db.getDirectorio().then((data: any) => {

      this.modulos = data;
      console.log(data)
    })
  }
  llamar(numero) {
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