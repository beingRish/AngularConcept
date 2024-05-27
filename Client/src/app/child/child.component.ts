import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() inputValue?: number;
  currentValue: any = ''
  previousValue: any = ''

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['inputValue']) {
      this.currentValue = changes['inputValue'].currentValue;
      this.previousValue = changes['inputValue'].previousValue;
    }
  }

}

