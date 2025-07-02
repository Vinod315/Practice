import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-register',
  imports: [DialogModule, ButtonModule, AvatarModule, InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  visible = false;

  showDialog() {
    this.visible = true;
  }
}
