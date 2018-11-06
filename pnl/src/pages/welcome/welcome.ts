import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

import { user } from '../../models/user'
import { AngularFireAuth } from 'angularfire2/auth'

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {

  user ={} as user;

  constructor( private afAuth: AngularFireAuth,
    public navCtrl: NavController) {
  }

  async login(user:user){
    try{
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email , user.password);
    if(result){
    this.navCtrl.setRoot(HomePage)
    }
    }
    catch(e){
      console.error(e);
    }
  }

  signup(){
  this.navCtrl.push(SignupPage);
  }
}
