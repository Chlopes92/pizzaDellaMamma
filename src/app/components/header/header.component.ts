import { Component, Input } from '@angular/core';
import { TableService } from 'src/app/services/table/table.service';
import { VisibleService } from 'src/app/services/visible/visible.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // On appel le service Table
  constructor (public data: TableService, public visible: VisibleService){}

  // On utilise cette variable pour appeler celle du service Table
  table: any[] = [];

  

  
  ngOnInit(){
    this.table = this.data.newTable;
    console.log(this.table)
  }

  // showNewDiv() {
  //   this.visible.hideDivHome();
  //   this.visible.showDivModify();
  // }

  //Pour déclencher le service visible au click
  toggle() {
    this.visible.toggleShowDivModification();
  }

  //Pour déclencher le service visible au click
  toggleDivHome() {
    this.visible.toggleshowDivHome();
  }
  // isVisible = false;

  // hideParagraph() {
  //   this.isVisible = true;
  // }


}
