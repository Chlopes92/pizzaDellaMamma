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

  // Message d'Erreur
  hideParagraph() {
    this.isVisible = true;
  }

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(){
    this.table();
  }

  // Valider si le numéro de table est compris entre 1 et 14
  table(){
    this.numberOfTable = this.formBuilder.group({
      number_table: [null, [Validators.required, Validators.pattern(/^(?:[1-9]|1[0-4])$/)]],
    })
  }

  // Si le numéro est bon on accèder au site sinon on reste sur la page d'accueil
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
      

