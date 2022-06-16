import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ConexionesService } from '../../services/conexiones.service'


@Component({
  selector: 'app-flayers',
  templateUrl: './flayers.page.html',
  styleUrls: ['./flayers.page.scss'],
})
export class FlayersPage implements OnInit {
  items = [];
  modulo="";
  submodulo="";
  constructor(private db: ConexionesService, private route: ActivatedRoute) { 

    this.route.params.subscribe(params => {
      this.modulo = params['id1'];
      this.submodulo= params['id2'];

    });
  }

  ngOnInit() {
    this.db.getFlayers(this.modulo,this.submodulo).then((data: any) => {

      this.items = data;
      console.log(data)
    })
  }

}
