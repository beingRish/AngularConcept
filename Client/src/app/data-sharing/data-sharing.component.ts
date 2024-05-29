import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sharing',
  templateUrl: './data-sharing.component.html',
  styleUrls: ['./data-sharing.component.css']
})
export class DataSharingComponent {
  
  users = [
    {name: 'Rishabh', email: 'rish@gmail.com'},
    {name: 'Ritik', email: 'ritz@gmail.com'},
    {name: 'Vishwjeet', email: 'vishu@gmail.com'},
    {name: 'Shashank', email: 'shakku@gmail.com'},
    {name: 'Suryanshu', email: 'surya@gmail.com'},
  ]

  data = "x";
  updateData(item:string){
    this.data = item;
  }
  
}

