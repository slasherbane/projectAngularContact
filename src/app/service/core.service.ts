import { Injectable } from '@angular/core';
import Contact from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

  getLocalIndex(index: string): any {
    return localStorage.getItem(index) == null ? this.setLocalIndex(index, []) : JSON.parse(localStorage.getItem(index) || "");

  }



  setLocalIndex(index: string, value: any) {


    let store: string = JSON.stringify(value);
    localStorage.setItem(index, store);
  }

  getContacts():Contact[] {
    return this.getLocalIndex("contacts") as unknown as Contact[];
  }
}
