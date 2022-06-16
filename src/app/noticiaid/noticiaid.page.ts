import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-noticiaid',
  templateUrl: './noticiaid.page.html',
  styleUrls: ['./noticiaid.page.scss'],
})
export class NoticiaidPage implements OnInit {
  noticia:any;
  titulo:any;
  descripcion:any;
  fecha2:any;
  img:any
  pagina:any;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      let noticia = JSON.parse(params['noticia']);
      
      this.titulo=noticia.titulo;
      this.descripcion = noticia.descripcion;
      this.fecha2 = noticia.fecha2;
      this.img = noticia.archivo;
      this.pagina = noticia.pagina;
     
    });
  }

  ngOnInit() {
  }


}
