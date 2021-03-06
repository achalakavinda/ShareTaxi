import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { MessageHander } from '../../providers/message-hander';
import { AuthService } from '../../providers/auth-service';
import { Register } from '../register/register';
import { Main } from "../main/main";


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  registerCredentials = {
    email: 'achalakavinda@gmail.com',
    password: 'admin123'
  };

  constructor(
    public nav: NavController,
    private auth: AuthService,
    private msgHandler:MessageHander,
    public navParams: NavParams
  ) {
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
    this.loginValidator();    
  }



  //client registration new page
 createAccount(){
    this.nav.push(Register);
}

loginValidator(){
  let user=this.auth.getUid();
  if(user){
    this.nav.setRoot(Main);
  }
}

   login(){
    this.msgHandler.showLoading();
    this.auth.login(this.registerCredentials).then((response)=>{
      console.log('Loging Successfull',response);
      this.msgHandler.dissmisLoading();
      this.nav.setRoot(Main);
    }).catch((err)=>{
      this.msgHandler.dissmisLoading();
      this.msgHandler.showError(err.message);
    });
  }

  aboutPage(){
    console.log('about')
  }


}
