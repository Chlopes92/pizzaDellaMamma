import { Component, Input } from '@angular/core';
import { TableService } from 'src/app/services/table/table.service';
import { VisibleService } from 'src/app/services/visible/visible.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public data: TableService, public visible: VisibleService){}

  table: any[] = [];

  ngOnInit(){
    this.table = this.data.newTable;
    console.log(this.table)
  }

  showNewDiv() {
    this.visible.hideDivHome();
    this.visible.showDivModify();
  }

  // isVisible = false;

  // hideParagraph() {
  //   this.isVisible = true;
  // }


}
