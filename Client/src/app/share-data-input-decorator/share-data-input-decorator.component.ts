import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-share-data-input-decorator',
  templateUrl: './share-data-input-decorator.component.html',
  styleUrls: ['./share-data-input-decorator.component.css']
})
export class ShareDataInputDecoratorComponent{

  @Input() item : {name: string, email: string} = {name:'', email:''};
  
}
