import { Component,  inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelpService } from '../../services/help.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-todos',
  imports: [FormsModule,CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  
})


export class TodosComponent {
 
  task:string[]=[];
  newTask="";
  
  Str = "";
  even = " ";
  e = "";

  constructor(private helpService: HelpService, private router: Router) {}
ngOnINit(){
  const savedTasks=localStorage.getItem('tasks');
  if(savedTasks){
    this.task=JSON.parse(savedTasks)
  }
}

  addClicked(t:any){

   
    this.newTask=t;
    console.log(this.newTask)
    this.task.push(this.newTask);
     localStorage.setItem('task',JSON.stringify(this.task));
    

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
