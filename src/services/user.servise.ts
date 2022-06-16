import { Injectable } from "@angular/core";
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from '@angular/fire/auth'


@Injectable({
    providedIn:'root'
})
export class UserService {
    constructor(private auth: Auth){}


    isLoggedIn() {

        var promise = new Promise((resolve, reject) => {
            
            this.auth.onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    resolve(user)
                }
            });
           
        })
        return promise;
    }

    register({correo,password}:any){
        return createUserWithEmailAndPassword(this.auth,correo,password)
    }

    login({ correo, password }: any) {
        return signInWithEmailAndPassword(this.auth,correo,password)
    }
    salir(){
        return signOut(this.auth)
    }
}