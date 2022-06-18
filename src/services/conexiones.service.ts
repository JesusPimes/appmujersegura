import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
//import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class ConexionesService {
 
  arreglo:any;
  constructor(private http:HttpClient){}
  
            
              getNoticiasLimit(limit:any){
  
                var promise = new Promise((resolve, reject) => {
                  this.http.get('https://noticias.nld.gob.mx/assets/php/getNoticias.php?limit='+limit).subscribe((data)=>{
                     
                        resolve(data)
                    })
                })    
                return promise;
              
              }
              getMasNoticias() {

                var promise = new Promise((resolve, reject) => {
                  this.http.get('https://app.nld.gob.mx/assets/php/masNoticias.php').subscribe((data) => {

                    resolve(data)
                  })
                })
                return promise;

              }
            getNumeros() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://app.nld.gob.mx/assets/php/getNumeros.php').subscribe((data) => {

                  resolve(data)
                })
              })
              return promise;

            }
            getModulos() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://app.nld.gob.mx/assets/php/getModulos.php').subscribe((data) => {

                  resolve(data)
                })
              })
              return promise;

            }
        getSubModulos(id) {

          var promise = new Promise((resolve, reject) => {
            this.http.get('https://app.nld.gob.mx/assets/php/getSubModulos.php?id='+id).subscribe((data) => {

              resolve(data)
            })
          })
          return promise;

        }
          getFlayers(id1,id2) {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://app.nld.gob.mx/assets/php/getFlayers.php?id1=' + id1 + '&id2='+id2).subscribe((data) => {

                resolve(data)
              })
            })
            return promise;

          }
          getDirectorio() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://app.nld.gob.mx/assets/php/getDirectorio.php').subscribe((data) => {

                resolve(data)
              })
            })
            return promise;

          }
          getVideo() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://app.nld.gob.mx/assets/php/getVideo.php').subscribe((data) => {

                resolve(data)
              })
            })
            return promise;

          }
          getBanner() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://app.nld.gob.mx/assets/php/getBanner.php').subscribe((data) => {

                resolve(data)
              })
            })
            return promise;

          }
          getDif() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://app.nld.gob.mx/assets/php/getDIf.php').subscribe((data) => {

                resolve(data)
              })
            })
            return promise;

          }
          getInmujer() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://app.nld.gob.mx/assets/php/getInmujer.php').subscribe((data) => {

                resolve(data)
              })
            })
            return promise;

          }
          getClima() {

            var promise = new Promise((resolve, reject) => {
              this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Nuevo%20Laredo&appid=3fed35c07341f198551df8460a16a83e&units=metric').subscribe((data) => {
            
                resolve(data)
              })
            })
            return promise;

          }
          addReporte(data: any) {
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
              })
            };

            var promise = new Promise((resolve, reject) => {
              this.http.post('https://app.nld.gob.mx/assets/php/addReporte.php',
                data, httpOptions).subscribe((resp: any) => {

                  if (resp.status) {
                    resolve(true)
                  } else {
                    resolve(false)
                  }

                })

            });
            return promise;
          }
          addReporte2(data: any) {
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
              })
            };

            var promise = new Promise((resolve, reject) => {
              this.http.post('https://app.nld.gob.mx/assets/php/addReporte2.php',
                data, httpOptions).subscribe((resp: any) => {

                  if (resp.status) {
                    resolve(true)
                  } else {
                    resolve(false)
                  }

                })

            });
            return promise;
          }
          addUser(data: any) {
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
              })
            };

            var promise = new Promise((resolve, reject) => {
              this.http.post('https://app.nld.gob.mx/assets/php/addUsuario.php',
                data, httpOptions).subscribe((resp: any) => {
                  console.log(resp)
                  if (resp.status) {
                    resolve(true)
                  } else {
                    resolve(false)
                  }

                })

            });
            return promise;
          }
            addContactos(data: any) {
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/x-www-form-urlencoded'
                })
              };

              var promise = new Promise((resolve, reject) => {
                this.http.post('https://app.nld.gob.mx/assets/php/addContactos.php',
                  data, httpOptions).subscribe((resp: any) => {
                    console.log(resp)
                    if (resp.status) {
                      resolve(true)
                    } else {
                      resolve(false)
                    }

                  })

              });
              return promise;
            }
            getContactos(correo) {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://app.nld.gob.mx/assets/php/getContactos.php?correo='+correo).subscribe((data) => {

                  resolve(data)
                })
              })
              return promise;

            }
            getPrueba() {

              var promise = new Promise((resolve, reject) => {
                this.http.get('https://www.instagram.com/jesuspime/channel/?__a=1').subscribe((data) => {

                  resolve(data)
                })
              })
              return promise;

            }
            /*guardaFactura(data){
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/x-www-form-urlencoded'
                })
              };

              var promise = new Promise((resolve, reject) => {
                this.http.post('https://indeweb.net/csa/assets/php/guardaFactura.php', data,httpOptions).subscribe((resp:any)=>{
            
                if(resp.status){
                    resolve(true)
                  }else{
                    resolve(false)
                  }
              
                })
              
              });
              return promise;
            }
            getCargos(idchofer){
            
              var promise = new Promise((resolve, reject) => {
                  this.http.get('https://indeweb.net/csa/assets/php/getCargos.php?idchofer='+idchofer).subscribe((data)=>{
                  
                      resolve(data)
                  })
              })    
              return promise;
            
            }
            addPago(formaPago,idchofer){
            
              var promise = new Promise((resolve, reject) => {
                  this.http.get('https://indeweb.net/csa/assets/php/addPago.php?idchofer='+idchofer+"&tipoPago="+formaPago).subscribe((data)=>{
                  
                      resolve(data)
                  })
              })    
              return promise;
            
            }
            subeDoc(file,tipo,id){
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'multipart/form-data'
                })
              };
              console.log(file.get("file"))

              var promise = new Promise((resolve, reject) => {
                this.http.post('https://indeweb.net/csa/assets/php/subeImagen.php?tipo='+tipo+'&id='+id, file,httpOptions)
                .subscribe((resp:any)=>{
                console.log(resp)
                if(resp.status){
                    resolve(true)
                  }else{
                    resolve(false)
                  }
              
                },(error)=>{
                  console.log(error)
                })
              
              });
              return promise;
            }
            addUsuario(data){
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/x-www-form-urlencoded'
                })
              };

              var promise = new Promise((resolve, reject) => {
                this.http.post('https://indeweb.net/csa/assets/php/addUsuario.php', data,httpOptions).subscribe((resp:any)=>{
              
                if(resp.status){
                    resolve(true)
                  }else{
                    resolve(false)
                  }
              
                })
              
              });
              return promise;
            }
            eliminaUsuario(id){
            
              var promise = new Promise((resolve, reject) => {
                  this.http.get('https://indeweb.net/csa/assets/php/deleteUsuario.php?id='+id).subscribe((data)=>{
                  
                      resolve(data)
                  })
              })    
              return promise;
            
            }
            
            getUsuarios(){
            
              var promise = new Promise((resolve, reject) => {
                  this.http.get('https://indeweb.net/csa/assets/php/getUsuarios.php').subscribe((data)=>{
                  
                      resolve(data)
                  })
              })    
              return promise;
            
            }*/
  
}
