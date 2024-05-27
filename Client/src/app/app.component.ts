import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice';

  inputValue : any = 23;

  changeValue(){
    this.inputValue *= this.inputValue;
    
  }
}
