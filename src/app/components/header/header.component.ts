import { Component } from '@angular/core';
import { TableService } from 'src/app/services/table/table.service';
import { VisibleService } from 'src/app/services/visible/visible.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  table: any[] = [];

  constructor (public data: TableService, public visibleService: VisibleService){}
  
  

  ngOnInit(){
    this.table = this.data.newTable;
    console.log(this.table)
  }

  toggle() {
    this.visibleService.toggleShowDivModification();
  }

  toggleDivHome() {
    this.visibleService.toggleshowDivHome();
  }

 


}
