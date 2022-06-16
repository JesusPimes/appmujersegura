import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';
import { UserService } from 'src/services/user.servise';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private navCtrl: NavController, private userS: UserService) { }

  ngOnInit() {
    this.userS.isLoggedIn().then((user) => {
      if (user) {
        this.navCtrl.navigateRoot('home')
      }
    })  
  }
  iniciar(){

   
    this.navCtrl.navigateRoot('home')
  }
}
