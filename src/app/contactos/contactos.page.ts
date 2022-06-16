import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { UserService } from 'src/services/user.servise';
import { ConexionesService } from '../../services/conexiones.service'
import { SMS } from '@awesome-cordova-plugins/sms/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  logCorreo = "";
  logPassword = "";


  nombre="";
  correo="";
  telefono="";
  password = "";


  nombre1 = "";
  telefono1 ="";
  parentesco1="";
  

  nombre2 = "";
  telefono2="";
  parentesco2 = "";

  logeado=false;
  registrar = false;
  correoUser="";
  constructor(private userS: UserService, private db: ConexionesService, private androidPermissions: AndroidPermissions, private geolocation: Geolocation) { }

  ngOnInit() {

    this.userS.isLoggedIn().then((user)=>{
      if(user){
        this.logeado=true;
    
        this.correoUser = user['email'];
        this.db.getContactos(this.correoUser).then((data:any)=>{

        
          if(data.length==1){
        
            this.telefono1 = data[0].telefono;
            this.parentesco1 = data[0].parentesco;
            this.nombre1 = data[0].nombre;
          }else{
            if (data.length == 2) {
              this.telefono2 = data[0].telefono;
              this.parentesco2 = data[0].parentesco;
              this.nombre2 = data[0].nombre;

              this.nombre1 = data[1].nombre;
              this.telefono1 = data[1].telefono;
              this.parentesco1 = data[1].parentesco;
            }
          }
          
          



        })
      }
    
    })
    
  }
  registra(){
      this.registrar = true
  }
  registrarme(){
    if(this.nombre=="" || this.correo=="" || this.password=="" || this.telefono==""){
        alert("Completar Datos")
    }else{
      let user = {
        correo: this.correo,
        password: this.password
      }

      this.userS.register(user).then((resp) => {

        this.registrar = false;


        let user = {
          nombre: this.nombre,
          correo: this.correo,
          password: this.password,
          telefono: this.telefono
        }


        this.db.addUser(user).then((resp) => {
          console.log(resp)
        })


      }).catch((err) => {
        alert("Pruebe con otra contraseña")
      })
    }
    
  }
  guardar(){
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.SEND_SMS, this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION]).then(() => {
      this.geolocation.getCurrentPosition().then((resp) => {
          if (this.nombre1 == ""  || this.telefono1== "" || this.parentesco1 == "") {
            alert("Completar Datos Contacto1")
            return false;
          }else{
          


            if (this.nombre2 != "" || this.parentesco2 != ""){
               if(this.telefono2==""){
                 alert("Completar Datos Contacto2")
                 return false
               } 
              if (this.telefono2 != "") {
                  this.agrega()
              }
            }else{
              if (this.nombre2 == "" || this.telefono2 == "" || this.parentesco2 == "") {
                this.agrega()
              }
            }
                  


           
          
        }            

            
          
      })
    })
     
  }

  agrega(){
    let contacto = {
      nombre1: this.nombre1,
      telefono1: this.telefono1,
      parentesco1: this.parentesco1,
      nombre2: this.nombre2,
      telefono2: this.telefono2,
      parentesco2: this.parentesco2,
      correoUser: this.correoUser
    }


    this.db.addContactos(contacto).then((resp) => {
      console.log(resp)
      if (true) {
        alert("Actualizado Correctamente")
        this.ngOnInit()
      }
    })
  }

  logearse(){
    let user = {
      correo: this.logCorreo,
      password: this.logPassword
    }
    
    this.userS.login(user).then((resp) => {
     
     this.logeado = true;
    }).catch((err) => {
      alert("Verificar correo o contraseña")
    })
  }

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }
}
