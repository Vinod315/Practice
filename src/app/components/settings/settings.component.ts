import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

  ischeckedvalue: string = '';

  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.ischeckedvalue = selectElement.value;
    console.log(this.ischeckedvalue);
    if(this.ischeckedvalue === 'Monday'){
      this.ischeckedvalue = 'Monday';
    }
    else if(this.ischeckedvalue === 'Tuesday'){
      this.ischeckedvalue = 'Tuesday';
    }
    else if(this.ischeckedvalue === 'Wednesday'){
      this.ischeckedvalue = 'Wednesday';
    }
    else if(this.ischeckedvalue === 'Thursday'){
      this.ischeckedvalue = 'Thursday';
    }
    else if(this.ischeckedvalue === 'Friday'){
      this.ischeckedvalue = 'Friday';
    }
    else if(this.ischeckedvalue === 'Saturday'){
      this.ischeckedvalue = 'Saturday';
    }
    else if(this.ischeckedvalue === 'Sunday'){
      this.ischeckedvalue = 'Sunday';
    }
    else{
      this.ischeckedvalue = 'System Default';
    }
  }

}
