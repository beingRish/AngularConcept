import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent {
  inputValue = 2323;
  generateRandomNumber(){
    this.inputValue = Math.floor(Math.random()*100);
  }
}