import { Component,  inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelpService } from '../../services/help.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  
})


export class TodosComponent {
 
  // private Myserv=inject(MyserviceService);
  // m=this.Myserv.serv;
  
  Str = "";
  even = " ";
  e = "";

  constructor(private helpService: HelpService, private router: Router) {}

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
    this.helpService.setTextInput(this.e);
    this.router.navigate(['']);

    console.log("Submit clicked: " + this.e);

  }
}
