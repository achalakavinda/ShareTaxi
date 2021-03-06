import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FireLoader } from '../../providers/fire-loader';
/**
 * Generated class for the PaymentShared page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-shared',
  templateUrl: 'payment-shared.html',
})
export class PaymentShared {

  shared_ride_payment:FirebaseListObservable<any>;;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     public actionsheetCtrl: ActionSheetController,
     public platform: Platform,
     public angFire:AngularFire,
     public fireLoader:FireLoader
     ) {
       this.shared_ride_payment=this.angFire.database.list('/share_ride_payments'); 
       console.log(this.shared_ride_payment);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentShared');
    this.viewDetails();
  }

viewDetails(){
}

   openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Rate Me..',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '1 Star',
        
          icon: !this.platform.is('ios') ? 'ios-star' : null,
          handler: () => {
            console.log('Rated 1 Star');
          }
        },
        {
          text: '2 Star',
          icon: !this.platform.is('ios') ? 'ios-star' : null,
          handler: () => {
            console.log('Rated 2 Star');
          }
        },
        {
          text: '3 Star',
          icon: !this.platform.is('ios') ? 'ios-star' : null,
          handler: () => {
            console.log('Rated 3 Star');
          }
        },
        {
          text: '4 Star',
          icon: !this.platform.is('ios') ? 'ios-star' : null,
          handler: () => {
            console.log('Rated 4 Star');
          }
        },
        {
          text: '5 Star',
         // role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'ios-star' : null,
          handler: () => {
            console.log('Ratedd 5 Star');
          }
        },
         {
          text: 'Cansel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
         }
      ]
    });
    actionSheet.present();
  }

}
