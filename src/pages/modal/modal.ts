import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor( private navParams: NavParams, private view: ViewController) {
  }
    ionViewWillLoad() {
    const data =this.navParams.get('data');
    console.log(data);
  }

  closeModal(){
    const data = {
      name:'JCVD',
      caractère:'plutot fort'
    }
    this.view.dismiss(data);
  }



}
