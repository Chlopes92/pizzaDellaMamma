import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibleService {

  showDivModification: boolean = true;
  showDivHome: boolean = false;
  showButton: boolean = false;
  // isVisible: boolean = true;

  showDivModificationChanged = new EventEmitter<boolean>();
  showDivHomeChanged = new EventEmitter<boolean>();
  //showButtonChanged = new EventEmitter <boolean>();
  // isVisibleChanged = new EventEmitter <boolean>();

  constructor() { }

  toggleShowDivModification() {
    this.showDivModification = false;
    this.showDivModificationChanged.emit(this.showDivModification);
  }

  toggleshowDivHome() {
    this.showDivHome = true;
    this.showDivHomeChanged.emit(this.showDivHome);
  }

  // toggleShowButton(){
  //   this.showButton = !this.showButton;
  //   this.showButtonChanged.emit(this.showButton);
  // }


}
