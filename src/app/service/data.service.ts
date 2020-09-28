import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public hargaPokok: number;
  public hargaLevel1: number;
  public hargaLevel2: number;
  
  constructor() { }
}
