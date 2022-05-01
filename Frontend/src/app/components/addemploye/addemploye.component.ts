import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  postUser(addForm:any){
    addForm.value = +
    console.log(addForm.value);
    console.log("sabir");

    let checkedValue = document.querySelectorAll('.form-check-input:checked');
  }

}
