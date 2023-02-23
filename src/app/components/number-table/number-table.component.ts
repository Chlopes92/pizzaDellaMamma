import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from 'src/app/services/table/table.service';
import { VisibleService } from 'src/app/services/visible/visible.service';

@Component({
  selector: 'app-number-table',
  templateUrl: './number-table.component.html',
  styleUrls: ['./number-table.component.css']
})
export class NumberTableComponent {

  isVisible: boolean = false;
  numberOfTable!: FormGroup;
  validationError: string [] = [];
  data: number = 0;
  //On appelle récupére le numéro obtenu dans le service
  modifyTable: number[] = this.Table.newTable;

  constructor(private formBuilder: FormBuilder, private router: Router, public Table: TableService, public visible: VisibleService){}



  ngOnInit(){
    this.table();
  
  }

  hideParagraph() {
    this.isVisible = true;
  }

  table(){
    this.numberOfTable = this.formBuilder.group({
      number_table: [null, [Validators.required, Validators.pattern(/^(?:[1-9]|1[0-4])$/)]],
    })
    
  }

  evenement(event: any) {
    this.data = event.target.value;
    console.log(this.data);
  }

  acces(){
    this.validationError = [];
    console.log('la table',this.numberOfTable.value);

    if(this.numberOfTable.invalid){
      Object.keys(this.numberOfTable.controls).forEach((input) =>{
        const currentInput = this.numberOfTable.get(input);
        if(currentInput && currentInput.status === "INVALID"){
          this.validationError.push(input);
        }
      })
      console.log(this.validationError)
    }else{
      //pusher dans le service
      this.Table.newTable.push(this.data);
      console.log(this.Table.newTable);
      this.router.navigate(['/products']);
    }
  }
}
      

