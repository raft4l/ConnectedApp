import { Component } from '@angular/core';
import { Modal,ModalController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private modal: ModalController) {

  }
  openModal(){

    const myData = {
      name:'Rapha',
      numero:'42'
    };

    const myModal : Modal = this.modal.create('ModalPage',{ data : myData});

    myModal.present();
    myModal.onDidDismiss((data )=>{console.log(data);})
  }

}
