import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ulter',
  imports: [CommonModule],
  templateUrl: './ulter.component.html',
  styleUrl: './ulter.component.css'
})

export class UlterComponent  {
  UlterVisible = false;

  ngOnInit(){
    // Trigger animation after component is rendered
    setTimeout(() => {
      this.UlterVisible = true;
    }, 200); // Slight delay so Tailwind can animate
  }
}


  

