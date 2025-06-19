import { Component,Input,inject } from '@angular/core';
import { MyserviceService } from '../../myservice.service';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private Myserv=inject(MyserviceService);
  m=this.Myserv.serv;
 @Input() vofHome:any;
 
}

