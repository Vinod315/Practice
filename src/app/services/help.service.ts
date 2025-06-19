import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  private textInput = new BehaviorSubject<string>('');
  textInput$ = this.textInput.asObservable();

  setTextInput(text: string) {
    this.textInput.next(text);
  }

  constructor() { }
}
