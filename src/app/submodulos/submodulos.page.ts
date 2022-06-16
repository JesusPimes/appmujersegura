import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ConexionesService } from '../../services/conexiones.service'
import { MenuController, NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-submodulos',
  templateUrl: './submodulos.page.html',
  styleUrls: ['./submodulos.page.scss'],
})
export class SubmodulosPage implements OnInit {
  moduloss=[];
  id1:any
  constructor(public navParams: NavParams, private db: ConexionesService, private navCtrl: NavController) { 
    let id = this.navParams.data[0];
   this.id1=id;

    this.db.getSubModulos(id).then((data: any) => {

      this.moduloss = data;
      console.log(data)
    })
    

   
    /*for(var i=0;i<data.length;i++){
      console.log(data[i])
    }*/
  
    
   // this.moduloss.push(data)
   // console.log(this.moduloss)
  }
  abreFlayers(item){
    this.navCtrl.navigateForward('/flayers/' + this.id1 + '/'+item.id)
  }
  ngOnInit() {
  }

}
