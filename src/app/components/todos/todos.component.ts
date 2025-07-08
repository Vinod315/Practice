import { Component, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelpService } from '../../services/help.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-todos',
  imports: [FormsModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',

})


export class TodosComponent {
  countVisible: boolean = false;
  count = signal(0);
  el: boolean = false;

  tasks: string[] = [];
  newTask = "";

  Str = "";
  even = " ";
  e = "";

  constructor(private helpService: HelpService, private router: Router) { }
  ngOnINit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks)
    }
  }

  addClicked(task: any) {


    this.newTask = task;
    if (this.newTask.trim()!== "") {
      this.el = this.tasks.includes(this.newTask);
      if (this.el === false) {

        this.count.update((value) => value + 1);
        this.tasks.push(this.newTask);
        console.log("If block");
      } else if (this.el) {
        console.log("neasted else block");
        alert("This task already added in the TODO'S");

      }

      //  localStorage.setItem('task',JSON.stringify(this.task));
      // this.newTask=" ";
    }
    else {
      console.log("else block");
      alert("Task can not be Empty");
    }



  }

  deleteClicked() {
    this.tasks.push();
    console.log("Delete Button clicked");
    this.Str = "Delete Button clicked";
  }

  countCheck() {
    console.log("countCheck  Button clicked");
    this.countVisible = true;
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
