import { Component } from '@angular/core';
import { HelpService } from '../../services/help.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 displayText:string='';
 constructor(private helpService: HelpService) {}

 ngOnInit() {
  this.helpService.textInput$.subscribe(text => {
    this.displayText = text;
    console.log(this.displayText);
  });
 }


}

