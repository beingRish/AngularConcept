import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  templateDrivenForm(){
    this.router.navigate(['/tdf'])
  }

  reactiveForm(){
    this.router.navigate(['/reactive'])
  }

}
