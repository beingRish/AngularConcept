import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-on-init-example',
  templateUrl: './on-init-example.component.html',
  styleUrls: ['./on-init-example.component.css']
})
export class OnInitExampleComponent implements OnInit{

  items: string[] = [];

  title = 'ngOnInit Example'

  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.dataService.getData().subscribe(
      {
        next: (data) => {
          this.items = data;
        },
        error: (error) => {
          console.error('There was an error', error);
          
        }
      }
    );
  }
}
