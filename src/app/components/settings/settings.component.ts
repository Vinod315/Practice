import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {

  ischeckedvalue: string = '';

  Checked: boolean = false;
  Checked1: boolean = false;
  Checked2: boolean = false;
  Checked3: boolean = false;

  value: string = "";
  value1: string = "";
  value2: string = "";
  value3: string = "";



  //Event for Checkbox 

  isChecked(event: Event) {
    const Element = event.target as HTMLInputElement;
    this.Checked = Element.checked;
    this.value = this.Checked ? "New Task Will Add On Top " : " ";
    console.log(this.Checked);

  }


  //Event for Checkbox 1

  isChecked1(event: Event) {
    const Element = event.target as HTMLInputElement;
    this.Checked1 = Element.checked;
    this.value1 = this.Checked1 ? "Starred Aasks Assigned At Top " : " ";
    console.log(this.Checked);

  }

  //Event for Checkbox 2

  isChecked2(event: Event) {
    const Element = event.target as HTMLInputElement;
    this.Checked2 = Element.checked;
    this.value2 = this.Checked2 ? " Task Completion Sound Added " : " ";
    console.log(this.Checked2);

  }


  //Event for Checkbox 3

  isChecked3(event: Event) {
    const Element = event.target as HTMLInputElement;
    this.Checked3 = Element.checked;
    this.value3 = this.Checked3 ? "Reminder - After 24 Hours " : " ";
    console.log(this.Checked3);

  }

  themeElement1: boolean = false;
  themevalue = " ";

  themeElement2: boolean = false;


  themeElement3: boolean = false;
  

  theme1(theme: any) {
    const el1 = theme.target as HTMLInputElement;
    this.themeElement1 = el1.checked;
   this.themevalue= this.themeElement1?" Assigned Light Theme":" ";

  }
  theme2(theme: any) {
    const el2 = theme.target as HTMLInputElement;
    this.themeElement2 = el2.checked;
    this.themevalue= this.themeElement2 ?" Assigned Dark Theme":" ";

  }
  theme3(theme: any) {
    const el3= theme.target as HTMLInputElement;
    this.themeElement3 = el3.checked;
    this.themevalue =this.themeElement3? " Assigned Windows Theme": " ";
    

  }








  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.ischeckedvalue = selectElement.value;
    console.log(this.ischeckedvalue);
    if (this.ischeckedvalue === 'Monday') {
      this.ischeckedvalue = 'Monday';
    }
    else if (this.ischeckedvalue === 'Tuesday') {
      this.ischeckedvalue = 'Tuesday';
    }
    else if (this.ischeckedvalue === 'Wednesday') {
      this.ischeckedvalue = 'Wednesday';
    }
    else if (this.ischeckedvalue === 'Thursday') {
      this.ischeckedvalue = 'Thursday';
    }
    else if (this.ischeckedvalue === 'Friday') {
      this.ischeckedvalue = 'Friday';
    }
    else if (this.ischeckedvalue === 'Saturday') {
      this.ischeckedvalue = 'Saturday';
    }
    else if (this.ischeckedvalue === 'Sunday') {
      this.ischeckedvalue = 'Sunday';
    }
    else {
      this.ischeckedvalue = 'System Default';
    }
  }

}
