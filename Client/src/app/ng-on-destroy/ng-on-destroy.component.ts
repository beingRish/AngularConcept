import { Component, NgZoneOptions, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ng-on-destroy',
  templateUrl: './ng-on-destroy.component.html',
  styleUrls: ['./ng-on-destroy.component.css']
})
export class NgOnDestroyComponent implements OnInit, OnDestroy{

  title = 'ngOnDestroy';

  items: string[] = [];
  private subscription? : Subscription;

  constructor( private dataService: DataService){}

  ngOnInit(): void {
    this.subscription = this.dataService.getData().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error(error);
        
      },
    });
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  
}
