import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})


export class TodosComponent {
  Str = "";
  even = " ";
  e = " ";
  addClicked() {
    console.log("Add Button clicked");
    this.Str = "Add Button clicked";

  }

  deleteClicked() {
    console.log("Delete Button clicked");
    this.Str = "Delete Button clicked";
  }

  updateClicked() {
    console.log("Update  Button clicked");
    this.Str = "Update Button clicked";
  }
  submitClicked(event: Event) {
    const current = event.target as HTMLTextAreaElement;
    this.Str = current.value;
    this.even = this.Str;

  }
  sub() {

    this.e = this.even;
    console.log("Submit clicked: "+ this.e);
  }
}
