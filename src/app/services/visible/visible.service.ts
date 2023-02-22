import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibleService {

  showDivHome: boolean = true;
  showDivModification: boolean = false;

  showDivHomeChanged = new EventEmitter<boolean>();
  showDivModificationChanged = new EventEmitter<boolean>();

  constructor() { }

  hideDivHome() {
    this.showDivHome = false;
    this.showDivHomeChanged.emit(this.showDivHome);
  }

  showDivModify() {
    this.showDivModification = true;
    this.showDivModificationChanged.emit(this.showDivModification);
  }

}
