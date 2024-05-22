import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-check-example',
  templateUrl: './do-check-example.component.html',
  styleUrls: ['./do-check-example.component.css']
})
export class DoCheckExampleComponent implements DoCheck, OnInit{

  title = 'ngDoCheck Example'

  @Input() user?: {
    name: String,
    age: number
  };

  previousUser?: {
    name: String,
    age: number
  }

  ngDoCheck(): void {
    if(this.userHasChanged()){
      console.log('user object has changed');
      // Perform any necessary actions or updates 
    }
  }

  userHasChanged(): boolean {
    return this.user?.name !== this.previousUser?.name ||
        this.user?.age !== this.previousUser?.age;
  }

  ngOnInit(){
    if(this.user){
      this.previousUser = {
        ...this.user
      };
    }
  }

}
