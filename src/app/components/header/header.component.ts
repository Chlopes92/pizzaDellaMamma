import { Component, Input } from '@angular/core';
import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (public data: TableService){}

  table: any[] = [];

  ngOnInit(){
    this.table = this.data.newTable;
    console.log(this.table)
  }

  // isVisible = false;

  // hideParagraph() {
  //   this.isVisible = true;
  // }


}
