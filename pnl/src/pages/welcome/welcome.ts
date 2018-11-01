import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup'
import { HomePage } from '../home/home';
import { user } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


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
export class WelcomePage {

  user = {} as user;
  
  constructor(private ofAuth: AngularFireAuth, public navCtrl: NavController) {
  }

  async login(user: user){
    try{
    const result = this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if(result){
        this.navCtrl.setRoot('HomePage')
      }
    console.log(result);
    }
    catch(e){
      console.error(e)
    }
  }

  signup(){
    this.navCtrl.push('SignupPage')
  }

}
