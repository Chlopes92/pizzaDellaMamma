import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-number-table',
  templateUrl: './number-table.component.html',
  styleUrls: ['./number-table.component.css']
})
export class NumberTableComponent {

  isVisible = false;
  numberOfTable!: FormGroup;
  validationError: string [] = [];

  hideParagraph() {
    this.isVisible = true;
  }

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(){
    this.table();
  }

  table(){
    this.numberOfTable = this.formBuilder.group({
      number_table: [null, [Validators.required, Validators.pattern(/^(?:[1-9]|1[0-4])$/)]],
    })
  }

  acces(){
    this.validationError = [];
    console.log(this.numberOfTable.value);

    if(this.numberOfTable.invalid){
      Object.keys(this.numberOfTable.controls).forEach((input) =>{
        const currentInput = this.numberOfTable.get(input);
        if(currentInput && currentInput.status === "INVALID"){
          this.validationError.push(input);
        }
      })
      console.log(this.validationError)
    }else{
      this.router.navigate(['/products']);
    }
  }
}
      

