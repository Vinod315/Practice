import { Component } from '@angular/core';
import { HelpService } from '../../services/help.service';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-home',
  imports: [DialogModule , FormsModule, ButtonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
 displayText:string='';
 constructor(private helpService: HelpService) {}
 RegisterVisible:boolean=false;
 visible: boolean = false;
 Name="";
 Password="";
 Email="";
 Number="";



  login() {

    this.RegisterVisible=false;
    console.log("Login Btn clicked");

    this.visible = true;
  }

  register(){
    this.visible = false;

    console.log("register Btn clicked");
    this.RegisterVisible=true;
  }

  showlog(){
    console.log(this.Name);
    console.log(this.Password);
   





  }
  
  showReg(){
    console.log(this.Name);
    console.log(this.Password);
    console.log(this.Number);
    console.log(this.Email);





  }



 ngOnInit() {
  this.helpService.textInput$.subscribe(text => {
    this.displayText = text;
    console.log(this.displayText);
  });
 }


}

