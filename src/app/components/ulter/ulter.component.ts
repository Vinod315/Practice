import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ulter',
  imports: [CommonModule],
  templateUrl: './ulter.component.html',
  styleUrl: './ulter.component.css'
})
export class UlterComponent {
  UlterVisible:boolean=false;
  ngOnInit(): void {
  window.addEventListener('focus', () => {
    this.UlterVisible = true;
  });
}

  

}
