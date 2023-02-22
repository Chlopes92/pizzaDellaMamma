import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  // Variable qui renvoit un tableau vide
  newTable: number[] = [];
}
