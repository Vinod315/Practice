import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})


export class TodosComponent {
   S=" ";

  addClicked() {
    this.S=" ";
    console.log("Add Button clicked");
    this.S+="Add Button clicked";

  }

  deleteClicked() {
    this.S=" ";
    console.log("Delete Button clicked");
    this.S+="Delete Button clicked";
  }

  updateClicked() {
    this.S=" ";
    console.log("Update  Button clicked");
    this.S+="Update Button clicked";
  }


}

