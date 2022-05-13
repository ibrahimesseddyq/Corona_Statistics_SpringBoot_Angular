import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dataUser:any;
  constructor() { }

  setData(data:any){
    this.dataUser = data;
    localStorage.setItem('dataUser',JSON.stringify(this.dataUser));
    // this.getData(localStorage.getItem("visitedUser"));
    
  }
  getData(){
    return localStorage.getItem("dataUser");
  }
}
