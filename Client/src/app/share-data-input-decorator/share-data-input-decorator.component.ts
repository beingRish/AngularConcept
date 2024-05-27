import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-share-data-input-decorator',
  templateUrl: './share-data-input-decorator.component.html',
  styleUrls: ['./share-data-input-decorator.component.css']
})
export class ShareDataInputDecoratorComponent {
  @Input() inputValue : any = '';

  
  
}
