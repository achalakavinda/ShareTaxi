import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverShareRide } from  '../driver-share-ride/driver-share-ride';
import { DriverShareRideUpcoming } from '../driver-share-ride-upcoming/driver-share-ride-upcoming';
import { ActiveDriverShareRide } from '../active-driver-share-ride/active-driver-share-ride';

/**
 * Generated class for the DriverShareTabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-driver-share-tabs',
  templateUrl: 'driver-share-tabs.html',
})
export class DriverShareTabs {

  DriverShareRide:any;
  DriverShareRideSelected:any;
  DriverShareRideUpcoming:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DriverShareRide = DriverShareRide;
    this.DriverShareRideSelected = ActiveDriverShareRide;
    this.DriverShareRideUpcoming = DriverShareRideUpcoming;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverShareTabs');
  }

}
