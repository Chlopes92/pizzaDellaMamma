import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  // Variable qui renvoit un tableau vide
  newTable: number[] = [];



   // Enregistre le numéro de Table dans le localstorage
   private saveTable(table: TableService){
  
    localStorage.setItem('table', JSON.stringify(table));
  }

  // Récupérer le numéro de Table dans le localstorage
  public getTable(){

    return localStorage.getItem("table");
  }

}
