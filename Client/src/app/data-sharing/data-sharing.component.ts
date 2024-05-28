import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.css']
})
export class DataSharingComponent {
  inputValue : any [] = [];

  persons = ['Ritik', 'Vishu', 'Bobby', 'Shakku', 'Antul', 'Shuryanshu', 'Ranjay', 'Prince']

  changeValue(){
    this.persons.forEach(person => {
      this.inputValue.push(person);
    })
  }
  
}
